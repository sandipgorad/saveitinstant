import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Seo from '../components/Seo.jsx'
import { ROUTES } from '../config/routes.js'

export default function NotFoundPage() {
  return (
    <>
      <Seo
        title="Page Not Found | SaveitInstant"
        description="This page doesn't exist. Head back to the YouTube thumbnail downloader."
        path="/404"
        noindex
      />

      {/* Scaled vertical padding for a spacious, balanced error layout */}
      <section className="px-5 sm:px-6 py-24 sm:py-32">
        <div className="max-w-content mx-auto">
          
          {/* Scaled wrapper from 720px to 900px to match all other pages */}
          <div className="max-w-[900px]">
            
            {/* Scaled 404 badge text from 13px to 16px */}
            <p className="font-mono text-[16px] text-accent mb-3 uppercase tracking-wide">404 Error</p>
            
            <h1 className="text-h1-mobile sm:text-h1 font-semibold text-ink">Page not found</h1>
            
            {/* Scaled description text from 15.5px/base to 20px */}
            <p className="mt-4 text-[19px] sm:text-[20px] text-ink-muted leading-relaxed">
              The page you're looking for doesn't exist or may have moved.
            </p>
            
            <div className="mt-8">
              {/* Scaled button: h-12, px-6, text-[17px], rounded-lg, with scaled arrow */}
              <Link
                to={ROUTES.downloader}
                className="inline-flex items-center gap-2.5 h-12 px-6 text-[17px] font-medium text-paper bg-ink rounded-lg hover:bg-ink-soft transition-colors shadow-sm"
              >
                Back to YouTube Thumbnail Downloader
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}