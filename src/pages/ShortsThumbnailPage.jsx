import Seo from '../components/Seo.jsx'
import PageHero from '../components/PageHero.jsx'
import ThumbnailDownloader from '../components/ThumbnailDownloader.jsx'
import RelatedLinks from '../components/RelatedLinks.jsx'
import { ROUTES } from '../config/routes.js'

const STEPS = [
  { n: '01', title: 'Copy the Shorts link', body: "From the share button, or straight from your browser's address bar." },
  { n: '02', title: 'Paste it above', body: 'Shorts links are recognized automatically, the same as regular videos.' },
  { n: '03', title: 'Download the thumbnail', body: 'Preview it, then save the resolution you need.' },
]

const RELATED = [
  {
    to: ROUTES.downloader,
    label: 'YouTube Thumbnail Downloader',
    description: 'The same tool, for regular YouTube videos.',
  },
  {
    to: ROUTES.sizes,
    label: 'YouTube Thumbnail Sizes',
    description: 'Dimensions and formats available for any video.',
  },
]

export default function ShortsThumbnailPage() {
  return (
    <>
      <Seo
        title="YouTube Shorts Thumbnail Downloader | SaveitInstant"
        description="Download the thumbnail from any YouTube Shorts video. Paste a youtube.com/shorts/ link and get the image in seconds."
        path={ROUTES.shorts}
      />

      <PageHero
        eyebrow="Shorts"
        title="YouTube Shorts Thumbnail Downloader"
        intro="SaveitInstant reads Shorts links the same way it reads regular video links — paste one in below."
      >
        <div className="mt-8">
          <ThumbnailDownloader />
        </div>
      </PageHero>

      {/* Scaled section padding to py-[60px] and py-[70px] */}
      <section className="px-5 sm:px-6 py-[60px] sm:py-[70px] border-t border-line">
        <div className="max-w-content mx-auto">
          {/* Scaled wrapper to 900px */}
          <div className="max-w-[900px]">
            {/* Scaled heading to 16px */}
            <h2 className="text-[16px] font-medium text-ink-muted uppercase tracking-wide mb-8">
              How it works
            </h2>
            <ol className="grid sm:grid-cols-3 gap-8 sm:gap-6">
              {STEPS.map((step) => (
                <li key={step.n} className="flex gap-4 sm:block">
                  {/* Scaled step numbers to 16px */}
                  <span className="font-mono text-[16px] text-accent shrink-0 sm:block sm:mb-3">
                    {step.n}
                  </span>
                  <div>
                    {/* Scaled step title to 19px */}
                    <h3 className="text-[19px] font-medium text-ink">{step.title}</h3>
                    {/* Scaled body text to 16px */}
                    <p className="mt-2 text-[16px] text-ink-muted leading-relaxed">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Scaled bottom padding */}
      <section className="px-5 sm:px-6 pb-16 sm:pb-20">
        <div className="max-w-content mx-auto">
          {/* Scaled wrapper to 900px and text to 19px */}
          <div className="max-w-[900px] text-[19px] text-ink-soft leading-relaxed">
            <p>
              Shorts links use a distinct URL pattern —{' '}
              <code className="font-mono text-[17px] bg-line-soft px-1.5 py-0.5 rounded">
                youtube.com/shorts/VIDEO_ID
              </code>{' '}
              — but the video ID means the same thing it does everywhere else on YouTube, so
              the underlying thumbnail lookup is identical. Availability of the HD size still
              depends on the individual video, exactly as with regular uploads.
            </p>
          </div>
        </div>
      </section>

      <RelatedLinks links={RELATED} />
    </>
  )
}