import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import MobileStickyBar from '../components/MobileStickyBar';

interface ContactPageProps {
  onOpenBooking: (serviceName?: string) => void;
  onOpenAIReceptionist: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onOpenBooking,
  onOpenAIReceptionist,
}) => {
  return (
    <div className="min-h-screen bg-white text-navy font-sans">
      <Header onOpenBooking={onOpenBooking} onOpenAIReceptionist={onOpenAIReceptionist} />

      <main className="pt-32 lg:pt-36 pb-20">
        <Contact onOpenBooking={onOpenBooking} />
      </main>

      <Footer onOpenBooking={onOpenBooking} onOpenAIReceptionist={onOpenAIReceptionist} />
      <MobileStickyBar onOpenBooking={() => onOpenBooking()} onOpenAIReceptionist={onOpenAIReceptionist} />
    </div>
  );
};

export default ContactPage;
