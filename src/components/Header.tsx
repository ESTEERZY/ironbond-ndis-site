import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const navLinks = [
    { name: 'Signatures', href: '#features' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Process', href: '#process' },
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-charcoal/80 backdrop-blur-md border-b border-white/10 shadow-sm">
      <nav className="container mx-auto px-6 lg:px-12 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            onClick={handleLogoClick}
            className="text-2xl font-black tracking-[-0.08em] text-white uppercase flex items-center gap-2 hover:text-gold/90 transition-colors duration-300"
          >
            <img src="/favicon.png" alt="Apex Architecture Logo" className="h-8 w-auto object-contain" />
            <span>Apex <span className="text-gold">Architecture</span></span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="text-white/80 hover:text-gold transition-colors duration-500 text-sm font-bold tracking-widest uppercase relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-500"></span>
              </a>
            ))}

            {/* CTA Button */}
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, '#contact')}
              className="bg-white/5 text-white border border-white/10 px-8 py-3 text-sm font-bold tracking-widest uppercase hover:bg-gold hover:text-charcoal hover:border-gold transition-all duration-500 inline-flex items-center gap-2 rounded-[2px]"
            >
              Start a Project
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
                  className="text-white/80 hover:text-gold transition-colors duration-300 text-lg font-bold uppercase tracking-widest"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-transparent text-gold border border-gold/50 shadow-[0_0_15px_rgba(197,160,89,0.3)] px-8 py-4 text-base font-bold tracking-widest uppercase hover:bg-gold hover:text-charcoal transition-all duration-300 inline-flex items-center justify-center gap-2 mt-4 rounded-[2px] whitespace-nowrap"
                onClick={(e) => {
                  setIsMenuOpen(false)
                  handleScroll(e, '#contact')
                }}
              >
                Start a Project
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
