import React from 'react';
import { Calendar, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroProps {
  onOpenBooking?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section id="hero" className="w-full bg-ivory pt-24 sm:pt-28 pb-8 px-4 sm:px-8 lg:px-12 font-sans">
      
      {/* ROUNDED HERO CARD FRAME (SMILE SOLUTIONS MELBOURNE STYLE) */}
      <div className="relative rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl min-h-[580px] sm:min-h-[640px] lg:min-h-[680px] w-full flex flex-col justify-between p-8 sm:p-14 text-white">
        
        {/* Full-Bleed Background Photography */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=2000&q=85"
            alt="Hobart Home of Dentistry Harbour Dental Studio"
            className="w-full h-full object-cover object-[center_20%] filter brightness-[0.92] transform hover:scale-105 transition-transform duration-1000"
          />
          {/* Subtle Bottom Vignette Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/30 to-transparent"></div>
        </div>

        {/* Top Floating Action Pill (Top-Right) */}
        <div className="relative z-10 flex justify-end">
          {onOpenBooking ? (
            <button
              onClick={onOpenBooking}
              className="bg-forest hover:bg-forest-light text-white px-6 py-3.5 rounded-2xl shadow-2xl font-sans text-xs font-bold uppercase tracking-wider flex items-center gap-2.5 hover:scale-105 transition-all border border-white/20"
            >
              <span>Book Now</span>
              <Calendar size={16} />
            </button>
          ) : (
            <Link
              to="/book"
              className="bg-forest hover:bg-forest-light text-white px-6 py-3.5 rounded-2xl shadow-2xl font-sans text-xs font-bold uppercase tracking-wider flex items-center gap-2.5 hover:scale-105 transition-all border border-white/20"
            >
              <span>Book Now</span>
              <Calendar size={16} />
            </Link>
          )}
        </div>

        {/* Bottom Left Hero Title & Eyebrow */}
        <div className="relative z-10 max-w-3xl space-y-2 mt-auto pt-16">
          <p className="text-sm sm:text-base font-bold uppercase tracking-[0.3em] text-white/90 font-sans">
            HOBART'S
          </p>

          <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-normal leading-[1.02] text-white tracking-tight drop-shadow-md">
            Home of Dentistry
          </h1>
        </div>

        {/* Bottom Right Scroll Indicator */}
        <div className="relative z-10 flex justify-end pt-4">
          <a
            href="#intro"
            className="text-white/80 hover:text-white transition-colors p-2"
            aria-label="Scroll to intro section"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('intro')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <ChevronDown size={22} className="animate-bounce" />
          </a>
        </div>

      </div>

    </section>
  );
};

export default Hero;