import { useState } from 'react';
import { ArrowRight, MapPin, Heart, LayoutDashboard, Volume2, VolumeX, ShieldCheck, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <section id="hero" className="pt-32 lg:pt-36 bg-gradient-to-b from-slate-50/80 via-white to-white overflow-hidden relative">
      {/* Background Ambient Light Gradients */}
      <div className="absolute top-1/4 right-5 w-[500px] h-[500px] bg-teal/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 left-5 w-[400px] h-[400px] bg-emerald/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="min-h-[82vh] flex flex-col lg:flex-row items-center gap-12 lg:gap-16 py-8 lg:py-16">

          {/* LEFT: Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-emerald/10 border border-emerald/25 rounded-full px-4 py-1.5 mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald animate-pulse"></span>
              <span className="text-emerald text-xs font-bold tracking-widest uppercase">Registered NDIS Provider · Melbourne & Victoria</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[62px] font-black tracking-tight text-navy leading-[1.08] mb-6">
              Supporting<br />
              Australians to live<br />
              <span className="text-teal">more independently.</span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
              Horizon Support Services is a registered NDIS provider delivering compassionate, person-centred disability support across Melbourne and Victoria — helping participants achieve their goals and live the life they choose.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3.5 mb-8 w-full sm:w-auto">
              <a href="#contact"
                onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="group bg-teal text-white px-8 py-4 text-sm font-bold rounded-xl hover:bg-teal/90 transition-all duration-300 inline-flex items-center justify-center gap-2.5 shadow-lg shadow-teal/25"
              >
                Get Started Today
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
              </a>
              <Link
                to="/platform"
                className="bg-navy text-white px-8 py-4 text-sm font-bold rounded-xl hover:bg-navy-mid transition-all duration-300 inline-flex items-center justify-center gap-2.5 shadow-lg shadow-navy/20"
              >
                <LayoutDashboard size={16} className="text-teal" /> Staff Platform OS
              </Link>
            </div>

            {/* Trust pills */}
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald/10 border border-emerald/20 rounded-full text-emerald text-xs font-semibold">
                <Heart size={12} /> Person-Centred Care
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald/10 border border-emerald/20 rounded-full text-emerald text-xs font-semibold">
                <MapPin size={12} /> Melbourne & Victoria
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-teal/10 border border-teal/20 rounded-full text-teal text-xs font-semibold">
                24/7 Support Available
              </span>
            </div>
          </div>

          {/* RIGHT: Modern Showcase Video Placement */}
          <div className="w-full lg:w-1/2 relative">
            {/* Ambient Backlight Glow Ring */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-teal/30 via-emerald/20 to-teal/10 rounded-[32px] blur-2xl opacity-70 transform rotate-1 pointer-events-none"></div>

            {/* Main Showcase Container (Mockup Frame) */}
            <div className="relative bg-navy rounded-3xl p-2.5 sm:p-3 shadow-2xl border border-navy-light/60">
              
              {/* Mockup Top Window Bar */}
              <div className="flex items-center justify-between px-3 py-2 bg-navy-mid rounded-t-2xl border-b border-white/10 text-white/60 mb-2">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald/80"></div>
                </div>

                {/* Simulated URL bar */}
                <div className="flex items-center gap-2 px-3 py-0.5 bg-white/5 border border-white/10 rounded-full text-[10px] text-white/50 font-mono">
                  <ShieldCheck size={10} className="text-emerald" />
                  <span>horizonsupport.com.au/care-in-action</span>
                </div>

                <div className="text-[10px] font-bold text-teal flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald animate-pulse"></span>
                  <span className="hidden sm:inline">LIVE</span>
                </div>
              </div>

              {/* Video Wrapper */}
              <div className="relative rounded-2xl overflow-hidden aspect-[16/10] sm:aspect-[4/3] bg-navy-mid border border-white/10 group">
                <video
                  src="/videos/hero.mp4"
                  className="w-full h-full object-cover transform group-hover:scale-[1.02] transition-transform duration-700"
                  autoPlay loop muted={isMuted} playsInline preload="auto"
                  aria-label="Horizon Support Services — support worker and participant working together in the community"
                />
                
                {/* Subtle Gradient Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent pointer-events-none"></div>

                {/* Live Caption Tag inside video */}
                <div className="absolute top-3 left-3 bg-navy/80 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full flex items-center gap-2 text-white text-[11px] font-bold shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-emerald animate-pulse"></span>
                  <span>Authentic NDIS Disability Care · Victoria</span>
                </div>

                {/* Audio Mute/Unmute Toggle Button */}
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="absolute bottom-3 right-3 p-2.5 rounded-full bg-navy/80 hover:bg-navy backdrop-blur-md border border-white/20 text-white transition-all shadow-lg hover:scale-105"
                  title={isMuted ? "Unmute video audio" : "Mute video audio"}
                >
                  {isMuted ? <VolumeX size={15} className="text-white/70" /> : <Volume2 size={15} className="text-teal" />}
                </button>
              </div>

            </div>

            {/* Floating Trust Card 1 (Top Left) */}
            <div className="absolute -top-5 -left-3 sm:-left-6 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl shadow-navy/10 border border-slate-200/80 p-3.5 flex items-center gap-3 animate-float z-20">
              <div className="w-10 h-10 bg-emerald/15 rounded-xl flex items-center justify-center text-emerald flex-shrink-0">
                <Heart size={18} />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Audit Rating</p>
                <p className="text-xs font-black text-navy">100% NDIS Compliant</p>
              </div>
            </div>

            {/* Floating Trust Card 2 (Bottom Right) */}
            <div className="absolute -bottom-5 -right-3 sm:-right-6 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl shadow-navy/10 border border-slate-200/80 p-3.5 flex items-center gap-3 animate-float-delay z-20">
              <div className="w-10 h-10 bg-teal/15 rounded-xl flex items-center justify-center text-teal flex-shrink-0">
                <Sparkles size={18} />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Active Coverage</p>
                <p className="text-xs font-black text-navy">600+ Participants</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;