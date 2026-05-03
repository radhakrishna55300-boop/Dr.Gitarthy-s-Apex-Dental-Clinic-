import { ShieldCheck, Heart, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white pt-20 pb-24 md:pb-12 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex flex-col mb-6">
              <span className="font-serif font-bold text-3xl tracking-tight text-brand-900">Dr. Gitarthy’s</span>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-600">Apex Dental Clinic</span>
            </div>
            <p className="text-slate-500 max-w-sm mb-8 leading-relaxed">
              Premium dental care in Guwahati. We combine advanced technology with compassionate care to give you the smile you deserve.
            </p>
            <div className="flex gap-4">
              <div className="flex items-center gap-2 text-rose-500 text-sm font-semibold p-2 bg-rose-50 rounded-lg">
                <Heart size={16} /> Women-Owned
              </div>
              <div className="flex items-center gap-2 text-brand-500 text-sm font-semibold p-2 bg-brand-50 rounded-lg">
                <ShieldCheck size={16} /> LGBTQ+ Friendly
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-4 text-slate-500">
              <li><a href="#services" className="hover:text-brand-600 transition-colors">Our Services</a></li>
              <li><a href="#philosophy" className="hover:text-brand-600 transition-colors">Clinic Philosophy</a></li>
              <li><a href="#gallery" className="hover:text-brand-600 transition-colors">Clinic Gallery</a></li>
              <li><a href="#reviews" className="hover:text-brand-600 transition-colors">Patient Reviews</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm">Find Us</h4>
            <div className="flex gap-3 text-slate-500">
              <MapPin size={20} className="shrink-0 text-brand-400" />
              <p className="text-sm leading-relaxed">
                Hengrabari Rd, Lichubagan,<br />
                Ganeshguri, Guwahati, <br />
                Assam 781036, India
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-400">
          <p>© {new Date().getFullYear()} Dr. Gitarthy’s Apex Dental Clinic. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-600 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
