import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { treatmentsData } from '../data/treatmentsData';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MobileStickyBar from '../components/MobileStickyBar';
import { CheckCircle2, ChevronRight, Calendar, Phone, ShieldCheck, HelpCircle } from 'lucide-react';


interface TreatmentDetailPageProps {
  onOpenBooking: (serviceName?: string) => void;
  onOpenAIReceptionist: () => void;
}

export const TreatmentDetailPage: React.FC<TreatmentDetailPageProps> = ({
  onOpenBooking,
  onOpenAIReceptionist,
}) => {
  const { slug } = useParams<{ slug: string }>();
  const treatment = treatmentsData.find((t) => t.slug === slug || t.id === slug);

  if (!treatment) {
    return <Navigate to="/treatments" replace />;
  }

  return (
    <div className="min-h-screen bg-white text-navy font-sans">
      <Header onOpenBooking={onOpenBooking} onOpenAIReceptionist={onOpenAIReceptionist} />

      <main className="pt-28 lg:pt-32 pb-24">
        {/* Breadcrumb Navigation */}
        <div className="bg-slate-50 border-b border-slate-200/80 py-3">
          <div className="container mx-auto px-6 lg:px-12 flex items-center gap-2 text-xs font-semibold text-slate-500">
            <Link to="/" className="hover:text-teal">Home</Link>
            <ChevronRight size={12} />
            <Link to="/treatments" className="hover:text-teal">Treatments</Link>
            <ChevronRight size={12} />
            <span className="text-navy font-bold">{treatment.title}</span>
          </div>
        </div>

        {/* Treatment Hero */}
        <section className="bg-gradient-to-b from-slate-50 via-white to-slate-50 py-12 lg:py-16 border-b border-slate-200/80">
          <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-12">
            
            {/* Left Content */}
            <div className="w-full lg:w-1/2 space-y-6">
              <span className="text-teal font-bold text-xs uppercase tracking-widest bg-teal/10 border border-teal/20 px-3.5 py-1.5 rounded-full inline-block">
                {treatment.category} · Hobart Dental Care
              </span>

              <h1 className="text-4xl sm:text-5xl font-black text-navy tracking-tight">
                {treatment.title}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                {treatment.overview}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button
                  onClick={() => onOpenBooking(treatment.title)}
                  className="bg-teal hover:bg-teal/90 text-white font-extrabold text-xs uppercase tracking-wider px-8 py-4 rounded-xl transition-all shadow-md shadow-teal/20 flex items-center justify-center gap-2"
                >
                  <Calendar size={16} /> Book {treatment.title}
                </button>

                <a
                  href="tel:0361000000"
                  className="border border-slate-200 hover:bg-slate-50 text-navy font-bold text-xs px-6 py-4 rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <Phone size={15} className="text-teal" /> Call (03) 6100 0000
                </a>
              </div>
            </div>

            {/* Right Visual Image */}
            <div className="w-full lg:w-1/2">
              <div className="bg-white rounded-3xl p-3 border border-slate-200 shadow-xl overflow-hidden">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100">
                  <img
                    src={treatment.heroImage}
                    alt={treatment.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-slate-200 text-xs font-bold text-navy shadow-lg flex items-center gap-2">
                    <ShieldCheck size={18} className="text-teal flex-shrink-0" />
                    <span>Harbour Dental Studio Hobart · Gentle & Professional</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Section 2: What It Involves & Suitability */}
        <section className="py-16 container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
            {/* What Treatment Involves */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200/90 shadow-sm space-y-4">
              <h2 className="text-2xl font-black text-navy">What Treatment Involves</h2>
              <ul className="space-y-3 pt-2">
                {treatment.whatItInvolves.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed font-medium">
                    <CheckCircle2 size={18} className="text-teal flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Who It May Be Suitable For */}
            <div className="bg-teal/5 rounded-3xl p-8 border border-teal/20 shadow-sm space-y-4">
              <h2 className="text-2xl font-black text-navy">Who It May Be Suitable For</h2>
              <ul className="space-y-3 pt-2">
                {treatment.suitability.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed font-medium">
                    <CheckCircle2 size={18} className="text-emerald flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </section>

        {/* Section 3: What to Expect Step-by-Step */}
        <section className="py-16 bg-slate-50 border-y border-slate-200">
          <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
            <div className="text-center mb-12">
              <span className="text-teal font-bold text-xs uppercase tracking-widest bg-teal/10 border border-teal/20 px-3.5 py-1.5 rounded-full inline-block mb-3">
                Patient Journey
              </span>
              <h2 className="text-3xl font-black text-navy">What to Expect During Your Visit</h2>
            </div>

            <div className="space-y-6">
              {treatment.whatToExpect.map((step) => (
                <div
                  key={step.step}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex items-start gap-5"
                >
                  <div className="w-10 h-10 rounded-2xl bg-navy text-teal font-black text-lg flex items-center justify-center flex-shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-navy mb-1">{step.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Treatment Specific FAQs */}
        {treatment.faqs && treatment.faqs.length > 0 && (
          <section className="py-16 container mx-auto px-6 lg:px-12 max-w-3xl">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-black text-navy mb-2">Frequently Asked Questions</h2>
              <p className="text-xs sm:text-sm text-slate-600">Common queries regarding {treatment.title}.</p>
            </div>

            <div className="space-y-4">
              {treatment.faqs.map((faq, index) => (
                <div key={index} className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                  <h3 className="text-base font-bold text-navy mb-2 flex items-center gap-2">
                    <HelpCircle size={16} className="text-teal" /> {faq.question}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Section 5: Appointment Call-To-Action */}
        <section className="container mx-auto px-6 lg:px-12 mt-12">
          <div className="bg-gradient-to-r from-navy via-navy-mid to-navy text-white rounded-3xl p-8 lg:p-12 text-center shadow-xl space-y-6 max-w-4xl mx-auto">
            <h2 className="text-3xl font-black">Ready to discuss {treatment.title}?</h2>
            <p className="text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
              Book a consultation with our Hobart dental team to explore treatment options tailored to your oral health needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
              <button
                onClick={() => onOpenBooking(treatment.title)}
                className="bg-teal hover:bg-teal/90 text-white font-extrabold text-xs uppercase tracking-wider px-8 py-3.5 rounded-xl transition-all shadow-md shadow-teal/20 flex items-center justify-center gap-2"
              >
                <Calendar size={16} /> Request Appointment Online
              </button>
              <a
                href="tel:0361000000"
                className="border border-white/20 hover:bg-white/10 text-white font-bold text-xs px-6 py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <Phone size={15} className="text-teal" /> Call (03) 6100 0000
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer onOpenBooking={onOpenBooking} onOpenAIReceptionist={onOpenAIReceptionist} />
      <MobileStickyBar onOpenBooking={() => onOpenBooking(treatment.title)} onOpenAIReceptionist={onOpenAIReceptionist} />
    </div>
  );
};

export default TreatmentDetailPage;
