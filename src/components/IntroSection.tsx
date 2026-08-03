import React from 'react';
import { ArrowRight } from 'lucide-react';

interface IntroSectionProps {
  onOpenBooking?: () => void;
}

export const IntroSection: React.FC<IntroSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="intro" className="w-full bg-charcoal text-white font-sans overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[600px] sm:min-h-[640px]">
        
        {/* Left Side: Architectural Ambient Practice Photography (50% / 6 cols) */}
        <div className="lg:col-span-6 relative min-h-[380px] lg:min-h-full overflow-hidden group">
          <img
            src="/images/caring_dentist_intro.png"
            alt="Harbour Dental Studio luxury architectural entry and caring dentist"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 filter brightness-[0.92]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-charcoal/40 hidden lg:block"></div>
        </div>

        {/* Right Side: Dark Luxury Typography Container (50% / 6 cols) */}
        <div className="lg:col-span-6 p-8 sm:p-14 lg:p-20 flex flex-col justify-center space-y-8 bg-charcoal">
          
          {/* Cursive Script Accent Header */}
          <div className="font-script text-3xl sm:text-5xl text-sand font-normal tracking-wide">
            A dental practice, but not as you know it.
          </div>

          {/* Horizontal Accent Divider Line */}
          <div className="w-full border-t border-white/15 my-2"></div>

          {/* Serif Title Headline */}
          <h2 className="font-serif text-3xl sm:text-5xl font-normal leading-[1.15] text-white tracking-tight">
            A modern approach to cosmetic & restorative dentistry
          </h2>

          {/* Body Copy */}
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-lg font-sans">
            Say Goodbye to Pain, Anxiety, and Sterile Environments. Say Hello to a Refreshing, Relaxed and Warm Experience in Hobart.
          </p>

          {/* Vibrant Accent Pill CTA Button */}
          <div className="pt-2">
            {onOpenBooking ? (
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-3 bg-forest hover:bg-forest-light text-white font-sans text-xs font-bold uppercase tracking-widest px-8 py-4 rounded-full shadow-2xl transition-all hover:scale-105 border border-white/15"
              >
                <span>THE HARBOUR DENTAL EXPERIENCE</span>
                <ArrowRight size={15} />
              </button>
            ) : (
              <a
                href="#treatments"
                className="inline-flex items-center gap-3 bg-forest hover:bg-forest-light text-white font-sans text-xs font-bold uppercase tracking-widest px-8 py-4 rounded-full shadow-2xl transition-all hover:scale-105 border border-white/15"
              >
                <span>THE HARBOUR DENTAL EXPERIENCE</span>
                <ArrowRight size={15} />
              </a>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

export default IntroSection;
