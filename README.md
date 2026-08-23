# SaveitInstant — YouTube Thumbnail Downloader

[SaveitInstant](https://saveitinstant.site) is a fast, simple, and free YouTube thumbnail downloader that lets users extract and download available thumbnail images from YouTube videos and Shorts.

Built with **React, Vite, Tailwind CSS, and React Router**, with a focus on speed, simplicity, accessibility, and SEO.

## 🌐 Live Website

**https://saveitinstant.site**

---

## ✨ Features

* Download YouTube video thumbnails in available resolutions
* Supports standard YouTube videos
* Supports YouTube Shorts
* Extract thumbnails directly from YouTube URLs
* Copy thumbnail URLs
* Responsive design for desktop and mobile
* Fast, lightweight client-side experience
* SEO-optimized informational pages
* No account or registration required

---

## 🚀 Getting Started

### Prerequisites

* Node.js 18+
* npm

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/sandipgorad/saveitinstant.git
cd saveitinstant
npm install
```

### Development

Start the local development server:

```bash
npm run dev
```

The application will normally be available at:

`http://localhost:5173`

---

## 📦 Production Build

Create an optimized production build:

```bash
npm run build
```

The generated files are placed in:

```text
dist/
```

To preview the production build locally:

```bash
npm run preview
```

---

## 🗺️ Routes

| Route                                | Description                                   |
| ------------------------------------ | --------------------------------------------- |
| `/`                                  | Homepage and thumbnail downloader             |
| `/youtube-thumbnail-downloader`      | Dedicated YouTube thumbnail downloader        |
| `/youtube-thumbnail-sizes`           | YouTube thumbnail dimensions and format guide |
| `/youtube-thumbnail-url`             | Video ID and thumbnail URL guide              |
| `/youtube-shorts-thumbnail`          | YouTube Shorts thumbnail downloader           |
| `/how-to-download-youtube-thumbnail` | YouTube thumbnail download tutorial           |
| `/faq`                               | Frequently asked questions                    |
| `/blog`                              | Resource and guide index                      |
| `/about`                             | About SaveitInstant                           |
| `/contact`                           | Contact information                           |
| `/privacy`                           | Privacy policy                                |
| `/terms`                             | Terms of use                                  |
| `*`                                  | Custom 404 page                               |

---

## 🧱 Technology Stack

* **React** — UI library
* **Vite** — Frontend build tool
* **Tailwind CSS** — Styling
* **React Router** — Client-side routing
* **Lucide React** — Icons

The downloader runs primarily on the client side and does not require users to create an account.

---

## 📁 Project Structure

```text
src/
├── pages/              Route-level page components
├── components/         Shared UI components
├── config/
│   ├── site.js         Site configuration and contact information
│   └── routes.js       Central route registry
├── data/
│   └── faqs.js         FAQ content
└── utils/
    ├── youtube.js      YouTube URL validation and thumbnail URL generation
    └── download.js     Thumbnail download and availability helpers

public/
├── robots.txt
├── sitemap.xml
├── og-cover.png
└── favicon.svg
```

---

## 🔎 SEO

SaveitInstant includes:

* Per-route page titles
* Meta descriptions
* Canonical URLs
* Open Graph metadata
* Twitter/X metadata
* `robots.txt`
* XML sitemap
* FAQ structured data
* Dedicated SEO-focused landing pages and guides

The production domain is configured as:

```text
https://saveitinstant.site
```

If the domain changes in the future, update the site configuration, canonical URLs, sitemap, and robots configuration accordingly.

---

## 🔀 SPA Routing & Deployment

SaveitInstant is a client-side routed single-page application.

The hosting provider must serve `index.html` for application routes so that direct visits and page refreshes work correctly.

### Vercel

The repository includes:

```text
vercel.json
```

with the required SPA routing configuration.

### Netlify

The repository also includes:

```text
public/_redirects
```

for SPA fallback support.

For other hosting providers, configure the server to rewrite application routes to:

```text
/index.html
```

---

## ⬇️ Download Behavior

SaveitInstant retrieves available YouTube thumbnail images and allows users to download them directly.

When browser/network restrictions prevent a direct download, the application provides a fallback that opens the thumbnail so the user can save it manually.

This behavior depends partly on browser security policies and the availability of the image host.

---

## 🧪 Testing & Pre-Deployment Checks

Before deploying changes, run:

```bash
npm ci
npm run check
```

The check command validates the YouTube URL handling and creates a production build.

### Manual verification

Before releasing a significant update, verify:

* Standard YouTube video URLs
* `youtu.be` URLs
* YouTube Shorts URLs
* YouTube Live URLs
* Invalid or non-YouTube URLs
* Videos without an available HD thumbnail
* Thumbnail downloads on desktop browsers
* Thumbnail downloads on mobile browsers
* Direct loading of every important route
* `/robots.txt`
* `/sitemap.xml`
* `/favicon.svg`

---

## 📧 Contact

For questions, bug reports, feedback, or suggestions:

**Email:** [saveitinstant@gmail.com](mailto:saveitinstant@gmail.com)

**X:** [@softwaredmind](https://x.com/softwaredmind)

---

## 📄 License

This project is proprietary unless otherwise stated.

The source code, branding, design, and website content are not licensed for redistribution or commercial reuse without permission from the project owner.

---

## ⚠️ Disclaimer

SaveitInstant is an independent third-party utility and is not affiliated with, endorsed by, or sponsored by YouTube or Google.

Users are responsible for ensuring that their use of downloaded content complies with applicable copyright laws, platform terms, and the rights of the content owner.

---

## 👤 Creator

Built and maintained by **Sandip Gorad**.

Website: **https://saveitinstant.site**

X: **@softwaredmind**
