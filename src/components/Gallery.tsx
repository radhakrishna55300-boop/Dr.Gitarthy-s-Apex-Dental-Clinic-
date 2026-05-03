import { motion } from 'motion/react';

const images = [
  {
    url: 'https://lh3.googleusercontent.com/p/AF1QipMM1HAT5N2oJYJ2_KasHd2jP0w0k7FLEei7bUjt=w800',
    title: 'Warm Clinic Ambience',
    category: 'Clinic'
  },
  {
    url: 'https://lh3.googleusercontent.com/p/AF1QipOfhZ1-j7P1m0sU2-G1D99_z6K6n2x-f6x-j6x=w800',
    title: 'Patient Consultation',
    category: 'Care'
  },
  {
    url: 'https://lh3.googleusercontent.com/p/AF1QipP_5aYID_wZ7hY31-bXpI8jK7_vD5Q9oO7h8sI=w800',
    title: 'High-Tech Treatment Room',
    category: 'Facility'
  },
  {
    url: 'https://lh3.googleusercontent.com/p/AF1QipMTyXlD_V_S9S7K-M_7g9fM7Y6-r9m7s8m-zE8=w800', 
    title: 'Sterilization Unit',
    category: 'Tech'
  }
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 text-slate-900">Inside the Clinic</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Explore our state-of-the-art facility designed for your maximum comfort and safety.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((img, i) => (
            <motion.div 
              key={img.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative h-80 overflow-hidden rounded-[2rem]"
            >
              <img 
                src={img.url} 
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="absolute bottom-6 left-6 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                <p className="text-xs font-bold uppercase tracking-widest text-brand-300 mb-1">{img.category}</p>
                <h4 className="font-bold text-lg">{img.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
