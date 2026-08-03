import React from 'react';
import { Phone, Calendar, Sparkles } from 'lucide-react';

import { Link } from 'react-router-dom';

interface HeroProps {
  onOpenBooking?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section id="hero" className="relative w-full pt-36 sm:pt-44 pb-16 lg:pb-24 bg-ivory text-charcoal overflow-hidden border-b border-charcoal/10 font-sans">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Cursive Script Accent Line */}
            <div className="font-script text-3xl sm:text-4xl text-forest font-normal tracking-wide">
              Confidence starts with a smile
            </div>

            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 bg-forest/10 border border-forest/20 px-4 py-1.5 rounded-full text-[11px] font-sans font-bold uppercase tracking-[0.25em] text-forest">
              <Sparkles size={12} className="text-forest" />
              <span>HARBOUR DENTAL STUDIO · HOBART</span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-6xl font-normal leading-[1.08] text-charcoal tracking-tight">
              Modern dentistry.<br />
              <span className="italic font-normal text-forest">Personalised care.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base text-charcoal-muted leading-relaxed max-w-xl font-sans">
              Thoughtful dental care in a comfortable, modern environment — from routine check-ups to cosmetic and restorative treatments.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              {onOpenBooking ? (
                <button
                  onClick={onOpenBooking}
                  className="bg-forest hover:bg-forest-light text-white font-sans text-xs font-bold uppercase tracking-widest px-8 py-4 transition-all duration-300 flex items-center justify-center gap-3 shadow-md hover:scale-105"
                >
                  <Calendar size={16} />
                  BOOK AN APPOINTMENT
                </button>
              ) : (
                <Link
                  to="/book"
                  className="bg-forest hover:bg-forest-light text-white font-sans text-xs font-bold uppercase tracking-widest px-8 py-4 transition-all duration-300 flex items-center justify-center gap-3 shadow-md hover:scale-105"
                >
                  <Calendar size={16} />
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

              <Link
                to="/about"
                className="bg-sand text-charcoal hover:bg-sand-light font-sans text-xs font-bold uppercase tracking-widest px-6 py-4 rounded-full transition-all duration-300 text-center shadow-sm"
              >
                WHY CHOOSE HARBOUR DENTAL
              </Link>
            </div>

            {/* Subtle Credibility Text Strip */}
            <div className="pt-6 border-t border-charcoal/10">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] font-sans font-bold uppercase tracking-widest text-charcoal-muted">
                <span>NEW PATIENTS WELCOME</span>
                <span className="text-charcoal/20">•</span>
                <span>PERSONALISED CARE</span>
                <span className="text-charcoal/20">•</span>
                <span>MODERN CLINIC</span>
                <span className="text-charcoal/20">•</span>
                <span>CONVENIENT APPOINTMENTS</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-Resolution Dentist Photograph Frame */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] lg:aspect-[16/12] overflow-hidden bg-sand-light shadow-2xl border border-charcoal/10 group">
              <img
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1400&q=80"
                alt="Dentist interacting naturally with a patient at Harbour Dental Studio"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-charcoal/10 pointer-events-none"></div>

              {/* Editorial Location Badge Overlay */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-5 border border-charcoal/10 shadow-lg">
                <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-forest">HOBART PRACTICE</span>
                <p className="font-serif text-lg text-charcoal mt-0.5">123 Harbour Street, Hobart TAS 7000</p>
                <p className="text-xs text-charcoal-muted font-sans mt-0.5">Thoughtful care in a calm, modern environment</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;