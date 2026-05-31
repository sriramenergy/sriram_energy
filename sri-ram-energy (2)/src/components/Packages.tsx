import { Check } from 'lucide-react';

export function Packages() {
  const packages = [
    {
      size: "1 kW",
      ideal: "Small Homes (1-2 BHK)",
      subsidy: "₹55,000",
      featured: false
    },
    {
      size: "2 kW",
      ideal: "Medium Family (2-3 BHK)",
      subsidy: "₹1,10,000",
      featured: false
    },
    {
      size: "3 kW",
      ideal: "Large Homes (3-4 BHK)",
      subsidy: "₹1,38,000",
      featured: true
    },
    {
      size: "5 kW+",
      ideal: "Villas & Small Business",
      subsidy: "₹1,38,000",
      featured: false
    }
  ];

  return (
    <section id="packages" className="py-24 bg-slate-50 border-y border-slate-200">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Popular Solar Packages</h2>
          <p className="text-slate-600">Explore complete PM Surya Ghar eligible system packages designed for standard household requirements.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {packages.map((pkg, i) => (
            <div 
              key={i} 
              className={`relative rounded-3xl p-8 transition-all duration-300 ${pkg.featured ? 'bg-brand-green-600 text-white shadow-xl shadow-brand-green-600/20 lg:-translate-y-4' : 'bg-white text-slate-900 border border-slate-100 hover:shadow-lg hover:-translate-y-1'}`}
            >
              {pkg.featured && (
                <div className="absolute -top-4 inset-x-0 flex justify-center">
                   <div className="bg-brand-yellow-400 text-brand-yellow-900 text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-sm">
                     Most Popular
                   </div>
                </div>
              )}

              <h3 className="text-3xl font-bold mb-1">{pkg.size}</h3>
              <p className={`text-sm font-medium mb-8 pb-8 border-b ${pkg.featured ? 'text-brand-green-100 border-brand-green-500' : 'text-slate-500 border-slate-100'}`}>
                {pkg.ideal}
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Check className={`w-5 h-5 shrink-0 mt-0.5 ${pkg.featured ? 'text-brand-green-200' : 'text-brand-green-600'}`} />
                  <div>
                     <span className={`block text-xs font-semibold uppercase tracking-wider mb-1 ${pkg.featured ? 'text-brand-green-200' : 'text-slate-400'}`}>Max Subsidy</span>
                     <span className={`font-bold ${pkg.featured ? 'text-brand-yellow-300' : 'text-brand-green-600'}`}>{pkg.subsidy}</span>
                  </div>
                </div>

              </div>

              <a 
                href="https://wa.me/919552625552?text=Hi!%20I%20am%20interested%20in%20learning%20more%20about%20the%20PM%20Surya%20Ghar%20Solar%20EPC%20installation."
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full text-center py-3.5 rounded-xl font-bold transition-colors ${pkg.featured ? 'bg-white text-brand-green-700 hover:bg-slate-50' : 'bg-slate-100 text-slate-800 hover:bg-slate-200'}`}
              >
                Get Quote
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
