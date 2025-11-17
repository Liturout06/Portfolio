import React from 'react';
import Navigation from '../Components/portfolio/Navigation';
import Hero from '../Components/portfolio/Hero';
import About from '../Components/portfolio/About';
import Projects from '../Components/portfolio/Projects';
import Contact from '../Components/portfolio/Contact';
import Footer from '../Components/portfolio/Footer';

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
