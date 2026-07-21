import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Since joining Horizon, our daughter Mia has come out of her shell in ways we never imagined. Her support coordinator Brooke genuinely knows her goals, advocates for her at plan reviews, and is always available when we need guidance. We finally feel like we have the right team beside us.",
    name: "Christine & David W.",
    location: "Knox, VIC",
    service: "Support Coordination & Core Supports",
    initials: "CW",
    color: "bg-violet-100 text-violet-600",
  },
  {
    quote: "My support worker, Marcus, helped me get back into the community after years at home. I'm now attending a cooking class every Tuesday and started volunteering at the local animal shelter. I didn't think any of that was possible. Horizon actually listened to what I wanted — not just what they thought I needed.",
    name: "Thomas R.",
    location: "Richmond, VIC",
    service: "Community Participation",
    initials: "TR",
    color: "bg-teal/15 text-teal",
  },
  {
    quote: "After years of navigating the NDIS system on our own, Horizon made everything manageable. They explained our son's plan clearly, found a SIL home that actually suited his personality, and check in with us regularly. The whole team feels like family. We can't recommend them enough.",
    name: "Linda & James R.",
    location: "Doncaster, VIC",
    service: "Supported Independent Living",
    initials: "LR",
    color: "bg-emerald/10 text-emerald",
  },
];

const TestimonialsSection = () => (
  <section id="stories" className="py-20 lg:py-28 bg-slate-50">
    <div className="container mx-auto px-6 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <p className="text-teal text-sm font-bold tracking-widest uppercase mb-3">Participant Stories</p>
        <h2 className="text-4xl lg:text-5xl font-black text-navy mb-4">
          What participants<br />and families say.
        </h2>
        <p className="text-lg text-slate-600 max-w-xl mx-auto">
          Every participant's story is unique. These are just a few of the families and individuals we're proud to support across Victoria.
        </p>
      </motion.div>

      <motion.div
        initial="hidden" whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        transition={{ staggerChildren: 0.12 }}
        className="grid lg:grid-cols-3 gap-6"
      >
        {testimonials.map((t) => (
          <motion.div
            key={t.name}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
            className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8 hover:shadow-lg hover:border-teal/20 transition-all duration-300 flex flex-col"
          >
            <Quote size={28} className="text-teal/30 mb-4 flex-shrink-0" />
            <p className="text-slate-600 leading-relaxed text-[15px] flex-1 mb-6 italic">
              "{t.quote}"
            </p>
            <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
              <div className={`w-10 h-10 ${t.color} rounded-full flex items-center justify-center text-xs font-black flex-shrink-0`}>
                {t.initials}
              </div>
              <div>
                <p className="text-sm font-bold text-navy">{t.name}</p>
                <p className="text-[11px] text-slate-400">{t.location} · {t.service}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default TestimonialsSection;
