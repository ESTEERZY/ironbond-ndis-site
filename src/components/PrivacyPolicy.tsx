import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import Header from './Header'
import Footer from './Footer'

const PrivacyPolicy = () => {
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
          <span className="text-xs font-bold tracking-[0.3em] text-gold uppercase block mb-3">Legal Documentation</span>
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-8">Privacy Policy</h1>
          <div className="w-16 h-[2px] bg-gold mb-12"></div>
          
          <div className="space-y-8 text-white/70 leading-relaxed font-medium">
            <p>
              Last Updated: May 21, 2026
            </p>
            
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider font-heading">1. Information We Collect</h2>
              <p>
                At Apex Architecture, we collect personal information that you directly provide to us, including your name, email address, phone number, and architectural project details. We also collect anonymous site usage statistics to improve your browsing experience.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider font-heading">2. How We Use Your Information</h2>
              <p>
                We use the information we collect to manage and schedule design consultations, customize our project presentations, respond to your inquiries, and fulfill our contractual agreements. We do not sell or lease your personal information to third parties.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider font-heading">3. Security of Your Data</h2>
              <p>
                We implement industry-standard administrative, technical, and physical security measures to protect your information against unauthorized access, destruction, or disclosure.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider font-heading">4. Contact Us</h2>
              <p>
                If you have any questions or concerns regarding this Privacy Policy, please reach out to our office at:
              </p>
              <p className="text-gold font-sans">
                Email: info@apexarchitecture.com<br />
                Phone: (555) 123-4567
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

export default PrivacyPolicy
