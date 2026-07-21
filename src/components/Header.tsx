import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

// Meridian Digital logo mark SVG
const MeridianLogo = () => (
  <svg viewBox="0 0 36 36" fill="none" className="w-9 h-9 flex-shrink-0" aria-hidden="true">
    <rect width="36" height="36" rx="9" fill="#00B4D8" />
    {/* Meridian mark: globe arc + horizontal line */}
    <ellipse cx="18" cy="18" rx="9" ry="9" stroke="white" strokeWidth="1.8" fill="none" />
    <ellipse cx="18" cy="18" rx="4.5" ry="9" stroke="white" strokeWidth="1.5" fill="none" />
    <line x1="9" y1="18" x2="27" y2="18" stroke="white" strokeWidth="1.5" />
    <circle cx="18" cy="18" r="1.5" fill="white" />
  </svg>
)

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const navLinks = [
    { name: 'Services', href: '#features' },
    { name: 'Platforms', href: '#portfolio' },
    { name: 'Our Process', href: '#process' },
    { name: 'Integrations', href: '#integrations' },
  ]

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    if (location.pathname === '/') {
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/', { state: { scrollToSection: targetId } })
    }
    setIsMenuOpen(false)
  }

  const handleLogoClick = () => {
    if (location.pathname === '/') window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/96 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <nav className="container mx-auto px-6 lg:px-12 py-4" aria-label="Primary navigation">
        <div className="flex items-center justify-between gap-8">

          {/* Logo */}
          <Link
            to="/"
            onClick={handleLogoClick}
            className="flex items-center gap-3 hover:opacity-90 transition-opacity duration-300 flex-shrink-0"
            aria-label="Meridian Digital — Home"
          >
            <MeridianLogo />
            <div className="flex flex-col leading-none">
              <span className="text-[15px] font-black tracking-tight text-navy">Meridian Digital</span>
              <span className="text-[9px] font-semibold tracking-widest text-slate-400 uppercase">NDIS Digital Agency</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8" role="menubar">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                role="menuitem"
                onClick={(e) => handleScroll(e, link.href)}
                className="text-navy/65 hover:text-teal transition-colors duration-300 text-sm font-semibold tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, '#contact')}
              className="text-navy/65 hover:text-teal text-sm font-semibold tracking-wide transition-colors duration-300 px-4 py-2"
            >
              Contact us
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, '#contact')}
              className="bg-teal text-white px-6 py-2.5 text-sm font-bold rounded-lg hover:bg-teal/90 transition-all duration-300 shadow-sm shadow-teal/20"
            >
              Free Compliance Audit
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-navy p-1"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-slate-100 pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="text-navy/80 hover:text-teal text-base font-semibold transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-2 border-t border-slate-100">
                <a
                  href="#contact"
                  onClick={(e) => handleScroll(e, '#contact')}
                  className="text-center border border-slate-200 text-navy py-3 text-sm font-bold rounded-lg hover:border-teal hover:text-teal transition-all"
                >
                  Contact us
                </a>
                <a
                  href="#contact"
                  onClick={(e) => handleScroll(e, '#contact')}
                  className="text-center bg-teal text-white py-3 text-sm font-bold rounded-lg hover:bg-teal/90 transition-all"
                >
                  Free Compliance Audit
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
