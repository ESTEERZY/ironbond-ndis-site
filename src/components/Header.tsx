import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  onOpenBooking?: (service?: string) => void;
  onOpenAIReceptionist?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Treatments ˅', path: '/treatments' },
    { name: 'Our Team ˅', path: '/team' },
    { name: 'About Us ˅', path: '/about' },
    { name: 'Patient Info', path: '/patient-information' },
    { name: 'FAQs', path: '/faqs' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-charcoal/10 transition-all duration-300 font-sans">
      <div className="container mx-auto px-6 lg:px-12 py-3.5">
        <div className="flex items-center justify-between gap-6">

          {/* Left Brand Logo */}
          <Link 
            to="/" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex flex-col leading-none tracking-tight group"
          >
            <span className="font-serif text-2xl sm:text-3xl font-normal tracking-tight text-charcoal group-hover:text-forest transition-colors italic">
              Harbour <span className="not-italic font-semibold text-forest">Dental</span>
            </span>
            <span className="text-[9px] font-sans font-bold uppercase tracking-[0.25em] text-charcoal-muted mt-0.5">
              HOBART STUDIO
            </span>
          </Link>

          {/* Center Navigation Links */}
          <div className="hidden xl:flex items-center gap-7" role="menubar">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-sans text-xs font-bold transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-forest border-b-2 border-forest pb-0.5'
                    : 'text-charcoal-mid hover:text-forest'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Action Pill Buttons */}
          <div className="hidden sm:flex items-center gap-3 flex-shrink-0">
            <a
              href="tel:0361000000"
              className="bg-sand-soft hover:bg-sand-light text-charcoal font-sans text-xs font-bold px-4 py-2.5 rounded-full border border-charcoal/10 flex items-center gap-2 transition-all"
            >
              <Phone size={13} className="text-forest" />
              <span>Call Us (03) 6100 0000</span>
            </a>

            {onOpenBooking ? (
              <button
                onClick={() => onOpenBooking()}
                className="bg-forest hover:bg-forest-light text-white font-sans text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full transition-all shadow-sm"
              >
                Book Appointment
              </button>
            ) : (
              <Link
                to="/book"
                className="bg-forest hover:bg-forest-light text-white font-sans text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full transition-all shadow-sm"
              >
                Book Appointment
              </Link>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href="tel:0361000000"
              className="p-2 text-forest bg-forest/10 rounded-full"
              aria-label="Call clinic"
            >
              <Phone size={18} />
            </a>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-charcoal focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Drawer */}
        {isMenuOpen && (
          <div className="xl:hidden mt-3 pt-3 border-t border-charcoal/10 flex flex-col gap-3 animate-fade-in bg-white pb-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`font-serif text-lg py-1 ${
                  isActive(link.path) ? 'text-forest font-bold' : 'text-charcoal hover:text-forest'
                }`}
              >
                {link.name.replace(' ˅', '')}
              </Link>
            ))}

            <div className="pt-3 border-t border-charcoal/10 flex flex-col gap-2.5">
              <a
                href="tel:0361000000"
                className="text-xs font-bold text-charcoal flex items-center gap-2 py-1"
              >
                <Phone size={14} className="text-forest" /> Call Us (03) 6100 0000
              </a>

              {onOpenBooking ? (
                <button
                  onClick={() => { setIsMenuOpen(false); onOpenBooking(); }}
                  className="w-full bg-forest text-white py-3 text-xs font-bold uppercase tracking-wider rounded-full text-center"
                >
                  Book Appointment
                </button>
              ) : (
                <Link
                  to="/book"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full bg-forest text-white py-3 text-xs font-bold uppercase tracking-wider rounded-full text-center"
                >
                  Book Appointment
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
