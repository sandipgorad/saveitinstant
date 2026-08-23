import { useState } from 'react'
import { Link2, Check } from 'lucide-react'
import ResolutionList from './ResolutionList.jsx'

export default function ThumbnailResult({ videoId, thumbnails, previewUrl }) {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(previewUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch {
      // Clipboard API unavailable — quietly do nothing rather than
      // interrupt the user with an alert.
    }
  }

  return (
    <div className="animate-fade-up w-full">
      
      {/* Scaled margin to mb-4 */}
      <div className="flex items-baseline justify-between mb-4">
        {/* Scaled heading text to 16px */}
        <h2 className="text-[16px] font-medium text-ink-muted uppercase tracking-wide">Thumbnail</h2>
        
        <button
          type="button"
          onClick={handleCopy}
          // Scaled text to 16px and gap to 2
          className="inline-flex items-center gap-2 text-[16px] text-ink-soft hover:text-ink transition-colors"
        >
          {/* Scaled icons from 14 to 18 */}
          {copied ? <Check size={18} aria-hidden="true" /> : <Link2 size={18} aria-hidden="true" />}
          {copied ? 'Copied' : 'Copy image URL'}
        </button>
      </div>

      {/* Scaled to rounded-xl and added a soft shadow */}
      <div className="border border-line rounded-xl overflow-hidden bg-white shadow-sm">
        <img
          src={previewUrl}
          alt={`YouTube video thumbnail for ${videoId}`}
          width={1280}
          height={720}
          className="w-full aspect-video object-cover"
        />
      </div>

      {/* Scaled margin to mt-6 to give the list below room to breathe */}
      <div className="mt-6">
        <ResolutionList thumbnails={thumbnails} videoId={videoId} />
      </div>
      
    </div>
  )
}