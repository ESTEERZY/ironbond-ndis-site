import React from 'react';
import { Award, GraduationCap, Sparkles } from 'lucide-react';


export const TeamSection: React.FC = () => {
  const teamMembers = [
    {
      name: 'Dr. Sophie Mitchell',
      role: 'Principal Dentist',
      qualifications: 'BDS (Distinction), Univ. of Sydney',
      experience: '14+ Years Clinical Experience',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80',
      bio: 'Dr. Sophie Mitchell founded Harbour Dental Studio with a vision to deliver exceptional, gentle dental care in Hobart. She has extensive experience in general, preventive, and complex restorative dentistry. Sophie is passionate about helping nervous patients feel completely comfortable during their visits.',
      interests: 'Restorative care, gentle dentistry & preventative health',
    },
    {
      name: 'Dr. James Carter',
      role: 'Dentist',
      qualifications: 'BDSc (Hons), Univ. of Melbourne',
      experience: '9+ Years Clinical Experience',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80',
      bio: 'Dr. James Carter brings a warm and meticulous approach to clinical dentistry. After practicing in Melbourne, James moved to Hobart to join Harbour Dental Studio. He focuses on cosmetic treatments, clear aligner therapy, and crown restorations with a commitment to long-term patient comfort.',
      interests: 'Cosmetic dentistry, clear aligners & smile design',
    },
    {
      name: 'Sarah Jenkins',
      role: 'Senior Dental Hygienist',
      qualifications: 'BOH, Univ. of Adelaide',
      experience: '8+ Years Clinical Hygiene',
      image: 'https://images.unsplash.com/photo-1594824813571-2b253563605c?auto=format&fit=crop&w=600&q=80',
      bio: 'Sarah Jenkins leads our dental hygiene and preventative clean programs. She works closely with patients to maintain healthy gums and teeth through thorough cleans and practical oral hygiene guidance tailored for adults and children alike.',
      interests: 'Preventative care, gum health & children’s hygiene',
    },
  ];

  return (
    <section id="team" className="py-20 bg-slate-50 relative">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-teal font-bold text-xs uppercase tracking-widest bg-teal/10 border border-teal/20 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Our Dental Team
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-navy tracking-tight mb-4">
            Meet the team dedicated to your smile.
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Our experienced dentists and clinical team combine professional expertise with a friendly, welcoming approach to ensure you receive the highest standard of dental care.
          </p>
        </div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-teal/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Photo Header */}
                <div className="relative h-72 overflow-hidden bg-slate-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent"></div>
                  
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="bg-teal text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full inline-block mb-1">
                      {member.role}
                    </span>
                    <h3 className="text-xl font-black">{member.name}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="space-y-1.5 border-b border-slate-100 pb-3 text-xs text-slate-500 font-semibold">
                    <p className="flex items-center gap-1.5">
                      <GraduationCap size={14} className="text-teal" /> {member.qualifications}
                    </p>
                    <p className="flex items-center gap-1.5">
                      <Award size={14} className="text-teal" /> {member.experience}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>

              {/* Bottom Special Interest Pill */}
              <div className="px-6 pb-6 pt-2">
                <div className="bg-teal/5 border border-teal/20 rounded-xl p-3 text-[11px] text-slate-700 font-medium flex items-start gap-2">
                  <Sparkles size={14} className="text-teal flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-navy block">Clinical focus:</span>
                    {member.interests}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TeamSection;
