import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MobileStickyBar from '../components/MobileStickyBar';


interface AboutPageProps {
  onOpenBooking: (serviceName?: string) => void;
  onOpenAIReceptionist: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onOpenBooking,
  onOpenAIReceptionist,
}) => {
  return (
    <div className="min-h-screen bg-ivory text-charcoal font-sans">
      <Header onOpenBooking={onOpenBooking} onOpenAIReceptionist={onOpenAIReceptionist} />

      <main className="pt-32 lg:pt-40 pb-24">
        
        {/* Editorial Hero */}
        <section className="py-16 border-b border-charcoal/10">
          <div className="container mx-auto px-6 lg:px-12 max-w-4xl text-center space-y-6">
            <span className="text-[11px] font-sans font-bold uppercase tracking-[0.25em] text-forest">
              ABOUT HARBOUR DENTAL STUDIO
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight">
              Thoughtful dental care in Hobart.
            </h1>
            <p className="text-base sm:text-lg text-charcoal-muted max-w-2xl mx-auto leading-relaxed">
              Founded on the principles of quiet excellence, patient reassurance, and clinical integrity, Harbour Dental Studio is a modern dental practice in Hobart, Tasmania.
            </p>
          </div>
        </section>

        {/* Editorial Story */}
        <section className="py-24 bg-white border-b border-charcoal/10">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-6 space-y-6">
                <span className="text-[11px] font-sans font-bold uppercase tracking-[0.25em] text-forest">
                  OUR PHILOSOPHY
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-normal text-charcoal">
                  Designed around patient comfort.
                </h2>
                <p className="text-sm text-charcoal-muted leading-relaxed">
                  We understand that many individuals feel hesitant or anxious about dental appointments. From our serene waiting room to warm clinical interactions, every detail of our Hobart studio is crafted to ensure a calm experience.
                </p>
                <p className="text-sm text-charcoal-muted leading-relaxed">
                  We explain options clearly without jargon or pressure, ensuring you are fully informed and confident at every step.
                </p>
              </div>

              <div className="lg:col-span-6">
                <div className="aspect-[4/3] overflow-hidden bg-sand-light shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80"
                    alt="Harbour Dental Studio interior Hobart"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-forest text-white text-center">
          <div className="container mx-auto px-6 lg:px-12 max-w-3xl space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl font-normal">Experience dental care done differently.</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
              <button
                onClick={() => onOpenBooking()}
                className="bg-white text-forest font-sans text-xs font-bold uppercase tracking-widest px-8 py-4 transition-colors shadow-md"
              >
                BOOK AN APPOINTMENT
              </button>
              <a
                href="tel:0361000000"
                className="border border-white/30 text-white font-sans text-xs font-bold uppercase tracking-widest px-7 py-4 transition-colors"
              >
                CALL (03) 6100 0000
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer onOpenBooking={onOpenBooking} onOpenAIReceptionist={onOpenAIReceptionist} />
      <MobileStickyBar onOpenBooking={() => onOpenBooking()} onOpenAIReceptionist={onOpenAIReceptionist} />
    </div>
  );
};

export default AboutPage;
