export default function SeoContent() {
  return (
    // Scaled section padding to py-[60px] and py-[70px]
    <section className="px-5 sm:px-6 py-[60px] sm:py-[70px] border-t border-line">
      <div className="max-w-content mx-auto">
        
        {/* Scaled wrapper to 900px to match Hero and FAQ */}
        <div className="max-w-[900px]">
          
          {/* Scaled main heading to 28px */}
          <h2 className="text-[25px] sm:text-[28px] font-semibold text-ink">
            Free YouTube Thumbnail Downloader
          </h2>

          {/* Scaled body text to 19px, and increased the gap between blocks to space-y-8 */}
          <div className="mt-8 space-y-8 text-[19px] text-ink-soft leading-relaxed">
            <div>
              {/* Scaled subheadings to 19px and increased bottom margin slightly */}
              <h3 className="text-[19px] font-medium text-ink mb-2">
                What a YouTube thumbnail is
              </h3>
              <p>
                A thumbnail is the still image YouTube shows for a video before it plays —
                on the homepage, in search results, and in the sidebar of related videos.
                Creators upload it separately from the video file, usually at 1280 × 720
                pixels, and it's often the first thing that decides whether someone clicks.
              </p>
            </div>

            <div>
              <h3 className="text-[19px] font-medium text-ink mb-2">
                How to download one
              </h3>
              <p>
                Copy the link to any YouTube video or Short, paste it into the box above,
                and press Get Thumbnail. You'll see the image right away, along with a
                choice of sizes to save.
              </p>
            </div>

            <div>
              <h3 className="text-[19px] font-medium text-ink mb-2">How this tool works</h3>
              <p>
                YouTube stores a video's thumbnail at a predictable web address built from
                its video ID. This tool reads the ID out of the link you paste and checks
                which image sizes exist for it, so nothing is uploaded and no video is
                downloaded — only the image.
              </p>
            </div>

            <div>
              <h3 className="text-[19px] font-medium text-ink mb-2">
                Available thumbnail resolutions
              </h3>
              <p>
                YouTube publishes a thumbnail at several fixed sizes — it's more accurate to
                think of these as different pixel dimensions than as "quality" levels. Most
                videos have four available: HD at 1280 × 720, Standard at 640 × 480, Medium
                at 480 × 360, and Small at 320 × 180. Older or lower-resolution uploads
                sometimes don't have an HD version — when that happens, SaveitInstant shows the
                next largest size instead of a broken image.
              </p>
            </div>

            <div>
              <h3 className="text-[19px] font-medium text-ink mb-2">
                YouTube Shorts support
              </h3>
              <p>
                Shorts links work the same way as regular video links. Paste a
                youtube.com/shorts/ URL and the thumbnail comes back in the same sizes.
              </p>
            </div>

            <div>
              <h3 className="text-[19px] font-medium text-ink mb-2">
                Common reasons people download thumbnails
              </h3>
              <p>
                Creators pull their own thumbnails for portfolios, video editors reference
                them while cutting trailers or compilations, and researchers or archivists
                save them alongside notes on a video. Some people just want a still image
                for a chat or a slide without screen-recording the player.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}