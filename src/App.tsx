import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

// Dental Clinic Public Web Pages
import Home from './components/Home';
import TreatmentsPage from './pages/TreatmentsPage';
import TreatmentDetailPage from './pages/TreatmentDetailPage';
import TeamPage from './pages/TeamPage';
import PatientExperiencePage from './pages/PatientExperiencePage';
import BookingPage from './pages/BookingPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import Sitemap from './components/Sitemap';

// Global Booking & AI Receptionist Modals
import BookingModal from './components/BookingModal';
import AIReceptionistModal from './components/AIReceptionistModal';


function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingService, setBookingService] = useState<string | undefined>(undefined);
  const [isAIReceptionistOpen, setIsAIReceptionistOpen] = useState(false);

  const handleOpenBooking = (serviceName?: string) => {
    setBookingService(serviceName);
    setIsBookingOpen(true);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white text-navy font-sans antialiased selection:bg-teal selection:text-white pb-16 lg:pb-0">
        <Routes>
          {/* Public Dental Website Routes */}
          <Route
            path="/"
            element={
              <Home
                onOpenBooking={handleOpenBooking}
                onOpenAIReceptionist={() => setIsAIReceptionistOpen(true)}
              />
            }
          />

          <Route
            path="/treatments"
            element={
              <TreatmentsPage
                onOpenBooking={handleOpenBooking}
                onOpenAIReceptionist={() => setIsAIReceptionistOpen(true)}
              />
            }
          />

          <Route
            path="/treatments/:slug"
            element={
              <TreatmentDetailPage
                onOpenBooking={handleOpenBooking}
                onOpenAIReceptionist={() => setIsAIReceptionistOpen(true)}
              />
            }
          />

          <Route
            path="/team"
            element={
              <TeamPage
                onOpenBooking={handleOpenBooking}
                onOpenAIReceptionist={() => setIsAIReceptionistOpen(true)}
              />
            }
          />

          <Route
            path="/patient-experience"
            element={
              <PatientExperiencePage
                onOpenBooking={handleOpenBooking}
                onOpenAIReceptionist={() => setIsAIReceptionistOpen(true)}
              />
            }
          />

          <Route
            path="/book"
            element={
              <BookingPage
                onOpenAIReceptionist={() => setIsAIReceptionistOpen(true)}
              />
            }
          />

          <Route
            path="/contact"
            element={
              <ContactPage
                onOpenBooking={handleOpenBooking}
                onOpenAIReceptionist={() => setIsAIReceptionistOpen(true)}
              />
            }
          />

          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/sitemap" element={<Sitemap />} />
        </Routes>

        {/* Global Floating Action Bar for AI Virtual Receptionist */}
        <div className="fixed bottom-20 lg:bottom-6 right-6 z-40 flex flex-col gap-3">
          <button
            onClick={() => setIsAIReceptionistOpen(true)}
            className="group flex items-center gap-3 bg-navy hover:bg-navy-mid text-white border-2 border-teal px-4 py-3.5 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105"
            aria-label="Open AI Virtual Receptionist"
          >
            <div className="w-8 h-8 rounded-xl bg-teal text-white flex items-center justify-center font-black">
              🤖
            </div>
            <div className="flex flex-col text-left leading-none">
              <span className="text-xs font-black text-white group-hover:text-teal transition-colors">
                Virtual Receptionist
              </span>
              <span className="text-[10px] text-teal font-bold uppercase tracking-wider mt-0.5">
                24/7 AI Assistance
              </span>
            </div>
          </button>
        </div>

        {/* Global Modals */}
        <BookingModal
          isOpen={isBookingOpen}
          onClose={() => setIsBookingOpen(false)}
          initialService={bookingService}
        />

        <AIReceptionistModal
          isOpen={isAIReceptionistOpen}
          onClose={() => setIsAIReceptionistOpen(false)}
        />
      </div>
    </Router>
  );
}

export default App;
