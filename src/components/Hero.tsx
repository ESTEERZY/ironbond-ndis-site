import React from 'react';
import { ArrowRight, Phone, Calendar, ShieldCheck, UserCheck, Clock, Heart, Sparkles, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroProps {
  onOpenBooking?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section id="hero" className="pt-32 lg:pt-36 pb-16 bg-gradient-to-b from-slate-50 via-white to-slate-50/50 overflow-hidden relative">
      {/* Background Ambient Glow Effects */}
      <div className="absolute top-1/4 right-5 w-[450px] h-[450px] bg-teal/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 left-5 w-[350px] h-[350px] bg-emerald/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 py-6 lg:py-12">

          {/* LEFT: Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start">
            {/* Location Pill */}
            <div className="inline-flex items-center gap-2 bg-teal/10 border border-teal/20 rounded-full px-4 py-1.5 mb-6 shadow-sm">
              <MapPin size={13} className="text-teal" />
              <span className="text-teal text-xs font-bold tracking-wide">123 Harbour Street, Hobart TAS 7000</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-navy leading-[1.1] mb-6">
              Modern dentistry.<br />
              <span className="text-teal">Personalised care.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
              Thoughtful dental care for every stage of your smile, delivered in a comfortable modern environment.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3.5 mb-10 w-full sm:w-auto">
              {onOpenBooking ? (
                <button
                  onClick={onOpenBooking}
                  className="group bg-teal text-white px-8 py-4 text-xs font-extrabold tracking-wider uppercase rounded-xl hover:bg-teal/90 transition-all duration-300 inline-flex items-center justify-center gap-2.5 shadow-lg shadow-teal/20"
                >
                  <Calendar size={18} />
                  BOOK AN APPOINTMENT
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
                </button>
              ) : (
                <Link
                  to="/book"
                  className="group bg-teal text-white px-8 py-4 text-xs font-extrabold tracking-wider uppercase rounded-xl hover:bg-teal/90 transition-all duration-300 inline-flex items-center justify-center gap-2.5 shadow-lg shadow-teal/20"
                >
                  <Calendar size={18} />
                  BOOK AN APPOINTMENT
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
                </Link>
              )}

              <a
                href="tel:0361000000"
                className="bg-navy text-white px-8 py-4 text-xs font-extrabold tracking-wider uppercase rounded-xl hover:bg-navy-mid transition-all duration-300 inline-flex items-center justify-center gap-2.5 shadow-lg shadow-navy/15"
              >
                <Phone size={18} className="text-teal" /> CALL THE CLINIC
              </a>
            </div>

            {/* Trust / Value Strip Beneath Hero */}
            <div className="w-full pt-6 border-t border-slate-200/80">
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3">Hobart Patient Values</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="flex items-center gap-2 text-xs font-bold text-navy bg-white border border-slate-200/80 p-2.5 rounded-xl shadow-xs">
                  <UserCheck size={16} className="text-teal flex-shrink-0" />
                  <span>Experienced Team</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-navy bg-white border border-slate-200/80 p-2.5 rounded-xl shadow-xs">
                  <Sparkles size={16} className="text-teal flex-shrink-0" />
                  <span>Modern Facility</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-navy bg-white border border-slate-200/80 p-2.5 rounded-xl shadow-xs">
                  <Clock size={16} className="text-teal flex-shrink-0" />
                  <span>Convenient Hours</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-navy bg-white border border-slate-200/80 p-2.5 rounded-xl shadow-xs">
                  <Heart size={16} className="text-emerald flex-shrink-0" />
                  <span>Comfort Focused</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: High quality dental visual showcase frame */}
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-teal/20 via-emerald/10 to-teal/20 rounded-[36px] blur-2xl opacity-70 transform rotate-1 pointer-events-none"></div>

            <div className="relative bg-white rounded-3xl p-3 shadow-2xl border border-slate-200/80 overflow-hidden group">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80"
                  alt="Harbour Dental Studio modern treatment suite in Hobart"
                  className="w-full h-full object-cover transform group-hover:scale-[1.02] transition-transform duration-700"
                />
                
                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent pointer-events-none"></div>

                {/* Live Clinic Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md border border-slate-200 px-3.5 py-1.5 rounded-full flex items-center gap-2 text-navy text-xs font-bold shadow-lg">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald animate-pulse"></span>
                  <span>Welcoming New Patients</span>
                </div>

                {/* Bottom Overlay Text */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs font-semibold text-teal-light">Harbour Dental Studio Hobart</p>
                  <p className="text-sm font-bold">State-of-the-art dental care with a calm, personal touch.</p>
                </div>
              </div>

              {/* Floating Badge 1 */}
              <div className="absolute -top-4 -right-4 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-slate-200 p-3.5 flex items-center gap-3 animate-float z-20 hidden sm:flex">
                <div className="w-10 h-10 bg-teal/10 rounded-xl flex items-center justify-center text-teal flex-shrink-0">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Clinical Standard</p>
                  <p className="text-xs font-black text-navy">Accredited Dental Practice</p>
                </div>
              </div>

              {/* Floating Badge 2 */}
              <div className="absolute -bottom-4 -left-4 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-slate-200 p-3.5 flex items-center gap-3 animate-float-delay z-20 hidden sm:flex">
                <div className="w-10 h-10 bg-emerald/10 rounded-xl flex items-center justify-center text-emerald flex-shrink-0">
                  <Heart size={20} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Patient Experience</p>
                  <p className="text-xs font-black text-navy">Gentle & Caring Care</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;