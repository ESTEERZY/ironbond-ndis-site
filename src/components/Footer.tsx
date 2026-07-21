import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin, ShieldCheck, Accessibility, Lock } from 'lucide-react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Footer = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const quickLinks = [
    { name: 'Services', href: '#features' },
    { name: 'Solutions', href: '#portfolio' },
    { name: 'How It Works', href: '#process' },
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
  }

  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-6 lg:px-12 pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company */}
          <div className="space-y-5">
            <Link to="/" className="text-xl font-black tracking-tight uppercase flex items-center gap-2.5 hover:text-teal transition-colors">
              <div className="w-8 h-8 bg-teal rounded-lg flex items-center justify-center text-white text-xs font-black">NP</div>
              <span>NDIS <span className="text-teal">Prototype</span></span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed">
              Australia's NDIS digital compliance platform. WCAG 2.2 AA. Registration-ready. Automated participant intake for allied health, support coordinators, plan managers, and core supports.
            </p>
            <div className="flex gap-2.5">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 bg-white/5 border border-white/10 flex items-center justify-center hover:bg-teal hover:border-teal transition-all duration-300 rounded-lg"
                >
                  <Icon size={16} strokeWidth={2} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-white/40 mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    className="text-white/60 text-sm font-medium hover:text-teal transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-white/40 mb-5">Contact</h4>
            <div className="space-y-4">
              <a href="tel:+611300000000" className="flex items-center gap-3 text-white/60 text-sm hover:text-teal transition-colors">
                <Phone size={15} className="text-teal flex-shrink-0" />
                1300 000 000
              </a>
              <a href="mailto:hello@ndisprototype.com.au" className="flex items-center gap-3 text-white/60 text-sm hover:text-teal transition-colors break-all">
                <Mail size={15} className="text-teal flex-shrink-0" />
                hello@ndisprototype.com.au
              </a>
              <div className="flex items-start gap-3 text-white/60 text-sm">
                <MapPin size={15} className="text-teal flex-shrink-0 mt-0.5" />
                Australia-Wide · Remote &amp; On-Site
              </div>
            </div>
          </div>

          {/* Compliance */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-white/40 mb-5">Compliance</h4>
            <div className="space-y-2.5">
              <div className="flex items-center gap-2 text-emerald text-xs font-semibold">
                <Accessibility size={13} /> WCAG 2.2 AA Compliant
              </div>
              <div className="flex items-center gap-2 text-emerald text-xs font-semibold">
                <ShieldCheck size={13} /> NDIS Quality &amp; Safeguards Aligned
              </div>
              <div className="flex items-center gap-2 text-white/50 text-xs font-semibold">
                <Lock size={13} /> Privacy Act 1988 (Cth)
              </div>
              <div className="flex items-center gap-2 text-teal text-xs font-semibold">
                <ShieldCheck size={13} /> NDIS Registered Provider
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-white/30">
          <div>© {new Date().getFullYear()} NDIS Prototype. All rights reserved.</div>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-teal transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-teal transition-colors">Terms of Service</Link>
            <Link to="/sitemap" className="hover:text-teal transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
