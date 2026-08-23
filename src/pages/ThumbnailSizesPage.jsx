import Seo from '../components/Seo.jsx'
import PageHero from '../components/PageHero.jsx'
import RelatedLinks from '../components/RelatedLinks.jsx'
import { Link } from 'react-router-dom'
import { ROUTES } from '../config/routes.js'

const ROWS = [
  { endpoint: 'maxresdefault', dims: '1280 × 720', note: 'Highest available — not generated for every video' },
  { endpoint: 'sddefault', dims: '640 × 480', note: 'Standard-definition frame, widely available' },
  { endpoint: 'hqdefault', dims: '480 × 360', note: 'Almost always available' },
  { endpoint: 'mqdefault', dims: '320 × 180', note: 'Smaller preview size' },
  { endpoint: 'default', dims: '120 × 90', note: 'Small preview, effectively always available' },
]

const RELATED = [
  {
    to: ROUTES.downloader,
    label: 'YouTube Thumbnail Downloader',
    description: 'Download any of these sizes for a specific video.',
  },
  {
    to: ROUTES.url,
    label: 'YouTube Thumbnail URL',
    description: 'How the video ID builds these image addresses.',
  },
]

export default function ThumbnailSizesPage() {
  return (
    <>
      <Seo
        title="YouTube Thumbnail Size & Dimensions Guide | SaveitInstant"
        description="A clear guide to YouTube thumbnail dimensions, aspect ratio, and file format — including why the highest-resolution thumbnail isn't always available."
        path={ROUTES.sizes}
      />

      <PageHero
        eyebrow="Guide"
        title="YouTube Thumbnail Size & Dimensions"
        intro="What size YouTube thumbnails actually are, why the available sizes vary by video, and how dimensions differ from image compression quality."
      />

      {/* Scaled bottom padding */}
      <section className="px-5 sm:px-6 pb-16 sm:pb-20">
        <div className="max-w-content mx-auto">
          
          {/* Scaled wrapper from 720px to 900px, and increased spacing to space-y-10 */}
          <div className="max-w-[900px] space-y-10 text-[19px] text-ink-soft leading-relaxed">
            <div>
              {/* Scaled subheadings to 22px */}
              <h2 className="text-[22px] font-semibold text-ink mb-2">
                Aspect ratio and largest size
              </h2>
              <p>
                YouTube thumbnails are 16:9, matching the player itself. The largest one
                YouTube generates is 1280 × 720 pixels — this is the file most people mean
                when they ask for an "HD thumbnail."
              </p>
            </div>

            <div>
              <h2 className="text-[22px] font-semibold text-ink mb-2">
                Dimensions vs. compression quality
              </h2>
              <p>
                It's worth separating two different things that both get called "quality."{' '}
                <strong className="text-ink font-semibold">Dimensions</strong> refers to the pixel size of
                the image — 1280 × 720 versus 480 × 360, for example. Image{' '}
                <strong className="text-ink font-semibold">compression quality</strong> refers to how much
                a JPEG has been compressed at a given size, which affects file size and
                visible artifacts but not the pixel dimensions. YouTube's own endpoint names
                (like <code className="font-mono text-[17px] bg-line-soft px-1.5 py-0.5 rounded">hqdefault</code>,
                short for "high quality default") use the word "quality," but what actually
                changes between them is the pixel dimensions, not a compression setting you
                can control.
              </p>
            </div>

            <div>
              <h2 className="text-[22px] font-semibold text-ink mb-2">
                Available thumbnail dimensions
              </h2>
              <p className="mb-6">
                Every YouTube video has a set of thumbnail images available at fixed URLs,
                built from the video's ID. Here's what's typically available:
              </p>

              {/* Scaled table wrapper to rounded-xl */}
              <div className="border border-line rounded-xl overflow-x-auto shadow-sm">
                <table className="w-full text-[17px] border-collapse">
                  <thead>
                    <tr className="bg-line-soft/60 text-[15px] font-medium text-ink-muted uppercase tracking-wide">
                      <th className="text-left px-5 py-4 border-b border-line-soft">Endpoint</th>
                      <th className="text-left px-5 py-4 border-b border-line-soft">Typical dimensions</th>
                      <th className="text-left px-5 py-4 border-b border-line-soft">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ROWS.map((row, i) => (
                      <tr key={row.endpoint} className={i !== ROWS.length - 1 ? 'border-b border-line-soft' : ''}>
                        <td className="px-5 py-4 font-mono text-ink">{row.endpoint}</td>
                        <td className="px-5 py-4 font-mono text-ink-muted">{row.dims}</td>
                        <td className="px-5 py-4 text-ink-muted">{row.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {/* Scaled note text */}
              <p className="mt-4 text-[16px] text-ink-faint">
                Actual availability varies by video. maxresdefault in particular is only
                generated when the source video was uploaded at a high enough resolution.
              </p>
            </div>

            <div>
              <h2 className="text-[22px] font-semibold text-ink mb-2">File format</h2>
              <p>
                The publicly served thumbnail files are JPEG images. Creators can upload a
                custom thumbnail in JPG, PNG, or non-animated GIF through YouTube Studio,
                but YouTube re-encodes it, so the public thumbnail URLs — the ones this site
                reads — are always JPEG regardless of the original file.
              </p>
            </div>

            <div className="pt-4">
              {/* Scaled primary button: h-12, px-6, text-[17px], rounded-lg */}
              <Link
                to={ROUTES.downloader}
                className="inline-flex items-center gap-2.5 h-12 px-6 text-[17px] font-medium text-paper bg-ink rounded-lg hover:bg-ink-soft transition-colors shadow-sm"
              >
                Try the thumbnail downloader
              </Link>
            </div>
          </div>
        </div>
      </section>

      <RelatedLinks links={RELATED} />
    </>
  )
}