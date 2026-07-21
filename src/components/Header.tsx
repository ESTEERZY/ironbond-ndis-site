import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const navLinks = [
    { name: 'Services', href: '#features' },
    { name: 'Solutions', href: '#portfolio' },
    { name: 'Workflow', href: '#process' },
  ]

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    if (location.pathname === '/') {
      const element = document.getElementById(targetId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      navigate('/', { state: { scrollToSection: targetId } })
    }
  }

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy/90 backdrop-blur-md border-b border-white/10 shadow-sm">
      <nav className="container mx-auto px-6 lg:px-12 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            onClick={handleLogoClick}
            className="text-2xl font-black tracking-[-0.08em] text-white uppercase flex items-center gap-2 hover:text-teal/90 transition-colors duration-300"
          >
            <img src="/favicon.png" alt="NDIS Prototype Logo" className="h-8 w-auto object-contain" />
            <span>NDIS <span className="text-teal">Prototype</span></span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-white/80 hover:text-teal transition-colors duration-500 text-sm font-bold tracking-widest uppercase relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal group-hover:w-full transition-all duration-500"></span>
              </a>
            ))}

            {/* Secondary CTA */}
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, '#contact')}
              className="text-teal border border-teal/40 px-6 py-2.5 text-sm font-bold tracking-widest uppercase hover:bg-teal/10 transition-all duration-300 rounded-[2px]"
            >
              Get Support
            </a>

            {/* Primary CTA Button */}
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, '#contact')}
              className="bg-teal text-navy px-8 py-3 text-sm font-bold tracking-widest uppercase hover:bg-teal/90 transition-all duration-500 inline-flex items-center gap-2 rounded-[2px] shadow-[0_0_20px_rgba(0,180,216,0.25)]"
            >
              Book a Free Audit
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-6 pb-6 border-t border-white/10 pt-6 animate-fade-in">
            <div className="flex flex-col space-y-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    setIsMenuOpen(false)
                    handleScroll(e, link.href)
                  }}
                  className="text-white/80 hover:text-teal transition-colors duration-300 text-lg font-bold uppercase tracking-widest"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="text-teal border border-teal/50 px-8 py-3 text-base font-bold tracking-widest uppercase hover:bg-teal/10 transition-all duration-300 inline-flex items-center justify-center gap-2 rounded-[2px] whitespace-nowrap"
                onClick={(e) => {
                  setIsMenuOpen(false)
                  handleScroll(e, '#contact')
                }}
              >
                Get Support
              </a>
              <a
                href="#contact"
                className="bg-teal text-navy shadow-[0_0_15px_rgba(0,180,216,0.3)] px-8 py-4 text-base font-bold tracking-widest uppercase hover:bg-teal/90 transition-all duration-300 inline-flex items-center justify-center gap-2 rounded-[2px] whitespace-nowrap"
                onClick={(e) => {
                  setIsMenuOpen(false)
                  handleScroll(e, '#contact')
                }}
              >
                Book a Free Audit
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
