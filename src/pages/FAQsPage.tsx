import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FAQSection from '../components/FAQSection';
import MobileStickyBar from '../components/MobileStickyBar';

interface FAQsPageProps {
  onOpenBooking: (serviceName?: string) => void;
  onOpenAIReceptionist: () => void;
}

export const FAQsPage: React.FC<FAQsPageProps> = ({
  onOpenBooking,
  onOpenAIReceptionist,
}) => {
  return (
    <div className="min-h-screen bg-ivory text-charcoal font-sans">
      <Header onOpenBooking={onOpenBooking} onOpenAIReceptionist={onOpenAIReceptionist} />

      <main className="pt-32 lg:pt-40 pb-20">
        <section className="py-12 border-b border-charcoal/10">
          <div className="container mx-auto px-6 lg:px-12 text-center max-w-3xl">
            <span className="text-[11px] font-sans font-bold uppercase tracking-[0.25em] text-forest block mb-3">
              PATIENT KNOWLEDGE BASE
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-normal text-charcoal">
              Frequently Asked Questions
            </h1>
            <p className="text-sm text-charcoal-muted mt-2 font-sans">
              Clear answers regarding services, health insurance, emergency slots, and bookings at Harbour Dental Studio.
            </p>
          </div>
        </section>

        <FAQSection onOpenBooking={onOpenBooking} />
      </main>

      <Footer onOpenBooking={onOpenBooking} onOpenAIReceptionist={onOpenAIReceptionist} />
      <MobileStickyBar onOpenBooking={() => onOpenBooking()} onOpenAIReceptionist={onOpenAIReceptionist} />
    </div>
  );
};

export default FAQsPage;
