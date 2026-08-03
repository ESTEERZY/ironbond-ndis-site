import React from 'react';
import { Phone, Calendar, Bot } from 'lucide-react';

interface MobileStickyBarProps {
  onOpenBooking: () => void;
  onOpenAIReceptionist: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({
  onOpenBooking,
  onOpenAIReceptionist,
}) => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-charcoal text-white border-t border-white/10 p-2.5 shadow-2xl font-sans">
      <div className="grid grid-cols-3 gap-2 container mx-auto">
        
        {/* CALL */}
        <a
          href="tel:0361000000"
          className="flex flex-col items-center justify-center py-2.5 px-1 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-all border border-white/10 active:scale-95"
          aria-label="Call Harbour Dental Studio at (03) 6100 0000"
        >
          <Phone size={18} className="text-sand" />
          <span className="text-[11px] font-extrabold uppercase tracking-wider mt-1">CALL</span>
        </a>

        {/* BOOK */}
        <button
          onClick={onOpenBooking}
          className="flex flex-col items-center justify-center py-2.5 px-1 bg-forest hover:bg-forest-light text-white rounded-xl transition-all shadow-md active:scale-95"
          aria-label="Book an appointment online"
        >
          <Calendar size={18} />
          <span className="text-[11px] font-extrabold uppercase tracking-wider mt-1">BOOK</span>
        </button>

        {/* RECEPTIONIST */}
        <button
          onClick={onOpenAIReceptionist}
          className="flex flex-col items-center justify-center py-2.5 px-1 bg-white/10 hover:bg-white/20 text-sand rounded-xl transition-all border border-sand/30 active:scale-95"
          aria-label="Speak with Virtual Receptionist"
        >
          <Bot size={18} className="text-sand" />
          <span className="text-[10px] font-extrabold uppercase tracking-tight mt-1 text-white">RECEPTIONIST</span>
        </button>

      </div>
    </div>
  );
};

export default MobileStickyBar;
