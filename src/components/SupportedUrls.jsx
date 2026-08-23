const EXAMPLES = [
  { pattern: 'youtube.com/watch?v=...', note: 'standard video link' },
  { pattern: 'youtu.be/...', note: 'shortened link' },
  { pattern: 'youtube.com/live/...', note: 'Live video link' },
  { pattern: 'youtube.com/shorts/...', note: 'Shorts link' },
]

export default function SupportedUrls() {
  return (
    // Scaled section padding to py-[60px] and py-[70px]
    <section className="px-5 sm:px-6 py-[60px] sm:py-[70px] border-t border-line">
      <div className="max-w-content mx-auto">
        
        {/* Scaled wrapper to 900px to match Hero and FAQ */}
        <div className="max-w-[900px]">
          
          {/* Scaled heading to 16px */}
          <h2 className="text-[16px] font-medium text-ink-muted uppercase tracking-wide mb-6">
            Supported YouTube links
          </h2>
          
          <ul className="divide-y divide-line-soft border-t border-b border-line-soft">
            {EXAMPLES.map((ex) => (
              // Scaled padding to py-4
              <li key={ex.pattern} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4 py-4">
                {/* Scaled code text to 17px */}
                <code className="text-[17px] font-mono text-ink break-all">{ex.pattern}</code>
                {/* Scaled note text to 16px */}
                <span className="text-[16px] text-ink-faint sm:whitespace-nowrap">{ex.note}</span>
              </li>
            ))}
          </ul>
          
          {/* Scaled helper text to 17px */}
          <p className="mt-4 text-[17px] text-ink-muted">
            Paste any of these formats above — the tool detects the video automatically.
          </p>
        </div>
      </div>
    </section>
  )
}