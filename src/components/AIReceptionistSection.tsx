import React from 'react';
import { Bot, PhoneCall, MessageSquare, Clock, ArrowRight, ShieldCheck } from 'lucide-react';


interface AIReceptionistSectionProps {
  onOpenAIReceptionist: () => void;
}

export const AIReceptionistSection: React.FC<AIReceptionistSectionProps> = ({ onOpenAIReceptionist }) => {
  return (
    <section id="ai-receptionist" className="py-24 bg-ivory border-b border-charcoal/10 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="bg-white border border-charcoal/10 rounded-3xl p-8 lg:p-14 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* Left Column: Content */}
          <div className="w-full lg:w-6/12 space-y-6">
            <span className="text-[11px] font-sans font-bold uppercase tracking-[0.25em] text-forest">
              08 — CONVENIENT VIRTUAL ASSISTANCE
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-charcoal">
              Need help outside clinic hours?
            </h2>

            <p className="text-sm text-charcoal-muted leading-relaxed font-sans">
              Our virtual receptionist can assist with common enquiries, appointment requests and other basic booking needs when the clinic team is unavailable.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 font-sans">
              <div className="flex items-center gap-2 text-xs font-semibold text-charcoal bg-ivory p-3 border border-charcoal/10">
                <Clock size={15} className="text-forest" />
                <span>24/7 Availability</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-charcoal bg-ivory p-3 border border-charcoal/10">
                <MessageSquare size={15} className="text-forest" />
                <span>Instant Dental FAQs</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-charcoal bg-ivory p-3 border border-charcoal/10">
                <PhoneCall size={15} className="text-forest" />
                <span>Voice & Web Demo</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenAIReceptionist}
                className="bg-charcoal hover:bg-forest text-white font-sans text-xs font-bold uppercase tracking-widest px-8 py-4 transition-all shadow-md flex items-center justify-center gap-3"
              >
                <Bot size={18} className="text-sand" />
                Speak With Our Virtual Receptionist
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Right Column: Interaction Mockup */}
          <div className="w-full lg:w-6/12">
            <div className="bg-charcoal text-white p-6 sm:p-8 rounded-2xl shadow-2xl space-y-5 font-sans">
              
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-forest text-white flex items-center justify-center font-bold text-sm">
                    🤖
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white leading-none">Harbour AI Receptionist</h3>
                    <p className="text-[10px] text-sand font-mono uppercase tracking-wider mt-1">24/7 Virtual Assistant</p>
                  </div>
                </div>

                <span className="text-[10px] font-mono text-slate-400 bg-white/10 px-2.5 py-1 rounded">
                  DEMO PREVIEW
                </span>
              </div>

              <div className="bg-white/5 rounded-xl p-4 border border-white/10 space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-300">
                  <span className="font-semibold text-sand">Sample Voice Response:</span>
                  <span className="text-[10px] font-mono text-slate-400">AI Phone Agent</span>
                </div>

                <p className="text-xs text-slate-200 leading-relaxed italic">
                  "Hello! Harbour Dental Studio is currently closed. I can assist you with booking a check-up for tomorrow morning or answering questions about check-up fees."
                </p>

                <div className="flex items-center justify-center gap-1 py-1">
                  {[40, 75, 30, 90, 50, 80, 45, 100, 60, 35, 80, 40].map((h, i) => (
                    <span
                      key={i}
                      style={{ height: `${h}%` }}
                      className="w-1 bg-sand rounded-full animate-pulse"
                    />
                  ))}
                </div>
              </div>

              <button
                onClick={onOpenAIReceptionist}
                className="w-full bg-forest hover:bg-forest-light text-white font-bold py-3.5 px-4 rounded-xl text-xs transition-all uppercase tracking-widest flex items-center justify-center gap-2"
              >
                <Bot size={16} className="text-sand" /> Launch Assistant Simulator
              </button>

              <div className="text-[10px] text-slate-400 text-center flex items-center justify-center gap-1">
                <ShieldCheck size={12} className="text-sand" /> Demonstration feature built by Ironbond Digital
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AIReceptionistSection;
