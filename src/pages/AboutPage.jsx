import Seo from '../components/Seo.jsx'
import PageHero from '../components/PageHero.jsx'
import { Link } from 'react-router-dom'
import { ROUTES } from '../config/routes.js'

export default function AboutPage() {
  return (
    <>
      <Seo
        title="About SaveitInstant"
        description="What SaveitInstant is, why it exists, and how it works — a simple, browser-based YouTube thumbnail downloader with no account required."
        path={ROUTES.about}
      />

      <PageHero title="About SaveitInstant" />

      {/* Scaled bottom padding */}
      <section className="px-5 sm:px-6 pb-16 sm:pb-20">
        <div className="max-w-content mx-auto">
          
          {/* Scaled wrapper from 720px to 900px, bumped font size to 19px, and increased spacing */}
          <div className="max-w-[900px] space-y-8 text-[19px] text-ink-soft leading-relaxed">
            <p>
              SaveitInstant is a small, browser-based tool for getting a YouTube video's
              thumbnail image. Paste a link, get the image, download it — that's the whole
              product.
            </p>
            <p>
              It exists because that task is more annoying than it should be: right-clicking
              a video player only gets you a frame from playback, not the actual thumbnail
              file, and most "solutions" involve installing something you didn't need.
              SaveitInstant reads the video ID out of the link you paste and fetches the
              thumbnail image directly from YouTube's own image servers — nothing gets
              uploaded, and no video is downloaded.
            </p>
            <p>
              There's no account system, no dashboard, and nothing saved between visits.
              SaveitInstant is built as the first in a small set of simple, single-purpose
              browser tools under the same name — more may be added later, but each one
              works the same way: paste a link, get what you need.
            </p>
            <p>
              SaveitInstant is an independent project and isn't affiliated with, endorsed by, or
              sponsored by YouTube or Google.
            </p>

            <div className="pt-3">
              {/* Scaled button: h-12, px-6, text-[17px], rounded-lg to match our other primary buttons */}
              <Link
                to={ROUTES.downloader}
                className="inline-flex items-center gap-2.5 h-12 px-6 text-[17px] font-medium text-paper bg-ink rounded-lg hover:bg-ink-soft transition-colors shadow-sm"
              >
                Try the downloader
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}