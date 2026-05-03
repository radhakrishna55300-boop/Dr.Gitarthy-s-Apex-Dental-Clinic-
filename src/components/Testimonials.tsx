import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    text: "Best dental experience with fair pricing. The clinic is clean and Dr. Gitarthy is very professional.",
    author: "Rahul S.",
    rating: 5,
    tag: "Patient Communication"
  },
  {
    text: "Smooth and painless tooth extraction. I was very anxious but the doctor made me feel very comfortable.",
    author: "Priya B.",
    rating: 5,
    tag: "Tooth Extraction"
  },
  {
    text: "Very friendly doctor and excellent communication. He explains everything clearly before starting.",
    author: "Amit K.",
    rating: 5,
    tag: "General Checkup"
  }
];

export function Testimonials() {
  return (
    <section id="reviews" className="py-24 bg-brand-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl mb-6">Trusted by Guwahati's Families</h2>
            <p className="text-slate-600 text-lg">
              Over 600+ patients have trusted us with their smiles. Here is what they have to say about their experience at Apex Dental.
            </p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-3xl shadow-xl shadow-brand-500/5 rotate-3 md:mb-4">
            <div className="flex text-amber-400 mb-2">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} size={24} fill="currentColor" />) }
            </div>
            <p className="font-bold text-2xl text-slate-800 tracking-tight">4.9 / 5.0</p>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Google Reviews</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div 
              key={t.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-[2rem] shadow-sm relative group hover:shadow-xl transition-shadow"
            >
              <div className="absolute top-6 right-8 text-brand-100 group-hover:text-brand-200 transition-colors">
                <Quote size={40} fill="currentColor" />
              </div>
              
              <div className="flex text-amber-400 mb-6">
                {[1, 2, 3, 4, 5].map(star => <Star key={star} size={16} fill="currentColor" />)}
              </div>

              <p className="text-lg text-slate-700 leading-relaxed mb-8 italic">
                "{t.text}"
              </p>

              <div className="flex items-center justify-between border-t border-slate-50 pt-6">
                <div>
                  <p className="font-bold text-slate-900">{t.author}</p>
                  <p className="text-xs font-medium text-brand-500">{t.tag}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="https://www.google.com/search?q=Dr.+Gitarthy%E2%80%99s+Apex+Dental+Clinic+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-brand-600 font-bold hover:underline"
          >
            Read all 672+ Google Reviews
          </a>
        </div>
      </div>
    </section>
  );
}
