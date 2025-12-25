
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HERO_IMAGES = [
  "https://res.cloudinary.com/dufnwlqeq/image/upload/v1766674282/WhatsApp_Image_2025-12-25_at_20.18.26_r2u3vx.jpg",
  "https://res.cloudinary.com/dufnwlqeq/image/upload/v1766674281/WhatsApp_Image_2025-12-25_at_20.18.28_mta0wc.jpg",
  "https://res.cloudinary.com/dufnwlqeq/image/upload/v1766674281/WhatsApp_Image_2025-12-25_at_20.18.27_1_c5xb3v.jpg",
  "https://res.cloudinary.com/dufnwlqeq/image/upload/v1766674280/WhatsApp_Image_2025-12-25_at_20.18.27_2_vwimj7.jpg",
  "https://res.cloudinary.com/dufnwlqeq/image/upload/v1766674279/WhatsApp_Image_2025-12-25_at_20.18.27_3_kcbzjv.jpg"
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
    <section id="home" className="relative h-[45vh] md:h-[calc(100vh-10rem)] mt-20 lg:mt-32 w-full overflow-hidden group">
      {/* Slider Track */}
      <div 
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {HERO_IMAGES.map((src, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 relative">
             <div className="absolute inset-0 bg-black/10 z-10" />
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
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 bg-black/30 hover:bg-black/50 text-white rounded-full backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 border border-white/20 shadow-lg"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 md:h-8 md:w-8" />
      </button>
      <button 
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 bg-black/30 hover:bg-black/50 text-white rounded-full backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 border border-white/20 shadow-lg"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 md:h-8 md:w-8" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2 md:space-x-3">
        {HERO_IMAGES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-1.5 md:h-2 rounded-full transition-all duration-300 shadow-sm ${
              idx === current ? 'bg-white w-6 md:w-8' : 'bg-white/50 w-1.5 md:w-2 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
