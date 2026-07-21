import { ArrowRight, ShieldCheck, Accessibility, ClipboardCheck } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-navy"
    >
      <style>{`
        .animate-kinetic-zoom {
          animation: kineticZoom 30s linear infinite alternate;
          will-change: transform;
        }
        @keyframes kineticZoom {
          0% { transform: scale(1) translate(0, 0); }
          100% { transform: scale(1.08) translate(-1%, -0.5%); }
        }
      `}</style>

      {/* Endless background video loop */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none bg-navy">
        <video
          src="/videos/hero.mp4"
          className="absolute inset-0 w-full h-full object-cover opacity-100 transition-opacity duration-1000"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />
        {/* Subtle dark overlay for premium legibility */}
        <div className="absolute inset-0 bg-navy/60 z-[1]"></div>
      </div>

      {/* Centered content wrapper */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-32 flex flex-col items-center text-center">
        <div className="max-w-4xl flex flex-col items-center">
          
          {/* The Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-6 leading-[1.02] animate-heading-breath">
            NDIS Compliance.<br />
            <span className="text-teal">Engineered.</span>
          </h1>

          {/* The Central Accent Line */}
          <div className="h-[2px] bg-teal mx-auto my-6 w-32" />

          {/* The Subtext Paragraph */}
          <p className="text-xl lg:text-2xl font-medium text-white/85 max-w-2xl mx-auto leading-relaxed animate-subtext-breath">
            Australia's NDIS digital platform specialists. WCAG 2.2 AA compliant. Registration-ready. Automated participant intake — built for allied health, support coordinators, plan managers, and core supports.
          </p>

          {/* Hero CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="group bg-teal text-navy px-10 py-5 text-base font-bold tracking-widest uppercase hover:bg-teal/90 transition-all duration-500 inline-flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(0,180,216,0.35)] rounded-[2px]"
            >
              Book a Free Audit
              <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" size={20} />
            </a>
            <a
              href="#portfolio"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="group border border-white/30 text-white px-10 py-5 text-base font-bold tracking-widest uppercase hover:border-teal hover:text-teal transition-all duration-500 inline-flex items-center justify-center gap-3 rounded-[2px]"
            >
              View Our Solutions
            </a>
          </div>

          {/* Trust Pill Badges */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald/10 border border-emerald/30 rounded-full text-emerald text-[11px] font-bold tracking-wide">
              <ShieldCheck size={13} />
              WCAG 2.2 AA Compliant
            </span>
            <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald/10 border border-emerald/30 rounded-full text-emerald text-[11px] font-bold tracking-wide">
              <ClipboardCheck size={13} />
              NDIS Quality &amp; Safeguards Aligned
            </span>
            <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-teal/10 border border-teal/20 rounded-full text-teal text-[11px] font-bold tracking-wide">
              <Accessibility size={13} />
              98% Audit Pass Rate
            </span>
          </div>

        </div>
      </div>

      {/* Bottom fade to next section (matches design system) */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-navy to-transparent z-[2]"></div>
    </section>
  );
};

export default Hero;