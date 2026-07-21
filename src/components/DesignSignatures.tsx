import { motion } from 'framer-motion';

const DesignSignatures = () => {
  const signatures = [
    {
      image: '/case-studies/industrial-loft/image1.png',
      title: 'Modern Architecture',
      description: 'Award-winning designs. Maximized natural light. Open living spaces.',
    },
    {
      image: '/case-studies/suburban-elegance/image1.png',
      title: 'Clean Timber Finishes',
      description: 'Premium timber finishes. Sustainably sourced. Added warmth and character.',
    },
    {
      image: '/images/luxury-kitchen.png',
      title: 'Luxury Kitchens',
      description: 'State-of-the-art culinary spaces. Stone benchtops. Integrated appliances.',
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
            Design <span className="text-gold">Signatures</span>
          </h2>

          <p className="text-xl text-white/60 font-medium leading-relaxed max-w-2xl mx-auto tracking-tight">
            We craft high-end, custom living spaces. Designed to elevate your lifestyle.
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
