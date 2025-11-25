import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-gradient-to-bl from-orange-100 via-white to-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-xl text-slate-600">Comprehensive solutions for the modern brand.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id}
              className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl overflow-hidden hover:border-indigo-400 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-100 group flex flex-col"
            >
              {service.image && (
                <div className="h-48 overflow-hidden relative">
                   <div className="absolute inset-0 bg-indigo-900/10 group-hover:bg-transparent transition-colors z-10"/>
                   <img 
                     src={service.image} 
                     alt={service.title} 
                     className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                   />
                </div>
              )}
              
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed flex-grow">
                    {service.description}
                </p>
                <ul className="space-y-2 mt-auto">
                    {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-slate-500">
                        <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2 shrink-0"></span>
                        {feature}
                    </li>
                    ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;