import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MobileStickyBar from '../components/MobileStickyBar';
import FAQSection from '../components/FAQSection';
import { 
  UserCheck, 
  CreditCard, 
  Calendar, 
  AlertTriangle, 
  CheckCircle2 
} from 'lucide-react';


interface PatientExperiencePageProps {
  onOpenBooking: (serviceName?: string) => void;
  onOpenAIReceptionist: () => void;
}

export const PatientExperiencePage: React.FC<PatientExperiencePageProps> = ({
  onOpenBooking,
  onOpenAIReceptionist,
}) => {
  return (
    <div className="min-h-screen bg-white text-navy font-sans">
      <Header onOpenBooking={onOpenBooking} onOpenAIReceptionist={onOpenAIReceptionist} />

      <main className="pt-32 lg:pt-36 pb-20">
        {/* Page Hero */}
        <section className="bg-slate-50 py-16 border-b border-slate-200">
          <div className="container mx-auto px-6 lg:px-12 text-center max-w-3xl">
            <span className="text-teal font-bold text-xs uppercase tracking-widest bg-teal/10 border border-teal/20 px-3.5 py-1.5 rounded-full inline-block mb-4">
              Patient Care & Guidance
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-navy tracking-tight mb-4">
              The Patient Experience
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Clear, transparent information about what to expect before, during, and after your appointment at Harbour Dental Studio in Hobart.
            </p>
          </div>
        </section>

        {/* Section 1: New Patients & First Appointment */}
        <section className="py-16 container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto space-y-12">
            
            <div className="bg-white rounded-3xl p-8 lg:p-10 border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-teal/10 text-teal flex items-center justify-center font-bold">
                  <UserCheck size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-black text-navy">New Patients & First Appointments</h2>
                  <p className="text-xs text-slate-500 font-semibold">Welcoming individuals and families to our Hobart clinic</p>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                Your initial visit is designed to be thorough and unhurried. We start by completing a confidential medical and dental health history, followed by a gentle exam, soft tissue check, and digital radiographs if required.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="bg-slate-50 border border-slate-200/80 p-4 rounded-2xl space-y-2">
                  <span className="w-7 h-7 rounded-full bg-navy text-teal font-bold text-xs flex items-center justify-center">1</span>
                  <h3 className="text-sm font-bold text-navy">Medical History</h3>
                  <p className="text-xs text-slate-500">Completed easily online or upon arrival at our clinic.</p>
                </div>

                <div className="bg-slate-50 border border-slate-200/80 p-4 rounded-2xl space-y-2">
                  <span className="w-7 h-7 rounded-full bg-navy text-teal font-bold text-xs flex items-center justify-center">2</span>
                  <h3 className="text-sm font-bold text-navy">Comprehensive Exam</h3>
                  <p className="text-xs text-slate-500">Checking teeth, existing restorations, and gum health.</p>
                </div>

                <div className="bg-slate-50 border border-slate-200/80 p-4 rounded-2xl space-y-2">
                  <span className="w-7 h-7 rounded-full bg-navy text-teal font-bold text-xs flex items-center justify-center">3</span>
                  <h3 className="text-sm font-bold text-navy">Clear Quote</h3>
                  <p className="text-xs text-slate-500">All treatment options and costs explained upfront.</p>
                </div>
              </div>
            </div>

            {/* Payment & Health Fund Claiming */}
            <div className="bg-white rounded-3xl p-8 lg:p-10 border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald/10 text-emerald flex items-center justify-center font-bold">
                  <CreditCard size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-black text-navy">Payment & Health Fund Information</h2>
                  <p className="text-xs text-slate-500 font-semibold">Transparent pricing & on-the-spot health fund claiming</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div className="space-y-2 text-xs sm:text-sm text-slate-600">
                  <h3 className="font-bold text-navy flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald" /> HICAPS On-The-Spot Claiming
                  </h3>
                  <p className="leading-relaxed">
                    We process claims on the spot for all major Australian private health funds via HICAPS, so you only pay the gap on the day.
                  </p>
                </div>

                <div className="space-y-2 text-xs sm:text-sm text-slate-600">
                  <h3 className="font-bold text-navy flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-emerald" /> Medicare Child Dental Benefits Schedule (CDBS)
                  </h3>
                  <p className="leading-relaxed">
                    We bulk bill eligible children aged 0–17 under the CDBS up to the Medicare benefit cap ($1,095 over 2 years).
                  </p>
                </div>
              </div>
            </div>

            {/* Appointment Management & Rescheduling */}
            <div className="bg-white rounded-3xl p-8 lg:p-10 border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-teal/10 text-teal flex items-center justify-center font-bold">
                  <Calendar size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-black text-navy">Appointment Management & Reminders</h2>
                  <p className="text-xs text-slate-500 font-semibold">Convenient SMS reminders & flexible policy</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We know schedule changes happen. We send polite SMS reminders 48 hours prior to your scheduled visit. If you need to reschedule or cancel your appointment, please contact us at least 24 hours in advance so we can offer the slot to another patient.
              </p>
            </div>

            {/* Emergency & Urgent Care */}
            <div className="bg-rose-500/5 rounded-3xl p-8 border border-rose-200 space-y-4">
              <div className="flex items-center gap-3">
                <AlertTriangle size={24} className="text-rose-600" />
                <h2 className="text-xl font-bold text-navy">Dental Emergencies</h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                If you experience a severe toothache, facial swelling, or dental trauma, call our triage line immediately at <strong>(03) 6100 0000</strong>. We keep reserved emergency appointments every business day.
              </p>
            </div>

          </div>
        </section>

        {/* Global FAQ Section */}
        <FAQSection onOpenBooking={onOpenBooking} />
      </main>

      <Footer onOpenBooking={onOpenBooking} onOpenAIReceptionist={onOpenAIReceptionist} />
      <MobileStickyBar onOpenBooking={() => onOpenBooking()} onOpenAIReceptionist={onOpenAIReceptionist} />
    </div>
  );
};

export default PatientExperiencePage;
