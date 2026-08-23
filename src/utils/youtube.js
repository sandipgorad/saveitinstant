// Utility layer for YouTube URL handling.
// Kept isolated from presentation so a backend endpoint can replace
// getThumbnailUrls() later without touching any component.

const MAX_INPUT_LENGTH = 2048

const HOST_PATTERNS = ['youtube.com', 'm.youtube.com', 'music.youtube.com', 'youtu.be']

const ID_PATTERN = /^[a-zA-Z0-9_-]{11}$/

function parseUrl(rawInput) {
  if (typeof rawInput !== 'string') return null
  const input = rawInput.trim()
  if (!input || input.length > MAX_INPUT_LENGTH) return null

  try {
    // Allow bare inputs like "youtu.be/abc123" without a protocol.
    const withProtocol = /^https?:\/\//i.test(input) ? input : `https://${input}`
    return new URL(withProtocol)
  } catch {
    return null
  }
}

function isKnownHost(hostname) {
  const host = hostname.toLowerCase().replace(/^www\./, '')
  return HOST_PATTERNS.includes(host)
}

function idFromUrl(url) {
  const host = url.hostname.toLowerCase().replace(/^www\./, '')

  if (host === 'youtu.be') {
    const id = url.pathname.split('/').filter(Boolean)[0]
    return id && ID_PATTERN.test(id) ? id : null
  }

  const shortsMatch = url.pathname.match(/^\/shorts\/([a-zA-Z0-9_-]{11})/)
  if (shortsMatch) return shortsMatch[1]

  const embedMatch = url.pathname.match(/^\/(embed|v|live)\/([a-zA-Z0-9_-]{11})/)
  if (embedMatch) return embedMatch[2]

  const vParam = url.searchParams.get('v')
  if (vParam && ID_PATTERN.test(vParam)) return vParam

  return null
}

/**
 * Extracts an 11-character YouTube video ID from a URL.
 * Supports watch URLs, youtu.be short links, Shorts, and embed links.
 * Returns null if no valid ID can be found.
 */
export function extractYouTubeVideoId(rawInput) {
  const url = parseUrl(rawInput)
  if (!url || !isKnownHost(url.hostname)) return null
  return idFromUrl(url)
}

/**
 * Returns true if the input contains a recognizable YouTube URL
 * with an extractable video ID.
 */
export function isValidYouTubeUrl(rawInput) {
  return extractYouTubeVideoId(rawInput) !== null
}

/**
 * Classifies raw input for UI messaging:
 * - 'empty'       input has no content
 * - 'invalid'     not a parseable URL at all
 * - 'unsupported' a real URL, but not a YouTube video/Shorts link
 * - 'valid'       recognized YouTube link, includes videoId
 */
export function classifyYouTubeInput(rawInput) {
  const trimmed = typeof rawInput === 'string' ? rawInput.trim() : ''
  if (!trimmed) return { type: 'empty' }

  const url = parseUrl(rawInput)
  if (!url) return { type: 'invalid' }
  if (!isKnownHost(url.hostname)) return { type: 'unsupported' }

  const videoId = idFromUrl(url)
  if (!videoId) return { type: 'unsupported' }

  return { type: 'valid', videoId }
}

/**
 * Builds the set of thumbnail URLs available for a given video ID.
 * maxresdefault is not guaranteed to exist for every video, so callers
 * should treat it as best-effort and fall back on load failure.
 */
export function getThumbnailUrls(videoId) {
  const base = `https://i.ytimg.com/vi/${videoId}`
  return [
    { id: 'hd', label: 'HD', dimensions: '1280 × 720', file: 'maxresdefault.jpg' },
    { id: 'standard', label: 'Standard', dimensions: '640 × 480', file: 'sddefault.jpg' },
    { id: 'medium', label: 'Medium', dimensions: '480 × 360', file: 'hqdefault.jpg' },
    { id: 'small', label: 'Small', dimensions: '320 × 180', file: 'mqdefault.jpg' },
  ].map((entry) => ({ ...entry, url: `${base}/${entry.file}` }))
}
