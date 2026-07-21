import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import Header from './Header'
import Footer from './Footer'

const Sitemap = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Header />
      <main className="min-h-screen bg-charcoal text-white pt-32 pb-24 font-sans">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-white/50 hover:text-gold transition-all duration-300 group mb-8"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1.5 transition-transform duration-300" />
            <span>Back to Home</span>
          </Link>
          <span className="text-xs font-bold tracking-[0.3em] text-gold uppercase block mb-3">Site Architecture</span>
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-8">Sitemap</h1>
          <div className="w-16 h-[2px] bg-gold mb-12"></div>
          
          <div className="space-y-12">
            <div>
              <h2 className="text-xl font-bold text-white uppercase tracking-wider font-heading mb-6">Main Navigation</h2>
              <ul className="space-y-4 font-medium text-white/70">
                <li>
                  <Link to="/" className="hover:text-gold transition-colors duration-300 flex items-center gap-2">
                    <span className="text-gold">//</span> Home / Main Landing Page
                  </Link>
                </li>
                <li>
                  <Link to="/" state={{ scrollToContact: true }} className="hover:text-gold transition-colors duration-300 flex items-center gap-2">
                    <span className="text-gold">//</span> Contact / Project Inquiry Form
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white uppercase tracking-wider font-heading mb-6">Active Case Studies</h2>
              <ul className="space-y-4 font-medium text-white/70">
                <li>
                  <Link to="/industrial-loft.html" className="hover:text-gold transition-colors duration-300 flex items-center gap-2">
                    <span className="text-gold">//</span> Industrial Loft Case Study
                  </Link>
                </li>
                <li>
                  <Link to="/minimalist-pavilion.html" className="hover:text-gold transition-colors duration-300 flex items-center gap-2">
                    <span className="text-gold">//</span> Minimalist Pavilion Case Study
                  </Link>
                </li>
                <li>
                  <Link to="/suburban-elegance.html" className="hover:text-gold transition-colors duration-300 flex items-center gap-2">
                    <span className="text-gold">//</span> Suburban Elegance Case Study
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white uppercase tracking-wider font-heading mb-6">Legal</h2>
              <ul className="space-y-4 font-medium text-white/70">
                <li>
                  <Link to="/privacy" className="hover:text-gold transition-colors duration-300 flex items-center gap-2">
                    <span className="text-gold">//</span> Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="hover:text-gold transition-colors duration-300 flex items-center gap-2">
                    <span className="text-gold">//</span> Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-16 pt-12 border-t border-white/10 flex justify-start">
            <Link
              to="/"
              className="group bg-white/5 text-white border border-white/10 hover:border-gold hover:bg-gold hover:text-charcoal px-8 py-4 text-xs font-bold tracking-[0.25em] uppercase transition-all duration-500 inline-flex items-center gap-2 rounded-[2px]"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1.5 transition-transform duration-300" />
              <span>Return to Home Page</span>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Sitemap
