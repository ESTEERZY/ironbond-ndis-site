import { motion } from 'framer-motion';
import { Heart, Shield, Users, Clock, Star, Globe } from 'lucide-react';

const features = [
  {
    icon: Heart,
    color: 'bg-rose-50 text-rose-500 border-rose-100',
    title: 'Genuinely Person-Centred',
    desc: 'Your goals, your choices. Every support plan is built around what matters most to you — not what\'s easiest to deliver. We ask, we listen, and we follow your lead.',
  },
  {
    icon: Shield,
    color: 'bg-emerald/10 text-emerald border-emerald/20',
    title: 'Registered & Accountable',
    desc: 'Horizon is a registered NDIS provider operating under the NDIS Practice Standards and Quality and Safeguards Framework. Our workers are trained, screened, and supported.',
  },
  {
    icon: Users,
    color: 'bg-violet-50 text-violet-500 border-violet-100',
    title: 'Multicultural Team',
    desc: 'Our team reflects the diversity of the communities we serve — with staff who speak a range of languages and understand diverse cultural backgrounds and needs.',
  },
  {
    icon: Clock,
    color: 'bg-teal/10 text-teal border-teal/20',
    title: '24/7 Support Available',
    desc: 'For participants in SIL and those with high support needs, we provide around-the-clock staffing. Our after-hours line is available to all participants and families.',
  },
  {
    icon: Star,
    color: 'bg-amber-50 text-amber-500 border-amber-100',
    title: 'Allied Health On Your Team',
    desc: 'Our in-house OTs, physiotherapists, speech pathologists, and behaviour support practitioners work alongside your support team for coordinated, holistic care.',
  },
  {
    icon: Globe,
    color: 'bg-blue-50 text-blue-500 border-blue-100',
    title: 'Victoria-Wide Coverage',
    desc: 'From inner Melbourne to regional Victoria, our support network spans the state — with local knowledge and genuine relationships in every area we serve.',
  },
];

const DesignSignatures = () => (
  <section id="why-us" className="py-20 lg:py-28 bg-slate-50">
    <div className="container mx-auto px-6 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-teal text-sm font-bold tracking-widest uppercase mb-3">Why families choose Horizon</p>
        <h2 className="text-4xl lg:text-5xl font-black text-navy mb-4">
          A provider that puts<br />participants first. Always.
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          There are many NDIS providers in Victoria. Here is why participants and families choose Horizon — and why they stay.
        </p>
      </motion.div>

      <motion.div
        initial="hidden" whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        transition={{ staggerChildren: 0.08 }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {features.map((f) => {
          const Icon = f.icon;
          return (
            <motion.div
              key={f.title}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
              className="bg-white rounded-2xl border border-slate-100 p-7 hover:border-teal/25 hover:shadow-lg hover:shadow-teal/5 transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-12 h-12 ${f.color} border rounded-xl flex items-center justify-center mb-5`}>
                <Icon size={22} />
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">{f.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  </section>
);

export default DesignSignatures;
