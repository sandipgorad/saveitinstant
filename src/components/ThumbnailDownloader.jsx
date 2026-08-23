import { useRef, useState } from 'react'
import UrlInput from './UrlInput.jsx'
import ThumbnailResult from './ThumbnailResult.jsx'
import { classifyYouTubeInput, getThumbnailUrls } from '../utils/youtube.js'
import { checkImageLoads } from '../utils/download.js'

const ERROR_MESSAGES = {
  invalid: 'Enter a valid YouTube URL.',
  unsupported: 'Please enter a YouTube video or Shorts link.',
  network: 'Something went wrong. Please try again.',
}

export default function ThumbnailDownloader() {
  const [value, setValue] = useState('')
  const [status, setStatus] = useState('idle')
  const [result, setResult] = useState(null)
  const resultRef = useRef(null)
  const requestId = useRef(0)

  async function runFetch(videoId) {
    const thisRequest = ++requestId.current
    setStatus('loading')
    setResult(null)

    const urls = getThumbnailUrls(videoId)
    const standard = urls.find((u) => u.id === 'standard')
    const hd = urls.find((u) => u.id === 'hd')

    const [standardOk, hdOk] = await Promise.all([
      checkImageLoads(standard.url),
      checkImageLoads(hd.url),
    ])

    if (thisRequest !== requestId.current) return // a newer request superseded this one

    if (!standardOk) {
      setStatus('error-network')
      return
    }

    const available = hdOk ? urls : urls.filter((u) => u.id !== 'hd')
    const previewUrl = hdOk ? hd.url : standard.url

    setResult({ videoId, thumbnails: available, previewUrl })
    setStatus('success')

    // Bring the result into view on small screens without a jarring jump.
    requestAnimationFrame(() => {
      if (window.innerWidth < 640) {
        resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    })
  }

  function handleSubmit(overrideValue) {
    const input = overrideValue ?? value
    const classification = classifyYouTubeInput(input)

    if (classification.type === 'empty' || classification.type === 'invalid') {
      setStatus('error-input')
      setResult(null)
      return
    }
    if (classification.type === 'unsupported') {
      setStatus('error-unsupported')
      setResult(null)
      return
    }

    runFetch(classification.videoId)
  }

  function handleChange(next) {
    setValue(next)
    if (status !== 'loading') setStatus('idle')
  }

  function handlePasteValue(text, opts = {}) {
    setValue(text)
    setStatus('idle')
    if (opts.autoSubmit) {
      handleSubmit(text)
    }
  }

  const errorMessage =
    status === 'error-input'
      ? ERROR_MESSAGES.invalid
      : status === 'error-unsupported'
      ? ERROR_MESSAGES.unsupported
      : status === 'error-network'
      ? ERROR_MESSAGES.network
      : ''

  return (
    <div>
      <UrlInput
        value={value}
        onChange={handleChange}
        onSubmit={() => handleSubmit()}
        onPasteValue={handlePasteValue}
        status={status}
        errorMessage={errorMessage}
      />

      {status === 'success' && result && (
        // Added mt-10 here so the result box has breathing room from the input box
        <div ref={resultRef} className="mt-10">
          <ThumbnailResult
            videoId={result.videoId}
            thumbnails={result.thumbnails}
            previewUrl={result.previewUrl}
          />
        </div>
      )}
    </div>
  )
}