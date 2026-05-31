import { motion } from 'motion/react';

export function Trust() {
  const features = [
    {
      title: "Guaranteed Savings",
      desc: "India's solar company that offers a Savings Guarantee with a money-back promise.",
      image: "https://www.image2url.com/r2/default/images/1779992504044-dd6a859c-809f-499e-862a-3d545f93dff6.jpg"
    },
    {
      title: "Hassle-free Process",
      desc: "Installation, subsidy and service — all handled directly by us. Zero middlemen.",
      image: "https://www.image2url.com/r2/default/images/1779992811251-541d3ee7-8a68-4e31-b988-a1599ab42df3.png"
    },
    {
      title: "Storm-proof Structure",
      desc: "WindPro Mount™ tested for 170 kmph storms — built for India's toughest weather. Approved by IIT Bombay.",
      image: "https://cdn.solarsquare.in/blog/wp-content/uploads/2026/04/28194626/3.webp"
    },
    {
      title: "Reliable After-sales Service",
      desc: "Regular proactive maintenance for steady, year-after-year performance.",
      image: "https://www.image2url.com/r2/default/images/1779992925027-2200adb5-1dff-4ddd-9826-90dc2f47c782.jpg"
    }
  ];

  return (
    <section id="trust" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-14 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 leading-tight">
            Why Families Across<br className="hidden md:block" />
            India Trust Sri Ram Energy
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 gap-y-10">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
              className="group flex flex-col"
            >
              <div className="bg-slate-100 rounded-3xl md:rounded-[2rem] overflow-hidden mb-5 aspect-[4/5] sm:aspect-square w-full">
                <motion.img
                  initial={{ scale: 1.2, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: false, amount: 0.1 }}
                  transition={{ delay: i * 0.1 + 0.1, duration: 0.8, ease: "easeOut" }}
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ delay: i * 0.1 + 0.3, duration: 0.5 }}
                className="flex flex-col flex-grow"
              >
                <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-2 leading-snug">{feature.title}</h3>
                <p className="text-sm md:text-base text-slate-500 leading-relaxed">{feature.desc}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
