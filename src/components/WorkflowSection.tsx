import { motion } from 'framer-motion';
import {
  FileCheck, ClipboardList, Search, PenLine,
  UserCheck, CalendarDays, FileText, BarChart3, ArrowDown
} from 'lucide-react';

const steps = [
  { icon: FileCheck, title: 'Referral Received', desc: 'Digital referral submitted via your intake portal — timestamped, assigned, and queued automatically.', color: 'bg-teal/10 text-teal border-teal/20' },
  { icon: Search, title: 'Eligibility Review', desc: 'Coordinator reviews funding type, plan expiry, and NDIS number validity against participant record.', color: 'bg-blue-50 text-blue-500 border-blue-100' },
  { icon: ClipboardList, title: 'Digital Intake Form', desc: 'Participant or nominee completes a WCAG-compliant, mobile-friendly intake form in their own time.', color: 'bg-violet-50 text-violet-500 border-violet-100' },
  { icon: PenLine, title: 'Consent Collection', desc: 'Legally binding digital consent captured with audit trail — stored against the participant record.', color: 'bg-amber-50 text-amber-500 border-amber-100' },
  { icon: UserCheck, title: 'Participant Onboarding', desc: 'Participant profile created, plan categories mapped, documents uploaded, and coordinator assigned.', color: 'bg-emerald/10 text-emerald border-emerald/20' },
  { icon: CalendarDays, title: 'Service Scheduling', desc: 'Support sessions scheduled via the rostering dashboard — workers notified, shifts confirmed.', color: 'bg-teal/10 text-teal border-teal/20' },
  { icon: FileText, title: 'Progress Notes', desc: 'Support workers submit shift notes and progress updates via mobile app — instantly attached to the participant record.', color: 'bg-blue-50 text-blue-500 border-blue-100' },
  { icon: BarChart3, title: 'NDIS Reporting', desc: 'Budget utilisation, service delivery summaries, and compliance reports generated automatically for each plan period.', color: 'bg-emerald/10 text-emerald border-emerald/20' },
];

const WorkflowSection = () => {
  return (
    <section id="workflow" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-teal text-sm font-bold tracking-widest uppercase mb-3">End-to-End Workflow</p>
          <h2 className="text-4xl lg:text-5xl font-black text-navy mb-4">
            From referral to<br />participant support.
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Every step of your NDIS service delivery managed in one compliant, automated platform — eliminating manual handoffs and reducing admin overhead.
          </p>
        </motion.div>

        {/* 4-column grid, 2 rows — desktop snake flow */}
        <div className="hidden lg:block">
          {/* Row 1: Steps 1–4, left to right */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            transition={{ staggerChildren: 0.1 }}
            className="grid grid-cols-4 gap-0 relative"
          >
            {/* Connecting line Row 1 */}
            <div className="absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-teal/30 via-teal/60 to-teal/30 z-0"></div>

            {steps.slice(0, 4).map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
                  className="relative z-10 flex flex-col items-center px-4"
                >
                  {/* Step number + icon */}
                  <div className={`w-12 h-12 ${step.color} border-2 rounded-2xl flex items-center justify-center mb-4 bg-white shadow-sm`}>
                    <Icon size={20} />
                  </div>
                  <div className="w-px h-8 bg-slate-200 mb-4"></div>
                  <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 text-center hover:border-teal/25 hover:shadow-lg hover:shadow-teal/5 transition-all duration-300 h-full">
                    <div className="text-xs font-black text-slate-300 mb-1">0{i + 1}</div>
                    <h4 className="text-sm font-bold text-navy mb-2">{step.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Connecting arrow between rows */}
          <div className="flex justify-end pr-[12.5%] my-2">
            <div className="flex flex-col items-center text-teal">
              <ArrowDown size={20} className="mt-2" />
            </div>
          </div>

          {/* Row 2: Steps 5–8, right to left (reverse) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            transition={{ staggerChildren: 0.1 }}
            className="grid grid-cols-4 gap-0 relative"
          >
            {/* Connecting line Row 2 */}
            <div className="absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-l from-teal/30 via-teal/60 to-teal/30 z-0"></div>

            {[...steps.slice(4, 8)].reverse().map((step, i) => {
              const Icon = step.icon;
              const actualIndex = 7 - i;
              return (
                <motion.div
                  key={step.title}
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
                  className="relative z-10 flex flex-col items-center px-4"
                >
                  <div className={`w-12 h-12 ${step.color} border-2 rounded-2xl flex items-center justify-center mb-4 bg-white shadow-sm`}>
                    <Icon size={20} />
                  </div>
                  <div className="w-px h-8 bg-slate-200 mb-4"></div>
                  <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 text-center hover:border-teal/25 hover:shadow-lg hover:shadow-teal/5 transition-all duration-300 h-full">
                    <div className="text-xs font-black text-slate-300 mb-1">0{actualIndex + 1}</div>
                    <h4 className="text-sm font-bold text-navy mb-2">{step.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Mobile: single column */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.08 }}
          className="lg:hidden flex flex-col items-center gap-0"
        >
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5 } } }}
                className="w-full max-w-md flex gap-4"
              >
                {/* Left: icon + line */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className={`w-10 h-10 ${step.color} border-2 rounded-xl flex items-center justify-center bg-white z-10`}>
                    <Icon size={16} />
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-px flex-1 min-h-[32px] bg-gradient-to-b from-teal/40 to-slate-200 my-1"></div>
                  )}
                </div>
                {/* Right: content */}
                <div className="pb-6">
                  <div className="text-[10px] font-black text-slate-300 mb-0.5">0{i + 1}</div>
                  <h4 className="text-sm font-bold text-navy mb-1">{step.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-500 mb-4 text-sm">See the full platform in action during your free audit.</p>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="inline-flex items-center gap-2 bg-teal text-white px-8 py-3.5 rounded-xl text-sm font-bold hover:bg-teal/90 transition-all duration-300 shadow-lg shadow-teal/20"
          >
            Book Your Free Audit
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkflowSection;
