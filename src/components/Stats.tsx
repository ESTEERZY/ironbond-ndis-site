import { motion } from 'framer-motion';
import { ShieldCheck, Smartphone, Server, Accessibility, FileCheck, Zap } from 'lucide-react';

const badges = [
  { icon: ShieldCheck, label: 'WCAG 2.2 AA Compliant' },
  { icon: FileCheck, label: 'Registration Ready' },
  { icon: Smartphone, label: 'Mobile Optimised' },
  { icon: Server, label: 'Secure Australian Hosting' },
  { icon: Accessibility, label: 'Accessible Forms' },
  { icon: Zap, label: 'Fast Performance' },
];

const Stats = () => {
  return (
    <section className="bg-navy py-10 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.08 }}
          className="flex flex-wrap justify-center lg:justify-between items-center gap-y-4 gap-x-2"
        >
          {badges.map(({ icon: Icon, label }) => (
            <motion.div
              key={label}
              variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
              className="flex items-center gap-2.5 px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-teal/30 transition-all duration-300"
            >
              <Icon size={15} className="text-teal flex-shrink-0" />
              <span className="text-white text-xs font-semibold whitespace-nowrap">✓ {label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
