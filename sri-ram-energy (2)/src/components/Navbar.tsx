import { useState, useEffect } from 'react';
import { Menu, X, Sun, PhoneCall } from 'lucide-react';
import { motion } from 'motion/react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-slate-200 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 max-w-7xl flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 group">
          <img src="/logo.png" alt="Sri Ram Energy Logo" className="w-[55px] h-[54px] object-contain" />
          <div className="flex flex-col">
            <span className="font-bold text-[28px] bg-white text-left leading-tight tracking-tight text-brand-green-600">
              Sri Ram Energy
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <a href="#scheme" className="text-sm font-medium text-slate-600 hover:text-brand-green-600 transition-colors">PM Surya Ghar</a>
          <a href="#trust" className="text-sm font-medium text-slate-600 hover:text-brand-green-600 transition-colors">Benefit</a>
          <a href="#packages" className="text-sm font-medium text-slate-600 hover:text-brand-green-600 transition-colors">Packages</a>
          <a href="#brands" className="text-sm font-medium text-slate-600 hover:text-brand-green-600 transition-colors">Brands</a>
          <a href="#reviews" className="text-sm font-medium text-slate-600 hover:text-brand-green-600 transition-colors">Reviews</a>
          <a href="#faq" className="text-sm font-medium text-slate-600 hover:text-brand-green-600 transition-colors">FAQ</a>
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+919552625552"
            className="flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-brand-green-600 transition-colors"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Support</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-slate-600"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-lg"
        >
          <nav className="flex flex-col p-4">
            <a onClick={() => setMobileMenuOpen(false)} href="#scheme" className="p-4 border-b border-slate-100 text-slate-700 font-medium">PM Surya Ghar</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#trust" className="p-4 border-b border-slate-100 text-slate-700 font-medium">Benifits</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#packages" className="p-4 border-b border-slate-100 text-slate-700 font-medium">Packages</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#brands" className="p-4 border-b border-slate-100 text-slate-700 font-medium">Brands</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#reviews" className="p-4 border-b border-slate-100 text-slate-700 font-medium">Reviews</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#faq" className="p-4 border-b border-slate-100 text-slate-700 font-medium">FAQ</a>
            <div className="p-4 flex flex-col gap-3">
              <a href="tel:+919552625552" className="bg-slate-100 text-slate-700 text-center py-3 rounded-xl font-medium flex items-center justify-center gap-2">
                <PhoneCall className="w-4 h-4" /> Call Support
              </a>
            </div>
          </nav>
        </motion.div>
      )}
    </header>
  );
}
