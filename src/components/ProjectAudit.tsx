import { ArrowRight } from 'lucide-react'

const ProjectAudit = () => {
  return (
    <section className="py-24 bg-charcoal">
      <div className="container mx-auto px-6 lg:px-12 text-center max-w-4xl">
        <h2 className="text-4xl lg:text-6xl font-black tracking-tighter text-white mb-6">
          Request a Project Audit
        </h2>
        <p className="text-xl text-gray-300 font-medium mb-12">
          Enter your current project URL or website below. Our architectural experts will provide a comprehensive design assessment within 24 hours.
        </p>

        <form className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
          <input
            type="url"
            placeholder="Enter Website URL..."
            className="flex-1 px-6 py-5 bg-white/10 text-white placeholder-white/50 border border-white/20 focus:outline-none focus:border-sand focus:ring-1 focus:ring-sand transition-all duration-500 rounded-[2px]"
            required
          />
          <button
            type="submit"
            className="group bg-sand text-white px-10 py-5 text-base font-black tracking-tight uppercase hover:bg-white hover:text-charcoal transition-all duration-500 inline-flex items-center justify-center gap-3 rounded-[2px] shadow-lg"
          >
            Get Audit
            <ArrowRight className="group-hover:translate-x-2 transition-transform duration-500" size={20} />
          </button>
        </form>
      </div>
    </section>
  )
}

export default ProjectAudit
