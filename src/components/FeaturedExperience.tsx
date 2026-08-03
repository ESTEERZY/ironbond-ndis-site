import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface FeaturedExperienceProps {
  onOpenBooking?: (service?: string) => void;
}

export const FeaturedExperience: React.FC<FeaturedExperienceProps> = ({ onOpenBooking }) => {
  return (
    <section className="w-full bg-ivory text-charcoal font-sans overflow-hidden border-y border-charcoal/10">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[600px] sm:min-h-[640px]">
        
        {/* Left Side: Dark Luxury Typography Container (50% / 6 cols) */}
        <div className="lg:col-span-6 p-8 sm:p-14 lg:p-20 flex flex-col justify-center space-y-8 bg-ivory order-2 lg:order-1">
          
          <div className="inline-flex items-center gap-2 bg-forest/10 border border-forest/20 px-3.5 py-1.5 rounded-full text-[10px] font-sans font-bold uppercase tracking-widest text-forest w-fit">
            <Sparkles size={12} />
            <span>EXCEPTIONAL CLINICAL COMFORT</span>
          </div>

          {/* Cursive Script Accent Header */}
          <div className="font-script text-3xl sm:text-5xl text-forest font-normal tracking-wide">
            Designed for total peace of mind.
          </div>

          {/* Horizontal Accent Divider Line */}
          <div className="w-full border-t border-charcoal/10 my-2"></div>

          {/* Serif Title Headline */}
          <h2 className="font-serif text-3xl sm:text-5xl font-normal leading-[1.15] text-charcoal tracking-tight">
            Gentle dental care crafted around you
          </h2>

          {/* Body Copy */}
          <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed max-w-lg font-sans">
            From noise-cancelling headphones and ceiling screens to warm herbal tea and unhurried appointments, we make sure every visit is calm, empowering, and completely stress-free.
          </p>

          {/* Vibrant Accent Pill CTA Button */}
          <div className="pt-2">
            {onOpenBooking ? (
              <button
                onClick={() => onOpenBooking('General Dental Experience')}
                className="inline-flex items-center gap-3 bg-charcoal hover:bg-forest text-white font-sans text-xs font-bold uppercase tracking-widest px-8 py-4 rounded-full shadow-xl transition-all hover:scale-105"
              >
                <span>EXPLORE CLINICAL CARE</span>
                <ArrowRight size={15} />
              </button>
            ) : (
              <a
                href="#team"
                className="inline-flex items-center gap-3 bg-charcoal hover:bg-forest text-white font-sans text-xs font-bold uppercase tracking-widest px-8 py-4 rounded-full shadow-xl transition-all hover:scale-105"
              >
                <span>EXPLORE CLINICAL CARE</span>
                <ArrowRight size={15} />
              </a>
            )}
          </div>

        </div>

        {/* Right Side: Architectural Ambient Practice Photography (50% / 6 cols) */}
        <div className="lg:col-span-6 relative min-h-[380px] lg:min-h-full overflow-hidden group order-1 lg:order-2">
          <img
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1400&q=85"
            alt="Harbour Dental Studio luxury treatment suite Hobart"
            className="w-full h-full object-cover object-[center_30%] group-hover:scale-105 transition-transform duration-1000 filter brightness-[0.95]"
          />
        </div>

      </div>
    </section>
  );
};

export default FeaturedExperience;
