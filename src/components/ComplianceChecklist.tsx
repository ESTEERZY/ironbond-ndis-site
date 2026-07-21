import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const checklistItems = [
  { label: 'WCAG 2.2 AA Compliant', desc: 'All contrast ratios, focus states, and ARIA labels meet Level AA standards.', color: 'text-emerald' },
  { label: 'Australian Privacy Principles', desc: 'APPs-compliant data storage, consent capture, and participant data handling.', color: 'text-emerald' },
  { label: 'Keyboard Navigation', desc: 'Every interactive element is fully operable without a mouse.', color: 'text-teal' },
  { label: 'Screen Reader Support', desc: 'Tested with NVDA, VoiceOver, and JAWS across major platforms.', color: 'text-teal' },
  { label: 'Accessible Form Design', desc: 'Labelled inputs, clear error messages, and logical tab order throughout.', color: 'text-teal' },
  { label: 'Fully Responsive', desc: 'Pixel-perfect experience across mobile, tablet, and desktop.', color: 'text-blue-500' },
  { label: 'Secure SSL Encryption', desc: 'End-to-end encryption with Australian-hosted servers and daily backups.', color: 'text-blue-500' },
  { label: 'Core Web Vitals Pass', desc: 'LCP under 2.5s, CLS under 0.1, FID under 100ms — tested across real devices.', color: 'text-violet-500' },
];

const ComplianceChecklist = () => {
  return (
    <section id="compliance" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: header + description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-teal text-sm font-bold tracking-widest uppercase mb-3">Compliance</p>
            <h2 className="text-4xl lg:text-5xl font-black text-navy mb-6 leading-tight">
              Built around<br />NDIS compliance.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              We don't treat accessibility and compliance as afterthoughts. Every platform we build is engineered from the ground up to meet the full requirements of the NDIS Quality and Safeguards Commission, WCAG 2.2 AA, and the Australian Privacy Act.
            </p>
            <p className="text-base text-slate-500 leading-relaxed mb-8">
              When a compliance inspector or audit team reviews your digital platform, you'll have documented evidence of every control — built in, not bolted on.
            </p>

            {/* Summary badges */}
            <div className="flex flex-wrap gap-2">
              {['WCAG 2.2 AA', 'NDIS Registered', 'APPs Compliant', 'Secure Hosting'].map((badge) => (
                <span key={badge} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald/8 border border-emerald/20 rounded-full text-emerald text-xs font-bold">
                  <Check size={11} /> {badge}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: checklist grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            transition={{ staggerChildren: 0.08 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {checklistItems.map((item) => (
              <motion.div
                key={item.label}
                variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45 } } }}
                className="bg-slate-50 rounded-2xl border border-slate-100 p-5 hover:border-teal/25 hover:bg-white hover:shadow-md hover:shadow-teal/5 transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className={`flex-shrink-0 w-6 h-6 rounded-lg flex items-center justify-center bg-white border border-slate-200 mt-0.5`}>
                    <Check size={13} className={item.color} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-navy mb-1">{item.label}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceChecklist;
