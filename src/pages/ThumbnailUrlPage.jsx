import Seo from '../components/Seo.jsx'
import PageHero from '../components/PageHero.jsx'
import RelatedLinks from '../components/RelatedLinks.jsx'
import { Link } from 'react-router-dom'
import { ROUTES } from '../config/routes.js'

const RELATED = [
  {
    to: ROUTES.downloader,
    label: 'YouTube Thumbnail Downloader',
    description: 'Paste a link and get the thumbnail without doing this by hand.',
  },
  {
    to: ROUTES.sizes,
    label: 'YouTube Thumbnail Sizes',
    description: 'What each of these endpoint URLs actually returns.',
  },
]

export default function ThumbnailUrlPage() {
  return (
    <>
      <Seo
        title="YouTube Thumbnail URL – How to Get a Thumbnail Link"
        description="How a YouTube video ID relates to its thumbnail image address, with a real example, and how to get one without doing it manually."
        path={ROUTES.url}
      />

      <PageHero
        eyebrow="Guide"
        title="YouTube Thumbnail URL"
        intro="Every YouTube thumbnail lives at a predictable web address built from the video's ID. Here's how that works."
      />

      {/* Scaled bottom padding */}
      <section className="px-5 sm:px-6 pb-16 sm:pb-20">
        <div className="max-w-content mx-auto">
          
          {/* Scaled wrapper from 720px to 900px, and increased spacing to space-y-10 */}
          <div className="max-w-[900px] space-y-10 text-[19px] text-ink-soft leading-relaxed">
            <div>
              {/* Scaled subheadings to 22px */}
              <h2 className="text-[22px] font-semibold text-ink mb-2">
                1. A YouTube URL contains a video ID
              </h2>
              <p>
                Every YouTube video has an 11-character ID. It shows up in the video's URL,
                whichever format that URL takes:
              </p>
              {/* Scaled code box: rounded-xl, p-5, text-[17px] */}
              <div className="mt-4 border border-line rounded-xl bg-white p-5 font-mono text-[17px] text-ink break-all shadow-sm">
                https://youtu.be/dy8VetlMgLw
              </div>
              <p className="mt-4">
                In this example, the ID is <code className="font-mono text-[17px] bg-line-soft px-1.5 py-0.5 rounded">dy8VetlMgLw</code>.
                Tracking parameters like <code className="font-mono text-[16px]">?si=bRJhUf5Y-t5Upadc</code> can
                appear after it — they identify how the link was shared, not the video
                itself, and don't affect the thumbnail.
              </p>
            </div>

            <div>
              <h2 className="text-[22px] font-semibold text-ink mb-2">
                2. The ID identifies the thumbnail image too
              </h2>
              <p>
                YouTube's image servers host each video's thumbnail at a URL built from that
                same ID. The general pattern looks like this:
              </p>
              {/* Scaled code box: rounded-xl, p-5, text-[17px] */}
              <div className="mt-4 border border-line rounded-xl bg-white p-5 font-mono text-[17px] text-ink break-all shadow-sm">
                https://i.ytimg.com/vi/&lt;VIDEO_ID&gt;/maxresdefault.jpg
              </div>
              <p className="mt-4">
                Swap in the ID from the example above and it becomes a working image
                address — one JPEG file, nothing else attached to it.
              </p>
            </div>

            <div>
              <h2 className="text-[22px] font-semibold text-ink mb-2">
                3. What this is useful for
              </h2>
              <p>
                Knowing this pattern explains why a thumbnail downloader doesn't need to
                touch the video itself: it only reads the ID out of a URL you paste and
                checks which image sizes exist for it. This site doesn't scrape YouTube
                pages, store video data, or access anything beyond that one public image
                file per request.
              </p>
            </div>

            <div className="pt-4">
              {/* Scaled primary button: h-12, px-6, text-[17px], rounded-lg */}
              <Link
                to={ROUTES.downloader}
                className="inline-flex items-center gap-2.5 h-12 px-6 text-[17px] font-medium text-paper bg-ink rounded-lg hover:bg-ink-soft transition-colors shadow-sm"
              >
                Get a thumbnail now
              </Link>
            </div>
          </div>
        </div>
      </section>

      <RelatedLinks links={RELATED} />
    </>
  )
}