import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Homepage Sections
import Header from './Header'; // 01
import Hero from './Hero'; // 02
import IntroSection from './IntroSection'; // 03
import NewPatientSpecialSection from './NewPatientSpecialSection'; // New Patient Special Offer (Proud Smile Style)
import FeaturedExperience from './FeaturedExperience'; // 04
import PaymentPlansSection from './PaymentPlansSection'; // Flexible Payment Plans & Health Funds (Proud Smile Style)
import AestheticShowcase from './AestheticShowcase'; // Aesthetic Feature
import BeforeAfterGallery from './BeforeAfterGallery'; // Before & After Interactive Showcase
import SocialFeedSection from './SocialFeedSection'; // Harbour Social Feed Section (Proud Smile Style)
import LocationSection from './LocationSection'; // 05
import FinalCTA from './FinalCTA'; // 06
import Footer from './Footer'; // 07

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

        {/* 03 — INTRODUCTION (PROUD SMILE STYLE SPLIT SECTION) */}
        <IntroSection onOpenBooking={() => handleOpenBooking()} />

        {/* NEW PATIENT SPECIAL WELCOME PACKAGE SECTION */}
        <NewPatientSpecialSection onOpenBooking={handleOpenBooking} />

        {/* 04 — FEATURED DENTAL EXPERIENCE */}
        <FeaturedExperience onOpenBooking={handleOpenBooking} />

        {/* FLEXIBLE PAYMENT PLANS & HEALTH FUNDS SECTION (PROUD SMILE STYLE) */}
        <PaymentPlansSection onOpenBooking={handleOpenBooking} />

        {/* DEDICATED AESTHETIC SHOWCASE */}
        <AestheticShowcase onOpenBooking={handleOpenBooking} />

        {/* CLINICAL BEFORE & AFTER TRANSFORMATIONS */}
        <BeforeAfterGallery />

        {/* HARBOUR SOCIAL SHOWCASE (PROUD SMILE STYLE) */}
        <SocialFeedSection />

        {/* 05 — LOCATION & HOURS */}
        <LocationSection />

        {/* 06 — FINAL BOOKING CTA */}
        <FinalCTA onOpenBooking={() => handleOpenBooking()} />
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
