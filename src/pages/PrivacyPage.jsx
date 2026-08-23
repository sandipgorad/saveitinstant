import Seo from '../components/Seo.jsx'
import PageHero from '../components/PageHero.jsx'
import { ROUTES } from '../config/routes.js'
import { CONTACT_EMAIL, SITE_NAME } from '../config/site.js'

export default function PrivacyPage() {
  return (
    <>
      <Seo
        title="Privacy Policy | SaveitInstant"
        description="How SaveitInstant handles data: what's collected, what isn't, cookies, third-party services, and how to get in touch."
        path={ROUTES.privacy}
      />

      <PageHero title="Privacy Policy" intro="Last updated August 2026." />

      {/* Scaled bottom padding */}
      <section className="px-5 sm:px-6 pb-16 sm:pb-20">
        <div className="max-w-content mx-auto">
          
          {/* Scaled wrapper from 720px to 900px, and increased spacing to space-y-10 */}
          <div className="max-w-[900px] space-y-10 text-[19px] text-ink-soft leading-relaxed">
            <div>
              {/* Scaled subheadings to 22px */}
              <h2 className="text-[22px] font-semibold text-ink mb-2">What this covers</h2>
              <p>
                This policy describes how {SITE_NAME} ("the site," "we") handles
                information when you use the YouTube thumbnail downloader and related
                pages. {SITE_NAME} doesn't have user accounts, so this mostly concerns
                technical data generated automatically by visiting a website.
              </p>
            </div>

            <div>
              <h2 className="text-[22px] font-semibold text-ink mb-2">
                Information the tool itself collects
              </h2>
              <p>
                The downloader runs in your browser. When you paste a URL, the site reads a
                video ID out of it and requests the matching thumbnail image directly from
                YouTube's image servers (i.ytimg.com) — that request is made by your
                browser, not relayed through our servers. We don't store the URLs you paste,
                the video IDs you look up, or the images you download.
              </p>
            </div>

            <div>
              <h2 className="text-[22px] font-semibold text-ink mb-2">
                Technical and log information
              </h2>
              <p>
                Like most websites, the infrastructure that serves these pages (hosting
                and/or content delivery network) may automatically log standard technical
                data for security and reliability purposes — things like IP address,
                browser type, and request timestamps. We don't use this data for
                advertising or combine it with any other information, and we don't have
                visibility into it beyond what our hosting provider makes available.
              </p>
            </div>

            <div>
              <h2 className="text-[22px] font-semibold text-ink mb-2">Cookies</h2>
              <p>
                {SITE_NAME} does not set its own cookies. If analytics or advertising
                (such as Google AdSense) are enabled in the future, this policy will be
                updated first, and those services may set their own cookies subject to
                their own privacy policies.
              </p>
            </div>

            <div>
              <h2 className="text-[22px] font-semibold text-ink mb-2">
                Analytics and advertising
              </h2>
              <p>
                The site does not currently run analytics or advertising. If that changes,
                we'll disclose which service is used (for example, Google AdSense) and link
                to its privacy documentation from this page.
              </p>
            </div>

            <div>
              <h2 className="text-[22px] font-semibold text-ink mb-2">
                Third-party services
              </h2>
              <p>
                Thumbnail images are fetched directly from YouTube (i.ytimg.com), a Google
                service, subject to{' '}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent-dark underline underline-offset-2 font-medium"
                >
                  Google's own privacy policy
                </a>
                . Fonts and any other static assets may be served from third-party CDNs
                that can log standard request data in the same way any web request does.
              </p>
            </div>

            <div>
              <h2 className="text-[22px] font-semibold text-ink mb-2">Data retention</h2>
              <p>
                We don't retain a record of what you've searched for or downloaded, because
                we don't store it in the first place. Any infrastructure-level technical
                logs are retained only as long as our hosting provider's standard policy
                requires for security and operations.
              </p>
            </div>

            <div>
              <h2 className="text-[22px] font-semibold text-ink mb-2">Children's privacy</h2>
              <p>
                {SITE_NAME} is a general-audience utility and doesn't knowingly collect
                personal information from children.
              </p>
            </div>

            <div>
              <h2 className="text-[22px] font-semibold text-ink mb-2">
                Changes to this policy
              </h2>
              <p>
                If this policy changes in a meaningful way — most likely by adding
                analytics or advertising — we'll update this page and the "last updated"
                date above.
              </p>
            </div>

            <div>
              <h2 className="text-[22px] font-semibold text-ink mb-2">Contact</h2>
              <p>
                Questions about this policy can be sent to{' '}
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