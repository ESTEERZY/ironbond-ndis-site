import React from 'react';
import { 
  FileText, 
  Sparkles, 
  Users, 
  MessageSquare, 
  Clock, 
  Heart,
  Check 
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const benefits = [
    {
      title: 'Personalised Treatment Plans',
      description: 'We take the time to understand your individual dental health goals and create treatment options tailored to your needs and budget.',
      icon: FileText,
    },
    {
      title: 'Modern Facilities',
      description: 'Our Hobart clinic is equipped with modern digital imaging and comfortable treatment suites to ensure accurate diagnostics and efficient care.',
      icon: Sparkles,
    },
    {
      title: 'Friendly Experienced Team',
      description: 'Our dentists and clinical staff bring years of gentle, professional experience and are dedicated to putting you at ease.',
      icon: Users,
    },
    {
      title: 'Clear Communication',
      description: 'We discuss every treatment step and cost upfront so you can make informed decisions about your oral health with confidence.',
      icon: MessageSquare,
    },
    {
      title: 'Convenient Appointments',
      description: 'We offer early morning and Saturday appointment slots to make fit dental care easily into your busy family or work routine.',
      icon: Clock,
    },
    {
      title: 'Comfortable Experience',
      description: 'From a calm waiting space to gentle clinical techniques, we aim to make every visit as relaxed and comfortable as possible.',
      icon: Heart,
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Title */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-teal font-bold text-xs uppercase tracking-widest bg-teal/10 border border-teal/20 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Why Patients Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-navy tracking-tight mb-4">
            Quality dental care centered around your comfort.
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            At Harbour Dental Studio, we combine clinical expertise with genuine patient care to deliver a positive experience at every visit.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComp = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-teal/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-teal/10 border border-teal/20 flex items-center justify-center text-teal mb-6">
                    <IconComp size={22} />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">{benefit.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-teal">
                  <Check size={14} />
                  <span>Harbour Dental Guarantee</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
