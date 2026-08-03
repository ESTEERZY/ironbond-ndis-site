import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MobileStickyBar from '../components/MobileStickyBar';
import { Award, GraduationCap, Sparkles, Calendar } from 'lucide-react';


interface TeamPageProps {
  onOpenBooking: (serviceName?: string) => void;
  onOpenAIReceptionist: () => void;
}

export const TeamPage: React.FC<TeamPageProps> = ({
  onOpenBooking,
  onOpenAIReceptionist,
}) => {
  const teamMembers = [
    {
      name: 'Dr. Sophie Mitchell',
      role: 'Principal Dentist',
      qualifications: 'BDS (Distinction), Univ. of Sydney',
      experience: '14+ Years Clinical Experience',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1000&q=80',
      bio: 'Dr. Sophie Mitchell established Harbour Dental Studio in Hobart with a vision for gentle, patient-focused dentistry. She brings extensive experience in complex restorative care and cosmetic smile design.',
      focus: 'Preventative care, restorative dentistry, gentle clinical approach.',
    },
    {
      name: 'Dr. James Carter',
      role: 'Dentist',
      qualifications: 'BDSc (Hons), Univ. of Melbourne',
      experience: '9+ Years Clinical Experience',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1000&q=80',
      bio: 'Dr. James Carter is passionate about modern cosmetic restorations and clear aligner orthodontics. He prioritises clear communication to ensure every patient feels comfortable throughout their care.',
      focus: 'Cosmetic dentistry, clear aligners & ceramic restorations.',
    },
    {
      name: 'Emma Wilson',
      role: 'Senior Dental Hygienist',
      qualifications: 'BOH, Univ. of Queensland',
      experience: '11+ Years Dental Hygiene Care',
      image: 'https://images.unsplash.com/photo-1594824813570-089270a3772c?auto=format&fit=crop&w=1000&q=80',
      bio: 'Emma works closely with our dentists to deliver thorough preventative cleans, periodontal maintenance, and gentle oral hygiene instruction for Hobart families.',
      focus: 'Preventative cleans, gum health maintenance & teeth whitening.',
    },
  ];

  return (
    <div className="min-h-screen bg-ivory text-charcoal font-sans">
      <Header onOpenBooking={onOpenBooking} onOpenAIReceptionist={onOpenAIReceptionist} />

      <main className="pt-32 lg:pt-40 pb-24">
        
        {/* Page Hero */}
        <section className="py-12 border-b border-charcoal/10 bg-white">
          <div className="container mx-auto px-6 lg:px-12 text-center max-w-3xl">
            <span className="text-[11px] font-sans font-bold uppercase tracking-[0.25em] text-forest block mb-3">
              MEET OUR HOBART CLINICIANS
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-normal text-charcoal">
              Meet Your Dental Team
            </h1>
            <p className="text-sm text-charcoal-muted mt-2 leading-relaxed font-sans max-w-xl mx-auto">
              Our experienced dentists and hygienists are dedicated to providing calm, personalised, and thorough dental care.
            </p>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-16 container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white border border-charcoal/10 shadow-sm overflow-hidden flex flex-col justify-between group rounded-2xl"
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

                  <div className="p-6 space-y-3">
                    <div>
                      <h2 className="font-serif text-2xl text-charcoal">{member.name}</h2>
                      <p className="text-xs font-bold text-forest uppercase tracking-wider mt-0.5">{member.role}</p>
                    </div>

                    <div className="space-y-1 border-y border-charcoal/10 py-2.5 text-xs text-charcoal-muted font-medium">
                      <p className="flex items-center gap-2">
                        <GraduationCap size={13} className="text-forest" /> {member.qualifications}
                      </p>
                      <p className="flex items-center gap-2">
                        <Award size={13} className="text-forest" /> {member.experience}
                      </p>
                    </div>

                    <p className="text-xs text-charcoal-muted leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 space-y-3">
                  <div className="bg-ivory p-3 text-[11px] text-charcoal font-medium flex items-start gap-2 border border-charcoal/10 rounded-xl">
                    <Sparkles size={13} className="text-forest flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-charcoal block">Focus:</span>
                      {member.focus}
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenBooking(`Consultation with ${member.name}`)}
                    className="w-full bg-forest hover:bg-forest-light text-white font-sans text-xs font-bold uppercase tracking-widest py-3 transition-colors flex items-center justify-center gap-2 rounded-xl"
                  >
                    <Calendar size={14} /> Book Appointment
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      <Footer onOpenBooking={onOpenBooking} onOpenAIReceptionist={onOpenAIReceptionist} />
      <MobileStickyBar onOpenBooking={() => onOpenBooking()} onOpenAIReceptionist={onOpenAIReceptionist} />
    </div>
  );
};

export default TeamPage;
