import React from 'react';
import { Phone, Calendar, ChevronDown, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroProps {
  onOpenBooking?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section id="hero" className="relative w-full min-h-screen flex flex-col justify-between pt-36 sm:pt-40 pb-12 px-6 lg:px-12 bg-charcoal text-white overflow-hidden">
      
      {/* DENTIST CLINICAL VIDEO BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1600&q=80"
          className="w-full h-full object-cover scale-105 filter brightness-[0.80]"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-dentist-examining-a-patient-42861-large.mp4" type="video/mp4" />
          <source src="https://assets.mixkit.co/videos/preview/mixkit-dentist-working-on-a-patients-teeth-42862-large.mp4" type="video/mp4" />
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        
        {/* Luxury Dark Vignette Overlay for High Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-charcoal/50"></div>
        <div className="absolute inset-0 bg-charcoal/30 backdrop-blur-[1px]"></div>
      </div>

      {/* Hero Content Container */}
      <div className="container mx-auto relative z-10 my-auto py-8 flex flex-col items-start max-w-4xl space-y-6">
        
        {/* Cursive Script Accent Line */}
        <div className="font-script text-3xl sm:text-4xl text-sand font-normal tracking-wide drop-shadow-md">
          Confidence starts with a smile
        </div>

        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 bg-ivory/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-[11px] font-sans font-bold uppercase tracking-[0.25em] text-sand">
          <Sparkles size={12} className="text-sand" />
          <span>HARBOUR DENTAL STUDIO · HOBART</span>
        </div>

        {/* Large Editorial Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.08] text-white tracking-tight">
          Modern dentistry.<br />
          <span className="italic font-normal text-sand">Personalised care.</span>
        </h1>

        {/* Supporting Copy */}
        <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl font-sans drop-shadow-sm">
          Thoughtful dental care in a comfortable, modern environment — from routine check-ups to cosmetic and restorative treatments.
        </p>

        {/* Action CTAs & Pill Button */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 w-full sm:w-auto">
          {onOpenBooking ? (
            <button
              onClick={onOpenBooking}
              className="bg-forest hover:bg-forest-light text-white font-sans text-xs font-bold uppercase tracking-widest px-9 py-4 transition-all duration-300 flex items-center justify-center gap-3 shadow-2xl hover:scale-105"
            >
              <Calendar size={16} />
              BOOK AN APPOINTMENT
            </button>
          ) : (
            <Link
              to="/book"
              className="bg-forest hover:bg-forest-light text-white font-sans text-xs font-bold uppercase tracking-widest px-9 py-4 transition-all duration-300 flex items-center justify-center gap-3 shadow-2xl hover:scale-105"
            >
              <Calendar size={16} />
              BOOK AN APPOINTMENT
            </Link>
          )}

          <a
            href="tel:0361000000"
            className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-sans text-xs font-bold uppercase tracking-widest px-8 py-4 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Phone size={15} className="text-sand" />
            CALL THE CLINIC
          </a>

          <Link
            to="/about"
            className="bg-sand text-charcoal hover:bg-white font-sans text-xs font-bold uppercase tracking-widest px-6 py-4 rounded-full transition-all duration-300 text-center shadow-lg hover:scale-105"
          >
            WHY CHOOSE HARBOUR DENTAL
          </Link>
        </div>

      </div>

      {/* Bottom Trust Strip */}
      <div className="container mx-auto relative z-10 pt-8 border-t border-white/15 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-2 text-[11px] font-sans font-bold uppercase tracking-widest text-slate-300">
          <span>NEW PATIENTS WELCOME</span>
          <span className="text-sand/50">•</span>
          <span>PERSONALISED CARE</span>
          <span className="text-sand/50">•</span>
          <span>MODERN CLINIC</span>
          <span className="text-sand/50">•</span>
          <span>CONVENIENT APPOINTMENTS</span>
        </div>

        <a
          href="#intro"
          className="hidden md:flex items-center gap-2 text-xs font-bold text-sand uppercase tracking-wider hover:text-white transition-colors"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('intro')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span>Explore Practice</span>
          <ChevronDown size={16} className="animate-bounce" />
        </a>

      </div>

    </section>
  );
};

export default Hero;