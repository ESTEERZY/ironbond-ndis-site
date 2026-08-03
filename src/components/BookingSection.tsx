import React from 'react';
import { Calendar, Phone, ArrowRight, ShieldCheck, Clock, MapPin } from 'lucide-react';

interface BookingSectionProps {
  onOpenBooking: () => void;
}

export const BookingSection: React.FC<BookingSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="booking" className="py-20 bg-gradient-to-br from-teal via-dental-600 to-navy text-white relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 lg:p-14 text-center shadow-2xl space-y-8">
          
          <div className="inline-flex items-center gap-2 bg-white/15 border border-white/25 px-4 py-1.5 rounded-full text-white text-xs font-bold uppercase tracking-wider">
            <Clock size={14} className="text-teal-light" />
            <span>Fast & Flexible Scheduling</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Ready to book your appointment?
          </h2>

          <p className="text-base sm:text-lg text-slate-100 leading-relaxed max-w-2xl mx-auto">
            Choose a convenient time to visit our team or get in touch if you'd like to discuss your appointment first.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
            <button
              onClick={onOpenBooking}
              className="group bg-white text-navy hover:bg-slate-100 font-black px-9 py-4 rounded-xl transition-all shadow-xl flex items-center justify-center gap-3 text-sm"
            >
              <Calendar size={18} className="text-teal" />
              Book an Appointment
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform text-teal" />
            </button>

            <a
              href="tel:0361000000"
              className="bg-navy/80 hover:bg-navy text-white font-bold px-8 py-4 rounded-xl border border-white/20 transition-all flex items-center justify-center gap-2.5 text-sm"
            >
              <Phone size={18} className="text-teal" /> Call Us: (03) 6100 0000
            </a>
          </div>

          <div className="pt-6 border-t border-white/15 flex flex-wrap justify-center gap-6 text-xs text-slate-200">
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-emerald" /> New Patients Welcome
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin size={14} className="text-teal-light" /> 123 Harbour St, Hobart
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} className="text-emerald" /> Mon-Fri 8am-6pm, Sat 9am-1pm
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BookingSection;
