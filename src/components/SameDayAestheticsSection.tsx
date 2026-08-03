import React, { useState } from 'react';
import { Play, X } from 'lucide-react';

interface SameDayAestheticsProps {
  onOpenBooking?: (serviceName?: string) => void;
}

export const SameDayAestheticsSection: React.FC<SameDayAestheticsProps> = ({ onOpenBooking }) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="w-full bg-[#121417] text-white font-sans overflow-hidden border-t border-white/10">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px]">
        
        {/* Left Side: Story & Call to Action (50% / 6 cols) */}
        <div className="lg:col-span-6 p-8 sm:p-14 lg:p-20 flex flex-col justify-center space-y-6 bg-[#121417]">
          
          <h2 className="font-serif text-3xl sm:text-5xl font-normal leading-[1.15] text-white tracking-tight">
            Same-Day Aesthetics leaders in Hobart.
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans max-w-xl">
            Experience a perfected smile within a day, through our Same-Day Aesthetics program. Embrace the pace of modern life with immediate results. Our unparalleled skills and cutting-edge technology sculpt your ideal smile without the prolonged wait, catering to those valuing both quality and a dynamic lifestyle.
          </p>

          <span className="text-[11px] text-slate-400 font-sans italic block">
            *case suitability required
          </span>

          <div className="pt-4">
            {onOpenBooking ? (
              <button
                onClick={() => onOpenBooking('Same-Day Veneers Consultation')}
                className="bg-[#E94B77] hover:bg-[#D43B66] text-white font-sans text-xs font-bold uppercase tracking-widest px-9 py-4 rounded-full shadow-2xl transition-all hover:scale-105"
              >
                LEARN ABOUT SAME DAY VENEERS
              </button>
            ) : (
              <a
                href="#contact"
                className="inline-block bg-[#E94B77] hover:bg-[#D43B66] text-white font-sans text-xs font-bold uppercase tracking-widest px-9 py-4 rounded-full shadow-2xl transition-all hover:scale-105"
              >
                LEARN ABOUT SAME DAY VENEERS
              </a>
            )}
          </div>

        </div>

        {/* Right Side: Video Preview with Centered Play Button (50% / 6 cols) */}
        <div className="lg:col-span-6 relative min-h-[380px] lg:min-h-full overflow-hidden group cursor-pointer" onClick={() => setIsVideoOpen(true)}>
          <img
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85"
            alt="Same-Day Dental Aesthetics Hobart"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 filter brightness-[0.85]"
          />
          
          {/* Centered Large Play Icon Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-white/90 backdrop-blur-md text-charcoal shadow-2xl flex items-center justify-center group-hover:scale-115 transition-transform duration-300 border-2 border-white">
              <Play size={32} className="ml-1 fill-charcoal text-charcoal" />
            </div>
          </div>
        </div>

      </div>

      {/* Video Modal Simulator */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl bg-charcoal rounded-3xl overflow-hidden border border-white/20 p-8 text-center space-y-6">
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 p-2 text-white hover:text-sand"
              aria-label="Close video"
            >
              <X size={24} />
            </button>

            <h3 className="font-serif text-3xl text-white">Same-Day Aesthetics Transformation</h3>
            <div className="aspect-video bg-black rounded-2xl overflow-hidden relative flex items-center justify-center border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=85"
                alt="Video preview"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute text-center space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-sand block">CLINICAL CASE STUDY VIDEO</span>
                <p className="font-serif text-2xl text-white">Same-Day Porcelain Veneers Process</p>
              </div>
            </div>

            <button
              onClick={() => { setIsVideoOpen(false); if (onOpenBooking) onOpenBooking('Same-Day Veneers Consultation'); }}
              className="bg-forest text-white px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider"
            >
              Book Same-Day Consultation
            </button>
          </div>
        </div>
      )}

    </section>
  );
};

export default SameDayAestheticsSection;
