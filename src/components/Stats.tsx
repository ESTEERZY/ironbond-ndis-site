import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Users, Clock, ShieldCheck, Star } from 'lucide-react';

const CountUpStat = ({ stat }: { stat: { value: string; label: string; icon: React.ElementType; suffix?: string } }) => {
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

  const Icon = stat.icon;

  return (
    <motion.div
      ref={ref}
      variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } } }}
      className="flex items-center gap-4 py-6 lg:py-0"
    >
      <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
        <Icon size={20} className="text-teal" />
      </div>
      <div>
        <div className="text-3xl lg:text-4xl font-black text-white flex items-baseline gap-0.5">
          {prefix}
          <motion.span>{rounded}</motion.span>
          {suffix}
        </div>
        <div className="text-sm font-medium text-white/60 mt-0.5">{stat.label}</div>
      </div>
    </motion.div>
  );
};

const Stats = () => {
  const stats = [
    { value: '150+', label: 'NDIS providers onboarded', icon: Users },
    { value: '100%', label: 'WCAG 2.2 AA compliant builds', icon: ShieldCheck },
    { value: '98%', label: 'Compliance audit pass rate', icon: Star },
    { value: '0', label: 'Compliance fines recorded', icon: Clock },
  ];

  return (
    <section className="bg-navy py-10 lg:py-14">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.12 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0 lg:divide-x divide-white/10"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="lg:px-8 first:pl-0 last:pr-0">
              <CountUpStat stat={stat} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
