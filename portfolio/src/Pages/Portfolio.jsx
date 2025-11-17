import React from 'react';
import Navigation from '../components/portfolio/Navigation';
import Hero from '../components/portfolio/Hero';
import About from '../components/portfolio/About';
import Projects from '../components/portfolio/Projects';
import Contact from '../components/portfolio/Contact';
import Footer from '../components/portfolio/Footer';

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
