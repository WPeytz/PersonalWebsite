// Step 2 of the GitHub OAuth flow for the CMS (/admin).
// Exchanges the ?code for an access token, then hands it back to the CMS
// window via postMessage using the Decap/Sveltia handshake protocol.
// Handshake mirrors the reference implementation (sveltia-cms-auth):
// post 'authorizing:github', then reply to the CMS's echo with the result.
// We do NOT close the popup ourselves — Sveltia closes it on success.

function page({ state, content, heading, detail }) {
  const ok = state === 'success';
  return `<!doctype html><html><head><meta charset="utf-8" />
<style>
  body { font: 15px/1.5 system-ui, sans-serif; background:#0a0a0a; color:#ededed;
         display:flex; align-items:center; justify-content:center; height:100vh; margin:0; }
  .card { max-width: 360px; padding: 24px; text-align:center; }
  h1 { font-size: 17px; margin: 0 0 8px; color: ${ok ? '#4ade80' : '#f87171'}; }
  p { margin: 0; color: #a1a1a1; }
</style></head>
<body><div class="card"><h1>${heading}</h1><p>${detail}</p></div>
<script>
  (function () {
    var content = ${JSON.stringify(content)};
    var message = 'authorization:github:${state}:' + JSON.stringify(content);
    window.addEventListener('message', function (e) {
      if (e.data === 'authorizing:github') {
        window.opener && window.opener.postMessage(message, e.origin);
      }
    });
    window.opener && window.opener.postMessage('authorizing:github', '*');
  })();
</script></body></html>`;
}

export default async function handler(req, res) {
  res.setHeader('Content-Type', 'text/html');

  const clientId = process.env.OAUTH_GITHUB_CLIENT_ID;
  const clientSecret = process.env.OAUTH_GITHUB_CLIENT_SECRET;
  if (!clientId || !clientSecret) {
    res.status(500).send(page({
      state: 'error',
      content: { provider: 'github', error: 'Missing OAuth env vars' },
      heading: 'Configuration error',
      detail: 'OAUTH_GITHUB_CLIENT_ID / OAUTH_GITHUB_CLIENT_SECRET are not set in Vercel. Add them and redeploy.',
    }));
    return;
  }

  const { code, state } = req.query;

  // CSRF check: state must match the cookie we set in /api/auth.
  const cookie = req.headers.cookie || '';
  const expected = cookie.match(/(?:^|;\s*)oauth_state=([^;]+)/)?.[1];
  if (!code || !state || !expected || state !== expected) {
    res.status(400).send(page({
      state: 'error',
      content: { provider: 'github', error: 'Invalid OAuth state' },
      heading: 'Login failed',
      detail: 'OAuth state check failed (missing code or state cookie mismatch). Try signing in again.',
    }));
    return;
  }

  try {
    const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ client_id: clientId, client_secret: clientSecret, code }),
    });
    const data = await tokenRes.json();

    res.setHeader('Set-Cookie', 'oauth_state=; Path=/; Max-Age=0');

    if (data.error || !data.access_token) {
      res.status(400).send(page({
        state: 'error',
        content: { provider: 'github', error: data.error_description || 'Token exchange failed' },
        heading: 'Login failed',
        detail: data.error_description || data.error || 'GitHub did not return an access token. Check the client secret.',
      }));
      return;
    }

    res.status(200).send(page({
      state: 'success',
      content: { provider: 'github', token: data.access_token },
      heading: 'Authenticated ✓',
      detail: 'Signing you in… this window will close automatically.',
    }));
  } catch (err) {
    res.status(500).send(page({
      state: 'error',
      content: { provider: 'github', error: String(err) },
      heading: 'Login failed',
      detail: String(err),
    }));
  }
}
