import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const TestimonialCarousel = ({ testimonials = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const prevTestimonial = () => {
    setCurrentIndex((i) => (testimonials && testimonials.length ? (i - 1 + testimonials.length) % testimonials.length : 0));
  };
  const nextTestimonial = () => {
    setCurrentIndex((i) => (testimonials && testimonials.length ? (i + 1) % testimonials.length : 0));
  };

  useEffect(() => {
    if (!testimonials || testimonials.length === 0) return;
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, testimonials]);

  if (!testimonials || testimonials.length === 0) return null;

  return (
    <div
      className="relative  md:w-[40%] m-[auto] overflow-visible"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onKeyDown={(e) => { if (e.key === 'ArrowLeft') prevTestimonial(); if (e.key === 'ArrowRight') nextTestimonial(); }}
      tabIndex={0}
    >
      <button
        onClick={prevTestimonial}
        aria-label="Previous testimonial"
        className="absolute -left-6 md:-left-10 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-gray-800/70 hover:bg-yellow-500 flex items-center justify-center text-white transition-colors duration-200 shadow-lg"
      >
        <ArrowRight className="rotate-180" size={18} />
      </button>

      <button
        onClick={nextTestimonial}
        aria-label="Next testimonial"
        className="absolute -right-6 md:-right-10 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-gray-800/70 hover:bg-yellow-500 flex items-center justify-center text-white transition-colors duration-200 shadow-lg"
      >
        <ArrowRight size={18} />
      </button>

      <div className="overflow-hidden rounded-2xl">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
            <div className="max-w-3xl mx-auto p-8 bg-gray-900 border border-gray-800 rounded-xl hover:border-yellow-500 transition-colors duration-300">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 rounded-full bg-yellow-500 flex items-center justify-center text-black font-bold text-lg">{testimonial.avatar}</div>
                <div className="ml-4">
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.location}</div>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed italic text-lg">"{testimonial.text}"</p>
            </div>
          </div>
        ))}
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-yellow-500 w-8' : 'bg-gray-700 hover:bg-gray-600'}`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
