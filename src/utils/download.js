// Triggers a file download for a cross-origin image.
// If the image CDN does not allow CORS, fall back to opening the image.
// The fallback may be blocked by popup protection in some browsers.
export async function downloadImage(url, filename) {
  try {
    const response = await fetch(url, { mode: 'cors', cache: 'force-cache' })
    if (!response.ok) throw new Error(`Request failed: ${response.status}`)

    const blob = await response.blob()
    if (!blob.size) throw new Error('Empty response')

    const objectUrl = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = objectUrl
    link.download = filename
    link.rel = 'noopener'
    document.body.appendChild(link)
    link.click()
    link.remove()

    // Give the browser time to start the download before releasing the object URL.
    setTimeout(() => URL.revokeObjectURL(objectUrl), 1000)
    return { ok: true, method: 'blob' }
  } catch {
    const opened = window.open(url, '_blank', 'noopener,noreferrer')
    return { ok: Boolean(opened), method: 'tab' }
  }
}

// Resolves true if an image URL loads within the timeout, false otherwise.
export function checkImageLoads(url, timeoutMs = 6000) {
  return new Promise((resolve) => {
    const img = new Image()
    let settled = false

    const finish = (result) => {
      if (settled) return
      settled = true
      clearTimeout(timer)
      resolve(result)
    }

    const timer = setTimeout(() => finish(false), timeoutMs)

    img.onload = () => {
      // YouTube can return a small placeholder for unavailable maxres images.
      finish(img.naturalWidth > 120 && img.naturalHeight > 90)
    }
    img.onerror = () => finish(false)
    img.src = url
  })
}
