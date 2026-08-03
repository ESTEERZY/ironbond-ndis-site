import React from 'react';
import { Star, Quote, MapPin, CheckCircle } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const reviews = [
    {
      name: 'Mark T.',
      suburb: 'Sandy Bay, Hobart',
      rating: 5,
      service: 'Check-up & Clean',
      text: 'Dr Sophie and the team made my check-up completely stress-free. The clinic is bright, modern and very welcoming. Really appreciated the thorough clean and clear advice on keeping my gums healthy.',
    },
    {
      name: 'Rachel S.',
      suburb: 'Hobart CBD',
      rating: 5,
      service: 'Emergency Dental',
      text: 'Had a sudden toothache on Thursday morning and they managed to fit me in that afternoon. The dentist explained what was causing the pain and treated it gently. Very grateful for the fast service.',
    },
    {
      name: 'David L.',
      suburb: 'Battery Point',
      rating: 5,
      service: "Children's Dentistry",
      text: 'Brought my two young kids in for their routine cleans. The clinic staff were so patient with them, taking time to show them the equipment before starting. It made the whole visit effortless.',
    },
    {
      name: 'Emma W.',
      suburb: 'West Hobart',
      rating: 5,
      service: 'Clear Aligners Consultation',
      text: 'Visited for a consultation regarding clear aligner options. Dr James was very thorough, explained the expected timeline and cost upfront without any pressure. Great modern practice.',
    },
  ];

  return (
    <section id="reviews" className="py-20 bg-white relative">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-teal font-bold text-xs uppercase tracking-widest bg-teal/10 border border-teal/20 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Patient Feedback
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-navy tracking-tight mb-4">
            What our Hobart patients say.
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            We take pride in providing gentle, dependable dental care for our local community.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <span className="bg-teal/10 text-teal text-[11px] font-bold px-2.5 py-1 rounded-full border border-teal/20">
                    {review.service}
                  </span>
                </div>

                <Quote size={24} className="text-teal/30 mb-2" />

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed italic mb-6">
                  "{review.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs">
                <div>
                  <h4 className="font-bold text-navy text-sm">{review.name}</h4>
                  <p className="text-slate-500 font-medium flex items-center gap-1 mt-0.5">
                    <MapPin size={12} className="text-teal" /> {review.suburb}
                  </p>
                </div>
                <span className="flex items-center gap-1 text-[11px] font-bold text-emerald">
                  <CheckCircle size={12} /> Verified Patient
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
