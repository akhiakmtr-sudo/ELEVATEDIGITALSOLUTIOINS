
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HERO_IMAGES = [
  "https://res.cloudinary.com/dufnwlqeq/image/upload/v1766676744/Untitled_1920_x_768_px_1_d3by9y.png",
  "https://res.cloudinary.com/dufnwlqeq/image/upload/v1766679868/Untitled_1920_x_768_px_5_t09g3b.png",
  "https://res.cloudinary.com/dufnwlqeq/image/upload/v1766678851/Untitled_1920_x_768_px_4_rtud08.png",
  "https://res.cloudinary.com/dufnwlqeq/image/upload/v1766682534/Untitled_1920_x_768_px_6_fx6i2g.png",
  "https://res.cloudinary.com/dufnwlqeq/image/upload/v1766678649/Untitled_1920_x_768_px_3_ruxffr.png"
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
    <section 
      id="home" 
      className="relative w-full overflow-hidden group bg-white mt-20 lg:mt-32 aspect-[1920/768] min-h-[220px]"
    >
      {/* Slider Track */}
      <div 
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {HERO_IMAGES.map((src, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 relative">
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
        className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-20 p-1.5 md:p-3 bg-black/20 hover:bg-black/50 text-white rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 border border-white/10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5 md:h-8 md:w-8" />
      </button>
      <button 
        onClick={next}
        className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-20 p-1.5 md:p-3 bg-black/20 hover:bg-black/50 text-white rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 border border-white/10"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5 md:h-8 md:w-8" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2 md:space-x-3">
        {HERO_IMAGES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-1 md:h-1.5 rounded-full transition-all duration-300 ${
              idx === current ? 'bg-white w-6 md:w-10' : 'bg-white/40 w-1 md:w-1.5 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
