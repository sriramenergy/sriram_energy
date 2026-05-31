import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SchemeInfo } from './components/SchemeInfo';
import { Trust } from './components/Trust';
import { Benefits } from './components/Benefits';
import { Packages } from './components/Packages';
import { Partners } from './components/Partners';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-brand-green-100 selection:text-brand-green-900 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <SchemeInfo />
        <Trust />
        <Benefits />
        <Packages />
        <Partners />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
