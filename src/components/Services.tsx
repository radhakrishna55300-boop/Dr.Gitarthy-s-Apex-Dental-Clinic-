import { motion } from 'motion/react';
import { 
  Smile, 
  Droplets, 
  Sparkles, 
  ClipboardList, 
  ShieldCheck, 
  Zap 
} from 'lucide-react';

const services = [
  {
    title: 'Tooth Extraction',
    description: 'Painless and safe extraction procedures using latest local anesthesia techniques.',
    icon: Droplets,
    color: 'bg-blue-50 text-blue-600'
  },
  {
    title: 'Cleaning & Scaling',
    description: 'Professional plaque and tartar removal to keep your gums healthy and breath fresh.',
    icon: Zap,
    color: 'bg-emerald-50 text-emerald-600'
  },
  {
    title: 'Cosmetic Dentistry',
    description: 'Smile makeovers including whitening, veneers, and aesthetic restorations.',
    icon: Sparkles,
    color: 'bg-rose-50 text-rose-600'
  },
  {
    title: 'General Consultation',
    description: 'Comprehensive oral checkups with transparent treatment plans.',
    icon: ClipboardList,
    color: 'bg-brand-50 text-brand-600'
  },
  {
    title: 'Preventive Care',
    description: 'Regular checkups and treatments to stop dental issues before they start.',
    icon: ShieldCheck,
    color: 'bg-amber-50 text-amber-600'
  },
  {
    title: 'Pain Relief',
    description: 'Emergency dental services focused on immediate pain management and relief.',
    icon: Smile,
    color: 'bg-purple-50 text-purple-600'
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl mb-6"
          >
            Our Comprehensive Oral Care
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 text-lg"
          >
            We provide a wide range of dental services tailored to your specific needs, ensuring the best outcomes for your oral health.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-3xl bg-white border border-slate-100 hover:shadow-xl hover:shadow-brand-500/5 transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon size={28} />
              </div>
              <h3 className="text-2xl mb-3 text-slate-900">{service.title}</h3>
              <p className="text-slate-500 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
