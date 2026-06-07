// Step 2 of the GitHub OAuth flow for the CMS (/admin).
// Exchanges the ?code for an access token, then hands it back to the CMS
// window via postMessage using the Decap/Sveltia handshake protocol.
// We retry the initial 'authorizing:github' ping (in case the opener's
// listener attaches late) and let Sveltia close the popup on success.

function page({ state, content, heading, detail }) {
  const ok = state === 'success';
  return `<!doctype html><html><head><meta charset="utf-8" />
<style>
  body { font: 15px/1.5 system-ui, sans-serif; background:#0a0a0a; color:#ededed;
         display:flex; align-items:center; justify-content:center; height:100vh; margin:0; }
  .card { max-width: 380px; padding: 24px; text-align:center; }
  h1 { font-size: 17px; margin: 0 0 8px; color: ${ok ? '#4ade80' : '#f87171'}; }
  p { margin: 0; color: #a1a1a1; }
  #status { margin-top: 12px; font-size: 12px; color: #6b7280; }
</style></head>
<body><div class="card"><h1>${heading}</h1><p>${detail}</p><p id="status"></p></div>
<script>
  (function () {
    var statusEl = document.getElementById('status');
    function setStatus(t) { statusEl.textContent = t; }
    var content = ${JSON.stringify(content)};
    var message = 'authorization:github:${state}:' + JSON.stringify(content);

    if (!window.opener) {
      setStatus('No opener window detected — close this and use "Sign In Using Access Token".');
      return;
    }

    var done = false;
    window.addEventListener('message', function (e) {
      if (e.data === 'authorizing:github') {
        // Standard handshake reply (reply to the exact origin that pinged us).
        window.opener.postMessage(message, e.origin);
        done = true;
        setStatus('Handshake received — finishing…');
      }
    });

    // Drive the handshake AND post the result directly. The direct post covers
    // the case where the opener's reference to this popup was severed (so its
    // echo never arrives) — its message listener still receives our result and
    // validates our sender origin. targetOrigin '*' only reaches window.opener.
    var tries = 0;
    var timer = setInterval(function () {
      tries++;
      try {
        window.opener.postMessage('authorizing:github', '*');
        window.opener.postMessage(message, '*');
      } catch (_) {}
      setStatus('Connecting to editor… (' + tries + ')');
      if (done || tries >= 40) { // ~10s
        clearInterval(timer);
        if (!done) {
          setStatus('No response from editor window. Close this and use "Sign In Using Access Token".');
        }
      }
    }, 250);
  })();
</script></body></html>`;
}

export default async function handler(req, res) {
  res.setHeader('Content-Type', 'text/html');
  // Preserve the window.opener relationship for the postMessage handshake.
  res.setHeader('Cross-Origin-Opener-Policy', 'unsafe-none');

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
      detail: 'Signing you in…',
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
