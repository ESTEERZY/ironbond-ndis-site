import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin, ShieldCheck, Accessibility, Lock, Zap, Server } from 'lucide-react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Footer = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    if (location.pathname === '/') {
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/', { state: { scrollToSection: targetId } })
    }
  }

  const columns = [
    {
      title: 'Services',
      links: [
        { label: 'Participant Intake Portal', href: '#portfolio' },
        { label: 'Staff Management Dashboard', href: '#portfolio' },
        { label: 'Provider Website', href: '#portfolio' },
        { label: 'Client Portal', href: '#portfolio' },
        { label: 'Custom Integrations', href: '#integrations' },
      ],
    },
    {
      title: 'Solutions',
      links: [
        { label: 'Allied Health', href: '#portfolio' },
        { label: 'Support Coordinators', href: '#portfolio' },
        { label: 'Plan Managers', href: '#portfolio' },
        { label: 'Core Supports', href: '#portfolio' },
        { label: 'Custom Builds', href: '#contact' },
      ],
    },
    {
      title: 'Accessibility',
      links: [
        { label: 'WCAG 2.2 AA Compliance', href: '#compliance' },
        { label: 'Screen Reader Support', href: '#compliance' },
        { label: 'Keyboard Navigation', href: '#compliance' },
        { label: 'Accessible Forms', href: '#compliance' },
        { label: 'Accessibility Statement', href: '#compliance' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '#about' },
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
        { label: 'Contact', href: '#contact' },
        { label: 'Book Free Audit', href: '#contact' },
      ],
    },
  ]

  const trustBadges = [
    { icon: ShieldCheck, label: 'WCAG 2.2 AA', color: 'text-emerald' },
    { icon: Server, label: 'Secure AU Hosting', color: 'text-teal' },
    { icon: Accessibility, label: 'Registration Ready', color: 'text-teal' },
    { icon: Lock, label: 'Privacy Compliant', color: 'text-white/50' },
    { icon: Zap, label: 'Built in Australia', color: 'text-amber-400' },
  ]

  return (
    <footer className="bg-navy text-white">
      {/* Pre-footer CTA */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-6 lg:px-12 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-black text-white mb-2">Ready to present your platform to the Commission?</h3>
              <p className="text-white/50 text-sm">Book a free NDIS digital audit — delivered within 48 hours, no obligation.</p>
            </div>
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, '#contact')}
              className="flex-shrink-0 bg-teal text-white px-8 py-3.5 rounded-xl text-sm font-bold hover:bg-teal/90 transition-all duration-300 shadow-lg shadow-teal/20"
            >
              Book Free Audit →
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 pt-14 pb-8">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand column */}
          <div className="col-span-2 lg:col-span-1 space-y-5">
            <Link to="/" className="text-xl font-black tracking-tight uppercase flex items-center gap-2.5 hover:text-teal transition-colors">
              <div className="w-8 h-8 bg-teal rounded-lg flex items-center justify-center text-white text-xs font-black">NP</div>
              <span>NDIS <span className="text-teal">Prototype</span></span>
            </Link>
            <p className="text-white/40 text-xs leading-relaxed">
              Australia's dedicated NDIS digital compliance platform. Built for allied health, support coordinators, plan managers, and core supports providers.
            </p>
            <div className="flex gap-2.5">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 bg-white/5 border border-white/10 flex items-center justify-center hover:bg-teal hover:border-teal transition-all duration-300 rounded-lg"
                >
                  <Icon size={14} strokeWidth={2} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-bold tracking-widest uppercase text-white/30 mb-5">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith('/') ? (
                      <Link
                        to={link.href}
                        className="text-white/50 text-xs font-medium hover:text-teal transition-colors duration-300"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        onClick={(e) => handleScroll(e, link.href)}
                        className="text-white/50 text-xs font-medium hover:text-teal transition-colors duration-300"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Trust badges row */}
        <div className="flex flex-wrap gap-3 border-y border-white/10 py-6 mb-6">
          {trustBadges.map(({ icon: Icon, label, color }) => (
            <div key={label} className="flex items-center gap-1.5">
              <Icon size={12} className={color} />
              <span className="text-[11px] font-semibold text-white/40">{label}</span>
            </div>
          ))}
        </div>

        {/* Contact strip */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <a href="tel:+611300000000" className="flex items-center gap-2 text-white/40 text-xs hover:text-teal transition-colors">
            <Phone size={13} className="text-teal" /> 1300 000 000
          </a>
          <a href="mailto:hello@ndisprototype.com.au" className="flex items-center gap-2 text-white/40 text-xs hover:text-teal transition-colors">
            <Mail size={13} className="text-teal" /> hello@ndisprototype.com.au
          </a>
          <div className="flex items-center gap-2 text-white/40 text-xs">
            <MapPin size={13} className="text-teal" /> Australia-Wide · Remote & On-Site
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] font-medium text-white/25">
          <div>© {new Date().getFullYear()} NDIS Prototype. All rights reserved. ABN 00 000 000 000</div>
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
