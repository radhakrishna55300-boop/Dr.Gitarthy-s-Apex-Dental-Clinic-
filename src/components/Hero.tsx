import { motion } from 'motion/react';
import { Phone, Star, ShieldCheck, Heart } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with Image and Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://lh3.googleusercontent.com/p/AF1QipMM1HAT5N2oJYJ2_KasHd2jP0w0k7FLEei7bUjt=w2000"
          alt="Modern Dental Clinic Interior"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-50/95 via-brand-50/70 to-transparent md:from-brand-50/95 md:via-brand-50/80 lg:from-white/95 lg:via-white/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full py-12 lg:py-24">
        <div className="max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6"
          >
            <ShieldCheck size={16} />
            Highly Rated Dental Clinic in Guwahati
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif text-slate-900 leading-[1.1] mb-6"
          >
            Your Smile deserves <span className="text-brand-600 italic">Expert Care</span> and Comfort.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl"
          >
            Experience pain-free treatments with Guwahati's most trusted name in dental health. We focus on transparent consultation and personalized patient care.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a 
              href="tel:+918473874300"
              className="group flex items-center justify-center gap-3 bg-brand-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-700 transition-all shadow-xl shadow-brand-200"
            >
              <Phone size={20} className="group-hover:rotate-12 transition-transform" />
              Book Appointment
            </a>
            <div className="flex items-center gap-4 px-4">
              <div className="flex -space-x-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-brand-100 flex items-center justify-center text-brand-600 font-bold text-xs">
                    {['J', 'A', 'S'][i-1]}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex text-amber-400">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-xs font-semibold text-slate-500">672+ Happy Patients</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 flex flex-wrap gap-8"
          >
            <div className="flex items-center gap-3 text-slate-600">
              <div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center text-brand-600">
                <Heart size={20} fill="currentColor" />
              </div>
              <span className="text-sm font-medium">LGBTQ+ Friendly</span>
            </div>
            <div className="flex items-center gap-3 text-slate-600">
              <div className="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center text-rose-500">
                <ShieldCheck size={20} fill="currentColor" />
              </div>
              <span className="text-sm font-medium border-rose-100">Women-Owned Clinic</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
