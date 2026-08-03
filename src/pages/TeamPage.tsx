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
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80',
      bio: 'Dr. Sophie Mitchell founded Harbour Dental Studio with a vision to deliver exceptional, gentle dental care in Hobart. She has extensive clinical experience in general, preventative, and complex restorative dentistry. Sophie is passionate about creating a calm, supportive environment for patients of all ages.',
      interests: 'Restorative care, gentle dentistry & preventative oral health',
    },
    {
      name: 'Dr. James Carter',
      role: 'Dentist',
      qualifications: 'BDSc (Hons), Univ. of Melbourne',
      experience: '9+ Years Clinical Experience',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80',
      bio: 'Dr. James Carter brings a meticulous and friendly approach to practice dentistry. Having completed postgraduate training in clear aligner therapy and cosmetic restorations, James focuses on creating functional, natural-looking smile outcomes.',
      interests: 'Cosmetic dentistry, clear aligners & ceramic restorations',
    },
    {
      name: 'Dr. Elena Rostova',
      role: 'Visiting Specialist Periodontist',
      qualifications: 'DCD (Periodontics), Univ. of Queensland',
      experience: '11+ Years Specialist Care',
      image: 'https://images.unsplash.com/photo-1594824813571-2b253563605c?auto=format&fit=crop&w=800&q=80',
      bio: 'Dr. Elena Rostova consults at Harbour Dental Studio for complex periodontal cases and dental implant surgery. She works closely with our general dentists to preserve supporting bone and gum tissue.',
      interests: 'Periodontal therapy, bone grafting & implant surgery',
    },
    {
      name: 'Sarah Jenkins',
      role: 'Senior Dental Hygienist',
      qualifications: 'BOH, Univ. of Adelaide',
      experience: '8+ Years Clinical Hygiene',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=800&q=80',
      bio: 'Sarah Jenkins leads our preventative clean and oral health education programs. She is known for her gentle touch and tailored oral care advice for families and children.',
      interests: 'Preventative cleans, gum maintenance & child oral health',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-navy font-sans">
      <Header onOpenBooking={onOpenBooking} onOpenAIReceptionist={onOpenAIReceptionist} />

      <main className="pt-32 lg:pt-36 pb-20">
        {/* Team Hero */}
        <section className="bg-slate-50 py-16 border-b border-slate-200">
          <div className="container mx-auto px-6 lg:px-12 text-center max-w-3xl">
            <span className="text-teal font-bold text-xs uppercase tracking-widest bg-teal/10 border border-teal/20 px-3.5 py-1.5 rounded-full inline-block mb-4">
              Experienced Hobart Team
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-navy tracking-tight mb-4">
              Meet Our Dentists & Hygienists
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Our clinical team combines high professional standards with a warm, patient-focused approach to ensure your visit to Harbour Dental Studio is comfortable and thorough.
            </p>
          </div>
        </section>

        {/* Team Profiles Grid */}
        <section className="py-20 container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col md:flex-row"
              >
                <div className="md:w-5/12 relative h-80 md:h-auto bg-slate-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-teal text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                    {member.role}
                  </div>
                </div>

                <div className="md:w-7/12 p-8 flex flex-col justify-between space-y-4">
                  <div>
                    <h2 className="text-2xl font-black text-navy">{member.name}</h2>
                    <p className="text-xs font-bold text-teal mt-0.5">{member.role}</p>

                    <div className="space-y-1 my-3 text-xs text-slate-500 font-semibold border-y border-slate-100 py-2.5">
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

                  <div className="space-y-3 pt-2">
                    <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3 text-[11px] text-slate-700 font-medium flex items-start gap-2">
                      <Sparkles size={14} className="text-teal flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-navy block">Clinical focus:</span>
                        {member.interests}
                      </div>
                    </div>

                    <button
                      onClick={() => onOpenBooking(`Consultation with ${member.name}`)}
                      className="w-full bg-navy hover:bg-navy-mid text-white font-bold py-3 px-4 rounded-xl text-xs transition-colors flex items-center justify-center gap-2"
                    >
                      <Calendar size={14} className="text-teal" /> Book Appointment with {member.name.split(' ')[1]}
                    </button>
                  </div>
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
