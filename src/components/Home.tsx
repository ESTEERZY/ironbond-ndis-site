import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Homepage Sections
import Header from './Header'; // 01
import Hero from './Hero'; // 02
import IntroSection from './IntroSection'; // 03
import TreatmentsDirectory from './TreatmentsDirectory'; // 04
import FeaturedExperience from './FeaturedExperience'; // 05
import AestheticShowcase from './AestheticShowcase'; // Aesthetic Feature
import BeforeAfterGallery from './BeforeAfterGallery'; // Before & After Interactive Showcase
import WhyChooseUs from './WhyChooseUs'; // 06
import PatientJourney from './PatientJourney'; // 07
import TeamSection from './TeamSection'; // 08
import EmergencySection from './EmergencySection'; // 09
import SocialFeedSection from './SocialFeedSection'; // Harbour Social Feed Section (Proud Smile Style)
import LocationSection from './LocationSection'; // 10
import FinalCTA from './FinalCTA'; // 11
import Footer from './Footer'; // 12

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

        {/* 04 — TREATMENTS DIRECTORY */}
        <TreatmentsDirectory onOpenBooking={handleOpenBooking} />

        {/* 05 — FEATURED DENTAL EXPERIENCE */}
        <FeaturedExperience onOpenBooking={handleOpenBooking} />

        {/* DEDICATED AESTHETIC SHOWCASE */}
        <AestheticShowcase onOpenBooking={handleOpenBooking} />

        {/* CLINICAL BEFORE & AFTER TRANSFORMATIONS */}
        <BeforeAfterGallery />

        {/* 06 — WHY PATIENTS CHOOSE US */}
        <WhyChooseUs />

        {/* 07 — PATIENT JOURNEY */}
        <PatientJourney onOpenBooking={() => handleOpenBooking()} />

        {/* 08 — OUR TEAM */}
        <TeamSection onOpenBooking={handleOpenBooking} />

        {/* 09 — EMERGENCY DENTAL */}
        <EmergencySection onOpenBooking={handleOpenBooking} />

        {/* HARBOUR SOCIAL SHOWCASE (REPLACING TESTIMONIALS WITH PROUD SMILE SOCIAL STYLE) */}
        <SocialFeedSection />

        {/* 10 — LOCATION & HOURS */}
        <LocationSection />

        {/* 11 — FINAL BOOKING CTA */}
        <FinalCTA onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* 12 — FOOTER (PROUD SMILE STYLE LIGHT FOOTER) */}
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
