import React from 'react';
import { 
  Smile, 
  Zap, 
  Sparkles, 
  Sun, 
  Anchor, 
  Layers, 
  ShieldCheck, 
  Baby, 
  ArrowRight 
} from 'lucide-react';

interface ServicesSectionProps {
  onOpenBooking: (serviceName?: string) => void;
}

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  badge?: string;
  image: string;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenBooking }) => {
  const services: ServiceItem[] = [
    {
      id: 'general',
      title: 'General Dentistry',
      description: 'Comprehensive oral health assessments, restorative fillings, and routine care tailored to keep your smile healthy long-term.',
      icon: ShieldCheck,
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'emergency',
      title: 'Emergency Dental',
      description: 'Prompt care for severe toothaches, chipped teeth, and unexpected dental trauma. Same-day emergency appointments reserved daily.',
      icon: Zap,
      badge: 'Same-Day Slots',
      image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'cosmetic',
      title: 'Cosmetic Dentistry',
      description: 'Transform your smile with porcelain veneers, aesthetic bonding, and restorative treatments designed for a natural appearance.',
      icon: Sparkles,
      image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'whitening',
      title: 'Teeth Whitening',
      description: 'Safe, professional in-chair whitening and customized take-home kits to lift stains and restore your smile’s brightness.',
      icon: Sun,
      image: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'implants',
      title: 'Dental Implants',
      description: 'Durable, natural-looking replacement options for missing teeth that look, feel, and function just like your natural teeth.',
      icon: Anchor,
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'aligners',
      title: 'Clear Aligners',
      description: 'Discreet, comfortable orthodontic aligners engineered to straighten teeth without traditional metal brackets.',
      icon: Layers,
      image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'checkup',
      title: 'Dental Check-ups & Cleans',
      description: 'Thorough gentle cleans, scaling, fluoride treatments, and preventive checks to keep decay at bay.',
      icon: Smile,
      badge: 'Preventative Focus',
      image: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'children',
      title: "Children's Dentistry",
      description: 'Friendly, encouraging dental care for young children and teenagers in a calm, stress-free setting.',
      icon: Baby,
      image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80',
    },
  ];

  return (
    <section id="services" className="py-20 bg-white relative">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-teal font-bold text-xs uppercase tracking-widest bg-teal/10 border border-teal/20 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Our Dental Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-navy tracking-tight mb-4">
            Comprehensive dental care tailored for your smile.
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            From essential routine maintenance to advanced cosmetic and restorative procedures, Harbour Dental Studio offers high-quality dental care for patients of all ages in Hobart.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="group bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-teal/50 transition-all duration-300 flex flex-col overflow-hidden"
              >
                {/* Visual Thumbnail */}
                <div className="relative h-44 overflow-hidden bg-slate-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/10 transition-colors"></div>
                  
                  {service.badge && (
                    <span className="absolute top-3 right-3 bg-teal text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md">
                      {service.badge}
                    </span>
                  )}

                  <div className="absolute bottom-3 left-3 w-9 h-9 rounded-xl bg-white text-teal flex items-center justify-center shadow-md">
                    <IconComponent size={18} />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-navy mb-2 group-hover:text-teal transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      {service.description}
                    </p>
                  </div>

                  <button
                    onClick={() => onOpenBooking(service.title)}
                    className="w-full py-2.5 px-3 rounded-xl border border-slate-200 hover:border-teal bg-slate-50 hover:bg-teal hover:text-white text-navy font-bold text-xs transition-all duration-200 flex items-center justify-center gap-1.5"
                  >
                    <span>Enquire / Book</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
