import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from './Header'
import Hero from './Hero'
import Stats from './Stats'
import DesignSignatures from './DesignSignatures'
import Projects from './Projects'
import WorkflowSection from './WorkflowSection'
import ProcessBreakdown from './ProcessBreakdown'
import IntegrationsSection from './IntegrationsSection'
import ComplianceChecklist from './ComplianceChecklist'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'

const Home = () => {
  const location = useLocation()

  useEffect(() => {
    if (location.state?.scrollToContact) {
      const contactSection = document.getElementById('contact')
      if (contactSection) {
        setTimeout(() => {
          contactSection.scrollIntoView({ behavior: 'smooth' })
        }, 150)
      }
    } else if (location.state?.scrollToSection) {
      const targetSection = document.getElementById(location.state.scrollToSection)
      if (targetSection) {
        setTimeout(() => {
          targetSection.scrollIntoView({ behavior: 'smooth' })
        }, 150)
      }
    }
  }, [location])

  return (
    <>
      <Header />
      <Hero />
      <Stats />
      <DesignSignatures />
      <Projects />
      <WorkflowSection />
      <ProcessBreakdown />
      <IntegrationsSection />
      <ComplianceChecklist />
      <About />
      <Contact />
      <Footer />
    </>
  )
}

export default Home
