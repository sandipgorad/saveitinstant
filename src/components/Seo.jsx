import { useEffect } from 'react'
import { SITE_URL, SITE_NAME } from '../config/site.js'

function upsertMetaByName(name, content) {
  let el = document.querySelector(`meta[name="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('name', name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertMetaByProperty(property, content) {
  let el = document.querySelector(`meta[property="${property}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('property', property)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel, href) {
  let el = document.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

function upsertJsonLd(id, data) {
  let el = document.getElementById(id)
  if (!data) {
    if (el) el.remove()
    return
  }
  if (!el) {
    el = document.createElement('script')
    el.type = 'application/ld+json'
    el.id = id
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(data)
}

/**
 * Sets per-route document title, meta description, canonical URL, and
 * Open Graph / Twitter tags. Renders nothing — side effects only.
 *
 * Note: this runs client-side, which is sufficient for Googlebot (which
 * executes JS) but not for scrapers that only read the initial HTML
 * (some social-preview bots). See README for the SSR/prerender caveat.
 */
export default function Seo({ title, description, path, noindex = false, jsonLd = null }) {
  useEffect(() => {
    document.title = title
    upsertMetaByName('description', description)
    upsertMetaByName('robots', noindex ? 'noindex, nofollow' : 'index, follow')

    const normalizedPath = path === '/' ? '/' : `/${String(path).replace(/^\/+/, '').replace(/\/+$/, '')}`
    const url = `${SITE_URL}${normalizedPath}`
    upsertLink('canonical', url)

    upsertMetaByProperty('og:title', title)
    upsertMetaByProperty('og:description', description)
    upsertMetaByProperty('og:url', url)
    upsertMetaByProperty('og:type', 'website')
    upsertMetaByProperty('og:site_name', SITE_NAME)
    upsertMetaByProperty('og:image', `${SITE_URL}/og-cover.png`)

    upsertMetaByName('twitter:card', 'summary_large_image')
    upsertMetaByName('twitter:title', title)
    upsertMetaByName('twitter:description', description)
    upsertMetaByName('twitter:image', `${SITE_URL}/og-cover.png`)

    upsertJsonLd('page-jsonld', jsonLd)

    return () => upsertJsonLd('page-jsonld', null)
  }, [title, description, path, noindex, jsonLd])

  return null
}