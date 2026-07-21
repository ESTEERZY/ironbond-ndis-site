import { motion } from 'framer-motion';
import { Search, Layers, Code2, ShieldCheck, Rocket, HeadphonesIcon } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Discovery',
    description: 'We deep-dive into your organisation — provider type, participant volume, current systems, compliance gaps, and operational pain points.',
    color: 'bg-teal/10 text-teal border-teal/20',
  },
  {
    number: '02',
    icon: Layers,
    title: 'Prototype',
    description: 'A clickable prototype of your platform is delivered within two weeks for stakeholder review — your team sees and approves the design before a single line of code is written.',
    color: 'bg-violet-50 text-violet-500 border-violet-100',
  },
  {
    number: '03',
    icon: Code2,
    title: 'Build',
    description: 'Our engineers build your WCAG-compliant platform with all integrations, participant intake flows, automated workflows, and NDIS-specific data architecture.',
    color: 'bg-blue-50 text-blue-500 border-blue-100',
  },
  {
    number: '04',
    icon: ShieldCheck,
    title: 'Compliance Review',
    description: 'Full audit against WCAG 2.2 AA, NDIS Practice Standards, Australian Privacy Principles, and your specific registration requirements. Any gaps resolved before launch.',
    color: 'bg-emerald/10 text-emerald border-emerald/20',
  },
  {
    number: '05',
    icon: Rocket,
    title: 'Launch',
    description: 'Your platform goes live with a coordinated launch plan — staff training, participant communications, and a monitored go-live period with your dedicated specialist.',
    color: 'bg-amber-50 text-amber-500 border-amber-100',
  },
  {
    number: '06',
    icon: HeadphonesIcon,
    title: 'Ongoing Support',
    description: 'Continuous monitoring, quarterly compliance reviews, NDIS rule updates applied automatically, and a direct support line to your NDIS digital specialist.',
    color: 'bg-teal/10 text-teal border-teal/20',
  },
];

const ProcessBreakdown = () => {
  return (
    <section id="process" className="py-20 lg:py-28 bg-slate-50">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-teal text-sm font-bold tracking-widest uppercase mb-3">Our process</p>
          <h2 className="text-4xl lg:text-5xl font-black text-navy mb-4">
            How we deliver<br />your platform.
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A proven six-stage process designed to minimise disruption and maximise compliance confidence — from your first conversation to long-term support.
          </p>
        </motion.div>

        {/* Desktop: two rows of 3 with connecting lines */}
        <div className="hidden lg:block">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            transition={{ staggerChildren: 0.12 }}
            className="grid grid-cols-3 gap-6 relative"
          >
            {/* Row 1 connector line */}
            <div className="absolute top-6 left-[16.67%] right-[16.67%] h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent pointer-events-none"></div>

            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
                  className="bg-white rounded-2xl p-7 border border-slate-100 hover:border-teal/25 hover:shadow-lg hover:shadow-teal/5 transition-all duration-300 hover:-translate-y-1 relative"
                >
                  {/* Large background step number */}
                  <div className="text-7xl font-black text-slate-50 absolute top-4 right-6 leading-none select-none">
                    {step.number}
                  </div>
                  {/* Icon */}
                  <div className={`w-12 h-12 ${step.color} border rounded-xl flex items-center justify-center mb-5 relative z-10`}>
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-2">{step.title}</h3>
                  <p className="text-slate-500 leading-relaxed text-sm">{step.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Mobile: vertical timeline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="lg:hidden flex flex-col gap-4"
        >
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5 } } }}
                className="bg-white rounded-2xl p-6 border border-slate-100 relative overflow-hidden"
              >
                <div className="text-6xl font-black text-slate-50 absolute top-3 right-5 leading-none select-none">{step.number}</div>
                <div className={`w-10 h-10 ${step.color} border rounded-xl flex items-center justify-center mb-4`}>
                  <Icon size={18} />
                </div>
                <h3 className="text-base font-bold text-navy mb-2">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessBreakdown;
