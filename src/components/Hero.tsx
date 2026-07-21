import { ArrowRight, Phone, MapPin, Heart } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="pt-28 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="min-h-[88vh] flex flex-col lg:flex-row items-center gap-10 lg:gap-16 py-12 lg:py-20">

          {/* LEFT: Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-emerald/10 border border-emerald/25 rounded-full px-4 py-1.5 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald animate-pulse"></div>
              <span className="text-emerald text-xs font-bold tracking-widest uppercase">Registered NDIS Provider · Melbourne & Victoria</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl lg:text-6xl xl:text-[64px] font-black tracking-tight text-navy leading-[1.05] mb-6">
              Supporting<br />
              Australians to live<br />
              <span className="text-teal">more independently.</span>
            </h1>

            {/* Subtext */}
            <p className="text-lg lg:text-xl text-slate-600 leading-relaxed mb-8 max-w-xl">
              Horizon Support Services is a registered NDIS provider delivering compassionate, person-centred disability support across Melbourne and Victoria — helping participants achieve their goals and live the life they choose.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a href="#contact"
                onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="group bg-teal text-white px-8 py-4 text-base font-bold rounded-xl hover:bg-teal/90 transition-all duration-300 inline-flex items-center justify-center gap-2.5 shadow-lg shadow-teal/25"
              >
                Get Started Today
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </a>
              <a href="tel:1300467426"
                className="border-2 border-navy/15 text-navy px-8 py-4 text-base font-bold rounded-xl hover:border-teal hover:text-teal transition-all duration-300 inline-flex items-center justify-center gap-2.5"
              >
                <Phone size={18} /> Call 1300 467 426
              </a>
            </div>

            {/* Trust pills */}
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald/8 border border-emerald/20 rounded-full text-emerald text-xs font-semibold">
                <Heart size={11} /> Person-Centred Care
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald/8 border border-emerald/20 rounded-full text-emerald text-xs font-semibold">
                <MapPin size={11} /> Melbourne & Victoria
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-teal/8 border border-teal/20 rounded-full text-teal text-xs font-semibold">
                24/7 Support Available
              </span>
            </div>
          </div>

          {/* RIGHT: Video */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-navy/10 border border-slate-100 aspect-[4/3]">
              <video
                src="/videos/hero.mp4"
                className="w-full h-full object-cover"
                autoPlay loop muted playsInline preload="auto"
                aria-label="Horizon Support Services — support worker and participant working together in the community"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-navy/5 to-transparent pointer-events-none"></div>
            </div>

            {/* Floating card 1 */}
            <div className="absolute -top-4 -left-4 bg-white rounded-xl shadow-lg shadow-navy/10 border border-slate-100 px-4 py-3 flex items-center gap-2.5 animate-float">
              <div className="w-8 h-8 bg-emerald/10 rounded-lg flex items-center justify-center">
                <Heart size={15} className="text-emerald" />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wide">Our approach</p>
                <p className="text-sm font-black text-navy">Person-Centred</p>
              </div>
            </div>

            {/* Floating card 2 */}
            <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg shadow-navy/10 border border-slate-100 px-4 py-3 flex items-center gap-2.5 animate-float-delay">
              <div className="w-8 h-8 bg-teal/10 rounded-lg flex items-center justify-center">
                <span className="text-teal text-xs font-black">24/7</span>
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wide">Emergency support</p>
                <p className="text-sm font-black text-navy">Always here for you</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;