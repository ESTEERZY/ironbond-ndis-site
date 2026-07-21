import { motion } from 'framer-motion'
import { ShieldCheck, Accessibility, Lock } from 'lucide-react'

const About = () => {
  const trustBadges = [
    { icon: ShieldCheck, label: 'NDIS Practice Standards Aligned', color: 'text-emerald' },
    { icon: Lock, label: 'Privacy Act 1988 (Cth) Compliant', color: 'text-teal' },
    { icon: Accessibility, label: 'WCAG 2.2 AA Certified', color: 'text-teal' },
  ]

  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: Director image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-navy/10 border border-slate-100 aspect-[4/5]">
              <img
                src="/images/director.png"
                alt="NDIS Prototype Founder"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent"></div>
            </div>

            {/* Floating compliance badge */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl shadow-navy/10 border border-slate-100 p-5 flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald/10 rounded-xl flex items-center justify-center">
                <ShieldCheck size={20} className="text-emerald" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Platform Status</p>
                <p className="text-sm font-black text-navy">All Systems Compliant</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col gap-6"
          >
            <p className="text-teal text-sm font-bold tracking-widest uppercase">About us</p>

            <h2 className="text-4xl lg:text-5xl font-black text-navy leading-tight">
              Sector specialists.<br />
              Not generalists.
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed">
              NDIS Prototype is Australia's dedicated NDIS digital compliance platform. We don't build generic websites — we build registered-provider infrastructure that meets every requirement of the NDIS Quality and Safeguards Commission.
            </p>

            <p className="text-base text-slate-500 leading-relaxed">
              Our team combines deep NDIS sector knowledge with elite software engineering. Every platform we deliver has been built around the operational realities of allied health, support coordinators, plan managers, and core support providers across Australia.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-col gap-3 pt-4 border-t border-slate-100">
              {trustBadges.map((badge) => {
                const Icon = badge.icon
                return (
                  <div key={badge.label} className="flex items-center gap-3">
                    <Icon size={18} className={badge.color} />
                    <span className="text-sm font-semibold text-navy">{badge.label}</span>
                  </div>
                )
              })}
            </div>

            <div className="pt-2">
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="inline-flex items-center gap-2.5 bg-navy text-white px-8 py-4 rounded-xl text-sm font-bold hover:bg-navy/90 transition-all duration-300"
              >
                Talk to our NDIS specialists
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
