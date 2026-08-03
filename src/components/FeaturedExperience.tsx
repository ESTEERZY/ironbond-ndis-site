import React from 'react';
import { Link } from 'react-router-dom';

interface FeaturedExperienceProps {
  onOpenBooking?: (serviceName?: string) => void;
}

export const FeaturedExperience: React.FC<FeaturedExperienceProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-24 bg-charcoal text-white relative overflow-hidden font-sans">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-7">
            <div className="aspect-[16/10] overflow-hidden bg-slate-800 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1200&q=80"
                alt="Considered dental aesthetic treatment at Harbour Dental Studio"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <span className="text-[11px] font-sans font-bold uppercase tracking-[0.25em] text-sand">
              FEATURED DENTAL CARE
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight text-white">
              Your smile deserves a considered approach.
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
              Whether you are interested in subtle aesthetic alignment, whitening, or porcelain restorations, our dentists take time to understand your individual goals and present suitable options clearly.
            </p>

            <div className="pt-3 flex flex-col sm:flex-row gap-4">
              <Link
                to="/treatments/cosmetic-dentistry"
                className="bg-sand text-charcoal hover:bg-white font-sans text-xs font-bold uppercase tracking-widest px-7 py-4 transition-colors text-center shadow-md"
              >
                EXPLORE COSMETIC DENTISTRY
              </Link>
              {onOpenBooking && (
                <button
                  onClick={() => onOpenBooking('Cosmetic Dentistry')}
                  className="border border-white/30 hover:border-white text-white font-sans text-xs font-bold uppercase tracking-widest px-6 py-4 transition-colors text-center"
                >
                  BOOK CONSULTATION
                </button>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturedExperience;
