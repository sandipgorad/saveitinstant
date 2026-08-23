import { ChevronDown } from 'lucide-react'
import { FAQS } from '../data/faqs.js'

export default function Faq({ showHeading = true, id = 'faq' }) {
  return (
    // Scaled padding to match the previous sections (60/70px)
    <section id={id} className="px-5 sm:px-6 py-[60px] sm:py-[70px] border-t border-line">
      <div className="max-w-content mx-auto">
        
        {/* Scaled inner wrapper from 720px to 900px to match your new Hero width */}
        <div className="max-w-[900px]">
          {showHeading && (
            // Scaled heading from 22px to 28px
            <h2 className="text-[25px] sm:text-[28px] font-semibold text-ink mb-3">FAQ</h2>
          )}

          <div className="mt-6 divide-y divide-line-soft border-t border-b border-line-soft">
            {FAQS.map((item) => (
              // Increased padding from py-4 to py-5/py-6 so the larger text doesn't feel cramped
              <details key={item.q} className="group py-5 sm:py-6">
                {/* Scaled question text from 15px to 19px, removed default outline on click */}
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none text-[19px] font-medium text-ink outline-none hover:text-accent transition-colors">
                  {item.q}
                  {/* Scaled chevron icon from 16 to 22 */}
                  <ChevronDown
                    size={22}
                    className="shrink-0 text-ink-faint transition-transform duration-200 group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>
                {/* Scaled answer text from 14.5px to 18px, increased right padding to 8 */}
                <p className="mt-3 text-[18px] text-ink-muted leading-relaxed pr-8 sm:pr-12">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}