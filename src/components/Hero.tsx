import React from 'react';
import { Phone, Calendar } from 'lucide-react';

import { Link } from 'react-router-dom';

interface HeroProps {
  onOpenBooking?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section id="hero" className="pt-32 lg:pt-40 pb-16 lg:pb-24 bg-ivory text-charcoal overflow-hidden relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* LEFT: Editorial Content Block */}
          <div className="w-full lg:w-5/12 flex flex-col items-start space-y-6">
            
            {/* Small Eyebrow */}
            <div className="text-[11px] font-sans font-bold uppercase tracking-[0.25em] text-forest">
              HARBOUR DENTAL STUDIO · HOBART
            </div>

            {/* Large Editorial Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.08] text-charcoal tracking-tight">
              Modern dentistry.<br />
              <span className="italic font-normal text-forest">Personalised care.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base text-charcoal-muted leading-relaxed max-w-lg font-sans">
              Thoughtful dental care in a calm, modern environment, from routine check-ups to cosmetic and restorative treatments.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2 w-full sm:w-auto">
              {onOpenBooking ? (
                <button
                  onClick={onOpenBooking}
                  className="bg-forest hover:bg-forest-light text-white font-sans text-xs font-bold uppercase tracking-widest px-8 py-4 transition-all duration-300 flex items-center justify-center gap-3 shadow-md"
                >
                  <Calendar size={15} />
                  BOOK AN APPOINTMENT
                </button>
              ) : (
                <Link
                  to="/book"
                  className="bg-forest hover:bg-forest-light text-white font-sans text-xs font-bold uppercase tracking-widest px-8 py-4 transition-all duration-300 flex items-center justify-center gap-3 shadow-md"
                >
                  <Calendar size={15} />
                  BOOK AN APPOINTMENT
                </Link>
              )}

              <a
                href="tel:0361000000"
                className="border border-charcoal/20 hover:border-charcoal text-charcoal font-sans text-xs font-bold uppercase tracking-widest px-7 py-4 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone size={15} className="text-forest" />
                CALL THE CLINIC
              </a>
            </div>

            {/* Subtle Credibility Text Strip (NO Cards) */}
            <div className="w-full pt-8 mt-4 border-t border-charcoal/10">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] font-sans font-bold uppercase tracking-widest text-charcoal-muted">
                <span>NEW PATIENTS WELCOME</span>
                <span className="text-charcoal/20">•</span>
                <span>MODERN CLINIC</span>
                <span className="text-charcoal/20">•</span>
                <span>PERSONALISED CARE</span>
                <span className="text-charcoal/20">•</span>
                <span>CONVENIENT APPOINTMENTS</span>
              </div>
            </div>

          </div>

          {/* RIGHT: Large Premium Photography Frame */}
          <div className="w-full lg:w-7/12">
            <div className="relative aspect-[4/3] lg:aspect-[16/11] overflow-hidden bg-sand-light shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1400&q=80"
                alt="Harbour Dental Studio Hobart clinic interior"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-charcoal/10 pointer-events-none"></div>

              {/* Minimal Editorial Badge overlay */}
              <div className="absolute bottom-6 left-6 right-6 sm:right-auto bg-ivory/95 backdrop-blur-md p-5 border border-charcoal/10 max-w-sm">
                <p className="text-[10px] font-sans font-bold uppercase tracking-widest text-forest">HOBART PRACTICE</p>
                <p className="font-serif text-lg text-charcoal mt-0.5">123 Harbour Street, Hobart TAS 7000</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;