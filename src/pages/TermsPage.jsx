import Seo from '../components/Seo.jsx'
import PageHero from '../components/PageHero.jsx'
import { ROUTES } from '../config/routes.js'
import { CONTACT_EMAIL, SITE_NAME } from '../config/site.js'

export default function TermsPage() {
  return (
    <>
      <Seo
        title="Terms of Use | SaveitInstant"
        description="Terms covering acceptable use, third-party content, intellectual property, and service availability for SaveitInstant."
        path={ROUTES.terms}
      />

      <PageHero title="Terms of Use" intro="Last updated August 2026." />

      {/* Scaled bottom padding */}
      <section className="px-5 sm:px-6 pb-16 sm:pb-20">
        <div className="max-w-content mx-auto">
          
          {/* Scaled wrapper from 720px to 900px, and increased spacing to space-y-10 */}
          <div className="max-w-[900px] space-y-10 text-[19px] text-ink-soft leading-relaxed">
            <div>
              {/* Scaled subheadings to 22px */}
              <h2 className="text-[22px] font-semibold text-ink mb-2">Using the site</h2>
              <p>
                {SITE_NAME} provides a browser-based tool for retrieving publicly available
                YouTube thumbnail images. By using it, you agree to use it for lawful
                purposes and not to attempt to disrupt, overload, or reverse engineer the
                service in ways that affect other users.
              </p>
            </div>

            <div>
              <h2 className="text-[22px] font-semibold text-ink mb-2">
                Your responsibility for content
              </h2>
              <p>
                Thumbnail images belong to their respective creators and to YouTube/Google,
                not to {SITE_NAME}. Downloading a thumbnail through this site doesn't grant
                you any rights to use it — you're responsible for making sure any further
                use (republishing, editing, commercial use, etc.) complies with copyright
                law and YouTube's own terms of service.
              </p>
            </div>

            <div>
              <h2 className="text-[22px] font-semibold text-ink mb-2">
                Third-party services
              </h2>
              <p>
                The downloader depends on YouTube's publicly accessible image servers. We
                don't control that service's availability, and thumbnail retrieval may fail
                or change if YouTube changes how those endpoints work.
              </p>
            </div>

            <div>
              <h2 className="text-[22px] font-semibold text-ink mb-2">
                Intellectual property
              </h2>
              <p>
                The {SITE_NAME} name, logo, and site design are owned by their creators.
                YouTube is a trademark of Google LLC; {SITE_NAME} is an independent tool and
                is not affiliated with, endorsed by, or sponsored by YouTube or Google.
              </p>
            </div>

            <div>
              <h2 className="text-[22px] font-semibold text-ink mb-2">
                Service availability
              </h2>
              <p>
                {SITE_NAME} is provided on an "as is" and "as available" basis, with no
                uptime guarantee. Features may change, and the service may be interrupted or
                discontinued at any time.
              </p>
            </div>

            <div>
              <h2 className="text-[22px] font-semibold text-ink mb-2">
                Limitation of liability
              </h2>
              <p>
                {SITE_NAME} is offered without warranties of any kind. To the extent
                permitted by law, {SITE_NAME} isn't liable for any damages arising from use
                of, or inability to use, the site.
              </p>
            </div>

            <div>
              <h2 className="text-[22px] font-semibold text-ink mb-2">
                Changes to these terms
              </h2>
              <p>
                These terms may be updated occasionally. Continued use of the site after a
                change means you accept the updated terms.
              </p>
            </div>

            <div>
              <h2 className="text-[22px] font-semibold text-ink mb-2">Contact</h2>
              <p>
                Questions about these terms can be sent to{' '}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-accent hover:text-accent-dark underline underline-offset-2 font-medium">
                  {CONTACT_EMAIL}
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}