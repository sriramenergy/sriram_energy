import { Star } from 'lucide-react';

export function Testimonials() {
  const reviews = [
    {
      name: "Ramesh Patnaik",
      amount: "3kW System",
      text: "We used to pay around ₹2,500 monthly for electricity. After getting the 3kW PM Surya Ghar system from Sri Ram Energy, our bill has literally dropped to almost zero! The team was very professional and the subsidy came directly to my bank.",
      rating: 5
    },
    {
      name: "Sasmita Dash",
      amount: "2kW System",
      text: "Excellent service! They completed the survey on Monday and by Friday the panels were up. The net metering process with TPCODL was handled entirely by them. Best investment for our home.",
      rating: 5
    },
    {
      name: "Prakash Mohanty",
      amount: "5kW System",
      text: "I run a small office out of my home, so AC usage was high. Installed a 5kW system using their easy EMI plan. Very transparent pricing, and the build quality is top-notch. Highly recommend to anyone in Odisha.",
      rating: 5
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What Our Odisha Customers Say</h2>
          <p className="text-slate-600">Join hundreds of homeowners who have successfully reduced their electricity bills to zero.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((rev, i) => (
            <div key={i} className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
              <div className="flex text-brand-yellow-400 mb-4">
                {[...Array(rev.rating)].map((_, j) => <Star key={j} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="text-slate-700 italic mb-6">"{rev.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-green-100 text-brand-green-700 font-bold flex items-center justify-center rounded-full">
                  {rev.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-slate-900">{rev.name}</div>
                  <div className="text-xs text-slate-500 font-medium">{rev.amount}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
