import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

const services = [
  {
    id: 'support-coordination',
    color: 'bg-violet-50 border-violet-100',
    iconBg: 'bg-violet-100',
    iconColor: 'text-violet-600',
    accentColor: 'text-violet-600',
    emoji: '🤝',
    title: 'Support Coordination',
    category: 'Capacity Building',
    desc: 'Our support coordinators help you understand and make the most of your NDIS plan — connecting you with the right services, navigating the system, and working toward your goals.',
    features: ['Plan navigation and budget management', 'Provider connections and service agreements', 'Crisis support and plan reviews', 'Goal setting and capacity building'],
    image: null,
  },
  {
    id: 'core-supports',
    color: 'bg-teal/5 border-teal/20',
    iconBg: 'bg-teal/10',
    iconColor: 'text-teal',
    accentColor: 'text-teal',
    emoji: '❤️',
    title: 'Core Supports',
    category: 'Core Supports Budget',
    desc: 'Everyday assistance delivered by trained, compassionate support workers — helping you live safely and independently at home and in your community, on your terms.',
    features: ['Personal care and hygiene support', 'Domestic assistance and meal preparation', 'Community access and transport', 'Overnight and 24/7 support available'],
    image: '/images/daily-living-support.png',
  },
  {
    id: 'community-participation',
    color: 'bg-blue-50 border-blue-100',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-500',
    accentColor: 'text-blue-500',
    emoji: '🌏',
    title: 'Community Participation',
    category: 'Core Supports Budget',
    desc: 'We support participants to engage with their community, develop friendships, pursue hobbies, and build skills that increase independence and wellbeing.',
    features: ['Social activities and group programs', 'Art, music, sport and recreation', 'Volunteer and employment pathways', 'Cultural and community events'],
    image: '/images/community-participation.png',
  },
  {
    id: 'sil',
    color: 'bg-amber-50 border-amber-100',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
    accentColor: 'text-amber-600',
    emoji: '🏠',
    title: 'Supported Independent Living',
    category: 'SIL — Capital Supports',
    desc: 'Horizon operates and supports SIL homes across Melbourne where participants live together with trained staff available around the clock to support daily routines and goals.',
    features: ['Shared and individual living options', 'Trained staff 24/7 on-site', 'Tailored daily routine support', 'Vacancy enquiries available now'],
    image: null,
  },
  {
    id: 'respite-sta',
    color: 'bg-indigo-50 border-indigo-100',
    iconBg: 'bg-indigo-100',
    iconColor: 'text-indigo-500',
    accentColor: 'text-indigo-500',
    emoji: '🌙',
    title: 'Respite & Short-Term Accommodation',
    category: 'Core Supports Budget',
    desc: 'Planned or emergency short-term accommodation giving participants a break from their usual environment and giving families and carers the rest they need.',
    features: ['Planned respite stays', 'Emergency and crisis accommodation', 'Day programs and overnight stays', 'Safe, comfortable, accessible facilities'],
    image: null,
  },
  {
    id: 'allied-health',
    color: 'bg-rose-50 border-rose-100',
    iconBg: 'bg-rose-100',
    iconColor: 'text-rose-500',
    accentColor: 'text-rose-500',
    emoji: '⚕️',
    title: 'Allied Health Services',
    category: 'Capacity Building Budget',
    desc: 'Our qualified allied health team delivers therapy and assessment services in your home, community, or our clinic — helping you achieve your health and independence goals.',
    features: ['Occupational Therapy (OT)', 'Physiotherapy', 'Speech Pathology', 'Psychology & Behaviour Support'],
    image: '/images/occupational-therapy.png',
  },
  {
    id: 'early-childhood',
    color: 'bg-orange-50 border-orange-100',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-500',
    accentColor: 'text-orange-500',
    emoji: '🌟',
    title: 'Early Childhood Supports',
    category: 'Early Childhood Access',
    desc: 'Specialised early intervention for children under 9 with disability or developmental delay. We partner with families to build capacity and set children up for their best start.',
    features: ['Early intervention therapy', 'Family coaching and training', 'Kindergarten and school readiness', 'Access for children without an NDIS plan'],
    image: null,
  },
  {
    id: 'plan-management',
    color: 'bg-emerald/5 border-emerald/20',
    iconBg: 'bg-emerald/10',
    iconColor: 'text-emerald',
    accentColor: 'text-emerald',
    emoji: '📋',
    title: 'Plan Management',
    category: 'Capacity Building Budget',
    desc: 'Our plan managers take the paperwork and financial administration off your hands — paying your providers on time and giving you the choice to use both registered and unregistered providers.',
    features: ['Invoice processing and payments', 'Budget tracking and reporting', 'Choice to use any provider', 'Dedicated plan manager assigned'],
    image: null,
  },
];

const Projects = () => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-teal text-sm font-bold tracking-widest uppercase mb-3">NDIS Support Services</p>
          <h2 className="text-4xl lg:text-5xl font-black text-navy mb-4">
            Supports that fit<br />your life and your goals.
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            From daily living assistance to allied health and SIL — Horizon provides the full range of NDIS-funded supports, tailored to every participant's individual needs and NDIS plan.
          </p>
        </motion.div>

        {/* 2-column service grid */}
        <motion.div
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          transition={{ staggerChildren: 0.1 }}
          className="grid lg:grid-cols-2 gap-6"
        >
          {services.map((svc) => (
            <motion.div
              key={svc.id}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55 } } }}
              className={`rounded-2xl border ${svc.color} overflow-hidden hover:shadow-xl hover:shadow-navy/5 transition-all duration-500 hover:-translate-y-1 group flex flex-col`}
            >
              {/* Image area or gradient header */}
              {svc.image ? (
                <div className="h-52 overflow-hidden flex-shrink-0">
                  <img
                    src={svc.image}
                    alt={`Horizon Support Services — ${svc.title}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
              ) : (
                <div className={`h-24 flex-shrink-0 flex items-center px-7 ${svc.color}`}>
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 ${svc.iconBg} rounded-xl flex items-center justify-center text-2xl flex-shrink-0`}>
                      {svc.emoji}
                    </div>
                    <div>
                      <div className={`text-[10px] font-bold uppercase tracking-widest ${svc.accentColor} mb-0.5`}>{svc.category}</div>
                      <div className="text-lg font-black text-navy">{svc.title}</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Card body */}
              <div className="p-7 flex flex-col flex-1 bg-white">
                {svc.image && (
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`text-[10px] font-bold uppercase tracking-widest ${svc.accentColor}`}>{svc.category}</span>
                  </div>
                )}
                {svc.image && <h3 className="text-xl font-black text-navy mb-3">{svc.title}</h3>}
                <p className="text-sm text-slate-500 leading-relaxed mb-5">{svc.desc}</p>
                <ul className="space-y-2 mb-6 flex-1">
                  {svc.features.map(f => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-slate-600">
                      <Check size={14} className="text-emerald mt-0.5 flex-shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-5 border-t border-slate-100">
                  <a href="#contact"
                    onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                    className="inline-flex items-center gap-2 text-sm font-bold text-teal hover:text-navy transition-colors group/btn"
                  >
                    Enquire about this service
                    <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 pt-12 border-t border-slate-100 text-center"
        >
          <h3 className="text-2xl font-black text-navy mb-2">Not sure which support is right for you?</h3>
          <p className="text-slate-500 mb-6 max-w-md mx-auto">Our team will speak with you or your family to understand your needs and help identify the right supports from your NDIS plan.</p>
          <a href="#contact"
            onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="group inline-flex items-center gap-2.5 bg-teal text-white px-10 py-4 rounded-xl text-sm font-bold hover:bg-teal/90 transition-all shadow-lg shadow-teal/20"
          >
            Talk to Our Team
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
