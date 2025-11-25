import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-sky-100 via-white to-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-sky-300 to-orange-300 rounded-xl blur-lg opacity-40"></div>
            <img
              src="https://res.cloudinary.com/ditsmq3r6/image/upload/v1764061150/How_to_Build_Professional_Connections_eumygp.jpg"
              alt="Team at work"
              className="relative rounded-xl shadow-2xl border border-slate-100"
            />
          </div>
          
          <div className="mt-12 lg:mt-0">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">
              About Elevate Digital Solutions
            </h2>
            <p className="text-lg text-slate-600 mb-6">
              Founded on the belief that every brand has a unique story, Elevate Digital Solutions is a comprehensive creative agency dedicated to helping businesses find their voice in a crowded digital landscape.
            </p>
            <p className="text-lg text-slate-600 mb-8">
              From crafting pixel-perfect designs to executing complex marketing funnels, our team of experts bridges the gap between artistic vision and commercial success.
            </p>
            
            <div className="space-y-4">
              {[
                'Over 500+ Projects Delivered',
                'Award-winning Design Team',
                'ROI-Focused Strategies',
                '24/7 Client Support'
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle2 className="h-6 w-6 text-indigo-600 flex-shrink-0" />
                  <span className="ml-3 text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;