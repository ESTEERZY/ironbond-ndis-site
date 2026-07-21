import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import Header from './Header'
import Footer from './Footer'

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Header />
      <main className="min-h-screen bg-charcoal text-white pt-32 pb-24 font-sans">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-white/50 hover:text-gold transition-all duration-300 group mb-8"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1.5 transition-transform duration-300" />
            <span>Back to Home</span>
          </Link>
          <span className="text-xs font-bold tracking-[0.3em] text-gold uppercase block mb-3">Legal Agreement</span>
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-8">Terms of Service</h1>
          <div className="w-16 h-[2px] bg-gold mb-12"></div>
          
          <div className="space-y-8 text-white/70 leading-relaxed font-medium">
            <p>
              Last Updated: May 21, 2026
            </p>
            
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider font-heading">1. Acceptance of Terms</h2>
              <p>
                By accessing and using this website, you agree to comply with and be bound by these Terms of Service. If you do not agree, please do not use the website.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider font-heading">2. Intellectual Property</h2>
              <p>
                All designs, images, text, and source code are the exclusive property of Apex Architecture. You may not copy, distribute, or modify any content without explicit written consent.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider font-heading">3. Consultations and Services</h2>
              <p>
                Scheduling a consultation via this site is a preliminary request and does not constitute a formal design or construction agreement. All formal projects require a separate, physical contract signed by both parties.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider font-heading">4. Liability Limitation</h2>
              <p>
                Apex Architecture is not liable for any direct or indirect damages resulting from the use or inability to use this website.
              </p>
            </section>
          </div>
          
          <div className="mt-16 pt-12 border-t border-white/10 flex justify-start">
            <Link
              to="/"
              className="group bg-white/5 text-white border border-white/10 hover:border-gold hover:bg-gold hover:text-charcoal px-8 py-4 text-xs font-bold tracking-[0.25em] uppercase transition-all duration-500 inline-flex items-center gap-2 rounded-[2px]"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1.5 transition-transform duration-300" />
              <span>Return to Home Page</span>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default TermsOfService
