import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Calendar } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Location', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        <div className="flex flex-col">
          <span className={`font-serif font-bold text-xl sm:text-2xl tracking-tight transition-colors ${scrolled ? 'text-brand-900' : 'text-brand-900 md:text-white lg:text-brand-900'}`}>
            Dr. Gitarthy’s
          </span>
          <span className={`text-[10px] sm:text-xs font-semibold uppercase tracking-widest transition-colors ${scrolled ? 'text-brand-600' : 'text-brand-600 md:text-brand-100 lg:text-brand-600'}`}>
            Apex Dental Clinic
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-sm font-medium hover:text-brand-500 transition-colors ${scrolled ? 'text-slate-600' : 'text-slate-700 md:text-white/90 lg:text-slate-700'}`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="tel:+918473874300"
            className="flex items-center gap-2 bg-brand-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-700 transition-colors shadow-lg shadow-brand-200"
          >
            <Calendar size={16} />
            Book Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-brand-900 hover:bg-brand-50' : 'text-brand-900 bg-white/50 backdrop-blur-sm'}`}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-slate-700 hover:text-brand-600 py-2"
                >
                  {link.name}
                </a>
              ))}
              <hr className="border-slate-100" />
              <div className="flex flex-col gap-3">
                <a 
                  href="tel:+918473874300"
                  className="flex items-center justify-center gap-2 bg-brand-600 text-white p-4 rounded-xl font-bold shadow-lg shadow-brand-100"
                >
                  <Phone size={20} />
                  Call Clinic
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
