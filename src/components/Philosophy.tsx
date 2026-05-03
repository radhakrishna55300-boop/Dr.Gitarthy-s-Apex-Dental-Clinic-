import { motion } from 'motion/react';
import { MessageSquare, HeartHandshake, SearchCheck, BrainCircuit } from 'lucide-react';

export function Philosophy() {
  const points = [
    {
      title: 'Accurate Diagnosis',
      description: 'Understanding your exact symptoms helps us provide the most efficient treatment.',
      icon: SearchCheck
    },
    {
      title: 'Reduced Anxiety',
      description: 'Transparent communication is our best tool against dental phobia.',
      icon: HeartHandshake
    },
    {
      title: 'Clear Treatment Plans',
      description: 'We explain the "why" and "how" of every procedure before we begin.',
      icon: BrainCircuit
    },
    {
      title: 'Long-lasting Results',
      description: 'Better understanding leads to better home care and enduring health.',
      icon: MessageSquare
    }
  ];

  return (
    <section id="philosophy" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1000"
                alt="Dentist talking with patient"
                className="rounded-[2.5rem] shadow-2xl relative z-10"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-100 rounded-full blur-3xl opacity-50 z-0" />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-200 rounded-full blur-3xl opacity-50 z-0" />
              
              {/* Floating Stat */}
              <div className="absolute -bottom-8 left-8 bg-white p-6 rounded-2xl shadow-xl z-20 flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center font-bold text-xl">4.9</div>
                <div>
                  <p className="font-bold text-slate-800">Avg. Rating</p>
                  <p className="text-xs text-slate-500 font-medium whitespace-nowrap">From 672+ verified patients</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="flex-1">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl mb-8">
                🗣️ Patient & Doctor Communication – <span className="text-brand-600">The Key to Better Treatment</span>
              </h2>
              <p className="text-slate-600 text-lg mb-10 leading-relaxed">
                Great dental care begins with listening, not just treatment. We believe that when a patient understands the procedure and feels heard, the healing process is much smoother.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {points.map((point, index) => (
                <motion.div 
                  key={point.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:border-brand-200 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-4">
                    <point.icon size={24} />
                  </div>
                  <h4 className="text-lg font-bold mb-2 text-slate-900">{point.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {point.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-12 p-8 rounded-3xl bg-slate-900 text-white relative overflow-hidden group"
            >
              <div className="relative z-10">
                <h4 className="text-xl font-bold mb-4">Your Role in Treatment:</h4>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-brand-400 rounded-full" />
                    Clearly explain your symptoms
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-brand-400 rounded-full" />
                    Ask questions freely
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-brand-400 rounded-full" />
                    Share medical history honestly
                  </li>
                </ul>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-600 blur-[80px] opacity-20 transition-opacity group-hover:opacity-40" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
