import { motion } from 'framer-motion'
import { ClipboardCheck, Code2, Rocket } from 'lucide-react'

const ProcessBreakdown = () => {
  const steps = [
    {
      number: '01',
      icon: ClipboardCheck,
      title: 'Free Compliance Audit',
      description: 'We analyse your current digital footprint against NDIS Practice Standards, WCAG 2.2 AA, and the Privacy Act 1988. You receive a detailed compliance gap report within 48 hours — completely free.',
      detail: 'No obligation. No cost. Just clarity on where you stand.',
      color: 'bg-teal/10 text-teal border-teal/20',
    },
    {
      number: '02',
      icon: Code2,
      title: 'Platform Design & Build',
      description: 'Our NDIS digital specialists design and engineer your compliant platform from the ground up — participant intake flows, accessible UI, PRODA-ready API connections, and automated workflows.',
      detail: 'Typical delivery: 6–10 weeks from sign-off to go-live.',
      color: 'bg-emerald/10 text-emerald border-emerald/20',
    },
    {
      number: '03',
      icon: Rocket,
      title: 'Launch & Ongoing Support',
      description: 'Go live with confidence. We provide post-launch monitoring, compliance updates as NDIS rules evolve, and a dedicated sector specialist for ongoing support queries.',
      detail: 'SLA-backed support. Australian business hours + emergency contacts.',
      color: 'bg-purple-100 text-purple-600 border-purple-200',
    },
  ]

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
          <p className="text-teal text-sm font-bold tracking-widest uppercase mb-3">How it works</p>
          <h2 className="text-4xl lg:text-5xl font-black text-navy mb-4">
            From audit to go-live<br />in three clear steps.
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A transparent, sector-proven process designed to get your NDIS digital platform compliant and operational as fast as possible.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ staggerChildren: 0.15 }}
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
                className="bg-white rounded-2xl p-8 border border-slate-100 hover:border-teal/25 hover:shadow-lg hover:shadow-teal/5 transition-all duration-300 hover:-translate-y-1 relative"
              >
                {/* Step number */}
                <div className="text-6xl font-black text-slate-50 absolute top-6 right-8 leading-none select-none">
                  {step.number}
                </div>

                <div className={`w-12 h-12 ${step.color} border rounded-xl flex items-center justify-center mb-5`}>
                  <Icon size={22} />
                </div>

                <h3 className="text-xl font-bold text-navy mb-3">{step.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm mb-4">{step.description}</p>
                <p className="text-xs font-semibold text-teal border-t border-slate-100 pt-4">{step.detail}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default ProcessBreakdown
