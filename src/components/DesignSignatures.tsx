import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Lock, Headphones } from 'lucide-react';

const DesignSignatures = () => {
  const features = [
    {
      icon: ShieldCheck,
      color: 'bg-emerald/10 text-emerald',
      title: 'WCAG 2.2 AA Accessibility',
      description: 'Every platform we build is screen-reader ready, fully keyboard navigable, and tested against WCAG 2.2 AA — so every participant can access your services with confidence.',
    },
    {
      icon: Lock,
      color: 'bg-teal/10 text-teal',
      title: 'Registration-Ready Infrastructure',
      description: 'Trust badges, PRODA-ready data flows, APPs-compliant privacy policies, and Practice Standards-aligned security architecture — built into every build from day one.',
    },
    {
      icon: Zap,
      color: 'bg-amber-50 text-amber-500',
      title: 'Automated Participant Intake',
      description: 'Smart referral forms, digital consent management, support need capture, and automated plan matching reduce admin overhead by up to 70% across your team.',
    },
    {
      icon: Headphones,
      color: 'bg-purple-50 text-purple-500',
      title: 'Dedicated NDIS Support Team',
      description: 'Our NDIS sector specialists provide ongoing compliance monitoring, platform updates, and direct support — so you\'re never navigating regulatory changes alone.',
    },
  ];

  return (
    <section id="features" className="py-20 lg:py-28 bg-slate-50">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-teal text-sm font-bold tracking-widest uppercase mb-3">Why choose Meridian Digital?</p>
          <h2 className="text-4xl lg:text-5xl font-black text-navy mb-4">
            Built for the sector.<br />Compliant by design.
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We give NDIS providers the freedom to focus on participant outcomes, with the safeguards and compliance reliability of a fully registered digital platform.
          </p>
        </motion.div>

        {/* 4-feature grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ staggerChildren: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
                className="bg-white rounded-2xl p-7 border border-slate-100 hover:border-teal/30 hover:shadow-lg hover:shadow-teal/5 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center mb-5`}>
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-navy mb-3 group-hover:text-teal transition-colors duration-300">{feature.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default DesignSignatures;
