import { motion } from 'framer-motion';
import { PhoneCall, ClipboardCheck, Search, FileText, Handshake, Heart, RefreshCcw, ArrowDown } from 'lucide-react';

const steps = [
  { icon: PhoneCall, title: 'Contact Us', desc: 'Call 1300 467 426, email us, or complete our referral form. A friendly team member will respond within one business day.', color: 'bg-teal/10 text-teal border-teal/20' },
  { icon: ClipboardCheck, title: 'Free Consultation', desc: 'We schedule a no-obligation conversation with you and your family to understand your needs, goals, and current NDIS situation.', color: 'bg-violet-50 text-violet-500 border-violet-100' },
  { icon: Search, title: 'Eligibility Check', desc: 'We confirm your NDIS plan details, funding categories, and the supports available to you — in plain language, without jargon.', color: 'bg-blue-50 text-blue-500 border-blue-100' },
  { icon: FileText, title: 'NDIS Plan Review', desc: 'Together we review your plan goals and budget to identify which Horizon services are the right fit and the best use of your funding.', color: 'bg-amber-50 text-amber-500 border-amber-100' },
  { icon: Handshake, title: 'Service Agreement', desc: 'We complete a simple, clear service agreement that outlines what support you\'ll receive, when, where, and at what cost.', color: 'bg-emerald/10 text-emerald border-emerald/20' },
  { icon: Heart, title: 'Support Begins', desc: 'Your support team is introduced, rosters are confirmed, and your supports begin — with a dedicated point of contact always available.', color: 'bg-rose-50 text-rose-500 border-rose-100' },
  { icon: RefreshCcw, title: 'Regular Reviews', desc: 'We check in regularly to make sure your supports are still meeting your needs and helping you progress toward your goals.', color: 'bg-teal/10 text-teal border-teal/20' },
];

const WorkflowSection = () => (
  <section id="get-started" className="py-20 lg:py-28 bg-white overflow-hidden">
    <div className="container mx-auto px-6 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-teal text-sm font-bold tracking-widest uppercase mb-3">How to get started</p>
        <h2 className="text-4xl lg:text-5xl font-black text-navy mb-4">
          Your journey<br />from first call to support.
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Getting started with Horizon is straightforward. Here is exactly what happens from your first contact with our team through to your supports beginning.
        </p>
      </motion.div>

      {/* Desktop: 4-3 snake flow */}
      <div className="hidden lg:block">
        <motion.div
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-4 gap-0 relative mb-6"
        >
          <div className="absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-teal/30 via-teal/60 to-teal/30 z-0"></div>
          {steps.slice(0, 4).map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div key={step.title}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
                className="relative z-10 flex flex-col items-center px-3"
              >
                <div className={`w-11 h-11 ${step.color} border-2 rounded-2xl flex items-center justify-center mb-3 bg-white shadow-sm`}><Icon size={18} /></div>
                <div className="w-px h-6 bg-slate-200 mb-3"></div>
                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4 text-center hover:border-teal/25 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="text-[10px] font-black text-slate-300 mb-1">Step 0{i + 1}</div>
                  <h4 className="text-sm font-bold text-navy mb-1.5">{step.title}</h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        <div className="flex justify-end pr-[12.5%] mb-4">
          <ArrowDown size={18} className="text-teal" />
        </div>
        <motion.div
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-3 gap-0 relative max-w-[75%] ml-auto"
        >
          <div className="absolute top-10 left-[16.67%] right-[16.67%] h-px bg-gradient-to-l from-teal/30 via-teal/60 to-teal/30 z-0"></div>
          {[...steps.slice(4, 7)].reverse().map((step, i) => {
            const Icon = step.icon;
            const actualStep = 6 - i;
            return (
              <motion.div key={step.title}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
                className="relative z-10 flex flex-col items-center px-3"
              >
                <div className={`w-11 h-11 ${step.color} border-2 rounded-2xl flex items-center justify-center mb-3 bg-white shadow-sm`}><Icon size={18} /></div>
                <div className="w-px h-6 bg-slate-200 mb-3"></div>
                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4 text-center hover:border-teal/25 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="text-[10px] font-black text-slate-300 mb-1">Step 0{actualStep}</div>
                  <h4 className="text-sm font-bold text-navy mb-1.5">{step.title}</h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Mobile: vertical timeline */}
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true }}
        transition={{ staggerChildren: 0.08 }}
        className="lg:hidden flex flex-col items-center gap-0"
      >
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <motion.div key={step.title}
              variants={{ hidden: { opacity: 0, x: -16 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5 } } }}
              className="w-full max-w-md flex gap-4"
            >
              <div className="flex flex-col items-center flex-shrink-0">
                <div className={`w-10 h-10 ${step.color} border-2 rounded-xl flex items-center justify-center bg-white z-10`}><Icon size={15} /></div>
                {i < steps.length - 1 && <div className="w-px flex-1 min-h-[32px] bg-gradient-to-b from-teal/40 to-slate-200 my-1"></div>}
              </div>
              <div className="pb-5">
                <div className="text-[10px] font-black text-slate-300 mb-0.5">Step 0{i + 1}</div>
                <h4 className="text-sm font-bold text-navy mb-1">{step.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-14 text-center"
      >
        <p className="text-slate-500 mb-4 text-sm">Ready to take the first step? Our team is available Monday to Friday, 8am – 6pm.</p>
        <a href="#contact"
          onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
          className="inline-flex items-center gap-2 bg-teal text-white px-8 py-3.5 rounded-xl text-sm font-bold hover:bg-teal/90 transition-all shadow-lg shadow-teal/20"
        >
          Get in Touch Today
        </a>
      </motion.div>
    </div>
  </section>
);

export default WorkflowSection;
