import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

export default function WhyBitcoin() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    { id: 1, name: "John Doe", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop", text: "Hay As Majority Of Guys On My Room All Enjoys The Class And They Request Also If They Can Also Attend The Next Class..." },
    { id: 2, name: "Sarah Smith", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop", text: "Thank You I Have Really Enjoyed Today's Class You Are The Best Instructor I Have Had. Thank You So Much For Everything..." },
    { id: 3, name: "Mike Johnson", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop", text: "Bitcoin And Guys On My Office Is VERY Grateful On Your Class. We All Just Want To Make You Grateful On Us And We..." },
    { id: 4, name: "Emma Wilson", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop", text: "The Bitcoin course has completely changed my perspective on money and finance. The instructors are knowledgeable..." },
    { id: 5, name: "David Chen", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop", text: "I never thought I would understand Bitcoin, but this program made it so accessible. Highly recommend to anyone..." }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Logic to get the three required indices
  const getVisibleTestimonialIndices = () => {
    const prevIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    const nextIndex = (currentIndex + 1) % testimonials.length;
    
    // Return the indices, which we will use to grab the data and assign classes
    return [
      { index: prevIndex, role: 'prev' }, 
      { index: currentIndex, role: 'curr' }, 
      { index: nextIndex, role: 'next' }
    ];
  };

  return (
    <div className="bg-black text-white py-20 overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Section Header (Unchanged) */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Why Study <span className="text-yellow-500">Bitcoin?</span>
          </h2>
          <div className="max-w-4xl mx-auto mb-16">
            <div className="relative bg-gradient-to-br from-pink-300 via-pink-200 to-pink-100 rounded-3xl overflow-hidden aspect-video shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-red-600 hover:bg-red-700 transition-colors rounded-full p-6 shadow-xl">
                  <Play className="w-8 h-8 text-white fill-white" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Title (Unchanged) */}
        <div className="text-center mb-24"> 
          <h3 className="text-2xl md:text-3xl font-bold">
            What Our Learners Are Saying!
          </h3>
        </div>

        {/* CAROUSEL CONTAINER - ABSOLUTE POSITIONING METHOD */}
        <div className="relative flex justify-center items-start h-[450px] max-w-6xl mx-auto mb-[px]">

          {/* This central element holds the *active* card and serves as the anchor for the others */}
          <div className="relative flex justify-center items-start h-full"> 
            
            {getVisibleTestimonialIndices().map(({ index, role }) => {
              const testimonial = testimonials[index];
              const isCenter = role === 'curr';
              
              // Base class setup for all cards
              let baseClasses = `
                absolute  top-0 rounded-2xl p-6  shadow-xl transition-all duration-500 ease-in-out
                flex flex-col justify-between items-center text-center
                bg-gray-900 border border-gray-800
              `;

              // Conditional classes for size, layer, and position
              let conditionalClasses;
              if (isCenter) {
                // Center Card: Bigger, Highest Z-index, Full Opacity, Anchored
                conditionalClasses = ' h-[360px] z-20 scale-100 opacity-100 w-[400px]  relative  mx-0';
              } else if (role === 'prev') {
                // Left Card: Wider, Lower Z-index, Absolute Positioned to the left of center
                conditionalClasses = ' h-[320px] z-10 w-[350px] -left-[340px] top-[20px]'; // Positioned left 
              } else { // role === 'next'
                // Right Card: Wider, Lower Z-index, Absolute Positioned to the right of center
                conditionalClasses = ' h-[320px] z-10 w-[350px] -right-[340px] top-[20px]'; // Positioned right
              }

              return (
                <div 
                  key={testimonial.id}
                  className={`${baseClasses} ${conditionalClasses}`}
                >
                  {/* Content Container */}
                  <div className={`flex flex-col pt-8 ${isCenter ? 'items-center' : 'items-center'} `}> {/* Justify content to start for side cards */}
                    {/* Profile Image - Pops out on active card */}
                    <div className={`
                      rounded-full overflow-hidden mb-6 transition-all duration-500
                      w-16 h-16 border-4 border-yellow-500
                    `}>
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Testimonial Text */}
                    <p className={`
                      mb-6 transition-all duration-500
                      ${isCenter ? 'text-gray-300 text-base text-center' : 'text-gray-500 text-sm line-clamp-4 text-left'}
                    `}>
                      {testimonial.text}
                    </p>

                    {/* Name */}
                    <h4 className={`
                      font-bold mb-2
                      ${isCenter ? 'text-white text-lg text-center' : 'text-gray-400 text-left'}
                    `}>
                      {testimonial.name}
                    </h4>

                    {/* Link - Only show on active card */}
                    <div className={`
                      transition-opacity duration-300
                      ${isCenter ? 'opacity-100' : 'opacity-0'}
                    `}>
                      {/* <a href="#" className="text-yellow-500 font-semibold text-sm hover:text-yellow-400 flex items-center gap-1">
                        Special Details <span className="text-lg">→</span>
                      </a> */}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Yellow decoration bar (Unchanged) */}
        {/* <div className="h-12 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-30 rounded-full mx-auto max-w-4xl blur-xl -mt-24 mb-12 pointer-events-none" /> */}

        {/* Controls (Unchanged) */}
        <div className="flex flex-col items-center gap-8">
          {/* Navigation Dots */}
          <div className="flex justify-center gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-yellow-500 w-8' : 'bg-gray-700 w-3 hover:bg-yellow-500/50'
                }`}
              />
            ))}
          </div>

          {/* Arrow Buttons */}
          <div className="flex justify-center gap-6">
            <button 
              onClick={prevSlide}
              className="bg-yellow-500 hover:bg-yellow-400 text-black rounded-full p-4 transition-transform hover:scale-110 shadow-lg"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextSlide}
              className="bg-yellow-500 hover:bg-yellow-400 text-black rounded-full p-4 transition-transform hover:scale-110 shadow-lg"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}