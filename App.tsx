import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import About from './components/About';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import CTABanner from './components/CTABanner';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <WhyChooseUs />
        <About />
        <Projects />
        <Testimonials />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;