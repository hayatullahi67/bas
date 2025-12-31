import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Send } from 'lucide-react';

const EducationalHero = () => {
  return (
    
 
     <div className=" bg-black text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-black rounded-full"></span>
              Learn From Anywhere In The World
            </div>

            {/* Heading */}
            <div className="space-y-2">
              <h1 className="text-[20px] md:text-[40px] lg:text-[60px] font-bold">
                STUDY <span className="text-yellow-400">BITCOIN.</span>
              </h1>
              <h1 className="text-[20px] md:text-[40px] lg:text-[60px] font-bold">
                STUDY FREEDOM!
              </h1>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-lg max-w-md">
              Everything you need to start your Bitcoin journey. Guides, tools, and trusted resources to help you learn and grow.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold transition-colors">
                Explore Bitcoin Programs
              </button>
              <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold border border-gray-800 transition-colors">
                Explore Bitcoin Resources
              </button>
            </div>
          </div>

          {/* Right Images Grid (hidden on screens <600px, visible from 600px+) */}
          <div className="hidden min-[600px]:block min-[600px]:relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Top Left - Team working */}
              <div className="relative rounded-2xl w-[269px] h-[280px] overflow-hidden shadow-2xl transform hover:scale-105 transition-transform">
                {/* <div className="absolute top-4 left-4 z-10 bg-green-500 text-white p-2 rounded-full">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div> */}
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop" 
                  alt="Team collaborating" 
                  className="w-full h-64 object-cover"
                />
              </div>

              {/* Top Right - Person in hat */}
              <div className=" hidden min-[600px]:block rounded-2xl w-[280px] h-[400px]  shadow-2xl transform hover:scale-105 transition-transform row-span-2 mt-8">
                <div className=" hidden min-[600px]:absolute bottom-4 left-[40px] z-10 bg-yellow-400 text-black px-3 py-2 rounded-full text-[12px] font-medium flex items-center gap-2">
                  <span className="w-2 h-2 bg-black rounded-full"></span>
                  Learn From Anywhere In The World
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop" 
                  alt="Student learning" 
                  className="w-full h-full "
                />
              </div>

              {/* Bottom Left - Study group */}
              <div className="md:relative rounded-2xl w-[269px] h-[280px] overflow-hidden shadow-2xl transform hover:scale-105 transition-transform">
                <img 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop" 
                  alt="Study group" 
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -z-10 top-1/4 right-0 w-72 h-72 bg-yellow-400 opacity-10 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 bottom-1/4 left-0 w-72 h-72 bg-green-400 opacity-10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationalHero;






