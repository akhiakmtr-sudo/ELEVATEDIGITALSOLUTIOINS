import React from 'react';
import { Target, Eye } from 'lucide-react';

const MissionVision: React.FC = () => {
  return (
    <section id="mission" className="py-24 relative overflow-hidden bg-gradient-to-r from-sky-100 via-white to-orange-100">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-sky-200/40 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-orange-200/40 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Mission Card */}
          <div className="group relative bg-white rounded-[2rem] p-10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100 overflow-hidden">
             {/* Hover Gradient Border Effect */}
             <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             
             {/* Decorative Icon Background */}
             <div className="absolute -right-10 -top-10 w-40 h-40 bg-indigo-50 rounded-full blur-2xl group-hover:bg-indigo-100 transition-colors duration-500" />
             
             <div className="relative">
                <div className="inline-flex items-center justify-center p-4 bg-indigo-50 rounded-2xl mb-8 group-hover:bg-indigo-600 transition-colors duration-500 shadow-sm">
                  <Target className="h-8 w-8 text-indigo-600 group-hover:text-white transition-colors duration-500" />
                </div>
                
                <h3 className="text-3xl font-bold text-slate-900 mb-6 group-hover:text-indigo-600 transition-colors duration-300">
                  Our Mission
                </h3>
                
                <p className="text-slate-600 text-lg leading-relaxed group-hover:text-slate-700">
                   To empower businesses by providing innovative, data-driven digital solutions that elevate their brand presence. We strive to democratize high-quality design and marketing, making premium growth strategies accessible to ambitious companies of all sizes.
                </p>
             </div>
          </div>

          {/* Vision Card */}
          <div className="group relative bg-white rounded-[2rem] p-10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100 overflow-hidden">
             {/* Hover Gradient Border Effect */}
             <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

             {/* Decorative Icon Background */}
             <div className="absolute -right-10 -top-10 w-40 h-40 bg-purple-50 rounded-full blur-2xl group-hover:bg-purple-100 transition-colors duration-500" />

             <div className="relative">
                <div className="inline-flex items-center justify-center p-4 bg-purple-50 rounded-2xl mb-8 group-hover:bg-purple-600 transition-colors duration-500 shadow-sm">
                  <Eye className="h-8 w-8 text-purple-600 group-hover:text-white transition-colors duration-500" />
                </div>
                
                <h3 className="text-3xl font-bold text-slate-900 mb-6 group-hover:text-purple-600 transition-colors duration-300">
                  Our Vision
                </h3>
                
                <p className="text-slate-600 text-lg leading-relaxed group-hover:text-slate-700">
                  To be the global catalyst for digital transformation, recognized for our creativity, integrity, and ability to turn complex challenges into simple, beautiful, and profitable results for our partners worldwide.
                </p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MissionVision;