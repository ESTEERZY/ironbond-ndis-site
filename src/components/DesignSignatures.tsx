import { motion } from 'framer-motion';

const DesignSignatures = () => {
  const signatures = [
    {
      image: '/case-studies/industrial-loft/image1.png',
      title: 'WCAG 2.2 AA Accessibility',
      description: 'Screen-reader ready. Full keyboard navigation. Contrast ratios that exceed NDIS digital inclusion standards. Every participant can access your platform with confidence.',
    },
    {
      image: '/case-studies/suburban-elegance/image1.png',
      title: 'NDIS Registration Signals',
      description: 'Trust badges, PRODA-ready data flows, APPs-compliant privacy policies, and registration-grade security architecture — built in from day one.',
    },
    {
      image: '/images/luxury-kitchen.png',
      title: 'Automated Participant Intake',
      description: 'Smart referral forms, digital consent management, support need capture, and automated plan matching — reducing admin overhead by up to 70%.',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } }
  };

  return (
    <section id="features" className="py-24 bg-charcoal relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 space-y-6"
        >
          <h2 className="text-5xl lg:text-6xl font-black tracking-tighter text-white leading-tight max-w-3xl mx-auto">
            Platform <span className="text-gold">Pillars</span>
          </h2>

          <p className="text-xl text-white/60 font-medium leading-relaxed max-w-2xl mx-auto tracking-tight">
            Three non-negotiable foundations every NDIS provider needs in their digital infrastructure — and that we engineer into every platform we build.
          </p>
        </motion.div>

        {/* 3-Column Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid md:grid-cols-3 gap-8"
        >
          {signatures.map((item) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              className="group flex flex-col items-center text-center p-8 bg-white/5 border border-white/10 rounded-[2px] hover:-translate-y-2 hover:border-gold hover:shadow-[0_8px_40px_rgba(197,160,89,0.15)] transition-all duration-500"
            >
              <div className="w-full aspect-video mb-8 overflow-hidden rounded-[2px] border border-charcoal/10 group-hover:border-gold/50 transition-colors duration-500">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-white mb-4 group-hover:text-gold transition-colors duration-500">{item.title}</h3>
              <p className="text-base text-white/60 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DesignSignatures;
