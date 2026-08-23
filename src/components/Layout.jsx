import { Outlet } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:z-50 focus:left-4 focus:top-4 focus:px-3 focus:py-2 focus:bg-ink focus:text-paper focus:rounded-md"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main" className="flex-1" tabIndex="-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
