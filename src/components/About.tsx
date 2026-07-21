import { motion } from 'framer-motion'
import { ShieldCheck, Accessibility, Lock, Award } from 'lucide-react'

const About = () => {
  const trustBadges = [
    { icon: ShieldCheck, label: 'NDIS Practice Standards Aligned', color: 'text-emerald' },
    { icon: Lock, label: 'Privacy Act 1988 (Cth) Compliant', color: 'text-teal' },
    { icon: Accessibility, label: 'WCAG 2.2 AA Certified', color: 'text-teal' },
    { icon: Award, label: 'Registered NDIS Provider Specialists', color: 'text-emerald' },
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
                alt="Meridian Digital — NDIS platform specialists working with allied health providers"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent"></div>
            </div>

            {/* Floating credential badge */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl shadow-navy/10 border border-slate-100 p-5 flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald/10 rounded-xl flex items-center justify-center">
                <ShieldCheck size={20} className="text-emerald" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Platform Compliance</p>
                <p className="text-sm font-black text-navy">100% Audit Pass Rate</p>
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
            <p className="text-teal text-sm font-bold tracking-widest uppercase">About Meridian Digital</p>

            <h2 className="text-4xl lg:text-5xl font-black text-navy leading-tight">
              Sector specialists.<br />
              Not generalists.
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed">
              Founded in 2019, Meridian Digital was built by a team of Australian software engineers and NDIS sector specialists who watched providers lose hours each day to paper-based intake, non-compliant websites, and disconnected systems. We set out to fix that.
            </p>

            <p className="text-base text-slate-500 leading-relaxed">
              Today, we build and maintain digital platforms for allied health clinics, support coordination organisations, registered plan managers, and core support providers across every state and territory. Every platform we deliver has passed its NDIS Commission audit — and we intend to keep that record intact.
            </p>

            <p className="text-base text-slate-500 leading-relaxed">
              We don't sell generic web templates. We engineer compliant, accessible, participant-centred digital infrastructure that makes your organisation operationally stronger and more defensible at audit time.
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
                Speak with our NDIS specialists
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
