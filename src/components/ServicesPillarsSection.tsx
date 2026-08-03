import React from 'react';
import { Link } from 'react-router-dom';

interface ServicesPillarsProps {
  onOpenBooking?: (serviceName?: string) => void;
}

export const ServicesPillarsSection: React.FC<ServicesPillarsProps> = () => {
  const pillars = [
    {
      title: 'General dentistry',
      subtitle: 'General Dentistry reimagined: Your Wellbeing and Comfort with Top-Level Dental Care.',
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80',
      bgColor: 'bg-sky-900/60',
      link: '/treatments/general-dentistry',
    },
    {
      title: 'Aesthetic dentistry',
      subtitle: 'Unleash your Authentic Smile: Experience Next-Level Cosmetic Dentistry at its Finest.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80',
      bgColor: 'bg-amber-950/60',
      link: '/treatments/cosmetic-dentistry',
    },
    {
      title: 'Dental Implants',
      subtitle: 'Reclaim Confidence: Cutting edge Dental Implants to regain lost Smiles.',
      image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1000&q=80',
      bgColor: 'bg-emerald-950/60',
      link: '/treatments/dental-implants',
    },
  ];

  return (
    <section className="bg-ivory border-y border-charcoal/10 font-sans">
      
      {/* Top Header */}
      <div className="py-20 container mx-auto px-6 lg:px-12 text-center max-w-4xl space-y-4">
        <h2 className="font-serif text-3xl sm:text-5xl font-normal text-charcoal tracking-tight">
          Comprehensive Dental Care in Hobart
        </h2>
        <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed font-sans max-w-3xl mx-auto">
          From our excellence in cosmetic dentistry to comprehensive <strong className="text-forest font-bold">general dentistry</strong>, we provide a range of treatments under one roof for your convenience. Our experienced team is dedicated to ensuring your oral health is in optimal condition. During your visit, we create personalised treatment plans tailored to your unique needs.
        </p>
      </div>

      {/* 3-Column Pillars Banner */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        {pillars.map((pillar, index) => (
          <Link
            key={index}
            to={pillar.link}
            className="relative aspect-[3/4] sm:aspect-[4/5] overflow-hidden group cursor-pointer block"
          >
            {/* Background Image */}
            <img
              src={pillar.image}
              alt={pillar.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
            />

            {/* Tint Overlay */}
            <div className={`absolute inset-0 ${pillar.bgColor} backdrop-blur-[0.5px] group-hover:opacity-80 transition-opacity`}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-transparent to-transparent"></div>

            {/* Card Content Overlay */}
            <div className="absolute inset-0 p-8 sm:p-10 flex flex-col justify-center items-center text-center text-white space-y-6">
              
              {/* Script Title */}
              <div className="font-script text-4xl sm:text-5xl lg:text-6xl text-white font-normal tracking-wide drop-shadow-md">
                {pillar.title}
              </div>

              {/* Subtitle */}
              <p className="text-xs sm:text-sm font-sans text-slate-100 leading-relaxed max-w-xs font-medium drop-shadow">
                {pillar.subtitle}
              </p>

            </div>
          </Link>
        ))}
      </div>

    </section>
  );
};

export default ServicesPillarsSection;
