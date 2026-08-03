import React from 'react';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-24 bg-ivory font-sans border-b border-charcoal/10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Large Clinic Location Image */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[16/11] overflow-hidden bg-sand-light shadow-xl group">
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80"
                alt="Map view of Hobart Waterfront and Harbour Dental Studio location"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
              />
              <div className="absolute inset-0 bg-charcoal/20"></div>
              <div className="absolute bottom-6 left-6 bg-white p-4 max-w-xs shadow-lg border border-charcoal/10">
                <p className="font-serif text-lg text-charcoal">Harbour Dental Studio</p>
                <p className="text-xs text-charcoal-muted mt-0.5 font-sans">Central Hobart · On-site parking available</p>
              </div>
            </div>
          </div>

          {/* Right Column: Location Details */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[11px] font-sans font-bold uppercase tracking-[0.25em] text-forest block">
              12 — LOCATION & HOURS
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-charcoal">
              Harbour Dental Studio
            </h2>

            <div className="space-y-5 font-sans text-xs text-charcoal pt-2">
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-white text-forest flex items-center justify-center flex-shrink-0 mt-0.5 border border-charcoal/10">
                  <MapPin size={18} />
                </div>
                <div>
                  <h3 className="font-bold text-charcoal uppercase tracking-wider text-[11px]">Address</h3>
                  <p className="text-sm font-medium text-charcoal mt-0.5">123 Harbour Street</p>
                  <p className="text-xs text-charcoal-muted">Hobart TAS 7000</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-white text-forest flex items-center justify-center flex-shrink-0 mt-0.5 border border-charcoal/10">
                  <Phone size={18} />
                </div>
                <div>
                  <h3 className="font-bold text-charcoal uppercase tracking-wider text-[11px]">Phone</h3>
                  <a href="tel:0361000000" className="text-sm font-bold text-forest hover:underline mt-0.5 block">
                    (03) 6100 0000
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-2 border-t border-charcoal/10">
                <div className="w-9 h-9 rounded-full bg-white text-forest flex items-center justify-center flex-shrink-0 mt-0.5 border border-charcoal/10">
                  <Clock size={18} />
                </div>
                <div className="w-full">
                  <h3 className="font-bold text-charcoal uppercase tracking-wider text-[11px] mb-1">Opening Hours</h3>
                  <div className="space-y-1.5 text-xs text-charcoal-muted font-medium">
                    <div className="flex justify-between border-b border-charcoal/5 pb-1">
                      <span>Monday – Friday:</span>
                      <span className="font-bold text-charcoal">8:00am – 6:00pm</span>
                    </div>
                    <div className="flex justify-between border-b border-charcoal/5 pb-1">
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

            <div className="pt-3 flex flex-col sm:flex-row gap-4">
              <a
                href="https://maps.google.com/?q=Hobart+TAS+7000"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-charcoal hover:bg-forest text-white font-sans text-xs font-bold uppercase tracking-widest px-7 py-4 text-center transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <Navigation size={14} className="text-sand" /> GET DIRECTIONS
              </a>
              <a
                href="tel:0361000000"
                className="border border-charcoal/20 hover:border-charcoal text-charcoal font-sans text-xs font-bold uppercase tracking-widest px-7 py-4 text-center transition-colors flex items-center justify-center gap-2"
              >
                <Phone size={14} className="text-forest" /> CALL THE CLINIC
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default LocationSection;
