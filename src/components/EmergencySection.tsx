import React from 'react';
import { Zap, Phone, Calendar, Clock, AlertTriangle, ShieldCheck } from 'lucide-react';

interface EmergencySectionProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const EmergencySection: React.FC<EmergencySectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="emergency" className="py-16 bg-white relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="bg-gradient-to-br from-rose-500/10 via-amber-500/5 to-white border-2 border-rose-200/80 rounded-3xl p-8 lg:p-12 shadow-lg relative overflow-hidden">
          
          {/* Subtle Background Badge */}
          <div className="absolute -top-6 -right-6 w-36 h-36 bg-rose-500/10 rounded-full blur-2xl pointer-events-none"></div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
            
            {/* Left Info */}
            <div className="w-full lg:w-2/3 space-y-4">
              <div className="inline-flex items-center gap-2 bg-rose-100 border border-rose-200 text-rose-700 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <AlertTriangle size={14} className="text-rose-600 animate-pulse" />
                <span>Urgent Dental Care · Hobart Clinic</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-navy tracking-tight">
                Need urgent dental care?
              </h2>

              <p className="text-base text-slate-700 leading-relaxed max-w-2xl">
                If you are experiencing severe toothache, a chipped or knocked-out tooth, or unexpected dental pain, please contact our clinic team immediately. We reserve daily emergency appointments to advise you on the next appropriate step and get you out of discomfort.
              </p>

              <div className="flex flex-wrap gap-4 text-xs font-semibold text-slate-600 pt-1">
                <span className="flex items-center gap-1.5 bg-white border border-slate-200 px-3 py-1.5 rounded-lg shadow-2xs">
                  <Zap size={14} className="text-rose-500" /> Daily Reserve Slots
                </span>
                <span className="flex items-center gap-1.5 bg-white border border-slate-200 px-3 py-1.5 rounded-lg shadow-2xs">
                  <Clock size={14} className="text-amber-600" /> Fast Response Guidance
                </span>
                <span className="flex items-center gap-1.5 bg-white border border-slate-200 px-3 py-1.5 rounded-lg shadow-2xs">
                  <ShieldCheck size={14} className="text-teal" /> Gentle Triage Care
                </span>
              </div>
            </div>

            {/* Right Action Box */}
            <div className="w-full lg:w-1/3 bg-white border border-slate-200 rounded-2xl p-6 shadow-md flex flex-col gap-3 text-center">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Immediate Assistance</span>
              <a
                href="tel:0361000000"
                className="w-full bg-rose-600 hover:bg-rose-700 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-md shadow-rose-600/25 flex items-center justify-center gap-2 text-base"
              >
                <Phone size={18} />
                Call the Clinic
              </a>

              <p className="text-xs text-navy font-bold">
                Phone: <span className="text-rose-600 font-mono font-bold">(03) 6100 0000</span>
              </p>

              <div className="relative py-1 flex items-center justify-center">
                <span className="bg-white px-2 text-[10px] uppercase font-bold text-slate-400">or</span>
                <div className="absolute inset-0 border-t border-slate-200 top-1/2 -z-10"></div>
              </div>

              <button
                onClick={() => onOpenBooking('Emergency Dental Care')}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-4 rounded-xl text-xs transition-colors flex items-center justify-center gap-2"
              >
                <Calendar size={14} className="text-teal" /> Request Emergency Slot Online
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default EmergencySection;
