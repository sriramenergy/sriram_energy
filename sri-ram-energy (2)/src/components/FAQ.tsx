import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function FAQ() {
  const faqs = [
    {
      q: "How much subsidy will I get in Odisha?",
      a: "In Odisha, you receive a combined subsidy from both the Central Government and the State Government. For a 1kW system, the total is up to ₹55,000. For a 2kW system, it's ₹1,10,000. For 3kW and above, you get a maximum of ₹1,38,000."
    },
    {
      q: "What is net metering?",
      a: "Net metering is a billing mechanism that credits solar energy system owners for the electricity they add to the grid. If your solar panels produce more electricity than you use, the excess is sent to the DISCOM grid, and you receive a credit on your electricity bill."
    },
    {
      q: "Can I run my AC on solar?",
      a: "Yes! A 2kW system can comfortably support a 1.5 Ton Inverter AC along with standard home appliances (lights, fans, fridge) during sunny hours."
    },
    {
      q: "What happens during power cuts?",
      a: "Under the standard PM Surya Ghar net-metering grid-tied system, the solar system will turn off during grid power cuts for safety reasons (anti-islanding). If you experience frequent power cuts, we can install a hybrid system with battery backup."
    },
    {
      q: "Is there any maintenance required?",
      a: "Solar systems require very little maintenance. You generally just need to clean the solar panels with water once every 15 days to ensure maximum energy generation. Our EPC packages include initial AMC support."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-600">Everything you need to know about the PM Surya Ghar scheme and solar installation.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300 hover:border-brand-green-300">
              <button 
                className="w-full px-6 py-5 flex items-center justify-between text-left font-bold text-slate-900 focus:outline-none"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span>{faq.q}</span>
                <span className="ml-4 shrink-0 bg-slate-50 text-brand-green-600 p-1.5 rounded-full">
                  {openIndex === i ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-slate-600 leading-relaxed pt-2 border-t border-slate-50">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
