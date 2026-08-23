import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import { ROUTES } from './config/routes.js'

import HomePage from './pages/HomePage.jsx'
import ThumbnailDownloaderPage from './pages/ThumbnailDownloaderPage.jsx'
import ThumbnailSizesPage from './pages/ThumbnailSizesPage.jsx'
import ThumbnailUrlPage from './pages/ThumbnailUrlPage.jsx'
import ShortsThumbnailPage from './pages/ShortsThumbnailPage.jsx'
import HowToDownloadPage from './pages/HowToDownloadPage.jsx'
import FaqPage from './pages/FaqPage.jsx'
import BlogPage from './pages/BlogPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import PrivacyPage from './pages/PrivacyPage.jsx'
import TermsPage from './pages/TermsPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path={ROUTES.home} element={<HomePage />} />
          <Route path={ROUTES.downloader} element={<ThumbnailDownloaderPage />} />
          <Route path={ROUTES.sizes} element={<ThumbnailSizesPage />} />
          <Route path={ROUTES.url} element={<ThumbnailUrlPage />} />
          <Route path={ROUTES.shorts} element={<ShortsThumbnailPage />} />
          <Route path={ROUTES.howTo} element={<HowToDownloadPage />} />
          <Route path={ROUTES.faq} element={<FaqPage />} />
          <Route path={ROUTES.blog} element={<BlogPage />} />
          <Route path={ROUTES.about} element={<AboutPage />} />
          <Route path={ROUTES.contact} element={<ContactPage />} />
          <Route path={ROUTES.privacy} element={<PrivacyPage />} />
          <Route path={ROUTES.terms} element={<TermsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
