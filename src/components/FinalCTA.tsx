import React from 'react';
import { Calendar, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FinalCTAProps {
  onOpenBooking?: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-24 bg-white text-center border-b border-charcoal/10 font-sans">
      <div className="container mx-auto px-6 lg:px-12 max-w-3xl space-y-6">
        <span className="text-[11px] font-sans font-bold uppercase tracking-[0.25em] text-forest block">
          13 — APPOINTMENT REQUEST
        </span>

        <h2 className="font-serif text-4xl sm:text-5xl font-normal text-charcoal tracking-tight">
          Your next appointment starts here.
        </h2>

        <p className="text-base text-charcoal-muted leading-relaxed font-sans max-w-xl mx-auto">
          Ready to take the next step? Book online or contact our team.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          {onOpenBooking ? (
            <button
              onClick={onOpenBooking}
              className="bg-forest hover:bg-forest-light text-white font-sans text-xs font-bold uppercase tracking-widest px-9 py-4 transition-colors shadow-md flex items-center justify-center gap-2"
            >
              <Calendar size={15} />
              BOOK AN APPOINTMENT
            </button>
          ) : (
            <Link
              to="/book"
              className="bg-forest hover:bg-forest-light text-white font-sans text-xs font-bold uppercase tracking-widest px-9 py-4 transition-colors shadow-md flex items-center justify-center gap-2"
            >
              <Calendar size={15} />
              BOOK AN APPOINTMENT
            </Link>
          )}

          <a
            href="tel:0361000000"
            className="border border-charcoal/20 hover:border-charcoal text-charcoal font-sans text-xs font-bold uppercase tracking-widest px-8 py-4 transition-colors flex items-center justify-center gap-2"
          >
            <Phone size={15} className="text-forest" />
            CALL THE CLINIC
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
