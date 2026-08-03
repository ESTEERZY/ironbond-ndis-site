import React from 'react';
import { Phone, Calendar, Clock, AlertTriangle, ShieldCheck } from 'lucide-react';

interface EmergencySectionProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const EmergencySection: React.FC<EmergencySectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="emergency" className="py-20 bg-forest text-white relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 max-w-5xl mx-auto">
          
          {/* Left Info */}
          <div className="w-full lg:w-7/12 space-y-4 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-sand px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
              <AlertTriangle size={14} className="text-sand animate-pulse" />
              <span>Urgent Dental Care · Hobart Practice</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white leading-tight">
              Need urgent dental care?
            </h2>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-sans">
              If you are experiencing severe toothache, a chipped or knocked-out tooth, or unexpected swelling, please contact our Hobart clinic immediately. We reserve daily emergency appointments to advise you on the next step.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-xs font-sans text-slate-300 pt-2">
              <span className="flex items-center gap-1.5 border border-white/15 px-3 py-1.5">
                <Clock size={14} className="text-sand" /> Daily Reserve Slots
              </span>
              <span className="flex items-center gap-1.5 border border-white/15 px-3 py-1.5">
                <ShieldCheck size={14} className="text-sand" /> Fast Phone Triage
              </span>
            </div>
          </div>

          {/* Right Action Box */}
          <div className="w-full lg:w-5/12 bg-white text-charcoal border border-charcoal/10 p-6 sm:p-8 shadow-xl flex flex-col gap-4 text-center font-sans">
            <span className="text-xs font-bold text-charcoal-muted uppercase tracking-widest">Immediate Assistance</span>
            
            <a
              href="tel:0361000000"
              className="w-full bg-charcoal hover:bg-forest text-white font-sans text-xs font-bold uppercase tracking-widest py-4 transition-colors flex items-center justify-center gap-2 shadow-md"
            >
              <Phone size={16} className="text-sand" />
              Call the Clinic
            </a>

            <p className="text-xs text-charcoal font-bold">
              Emergency Line: <a href="tel:0361000000" className="text-forest hover:underline">(03) 6100 0000</a>
            </p>

            <div className="relative py-1 flex items-center justify-center">
              <span className="bg-white px-2 text-[10px] uppercase font-bold text-charcoal-muted">OR REQUEST ONLINE</span>
              <div className="absolute inset-0 border-t border-charcoal/10 top-1/2 -z-10"></div>
            </div>

            <button
              onClick={() => onOpenBooking('Emergency Dental')}
              className="w-full bg-forest hover:bg-forest-light text-white font-sans text-xs font-bold uppercase tracking-widest py-3.5 transition-colors flex items-center justify-center gap-2"
            >
              <Calendar size={15} /> Request Emergency Slot
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EmergencySection;
