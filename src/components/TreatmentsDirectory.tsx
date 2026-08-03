import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

interface TreatmentRow {
  number: string;
  title: string;
  slug: string;
  subtitle: string;
  description: string;
  image: string;
}

interface TreatmentsDirectoryProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const TreatmentsDirectory: React.FC<TreatmentsDirectoryProps> = ({ onOpenBooking }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  const treatments: TreatmentRow[] = [
    {
      number: '01',
      title: 'General Dentistry',
      slug: 'general-dentistry',
      subtitle: 'Comprehensive Care & Fillings',
      description: 'Regular dental health assessments, tooth-coloured restorations, and gentle preventive care to keep your smile healthy long-term.',
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
    },
    {
      number: '02',
      title: 'Emergency Dental',
      slug: 'emergency-dental',
      subtitle: 'Same-Day Triage & Relief',
      description: 'Prompt triage and care for severe toothaches, chipped teeth, or unexpected dental pain. Daily reserve slots available.',
      image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
    },
    {
      number: '03',
      title: 'Cosmetic Dentistry',
      slug: 'cosmetic-dentistry',
      subtitle: 'Veneers & Aesthetic Bonding',
      description: 'Custom porcelain veneers and tooth bonding designed to restore natural harmony, proportion, and confidence.',
      image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80',
    },
    {
      number: '04',
      title: 'Teeth Whitening',
      slug: 'teeth-whitening',
      subtitle: 'In-Chair & Custom Take-Home',
      description: 'Professional dental whitening treatments supervised by our dentist team to safely lift surface and deep discolouration.',
      image: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&w=800&q=80',
    },
    {
      number: '05',
      title: 'Clear Aligners',
      slug: 'clear-aligners',
      subtitle: 'Orthodontic Alignment',
      description: 'Discrete, custom-moulded clear aligner therapy to straighten teeth gently without traditional metal brackets.',
      image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=80',
    },
    {
      number: '06',
      title: 'Dental Implants',
      slug: 'dental-implants',
      subtitle: 'Permanent Tooth Replacement',
      description: 'Biocompatible titanium implants and ceramic crowns engineered for durable, natural-looking tooth replacement.',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
    },
    {
      number: '07',
      title: "Children's Dentistry",
      slug: 'childrens-dentistry',
      subtitle: 'Gentle Family Dental Care',
      description: "Warm, non-threatening check-ups and preventative care for young children to build lifelong healthy habits.",
      image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
    },
  ];

  const activeTreatment = treatments[hoveredIndex ?? 0];

  return (
    <section id="treatments" className="py-24 bg-ivory text-charcoal border-b border-charcoal/10">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-charcoal/10 pb-8">
          <div>
            <span className="text-[11px] font-sans font-bold uppercase tracking-[0.25em] text-forest block mb-3">
              03 — TREATMENT DIRECTORY
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal">
              Dental Services & Care
            </h2>
          </div>
          <Link
            to="/treatments"
            className="text-xs font-sans font-bold uppercase tracking-widest text-charcoal hover:text-forest mt-4 md:mt-0 flex items-center gap-2"
          >
            <span>VIEW ALL TREATMENTS</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* Directory Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Numbered List Rows (7 Cols) */}
          <div className="lg:col-span-7 divide-y divide-charcoal/10">
            {treatments.map((item, index) => (
              <div
                key={item.number}
                onMouseEnter={() => setHoveredIndex(index)}
                className={`py-6 sm:py-8 transition-all cursor-pointer group flex items-start justify-between gap-6 ${
                  hoveredIndex === index ? 'pl-4 bg-sand-soft/60' : ''
                }`}
              >
                <div className="flex items-baseline gap-6">
                  <span className="font-serif text-sm font-bold text-forest">{item.number}</span>
                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-normal text-charcoal group-hover:text-forest transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs font-sans text-charcoal-muted mt-1 font-medium">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Link
                    to={`/treatments/${item.slug}`}
                    className="w-10 h-10 rounded-full border border-charcoal/15 group-hover:border-forest group-hover:bg-forest group-hover:text-white flex items-center justify-center transition-all"
                    aria-label={`Learn more about ${item.title}`}
                  >
                    <ArrowUpRight size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Dynamic Hover Image & Detail Reveal (5 Cols) */}
          <div className="lg:col-span-5 sticky top-36 hidden lg:block">
            <div className="bg-white p-4 border border-charcoal/10 shadow-xl space-y-4">
              <div className="relative aspect-[4/3] overflow-hidden bg-sand-light">
                <img
                  src={activeTreatment.image}
                  alt={activeTreatment.title}
                  className="w-full h-full object-cover object-[center_30%] transition-all duration-700"

                />
                <span className="absolute top-3 left-3 bg-ivory text-charcoal text-[10px] font-sans font-bold uppercase tracking-widest px-3 py-1">
                  {activeTreatment.number} · HOBART STUDIO
                </span>
              </div>

              <div className="p-2 space-y-3">
                <h4 className="font-serif text-2xl text-charcoal">{activeTreatment.title}</h4>
                <p className="text-xs text-charcoal-muted leading-relaxed font-sans">
                  {activeTreatment.description}
                </p>
                
                <div className="pt-2 flex gap-3">
                  <Link
                    to={`/treatments/${activeTreatment.slug}`}
                    className="flex-1 bg-charcoal hover:bg-forest text-white text-xs font-sans font-bold uppercase tracking-wider py-3 text-center transition-colors"
                  >
                    Read Guide
                  </Link>
                  <button
                    onClick={() => onOpenBooking(activeTreatment.title)}
                    className="flex-1 bg-forest hover:bg-forest-light text-white text-xs font-sans font-bold uppercase tracking-wider py-3 text-center transition-colors"
                  >
                    Book Treatment
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default TreatmentsDirectory;
