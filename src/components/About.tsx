import { motion } from 'framer-motion';
import { ShieldCheck, Heart, Users, Award } from 'lucide-react';

const About = () => {
  const values = [
    { icon: Heart, label: 'Dignity & Respect', desc: 'Every participant is treated with unconditional respect — their voice matters in every decision about their support.', color: 'text-rose-500' },
    { icon: ShieldCheck, label: 'Safety First', desc: 'Robust safeguarding, police-checked workers, and ongoing training protect every person in our care.', color: 'text-emerald' },
    { icon: Users, label: 'Community & Inclusion', desc: 'We believe disability inclusion strengthens communities. We actively support participation in everyday community life.', color: 'text-teal' },
    { icon: Award, label: 'Continuous Improvement', desc: 'We collect participant feedback, audit our own practices, and constantly seek to raise the standard of care we provide.', color: 'text-violet-500' },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left: Image + floating badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-navy/10 border border-slate-100 aspect-[4/5]">
              <img src="/images/occupational-therapy.png"
                alt="Horizon Support Services — allied health practitioner working with a participant"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent"></div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl shadow-navy/10 border border-slate-100 p-5 flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald/10 rounded-xl flex items-center justify-center">
                <ShieldCheck size={20} className="text-emerald" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">NDIS Quality Standards</p>
                <p className="text-sm font-black text-navy">Registered Provider</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Story + values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col gap-6"
          >
            <p className="text-teal text-sm font-bold tracking-widest uppercase">About Horizon Support Services</p>

            <h2 className="text-4xl lg:text-5xl font-black text-navy leading-tight">
              Built on a belief<br />that everyone deserves<br />a good life.
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed">
              Horizon Support Services was founded in Melbourne in 2017 by a team of disability support workers and allied health professionals who saw a clear gap: participants were receiving supports that were inflexible, impersonal, and built around provider convenience — not participant goals.
            </p>

            <p className="text-base text-slate-500 leading-relaxed">
              We set out to build a different kind of organisation — one that genuinely listens to participants and families, invests in the quality and wellbeing of its support workers, and builds lasting relationships rather than filling rosters.
            </p>

            <p className="text-base text-slate-500 leading-relaxed">
              Today, we support over 600 participants across Melbourne and Victoria, with a team of more than 80 support workers, coordinators, and qualified allied health professionals. Every person on our team shares the same belief: the participant comes first.
            </p>

            {/* Values grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {values.map((v) => {
                const Icon = v.icon;
                return (
                  <div key={v.label} className="bg-slate-50 rounded-xl border border-slate-100 p-4">
                    <Icon size={18} className={`${v.color} mb-2`} />
                    <h4 className="text-sm font-bold text-navy mb-1">{v.label}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{v.desc}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
