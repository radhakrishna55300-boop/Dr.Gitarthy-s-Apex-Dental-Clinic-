import { motion } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Philosophy } from './components/Philosophy';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-100 selection:text-brand-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Philosophy />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      
      {/* Sticky Mobile CTA */}
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 1 }}
        className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-md border-t border-slate-100 md:hidden z-40 flex gap-4"
      >
        <a 
          href="tel:+918473874300"
          className="flex-1 bg-brand-600 text-white text-center py-3 rounded-xl font-semibold shadow-lg shadow-brand-200 active:scale-95 transition-transform"
        >
          Call Now
        </a>
        <a 
          href="#contact"
          className="flex-1 bg-white border-2 border-brand-600 text-brand-600 text-center py-3 rounded-xl font-semibold active:scale-95 transition-transform"
        >
          Book Visit
        </a>
      </motion.div>
    </div>
  );
}
