import React, { useState } from 'react';
import { MapPin, Phone, Clock, Navigation, Car, ShieldCheck } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const [viewMode, setViewMode] = useState<'photo' | 'map'>('photo');

  return (
    <section id="location" className="py-24 bg-ivory border-b border-charcoal/10 font-sans">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Hobart Practice Exterior Photo & Interactive Map Switcher */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* View Mode Switcher */}
            <div className="flex items-center gap-2 text-xs font-sans mb-2">
              <button
                onClick={() => setViewMode('photo')}
                className={`px-4 py-2 rounded-full font-bold uppercase tracking-wider transition-all ${
                  viewMode === 'photo'
                    ? 'bg-forest text-white shadow-md'
                    : 'bg-white text-charcoal border border-charcoal/15 hover:bg-sand-light'
                }`}
              >
                Studio Exterior
              </button>
              <button
                onClick={() => setViewMode('map')}
                className={`px-4 py-2 rounded-full font-bold uppercase tracking-wider transition-all ${
                  viewMode === 'map'
                    ? 'bg-forest text-white shadow-md'
                    : 'bg-white text-charcoal border border-charcoal/15 hover:bg-sand-light'
                }`}
              >
                Hobart Map View
              </button>
            </div>

            {/* Visual Container */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-sand-light border border-charcoal/10 shadow-xl group">
              
              {viewMode === 'photo' ? (
                <>
                  <img
                    src="/images/hobart_location_exterior.png"
                    alt="Harbour Dental Studio waterfront location building Hobart Tasmania"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-charcoal/10 shadow-lg">
                    <h3 className="font-serif text-lg text-charcoal">Harbour Dental Studio</h3>
                    <p className="text-xs text-charcoal-muted font-sans mt-0.5">
                      123 Harbour Street, Hobart TAS 7000 · On-site patient parking
                    </p>
                  </div>
                </>
              ) : (
                <iframe
                  title="Harbour Dental Studio Hobart Map"
                  src="https://maps.google.com/maps?q=Hobart%20Tasmania&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 filter contrast-[1.05]"
                  loading="lazy"
                ></iframe>
              )}

            </div>

            {/* Parking & Accessibility Badges */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="bg-white p-3.5 rounded-2xl border border-charcoal/10 flex items-center gap-3">
                <Car size={16} className="text-forest flex-shrink-0" />
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-charcoal-muted block">PARKING</span>
                  <span className="text-xs font-bold text-charcoal">Dedicated Patient Bays</span>
                </div>
              </div>

              <div className="bg-white p-3.5 rounded-2xl border border-charcoal/10 flex items-center gap-3">
                <ShieldCheck size={16} className="text-forest flex-shrink-0" />
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-charcoal-muted block">ACCESSIBILITY</span>
                  <span className="text-xs font-bold text-charcoal">Ground Floor & Wheelchair</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Address, Phone & Hours */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="text-[11px] font-sans font-bold uppercase tracking-[0.25em] text-forest block mb-3">
                12 — LOCATION & HOURS
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-charcoal">
                Harbour Dental Studio
              </h2>
            </div>

            <div className="space-y-6 divide-y divide-charcoal/10">
              
              {/* Address */}
              <div className="flex items-start gap-4 pt-4">
                <div className="w-10 h-10 rounded-full bg-forest/10 text-forest flex items-center justify-center flex-shrink-0 mt-1 border border-forest/20">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-charcoal-muted block">ADDRESS</span>
                  <p className="font-serif text-xl text-charcoal mt-1">123 Harbour Street</p>
                  <p className="text-xs text-charcoal-muted font-sans mt-0.5">Hobart TAS 7000 · Central Hobart Waterfront</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 pt-6">
                <div className="w-10 h-10 rounded-full bg-forest/10 text-forest flex items-center justify-center flex-shrink-0 mt-1 border border-forest/20">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-charcoal-muted block">PHONE</span>
                  <a href="tel:0361000000" className="font-serif text-xl text-charcoal hover:text-forest transition-colors block mt-1">
                    (03) 6100 0000
                  </a>
                  <p className="text-xs text-charcoal-muted font-sans mt-0.5">Direct reception desk · 24/7 AI Concierge available</p>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="flex items-start gap-4 pt-6">
                <div className="w-10 h-10 rounded-full bg-forest/10 text-forest flex items-center justify-center flex-shrink-0 mt-1 border border-forest/20">
                  <Clock size={18} />
                </div>
                <div className="w-full">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-charcoal-muted block">OPENING HOURS</span>
                  
                  <div className="mt-3 space-y-2 text-xs font-sans">
                    <div className="flex justify-between border-b border-charcoal/5 pb-1.5">
                      <span className="text-charcoal font-medium">Monday – Friday:</span>
                      <span className="font-bold text-forest">8:00am – 6:00pm</span>
                    </div>
                    <div className="flex justify-between border-b border-charcoal/5 pb-1.5">
                      <span className="text-charcoal font-medium">Saturday:</span>
                      <span className="font-bold text-forest">9:00am – 1:00pm</span>
                    </div>
                    <div className="flex justify-between text-charcoal-muted">
                      <span>Sunday:</span>
                      <span className="font-bold text-rose-800">Closed</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://maps.google.com/?q=123+Harbour+Street+Hobart+TAS+7000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-charcoal hover:bg-forest text-white text-xs font-sans font-bold uppercase tracking-widest py-4 px-6 rounded-full transition-all text-center flex items-center justify-center gap-2 shadow-md"
              >
                <Navigation size={15} />
                GET DIRECTIONS
              </a>

              <a
                href="tel:0361000000"
                className="flex-1 bg-white hover:bg-sand-light text-charcoal border border-charcoal/20 text-xs font-sans font-bold uppercase tracking-widest py-4 px-6 rounded-full transition-all text-center flex items-center justify-center gap-2"
              >
                <Phone size={15} className="text-forest" />
                CALL THE CLINIC
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default LocationSection;
