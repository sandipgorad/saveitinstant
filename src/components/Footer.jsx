import { Link } from 'react-router-dom'
import { ROUTES } from '../config/routes.js'
import { Heart, Download } from 'lucide-react'

const LINKS = [
  { label: 'Home', to: ROUTES.home },
  { label: 'YouTube Thumbnail Downloader', to: ROUTES.downloader },
  { label: 'YouTube Thumbnail Sizes', to: ROUTES.sizes },
  { label: 'YouTube Thumbnail URL', to: ROUTES.url },
  { label: 'YouTube Shorts Thumbnail', to: ROUTES.shorts },
  { label: 'How to Download', to: ROUTES.howTo },
  { label: 'FAQ', to: ROUTES.faq },
  { label: 'Blog', to: ROUTES.blog },
  { label: 'About', to: ROUTES.about },
  { label: 'Contact', to: ROUTES.contact },
  { label: 'Privacy', to: ROUTES.privacy },
  { label: 'Terms', to: ROUTES.terms },
]

const SHARE_MESSAGE =
  'Just found this useful YouTube thumbnail tool — try it out:'

function openShareWindow(url) {
  window.open(
    url,
    '_blank',
    'noopener,noreferrer,width=700,height=600'
  )
}

function shareOnX() {
  const url = window.location.href
  const text = `${SHARE_MESSAGE} ${url}`

  openShareWindow(
    `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`
  )
}

function shareOnWhatsApp() {
  const url = window.location.href
  const text = `${SHARE_MESSAGE} ${url}`

  openShareWindow(
    `https://wa.me/?text=${encodeURIComponent(text)}`
  )
}

function shareOnTelegram() {
  const url = window.location.href
  const text = SHARE_MESSAGE

  openShareWindow(
    `https://t.me/share/url?url=${encodeURIComponent(
      url
    )}&text=${encodeURIComponent(text)}`
  )
}

async function copyLink() {
  const url = window.location.href

  try {
    await navigator.clipboard.writeText(url)
    window.dispatchEvent(new CustomEvent('link-copied'))
  } catch {
    const textarea = document.createElement('textarea')
    textarea.value = url
    textarea.style.position = 'fixed'
    textarea.style.opacity = '0'

    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    textarea.remove()

    window.dispatchEvent(new CustomEvent('link-copied'))
  }
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="w-[19px] h-[19px]" fill="currentColor">
      <path d="M18.244 2H21.5l-7.11 8.13L22.75 22h-6.58l-5.15-6.73L5.13 22H1.87l7.6-8.69L1.5 2h6.75l4.65 6.14L18.244 2Zm-1.15 17.85h1.82L7.22 4.02H5.27L17.094 19.85Z" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="w-[20px] h-[20px]" fill="currentColor">
      <path d="M12 2a9.9 9.9 0 0 0-8.52 15.02L2 22l5.14-1.43A10 10 0 1 0 12 2Zm0 18.15a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.05.85.84-2.97-.2-.31A8.13 8.13 0 1 1 12 20.15Zm4.45-6.08c-.24-.12-1.4-.69-1.62-.77-.22-.08-.38-.12-.54.12-.16.24-.62.77-.76.93-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.01-.37.1-.49.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.41-.54-.42h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.51.58.18 1.1.15 1.51.09.46-.07 1.4-.57 1.6-1.12.2-.55.2-1.02.14-1.12-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  )
}

function TelegramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="w-[20px] h-[20px]" fill="currentColor">
      <path d="M21.8 3.2 18.7 20c-.23 1.18-.87 1.47-1.76.91l-4.84-3.57-2.34 2.25c-.26.26-.48.48-.98.48l.35-4.94 8.99-8.12c.39-.35-.08-.55-.61-.2L6.4 13.68l-4.72-1.48c-1.03-.32-1.05-1.03.21-1.52L20.35 3.1c.86-.32 1.61.2 1.45.1Z" />
    </svg>
  )
}

function LinkIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="w-[20px] h-[20px]" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 13a5 5 0 0 0 7.07.07l2-2a5 5 0 0 0-7.07-7.07l-1.15 1.15" />
      <path d="M14 11a5 5 0 0 0-7.07-.07l-2 2A5 5 0 0 0 7 20l1.15-1.15" />
    </svg>
  )
}

export default function Footer() {
  const toolLinks = LINKS.slice(1, 5)
  const resourceLinks = LINKS.slice(5, 9)
  const companyLinks = LINKS.slice(9, 12)

  // Added a simple scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="border-t border-line bg-white">
      <div className="max-w-content mx-auto px-5 sm:px-6">

        {/* Share Section */}
        <div className="py-12 sm:py-16">
          <div className="rounded-2xl border border-line bg-[#fafaf9] px-6 py-8 sm:px-10 sm:py-10">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">

              <div>
                <h2 className="text-[19px] font-semibold tracking-[-0.01em] text-ink">
                  Liked the tool? Share it with a friend.
                </h2>
              </div>

              <div className="flex items-center gap-3">
                <button type="button" onClick={shareOnX} aria-label="Share on X" title="Share on X" className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-line bg-white text-ink-muted hover:text-ink hover:border-ink transition-colors">
                  <XIcon />
                </button>
                <button type="button" onClick={shareOnWhatsApp} aria-label="Share on WhatsApp" title="Share on WhatsApp" className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-line bg-white text-ink-muted hover:text-ink hover:border-ink transition-colors">
                  <WhatsAppIcon />
                </button>
                <button type="button" onClick={shareOnTelegram} aria-label="Share on Telegram" title="Share on Telegram" className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-line bg-white text-ink-muted hover:text-ink hover:border-ink transition-colors">
                  <TelegramIcon />
                </button>
                <button type="button" onClick={copyLink} aria-label="Copy link" title="Copy link" className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-line bg-white text-ink-muted hover:text-ink hover:border-ink transition-colors">
                  <LinkIcon />
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* Main footer */}
        <div className="pb-14 sm:pb-16 lg:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-16">

            {/* Brand */}
            <div>
              <Link
                to={ROUTES.home}
                onClick={scrollToTop} // Added the onClick handler here
                className="inline-flex items-center gap-3 text-[21px] font-semibold tracking-[-0.02em] text-ink"
              >
                {/* Logo with the paper background color */}
                <div className="w-[34px] h-[34px] rounded-lg border-2 border-ink bg-paper text-ink flex items-center justify-center shadow-sm">
                  <Download size={18} strokeWidth={2.5} />
                </div>
                SaveitInstant
              </Link>
              <p className="mt-4 max-w-[250px] text-[16px] leading-6 text-ink-faint">
                save thumbnails instantly.
              </p>
            </div>

            {/* Navigation */}
            <nav aria-label="Footer" className="w-full lg:w-auto">
              <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr_1fr] gap-x-12 lg:gap-x-20 gap-y-10">

                <div>
                  <p className="mb-5 text-[12px] font-medium uppercase tracking-[0.12em] text-ink-faint">
                    Tools
                  </p>
                  <ul className="space-y-3">
                    {toolLinks.map((link) => (
                      <li key={link.label}>
                        <Link
                          to={link.to}
                          className="text-[16px] leading-6 text-ink-muted hover:text-ink transition-colors whitespace-nowrap"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="mb-5 text-[12px] font-medium uppercase tracking-[0.12em] text-ink-faint">
                    Resources
                  </p>
                  <ul className="space-y-3">
                    {resourceLinks.map((link) => (
                      <li key={link.label}>
                        <Link
                          to={link.to}
                          className="text-[16px] leading-6 text-ink-muted hover:text-ink transition-colors whitespace-nowrap"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="mb-5 text-[12px] font-medium uppercase tracking-[0.12em] text-ink-faint">
                    Company
                  </p>
                  <ul className="space-y-3">
                    {companyLinks.map((link) => (
                      <li key={link.label}>
                        <Link
                          to={link.to}
                          className="text-[16px] leading-6 text-ink-muted hover:text-ink transition-colors whitespace-nowrap"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </nav>
          </div>
        </div>

        {/* Bottom area with signature */}
        <div className="border-t border-line py-6 sm:py-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-[14px] sm:text-[15px] leading-5 text-ink-faint">
            This independent tool is not affiliated with YouTube or Google.
          </p>
          
          <p className="text-[14px] sm:text-[15px] leading-5 text-ink-faint flex items-center gap-1.5">
            Built with <Heart size={15} className="text-error fill-error" /> by{' '}
            <a 
              href="https://x.com/softwaredmind" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-ink-muted hover:text-ink hover:underline font-medium transition-colors"
            >
              softwaredmind
            </a>
          </p>
        </div>

      </div>
    </footer>
  )
}