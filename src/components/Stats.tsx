import { motion } from 'framer-motion';
import { ShieldCheck, Clock, Heart, Star, Users, Award } from 'lucide-react';

const badges = [
  { icon: ShieldCheck, label: 'Registered NDIS Provider' },
  { icon: Users, label: 'Experienced Support Workers' },
  { icon: Heart, label: 'Person-Centred Care' },
  { icon: Clock, label: '24/7 Support Available' },
  { icon: Award, label: 'Qualified Allied Health Team' },
  { icon: Star, label: 'Flexible Support Plans' },
];

const Stats = () => (
  <section className="bg-navy py-10 overflow-hidden">
    <div className="container mx-auto px-6 lg:px-12">
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true }}
        transition={{ staggerChildren: 0.07 }}
        className="flex flex-wrap justify-center lg:justify-between items-center gap-y-3 gap-x-2"
      >
        {badges.map(({ icon: Icon, label }) => (
          <motion.div
            key={label}
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
            className="flex items-center gap-2.5 px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-teal/30 transition-all duration-300"
          >
            <Icon size={14} className="text-teal flex-shrink-0" />
            <span className="text-white text-xs font-semibold whitespace-nowrap">✓ {label}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Stats;
