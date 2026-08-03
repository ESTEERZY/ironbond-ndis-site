import React from 'react';

interface PhilosophySectionProps {
  onOpenBooking?: (serviceName?: string) => void;
}

export const PhilosophySection: React.FC<PhilosophySectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="w-full bg-black text-white font-sans overflow-hidden border-t border-white/10">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[600px]">
        
        {/* Left Side: Close-up Smile Portrait (50% / 6 cols) */}
        <div className="lg:col-span-6 relative min-h-[400px] lg:min-h-full overflow-hidden group">
          <img
            src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1400&q=85"
            alt="Authentic radiant smile Harbour Dental Studio"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 filter brightness-[0.9]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/60 hidden lg:block"></div>
        </div>

        {/* Right Side: Dark Typography Container (50% / 6 cols) */}
        <div className="lg:col-span-6 p-8 sm:p-14 lg:p-20 flex flex-col justify-center space-y-8 bg-black">
          
          {/* Cursive Script Accent Header (Orange / Sand) */}
          <div className="font-script text-4xl sm:text-6xl text-[#F97316] font-normal tracking-wide leading-none">
            Confidence starts with a smile
          </div>

          {/* Serif Title Headline */}
          <h2 className="font-serif text-3xl sm:text-5xl font-normal leading-[1.15] text-white tracking-tight">
            Dare to Smile, Be Proud of Your Uniqueness!
          </h2>

          {/* Paragraph Copy */}
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans max-w-xl">
            Dental imperfections can weigh heavily on self-esteem, stifling self-expression. Our transformative dental solutions empower you to radiate authenticity. With a decade of expertise and modern techniques, we unleash your inner glow, allowing your true self to shine. Embrace self-discovery, empowerment, and joy through our care and treatments.
          </p>

          {/* Vibrant Rose Pink Pill CTA Button */}
          <div className="pt-4">
            {onOpenBooking ? (
              <button
                onClick={() => onOpenBooking('Philosophy Consultation')}
                className="bg-[#E94B77] hover:bg-[#D43B66] text-white font-sans text-xs font-bold uppercase tracking-widest px-9 py-4 rounded-full shadow-2xl transition-all hover:scale-105"
              >
                WHY CHOOSE HARBOUR DENTAL
              </button>
            ) : (
              <a
                href="#about"
                className="inline-block bg-[#E94B77] hover:bg-[#D43B66] text-white font-sans text-xs font-bold uppercase tracking-widest px-9 py-4 rounded-full shadow-2xl transition-all hover:scale-105"
              >
                WHY CHOOSE HARBOUR DENTAL
              </a>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

export default PhilosophySection;
