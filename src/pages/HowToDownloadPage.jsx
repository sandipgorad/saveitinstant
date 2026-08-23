import Seo from '../components/Seo.jsx'
import PageHero from '../components/PageHero.jsx'
import RelatedLinks from '../components/RelatedLinks.jsx'
import { Link } from 'react-router-dom'
import { ROUTES } from '../config/routes.js'

const DESKTOP_STEPS = [
  'Open the video on YouTube.',
  'Copy its URL from the address bar (or use the Share button).',
  `Open SaveitInstant's downloader.`,
  'Paste the URL into the input.',
  'Press "Get Thumbnail."',
  'Choose the resolution you want.',
  'Click "Download."',
]

const ANDROID_STEPS = [
  'Open the video in the YouTube app.',
  'Tap Share, then Copy link.',
  'Open SaveitInstant in your browser and tap Paste.',
  'Tap "Get Thumbnail," then download the size you need.',
]

const IPHONE_STEPS = [
  'Open the video in the YouTube app.',
  'Tap Share, then Copy Link.',
  'Open SaveitInstant in Safari and tap Paste.',
  'Tap "Get Thumbnail," then download the size you need.',
]

const RELATED = [
  { to: ROUTES.downloader, label: 'YouTube Thumbnail Downloader', description: 'Use the tool described above.' },
  { to: ROUTES.shorts, label: 'YouTube Shorts Thumbnail', description: 'The Shorts-specific walkthrough.' },
  { to: ROUTES.faq, label: 'FAQ', description: 'Answers to common questions.' },
]

function StepList({ steps }) {
  return (
    // Scaled list spacing to space-y-3.5
    <ol className="mt-4 space-y-3.5">
      {steps.map((step, i) => (
        <li key={step} className="flex gap-4">
          {/* Scaled step number: font-mono, text-[16px], width w-7 */}
          <span className="font-mono text-[16px] text-accent shrink-0 w-7">{String(i + 1).padStart(2, '0')}</span>
          {/* Scaled step description text to 19px */}
          <span className="text-[19px] text-ink-soft leading-relaxed">{step}</span>
        </li>
      ))}
    </ol>
  )
}

export default function HowToDownloadPage() {
  return (
    <>
      <Seo
        title="How to Download a YouTube Thumbnail in HD"
        description="Step-by-step instructions for downloading a YouTube thumbnail in HD on desktop, Android, and iPhone — plus YouTube Shorts."
        path={ROUTES.howTo}
      />

      <PageHero
        eyebrow="Tutorial"
        title="How to Download a YouTube Thumbnail in HD"
        intro="The same three steps work everywhere — copy the link, paste it into SaveitInstant, download the image. Here's the version for each device."
      />

      {/* Scaled bottom padding */}
      <section className="px-5 sm:px-6 pb-16 sm:pb-20">
        <div className="max-w-content mx-auto">
          
          {/* Scaled wrapper from 720px to 900px, and increased section gap to space-y-12 */}
          <div className="max-w-[900px] space-y-12">
            <div>
              {/* Scaled device subheadings to 22px */}
              <h2 className="text-[22px] font-semibold text-ink mb-2">Desktop</h2>
              <StepList steps={DESKTOP_STEPS} />
            </div>

            <div>
              <h2 className="text-[22px] font-semibold text-ink mb-2">Android</h2>
              <StepList steps={ANDROID_STEPS} />
            </div>

            <div>
              <h2 className="text-[22px] font-semibold text-ink mb-2">iPhone</h2>
              <StepList steps={IPHONE_STEPS} />
            </div>

            <div>
              <h2 className="text-[22px] font-semibold text-ink mb-2">YouTube Shorts</h2>
              {/* Scaled body text to 19px */}
              <p className="text-[19px] text-ink-soft leading-relaxed mt-2">
                Shorts work the same way — copy the Shorts link from the share menu and
                paste it in. See the{' '}
                <Link to={ROUTES.shorts} className="text-accent hover:text-accent-dark underline underline-offset-2 font-medium">
                  Shorts thumbnail page
                </Link>{' '}
                for a dedicated walkthrough.
              </p>
            </div>

            <div className="pt-4">
              {/* Scaled primary button: h-12, px-6, text-[17px], rounded-lg */}
              <Link
                to={ROUTES.downloader}
                className="inline-flex items-center gap-2.5 h-12 px-6 text-[17px] font-medium text-paper bg-ink rounded-lg hover:bg-ink-soft transition-colors shadow-sm"
              >
                Open the downloader
              </Link>
            </div>
          </div>
        </div>
      </section>

      <RelatedLinks links={RELATED} />
    </>
  )
}