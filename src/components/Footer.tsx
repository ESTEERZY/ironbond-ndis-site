import React from 'react';
import { Link } from 'react-router-dom';

interface FooterProps {
  onOpenBooking?: () => void;
  onOpenAIReceptionist?: () => void;
}

export const Footer: React.FC<FooterProps> = () => {

  return (
    <footer className="bg-charcoal text-white pt-20 pb-10 border-t border-charcoal-mid font-sans">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Col (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="font-serif text-2xl sm:text-3xl text-white tracking-tight">Harbour Dental Studio</h3>
            <p className="text-xs text-sand font-bold uppercase tracking-widest">MODERN DENTISTRY. PERSONALISED CARE.</p>
            
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm pt-2">
              Thoughtful dental care for every stage of your smile, delivered in a calm, modern environment in Hobart.
            </p>

            <div className="pt-2 flex flex-col space-y-1.5 text-xs text-slate-300">
              <p><span className="text-slate-400">Address:</span> 123 Harbour Street, Hobart TAS 7000</p>
              <p><span className="text-slate-400">Phone:</span> <a href="tel:0361000000" className="text-sand font-bold hover:underline">(03) 6100 0000</a></p>
              <p><span className="text-slate-400">Email:</span> <a href="mailto:hello@harbourdentalstudio.com.au" className="hover:text-white">hello@harbourdentalstudio.com.au</a></p>
            </div>
          </div>

          {/* Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-sand uppercase tracking-widest">PRACTICE DIRECTORY</h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li><Link to="/treatments" className="hover:text-white transition-colors">Treatments</Link></li>
              <li><Link to="/team" className="hover:text-white transition-colors">Team</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link to="/patient-information" className="hover:text-white transition-colors">Patient Information</Link></li>
              <li><Link to="/faqs" className="hover:text-white transition-colors">FAQs</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Hours & Legal (4 cols) */}
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

            <div className="pt-2 flex gap-4 text-xs text-slate-400">
              <Link to="/privacy" className="hover:text-white underline">Privacy</Link>
              <Link to="/terms" className="hover:text-white underline">Terms</Link>
            </div>
          </div>

        </div>

        {/* Bottom Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Harbour Dental Studio. 123 Harbour St, Hobart TAS 7000.</p>
          <p className="text-slate-400 font-medium">
            Website concept by <span className="text-sand font-bold">Ironbond Digital</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
