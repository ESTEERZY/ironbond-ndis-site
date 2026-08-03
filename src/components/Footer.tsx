import React from 'react';
import { Link } from 'react-router-dom';

interface FooterProps {
  onOpenBooking?: () => void;
  onOpenAIReceptionist?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {

  return (
    <footer className="bg-charcoal text-white pt-20 pb-10 border-t border-charcoal-mid font-sans">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Main Footer Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Col (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="font-serif text-2xl text-white tracking-tight">HARBOUR DENTAL STUDIO</h3>
            <p className="text-xs text-sand font-bold uppercase tracking-widest">HOBART · TASMANIA</p>
            
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm pt-2">
              Thoughtful dental care for every stage of your smile, delivered in a calm, modern environment.
            </p>

            <div className="pt-4 flex items-center gap-4 text-xs font-bold text-slate-300">
              <a href="tel:0361000000" className="hover:text-sand transition-colors">(03) 6100 0000</a>
              <span>•</span>
              <a href="mailto:hello@harbourdentalstudio.com.au" className="hover:text-sand transition-colors">hello@harbourdentalstudio.com.au</a>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-sand uppercase tracking-widest">PRACTICE DIRECTORY</h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li><Link to="/treatments" className="hover:text-white transition-colors">Treatments & Services</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Harbour Dental</Link></li>
              <li><Link to="/team" className="hover:text-white transition-colors">Our Dentists & Team</Link></li>
              <li><Link to="/patient-information" className="hover:text-white transition-colors">Patient Information</Link></li>
              <li><Link to="/faqs" className="hover:text-white transition-colors">Frequently Asked Questions</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact & Location</Link></li>
            </ul>
          </div>

          {/* Opening Hours & Action (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold text-sand uppercase tracking-widest">HOURS & APPOINTMENTS</h4>
            <div className="text-xs text-slate-300 space-y-1.5 font-medium">
              <div className="flex justify-between border-b border-white/5 pb-1">
                <span>Monday – Friday:</span>
                <span className="font-bold text-white">8:00am – 6:00pm</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-1">
                <span>Saturday:</span>
                <span className="font-bold text-white">9:00am – 1:00pm</span>
              </div>
              <div className="flex justify-between text-slate-500">
                <span>Sunday:</span>
                <span>Closed</span>
              </div>
            </div>

            <div className="pt-2 flex gap-3">
              {onOpenBooking ? (
                <button
                  onClick={() => onOpenBooking()}
                  className="w-full bg-forest hover:bg-forest-light text-white font-sans text-xs font-bold uppercase tracking-widest py-3 transition-colors text-center"
                >
                  BOOK ONLINE
                </button>
              ) : (
                <Link
                  to="/book"
                  className="w-full bg-forest hover:bg-forest-light text-white font-sans text-xs font-bold uppercase tracking-widest py-3 transition-colors text-center"
                >
                  BOOK ONLINE
                </Link>
              )}
            </div>
          </div>

        </div>

        {/* Bottom Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Harbour Dental Studio. 123 Harbour St, Hobart TAS 7000.</p>
          <p className="text-slate-400 font-medium">
            Demo website created by <span className="text-sand font-bold">Ironbond Digital</span>.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
