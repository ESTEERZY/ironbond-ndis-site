import { ArrowRight, ShieldCheck, ClipboardCheck, Accessibility } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="pt-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="min-h-[90vh] flex flex-col lg:flex-row items-center gap-12 lg:gap-16 py-16 lg:py-24">

          {/* LEFT: Text content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 bg-teal/10 border border-teal/20 rounded-full px-4 py-1.5 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald animate-pulse"></div>
              <span className="text-teal text-xs font-bold tracking-widest uppercase">Australia's NDIS Digital Agency</span>
            </div>

            {/* Main headline */}
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-navy leading-[1.05] mb-6">
              Digital platforms<br />
              built for<br />
              <span className="text-teal">NDIS providers.</span>
            </h1>

            {/* Subtext */}
            <p className="text-lg lg:text-xl text-slate-600 leading-relaxed mb-8 max-w-lg">
              Meridian Digital builds WCAG 2.2 AA compliant participant intake portals, staff dashboards, provider websites, and client portals — exclusively for registered Australian NDIS providers.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="group bg-teal text-white px-8 py-4 text-base font-bold rounded-xl hover:bg-teal/90 transition-all duration-300 inline-flex items-center justify-center gap-2.5 shadow-lg shadow-teal/25"
              >
                Request a free audit
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </a>
              <a
                href="#portfolio"
                onClick={(e) => { e.preventDefault(); document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="border-2 border-navy/15 text-navy px-8 py-4 text-base font-bold rounded-xl hover:border-teal hover:text-teal transition-all duration-300 inline-flex items-center justify-center gap-2.5"
              >
                View our platforms
              </a>
            </div>

            {/* Trust signal */}
            <p className="text-sm text-slate-400 font-semibold mb-6">
              Trusted by NDIS providers across allied health, support coordination, plan management, and core supports.
            </p>

            {/* Trust pills */}
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald/8 border border-emerald/20 rounded-full text-emerald text-xs font-semibold">
                <ShieldCheck size={12} /> WCAG 2.2 AA Compliant
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald/8 border border-emerald/20 rounded-full text-emerald text-xs font-semibold">
                <ClipboardCheck size={12} /> Registration-Ready
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-teal/8 border border-teal/20 rounded-full text-teal text-xs font-semibold">
                <Accessibility size={12} /> Built in Australia
              </span>
            </div>
          </div>

          {/* RIGHT: Video card */}
          <div className="w-full lg:w-1/2 relative">
            {/* Main video card */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-navy/10 border border-slate-100 aspect-[4/3]">
              <video
                src="/videos/hero.mp4"
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                aria-label="Support worker and participant interaction — the people our platforms serve"
              />
              {/* Subtle overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-navy/5 to-transparent pointer-events-none"></div>
            </div>

            {/* Floating badge 1 — top left */}
            <div className="absolute -top-4 -left-4 bg-white rounded-xl shadow-lg shadow-navy/10 border border-slate-100 px-4 py-3 flex items-center gap-2.5 animate-float">
              <div className="w-8 h-8 bg-emerald/10 rounded-lg flex items-center justify-center">
                <ShieldCheck size={16} className="text-emerald" />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wide">Compliance</p>
                <p className="text-sm font-black text-navy">WCAG 2.2 AA</p>
              </div>
            </div>

            {/* Floating badge 2 — bottom right */}
            <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg shadow-navy/10 border border-slate-100 px-4 py-3 flex items-center gap-2.5 animate-float-delay">
              <div className="w-8 h-8 bg-teal/10 rounded-lg flex items-center justify-center">
                <ClipboardCheck size={16} className="text-teal" />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wide">Australian Providers</p>
                <p className="text-sm font-black text-navy">Registered NDIS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;