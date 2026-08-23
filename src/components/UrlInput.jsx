import { useRef } from 'react'
import { Clipboard, ArrowRight, Loader2 } from 'lucide-react'

export default function UrlInput({ value, onChange, onSubmit, onPasteValue, status, errorMessage }) {
  const inputRef = useRef(null)
  const isLoading = status === 'loading'
  const hasError = status === 'error-input' || status === 'error-unsupported' || status === 'error-network'

  async function handlePasteClick() {
    try {
      const text = await navigator.clipboard.readText()
      if (text) onPasteValue(text)
      inputRef.current?.focus()
    } catch {
      inputRef.current?.focus()
    }
  }

  function handlePaste(e) {
    const text = e.clipboardData.getData('text')
    if (text) {
      setTimeout(() => onPasteValue(text, { autoSubmit: true }), 0)
    }
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        onSubmit()
      }}
      noValidate
    >
      {/* Scaled padding from p-2.5 to p-3.5, gap to 3.5, and rounded to xl */}
      <div
        className={`flex flex-col sm:flex-row gap-3.5 rounded-xl border bg-white p-3.5 shadow-tool transition-colors ${
          hasError ? 'border-error' : 'border-line focus-within:border-ink-soft'
        }`}
      >
        <div className="flex-1 flex items-center gap-3 px-3">
          <label htmlFor="youtube-url" className="sr-only">
            YouTube video URL
          </label>
          <input
            ref={inputRef}
            id="youtube-url"
            type="text"
            inputMode="url"
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
            placeholder="Paste YouTube video URL..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onPaste={handlePaste}
            aria-invalid={hasError}
            aria-describedby={hasError ? 'url-error' : undefined}
            // Scaled height to h-[55px] and font to text-[18px]
            className="w-full h-[55px] bg-transparent font-mono text-lg sm:text-[18px] text-ink placeholder:text-ink-faint placeholder:font-sans outline-none"
          />
        </div>

        <div className="flex gap-3 shrink-0">
          <button
            type="button"
            onClick={handlePasteClick}
            // Scaled height, padding, text to 17px, and icon to 19
            className="h-[55px] px-5 inline-flex items-center gap-2 text-[17px] font-medium text-ink-soft border border-line rounded-lg hover:bg-line-soft transition-colors"
          >
            <Clipboard size={19} strokeWidth={2} aria-hidden="true" />
            Paste
          </button>
          <button
            type="submit"
            disabled={isLoading}
            // Scaled height, padding, text to 18px, and icon to 19
            className="h-[55px] px-6 inline-flex items-center justify-center gap-2.5 text-[18px] font-medium text-paper bg-ink rounded-lg hover:bg-ink-soft disabled:opacity-60 transition-colors"
          >
            {isLoading ? (
              <>
                <Loader2 size={20} className="animate-spin" aria-hidden="true" />
                Fetching...
              </>
            ) : (
              <>
                Get Thumbnail
                <ArrowRight size={19} aria-hidden="true" />
              </>
            )}
          </button>
        </div>
      </div>

      {/* Scaled margin, gap, and helper text to 16px */}
      <div className="mt-3.5 flex items-center justify-between gap-4 min-h-[25px]">
        {hasError ? (
          <p id="url-error" role="alert" className="text-[16px] text-error">
            {errorMessage}
          </p>
        ) : (
          <p className="text-[16px] text-ink-faint">Works with YouTube videos and Shorts</p>
        )}
      </div>
    </form>
  )
}