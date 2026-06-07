// Step 2 of the GitHub OAuth flow for the CMS (/admin).
// Exchanges the ?code for an access token, then hands it back to the CMS
// window via postMessage using the Decap/Sveltia handshake protocol.

function renderResult(status, payload) {
  const message = `authorization:github:${status}:${JSON.stringify(payload)}`;
  return `<!doctype html><html><body><script>
    (function () {
      function receive(e) {
        window.opener && window.opener.postMessage(
          ${JSON.stringify(message)},
          e.origin
        );
        window.removeEventListener('message', receive, false);
      }
      window.addEventListener('message', receive, false);
      window.opener && window.opener.postMessage('authorizing:github', '*');
    })();
  </script></body></html>`;
}

export default async function handler(req, res) {
  const clientId = process.env.OAUTH_GITHUB_CLIENT_ID;
  const clientSecret = process.env.OAUTH_GITHUB_CLIENT_SECRET;
  if (!clientId || !clientSecret) {
    res.status(500).send('Missing OAUTH_GITHUB_CLIENT_ID / OAUTH_GITHUB_CLIENT_SECRET env vars');
    return;
  }

  const { code, state } = req.query;

  // CSRF check: state must match the cookie we set in /api/auth.
  const cookie = req.headers.cookie || '';
  const expected = cookie.match(/(?:^|;\s*)oauth_state=([^;]+)/)?.[1];
  if (!code || !state || !expected || state !== expected) {
    res.setHeader('Content-Type', 'text/html');
    res.status(400).send(renderResult('error', { message: 'Invalid OAuth state' }));
    return;
  }

  try {
    const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code,
      }),
    });
    const data = await tokenRes.json();

    res.setHeader('Set-Cookie', 'oauth_state=; Path=/; Max-Age=0');
    res.setHeader('Content-Type', 'text/html');

    if (data.error || !data.access_token) {
      res.status(400).send(
        renderResult('error', { message: data.error_description || 'Token exchange failed' })
      );
      return;
    }

    res.status(200).send(
      renderResult('success', { token: data.access_token, provider: 'github' })
    );
  } catch (err) {
    res.setHeader('Content-Type', 'text/html');
    res.status(500).send(renderResult('error', { message: String(err) }));
  }
}
