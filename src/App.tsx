import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './components/Home'
import CaseStudyTemplate from './components/CaseStudyTemplate'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsOfService from './components/TermsOfService'
import Sitemap from './components/Sitemap'

// A premium helper component to restore scroll state to the top of the page on route transition
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-navy text-white font-sans selection:bg-teal selection:text-navy">
        <Routes>
          {/* Main Portfolio Index */}
          <Route path="/" element={<Home />} />
          
          {/* Legal / Policy Routes */}
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/sitemap" element={<Sitemap />} />
          
          {/* Reusable, Premium Case Study Layout Template Route */}
          <Route path="/case-study/:id" element={<CaseStudyTemplate />} />
          <Route path="/:id.html" element={<CaseStudyTemplate />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
