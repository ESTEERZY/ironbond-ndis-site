import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Homepage Sections
import Header from './Header'; // 01
import Hero from './Hero'; // 02
import PhilosophySection from './PhilosophySection'; // "Confidence starts with a smile" (Proud Smile Style - NOW FIRST AFTER HERO)
import IntroSection from './IntroSection'; // 03
import NewPatientSpecialSection from './NewPatientSpecialSection'; // New Patient Special Offer (Proud Smile Style)
import ServicesPillarsSection from './ServicesPillarsSection'; // 3-Column Pillars Banner (Proud Smile Style)
import PaymentPlansSection from './PaymentPlansSection'; // Flexible Payment Plans & Health Funds (Proud Smile Style)
import BeforeAfterGallery from './BeforeAfterGallery'; // Before & After Interactive Showcase
import SocialFeedSection from './SocialFeedSection'; // Harbour Social Feed Section (Proud Smile Style)
import LocationSection from './LocationSection'; // 05
import Footer from './Footer'; // 06

import MobileStickyBar from './MobileStickyBar';
import BookingModal from './BookingModal';
import AIReceptionistModal from './AIReceptionistModal';

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
    const targetSection = location.state?.scrollToSection || (location.state?.scrollToContact ? 'location' : null);
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
    <div className="min-h-screen bg-ivory text-charcoal font-sans antialiased selection:bg-forest selection:text-white">
      
      {/* 01 — PREMIUM DENTAL HEADER */}
      <Header
        onOpenBooking={handleOpenBooking}
        onOpenAIReceptionist={handleOpenAIReceptionist}
      />

      <main>
        {/* 02 — HERO */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* 03 — PHILOSOPHY & EMPOWERMENT SECTION ("Confidence starts with a smile") */}
        <PhilosophySection onOpenBooking={handleOpenBooking} />

        {/* 04 — INTRODUCTION ("A dental practice, but not as you know it" / Harbour Dental Studio Intro) */}
        <IntroSection onOpenBooking={() => handleOpenBooking()} />

        {/* 3-COLUMN SERVICES PILLARS BANNER (COMPREHENSIVE CARE) */}
        <ServicesPillarsSection onOpenBooking={handleOpenBooking} />

        {/* CLINICAL BEFORE & AFTER TRANSFORMATIONS */}
        <BeforeAfterGallery />

        {/* FLEXIBLE PAYMENT PLANS & HEALTH FUNDS SECTION ("Smile Now, Pay Later") */}
        <PaymentPlansSection onOpenBooking={handleOpenBooking} />

        {/* NEW PATIENT SPECIAL WELCOME PACKAGE SECTION */}
        <NewPatientSpecialSection onOpenBooking={handleOpenBooking} />

        {/* 06 — LOCATION & HOURS */}
        <LocationSection />

        {/* HARBOUR SOCIAL SHOWCASE (PROUD SMILE STYLE) */}
        <SocialFeedSection />
      </main>

      {/* 07 — FOOTER (PROUD SMILE STYLE LIGHT FOOTER) */}
      <Footer
        onOpenBooking={handleOpenBooking}
        onOpenAIReceptionist={handleOpenAIReceptionist}
      />

      {/* Mobile Sticky Action Bar */}
      <MobileStickyBar
        onOpenBooking={() => handleOpenBooking()}
        onOpenAIReceptionist={handleOpenAIReceptionist}
      />

      {/* Local Modals */}
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
