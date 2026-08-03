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
import { Bot } from 'lucide-react';


export const Home: React.FC = () => {
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
    setSelectedService(serviceName);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-navy font-sans antialiased selection:bg-teal selection:text-white">
      {/* Navigation Header */}
      <Header
        onOpenBooking={handleOpenBooking}
        onOpenAIReceptionist={() => setIsAIReceptionistOpen(true)}
      />

      {/* Main Page Content Journey */}
      <main>
        <Hero onOpenBooking={handleOpenBooking} />
        <ServicesSection onOpenBooking={handleOpenBooking} />
        <WhyChooseUs />
        <EmergencySection onOpenBooking={handleOpenBooking} />
        <AIReceptionistSection onOpenAIReceptionist={() => setIsAIReceptionistOpen(true)} />
        <TeamSection />
        <TestimonialsSection />
        <BookingSection onOpenBooking={handleOpenBooking} />
        <FAQSection onOpenBooking={handleOpenBooking} />
        <Contact onOpenBooking={handleOpenBooking} />
      </main>

      {/* Footer */}
      <Footer
        onOpenBooking={handleOpenBooking}
        onOpenAIReceptionist={() => setIsAIReceptionistOpen(true)}
      />

      {/* Floating Action Trigger for AI Virtual Receptionist Demo */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        <button
          onClick={() => setIsAIReceptionistOpen(true)}
          className="group flex items-center gap-3 bg-navy hover:bg-navy-mid text-white border-2 border-teal px-4 py-3.5 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105"
          aria-label="Open AI Virtual Receptionist"
        >
          <div className="w-8 h-8 rounded-xl bg-teal text-white flex items-center justify-center font-black">
            <Bot size={18} />
          </div>
          <div className="flex flex-col text-left leading-none">
            <span className="text-xs font-black text-white group-hover:text-teal transition-colors">
              Virtual Receptionist
            </span>
            <span className="text-[10px] text-teal font-bold uppercase tracking-wider mt-0.5">
              Ask Questions 24/7
            </span>
          </div>
        </button>
      </div>

      {/* Modals */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialService={selectedService}
      />

      <AIReceptionistModal
        isOpen={isAIReceptionistOpen}
        onClose={() => setIsAIReceptionistOpen(false)}
      />
    </div>
  );
};

export default Home;
