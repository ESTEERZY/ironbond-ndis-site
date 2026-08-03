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
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-navy/95 backdrop-blur-lg border-t border-white/10 p-2.5 shadow-2xl">
      <div className="grid grid-cols-3 gap-2 container mx-auto">
        
        {/* CALL */}
        <a
          href="tel:0361000000"
          className="flex flex-col items-center justify-center py-2 px-1 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-all border border-white/10 active:scale-95"
        >
          <Phone size={18} className="text-teal" />
          <span className="text-[11px] font-extrabold uppercase tracking-wide mt-1">Call</span>
        </a>

        {/* BOOK */}
        <button
          onClick={onOpenBooking}
          className="flex flex-col items-center justify-center py-2 px-1 bg-teal hover:bg-teal/90 text-white rounded-xl transition-all shadow-md shadow-teal/30 active:scale-95"
        >
          <Calendar size={18} />
          <span className="text-[11px] font-extrabold uppercase tracking-wide mt-1">Book</span>
        </button>

        {/* RECEPTIONIST */}
        <button
          onClick={onOpenAIReceptionist}
          className="flex flex-col items-center justify-center py-2 px-1 bg-white/10 hover:bg-white/20 text-teal-light rounded-xl transition-all border border-teal/30 active:scale-95"
        >
          <Bot size={18} className="text-teal" />
          <span className="text-[10px] font-extrabold uppercase tracking-tight mt-1 text-white">Virtual AI</span>
        </button>

      </div>
    </div>
  );
};

export default MobileStickyBar;
