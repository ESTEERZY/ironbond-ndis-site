import React from 'react';
import { Link } from 'react-router-dom';
import { treatmentsData } from '../data/treatmentsData';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BeforeAfterGallery from '../components/BeforeAfterGallery';
import MobileStickyBar from '../components/MobileStickyBar';
import { ArrowRight, Calendar } from 'lucide-react';


interface TreatmentsPageProps {
  onOpenBooking: (serviceName?: string) => void;
  onOpenAIReceptionist: () => void;
}

export const TreatmentsPage: React.FC<TreatmentsPageProps> = ({
  onOpenBooking,
  onOpenAIReceptionist,
}) => {
  return (
    <div className="min-h-screen bg-white text-navy font-sans">
      <Header onOpenBooking={onOpenBooking} onOpenAIReceptionist={onOpenAIReceptionist} />

      <main className="pt-32 lg:pt-36 pb-20">
        {/* Treatments Hero */}
        <section className="bg-slate-50 py-16 border-b border-slate-200">
          <div className="container mx-auto px-6 lg:px-12 text-center max-w-3xl">
            <span className="text-teal font-bold text-xs uppercase tracking-widest bg-teal/10 border border-teal/20 px-3.5 py-1.5 rounded-full inline-block mb-4">
              Comprehensive Care
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-navy tracking-tight mb-4">
              Dental Treatments & Procedures
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Explore our full range of preventative, restorative, cosmetic, and emergency dental services available at Harbour Dental Studio in Hobart.
            </p>
          </div>
        </section>

        {/* Treatments Grid */}
        <section className="py-20 container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {treatmentsData.map((treatment) => (
              <div
                key={treatment.id}
                className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-teal/40 transition-all duration-300 overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-48 overflow-hidden bg-slate-100">
                    <img
                      src={treatment.heroImage}
                      alt={treatment.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-navy/20"></div>
                    <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-navy text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-xs">
                      {treatment.category}
                    </span>
                  </div>

                  <div className="p-6">
                    <h2 className="text-xl font-bold text-navy mb-2 group-hover:text-teal transition-colors">
                      {treatment.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      {treatment.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-0 space-y-2">
                  <Link
                    to={`/treatments/${treatment.slug}`}
                    className="w-full py-3 px-4 rounded-xl bg-navy hover:bg-navy-mid text-white font-bold text-xs transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Read Treatment Guide</span>
                    <ArrowRight size={14} className="text-teal" />
                  </Link>

                  <button
                    onClick={() => onOpenBooking(treatment.title)}
                    className="w-full py-2.5 px-4 rounded-xl border border-slate-200 hover:border-teal text-slate-700 font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Calendar size={13} className="text-teal" /> Book This Treatment
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Smile Transformation Gallery */}
          <BeforeAfterGallery />
        </section>
      </main>

      <Footer onOpenBooking={onOpenBooking} onOpenAIReceptionist={onOpenAIReceptionist} />
      <MobileStickyBar onOpenBooking={() => onOpenBooking()} onOpenAIReceptionist={onOpenAIReceptionist} />
    </div>
  );
};

export default TreatmentsPage;
