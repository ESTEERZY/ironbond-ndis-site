import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin, Clock } from 'lucide-react'
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
    <footer className="bg-white text-charcoal border-t border-slate-200">
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
              className="text-2xl font-black tracking-tighter uppercase text-charcoal flex items-center gap-3 hover:text-gold/90 transition-colors duration-300"
            >
              Iron<span className="text-gold">Bond</span>
            </Link>
            <p className="text-slate-600 font-medium leading-relaxed">
              Australia's NDIS digital compliance platform. WCAG 2.2 AA. Registration-ready. Automated participant intake — for allied health, support coordinators, plan managers, and core supports.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-12 h-12 bg-white/20 backdrop-blur-md border border-white/50 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-white transition-all duration-500 rounded-[2px]"
              >
                <Facebook size={20} strokeWidth={2} />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-white/20 backdrop-blur-md border border-white/50 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-white transition-all duration-500 rounded-[2px]"
              >
                <Twitter size={20} strokeWidth={2} />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-white/20 backdrop-blur-md border border-white/50 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-white transition-all duration-500 rounded-[2px]"
              >
                <Instagram size={20} strokeWidth={2} />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-white/20 backdrop-blur-md border border-white/50 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-white transition-all duration-500 rounded-[2px]"
              >
                <Linkedin size={20} strokeWidth={2} />
              </a>
            </div>
          </div>



          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-black mb-6 uppercase tracking-[0.1em] text-charcoal">Quick Links</h4>
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
                    className="text-slate-600 font-medium hover:text-gold transition-colors duration-500"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-black mb-6 uppercase tracking-[0.1em] text-charcoal">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0 mt-1" strokeWidth={2} />
                <div>
                  <a href="tel:+611300000000" className="text-slate-600 font-medium hover:text-sand transition-colors duration-500">
                    1300 000 000
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0 mt-1" strokeWidth={2} />
                <div>
                  <a href="mailto:hello@ironbond.com.au" className="text-slate-600 font-medium hover:text-gold transition-colors duration-500 break-all">
                    hello@ironbond.com.au
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-1" strokeWidth={2} />
                <div>
                  <p className="text-slate-600 font-medium">
                    Australia-Wide<br/>
                    Remote & On-Site Available
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-gold flex-shrink-0 mt-1" strokeWidth={2} />
                <div>
                  <p className="text-slate-600 font-medium">
                    Monday – Friday: 9:00 AM – 5:30 PM AEST<br/>
                    Saturday: By Appointment Only<br/>
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium text-slate-500">
            <div>
              © {new Date().getFullYear()} IronBond. All rights reserved. ABN 00 000 000 000
            </div>
            <div className="flex gap-8">
              <Link to="/privacy" className="hover:text-gold transition-colors duration-500">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-gold transition-colors duration-500">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="hover:text-gold transition-colors duration-500">
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
