# SaveitInstant — YouTube Thumbnail Downloader

A production-ready YouTube thumbnail downloader built with React, Vite, Tailwind CSS,
and React Router.

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

Output goes to `dist/`. Preview it locally with:

```bash
npm run preview
```

## Routes

```
/                                     Homepage + downloader
/youtube-thumbnail-downloader         Dedicated downloader landing page
/youtube-thumbnail-sizes              Thumbnail dimensions/format guide
/youtube-thumbnail-url                Video ID → thumbnail URL explainer
/youtube-shorts-thumbnail             Shorts-specific downloader page
/how-to-download-youtube-thumbnail    Tutorial (desktop/Android/iPhone/Shorts)
/faq                                  FAQ (with FAQPage structured data)
/blog                                 Resource index linking the 4 guides above
/about                                About SaveitInstant
/contact                              Contact (mailto — no fake form)
/privacy                              Privacy policy
/terms                                Terms of use
*                                     404 page
```

## ⚠️ Deployment: SPA fallback required

This is a client-side-routed single-page app. Your host must serve `index.html` for
**every** route (not just `/`), or a direct visit or refresh on `/faq`, `/blog`, etc.
will 404 at the server level before React Router ever runs.

Included out of the box:

- **Netlify**: `public/_redirects` (already present — `/* /index.html 200`)
- **Vercel**: `vercel.json` (already present)

Configure manually if you're on something else:

- **Nginx**: `try_files $uri /index.html;`
- **Apache**: an `.htaccess` rewrite to `index.html`

## SEO notes

- Per-route `<title>`, meta description, canonical URL, and Open Graph/Twitter tags
  are set client-side by `src/components/Seo.jsx` (no extra dependency). This is
  read correctly by Googlebot (which executes JS), but bots that only read the raw
  HTML response (some social-preview scrapers) will see the homepage's static tags
  from `index.html` regardless of route. If that matters for your use case, the
  fix is prerendering or SSR (e.g. a static-site generator, or a prerendering
  service) — out of scope for this pass since it would mean changing the framework.
- `public/sitemap.xml` and `public/robots.txt` list only the 12 real routes above.
- Update `https://saveitinstant.site` throughout (`index.html`, `src/config/site.js`,
  `public/robots.txt`, `public/sitemap.xml`) if the real domain differs.
- `public/og-cover.png` is a real generated image, not a placeholder — regenerate
  it if the brand copy changes.

## Project structure

```
src/
  pages/            One component per route
  components/       Shared UI (Navbar, Footer, Layout, Seo, ThumbnailDownloader, ...)
  config/
    site.js         SITE_URL, SITE_NAME, contact email
    routes.js       Central path registry used by nav, links, and pages
  data/
    faqs.js         Single source of truth for FAQ content
  utils/
    youtube.js      URL validation, video ID extraction, thumbnail URL builder
    download.js     Blob-based download helper + image availability check
public/
  robots.txt
  sitemap.xml
  og-cover.png
  favicon.svg
```

## Before deploying

- Set up real mail delivery for the contact address in `src/config/site.js`
  (`saveitinstant@gmail.com` by default).
- Configure SPA fallback on your host (see above) — without it, every route
  except `/` will 404.
- Swap in the real domain if it isn't `saveitinstant.site`.

## Notes on the download flow

Downloading a cross-origin image only works when the image host sends
permissive CORS headers. `i.ytimg.com` generally does, so the app downloads the
file directly as a blob. If a browser or network blocks that, the app falls
back to opening the image in a new tab so the user can still save it manually.

## Pre-launch checks

Run these locally or in CI before deploying:

```bash
npm ci
npm run check
```

`npm run check` runs the YouTube URL regression tests and a production Vite build.

Before launch, also verify the deployed site manually with:
- a normal `youtube.com/watch?v=...` URL
- a `youtu.be/...` URL
- a Shorts URL
- an invalid/non-YouTube URL
- a video without an HD thumbnail
- downloads on Chrome desktop and mobile Safari/Chrome
- direct loading of every SPA route
- `/robots.txt`, `/sitemap.xml`, and `/favicon.svg`

