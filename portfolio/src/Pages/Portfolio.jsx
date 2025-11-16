import Navigation from '../Components/portfolio/Navigation.jsx'
import Hero from '../Components/portfolio/Hero.jsx'
import About from '../Components/portfolio/About.jsx'
import Projects from '../Components/portfolio/Projects.jsx'
import Contact from '../Components/portfolio/Contact.jsx'
import Footer from '../Components/portfolio/Footer.jsx'

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
