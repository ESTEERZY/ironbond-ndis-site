import React from 'react';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  onOpenBooking?: (service?: string) => void;
}

export const Hero: React.FC<HeroProps> = () => {

  return (
    <section id="hero" className="relative w-full min-h-screen flex flex-col justify-between pt-24 sm:pt-28 pb-10 px-6 sm:px-12 lg:px-16 bg-charcoal text-white overflow-hidden font-sans">
      
      {/* FULL-SCREEN FULL-BLEED BACKGROUND PHOTOGRAPHY */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=2000&q=85"
          alt="Hobart Home of Dentistry Harbour Dental Studio"
          className="w-full h-full object-cover object-[center_20%] filter brightness-[0.92] scale-105 transform hover:scale-100 transition-transform duration-1000"
        />
        {/* Subtle Bottom Vignette Gradient for High Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/30 to-transparent"></div>
      </div>

      {/* Spacer for Top Header */}
      <div className="relative z-10"></div>

      {/* Bottom Left Hero Title & Eyebrow (Smile Solutions Style) */}
      <div className="relative z-10 max-w-4xl space-y-2 mt-auto pb-6">
        <p className="text-sm sm:text-base font-bold uppercase tracking-[0.3em] text-white/90 font-sans drop-shadow-sm">
          HOBART'S
        </p>

        <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-normal leading-[1.02] text-white tracking-tight drop-shadow-md">
          Home of Dentistry
        </h1>
      </div>

      {/* Bottom Right Scroll Indicator */}
      <div className="relative z-10 flex justify-end">
        <a
          href="#intro"
          className="text-white/80 hover:text-white transition-colors p-2"
          aria-label="Scroll to intro section"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('intro')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <ChevronDown size={24} className="animate-bounce" />
        </a>
      </div>

    </section>
  );
};

export default Hero;