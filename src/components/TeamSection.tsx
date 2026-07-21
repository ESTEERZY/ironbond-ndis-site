import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Emma Kavanagh',
    role: 'CEO & Founder',
    specialty: 'Disability Sector Leadership',
    bio: 'Emma founded Horizon in 2017 after 12 years working in disability support and advocacy. She holds a Master\'s in Social Work and is passionate about genuine person-centred practice.',
    image: '/images/director.png',
    initials: 'EK',
    color: 'bg-teal/15 text-teal',
  },
  {
    name: 'Brooke Simmons',
    role: 'Senior Support Coordinator',
    specialty: 'Complex NDIS Plans & SIL',
    bio: 'Brooke has 8 years of experience in support coordination across complex disability, mental health, and acquired brain injury. She\'s known for her calm, thorough approach to plan navigation.',
    image: null,
    initials: 'BS',
    color: 'bg-violet-100 text-violet-600',
  },
  {
    name: 'Dr. James Thornton',
    role: 'Lead Occupational Therapist',
    specialty: 'Functional Capacity Assessment',
    bio: 'James completed his Doctorate in OT at the University of Melbourne and specialises in functional capacity assessments, home modifications, and assistive technology recommendations.',
    image: null,
    initials: 'JT',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    name: 'Priya Patel',
    role: 'Behaviour Support Practitioner',
    specialty: 'Positive Behaviour Support Plans',
    bio: 'Priya is a registered Behaviour Support Practitioner with expertise in developing positive behaviour support plans for participants with complex needs across age groups.',
    image: null,
    initials: 'PP',
    color: 'bg-rose-100 text-rose-500',
  },
  {
    name: 'Marcus Williams',
    role: 'Physiotherapist',
    specialty: 'Mobility & Neurological Rehab',
    bio: 'Marcus specialises in NDIS physiotherapy for adults and children, including neurological rehabilitation, mobility assessments, and hydrotherapy. He works across clinic and community settings.',
    image: null,
    initials: 'MW',
    color: 'bg-emerald/10 text-emerald',
  },
  {
    name: 'Sarah Chen',
    role: 'Senior Support Worker',
    specialty: 'Community Access & Daily Living',
    bio: 'Sarah brings warmth and creativity to every shift. With a background in community services and 6 years of direct support work, she is a trusted team member and participant favourite.',
    image: null,
    initials: 'SC',
    color: 'bg-amber-100 text-amber-600',
  },
];

const TeamSection = () => (
  <section id="team" className="py-20 lg:py-28 bg-white">
    <div className="container mx-auto px-6 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <p className="text-teal text-sm font-bold tracking-widest uppercase mb-3">Meet Our Team</p>
        <h2 className="text-4xl lg:text-5xl font-black text-navy mb-4">
          Experienced people<br />who genuinely care.
        </h2>
        <p className="text-lg text-slate-600 max-w-xl mx-auto">
          Our team includes qualified support coordinators, allied health professionals, and support workers — all committed to participant wellbeing and genuine outcomes.
        </p>
      </motion.div>

      <motion.div
        initial="hidden" whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        transition={{ staggerChildren: 0.1 }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {teamMembers.map((member) => (
          <motion.div
            key={member.name}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55 } } }}
            className="bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden hover:border-teal/25 hover:shadow-lg hover:shadow-teal/5 transition-all duration-300 hover:-translate-y-1"
          >
            {/* Photo or avatar */}
            <div className="h-52 overflow-hidden bg-slate-100">
              {member.image ? (
                <img src={member.image} alt={`${member.name} — Horizon Support Services`}
                  className="w-full h-full object-cover object-top" loading="lazy" />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">
                  <div className={`w-20 h-20 ${member.color} rounded-full flex items-center justify-center text-2xl font-black`}>
                    {member.initials}
                  </div>
                </div>
              )}
            </div>
            {/* Content */}
            <div className="p-6">
              <h3 className="text-lg font-bold text-navy mb-0.5">{member.name}</h3>
              <p className={`text-xs font-bold uppercase tracking-widest mb-0.5 ${member.color.includes('teal') ? 'text-teal' : member.color.includes('violet') ? 'text-violet-600' : member.color.includes('blue') ? 'text-blue-600' : member.color.includes('rose') ? 'text-rose-500' : member.color.includes('emerald') ? 'text-emerald' : 'text-amber-600'}`}>{member.role}</p>
              <p className="text-xs text-slate-400 mb-3">{member.specialty}</p>
              <p className="text-sm text-slate-500 leading-relaxed">{member.bio}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mt-12"
      >
        <p className="text-slate-500 mb-4">Our team of 80+ support workers, coordinators, and allied health professionals are based across Melbourne and Victoria.</p>
        <a href="#contact"
          onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
          className="inline-flex items-center gap-2 text-teal font-bold text-sm hover:underline"
        >
          Join our team →
        </a>
      </motion.div>
    </div>
  </section>
);

export default TeamSection;
