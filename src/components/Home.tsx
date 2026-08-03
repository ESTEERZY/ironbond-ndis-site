import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Header from './Header';
import Hero from './Hero';
import TreatmentsDirectory from './TreatmentsDirectory';
import Footer from './Footer';
import BookingModal from './BookingModal';
import AIReceptionistModal from './AIReceptionistModal';
import MobileStickyBar from './MobileStickyBar';
import { ArrowRight, Phone, ArrowUpRight, Bot, MapPin, Clock } from 'lucide-react';


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
    const targetSection = location.state?.scrollToSection || (location.state?.scrollToContact ? 'contact' : null);
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
      
      {/* HEADER */}
      <Header
        onOpenBooking={handleOpenBooking}
        onOpenAIReceptionist={handleOpenAIReceptionist}
      />

      <main>
        {/* 01 — HERO */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* 02 — INTRODUCTION */}
        <section className="py-24 bg-white border-y border-charcoal/10">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-6 space-y-6">
                <span className="text-[11px] font-sans font-bold uppercase tracking-[0.25em] text-forest">
                  02 — OUR PHILOSOPHY
                </span>

                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight text-charcoal">
                  A different kind of dental experience.
                </h2>

                <p className="text-base text-charcoal-muted leading-relaxed max-w-xl font-sans">
                  We believe visiting the dentist should be calm, clear, and focused entirely around your comfort. From transparent treatment explanations to gentle clinical care, Harbour Dental Studio is built to make looking after your smile straightforward.
                </p>

                <div className="pt-2">
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-3 text-xs font-sans font-bold uppercase tracking-widest text-charcoal hover:text-forest border-b border-charcoal pb-1 transition-colors"
                  >
                    <span>MEET HARBOUR DENTAL</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="relative aspect-[4/3] overflow-hidden bg-sand-light shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1000&q=80"
                    alt="Harbour Dental Studio dentist speaking warmly with patient"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 03 — TREATMENTS DIRECTORY */}
        <TreatmentsDirectory onOpenBooking={handleOpenBooking} />

        {/* 04 — FEATURED TREATMENT (Cosmetic Smile Design Focus) */}
        <section className="py-24 bg-charcoal text-white relative overflow-hidden">
          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-7 relative">
                <div className="aspect-[16/10] overflow-hidden bg-slate-800 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1200&q=80"
                    alt="Cosmetic dentistry veneer work at Harbour Dental Studio"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="lg:col-span-5 space-y-6">
                <span className="text-[11px] font-sans font-bold uppercase tracking-[0.25em] text-sand">
                  04 — FEATURED TREATMENT
                </span>

                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight text-white">
                  Your smile, considered carefully.
                </h2>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
                  Cosmetic dentistry at Harbour Dental Studio is focused on subtle, natural aesthetics. Whether addressing discolouration, surface wear, or spacing, our custom porcelain veneers and clear aligner plans preserve natural enamel while enhancing your confidence.
                </p>

                <div className="pt-3 flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/treatments/cosmetic-dentistry"
                    className="bg-sand text-charcoal hover:bg-white font-sans text-xs font-bold uppercase tracking-widest px-7 py-3.5 transition-colors text-center"
                  >
                    EXPLORE COSMETIC DENTISTRY
                  </Link>
                  <button
                    onClick={() => handleOpenBooking('Cosmetic Dentistry')}
                    className="border border-white/20 hover:border-white text-white font-sans text-xs font-bold uppercase tracking-widest px-6 py-3.5 transition-colors text-center"
                  >
                    BOOK CONSULTATION
                  </button>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 05 — PATIENT EXPERIENCE (Split Screen Journey) */}
        <section className="py-24 bg-ivory border-b border-charcoal/10">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-5 space-y-6">
                <span className="text-[11px] font-sans font-bold uppercase tracking-[0.25em] text-forest">
                  05 — PATIENT EXPERIENCE
                </span>

                <h2 className="font-serif text-3xl sm:text-4xl font-normal text-charcoal">
                  Designed to put you completely at ease.
                </h2>

                <p className="text-sm text-charcoal-muted leading-relaxed font-sans">
                  From your first phone call to post-treatment care, we prioritize clear communication, transparent pricing, and gentle clinical techniques.
                </p>

                <div className="space-y-4 pt-2 font-sans text-xs text-charcoal">
                  <div className="border-l-2 border-forest pl-4 py-1">
                    <h3 className="font-bold text-sm text-charcoal">Transparent Upfront Quotes</h3>
                    <p className="text-charcoal-muted mt-0.5">Clear treatment estimates provided before any procedure starts.</p>
                  </div>

                  <div className="border-l-2 border-forest pl-4 py-1">
                    <h3 className="font-bold text-sm text-charcoal">On-The-Spot HICAPS Claiming</h3>
                    <p className="text-charcoal-muted mt-0.5">Instant private health fund claiming at our reception desk.</p>
                  </div>

                  <div className="border-l-2 border-forest pl-4 py-1">
                    <h3 className="font-bold text-sm text-charcoal">Calm Clinic Atmosphere</h3>
                    <p className="text-charcoal-muted mt-0.5">Unsurfaced waiting room designed for rest and quiet reassurance.</p>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    to="/patient-information"
                    className="inline-flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-widest text-charcoal hover:text-forest"
                  >
                    <span>READ PATIENT INFORMATION</span>
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="aspect-[4/3] overflow-hidden bg-sand-light shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1200&q=80"
                    alt="Patient journey at Harbour Dental Studio"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 06 — TEAM (Editorial Dentist Portraits) */}
        <section className="py-24 bg-white border-b border-charcoal/10">
          <div className="container mx-auto px-6 lg:px-12">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
              <div>
                <span className="text-[11px] font-sans font-bold uppercase tracking-[0.25em] text-forest block mb-3">
                  06 — CLINICAL TEAM
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal">
                  Experienced Hobart Dentists
                </h2>
              </div>
              <Link
                to="/team"
                className="text-xs font-sans font-bold uppercase tracking-widest text-charcoal hover:text-forest mt-4 md:mt-0 flex items-center gap-2"
              >
                <span>MEET THE FULL TEAM</span>
                <ArrowUpRight size={16} />
              </Link>
            </div>

            {/* Editorial 2-Column Dentist Portraits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              
              {/* Doctor 1 */}
              <div className="space-y-6 group">
                <div className="aspect-[4/5] overflow-hidden bg-sand-light shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80"
                    alt="Dr. Sophie Mitchell Principal Dentist"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-forest">PRINCIPAL DENTIST</span>
                  <h3 className="font-serif text-3xl text-charcoal mt-1">Dr. Sophie Mitchell</h3>
                  <p className="text-xs text-charcoal-muted font-sans font-medium mt-1">BDS (Distinction), Univ. of Sydney · 14+ Years Clinical Care</p>
                  <p className="text-xs text-charcoal-muted leading-relaxed font-sans mt-3">
                    Sophie founded Harbour Dental Studio to deliver gentle, patient-focused restorative and general dentistry in Hobart.
                  </p>
                  <button
                    onClick={() => handleOpenBooking('Dr. Sophie Mitchell')}
                    className="mt-4 text-xs font-sans font-bold uppercase tracking-widest text-forest border-b border-forest pb-0.5 hover:text-charcoal transition-colors"
                  >
                    BOOK WITH DR. MITCHELL →
                  </button>
                </div>
              </div>

              {/* Doctor 2 */}
              <div className="space-y-6 group">
                <div className="aspect-[4/5] overflow-hidden bg-sand-light shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80"
                    alt="Dr. James Carter Dentist"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-forest">DENTIST</span>
                  <h3 className="font-serif text-3xl text-charcoal mt-1">Dr. James Carter</h3>
                  <p className="text-xs text-charcoal-muted font-sans font-medium mt-1">BDSc (Hons), Univ. of Melbourne · 9+ Years Clinical Care</p>
                  <p className="text-xs text-charcoal-muted leading-relaxed font-sans mt-3">
                    James focuses on cosmetic restorations, clear aligner therapy, and crown work with a friendly, relaxed clinical manner.
                  </p>
                  <button
                    onClick={() => handleOpenBooking('Dr. James Carter')}
                    className="mt-4 text-xs font-sans font-bold uppercase tracking-widest text-forest border-b border-forest pb-0.5 hover:text-charcoal transition-colors"
                  >
                    BOOK WITH DR. CARTER →
                  </button>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* 07 — EMERGENCY DENTAL (Full Width Forest Contrast) */}
        <section className="py-20 bg-forest text-white">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 max-w-5xl mx-auto">
              
              <div className="space-y-3 text-center lg:text-left">
                <span className="text-[11px] font-sans font-bold uppercase tracking-[0.25em] text-sand">
                  07 — URGENT TRIAGE CARE
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white">
                  When you need a dentist, we're here.
                </h2>
                <p className="text-sm text-slate-200 max-w-xl font-sans">
                  Experiencing severe toothache, facial swelling, or dental trauma? We hold reserved emergency slots daily for Hobart patients.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
                <a
                  href="tel:0361000000"
                  className="bg-white text-forest font-sans text-xs font-bold uppercase tracking-widest px-8 py-4 text-center transition-colors shadow-lg"
                >
                  CALL (03) 6100 0000
                </a>
                <button
                  onClick={() => handleOpenBooking('Emergency Dental Care')}
                  className="border border-white/30 hover:border-white text-white font-sans text-xs font-bold uppercase tracking-widest px-6 py-4 text-center transition-colors"
                >
                  REQUEST EMERGENCY SLOT
                </button>
              </div>

            </div>
          </div>
        </section>

        {/* 08 — AI RECEPTIONIST (Subtle Technology Convenience Showcase) */}
        <section className="py-24 bg-ivory border-b border-charcoal/10">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
              
              <div className="lg:col-span-6 space-y-6">
                <span className="text-[11px] font-sans font-bold uppercase tracking-[0.25em] text-forest">
                  08 — CONVENIENT VIRTUAL ASSISTANCE
                </span>

                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-charcoal">
                  Need help outside clinic hours?
                </h2>

                <p className="text-sm text-charcoal-muted leading-relaxed font-sans">
                  Our virtual receptionist can assist with common enquiries, appointment requests, clinic hours, and basic booking needs when our Hobart reception team is unavailable.
                </p>

                <div className="pt-2">
                  <button
                    onClick={handleOpenAIReceptionist}
                    className="bg-charcoal hover:bg-forest text-white font-sans text-xs font-bold uppercase tracking-widest px-8 py-4 transition-colors inline-flex items-center gap-3 shadow-md"
                  >
                    <Bot size={16} className="text-sand" />
                    SPEAK WITH OUR RECEPTIONIST
                  </button>
                </div>
              </div>

              {/* Polished Receptionist Interaction Mockup */}
              <div className="lg:col-span-6">
                <div className="bg-white p-6 border border-charcoal/10 shadow-xl space-y-4 font-sans">
                  <div className="flex items-center justify-between border-b border-charcoal/10 pb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-forest text-white flex items-center justify-center font-bold text-xs">
                        🤖
                      </div>
                      <div>
                        <h3 className="text-xs font-bold text-charcoal">Harbour AI Receptionist</h3>
                        <p className="text-[10px] text-forest font-semibold uppercase tracking-wider">24/7 Virtual Assistant</p>
                      </div>
                    </div>
                    <span className="text-[10px] text-charcoal-muted uppercase tracking-widest font-mono">DEMO</span>
                  </div>

                  <div className="bg-ivory p-4 text-xs text-charcoal-muted leading-relaxed space-y-2 border border-charcoal/5">
                    <p className="font-bold text-charcoal">Sample Response:</p>
                    <p className="italic">
                      "Good evening! Harbour Dental Studio is currently closed. I can take your booking request for tomorrow morning or answer questions about our check-up fees."
                    </p>
                  </div>

                  <button
                    onClick={handleOpenAIReceptionist}
                    className="w-full bg-ivory hover:bg-sand-light text-charcoal text-xs font-bold uppercase tracking-wider py-3 border border-charcoal/10 transition-colors text-center"
                  >
                    TRY DEMO CONVERSATION →
                  </button>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 09 — TESTIMONIALS (Editorial Single Quote Focus) */}
        <section className="py-24 bg-white border-b border-charcoal/10">
          <div className="container mx-auto px-6 lg:px-12 max-w-4xl text-center space-y-8">
            <span className="text-[11px] font-sans font-bold uppercase tracking-[0.25em] text-forest">
              09 — PATIENT REVIEWS
            </span>

            <blockquote className="font-serif text-2xl sm:text-3xl lg:text-4xl text-charcoal font-normal leading-relaxed italic">
              "Dr Sophie and the team made my check-up completely stress-free. The clinic is quiet, modern, and very reassuring. Really appreciated the thorough clean and clear advice."
            </blockquote>

            <div className="pt-2">
              <p className="font-sans font-bold text-sm text-charcoal">Mark T.</p>
              <p className="text-xs font-sans text-charcoal-muted">Sandy Bay, Hobart · Check-up & Clean</p>
            </div>
          </div>
        </section>

        {/* 10 — LOCATION & HOURS */}
        <section id="contact" className="py-24 bg-ivory">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-5 space-y-6">
                <span className="text-[11px] font-sans font-bold uppercase tracking-[0.25em] text-forest">
                  10 — LOCATION & HOURS
                </span>

                <h2 className="font-serif text-3xl sm:text-4xl font-normal text-charcoal">
                  Harbour Dental Studio
                </h2>

                <div className="space-y-4 font-sans text-xs text-charcoal">
                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="text-forest flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-charcoal">Address</h3>
                      <p className="text-charcoal-muted mt-0.5">123 Harbour Street, Hobart TAS 7000</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone size={16} className="text-forest flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-charcoal">Phone</h3>
                      <a href="tel:0361000000" className="text-forest font-bold mt-0.5 block hover:underline">
                        (03) 6100 0000
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock size={16} className="text-forest flex-shrink-0 mt-0.5" />
                    <div className="w-full">
                      <h3 className="font-bold text-charcoal mb-1">Opening Hours</h3>
                      <div className="space-y-1 text-charcoal-muted font-medium">
                        <div className="flex justify-between border-b border-charcoal/10 pb-1">
                          <span>Monday – Friday:</span>
                          <span className="font-bold text-charcoal">8:00am – 6:00pm</span>
                        </div>
                        <div className="flex justify-between border-b border-charcoal/10 pb-1">
                          <span>Saturday:</span>
                          <span className="font-bold text-charcoal">9:00am – 1:00pm</span>
                        </div>
                        <div className="flex justify-between text-charcoal-muted">
                          <span>Sunday:</span>
                          <span>Closed</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex gap-3">
                  <a
                    href="tel:0361000000"
                    className="bg-charcoal hover:bg-forest text-white font-sans text-xs font-bold uppercase tracking-wider py-3.5 px-6 transition-colors"
                  >
                    CALL CLINIC
                  </a>
                  <button
                    onClick={() => handleOpenBooking()}
                    className="bg-forest hover:bg-forest-light text-white font-sans text-xs font-bold uppercase tracking-wider py-3.5 px-6 transition-colors"
                  >
                    BOOK ONLINE
                  </button>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="lg:col-span-7">
                <div className="aspect-[16/10] overflow-hidden bg-sand-light shadow-xl relative group">
                  <img
                    src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80"
                    alt="Map location view of Hobart Waterfront"
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-charcoal/20"></div>
                  <div className="absolute bottom-6 left-6 bg-ivory p-4 max-w-xs shadow-lg">
                    <p className="text-xs font-bold font-serif text-charcoal">Harbour Dental Studio</p>
                    <p className="text-[11px] text-charcoal-muted font-sans mt-0.5">Central Hobart · Parking Nearby</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 11 — FINAL CTA */}
        <section className="py-24 bg-white text-center border-t border-charcoal/10">
          <div className="container mx-auto px-6 lg:px-12 max-w-3xl space-y-6">
            <span className="text-[11px] font-sans font-bold uppercase tracking-[0.25em] text-forest">
              11 — APPOINTMENT REQUEST
            </span>

            <h2 className="font-serif text-4xl sm:text-5xl font-normal text-charcoal">
              Your next appointment starts here.
            </h2>

            <p className="text-base text-charcoal-muted leading-relaxed font-sans max-w-xl mx-auto">
              Select a convenient time online or speak directly with our Hobart reception team.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <button
                onClick={() => handleOpenBooking()}
                className="bg-forest hover:bg-forest-light text-white font-sans text-xs font-bold uppercase tracking-widest px-9 py-4 transition-colors shadow-md"
              >
                BOOK AN APPOINTMENT
              </button>

              <a
                href="tel:0361000000"
                className="border border-charcoal/20 hover:border-charcoal text-charcoal font-sans text-xs font-bold uppercase tracking-widest px-8 py-4 transition-colors"
              >
                CALL THE CLINIC
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* 12 — FOOTER */}
      <Footer
        onOpenBooking={handleOpenBooking}
        onOpenAIReceptionist={handleOpenAIReceptionist}
      />

      {/* Mobile Sticky Bar */}
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
