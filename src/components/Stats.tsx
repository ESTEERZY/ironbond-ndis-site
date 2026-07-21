import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';

const CountUpStat = ({ stat }: { stat: { value: string; label: string } }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const numMatch = stat.value.match(/[\d.]+/);
  const number = numMatch ? parseFloat(numMatch[0]) : 0;
  const prefix = stat.value.substring(0, stat.value.indexOf(numMatch ? numMatch[0] : ''));
  const suffix = stat.value.substring(stat.value.indexOf(numMatch ? numMatch[0] : '') + (numMatch ? numMatch[0].length : 0));

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  
  useEffect(() => {
    if (isInView) {
      const controls = animate(count, number, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, count, number]);

  return (
    <motion.div
      ref={ref}
      variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } } }}
      className="text-center space-y-3 group"
    >
      <div className="text-5xl lg:text-6xl font-black tracking-tighter text-white group-hover:text-gold transition-colors duration-500 flex justify-center">
        {prefix}
        <motion.span>{rounded}</motion.span>
        {suffix}
      </div>
      <div className="w-8 h-px bg-gold mx-auto"></div>
      <div className="text-sm font-bold tracking-widest uppercase text-white/50 group-hover:text-gold/80 transition-colors duration-300">
        {stat.label}
      </div>
    </motion.div>
  );
};

const Stats = () => {
  const stats = [
    { value: '200+', label: 'Homes Completed' },
    { value: '15+', label: 'Years of Craft' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '$500M+', label: 'In Homes Delivered' },
  ];

  return (
    <section className="py-20 bg-charcoal border-y border-gold/10 relative z-20">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.12 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat) => (
            <CountUpStat key={stat.label} stat={stat} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
