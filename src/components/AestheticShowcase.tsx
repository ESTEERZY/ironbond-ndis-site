import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';


interface AestheticShowcaseProps {
  onOpenBooking?: (serviceName?: string) => void;
}

export const AestheticShowcase: React.FC<AestheticShowcaseProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-24 bg-charcoal text-white relative overflow-hidden font-sans border-b border-white/10">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Script Accent + Copy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="font-script text-4xl text-sand tracking-wide">
              Same-Day Aesthetics & Digital Dentistry
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-normal leading-tight text-white tracking-tight">
              A modern approach to cosmetic dentistry.
            </h2>

            <p className="text-base text-slate-300 leading-relaxed font-sans">
              Experience a perfected smile with clear communication and gentle clinical techniques. From custom porcelain veneers to digital smile design, our Hobart team sculpts your ideal smile with precision.
            </p>

            <p className="text-[11px] text-sand/70 italic font-sans">
              *Individual suitability assessed during comprehensive clinical consultation.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                to="/treatments/cosmetic-dentistry"
                className="bg-sand text-charcoal hover:bg-white font-sans text-xs font-bold uppercase tracking-widest px-8 py-4 rounded-full transition-all shadow-xl hover:scale-105"
              >
                LEARN ABOUT SAME-DAY VENEERS
              </Link>

              {onOpenBooking && (
                <button
                  onClick={() => onOpenBooking('Cosmetic Dentistry')}
                  className="border border-white/30 hover:border-white text-white font-sans text-xs font-bold uppercase tracking-widest px-7 py-4 rounded-full transition-all"
                >
                  BOOK SMILE ASSESSMENT
                </button>
              )}
            </div>
          </div>

          {/* Right Column: Heroic Photographic Frame */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] overflow-hidden bg-slate-900 shadow-2xl border border-white/10 group">
              <img
                src="https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&w=1200&q=80"
                alt="Same-Day Aesthetic smile design at Harbour Dental Studio"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 bg-charcoal/90 backdrop-blur-md p-5 border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-sand block">HOBART COSMETIC CLINIC</span>
                  <p className="font-serif text-lg text-white mt-0.5">Digital Smile Design & Restorations</p>
                </div>
                <Sparkles size={20} className="text-sand" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AestheticShowcase;
