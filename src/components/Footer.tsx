import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin, Clock, ShieldCheck, Accessibility, Lock } from 'lucide-react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Footer = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Services', href: '#features' },
    { name: 'Solutions', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="bg-cream text-navy border-t border-navy/10">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <Link
              to="/"
              onClick={() => {
                if (location.pathname === '/') {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }
              }}
              className="text-2xl font-black tracking-tighter uppercase text-navy flex items-center gap-3 hover:text-teal transition-colors duration-300"
            >
              NDIS <span className="text-teal">Prototype</span>
            </Link>
            <p className="text-navy/60 font-medium leading-relaxed">
              Australia's NDIS digital compliance platform. WCAG 2.2 AA. Registration-ready. Automated participant intake — for allied health, support coordinators, plan managers, and core supports.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-navy/5 border border-navy/10 flex items-center justify-center hover:bg-teal hover:border-teal hover:text-white text-navy transition-all duration-500 rounded-[2px]"
              >
                <Facebook size={18} strokeWidth={2} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-navy/5 border border-navy/10 flex items-center justify-center hover:bg-teal hover:border-teal hover:text-white text-navy transition-all duration-500 rounded-[2px]"
              >
                <Twitter size={18} strokeWidth={2} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-navy/5 border border-navy/10 flex items-center justify-center hover:bg-teal hover:border-teal hover:text-white text-navy transition-all duration-500 rounded-[2px]"
              >
                <Instagram size={18} strokeWidth={2} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-navy/5 border border-navy/10 flex items-center justify-center hover:bg-teal hover:border-teal hover:text-white text-navy transition-all duration-500 rounded-[2px]"
              >
                <Linkedin size={18} strokeWidth={2} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-black mb-6 uppercase tracking-[0.1em] text-navy">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      const targetId = link.href.replace('#', '')
                      if (location.pathname === '/') {
                        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' })
                      } else {
                        navigate('/', { state: { scrollToSection: targetId } })
                      }
                    }}
                    className="text-navy/60 font-medium hover:text-teal transition-colors duration-500"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-black mb-6 uppercase tracking-[0.1em] text-navy">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-teal flex-shrink-0 mt-1" strokeWidth={2} />
                <div>
                  <a href="tel:+611300000000" className="text-navy/60 font-medium hover:text-teal transition-colors duration-500">
                    1300 000 000
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-teal flex-shrink-0 mt-1" strokeWidth={2} />
                <div>
                  <a href="mailto:hello@ndisprototype.com.au" className="text-navy/60 font-medium hover:text-teal transition-colors duration-500 break-all">
                    hello@ndisprototype.com.au
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal flex-shrink-0 mt-1" strokeWidth={2} />
                <div>
                  <p className="text-navy/60 font-medium">
                    Australia-Wide<br/>
                    Remote &amp; On-Site Available
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-teal flex-shrink-0 mt-1" strokeWidth={2} />
                <div>
                  <p className="text-navy/60 font-medium">
                    Monday – Friday: 9:00 AM – 5:30 PM AEST<br/>
                    Saturday: By Appointment Only<br/>
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Row */}
        <div className="border-t border-navy/10 py-8 mb-4">
          <div className="flex flex-wrap justify-center gap-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-emerald/10 border border-emerald/25 rounded-full text-emerald text-xs font-bold tracking-wide">
              <Accessibility size={13} />
              WCAG AA Compliant
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-emerald/10 border border-emerald/25 rounded-full text-emerald text-xs font-bold tracking-wide">
              <ShieldCheck size={13} />
              NDIS Quality &amp; Safeguards Aligned
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-navy/5 border border-navy/15 rounded-full text-navy/60 text-xs font-bold tracking-wide">
              <Lock size={13} />
              Privacy Act 1988 (CTH) Compliant
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-teal/10 border border-teal/20 rounded-full text-teal text-xs font-bold tracking-wide">
              <ShieldCheck size={13} />
              NDIS Registered
            </span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-navy/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium text-navy/50">
            <div>
              © {new Date().getFullYear()} NDIS Prototype. All rights reserved.
            </div>
            <div className="flex gap-8">
              <Link to="/privacy" className="hover:text-teal transition-colors duration-500">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-teal transition-colors duration-500">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="hover:text-teal transition-colors duration-500">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
