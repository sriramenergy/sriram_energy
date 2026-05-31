import { motion } from 'motion/react';

export function Partners() {
  const partners = [
    { name: "Tata Solar", logo: "https://www.google.com/s2/favicons?domain=tatapowersolar.com&sz=128" },
    { name: "Adani Solar", logo: "https://www.image2url.com/r2/default/images/1779989796877-945e881a-0534-4d05-8be8-2f646978b2f5.png" },
    { name: "Waaree Solar", logo: "https://www.image2url.com/r2/default/images/1779989872636-db580cae-613a-49dc-bf71-bfef1ed97543.png" },
    { name: "UTL Solar", logo: "https://www.google.com/s2/favicons?domain=utlsolar.com&sz=128" },
    { name: "Websol Solar", logo: "https://www.websolenergy.com/wp-content/uploads/2025/07/websol-logo.svg" },
    { name: "Exide", logo: "https://www.image2url.com/r2/default/images/1779990010245-a95a48ee-0c15-4046-87d8-a7d6b891e50d.png" },
    { name: "Luminous", logo: "https://www.image2url.com/r2/default/images/1779990092109-72c0c4d1-857c-4e98-bc84-b761899f16ba.png" },
    { name: "Livguard", logo: "https://www.image2url.com/r2/default/images/1779990439636-bd443cc6-33bb-40df-b309-dc04b98cd925.png" },
  ];

  return (
    <section id="brands" className="py-16 bg-white border-t border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-2">Premium Equipment Partners</h3>
          <p className="text-2xl font-bold text-slate-800">Brands We Deal In</p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
          {partners.map((partner, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col items-center justify-center p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-brand-green-200 hover:bg-brand-green-50/50 hover:-translate-y-1 transition-all duration-300 w-40 h-32 md:w-48 md:h-36 shadow-sm hover:shadow-md cursor-pointer"
              title={partner.name}
            >
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="max-w-full max-h-12 md:max-h-14 object-contain transition-all duration-300"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = `https://ui-avatars.com/api/?name=${partner.name.replace(' ', '+')}&background=f8fafc&color=475569&bold=true&font-size=0.33`;
                }}
              />
              <span className="mt-4 text-xs font-semibold text-slate-500 group-hover:text-brand-green-700 transition-colors uppercase tracking-wider">{partner.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
