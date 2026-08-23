import Seo from '../components/Seo.jsx'
import PageHero from '../components/PageHero.jsx'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { ROUTES } from '../config/routes.js'

const ARTICLES = [
  {
    to: ROUTES.howTo,
    title: 'How to Download a YouTube Thumbnail in HD',
    description:
      'Step-by-step instructions for desktop, Android, and iPhone, plus a note on Shorts.',
  },
  {
    to: ROUTES.sizes,
    title: 'YouTube Thumbnail Size & Dimensions Guide',
    description:
      'What size YouTube thumbnails actually are, and how dimensions differ from compression quality.',
  },
  {
    to: ROUTES.url,
    title: 'YouTube Thumbnail URL – How to Get a Thumbnail Link',
    description: 'How a video ID relates to its thumbnail image address, with a real example.',
  },
  {
    to: ROUTES.shorts,
    title: 'How to Download YouTube Shorts Thumbnails',
    description: 'Why Shorts links work the same way as regular videos, and how to save one.',
  },
]

export default function BlogPage() {
  return (
    <>
      <Seo
        title="Blog & Resources | SaveitInstant"
        description="Practical guides on YouTube thumbnails — dimensions, URLs, Shorts support, and step-by-step download instructions."
        path={ROUTES.blog}
      />

      <PageHero
        eyebrow="Resources"
        title="Blog"
        intro="Short, practical guides related to the thumbnail downloader — no filler."
      />

      {/* Scaled bottom padding */}
      <section className="px-5 sm:px-6 pb-16 sm:pb-20">
        <div className="max-w-content mx-auto">
          
          {/* Scaled wrapper from 720px to 900px */}
          <ul className="max-w-[900px] divide-y divide-line-soft border-t border-b border-line-soft">
            {ARTICLES.map((article) => (
              <li key={article.to}>
                <Link
                  to={article.to}
                  // Increased padding to py-6 for a larger touch target
                  className="group flex items-start justify-between gap-5 py-6 hover:text-accent-dark transition-colors"
                >
                  <span>
                    {/* Scaled title from 15.5px to 19px */}
                    <span className="block text-[19px] font-medium text-ink group-hover:text-accent-dark transition-colors">
                      {article.title}
                    </span>
                    {/* Scaled description from 13.5px to 16px */}
                    <span className="block mt-1.5 text-[16px] text-ink-muted leading-relaxed">
                      {article.description}
                    </span>
                  </span>
                  
                  {/* Scaled icon from 16 to 19 */}
                  <ArrowRight
                    size={19}
                    className="shrink-0 mt-1.5 text-ink-faint group-hover:text-accent-dark group-hover:translate-x-1 transition-all"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}