import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const HorizonLogo = () => (
  <svg viewBox="0 0 44 44" fill="none" className="w-11 h-11 flex-shrink-0" aria-hidden="true">
    <rect width="44" height="44" rx="11" fill="#0B1F3A" />
    {/* Horizon arc — sun rising */}
    <path d="M10 30 Q22 14 34 30" stroke="#00B4D8" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    <line x1="9" y1="30" x2="35" y2="30" stroke="#00B4D8" strokeWidth="1.5" strokeLinecap="round" />
    {/* Sun */}
    <circle cx="22" cy="21" r="3.5" fill="#10B981" />
    {/* Light rays */}
    <line x1="22" y1="13" x2="22" y2="11" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="28" y1="15" x2="29.5" y2="13.5" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="16" y1="15" x2="14.5" y2="13.5" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const navLinks = [
    { name: 'Our Services', href: '#services' },
    { name: 'About Us', href: '#about' },
    { name: 'Our Team', href: '#team' },
    { name: 'Areas We Serve', href: '#areas' },
    { name: 'Contact', href: '#contact' },
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/97 backdrop-blur-md border-b border-slate-100 shadow-sm">
      {/* Top bar */}
      <div className="bg-navy text-white text-xs py-2 px-6 lg:px-12 flex items-center justify-between">
        <span className="flex items-center gap-1.5 font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald animate-pulse inline-block"></span>
          Registered NDIS Provider · NDIS Reg. No. 4050023456
        </span>
        <a href="tel:1300467426" className="flex items-center gap-1.5 font-bold hover:text-teal transition-colors">
          <Phone size={11} /> 1300 467 426
        </a>
      </div>

      <nav className="container mx-auto px-6 lg:px-12 py-3.5" aria-label="Primary navigation">
        <div className="flex items-center justify-between gap-6">

          {/* Logo */}
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 hover:opacity-90 transition-opacity flex-shrink-0"
            aria-label="Horizon Support Services — Home"
          >
            <HorizonLogo />
            <div className="flex flex-col leading-none">
              <span className="text-[15px] font-black tracking-tight text-navy">Horizon Support</span>
              <span className="text-[11px] font-bold text-slate-400">Support Services</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6" role="menubar">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} role="menuitem"
                onClick={(e) => handleScroll(e, link.href)}
                className="text-navy/65 hover:text-teal transition-colors duration-300 text-sm font-semibold"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <a href="tel:1300467426"
              className="text-navy/70 hover:text-teal text-sm font-bold transition-colors px-3 py-2 flex items-center gap-1.5"
            >
              <Phone size={14} /> 1300 467 426
            </a>
            <a href="#contact" onClick={(e) => handleScroll(e, '#contact')}
              className="bg-teal text-white px-6 py-2.5 text-sm font-bold rounded-lg hover:bg-teal/90 transition-all shadow-sm shadow-teal/20"
            >
              Make a Referral
            </a>
          </div>

          {/* Mobile button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-navy p-1"
            aria-label="Toggle menu" aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-slate-100 pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={(e) => handleScroll(e, link.href)}
                  className="text-navy/80 hover:text-teal text-base font-semibold transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
                <a href="tel:1300467426" className="text-center border border-slate-200 text-navy py-3 text-sm font-bold rounded-lg flex items-center justify-center gap-2">
                  <Phone size={14} /> 1300 467 426
                </a>
                <a href="#contact" onClick={(e) => handleScroll(e, '#contact')}
                  className="text-center bg-teal text-white py-3 text-sm font-bold rounded-lg hover:bg-teal/90"
                >
                  Make a Referral
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
