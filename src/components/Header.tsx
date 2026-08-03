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
    { name: 'Treatments', path: '/treatments' },
    { name: 'About', path: '/about' },
    { name: 'Our Team', path: '/team' },
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-ivory/90 backdrop-blur-md border-b border-charcoal/10 transition-all duration-300">
      <nav className="container mx-auto px-6 lg:px-12 py-5" aria-label="Primary navigation">
        <div className="flex items-center justify-between gap-6">

          {/* Left Brand Identity */}
          <Link 
            to="/" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex flex-col leading-none tracking-tight group"
          >
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-charcoal group-hover:text-forest transition-colors">
              HARBOUR DENTAL STUDIO
            </span>
            <span className="text-[10px] font-sans font-medium uppercase tracking-[0.2em] text-charcoal-muted mt-1">
              HOBART · TASMANIA
            </span>
          </Link>

          {/* Center/Right Minimalist Nav Links */}
          <div className="hidden xl:flex items-center gap-8" role="menubar">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-sans text-xs uppercase tracking-widest transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-forest font-bold border-b border-forest pb-0.5'
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
              <span>CALL (03) 6100 0000</span>
            </a>

            {onOpenBooking ? (
              <button
                onClick={() => onOpenBooking()}
                className="bg-forest hover:bg-forest-light text-white font-sans text-xs font-bold uppercase tracking-widest px-6 py-3 transition-all duration-300 shadow-sm"
              >
                BOOK APPOINTMENT
              </button>
            ) : (
              <Link
                to="/book"
                className="bg-forest hover:bg-forest-light text-white font-sans text-xs font-bold uppercase tracking-widest px-6 py-3 transition-all duration-300 shadow-sm"
              >
                BOOK APPOINTMENT
              </Link>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="xl:hidden text-charcoal p-2 focus:outline-none"
            aria-label="Toggle Navigation Menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        {isMenuOpen && (
          <div className="xl:hidden mt-6 pt-6 border-t border-charcoal/10 flex flex-col gap-4 animate-fade-in bg-ivory pb-4">
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
                  BOOK APPOINTMENT
                </button>
              ) : (
                <Link
                  to="/book"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full bg-forest text-white py-3.5 text-xs font-bold uppercase tracking-widest text-center"
                >
                  BOOK APPOINTMENT
                </Link>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
