import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HERO_IMAGES = [
  "https://res.cloudinary.com/ditsmq3r6/image/upload/v1764059219/5_Compelling_Reasons_to_Start_Your_Career_as_a_Digital_Marketer_yaaa55.jpg",
  "https://res.cloudinary.com/ditsmq3r6/image/upload/v1764059983/download_ypst99.jpg",
  "https://res.cloudinary.com/ditsmq3r6/image/upload/v1764059983/Want_to_build_website_for_your_business__yxp0xo.jpg",
  "https://res.cloudinary.com/ditsmq3r6/image/upload/v1764059983/_Master_Article_Writing__Tips_for_Engaging_Informative_Content_Creation__jtsziw.jpg",
  "https://res.cloudinary.com/ditsmq3r6/image/upload/v1764059983/_Master_Article_Writing__Tips_for_Engaging_Content_and_SEO_Success__dosxni.jpg"
];

const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent(curr => (curr === 0 ? HERO_IMAGES.length - 1 : curr - 1));
  const next = () => setCurrent(curr => (curr === HERO_IMAGES.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-[calc(100vh-6rem)] mt-24 w-full overflow-hidden group">
      {/* Slider Track */}
      <div 
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {HERO_IMAGES.map((src, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 relative">
             {/* Optional Overlay for consistent brightness, remove if you want raw images */}
             <div className="absolute inset-0 bg-indigo-900/10 mix-blend-multiply z-10" />
            <img 
              src={src} 
              alt={`Slide ${index + 1}`} 
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button 
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/20 hover:bg-white/40 text-white rounded-full backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 border border-white/30 shadow-lg"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-8 w-8" />
      </button>
      <button 
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/20 hover:bg-white/40 text-white rounded-full backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 border border-white/30 shadow-lg"
        aria-label="Next slide"
      >
        <ChevronRight className="h-8 w-8" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {HERO_IMAGES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-2 rounded-full transition-all duration-300 shadow-sm ${
              idx === current ? 'bg-white w-8' : 'bg-white/50 w-2 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;