import React, { useState } from 'react';
import { Mail, CheckCircle2, Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FooterProps {
  onOpenBooking?: () => void;
  onOpenAIReceptionist?: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="font-sans">
      
      {/* 01 — PRE-FOOTER SMILE GUIDE & NEWSLETTER SECTION */}
      <section className="py-20 bg-white border-t border-charcoal/10 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
            
            {/* Left Column: Brochure Graphic Feature */}
            <div className="lg:col-span-6 relative">
              <div className="bg-ivory border border-charcoal/10 rounded-3xl p-8 sm:p-10 shadow-lg relative flex flex-col sm:flex-row items-center gap-6">
                
                {/* Brochure Mockup Image */}
                <div className="w-full sm:w-1/2 aspect-[3/4] overflow-hidden rounded-2xl bg-sand-light shadow-md border border-charcoal/10 relative">
                  <img
                    src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80"
                    alt="Your Dream Smile guide Harbour Dental Studio"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-sand">FREE GUIDE</p>
                    <p className="font-serif text-lg leading-tight">Your <span className="font-bold text-sand">Dream Smile</span>, in just one day.</p>
                  </div>
                </div>

                <div className="w-full sm:w-1/2 space-y-3 text-center sm:text-left">
                  <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-forest block">
                    EXCLUSIVE SMILE GUIDE
                  </span>
                  <h3 className="font-serif text-2xl text-charcoal leading-tight">
                    Transforming Your Smile
                  </h3>
                  <p className="text-xs text-charcoal-muted leading-relaxed">
                    Download our complimentary guide to modern cosmetic dentistry, clear aligners, and preventative dental care.
                  </p>
                </div>

              </div>
            </div>

            {/* Right Column: Clean Minimal Subscribe Form */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <h3 className="font-serif text-3xl font-normal text-charcoal">Stay Connected</h3>
                <p className="text-xs text-charcoal-muted mt-1 font-sans">
                  Receive dental health tips, special offers, and clinic updates directly to your inbox.
                </p>
              </div>

              {subscribed ? (
                <div className="bg-forest/10 border border-forest text-forest rounded-2xl p-6 text-center space-y-2">
                  <CheckCircle2 size={32} className="mx-auto text-forest" />
                  <p className="font-serif text-xl text-charcoal">Thank you for subscribing!</p>
                  <p className="text-xs text-charcoal-muted">
                    We've sent your free smile guide to <strong>{email}</strong>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-5">
                  <div>
                    <input
                      type="text"
                      placeholder="First Name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full pb-2 pt-1 border-b border-charcoal/20 focus:border-forest text-xs focus:outline-none bg-transparent text-charcoal placeholder-charcoal-light font-medium"
                    />
                  </div>

                  <div className="relative">
                    <Mail size={15} className="absolute left-0 top-2.5 text-charcoal-light" />
                    <input
                      type="email"
                      required
                      placeholder="Email*"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pb-2 pt-1 pl-6 border-b border-charcoal/20 focus:border-forest text-xs focus:outline-none bg-transparent text-charcoal placeholder-charcoal-light font-medium"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto bg-forest hover:bg-forest-light text-white font-sans text-xs font-bold uppercase tracking-widest px-10 py-3.5 rounded-full transition-all shadow-md hover:scale-105"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* 02 — MINIMALIST LIGHT FOOTER BAR (PROUD SMILE STYLE) */}
      <section className="py-12 bg-ivory border-t border-charcoal/10 text-charcoal">
        <div className="container mx-auto px-6 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-8 border-b border-charcoal/10">
            
            {/* Left: Brand Logo & Legal Disclaimer */}
            <div className="lg:col-span-7 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Link to="/" className="flex flex-col leading-none tracking-tight flex-shrink-0">
                <span className="font-serif text-2xl font-normal tracking-tight text-charcoal italic">
                  Harbour <span className="not-italic font-semibold text-forest">Dental</span>
                </span>
                <span className="text-[9px] font-sans font-bold uppercase tracking-[0.2em] text-charcoal-muted mt-0.5">
                  HOBART STUDIO
                </span>
              </Link>

              <p className="text-[11px] text-charcoal-muted leading-relaxed font-sans max-w-lg">
                © Harbour Dental Studio is a registered dental practice in Hobart, Tasmania. All treatment plans and clinical outcomes are subject to individual practitioner assessment. All rights reserved.
              </p>
            </div>

            {/* Right: Social & Attribution */}
            <div className="lg:col-span-5 flex flex-col sm:flex-row items-start sm:items-center justify-start lg:justify-end gap-6 text-xs text-charcoal-muted">
              <div className="flex items-center gap-3">
                <a href="#" className="w-8 h-8 rounded-full bg-white border border-charcoal/10 flex items-center justify-center text-charcoal hover:text-forest transition-colors" aria-label="Facebook">
                  <Facebook size={15} />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-white border border-charcoal/10 flex items-center justify-center text-charcoal hover:text-forest transition-colors" aria-label="Instagram">
                  <Instagram size={15} />
                </a>
              </div>

              <p className="text-[11px] font-medium text-charcoal-muted">
                Website concept by <span className="font-bold text-forest">Ironbond Digital</span>
              </p>
            </div>

          </div>

          {/* Bottom Uppercase Links Row */}
          <div className="pt-6 flex flex-wrap items-center gap-6 text-[11px] font-sans font-bold uppercase tracking-widest text-forest">
            <Link to="/terms" className="hover:text-charcoal transition-colors">TERMS AND CONDITIONS</Link>
            <Link to="/privacy" className="hover:text-charcoal transition-colors">PRIVACY POLICY</Link>
            <Link to="/contact" className="hover:text-charcoal transition-colors">CONTACT</Link>
          </div>

        </div>
      </section>

    </footer>
  );
};

export default Footer;
