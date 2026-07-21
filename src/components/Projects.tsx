import { Link } from 'react-router-dom'
import { ArrowRight, Globe, ShieldCheck, Users } from 'lucide-react'
import { motion } from 'framer-motion'

const Projects = () => {
  const projects = [
    {
      id: 'industrial-loft',
      image: '/case-studies/industrial-loft/image1.png',
      title: 'Participant Intake Portal',
      location: 'Allied Health & Support Coordinators',
      scale: 'WCAG 2.2 AA',
      status: 'Live',
      materials: 'React + Node.js',
      intent: 'Eliminating paper-based referral bottlenecks with a smart, consent-driven digital intake system that routes participants to the right supports automatically.',
      badgeMain: 'Live Platform',
      badgeTwo: 'Dashboard View',
      badgeThree: 'Participant Portal',
      icon: Users,
      ndisTag: 'NDIS Registered',
    },
    {
      id: 'minimalist-pavilion',
      image: '/case-studies/minimalist-pavilion/image1.png',
      title: 'Plan Management Dashboard',
      location: 'Registered Plan Managers',
      scale: 'PRODA-Ready',
      status: 'Live',
      materials: 'Next.js + PostgreSQL',
      intent: 'A real-time plan management command centre — invoice tracking, budget visibility, participant reporting, and NDIS portal integration in a single compliant interface.',
      badgeMain: 'Live Platform',
      badgeTwo: 'Budget Dashboard',
      badgeThree: 'Invoice Portal',
      icon: ShieldCheck,
      ndisTag: 'PRODA Integrated',
    },
    {
      id: 'suburban-elegance',
      image: '/case-studies/suburban-elegance/image1.png',
      title: 'Core Supports Scheduling Suite',
      location: 'Core Support Providers',
      scale: 'NDIS Registered',
      status: 'Live',
      materials: 'React Native + API',
      intent: 'Mobile-first rostering, shift management, incident reporting, and progress notes — purpose-built for support workers delivering funded NDIS core supports in the community.',
      badgeMain: 'Live Platform',
      badgeTwo: 'Roster View',
      badgeThree: 'Shift Notes',
      icon: Globe,
      ndisTag: 'Practice Standards Aligned',
    }
  ]

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-teal text-sm font-bold tracking-widest uppercase mb-3">Our NDIS Solutions</p>
          <h2 className="text-4xl lg:text-5xl font-black text-navy mb-4">
            Purpose-built platforms<br />for every provider type.
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Compliant, accessible, and built to scale. Choose the solution that fits your organisation.
          </p>
        </motion.div>

        {/* Projects List */}
        <div className="space-y-20 lg:space-y-28">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 lg:gap-16 items-center group`}
            >
              {/* Asymmetric Multi-Image Collage */}
              <div className="w-full lg:w-3/5 grid grid-cols-12 gap-3 relative shrink-0">
                {/* Large Main Image */}
                <Link
                  to={`/${project.id}.html`}
                  className="col-span-8 aspect-[4/3] relative overflow-hidden rounded-2xl border border-slate-100 block shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.01]"
                >
                  <img
                    src={project.image}
                    alt={`${project.title} Platform`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading={index === 0 ? undefined : "lazy"}
                    fetchPriority={index === 0 ? "high" : undefined}
                  />
                  <div className="absolute bottom-4 left-4 bg-navy/85 backdrop-blur-sm px-3 py-1.5 text-[9px] font-bold tracking-widest text-white uppercase rounded-lg">
                    {project.badgeMain}
                  </div>
                </Link>

                {/* Right Side Stacked Images */}
                <div className="col-span-4 flex flex-col gap-3">
                  <Link
                    to={`/${project.id}.html`}
                    className="aspect-[4/3] relative overflow-hidden rounded-xl border border-slate-100 block shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.01]"
                  >
                    <img
                      src={`/case-studies/${project.id}/image2.png`}
                      alt={`${project.title} Dashboard`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute bottom-2 left-2 bg-navy/80 px-2 py-1 text-[8px] font-bold tracking-wide text-white uppercase rounded-md whitespace-nowrap">
                      {project.badgeTwo}
                    </div>
                  </Link>
                  <Link
                    to={`/${project.id}.html`}
                    className="aspect-[4/3] relative overflow-hidden rounded-xl border border-slate-100 block shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.01]"
                  >
                    <img
                      src={`/case-studies/${project.id}/image3.png`}
                      alt={`${project.title} Portal`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute bottom-2 left-2 bg-navy/80 px-2 py-1 text-[8px] font-bold tracking-wide text-white uppercase rounded-md whitespace-nowrap">
                      {project.badgeThree}
                    </div>
                  </Link>
                </div>
              </div>

              {/* Case Study Content */}
              <div className="w-full lg:w-2/5 flex flex-col justify-center">
                <div className="text-teal text-xs font-bold tracking-widest uppercase mb-3">
                  0{index + 1} — NDIS Solution
                </div>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald/8 border border-emerald/20 rounded-full text-emerald text-xs font-semibold mb-4 w-fit">
                  <ShieldCheck size={12} />
                  {project.ndisTag}
                </span>

                <Link to={`/${project.id}.html`}>
                  <h3 className="text-3xl lg:text-4xl font-black text-navy mb-5 hover:text-teal transition-colors duration-300 leading-tight">
                    {project.title}
                  </h3>
                </Link>

                <div className="mb-7 border-l-2 border-teal/30 pl-5">
                  <p className="text-lg text-slate-600 leading-relaxed italic">
                    "{project.intent}"
                  </p>
                </div>

                {/* Metric Cards */}
                <div className="grid grid-cols-2 gap-3 mb-7">
                  <div className="bg-slate-50 border border-slate-100 p-4 rounded-xl">
                    <div className="flex items-center gap-1.5 text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-1.5">
                      <Users size={11} className="text-teal" /> Provider Type
                    </div>
                    <div className="text-sm font-bold text-navy">{project.location}</div>
                  </div>
                  <div className="bg-slate-50 border border-slate-100 p-4 rounded-xl">
                    <div className="flex items-center gap-1.5 text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-1.5">
                      <ShieldCheck size={11} className="text-teal" /> Compliance
                    </div>
                    <div className="text-sm font-bold text-navy">{project.scale} · {project.status}</div>
                  </div>
                  <div className="col-span-2 bg-slate-50 border border-slate-100 p-4 rounded-xl flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                      <Globe size={11} className="text-teal" /> Tech Stack
                    </div>
                    <span className="text-xs font-bold text-teal bg-teal/10 px-3 py-1 rounded-full border border-teal/20">
                      {project.materials}
                    </span>
                  </div>
                </div>

                <Link
                  to={`/${project.id}.html`}
                  className="inline-flex items-center gap-2 text-sm font-bold text-teal hover:text-navy transition-colors duration-300 group/link"
                >
                  <span>View Platform Details</span>
                  <ArrowRight className="group-hover/link:translate-x-1 transition-transform" size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Below Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 pt-16 border-t border-slate-100 text-center"
        >
          <h3 className="text-3xl font-bold text-navy mb-4">Ready to get your platform compliant?</h3>
          <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto">
            Book a free NDIS digital audit and receive a tailored compliance gap report — no obligation, delivered within 48 hours.
          </p>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="group bg-teal text-white px-10 py-4 text-base font-bold rounded-xl hover:bg-teal/90 transition-all duration-300 inline-flex items-center gap-2.5 shadow-lg shadow-teal/20"
          >
            Book a Free Audit
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
