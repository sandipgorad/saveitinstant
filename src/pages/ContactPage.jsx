import Seo from '../components/Seo.jsx'
import PageHero from '../components/PageHero.jsx'
import { Mail, MessageCircle } from 'lucide-react'
import { ROUTES } from '../config/routes.js'
import { CONTACT_EMAIL } from '../config/site.js'

const REASONS = [
  {
    title: 'Report a bug',
    body: 'Tell us what went wrong and, if possible, include the YouTube URL you tried.',
  },
  {
    title: 'Share feedback',
    body: 'Have an idea that could make SaveitInstant better? We would love to hear it.',
  },
  {
    title: 'General question',
    body: 'Ask us anything about SaveitInstant or how the tool works.',
  },
]

export default function ContactPage() {
  return (
    <>
      <Seo
        title="Contact SaveitInstant"
        description="Get in touch with SaveitInstant — report a bug, share feedback, or ask a question."
        path={ROUTES.contact}
      />

      <PageHero
        title="Contact"
        intro="Have a question, found a bug, or have an idea? Feel free to send a message — a real person reads every message."
      />

      <section className="px-5 sm:px-6 pb-16 sm:pb-20">
        <div className="max-w-content mx-auto">
          <div className="max-w-[900px]">

            <div className="grid gap-4 sm:grid-cols-2">

              {/* X */}
              <a
                href="https://x.com/softwaredmind"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-line-soft bg-paper px-5 py-5 transition-colors hover:border-ink-soft"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-ink text-paper">
                  <MessageCircle size={20} aria-hidden="true" />
                </div>

                <div>
                  <p className="text-[16px] font-medium text-ink">
                    DM on X
                  </p>
                  <p className="mt-1 text-[15px] text-ink-muted">
                    @softwaredmind
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="group flex items-center gap-4 rounded-xl border border-line-soft bg-paper px-5 py-5 transition-colors hover:border-ink-soft"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-ink text-paper">
                  <Mail size={20} aria-hidden="true" />
                </div>

                <div className="min-w-0">
                  <p className="text-[16px] font-medium text-ink">
                    Send an email
                  </p>
                  <p className="mt-1 truncate text-[15px] text-ink-muted">
                    {CONTACT_EMAIL}
                  </p>
                </div>
              </a>

            </div>

            <p className="mt-4 text-[15px] leading-relaxed text-ink-faint">
              Use whichever option is more convenient. X is great for quick
              messages, while email is better for detailed feedback or bug reports.
            </p>

            <div className="mt-12">
              <h2 className="mb-6 text-[16px] font-medium uppercase tracking-wide text-ink-muted">
                What can you contact us about?
              </h2>

              <ul className="divide-y divide-line-soft border-t border-b border-line-soft">
                {REASONS.map((reason) => (
                  <li key={reason.title} className="py-5">
                    <p className="text-[18px] font-medium text-ink">
                      {reason.title}
                    </p>

                    <p className="mt-1 text-[16px] leading-relaxed text-ink-muted">
                      {reason.body}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}