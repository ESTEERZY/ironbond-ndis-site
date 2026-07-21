import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react'
import { ArrowLeft, ArrowRight, MapPin, Check } from 'lucide-react'
import { motion } from 'framer-motion'
import { projectsData } from '../data/projectsData'

const CaseStudyTemplate = () => {
  const { id } = useParams<{ id: string }>()
  const cleanId = id ? id.replace('.html', '') : ''
  const project = projectsData.find((p) => p.id === cleanId)

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!project) {
    return (
      <div className="min-h-screen bg-navy text-white flex flex-col items-center justify-center p-6">
        <h2 className="text-4xl font-bold font-heading mb-4">Platform Not Found</h2>
        <p className="text-white/60 mb-8 max-w-md text-center">
          The requested NDIS platform solution was not found or is currently being configured.
        </p>
        <Link
          to="/"
          className="group bg-teal text-navy px-8 py-4 text-sm font-bold tracking-widest uppercase hover:bg-teal/90 transition-all duration-500 rounded-[2px]"
        >
          Return to Solutions
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-navy text-white font-sans overflow-x-hidden selection:bg-teal selection:text-navy">
      
      {/* 1. Persistent, Clean Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-navy/90 backdrop-blur-md border-b border-white/10 shadow-sm transition-all duration-300">
        <nav className="container mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-xs font-bold tracking-[0.25em] uppercase text-white/60 hover:text-teal transition-colors duration-300 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1.5 transition-transform duration-300" />
            <span>Back to Solutions</span>
          </Link>
          
          <Link to="/" className="text-2xl font-black tracking-[-0.08em] text-white uppercase flex items-center gap-3">
            NDIS <span className="text-teal">Prototype</span>
          </Link>

          {/* Dummy element to balance flexbox */}
          <div className="hidden md:block w-32 text-right">
            <Link
              to="/"
              state={{ scrollToContact: true }}
              className="text-xs font-bold tracking-wider text-teal hover:text-white uppercase transition-colors duration-300"
            >
              Book a Free Audit
            </Link>
          </div>
        </nav>
      </header>

      {/* 2. Project Hero - Full-Bleed Section */}
      <section className="relative h-screen w-full flex items-end overflow-hidden z-0 bg-navy">
        {/* Full bleed image with smooth pan */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={project.heroImage}
            alt={project.title}
            className="w-full h-full object-cover animate-infinitePan"
          />
          {/* Rich gradient mask layer for typography legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-0 bg-black/35 z-5 pointer-events-none"></div>
        </div>

        {/* Hero Title & Parameters */}
        <div className="relative z-20 container mx-auto px-6 lg:px-12 pb-24 md:pb-32 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 text-teal text-xs font-bold tracking-[0.3em] uppercase mb-4">
              <MapPin size={14} />
              <span>{project.location}</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] mb-6 font-heading">
              {project.title}
            </h1>

            <div className="h-[2px] bg-teal w-24 mb-6"></div>

            <p className="text-lg md:text-xl font-medium tracking-wide text-white/80 max-w-2xl font-sans uppercase">
              Scope: {project.scope}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. The Platform Breakdown Section - 2-Column Structural Grid Layout */}
      <section className="py-32 bg-navy border-t border-white/5 relative z-10">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            
            {/* Left Column: Bold, Minimal Project Overview & Design Intent */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="text-xs font-bold tracking-[0.3em] text-teal uppercase block mb-3">Platform Overview</span>
                <h2 className="text-3xl md:text-5xl font-black font-heading text-white leading-tight">
                  Built for NDIS.<br />Engineered to Comply.
                </h2>
              </div>
              
              <div className="w-16 h-px bg-white/20"></div>

              <p className="text-xl md:text-2xl font-light text-white/90 leading-relaxed font-sans tracking-wide italic border-l-2 border-teal/40 pl-6">
                "{project.overview}"
              </p>

              {/* Scannable Highlights Cards - High visual priority */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
                {project.highlights.map((highlight, idx) => (
                  <div key={idx} className="bg-navy-light border border-white/10 p-5 rounded-[2px] hover:border-teal/30 transition-all duration-300 relative group">
                    <div className="absolute top-4 right-4 text-xs font-bold text-white/10 group-hover:text-teal/25 transition-colors duration-300">
                      0{idx + 1}
                    </div>
                    <div className="w-7 h-7 rounded-full bg-teal/10 flex items-center justify-center text-teal mb-3 shrink-0">
                      <Check size={14} />
                    </div>
                    <p className="text-xs font-semibold text-white/80 leading-relaxed font-sans">
                      {highlight}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Deep-Dive Project Metadata Metrics */}
            <div className="lg:col-span-5 bg-navy-light border border-white/10 p-8 md:p-10 rounded-[2px] shadow-xl relative overflow-hidden">
              {/* Subtle background text */}
              <div className="absolute -right-10 -bottom-10 opacity-[0.03] text-white pointer-events-none font-black text-9xl uppercase font-sans">
                SPEC
              </div>
              
              <h3 className="text-xs font-bold tracking-[0.3em] text-white/50 uppercase mb-8 pb-4 border-b border-white/10">
                Platform Specifications
              </h3>
              
              <div className="space-y-6">
                {project.metrics.map((metric, index) => (
                  <div 
                    key={index}
                    className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 pb-6 border-b border-white/5 last:border-0 last:pb-0"
                  >
                    <span className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase pt-0.5">
                      {metric.label}
                    </span>
                    <span className="text-sm font-semibold text-teal font-sans sm:text-right max-w-sm">
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Platform Delivery Gallery */}
      <section className="py-24 bg-navy-mid border-t border-white/5 relative z-10">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="mb-16">
            <span className="text-xs font-bold tracking-[0.3em] text-teal uppercase block mb-3">Platform Lifecycle</span>
            <h2 className="text-3xl md:text-5xl font-black font-heading text-white">
              Platform Delivery Gallery
            </h2>
          </div>

          {/* 3-Column Lifecycle Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {project.gallery.map((item, idx) => (
              <div key={idx} className="bg-navy-light border border-white/10 rounded-[2px] overflow-hidden flex flex-col h-full hover:border-teal/30 transition-colors duration-500 group">
                <div className="relative aspect-[16/10] overflow-hidden border-b border-white/5 shrink-0">
                  <img
                    src={item.image}
                    alt={item.description}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-103"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-teal text-navy px-3 py-1.5 text-[9px] font-bold tracking-[0.2em] uppercase rounded-[2px] shadow-lg">
                    Stage 0{idx + 1}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                  <div>
                    <span className="text-[9px] font-bold tracking-[0.25em] text-white/40 uppercase block mb-1">platform phase</span>
                    <h3 className="text-xl font-bold font-heading text-teal tracking-wide">
                      {item.type}
                    </h3>
                    <p className="text-sm text-white/70 font-sans leading-relaxed mt-3">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Bottom Action Block - Focused Conversion Area */}
      <section className="relative py-32 bg-navy overflow-hidden z-10">
        {/* Glow backdrop */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-teal/5 rounded-full filter blur-[120px] pointer-events-none"></div>

        <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <span className="text-xs font-bold tracking-[0.3em] text-teal uppercase block mb-4">Ready to Get NDIS Compliant?</span>
            <h2 className="text-4xl md:text-6xl font-bold font-heading mb-6 leading-tight">
              Start Your Free<br />NDIS Audit.
            </h2>
            <p className="text-lg md:text-xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">
              Connect with our NDIS digital specialists to receive a free compliance gap report tailored to your organisation. No obligation. Delivered within 48 hours.
            </p>
            
            <Link
              to="/"
              state={{ scrollToContact: true }}
              className="group bg-teal text-navy px-12 py-6 text-base font-bold tracking-widest uppercase hover:bg-teal/90 transition-all duration-500 inline-flex items-center gap-3 shadow-[0_0_20px_rgba(0,180,216,0.25)] hover:shadow-[0_0_40px_rgba(0,180,216,0.5)] rounded-[2px] font-sans"
            >
              <span>Book a Free Audit</span>
              <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer copyright section for completeness */}
      <footer className="py-12 bg-navy-mid border-t border-white/5 text-center text-xs font-semibold tracking-wider text-white/30 uppercase z-10 relative">
        <div className="container mx-auto px-6">
          © {new Date().getFullYear()} NDIS Prototype. All rights reserved. Compliant by Design. Built for NDIS.
        </div>
      </footer>

    </div>
  )
}

export default CaseStudyTemplate
