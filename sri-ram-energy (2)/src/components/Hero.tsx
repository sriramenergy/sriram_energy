import { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2, Sun, ChevronLeft, ChevronRight, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const slides = [
  {
    id: 0,
    badge: "Odisha's Trusted PM Surya Ghar EPC - Sri Ram Energy",
    title1: "Switch To Solar & Reduce Your Electricity Bill",
    desc: "Unlock up to ₹1.38 Lakh total subsidy in Odisha. We provide complete end-to-end solar installations with net-metering and fast 5-day execution.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop",
    overlayLabel: "Max Odisha Subsidy",
    overlayValue: "₹1,38,000",
    icon: <Sun className="w-6 h-6 text-white" />,
    iconBg: "bg-brand-yellow-400"
  },
  {
    id: 1,
    badge: "Commercial & Industrial Solar EPC",
    title1: "Power Your Home With",
    title2: "Sustainable Energy",
    desc: "Maximize your ROI and reduce operational costs with our premium rooftop solar installations tailored for industries, factories, and commercial buildings.",
    image: "https://www.image2url.com/r2/default/images/1779975868065-4a2a5002-3bbb-43f8-afec-6173c4503f9e.jpg",
    overlayLabel: "Finance and EMI",
    overlayValue: "Zero Down Paymant & Zero Mortgage",
    icon: <Zap className="w-4 h-4 text-white" />,
    iconBg: "bg-blue-500"
  },
  {
    id: 2,
    badge: "Hassle-Free Solar Setup",
    title1: "Go Green With Zero",
    title2: "Upfront Costs",
    desc: "Take advantage of easy Zero Down EMI options along with maximum government subsidies. Complete paperwork handled by our local experts.",
    image: "https://www.image2url.com/r2/default/images/1779990292499-7e33d92a-874d-42a1-9446-3756562f26de.jpg",
    overlayLabel: "Get Electricity",
    overlayValue: "Even during Powercut!",
    icon: <Zap className="w-3 h-3 text-white" />,
    iconBg: "bg-blue-500"


  }
];

export function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000); // 3 seconds per slide
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-green-50 via-white to-slate-50 -z-10" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-yellow-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-green-500/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 -z-10" />

      <div className="container mx-auto px-4 max-w-7xl relative">
        
        {/* Navigation Controls */}
        <div className="absolute top-1/2 -translate-y-1/2 right-4 lg:right-0 flex-col gap-2 z-30 hidden md:flex">
          <button onClick={prevSlide} className="p-3 rounded-full bg-white/80 hover:bg-white text-slate-700 shadow-md border border-slate-100 hover:scale-110 transition-all backdrop-blur">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={nextSlide} className="p-3 rounded-full bg-white/80 hover:bg-white text-slate-700 shadow-md border border-slate-100 hover:scale-110 transition-all backdrop-blur">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          <div className="flex-1 text-center lg:text-left w-full min-h-[560px] sm:min-h-[480px] lg:min-h-[460px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="w-full flex flex-col"
              >
                <div className="mb-6 mx-auto lg:mx-0">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-green-50 border border-brand-green-100 text-brand-green-700 text-sm font-semibold text-left">
                    <span className="relative flex h-2 w-2 shrink-0">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green-500"></span>
                    </span>
                    <span className="whitespace-normal sm:whitespace-nowrap">{slides[current].badge}</span>
                  </div>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
                  {slides[current].title1} {slides[current].title2 ? <br className="hidden md:block"/> : null}
                  {slides[current].title2 && <span className="text-brand-green-600 block md:inline mt-2 md:mt-0">{slides[current].title2}</span>}
                </h1>
                
                <p className="text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                  {slides[current].desc}
                </p>

                <div className="flex justify-center lg:justify-start items-center gap-x-6 gap-y-3 flex-wrap text-sm text-slate-600 mb-8 font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-green-500" />
                    <span>25-Year Warranty</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-green-500" />
                    <span>Direct Bank Subsidy</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-green-500" />
                    <span>Zero Down EMI</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <a href="https://wa.me/919552625552?text=Hi!%20I%20am%20interested%20in%20learning%20more%20about%20the%20PM%20Surya%20Ghar%20Solar%20EPC%20installation." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 bg-brand-green-600 hover:bg-brand-green-700 text-white rounded-xl font-semibold transition-all flex items-center justify-center">
                    Book Free Site Survey
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex-1 w-full max-w-[500px] lg:max-w-[440px] xl:max-w-[500px] mx-auto lg:pr-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent rounded-3xl z-10" />
              <div className="aspect-[4/3] lg:aspect-[6/5] bg-slate-200 rounded-3xl overflow-hidden relative shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={current}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    src={slides[current].image} 
                    alt="Solar Installation" 
                    className="absolute inset-0 w-full h-full object-cover" 
                  />
                </AnimatePresence>
                 
                 <AnimatePresence mode="wait">
                   <motion.div 
                     key={current}
                     initial={{ opacity: 0, y: 10 }}
                     animate={{ opacity: 1, y: 0 }}
                     exit={{ opacity: 0, y: -10 }}
                     transition={{ duration: 0.4, delay: 0.2 }}
                     className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 z-20 flex justify-center md:justify-start"
                   >
                     <div className="bg-white/95 backdrop-blur rounded-2xl p-3 shadow-xl border border-white/20 flex items-center gap-3 w-full md:w-max max-w-sm md:max-w-full mx-auto md:mx-0">
                       <div className={`p-2 ${slides[current].iconBg} rounded-xl shrink-0 flex items-center justify-center`}>
                         <div className="scale-75 md:scale-90 origin-center">{slides[current].icon}</div>
                       </div>
                       <div className="min-w-0">
                         <div className="text-slate-500 text-[11px] md:text-xs font-medium uppercase tracking-wider md:normal-case md:tracking-normal truncate">{slides[current].overlayLabel}</div>
                         <div className="text-[12px] sm:text-base md:text-lg font-bold text-slate-900 leading-snug mt-0.5">{slides[current].overlayValue}</div>
                       </div>
                     </div>
                   </motion.div>
                 </AnimatePresence>
              </div>
            </div>
            
            {/* Slide Indicators */}
            <div className="flex items-center justify-center gap-3 mt-8">
               {slides.map((_, i) => (
                 <button 
                   key={i}
                   onClick={() => setCurrent(i)}
                   className={`h-2 transition-all rounded-full ${i === current ? 'w-8 bg-brand-green-600' : 'w-2 bg-brand-green-200 hover:bg-brand-green-400'}`}
                   aria-label={`Go to slide ${i + 1}`}
                 />
               ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
