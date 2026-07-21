import { useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { LayoutDashboard, ArrowRight } from 'lucide-react'
import Header from './Header'
import Hero from './Hero'
import Stats from './Stats'
import About from './About'
import Projects from './Projects'
import DesignSignatures from './DesignSignatures'
import WorkflowSection from './WorkflowSection'
import TestimonialsSection from './TestimonialsSection'
import TeamSection from './TeamSection'
import ServiceAreas from './ServiceAreas'
import FAQSection from './FAQSection'
import Contact from './Contact'
import Footer from './Footer'

const Home = () => {
  const location = useLocation()

  useEffect(() => {
    const targetSection = location.state?.scrollToSection || (location.state?.scrollToContact ? 'contact' : null)
    if (targetSection) {
      const el = document.getElementById(targetSection)
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 150)
      }
    }
  }, [location])

  return (
    <>
      <Header />
      <Hero />
      <Stats />
      <About />
      <Projects />
      <DesignSignatures />
      <WorkflowSection />
      <TestimonialsSection />
      <TeamSection />
      <ServiceAreas />
      <FAQSection />
      <Contact />
      <Footer />

      {/* Floating Entry Button to Enterprise Platform */}
      <div className="fixed bottom-6 right-6 z-50">
        <Link
          to="/platform"
          className="group flex items-center gap-3 bg-navy text-white hover:bg-navy-mid border-2 border-teal px-5 py-3.5 rounded-2xl shadow-2xl shadow-navy/50 transition-all duration-300 hover:scale-105"
        >
          <div className="w-8 h-8 rounded-xl bg-teal text-navy flex items-center justify-center font-black">
            <LayoutDashboard size={18} />
          </div>
          <div className="flex flex-col text-left leading-none">
            <span className="text-xs font-black text-white group-hover:text-teal transition-colors">Enterprise Platform</span>
            <span className="text-[10px] text-teal font-bold uppercase tracking-wider mt-0.5 flex items-center gap-1">
              Launch Provider OS <ArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </Link>
      </div>
    </>
  )
}

export default Home
