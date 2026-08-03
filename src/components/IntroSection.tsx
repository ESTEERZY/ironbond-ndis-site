import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const IntroSection: React.FC = () => {
  return (
    <section id="intro" className="py-24 bg-white border-y border-charcoal/10 font-sans">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Caring Dentist Photography */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] lg:aspect-[16/12] overflow-hidden bg-sand-light shadow-xl rounded-2xl border border-charcoal/10 group">
              <img
                src="/images/caring_dentist_intro.png"
                alt="Caring female dentist consulting warmly with patient at Harbour Dental Studio Hobart"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-charcoal/5 pointer-events-none"></div>
            </div>
          </div>

          {/* Right Column: Editorial Typography */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[11px] font-sans font-bold uppercase tracking-[0.25em] text-forest block">
              A DIFFERENT DENTAL EXPERIENCE
            </span>

            <h2 className="font-serif text-4xl sm:text-5xl font-normal leading-tight text-charcoal tracking-tight">
              Care that feels considered.
            </h2>

            <p className="text-base text-charcoal-muted leading-relaxed font-sans max-w-xl">
              At Harbour Dental Studio, we take a straightforward, personal approach to dentistry. From your first visit through ongoing care, our team focuses on clear communication and a comfortable experience.
            </p>

            <div className="pt-2">
              <Link
                to="/team"
                className="inline-flex items-center gap-3 text-xs font-sans font-bold uppercase tracking-widest text-charcoal hover:text-forest border-b border-charcoal pb-1 transition-colors"
              >
                <span>MEET OUR TEAM</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default IntroSection;
