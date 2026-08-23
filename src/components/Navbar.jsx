import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
// Don't forget to add Download to your lucide-react imports!
import { Menu, X, Download } from 'lucide-react' 
import { ROUTES } from '../config/routes.js'

const LINKS = [
  { label: 'How It Works', to: ROUTES.howTo },
  { label: 'FAQ', to: ROUTES.faq },
  { label: 'Downloader', to: ROUTES.downloader },
]

function navClass({ isActive }) {
  return `text-[18px] transition-colors ${
    isActive ? 'text-ink font-medium' : 'text-ink-soft hover:text-ink'
  }`
}

function mobileNavClass({ isActive }) {
  return `py-3 text-[19px] border-b border-line-soft last:border-none ${
    isActive ? 'text-ink font-medium' : 'text-ink-soft'
  }`
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="border-b border-line">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-50 focus:bg-ink focus:text-paper focus:px-3 focus:py-2 focus:text-base"
      >
        Skip to content
      </a>
      <div className="max-w-content mx-auto px-5 sm:px-6">
        
        <div className="h-[70px] flex items-center justify-between">
          <Link to={ROUTES.home} className="flex items-center gap-3 shrink-0">
            
            
           <div className="w-[34px] h-[34px] rounded-lg border-2 border-ink bg-paper text-ink flex items-center justify-center shadow-sm">
              <Download size={18} strokeWidth={2.5} />
           </div>
            
            <span className="font-semibold text-[19px] tracking-tight">SaveitInstant</span>
          </Link>

          <nav className="hidden sm:flex items-center gap-7" aria-label="Primary">
            {LINKS.map((link) => (
              <NavLink key={link.to} to={link.to} className={navClass}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          <button
            type="button"
            className="sm:hidden p-2 -mr-2 text-ink-soft"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="sm:hidden border-t border-line bg-paper" aria-label="Primary mobile">
          <div className="max-w-content mx-auto px-5 py-2 flex flex-col">
            {LINKS.map((link) => (
              <NavLink key={link.to} to={link.to} onClick={() => setOpen(false)} className={mobileNavClass}>
                {link.label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}