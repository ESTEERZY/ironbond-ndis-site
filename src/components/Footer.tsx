import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin, ShieldCheck, Heart, Award } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const HorizonMarkSmall = () => (
  <svg viewBox="0 0 30 30" fill="none" className="w-8 h-8 flex-shrink-0" aria-hidden="true">
    <rect width="30" height="30" rx="7" fill="#0B1F3A" />
    <path d="M6 20 Q15 10 24 20" stroke="#00B4D8" strokeWidth="2" strokeLinecap="round" fill="none" />
    <line x1="5.5" y1="20" x2="24.5" y2="20" stroke="#00B4D8" strokeWidth="1.2" strokeLinecap="round" />
    <circle cx="15" cy="14" r="2.5" fill="#10B981" />
  </svg>
);

const columns = [
  {
    title: 'Our Services',
    links: [
      { label: 'Support Coordination', href: '#services' },
      { label: 'Core Supports', href: '#services' },
      { label: 'Community Participation', href: '#services' },
      { label: 'Supported Independent Living', href: '#services' },
      { label: 'Respite & Short-Term Accommodation', href: '#services' },
      { label: 'Allied Health', href: '#services' },
      { label: 'Early Childhood Supports', href: '#services' },
      { label: 'Plan Management', href: '#services' },
    ],
  },
  {
    title: 'About Horizon',
    links: [
      { label: 'About Us', href: '#about' },
      { label: 'Our Team', href: '#team' },
      { label: 'Why Choose Us', href: '#why-us' },
      { label: 'Participant Stories', href: '#stories' },
      { label: 'Frequently Asked Questions', href: '#faq' },
      { label: 'Join Our Team', href: '#contact' },
    ],
  },
  {
    title: 'For Referrers',
    links: [
      { label: 'Make a Referral', href: '#contact' },
      { label: 'Hospital Discharge Planners', href: '#contact' },
      { label: 'Support Coordinators', href: '#contact' },
      { label: 'Healthcare Professionals', href: '#contact' },
      { label: 'Areas We Serve', href: '#areas' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Accessibility Statement', href: '#faq' },
      { label: 'NDIS Commission Complaints', href: '#contact' },
      { label: 'Sitemap', href: '/sitemap' },
    ],
  },
];

const trustBadges = [
  { icon: ShieldCheck, label: 'Registered NDIS Provider', color: 'text-emerald' },
  { icon: Heart, label: 'Person-Centred Care', color: 'text-rose-400' },
  { icon: Award, label: 'NDIS Practice Standards', color: 'text-teal' },
];

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    if (location.pathname === '/') {
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/', { state: { scrollToSection: targetId } });
    }
  };

  return (
    <footer className="bg-navy text-white">
      {/* Pre-footer CTA */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-6 lg:px-12 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-black text-white mb-2">Ready to take the next step?</h3>
              <p className="text-white/50 text-sm">Call us or submit a referral — we'll respond within one business day.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <a href="tel:1300467426" className="flex items-center gap-2 bg-white/10 border border-white/20 text-white px-6 py-3 rounded-xl text-sm font-bold hover:bg-white/20 transition-all">
                <Phone size={14} /> 1300 467 426
              </a>
              <a href="#contact" onClick={(e) => handleScroll(e, '#contact')}
                className="bg-teal text-white px-8 py-3.5 rounded-xl text-sm font-bold hover:bg-teal/90 transition-all shadow-lg shadow-teal/20"
              >
                Make a Referral →
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 pt-14 pb-8">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand column */}
          <div className="col-span-2 lg:col-span-1 space-y-4">
            <Link to="/" className="flex items-center gap-2.5 hover:opacity-90 transition-opacity">
              <HorizonMarkSmall />
              <div className="flex flex-col leading-none">
                <span className="text-[13px] font-black tracking-tight text-white">Horizon Support</span>
                <span className="text-[9px] font-semibold tracking-widest text-white/40 uppercase">Support Services</span>
              </div>
            </Link>
            <p className="text-white/40 text-xs leading-relaxed">
              Registered NDIS provider delivering person-centred support across Melbourne and Victoria since 2017.
            </p>
            <p className="text-white/30 text-[11px] font-semibold">NDIS Reg. No. 4050023456</p>
            <div className="flex gap-2.5">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#"
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
                      <Link to={link.href} className="text-white/50 text-xs font-medium hover:text-teal transition-colors duration-300">{link.label}</Link>
                    ) : (
                      <a href={link.href} onClick={(e) => handleScroll(e, link.href)}
                        className="text-white/50 text-xs font-medium hover:text-teal transition-colors duration-300"
                      >{link.label}</a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap gap-4 border-y border-white/10 py-6 mb-6">
          {trustBadges.map(({ icon: Icon, label, color }) => (
            <div key={label} className="flex items-center gap-1.5">
              <Icon size={12} className={color} />
              <span className="text-[11px] font-semibold text-white/40">{label}</span>
            </div>
          ))}
          <div className="ml-auto text-[11px] text-white/25 font-medium">ABN 51 287 436 892</div>
        </div>

        {/* Contact strip */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <a href="tel:1300467426" className="flex items-center gap-2 text-white/40 text-xs hover:text-teal transition-colors">
            <Phone size={12} className="text-teal" /> 1300 467 426
          </a>
          <a href="mailto:hello@horizonsupport.com.au" className="flex items-center gap-2 text-white/40 text-xs hover:text-teal transition-colors">
            <Mail size={12} className="text-teal" /> hello@horizonsupport.com.au
          </a>
          <div className="flex items-center gap-2 text-white/40 text-xs">
            <MapPin size={12} className="text-teal" /> Level 3, 84 William Street, Melbourne VIC 3000
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] font-medium text-white/25">
          <div>© {new Date().getFullYear()} Horizon Support Services Pty Ltd. All rights reserved.</div>
          <div className="flex gap-5">
            <Link to="/privacy" className="hover:text-teal transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-teal transition-colors">Terms of Service</Link>
            <Link to="/sitemap" className="hover:text-teal transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
