import React from 'react';
import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PatientJourneyProps {
  onOpenBooking?: () => void;
}

export const PatientJourney: React.FC<PatientJourneyProps> = ({ onOpenBooking }) => {
  const steps = [
    {
      number: '01',
      title: 'Book',
      description: 'Request an appointment online or call our team.',
    },
    {
      number: '02',
      title: 'Visit',
      description: 'Meet the team and discuss your dental needs.',
    },
    {
      number: '03',
      title: 'Understand',
      description: 'Receive clear information about suitable options.',
    },
    {
      number: '04',
      title: 'Plan',
      description: 'Decide on the next step with your dentist.',
    },
  ];

  return (
    <section className="py-24 bg-white border-b border-charcoal/10 font-sans">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16 space-y-3">
          <span className="text-[11px] font-sans font-bold uppercase tracking-[0.25em] text-forest block">
            THE PATIENT JOURNEY
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-charcoal">
            What to expect from your visit.
          </h2>
        </div>

        {/* 4-Step Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-ivory border border-charcoal/10 p-8 space-y-4 relative flex flex-col justify-between"
            >
              <div>
                <span className="font-serif text-2xl font-bold text-forest block mb-2">{step.number}</span>
                <h3 className="font-serif text-2xl text-charcoal font-normal">{step.title}</h3>
                <p className="text-xs text-charcoal-muted leading-relaxed font-sans mt-2">
                  {step.description}
                </p>
              </div>
              <div className="w-full h-0.5 bg-forest/20 pt-1"></div>
            </div>
          ))}
        </div>

        {/* Action Trigger */}
        <div className="text-center pt-4">
          {onOpenBooking ? (
            <button
              onClick={onOpenBooking}
              className="bg-forest hover:bg-forest-light text-white font-sans text-xs font-bold uppercase tracking-widest px-9 py-4 transition-all shadow-md inline-flex items-center gap-2"
            >
              <Calendar size={15} />
              BOOK YOUR FIRST VISIT
            </button>
          ) : (
            <Link
              to="/book"
              className="bg-forest hover:bg-forest-light text-white font-sans text-xs font-bold uppercase tracking-widest px-9 py-4 transition-all shadow-md inline-flex items-center gap-2"
            >
              <Calendar size={15} />
              BOOK YOUR FIRST VISIT
            </Link>
          )}
        </div>

      </div>
    </section>
  );
};

export default PatientJourney;
