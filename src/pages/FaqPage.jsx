import Seo from '../components/Seo.jsx'
import PageHero from '../components/PageHero.jsx'
import Faq from '../components/Faq.jsx'
import RelatedLinks from '../components/RelatedLinks.jsx'
import { FAQS } from '../data/faqs.js'
import { ROUTES } from '../config/routes.js'

const RELATED = [
  { to: ROUTES.downloader, label: 'YouTube Thumbnail Downloader', description: 'Try it yourself.' },
  { to: ROUTES.sizes, label: 'YouTube Thumbnail Sizes', description: 'More detail on resolutions and formats.' },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
}

export default function FaqPage() {
  return (
    <>
      <Seo
        title="FAQ – YouTube Thumbnail Downloader | SaveitInstant"
        description="Answers to common questions about downloading YouTube thumbnails: resolutions, Shorts support, formats, storage, and troubleshooting invalid URLs."
        path={ROUTES.faq}
        jsonLd={faqJsonLd}
      />

      <PageHero title="Frequently asked questions" />
      <Faq showHeading={false} />
      <RelatedLinks links={RELATED} />
    </>
  )
}