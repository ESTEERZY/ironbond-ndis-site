import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Hero from './Hero';
import ServicesSection from './ServicesSection';
import WhyChooseUs from './WhyChooseUs';
import EmergencySection from './EmergencySection';
import AIReceptionistSection from './AIReceptionistSection';
import TeamSection from './TeamSection';
import TestimonialsSection from './TestimonialsSection';
import BookingSection from './BookingSection';
import FAQSection from './FAQSection';
import Contact from './Contact';
import Footer from './Footer';
import BookingModal from './BookingModal';
import AIReceptionistModal from './AIReceptionistModal';
import MobileStickyBar from './MobileStickyBar';

interface HomeProps {
  onOpenBooking?: (serviceName?: string) => void;
  onOpenAIReceptionist?: () => void;
}

export const Home: React.FC<HomeProps> = ({
  onOpenBooking: parentOpenBooking,
  onOpenAIReceptionist: parentOpenAIReceptionist,
}) => {
  const location = useLocation();
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);
  const [isAIReceptionistOpen, setIsAIReceptionistOpen] = useState(false);

  useEffect(() => {
    const targetSection = location.state?.scrollToSection || (location.state?.scrollToContact ? 'contact' : null);
    if (targetSection) {
      const el = document.getElementById(targetSection);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 150);
      }
    }
  }, [location]);

  const handleOpenBooking = (serviceName?: string) => {
    if (parentOpenBooking) {
      parentOpenBooking(serviceName);
    } else {
      setSelectedService(serviceName);
      setIsBookingOpen(true);
    }
  };

  const handleOpenAIReceptionist = () => {
    if (parentOpenAIReceptionist) {
      parentOpenAIReceptionist();
    } else {
      setIsAIReceptionistOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-white text-navy font-sans antialiased selection:bg-teal selection:text-white">
      {/* Navigation Header */}
      <Header
        onOpenBooking={handleOpenBooking}
        onOpenAIReceptionist={handleOpenAIReceptionist}
      />

      {/* Main Page Content Journey */}
      <main>
        <Hero onOpenBooking={handleOpenBooking} />
        <ServicesSection onOpenBooking={handleOpenBooking} />
        <WhyChooseUs />
        <EmergencySection onOpenBooking={handleOpenBooking} />
        <AIReceptionistSection onOpenAIReceptionist={handleOpenAIReceptionist} />
        <TeamSection />
        <TestimonialsSection />
        <BookingSection onOpenBooking={handleOpenBooking} />
        <FAQSection onOpenBooking={handleOpenBooking} />
        <Contact onOpenBooking={handleOpenBooking} />
      </main>

      {/* Footer */}
      <Footer
        onOpenBooking={handleOpenBooking}
        onOpenAIReceptionist={handleOpenAIReceptionist}
      />

      {/* Mobile Sticky Bar */}
      <MobileStickyBar
        onOpenBooking={() => handleOpenBooking()}
        onOpenAIReceptionist={handleOpenAIReceptionist}
      />

      {/* Fallback local modals if not rendered by App */}
      {!parentOpenBooking && (
        <BookingModal
          isOpen={isBookingOpen}
          onClose={() => setIsBookingOpen(false)}
          initialService={selectedService}
        />
      )}

      {!parentOpenAIReceptionist && (
        <AIReceptionistModal
          isOpen={isAIReceptionistOpen}
          onClose={() => setIsAIReceptionistOpen(false)}
        />
      )}
    </div>
  );
};

export default Home;
