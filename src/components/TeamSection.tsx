import React from 'react';
import { Award, GraduationCap, Sparkles, Calendar, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface TeamSectionProps {
  onOpenBooking?: (serviceName?: string) => void;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ onOpenBooking }) => {
  const teamMembers = [
    {
      name: 'Dr. Sophie Mitchell',
      role: 'Principal Dentist',
      qualifications: 'BDS (Distinction), Univ. of Sydney',
      experience: '14+ Years Clinical Care',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1000&q=80',
      bio: 'Dr. Sophie Mitchell founded Harbour Dental Studio to deliver exceptional, gentle dental care in Hobart. She has extensive experience in general, preventive, and complex restorative dentistry.',
      interests: 'Restorative care, gentle dentistry & preventative health',
    },
    {
      name: 'Dr. James Carter',
      role: 'Dentist',
      qualifications: 'BDSc (Hons), Univ. of Melbourne',
      experience: '9+ Years Clinical Care',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1000&q=80',
      bio: 'Dr. James Carter brings a warm and meticulous approach to clinical dentistry. Having completed postgraduate training in clear aligner therapy and cosmetic restorations, James focuses on functional outcomes.',
      interests: 'Cosmetic dentistry, clear aligners & ceramic restorations',
    },
    {
      name: 'Emma Wilson',
      role: 'Senior Dental Hygienist',
      qualifications: 'BOH, Univ. of Queensland',
      experience: '11+ Years Dental Hygiene Care',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=1000&q=80',
      bio: 'Emma works closely with our dentists to deliver thorough preventative cleans, periodontal maintenance, and gentle oral hygiene instruction for Hobart families.',
      interests: 'Preventative cleans, gum health maintenance & teeth whitening',
    },
  ];

  return (
    <section id="team" className="py-24 bg-white border-b border-charcoal/10 font-sans">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-charcoal/10 pb-8">
          <div>
            <span className="text-[11px] font-sans font-bold uppercase tracking-[0.25em] text-forest block mb-3">
              08 — CLINICAL TEAM
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-charcoal">
              Meet your dental team.
            </h2>
          </div>
          <Link
            to="/team"
            className="text-xs font-sans font-bold uppercase tracking-widest text-charcoal hover:text-forest mt-4 md:mt-0 flex items-center gap-2"
          >
            <span>MEET THE TEAM →</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-ivory border border-charcoal/10 shadow-sm overflow-hidden flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-[4/5] overflow-hidden bg-sand-light">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-ivory/90 backdrop-blur-md border border-charcoal/10 text-charcoal text-[10px] font-bold uppercase tracking-widest px-3 py-1">
                    {member.role}
                  </div>
                </div>

                <div className="p-8 space-y-4">
                  <div>
                    <h3 className="font-serif text-3xl text-charcoal">{member.name}</h3>
                    <p className="text-xs font-bold text-forest uppercase tracking-wider mt-1">{member.role}</p>
                  </div>

                  <div className="space-y-1.5 border-y border-charcoal/10 py-3 text-xs text-charcoal-muted font-medium">
                    <p className="flex items-center gap-2">
                      <GraduationCap size={14} className="text-forest" /> {member.qualifications}
                    </p>
                    <p className="flex items-center gap-2">
                      <Award size={14} className="text-forest" /> {member.experience}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>

              <div className="px-8 pb-8 pt-0 space-y-3">
                <div className="bg-white border border-charcoal/10 p-3 text-[11px] text-charcoal font-medium flex items-start gap-2">
                  <Sparkles size={14} className="text-forest flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-charcoal block">Clinical focus:</span>
                    {member.interests}
                  </div>
                </div>

                {onOpenBooking ? (
                  <button
                    onClick={() => onOpenBooking(`Consultation with ${member.name}`)}
                    className="w-full bg-forest hover:bg-forest-light text-white font-sans text-xs font-bold uppercase tracking-widest py-3.5 transition-colors flex items-center justify-center gap-2"
                  >
                    <Calendar size={15} /> Book Appointment with {member.name.split(' ')[1]}
                  </button>
                ) : (
                  <Link
                    to="/book"
                    className="w-full bg-forest hover:bg-forest-light text-white font-sans text-xs font-bold uppercase tracking-widest py-3.5 transition-colors flex items-center justify-center gap-2"
                  >
                    <Calendar size={15} /> Book Appointment with {member.name.split(' ')[1]}
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TeamSection;
