import { Bolt, PiggyBank, ArrowDownUp } from 'lucide-react';
import { motion } from 'motion/react';

export function SchemeInfo() {
  return (
    <section id="scheme" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-brand-green-600 tracking-widest uppercase mb-3">PM Surya Ghar: Muft Bijli Yojana</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Government Support for Solar Homes in Odisha</h3>
          <p className="text-slate-600 text-lg">
            The Government of India and the Odisha State Government are providing massive subsidies to help you install rooftop solar and generate free electricity up to 300 units per month.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
               icon: PiggyBank,
               title: "Central Subsidy",
               desc: "Up to ₹78,000 direct benefit transfer from the Central Government.",
               color: "text-amber-500",
               bg: "bg-amber-50"
            },
            {
               icon: Bolt,
               title: "Odisha State Top-Up",
               desc: "Additional state subsidy up to ₹60,000 exclusively for Odisha residents.",
               color: "text-brand-green-600",
               bg: "bg-brand-green-50"
            },
            {
               icon: ArrowDownUp,
               title: "Net Metering",
               desc: "Export extra electricity back to your DISCOM grid and earn credits.",
               color: "text-blue-500",
               bg: "bg-blue-50"
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-slate-50 border border-slate-100 text-center hover:shadow-lg transition-shadow"
            >
              <div className={`w-16 h-16 mx-auto ${item.bg} ${item.color} rounded-2xl flex items-center justify-center mb-6`}>
                <item.icon className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h4>
              <p className="text-slate-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto bg-slate-900 rounded-3xl overflow-hidden shadow-2xl text-white">
          <div className="p-8 md:p-10 text-center border-b border-white/10">
            <h3 className="text-2xl font-bold mb-2">Total Subsidy Breakdown (Odisha)</h3>
            <p className="text-slate-400">Maximize your savings with combined central and state benefits</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-white/5 text-slate-300 text-sm uppercase tracking-wider">
                  <th className="px-8 py-5 font-semibold">System Size</th>
                  <th className="px-8 py-5 font-semibold">Central Subsidy</th>
                  <th className="px-8 py-5 font-semibold text-brand-green-400">Odisha Top-Up</th>
                  <th className="px-8 py-5 font-semibold text-amber-400">Total Subsidy</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="px-8 py-5 font-bold">1 kW</td>
                  <td className="px-8 py-5">₹30,000</td>
                  <td className="px-8 py-5 text-brand-green-300">₹25,000</td>
                  <td className="px-8 py-5 text-amber-300 font-bold text-lg">₹55,000</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="px-8 py-5 font-bold">2 kW</td>
                  <td className="px-8 py-5">₹60,000</td>
                  <td className="px-8 py-5 text-brand-green-300">₹50,000</td>
                  <td className="px-8 py-5 text-amber-300 font-bold text-lg">₹1,10,000</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="px-8 py-5 font-bold">3 kW</td>
                  <td className="px-8 py-5">₹78,000</td>
                  <td className="px-8 py-5 text-brand-green-300">₹60,000</td>
                  <td className="px-8 py-5 text-amber-400 font-bold text-xl">₹1,38,000</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="px-8 py-5 font-bold">5 kW</td>
                  <td className="px-8 py-5">₹78,000</td>
                  <td className="px-8 py-5 text-brand-green-300">₹60,000</td>
                  <td className="px-8 py-5 text-amber-400 font-bold text-xl">₹1,38,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
