import { Link } from 'react-router-dom'
import { ArrowRight, Globe, ShieldCheck, Users } from 'lucide-react'

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
    <section id="portfolio" className="py-32 bg-navy-mid relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal/10 to-transparent"></div>
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <div className="space-y-6 max-w-3xl animate-fade-in">
            <h2 className="text-5xl lg:text-7xl font-bold tracking-tight text-white leading-tight animate-slide-up">
              NDIS <span className="text-teal italic font-light">Digital Solutions</span>
            </h2>
            <p className="text-xl text-white/60 font-sans font-medium animate-slide-up max-w-2xl" style={{ animationDelay: '0.1s' }}>
              Purpose-built platforms for the three core NDIS provider verticals. Compliant, accessible, and built to scale with your organisation.
            </p>
          </div>
        </div>

        {/* Projects List */}
        <div className="space-y-40">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center animate-slide-up group`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Asymmetric Multi-Image Collage (3 Images) */}
              <div className="w-full lg:w-3/5 grid grid-cols-12 gap-3 md:gap-4 relative shrink-0">
                {/* Large Main Image (Exterior) */}
                <Link
                  to={`/${project.id}.html`}
                  className="col-span-8 aspect-[4/3] relative overflow-hidden rounded-[2px] border border-white/10 block cursor-pointer shadow-2xl transition-all duration-500 hover:border-teal/50 hover:scale-[1.01]"
                >
                  <img
                    src={project.image}
                    alt={`${project.title} Platform`}
                    className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-103"
                    loading={index === 0 ? undefined : "lazy"}
                    fetchPriority={index === 0 ? "high" : undefined}
                  />
                  <div className="absolute bottom-4 left-4 bg-navy/90 backdrop-blur-md px-3 py-1.5 border border-white/10 text-[9px] font-bold tracking-[0.2em] text-white uppercase rounded-[2px]">
                    {project.badgeMain}
                  </div>
                </Link>

                {/* Right Side Stacked Images (Interior + Detail) */}
                <div className="col-span-4 flex flex-col gap-3 md:gap-4">
                  <Link
                    to={`/${project.id}.html`}
                    className="aspect-[4/3] relative overflow-hidden rounded-[2px] border border-white/10 block cursor-pointer shadow-xl transition-all duration-500 hover:border-teal/50 hover:scale-[1.01]"
                  >
                    <img
                      src={`/case-studies/${project.id}/image2.png`}
                      alt={`${project.title} Dashboard`}
                      className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute bottom-3 left-3 bg-navy/80 backdrop-blur-md px-2 py-1 border border-white/10 text-[8px] font-bold tracking-[0.2em] text-white uppercase rounded-[2px] whitespace-nowrap">
                      {project.badgeTwo}
                    </div>
                  </Link>
                  <Link
                    to={`/${project.id}.html`}
                    className="aspect-[4/3] relative overflow-hidden rounded-[2px] border border-white/10 block cursor-pointer shadow-xl transition-all duration-500 hover:border-teal/50 hover:scale-[1.01]"
                  >
                    <img
                      src={`/case-studies/${project.id}/image3.png`}
                      alt={`${project.title} Portal`}
                      className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute bottom-3 left-3 bg-navy/80 backdrop-blur-md px-2 py-1 border border-white/10 text-[8px] font-bold tracking-[0.2em] text-white uppercase rounded-[2px] whitespace-nowrap">
                      {project.badgeThree}
                    </div>
                  </Link>
                </div>
              </div>

              {/* Case Study Content */}
              <div className="w-full lg:w-2/5 flex flex-col justify-center">
                {/* Visual Label & Sequence Number */}
                <div className="flex items-center gap-3 text-teal text-xs font-bold tracking-[0.3em] uppercase mb-4">
                  <span>0{index + 1} // NDIS SOLUTION</span>
                </div>

                {/* NDIS Registration Pill */}
                <div className="mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald/10 border border-emerald/30 rounded-full text-emerald text-[11px] font-bold tracking-wide">
                    <ShieldCheck size={12} />
                    {project.ndisTag}
                  </span>
                </div>

                <Link to={`/${project.id}.html`} className="inline-block group-hover:text-teal transition-colors duration-500">
                  <h3 className="text-4xl lg:text-5xl font-black tracking-tight text-white mb-6 group-hover:text-teal transition-colors duration-500 font-heading leading-tight">
                    {project.title}
                  </h3>
                </Link>
                
                {/* Intent Statement - Reduced Text with High Visual Priority */}
                <div className="mb-8 border-l-2 border-teal/40 pl-6">
                  <p className="text-xl text-white/90 leading-relaxed font-sans font-light italic">
                    "{project.intent}"
                  </p>
                </div>

                {/* Structured Metric Cards - Skimmable */}
                <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-8 font-sans">
                  <div className="bg-navy-light border border-white/5 p-4 rounded-[2px] hover:bg-white/5 hover:border-white/10 transition-all duration-300">
                    <div className="flex items-center gap-1.5 text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase mb-1.5">
                      <Users size={12} className="text-teal" /> Provider Type
                    </div>
                    <div className="text-base font-bold text-white">{project.location}</div>
                  </div>
                  <div className="bg-navy-light border border-white/5 p-4 rounded-[2px] hover:bg-white/5 hover:border-white/10 transition-all duration-300">
                    <div className="flex items-center gap-1.5 text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase mb-1.5">
                      <ShieldCheck size={12} className="text-teal" /> Compliance Level
                    </div>
                    <div className="text-base font-bold text-white">{project.scale} &bull; {project.status}</div>
                  </div>
                  <div className="col-span-2 bg-navy-light border border-white/5 p-4 rounded-[2px] hover:bg-white/5 hover:border-white/10 transition-all duration-300 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase">
                      <Globe size={12} className="text-teal" /> Tech Stack
                    </div>
                    <div className="text-xs font-bold tracking-[0.15em] text-teal uppercase bg-teal/10 px-3 py-1 border border-teal/20 rounded-[2px]">
                      {project.materials}
                    </div>
                  </div>
                </div>

                {/* Explore Case Study CTA Link */}
                <div className="mt-8 border-t border-white/5 pt-6">
                  <Link
                    to={`/${project.id}.html`}
                    className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.25em] text-teal hover:text-white uppercase transition-all duration-300 group/link"
                  >
                    <span>View Platform Details</span>
                    <ArrowRight className="group-hover/link:translate-x-1.5 transition-transform duration-300 text-teal group-hover/link:text-white" size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Below Projects */}
        <div className="mt-32 text-center animate-slide-up border-t border-white/10 pt-24" style={{ animationDelay: '0.3s' }}>
          <h3 className="text-4xl font-bold text-white mb-6">Ready to get your platform compliant?</h3>
          <p className="text-xl text-white/60 font-sans font-medium mb-10 max-w-2xl mx-auto">
            Book a free NDIS digital audit and receive a tailored compliance gap report — no obligation, delivered within 48 hours.
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="group bg-teal text-navy px-12 py-6 text-base font-bold tracking-widest uppercase hover:bg-teal/90 transition-all duration-500 inline-flex items-center gap-3 shadow-[0_0_20px_rgba(0,180,216,0.2)] hover:shadow-[0_0_40px_rgba(0,180,216,0.4)] rounded-[2px] font-sans"
          >
            Book a Free Platform Audit
            <ArrowRight className="group-hover:translate-x-2 transition-transform" size={22} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
