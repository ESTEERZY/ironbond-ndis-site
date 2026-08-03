import React from 'react';
import { CheckCircle2, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NewPatientSpecialProps {
  onOpenBooking?: (service?: string) => void;
}

export const NewPatientSpecialSection: React.FC<NewPatientSpecialProps> = ({ onOpenBooking }) => {
  const checklist = [
    'Free Smile Assessment',
    'Scale and clean + Fluoride',
    'Bite checks for any dysfunction and possible causes of wear (Orthodontic recommendation provided).',
    'TMJ joint checks and lymph nodes to check for signs of infection.',
    'Periodontal (gums) check.',
    '3D scan of your mouth so we can monitor changes over time.',
    'Oral cancer screen.',
    'Full mouth examination, teeth, gums, cheeks, tongue and lips.',
    'Two X-rays included.',
  ];

  return (
    <section id="new-patient-special" className="py-20 lg:py-24 bg-[#0B2E46] text-white font-sans overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Offer Details & Checklist */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Title & Subtitle */}
            <div className="space-y-3">
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.1] text-white tracking-tight">
                New Patient?<br />
                <span className="italic text-sand font-normal">Welcome to our family.</span>
              </h2>
              
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl font-sans pt-1">
                Exclusive comprehensive examination for new patients including everything you will need without spending a fortune.
              </p>
            </div>

            {/* Checklist Items */}
            <div className="space-y-3 border-y border-white/15 py-6">
              {checklist.map((item, index) => (
                <div key={index} className="flex items-start gap-3 text-xs sm:text-sm font-sans font-medium text-slate-100">
                  <CheckCircle2 size={18} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="leading-snug">{item}</span>
                </div>
              ))}
            </div>

            {/* Price Box Offers (Side-by-Side) */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              
              {/* Box 1: Only $229 */}
              <div className="flex-1 w-full border border-white/30 rounded-2xl p-5 text-center bg-white/5 backdrop-blur-sm space-y-1">
                <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-slate-300 block">Only</span>
                <div className="font-serif text-4xl sm:text-5xl font-bold text-[#E94B77]">$229</div>
                <span className="text-[11px] font-sans text-slate-300 block font-medium">for anyone*</span>
              </div>

              <span className="font-serif italic text-lg text-sand font-normal px-2">Or</span>

              {/* Box 2: Gap Free */}
              <div className="flex-1 w-full border border-white/30 rounded-2xl p-5 text-center bg-white/5 backdrop-blur-sm space-y-1">
                <div className="font-serif text-2xl sm:text-3xl font-bold text-[#E94B77] uppercase tracking-tight">GAP FREE</div>
                <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-slate-200 block">with Any Health</span>
                <span className="text-[11px] font-sans text-slate-300 block font-medium">Insurance*</span>
              </div>

            </div>

            {/* Primary Action Button */}
            <div className="pt-2">
              {onOpenBooking ? (
                <button
                  onClick={() => onOpenBooking('New Patient Comprehensive Package')}
                  className="w-full sm:w-auto bg-[#E94B77] hover:bg-[#D43B66] text-white font-sans text-xs sm:text-sm font-bold uppercase tracking-widest px-10 py-4.5 rounded-full shadow-2xl transition-all hover:scale-105 flex items-center justify-center gap-3"
                >
                  <Calendar size={18} />
                  <span>BOOK YOUR CHECK UP WITH HARBOUR DENTAL</span>
                </button>
              ) : (
                <Link
                  to="/book"
                  className="w-full sm:w-auto bg-[#E94B77] hover:bg-[#D43B66] text-white font-sans text-xs sm:text-sm font-bold uppercase tracking-widest px-10 py-4.5 rounded-full shadow-2xl transition-all hover:scale-105 flex items-center justify-center gap-3"
                >
                  <Calendar size={18} />
                  <span>BOOK YOUR CHECK UP WITH HARBOUR DENTAL</span>
                </Link>
              )}
            </div>

            {/* Footnote Disclaimer */}
            <p className="text-[10px] text-slate-300 leading-relaxed max-w-xl font-sans pt-2 opacity-80">
              (*) New patient check-up, scale and clean, fluoride, two X-rays, cancer screen, and digital scan, valued up to $574, are now either $229 or gap-free with a private health fund. We are preferred providers for major Australian health funds (HCF, NIB, Bupa, Medibank).
            </p>

          </div>

          {/* Right Column: Happy Patient Couple Photo */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] sm:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-gradient-to-t from-charcoal/80 to-transparent group">
              <img
                src="/images/new_patient_family_couple.png"
                alt="New Patient Family Welcome Harbour Dental Studio"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2E46]/90 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 text-white bg-[#0B2E46]/80 backdrop-blur-md p-4 rounded-2xl border border-white/15 shadow-xl">
                <span className="text-[10px] font-bold uppercase tracking-wider text-sand block">SPECIAL OFFER</span>
                <p className="font-serif text-lg text-white font-normal mt-0.5">Welcome Package for Hobart Families</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default NewPatientSpecialSection;
