import React, { useState } from 'react';
import { Menu, X, Phone, MapPin, Calendar, MessageSquare } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  onOpenBooking?: (service?: string) => void;
  onOpenAIReceptionist?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking, onOpenAIReceptionist }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Treatments', path: '/treatments' },
    { name: 'Our Team', path: '/team' },
    { name: 'About', path: '/about' },
    { name: 'Patient Information', path: '/patient-information' },
    { name: 'FAQs', path: '/faqs' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      
      {/* Top Location & Direct Line Strip */}
      <div className="bg-charcoal text-slate-300 py-1.5 px-6 border-b border-white/10 hidden sm:block text-[11px] font-sans">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-sand font-bold">
              <MapPin size={12} className="text-sand" /> Hobart Studio: 123 Harbour St
            </span>
            <a href="tel:0361000000" className="hover:text-white flex items-center gap-1 transition-colors">
              <Phone size={12} className="text-forest-light" /> (03) 6100 0000
            </a>
            <span className="hidden md:inline text-slate-500">•</span>
            <span className="hidden md:inline text-slate-300 font-medium">
              Emergency Reserved Slots Available Daily
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenAIReceptionist}
              className="text-sand hover:text-white font-bold flex items-center gap-1 transition-colors uppercase tracking-wider text-[10px]"
            >
              <MessageSquare size={12} /> 24/7 AI Concierge
            </button>
          </div>
        </div>
      </div>

      {/* Main Dental Navigation Bar */}
      <nav className="bg-ivory/95 backdrop-blur-md border-b border-charcoal/10" aria-label="Primary navigation">
        <div className="container mx-auto px-6 lg:px-12 py-4">
          <div className="flex items-center justify-between gap-6">

            {/* Left Brand Identity */}
            <Link 
              to="/" 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex flex-col leading-none tracking-tight group"
            >
              <span className="font-serif text-xl sm:text-2xl font-normal tracking-tight text-charcoal group-hover:text-forest transition-colors">
                HARBOUR DENTAL STUDIO
              </span>
              <span className="text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-forest mt-1">
                HOBART · TASMANIA
              </span>
            </Link>

            {/* Center Navigation Links */}
            <div className="hidden xl:flex items-center gap-8" role="menubar">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`font-sans text-xs uppercase tracking-widest transition-colors duration-200 ${
                    isActive(link.path)
                      ? 'text-forest font-bold border-b-2 border-forest pb-0.5'
                      : 'text-charcoal-muted hover:text-charcoal'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Right Action Trigger */}
            <div className="hidden sm:flex items-center gap-6 flex-shrink-0">
              <a
                href="tel:0361000000"
                className="text-xs font-sans font-bold tracking-wider text-charcoal hover:text-forest transition-colors flex items-center gap-2"
              >
                <Phone size={13} className="text-forest" />
                <span>(03) 6100 0000</span>
              </a>

              {onOpenBooking ? (
                <button
                  onClick={() => onOpenBooking()}
                  className="bg-forest hover:bg-forest-light text-white font-sans text-xs font-bold uppercase tracking-widest px-6 py-3 transition-all duration-300 shadow-sm"
                >
                  BOOK AN APPOINTMENT
                </button>
              ) : (
                <Link
                  to="/book"
                  className="bg-forest hover:bg-forest-light text-white font-sans text-xs font-bold uppercase tracking-widest px-6 py-3 transition-all duration-300 shadow-sm"
                >
                  BOOK AN APPOINTMENT
                </Link>
              )}
            </div>

            {/* Mobile Actions: Call, Book, Menu */}
            <div className="flex sm:hidden items-center gap-2">
              <a
                href="tel:0361000000"
                className="p-2 text-forest bg-forest/10 rounded-lg"
                aria-label="Call clinic"
              >
                <Phone size={18} />
              </a>

              <button
                onClick={() => onOpenBooking ? onOpenBooking() : null}
                className="p-2 text-white bg-forest rounded-lg text-xs font-bold uppercase tracking-wider"
                aria-label="Book appointment"
              >
                <Calendar size={18} />
              </button>

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
            <div className="xl:hidden mt-4 pt-4 border-t border-charcoal/10 flex flex-col gap-4 animate-fade-in bg-ivory pb-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-serif text-lg py-1 ${
                    isActive(link.path) ? 'text-forest font-bold' : 'text-charcoal hover:text-forest'
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <div className="pt-4 border-t border-charcoal/10 flex flex-col gap-3">
                <a
                  href="tel:0361000000"
                  className="text-xs font-bold tracking-wider text-charcoal flex items-center gap-2 py-2"
                >
                  <Phone size={15} className="text-forest" /> CALL (03) 6100 0000
                </a>

                {onOpenBooking ? (
                  <button
                    onClick={() => { setIsMenuOpen(false); onOpenBooking(); }}
                    className="w-full bg-forest text-white py-3.5 text-xs font-bold uppercase tracking-widest text-center"
                  >
                    BOOK AN APPOINTMENT
                  </button>
                ) : (
                  <Link
                    to="/book"
                    onClick={() => setIsMenuOpen(false)}
                    className="w-full bg-forest text-white py-3.5 text-xs font-bold uppercase tracking-widest text-center"
                  >
                    BOOK AN APPOINTMENT
                  </Link>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
