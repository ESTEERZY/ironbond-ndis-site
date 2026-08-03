import React, { useState } from 'react';
import { Menu, X, Phone, Calendar, Sparkles, Bot } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

interface HeaderProps {
  onOpenBooking?: (service?: string) => void;
  onOpenAIReceptionist?: () => void;
}


const HarbourLogo = () => (
  <div className="flex items-center gap-3">
    <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-teal via-teal-light to-emerald flex items-center justify-center text-white shadow-md shadow-teal/20">
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        {/* Tooth / Harbour Wave motif */}
        <path d="M12 4.5C8.5 4.5 6 7 6 10.5C6 14.5 7.5 19.5 9.5 21.5C10.5 22.5 11.5 21 12 19C12.5 21 13.5 22.5 14.5 21.5C16.5 19.5 18 14.5 18 10.5C18 7 15.5 4.5 12 4.5Z" fill="currentColor" fillOpacity="0.15" />
        <path d="M8 12C9.5 13.5 14.5 13.5 16 12" stroke="#FFFFFF" strokeWidth="2" />
      </svg>
    </div>
    <div className="flex flex-col leading-none">
      <span className="text-lg font-black tracking-tight text-navy">Harbour Dental</span>
      <span className="text-[11px] font-bold text-teal tracking-wider uppercase mt-0.5">Studio · Hobart</span>
    </div>
  </div>
);

export const Header: React.FC<HeaderProps> = ({ onOpenBooking, onOpenAIReceptionist }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'Our Team', href: '#team' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    if (location.pathname === '/') {
      const el = document.getElementById(targetId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/', { state: { scrollToSection: targetId } });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
      {/* Top Info Strip */}
      <div className="bg-navy text-white text-xs py-2 px-4 lg:px-12 flex items-center justify-between">
        <div className="flex items-center gap-2 text-[11px] sm:text-xs">
          <span className="bg-teal/20 text-teal-light border border-teal/30 px-2 py-0.5 rounded-full font-bold uppercase text-[10px] flex items-center gap-1">
            <Sparkles size={10} /> Ironbond Digital Demo
          </span>
          <span className="hidden md:inline text-slate-300">| Premium Dental Practice Website Showcase</span>
        </div>

        <div className="flex items-center gap-4 text-xs font-semibold">
          <button
            onClick={() => onOpenAIReceptionist?.()}
            className="flex items-center gap-1.5 text-teal hover:text-white transition-colors bg-teal/10 hover:bg-teal/20 px-3 py-1 rounded-full text-[11px] font-bold"
          >
            <Bot size={13} />
            <span>AI Receptionist Demo</span>
          </button>

          <a 
            href="tel:0361000000" 
            className="flex items-center gap-1.5 text-white hover:text-teal font-bold transition-colors"
          >
            <Phone size={13} className="text-teal" />
            <span>(03) 6100 0000</span>
          </a>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="container mx-auto px-6 lg:px-12 py-3.5" aria-label="Primary navigation">
        <div className="flex items-center justify-between gap-6">

          {/* Logo */}
          <Link 
            to="/" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="hover:opacity-95 transition-opacity flex-shrink-0"
            aria-label="Harbour Dental Studio — Home"
          >
            <HarbourLogo />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7" role="menubar">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                role="menuitem"
                onClick={(e) => handleScroll(e, link.href)}
                className="text-navy/70 hover:text-teal font-semibold text-sm transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <a
              href="tel:0361000000"
              className="border border-slate-200 text-navy hover:bg-slate-50 text-xs font-bold transition-all px-4 py-2.5 rounded-xl flex items-center gap-1.5"
            >
              <Phone size={14} className="text-teal" /> Call Clinic
            </a>
            <button
              onClick={() => onOpenBooking?.()}
              className="bg-teal text-white px-5 py-2.5 text-xs font-bold rounded-xl hover:bg-teal/90 transition-all shadow-md shadow-teal/20 flex items-center gap-1.5"
            >
              <Calendar size={14} /> Book Appointment
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-navy p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-slate-100 pt-4 animate-fade-in">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="text-navy hover:text-teal font-bold text-base py-1.5 transition-colors"
                >
                  {link.name}
                </a>
              ))}

              <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
                <button
                  onClick={() => { setIsMenuOpen(false); onOpenBooking?.(); }}
                  className="w-full bg-teal text-white py-3 text-sm font-bold rounded-xl hover:bg-teal/90 flex items-center justify-center gap-2 shadow-sm"
                >
                  <Calendar size={16} /> Book an Appointment
                </button>

                <button
                  onClick={() => { setIsMenuOpen(false); onOpenAIReceptionist?.(); }}
                  className="w-full bg-navy text-white py-3 text-sm font-bold rounded-xl flex items-center justify-center gap-2"
                >
                  <Bot size={16} className="text-teal" /> Try Virtual Receptionist
                </button>

                <a
                  href="tel:0361000000"
                  className="w-full border border-slate-200 text-navy py-3 text-sm font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-slate-50"
                >
                  <Phone size={15} className="text-teal" /> Call Clinic: (03) 6100 0000
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
