import { ShieldCheck, HardHat, FileSpreadsheet, Leaf, Banknote, SunDim, ClipboardCheck } from 'lucide-react';

export function Benefits() {
  const benefits = [
    {
      icon: ClipboardCheck,
      title: "Site Survey & System Design",
      desc: "Our engineer inspects your roof and bill, providing an optimized layout and transparent quotation."
    },
    {
      icon: Banknote,
      title: "Easy EMI Support",
      desc: "Zero down payment options and complete financial assistance available with major banks."
    },
    {
      icon: ShieldCheck,
      title: "25-Year Warranty",
      desc: "Tier-1 solar panels with MNRE standard warranties for long-term secure performance."
    },
    {
      icon: Leaf,
      title: "100% Bill Reduction",
      desc: "Generate your own clean energy and say goodbye to rising electricity bills forever."
    }
  ];

  return (
    <section id="benefits" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Choose Us for Your Solar Needs?</h2>
          <p className="text-slate-600">We are a completely integrated Solar EPC company. We don't just sell panels, we deliver working energy solutions.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {benefits.map((b, i) => (
            <div key={i} className="group p-6 lg:p-8 rounded-2xl bg-white border border-slate-100 hover:border-brand-green-200 hover:shadow-xl hover:shadow-brand-green-500/5 transition-all duration-300">
              <div className="w-12 h-12 bg-slate-50 text-slate-700 group-hover:bg-brand-green-50 group-hover:text-brand-green-600 rounded-xl flex items-center justify-center mb-6 transition-colors">
                <b.icon className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">{b.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
