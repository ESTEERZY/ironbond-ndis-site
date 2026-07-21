import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

// Public Web Pages
import Home from './components/Home';
import CaseStudyTemplate from './components/CaseStudyTemplate';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import Sitemap from './components/Sitemap';

// Platform Auth & Theme Context Providers
import { AuthProvider } from './platform/context/AuthContext';
import { ThemeProvider } from './platform/context/ThemeContext';

// Platform Layout & Standalone Views
import { Layout } from './platform/components/Layout';
import { Login } from './platform/pages/Login';
import { ForgotPassword } from './platform/pages/ForgotPassword';
import { ParticipantPortal } from './platform/pages/ParticipantPortal';
import { MobileWorkerApp } from './platform/pages/MobileWorkerApp';

// Platform Dashboard Views
import { Dashboard } from './platform/pages/Dashboard';
import { Participants } from './platform/pages/Participants';
import { ParticipantDetail } from './platform/pages/ParticipantDetail';
import { Referrals } from './platform/pages/Referrals';
import { Scheduling } from './platform/pages/Scheduling';
import { SupportWorkers } from './platform/pages/SupportWorkers';
import { ProgressNotes } from './platform/pages/ProgressNotes';
import { Documents } from './platform/pages/Documents';
import { Funding } from './platform/pages/Funding';
import { ServiceAgreements } from './platform/pages/ServiceAgreements';
import { Incidents } from './platform/pages/Incidents';
import { Compliance } from './platform/pages/Compliance';
import { Reports } from './platform/pages/Reports';
import { Messaging } from './platform/pages/Messaging';
import { Settings } from './platform/pages/Settings';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Router>
          <ScrollToTop />
          <div className="min-h-screen bg-white dark:bg-navy-mid text-navy dark:text-white font-sans selection:bg-teal selection:text-white transition-colors duration-200">
            <Routes>
              {/* Public Website Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="/sitemap" element={<Sitemap />} />
              <Route path="/case-study/:id" element={<CaseStudyTemplate />} />
              <Route path="/:id.html" element={<CaseStudyTemplate />} />

              {/* Standalone Platform Auth & Specialized Portals */}
              <Route path="/platform/login" element={<Login />} />
              <Route path="/platform/forgot-password" element={<ForgotPassword />} />
              <Route path="/platform/portal" element={<ParticipantPortal />} />
              <Route path="/platform/mobile-worker" element={<MobileWorkerApp />} />

              {/* Enterprise NDIS Platform Shell */}
              <Route path="/platform" element={<Layout />}>
                <Route index element={<Dashboard />} />
                <Route path="participants" element={<Participants />} />
                <Route path="participants/:id" element={<ParticipantDetail />} />
                <Route path="referrals" element={<Referrals />} />
                <Route path="scheduling" element={<Scheduling />} />
                <Route path="workers" element={<SupportWorkers />} />
                <Route path="progress-notes" element={<ProgressNotes />} />
                <Route path="documents" element={<Documents />} />
                <Route path="funding" element={<Funding />} />
                <Route path="agreements" element={<ServiceAgreements />} />
                <Route path="incidents" element={<Incidents />} />
                <Route path="compliance" element={<Compliance />} />
                <Route path="reports" element={<Reports />} />
                <Route path="messages" element={<Messaging />} />
                <Route path="settings" element={<Settings />} />
              </Route>
            </Routes>
          </div>
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
