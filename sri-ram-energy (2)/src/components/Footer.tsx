import { Sun, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-8 mb-16 border-b border-white/10 pb-16">
          
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2.5 mb-6 opacity-90 hover:opacity-100 transition-opacity">
              <img src="/logo.png" alt="Sri Ram Energy Logo" className="h-10 w-auto object-contain" />
              <div className="flex flex-col">
                <span className="font-bold text-xl tracking-tight leading-tight">Sri Ram Energy</span>
                <span className="text-[10px] font-semibold tracking-widest text-brand-green-400 uppercase">Solar EPC Odisha</span>
              </div>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Odisha's premier Solar EPC providing complete execution for PM Surya Ghar Yojana. We turn rooftops into power plants.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="hover:text-brand-green-400 transition-colors cursor-default">Residential Solar (Rooftop)</li>
              <li className="hover:text-brand-green-400 transition-colors cursor-default">Commercial Solar</li>
              <li className="hover:text-brand-green-400 transition-colors cursor-default">AMC Maintenance</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                 <MapPin className="w-5 h-5 text-brand-green-500 shrink-0 mt-0.5" />
                 <span>Near Sri Ram Book Store, Beside Bus Stand, Kantabanji, Bolangir, Odisha, 767039.</span>
              </li>
              <li className="flex items-center gap-3">
                 <Phone className="w-5 h-5 text-brand-green-500 shrink-0" />
                 <div className="flex flex-col gap-1">
                   <a href="tel:+919552625552" className="hover:text-brand-green-400 transition-colors">+91 95526 25552</a>
                   <a href="tel:+917328818555" className="hover:text-brand-green-400 transition-colors">+91 73288 18555</a>
                 </div>
              </li>
              <li className="flex items-center gap-3">
                 <Mail className="w-5 h-5 text-brand-green-500 shrink-0" />
                 <a href="https://mail.google.com/mail/?view=cm&fs=1&to=contact.sriramenergy@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-green-400 transition-colors">contact.sriramenergy@gmail.com</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Sri Ram Energy. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
