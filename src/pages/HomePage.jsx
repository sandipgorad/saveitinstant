import Seo from '../components/Seo.jsx'
import Hero from '../components/Hero.jsx'
import HowItWorks from '../components/HowItWorks.jsx'
import Features from '../components/Features.jsx'
import SupportedUrls from '../components/SupportedUrls.jsx'
import SeoContent from '../components/SeoContent.jsx'
import Faq from '../components/Faq.jsx'
import RelatedLinks from '../components/RelatedLinks.jsx'
import { ROUTES } from '../config/routes.js'

const RESOURCE_LINKS = [
  {
    to: ROUTES.downloader,
    label: 'YouTube Thumbnail Downloader',
    description: 'The dedicated tool page, with everything on one page.',
  },
  {
    to: ROUTES.sizes,
    label: 'YouTube Thumbnail Sizes',
    description: 'Dimensions, aspect ratio, and format explained.',
  },
  {
    to: ROUTES.url,
    label: 'YouTube Thumbnail URL',
    description: 'How a video ID maps to a thumbnail address.',
  },
  {
    to: ROUTES.shorts,
    label: 'YouTube Shorts Thumbnail',
    description: 'Downloading thumbnails from Shorts links.',
  },
]

export default function HomePage() {
  return (
    <>
      <Seo
        title="YouTube Thumbnail Downloader – Download HD Thumbnails | SaveitInstant"
        description="Download YouTube thumbnails in HD and available resolutions. Paste any YouTube video or Shorts URL and get the thumbnail instantly with SaveitInstant."
        path={ROUTES.home}
      />
      <Hero />
      <HowItWorks />
      <Features />
      <SupportedUrls />
      <SeoContent />
      <Faq />
      <RelatedLinks title="More resources" links={RESOURCE_LINKS} />
    </>
  )
}