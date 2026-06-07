# Editing the site from the browser (`/admin`)

The site uses [Sveltia CMS](https://github.com/sveltia/sveltia-cms) — a
form-based admin panel. Go to **https://williampeytz.com/admin**, log in with
GitHub, and edit blog posts, projects, and courses. Saving commits to the
`main` branch of `WPeytz/PersonalWebsite`, which triggers a Vercel redeploy.

Content is still plain Markdown/JSON in the repo — no lock-in, no database.

## One-time setup

Auth uses a GitHub OAuth App + two serverless functions (`api/auth.js`,
`api/callback.js`). To make `/admin` work in production:

### 1. Create a GitHub OAuth App
- Go to https://github.com/settings/developers → **New OAuth App**
- **Application name:** `williampeytz.com CMS` (anything)
- **Homepage URL:** `https://williampeytz.com`
- **Authorization callback URL:** `https://williampeytz.com/api/callback`
- Click **Register**, then **Generate a new client secret**
- Copy the **Client ID** and **Client secret**

### 2. Add env vars in Vercel
In the Vercel project → **Settings → Environment Variables**, add (Production):
- `OAUTH_GITHUB_CLIENT_ID` = the Client ID
- `OAUTH_GITHUB_CLIENT_SECRET` = the Client secret

Redeploy so the functions pick up the vars.

### 3. Done
Visit `/admin`, click **Sign in with GitHub**, authorize, and edit away.

## Notes
- Only collaborators on the repo can actually save (GitHub enforces this).
- Uploaded images land in `public/uploads/` and are served from `/uploads/...`.
- Courses live in `src/data/courses.json` (edited under **Site data → Courses**);
  `src/data/courses.ts` just types and re-exports them for the pages.
