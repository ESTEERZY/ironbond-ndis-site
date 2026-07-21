import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from './Header'
import Hero from './Hero'
import BlueprintToggle from './BlueprintToggle'
import ProcessBreakdown from './ProcessBreakdown'
import Stats from './Stats'
import About from './About'
import DesignSignatures from './DesignSignatures'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'

const Home = () => {
  const location = useLocation()

  useEffect(() => {
    // If state contains scrollToContact, smooth scroll to the contact form block
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
      <Projects />
      <ProcessBreakdown />
      <BlueprintToggle />
      <Stats />
      <About />
      <DesignSignatures />
      <Contact />
      <Footer />
    </>
  )
}

export default Home
