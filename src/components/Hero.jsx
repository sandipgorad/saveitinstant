import ThumbnailDownloader from './ThumbnailDownloader.jsx'

export default function Hero() {
  return (
    // Scaled up vertical padding slightly to match the larger layout
    <section className="px-5 sm:px-6 pt-12 sm:pt-16 pb-16 sm:pb-20">
      <div className="max-w-content mx-auto">
        
        {/* Scaled inner wrapper from 720px to 900px */}
        <div className="max-w-[900px]">
          <h1 className="text-h1-mobile sm:text-h1 font-semibold text-ink">
            YouTube Thumbnail Downloader
          </h1>
          
          {/* Scaled text from 15.5px to 19px, and sm:text-base to sm:text-[20px] */}
          <p className="mt-4 text-[19px] sm:text-[20px] text-ink-muted leading-relaxed">
            Paste a YouTube video or Shorts link and get the thumbnail in seconds.
          </p>
        </div>

        {/* Scaled tool wrapper from 720px to 900px */}
        <div className="mt-9 max-w-[900px]">
          <ThumbnailDownloader />
        </div>
        
      </div>
    </section>
  )
}