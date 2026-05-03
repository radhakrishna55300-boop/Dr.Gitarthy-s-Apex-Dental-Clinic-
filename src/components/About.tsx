import { motion } from 'motion/react';
import { Award, GraduationCap, Users, Heart } from 'lucide-react';

export function About() {
  const stats = [
    { icon: Users, label: 'Happy Patients', value: '600+' },
    { icon: Award, label: 'Years Experience', value: '10+' },
    { icon: Heart, label: 'Success Rate', value: '99%' },
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Doctor Image Profile */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl shadow-brand-200 border-8 border-white">
              <img 
                src="https://lh3.googleusercontent.com/p/AF1QipPboaaRtzwCYDXUl6_6jSOE7tDMesRY-YyPwQHP=w1200" 
                alt="Dr. Gitarthy - Lead Dentist"
                className="w-full aspect-[4/5] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-100 rounded-full blur-3xl opacity-60 z-0" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-brand-50 rounded-full blur-3xl opacity-60 z-0" />
            
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: 'spring' }}
              className="absolute -bottom-6 -right-6 bg-brand-600 text-white p-6 rounded-2xl shadow-xl z-20"
            >
              <div className="flex items-center gap-2 mb-1">
                <GraduationCap size={20} />
                <span className="font-bold text-sm uppercase tracking-wider">Lead Dentist</span>
              </div>
              <p className="text-xl font-bold">Dr. Gitarthy</p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <div className="flex-1">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl mb-6">
                Meet the Heart of <span className="text-brand-600 italic">Apex Dental</span>
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Dr. Gitarthy believes that every smile tells a story. With a focus on pain-free treatments and transparent consultation, he has transformed Apex Dental Clinic into Guwahati's most trusted dental destination.
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="flex gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-600 shrink-0">
                    <Heart size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Patient-First Philosophy</h4>
                    <p className="text-sm text-slate-500">Treating people, not just teeth. We prioritize your comfort above all else.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-600 shrink-0">
                    <Award size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Advanced Expertise</h4>
                    <p className="text-sm text-slate-500">Continuously updating our methods to bring you the best in modern dental technology.</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat, i) => (
                  <div key={stat.label} className="text-center p-4 rounded-2xl bg-brand-50/50">
                    <p className="text-2xl font-bold text-brand-900">{stat.value}</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-brand-600 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
