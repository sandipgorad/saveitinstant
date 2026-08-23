import Seo from '../components/Seo.jsx'
import PageHero from '../components/PageHero.jsx'
import ThumbnailDownloader from '../components/ThumbnailDownloader.jsx'
import HowItWorks from '../components/HowItWorks.jsx'
import SupportedUrls from '../components/SupportedUrls.jsx'
import Faq from '../components/Faq.jsx'
import RelatedLinks from '../components/RelatedLinks.jsx'
import { Link } from 'react-router-dom'
import { ROUTES } from '../config/routes.js'

const RELATED = [
  {
    to: ROUTES.sizes,
    label: 'YouTube Thumbnail Sizes',
    description: 'Dimensions, aspect ratio, and available resolutions.',
  },
  {
    to: ROUTES.shorts,
    label: 'YouTube Shorts Thumbnail',
    description: 'Downloading thumbnails from Shorts links specifically.',
  },
  {
    to: ROUTES.howTo,
    label: 'How to Download a YouTube Thumbnail',
    description: 'Step-by-step for desktop, Android, and iPhone.',
  },
  {
    to: ROUTES.faq,
    label: 'Frequently asked questions',
    description: 'Common questions about resolutions, formats, and storage.',
  },
]

export default function ThumbnailDownloaderPage() {
  return (
    <>
      <Seo
        title="YouTube Thumbnail Downloader – Download YouTube Thumbnails"
        description="Download thumbnails from YouTube videos and Shorts by simply pasting the video URL. No software installation required."
        path={ROUTES.downloader}
      />

      <PageHero
        title="YouTube Thumbnail Downloader"
        intro="Paste a YouTube video or Shorts URL below to pull its thumbnail in every resolution YouTube has published for it."
      >
        {/* Scaled top margin for the embedded downloader tool */}
        <div className="mt-8">
          <ThumbnailDownloader />
        </div>
      </PageHero>

      <HowItWorks />
      <SupportedUrls />

      {/* Scaled section padding to py-[60px] and py-[70px] */}
      <section className="px-5 sm:px-6 py-[60px] sm:py-[70px] border-t border-line">
        <div className="max-w-content mx-auto">
          {/* Scaled wrapper to 900px */}
          <div className="max-w-[900px]">
            {/* Scaled heading to 16px */}
            <h2 className="text-[16px] font-medium text-ink-muted uppercase tracking-wide mb-6">
              Thumbnail resolutions
            </h2>
            {/* Scaled body text to 19px */}
            <p className="text-[19px] text-ink-soft leading-relaxed">
              Each video can have up to four thumbnail images at different pixel
              dimensions — HD (1280 × 720), Standard (640 × 480), Medium (480 × 360),
              and Small (320 × 180) — all served as JPEG files. These are different
              sizes YouTube generates, not different compression "quality" settings, and
              not every video has all four. See the full{' '}
              <Link to={ROUTES.sizes} className="text-accent hover:text-accent-dark underline underline-offset-2 font-medium">
                thumbnail sizes guide
              </Link>{' '}
              for details.
            </p>
          </div>
        </div>
      </section>

      <Faq />
      <RelatedLinks links={RELATED} />
    </>
  )
}