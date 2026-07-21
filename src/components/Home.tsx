import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
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
    </>
  )
}

export default Home
