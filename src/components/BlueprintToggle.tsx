import { useState } from 'react';
import { motion } from 'framer-motion';

const BlueprintToggle = () => {
  const [view, setView] = useState<'blueprint' | 'reality'>('blueprint');

  return (
    <section id="concept" className="py-24 bg-[#121212] relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-px bg-gold"></div>
              <h2 className="text-xs md:text-sm font-black tracking-[0.4em] text-gold uppercase">04 // Interactive Schematic</h2>
            </div>
            <h3 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-[0.85]">Concept To <span className="text-gold">Reality.</span></h3>
          </div>

          {/* Control Switch */}
          <div className="bg-darkgray/50 border border-white/10 p-1.5 rounded-[2px] flex gap-2">
            <button 
              onClick={() => setView('blueprint')}
              className={`px-6 py-3 text-xs font-black tracking-widest uppercase transition-all duration-300 rounded-[1px] ${
                view === 'blueprint' 
                ? 'bg-gold text-charcoal shadow-[0_0_20px_rgba(197,160,89,0.3)]' 
                : 'text-white/40 hover:text-white/70'
              }`}
            >
              01 // Blueprint
            </button>
            <button 
              onClick={() => setView('reality')}
              className={`px-6 py-3 text-xs font-black tracking-widest uppercase transition-all duration-300 rounded-[1px] ${
                view === 'reality' 
                ? 'bg-gold text-charcoal shadow-[0_0_20px_rgba(197,160,89,0.3)]' 
                : 'text-white/40 hover:text-white/70'
              }`}
            >
              02 // Reality
            </button>
          </div>
        </div>

        {/* Display Canvas Wrapper */}
        <div className="relative w-full aspect-[16/9] overflow-hidden border border-white/10 rounded-[2px] shadow-2xl bg-charcoal">
          
          {/* Layer 1: The Base (Reality Photo) */}
          <div className="absolute inset-0 w-full h-full">
            <img 
              src="/images/blueprint-base.png" 
              alt="Delivered Structure" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Layer 1.5: The CAD Blueprint Drawing (Option A) */}
          <motion.div 
            initial={false}
            animate={{ opacity: view === 'blueprint' ? 1 : 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 z-10 w-full h-full"
          >
            <img 
              src="/images/blueprint-drawing.png" 
              alt="Architectural Schematic" 
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Layer 2: The Blueprint Tint & Grid Overlay */}
          <motion.div 
            initial={false}
            animate={{ opacity: view === 'blueprint' ? 1 : 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 z-20 bg-[#001D3D]/80 mix-blend-multiply pointer-events-none"
            style={{ 
              backgroundImage: `
                linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px'
            }}
          />

          {/* Scanner Glow */}
          <motion.div 
            animate={{ top: ["0%", "100%", "0%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 w-full h-[2px] bg-gold/30 z-40 pointer-events-none opacity-50 blur-[2px]"
          />
        </div>

        {/* Status Text Indicator */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse"></div>
            <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-white/50 uppercase text-center md:text-left">
              // CURRENT VIEW: {view === 'blueprint' ? 'ARCHITECTURAL SCHEMATIC' : 'DELIVERED STRUCTURE'}
            </span>
          </div>
          <span className="text-[8px] font-mono text-white/20 tracking-widest uppercase">Apex Architecture // Structural Protocol v4.0</span>
        </div>

      </div>
    </section>
  );
};

export default BlueprintToggle;
