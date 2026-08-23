import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Resets scroll position on route change so navigating between pages
// doesn't preserve the previous page's scroll offset.
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
