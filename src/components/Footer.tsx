import React from 'react';
import { Phone, Mail, MapPin, Sparkles } from 'lucide-react';

interface FooterProps {
  onOpenBooking?: () => void;
  onOpenAIReceptionist?: () => void;
}


export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onOpenAIReceptionist }) => {
  return (
    <footer className="bg-navy text-white pt-16 pb-8 border-t border-navy-light relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Col (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-teal flex items-center justify-center text-navy font-black shadow-md">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 4.5C8.5 4.5 6 7 6 10.5C6 14.5 7.5 19.5 9.5 21.5C10.5 22.5 11.5 21 12 19C12.5 21 13.5 22.5 14.5 21.5C16.5 19.5 18 14.5 18 10.5C18 7 15.5 4.5 12 4.5Z" fill="currentColor" fillOpacity="0.2" />
                  <path d="M8 12C9.5 13.5 14.5 13.5 16 12" stroke="#FFFFFF" strokeWidth="2" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-black text-white leading-none">Harbour Dental Studio</h3>
                <p className="text-xs text-teal font-semibold mt-0.5">Hobart, Tasmania</p>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              Dental care for the whole family. Providing compassionate, gentle dental check-ups, cosmetic dentistry, emergency care, aligners and restorative treatments in Hobart.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {['Facebook', 'Instagram', 'LinkedIn'].map((platform) => (
                <a
                  key={platform}
                  href={`#${platform.toLowerCase()}`}
                  onClick={(e) => e.preventDefault()}
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-teal hover:text-white border border-white/10 flex items-center justify-center text-xs font-bold transition-all"
                  aria-label={`Harbour Dental Studio on ${platform}`}
                >
                  {platform[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider text-teal">Quick Links</h4>
            <ul className="space-y-2 text-xs text-slate-300 font-medium">
              <li>
                <a href="#hero" className="hover:text-teal transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="hover:text-teal transition-colors">Services</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-teal transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#team" className="hover:text-teal transition-colors">Our Team</a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-teal transition-colors">FAQs</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-teal transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider text-teal">Contact Us</h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li className="flex items-start gap-2">
                <MapPin size={14} className="text-teal flex-shrink-0 mt-0.5" />
                <span>123 Harbour Street, Hobart TAS 7000</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-teal flex-shrink-0" />
                <a href="tel:0361000000" className="hover:text-teal font-bold text-white">(03) 6100 0000</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-teal flex-shrink-0" />
                <a href="mailto:hello@harbourdentalstudio.com.au" className="hover:text-teal">hello@harbourdentalstudio.com.au</a>
              </li>
              <li className="pt-2">
                <button
                  onClick={() => onOpenAIReceptionist?.()}
                  className="bg-white/10 hover:bg-white/20 text-teal border border-white/15 px-3 py-1.5 rounded-lg text-[11px] font-bold transition-all flex items-center gap-1.5"
                >
                  <Sparkles size={12} /> AI Virtual Receptionist Demo
                </button>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider text-teal">Opening Hours</h4>
            <div className="text-xs text-slate-300 space-y-1.5">
              <div className="flex justify-between border-b border-white/5 pb-1">
                <span>Mon – Fri:</span>
                <span className="font-bold text-white">8:00am – 6:00pm</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-1">
                <span>Saturday:</span>
                <span className="font-bold text-white">9:00am – 1:00pm</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Sunday:</span>
                <span>Closed</span>
              </div>
            </div>

            <button
              onClick={() => onOpenBooking?.()}
              className="w-full mt-3 bg-teal hover:bg-teal/90 text-white font-bold py-2.5 px-3 rounded-xl text-xs transition-all shadow-sm"
            >
              Book an Appointment
            </button>
          </div>

        </div>

        {/* Small Footer Text */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Harbour Dental Studio. All rights reserved.</p>

          <p className="text-slate-300 font-bold bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full text-[11px]">
            Demo website created by <span className="text-teal font-extrabold">Ironbond Digital</span>.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
