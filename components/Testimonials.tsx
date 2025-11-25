import React from 'react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: "Sanjay Rajeev",
    role: "CEO, Technova IT Solutions",
    content: "Elevate Digital Solutions transformed our online presence. Their SEO strategy doubled our traffic in just 3 months! The team is incredibly knowledgeable and responsive.",
    rating: 5
  },
  {
    name: "Arjun Pillai",
    role: "Founder, ShopnCart",
    content: "The branding team is phenomenal. They captured our vision perfectly and delivered a logo and brand identity that truly stands out in the market.",
    rating: 5
  },
  {
    name: "Emmanuel Jaksen",
    role: "MD, Aroma Stores",
    content: "Professional, creative, and cost-effective. Their content marketing services have significantly increased our engagement rates on social media.",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-tr from-sky-100 via-white to-orange-100 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
            What Our Clients Say
          </h2>
          <div className="h-1 w-20 bg-indigo-600 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 relative hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <Quote className="h-12 w-12 text-indigo-50 absolute top-6 right-6" />
              
              <div className="flex space-x-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-slate-600 mb-8 leading-relaxed italic relative z-10">
                "{review.content}"
              </p>

              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg shadow-md">
                  {review.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-slate-900">{review.name}</h4>
                  <p className="text-sm text-slate-500">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;