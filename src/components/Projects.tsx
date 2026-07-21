import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Ruler, Layers } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      id: 'industrial-loft',
      image: '/case-studies/industrial-loft/image1.png',
      title: 'Industrial Loft',
      location: 'Hobart, TAS',
      scale: '1,200 sqm',
      status: 'Completed',
      materials: 'Brick & Steel',
      intent: 'Preserving historical textures while introducing bold, contemporary forms.',
    },
    {
      id: 'minimalist-pavilion',
      image: '/case-studies/minimalist-pavilion/image1.png',
      title: 'Minimalist Pavilion',
      location: 'Launceston, TAS',
      scale: '650 sqm',
      status: 'Completed',
      materials: 'Concrete & Glass',
      intent: 'Dissolving the boundaries between structural form and the surrounding landscape.',
    },
    {
      id: 'suburban-elegance',
      image: '/case-studies/suburban-elegance/image1.png',
      title: 'Suburban Elegance',
      location: 'Devonport, TAS',
      scale: '550 sqm',
      status: 'Completed',
      materials: 'Rendered Brick & Timber',
      intent: 'An elegant contemporary family home seamlessly blending indoor comfort with expansive outdoor entertaining.',
    }
  ]

  return (
    <section id="portfolio" className="py-32 bg-darkgray relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent"></div>
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <div className="space-y-6 max-w-3xl animate-fade-in">
            <h2 className="text-5xl lg:text-7xl font-bold tracking-tight text-white leading-tight animate-slide-up">
              Technical <span className="text-gold italic font-light">Case Studies</span>
            </h2>
            <p className="text-xl text-white/60 font-sans font-medium animate-slide-up max-w-2xl" style={{ animationDelay: '0.1s' }}>
              Defining masterworks. Meticulous exploration of form, light, and context.
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
                  className="col-span-8 aspect-[4/3] relative overflow-hidden rounded-[2px] border border-white/10 block cursor-pointer shadow-2xl transition-all duration-500 hover:border-gold/50 hover:scale-[1.01]"
                >
                  <img
                    src={project.image}
                    alt={`${project.title} Exterior`}
                    className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-103"
                    loading={index === 0 ? undefined : "lazy"}
                    fetchPriority={index === 0 ? "high" : undefined}
                  />
                  <div className="absolute bottom-4 left-4 bg-charcoal/90 backdrop-blur-md px-3 py-1.5 border border-white/10 text-[9px] font-bold tracking-[0.2em] text-white uppercase rounded-[2px]">
                    Exterior & Form
                  </div>
                </Link>

                {/* Right Side Stacked Images (Interior + Detail) */}
                <div className="col-span-4 flex flex-col gap-3 md:gap-4">
                  <Link
                    to={`/${project.id}.html`}
                    className="aspect-[4/3] relative overflow-hidden rounded-[2px] border border-white/10 block cursor-pointer shadow-xl transition-all duration-500 hover:border-gold/50 hover:scale-[1.01]"
                  >
                    <img
                      src={`/case-studies/${project.id}/image2.png`}
                      alt={`${project.title} Interior`}
                      className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute bottom-3 left-3 bg-charcoal/80 backdrop-blur-md px-2 py-1 border border-white/10 text-[8px] font-bold tracking-[0.2em] text-white uppercase rounded-[2px] whitespace-nowrap">
                      Interior Space
                    </div>
                  </Link>
                  <Link
                    to={`/${project.id}.html`}
                    className="aspect-[4/3] relative overflow-hidden rounded-[2px] border border-white/10 block cursor-pointer shadow-xl transition-all duration-500 hover:border-gold/50 hover:scale-[1.01]"
                  >
                    <img
                      src={`/case-studies/${project.id}/image3.png`}
                      alt={`${project.title} Detail`}
                      className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute bottom-3 left-3 bg-charcoal/80 backdrop-blur-md px-2 py-1 border border-white/10 text-[8px] font-bold tracking-[0.2em] text-white uppercase rounded-[2px] whitespace-nowrap">
                      Details & Finishes
                    </div>
                  </Link>
                </div>
              </div>

              {/* Case Study Content */}
              <div className="w-full lg:w-2/5 flex flex-col justify-center">
                {/* Visual Label & Sequence Number */}
                <div className="flex items-center gap-3 text-gold text-xs font-bold tracking-[0.3em] uppercase mb-4">
                  <span>0{index + 1} // CASE STUDY</span>
                </div>

                <Link to={`/${project.id}.html`} className="inline-block group-hover:text-gold transition-colors duration-500">
                  <h3 className="text-4xl lg:text-5xl font-black tracking-tight text-white mb-6 group-hover:text-gold transition-colors duration-500 font-heading leading-tight">
                    {project.title}
                  </h3>
                </Link>
                
                {/* Intent Statement - Reduced Text with High Visual Priority */}
                <div className="mb-8 border-l-2 border-gold/40 pl-6">
                  <p className="text-xl text-white/90 leading-relaxed font-sans font-light italic">
                    "{project.intent}"
                  </p>
                </div>

                {/* Structured Metric Cards - Skimmable */}
                <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-8 font-sans">
                  <div className="bg-white/5 border border-white/5 p-4 rounded-[2px] hover:bg-white/10 hover:border-white/10 transition-all duration-300">
                    <div className="flex items-center gap-1.5 text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase mb-1.5">
                      <MapPin size={12} className="text-gold" /> Location
                    </div>
                    <div className="text-base font-bold text-white">{project.location}</div>
                  </div>
                  <div className="bg-white/5 border border-white/5 p-4 rounded-[2px] hover:bg-white/10 hover:border-white/10 transition-all duration-300">
                    <div className="flex items-center gap-1.5 text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase mb-1.5">
                      <Ruler size={12} className="text-gold" /> Scale / Status
                    </div>
                    <div className="text-base font-bold text-white">{project.scale} &bull; {project.status}</div>
                  </div>
                  <div className="col-span-2 bg-white/5 border border-white/5 p-4 rounded-[2px] hover:bg-white/10 hover:border-white/10 transition-all duration-300 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase">
                      <Layers size={12} className="text-gold" /> Materials
                    </div>
                    <div className="text-xs font-bold tracking-[0.15em] text-gold uppercase bg-white/5 px-3 py-1 border border-white/10 rounded-[2px]">
                      {project.materials}
                    </div>
                  </div>
                </div>

                {/* Explore Case Study CTA Link */}
                <div className="mt-8 border-t border-white/5 pt-6">
                  <Link
                    to={`/${project.id}.html`}
                    className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.25em] text-gold hover:text-white uppercase transition-all duration-300 group/link"
                  >
                    <span>View Technical Details</span>
                    <ArrowRight className="group-hover/link:translate-x-1.5 transition-transform duration-300 text-gold group-hover/link:text-white" size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Below Projects */}
        <div className="mt-32 text-center animate-slide-up border-t border-white/10 pt-24" style={{ animationDelay: '0.3s' }}>
          <h3 className="text-4xl font-bold text-white mb-6">Ready to realize your vision?</h3>
          <p className="text-xl text-white/60 font-sans font-medium mb-10 max-w-2xl mx-auto">
            Schedule a private consultation with our architectural directors to begin shaping your legacy.
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="group bg-gold text-charcoal px-12 py-6 text-base font-bold tracking-widest uppercase hover:bg-white transition-all duration-500 inline-flex items-center gap-3 shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] rounded-[2px] font-sans"
          >
            Request a Consultation
            <ArrowRight className="group-hover:translate-x-2 transition-transform" size={22} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
