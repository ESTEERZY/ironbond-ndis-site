import React from 'react';
import { Bot, PhoneCall, Sparkles, MessageSquare, Clock, ArrowRight, ShieldCheck } from 'lucide-react';

interface AIReceptionistSectionProps {
  onOpenAIReceptionist: () => void;
}

export const AIReceptionistSection: React.FC<AIReceptionistSectionProps> = ({ onOpenAIReceptionist }) => {
  return (
    <section id="ai-receptionist" className="py-16 bg-gradient-to-r from-navy via-navy-mid to-navy text-white relative overflow-hidden">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-teal/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-12 backdrop-blur-md shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-10">

          {/* Left Column: Headline & Content */}
          <div className="w-full lg:w-3/5 space-y-6">
            <div className="inline-flex items-center gap-2 bg-teal/20 border border-teal/40 rounded-full px-3.5 py-1 text-teal-light text-xs font-bold uppercase tracking-wider">
              <Sparkles size={12} />
              <span>Ironbond AI Feature Showcase</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Need help outside clinic hours?
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Our virtual receptionist can help with common enquiries, appointment requests and other basic booking needs when the clinic team is unavailable.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-200 bg-white/5 border border-white/10 p-3 rounded-xl">
                <Clock size={16} className="text-teal" />
                <span>24/7 Availability</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-200 bg-white/5 border border-white/10 p-3 rounded-xl">
                <MessageSquare size={16} className="text-teal" />
                <span>Instant Advice & FAQs</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-200 bg-white/5 border border-white/10 p-3 rounded-xl">
                <PhoneCall size={16} className="text-emerald" />
                <span>Seamless Voice & Web</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <button
                onClick={onOpenAIReceptionist}
                className="group bg-teal hover:bg-teal/90 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-teal/25 flex items-center justify-center gap-3 text-sm"
              >
                <Bot size={18} />
                Speak With Our Receptionist
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Polished Interactive Card Demo Widget */}
          <div className="w-full lg:w-2/5 relative">
            <div className="bg-slate-900 border border-white/15 rounded-2xl p-6 shadow-2xl space-y-4">
              
              {/* Virtual Call Simulator Top Bar */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-teal/20 border border-teal/40 flex items-center justify-center text-teal relative">
                    <Bot size={20} />
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald"></span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white leading-none">Harbour AI Receptionist</h4>
                    <p className="text-[10px] text-teal mt-1 flex items-center gap-1 font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald animate-pulse"></span>
                      ONLINE · READY TO ASSIST
                    </p>
                  </div>
                </div>

                <span className="text-[10px] font-mono text-slate-400 bg-white/5 px-2.5 py-1 rounded-md">
                  DEMO PREVIEW
                </span>
              </div>

              {/* Sample Voice Soundwave Graphic */}
              <div className="bg-navy/80 rounded-xl p-4 border border-white/10 space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-300">
                  <span className="font-semibold text-teal">Sample Enquiry Response:</span>
                  <span className="text-[10px] text-slate-400 font-mono">AI Voice Agent</span>
                </div>

                <div className="p-3 bg-white/5 rounded-lg border border-white/10 text-xs text-slate-200 leading-relaxed font-sans italic">
                  "Hello! harbour Dental Studio is currently closed. I can assist you with booking a check-up for tomorrow morning or answering questions about fees."
                </div>

                {/* Animated Wave Lines */}
                <div className="flex items-center justify-center gap-1 py-1">
                  {[40, 75, 30, 90, 50, 80, 45, 100, 60, 35, 80, 40].map((h, i) => (
                    <span
                      key={i}
                      style={{ height: `${h}%` }}
                      className="w-1 bg-teal rounded-full animate-pulse"
                    />
                  ))}
                </div>
              </div>

              <button
                onClick={onOpenAIReceptionist}
                className="w-full bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-4 rounded-xl text-xs transition-all border border-white/15 flex items-center justify-center gap-2"
              >
                <Bot size={15} className="text-teal" /> Launch Live Assistant Simulator
              </button>

              <div className="text-[10px] text-slate-400 text-center flex items-center justify-center gap-1">
                <ShieldCheck size={12} className="text-emerald" /> Demonstration feature built by Ironbond Digital
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AIReceptionistSection;
