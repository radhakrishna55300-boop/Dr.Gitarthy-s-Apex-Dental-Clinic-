import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Mail, ExternalLink, MessageCircle } from 'lucide-react';

export function Contact() {
  const socialLinks = [
    { icon: MessageCircle, name: 'WhatsApp', href: 'https://wa.me/918473874300', color: 'bg-emerald-50 text-emerald-600 hover:bg-emerald-600 hover:text-white' },
    { icon: Phone, name: 'Call Us', href: 'tel:+918473874300', color: 'bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white' },
    { icon: ExternalLink, name: 'Website', href: 'https://apexdentalghy.com', color: 'bg-slate-50 text-slate-600 hover:bg-slate-900 hover:text-white' },
  ];

  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-slate-900 rounded-[3rem] overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Info Side */}
            <div className="flex-1 p-12 lg:p-20">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl text-white mb-8">Reach Out to Us</h2>
                <p className="text-slate-400 text-lg mb-12">
                  Have questions or want to book a visit? Our friendly team is here to help you.
                </p>
              </motion.div>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-600/10 text-brand-500 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Clinic Address</h4>
                    <p className="text-slate-400 leading-relaxed">
                      Hengrabari Rd, near Public Health Chariali, Housing Colony, Lichubagan, Ganeshguri, Guwahati, Assam 781036
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-violet-600/10 text-violet-500 rounded-xl flex items-center justify-center shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Working Hours</h4>
                    <div className="text-slate-400">
                      <p className="flex justify-between w-full min-w-[200px]">
                        <span>Mon – Sat:</span>
                        <span className="text-slate-300 font-medium">10:00 AM – 8:00 PM</span>
                      </p>
                      <p className="flex justify-between w-full">
                        <span>Sunday:</span>
                        <span className="text-rose-500 font-bold uppercase tracking-widest text-[10px] bg-rose-500/10 px-2 py-0.5 rounded">Closed</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-600/10 text-emerald-500 rounded-xl flex items-center justify-center shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Contact Details</h4>
                    <p className="text-slate-400 leading-relaxed">
                      Tel: 084738 74300<br />
                      Web: apexdentalghy.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex gap-4">
                {socialLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${link.color}`}
                    aria-label={link.name}
                  >
                    <link.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Map Side */}
            <div className="flex-1 min-h-[400px] bg-slate-800 relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.4426573886566!2d91.7820121!3d26.1497216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a59335520779d%3A0x63359d9f592397!2sDr.%20Gitarthy's%20Apex%20Dental%20Clinic%20Hengerabari!5e0!3m2!1sen!2sin!4v1714730000000!5m2!1sen!2sin" 
                className="absolute inset-0 w-full h-full border-0 grayscale invert opacity-80"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-slate-900 to-transparent w-32 hidden lg:block" />
              
              <a 
                href="https://maps.app.goo.gl/35pE9f5W8G9HwXhP8"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-8 right-8 bg-white text-slate-900 px-6 py-3 rounded-full font-bold shadow-2xl flex items-center gap-2 hover:bg-brand-50 transition-colors"
              >
                Get Directions
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
