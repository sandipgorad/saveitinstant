import { useState } from 'react'
import { Download, Loader2, Check, ExternalLink } from 'lucide-react'
import { downloadImage } from '../utils/download.js'

export default function DownloadButton({ url, filename, variant = 'default' }) {
  const [state, setState] = useState('idle') // idle | working | done | opened | blocked

  async function handleClick() {
    if (state === 'working') return
    setState('working')
    const result = await downloadImage(url, filename)
    setState(result.ok ? (result.method === 'tab' ? 'opened' : 'done') : 'blocked')
    setTimeout(() => setState('idle'), 2200)
  }

  const isPrimary = variant === 'primary'
  const label =
    state === 'done' ? 'Downloaded' :
    state === 'opened' ? 'Opened' :
    state === 'blocked' ? 'Allow popup' :
    'Download'

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={`${label} ${filename}`}
      className={
        isPrimary
          // Scaled primary variant: h-[45px], px-5, gap-2, text-[17px], rounded-lg
          ? 'w-full sm:w-auto h-[45px] px-5 inline-flex items-center justify-center gap-2 text-[17px] font-medium text-paper bg-accent rounded-lg hover:bg-accent-dark transition-colors'
          // Scaled default variant: h-10, px-4, gap-2, text-[16px], rounded-lg
          : 'h-10 px-4 inline-flex items-center justify-center gap-2 text-[16px] font-medium text-ink-soft border border-line rounded-lg hover:bg-line-soft transition-colors'
      }
    >
      {state === 'working' ? (
        <Loader2 size={18} className="animate-spin" aria-hidden="true" />
      ) : state === 'done' ? (
        <Check size={18} aria-hidden="true" />
      ) : state === 'opened' || state === 'blocked' ? (
        <ExternalLink size={18} aria-hidden="true" />
      ) : (
        <Download size={18} aria-hidden="true" />
      )}
      {label}
    </button>
  )
}