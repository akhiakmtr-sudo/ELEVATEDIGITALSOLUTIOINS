import React from 'react';
import { Users, TrendingUp, Wallet, Award, HeartHandshake } from 'lucide-react';

const features = [
  {
    title: "Highly Experienced Team",
    description: "Our diverse team of industry veterans brings years of expertise in digital strategy, design, and development to every project.",
    icon: Users,
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Cost-Effective Solutions",
    description: "We believe in premium quality without the premium price tag. Our scalable packages are designed to fit businesses of all sizes.",
    icon: Wallet,
    color: "bg-green-50 text-green-600"
  },
  {
    title: "Data-Driven Results",
    description: "We don't guess; we analyze. Every campaign is backed by real-time data and analytics to maximize your ROI.",
    icon: TrendingUp,
    color: "bg-purple-50 text-purple-600"
  },
  {
    title: "Creative Excellence",
    description: "From pixel-perfect designs to compelling copy, we craft unique brand experiences that capture attention and drive engagement.",
    icon: Award,
    color: "bg-orange-50 text-orange-600"
  },
  {
    title: "Client-Centric Approach",
    description: "Your success is our priority. We offer dedicated support, transparent reporting, and strategies tailored specifically to your goals.",
    icon: HeartHandshake,
    color: "bg-pink-50 text-pink-600"
  }
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-orange-100/70 via-white to-sky-100/70 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-sky-200 rounded-full blur-3xl opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-orange-200 rounded-full blur-3xl opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">
              Why Choose Us?
            </h2>
            <div className="h-1 w-20 bg-indigo-600 mx-auto rounded-full mb-8" />
          </div>
          <p className="text-lg text-slate-600 leading-relaxed text-justify hyphens-auto">
            At Elevate Digital Solutions, we bridge the gap between creative vision and business ROI. 
            Our highly experienced team leverages deep industry insights to deliver cost-effective, 
            high-impact digital marketing and branding strategies. We understand that every penny counts, 
            which is why we focus on scalable solutions that provide tangible growth for your business, 
            ensuring you stay ahead of the curve without overspending.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 border border-slate-100 shadow-lg hover:shadow-2xl hover:shadow-indigo-100 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 ${feature.color.split(' ')[0]} rounded-bl-full opacity-10 group-hover:scale-110 transition-transform duration-500`} />
              
              <div className={`inline-flex items-center justify-center p-3 rounded-xl ${feature.color} mb-6 relative z-10`}>
                <feature.icon className="h-6 w-6" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3 relative z-10 group-hover:text-indigo-600 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed relative z-10 text-justify">
                {feature.description}
              </p>
            </div>
          ))}
          
          {/* Call to Action Card embedded in grid */}
          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-8 text-white shadow-xl flex flex-col justify-center items-center text-center transform hover:scale-[1.02] transition-transform duration-300">
            <h3 className="text-2xl font-bold mb-4">Ready to Grow?</h3>
            <p className="text-indigo-100 mb-8">
              Let's discuss how we can elevate your brand together.
            </p>
            <a 
              href="#contact" 
              className="px-6 py-3 bg-white text-indigo-600 font-bold rounded-full shadow-md hover:bg-indigo-50 transition-colors"
            >
              Get Started Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;