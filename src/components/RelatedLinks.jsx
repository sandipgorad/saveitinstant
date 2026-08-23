import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function RelatedLinks({ title = 'Related resources', links }) {
  return (
    // Scaled section padding to perfectly match the 1.25x layout (py-[60px] and py-[70px])
    <section className="px-5 sm:px-6 py-[60px] sm:py-[70px] border-t border-line">
      <div className="max-w-content mx-auto">
        
        {/* Scaled heading from 13px to 16px */}
        <h2 className="text-[16px] font-medium text-ink-muted uppercase tracking-wide mb-6">
          {title}
        </h2>
        
        {/* Scaled inner wrapper from 720px to 900px */}
        <ul className="max-w-[900px] divide-y divide-line-soft border-t border-b border-line-soft">
          {links.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                // Scaled padding from py-3.5 to py-5 for larger touch targets, and text to 18px
                className="group flex items-center justify-between gap-5 py-5 text-[18px] text-ink hover:text-accent-dark transition-colors"
              >
                <span>
                  <span className="font-medium">{link.label}</span>
                  {link.description && (
                    // Scaled description text from 13px to 16px
                    <span className="block text-[16px] text-ink-faint mt-1">
                      {link.description}
                    </span>
                  )}
                </span>
                
                {/* Scaled arrow icon from 15 to 19, and bumped the hover translation slightly */}
                <ArrowRight
                  size={19}
                  className="shrink-0 text-ink-faint group-hover:text-accent-dark group-hover:translate-x-1 transition-all"
                  aria-hidden="true"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}