import React from "react";
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 z-0"
          style={{
           
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/80" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black" />
        </div>

        {/* Hero Content - two column layout */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            {/* Left: Text content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <div className="inline-block mt-[30px] mb-6 px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full">
                <span className="text-yellow-500 text-sm font-semibold">Spreading High Quality Signal from the Noise</span>
              </div>

              <h1 className="text-2xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
                Learn Bitcoin.
                <br />
                <span className="text-yellow-500">Change Your Life.</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
                Empowering Africans through Bitcoin education and financial freedom.
                Join the movement towards self-sovereignty.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6">
                <Link
                  to="/blog"
                  className="inline-flex items-center justify-center px-8 py-4 bg-yellow-500 text-black font-bold text-lg rounded-lg hover:bg-yellow-400 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-yellow-500/50"
                >
                  Start Learning
                  <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-yellow-500 text-yellow-500 font-bold text-lg rounded-lg hover:bg-yellow-500 hover:text-black transition-all duration-200"
                >
                  Our Mission
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-6 max-w-md mx-auto lg:mx-0">
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-yellow-500 mb-1">2+</div>
                  <div className="text-gray-400 text-sm">Years Teaching</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-yellow-500 mb-1">500+</div>
                  <div className="text-gray-400 text-sm">Students Reached</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-yellow-500 mb-1">50+</div>
                  <div className="text-gray-400 text-sm">Communities</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-yellow-500 mb-1">100%</div>
                  <div className="text-gray-400 text-sm">Free Education</div>
                </div>
              </div>
            </div>

            {/* Right: Image collage */}
            <div className="w-full max-md:hidden lg:w-1/2 flex items-center justify-center">
              <div className="relative w-[460px] h-[300px] lg:w-[520px] lg:h-[360px]">
                {/* Large top-right image */}
                <div className="absolute right-0 top-0 w-[320px] h-[240px] lg:w-[360px] lg:h-[270px] rounded-2xl overflow-hidden border border-gray-800 shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=1000&q=80"
                    alt="student-1"
                    className="w-full h-full object-cover grayscale-[10%]"
                  />
                </div>

                {/* Large bottom-left image */}
                <div className="absolute left-0 bottom-[-70px] w-[300px] h-[260px] lg:w-[340px] lg:h-[300px] rounded-2xl overflow-hidden border border-gray-800 shadow-xl transform -translate-y-6 lg:-translate-y-8">
                  <img
                    src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1000&q=80"
                    alt="student-2"
                    className="w-full h-full object-cover grayscale-[10%]"
                  />
                </div>

                {/* Small middle accent */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[212px] h-[212px] lg:w-[232px] lg:h-[232px] rounded-xl overflow-hidden border-2 border-yellow-500 shadow-md bg-gradient-to-tr from-yellow-500/10 to-transparent flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80"
                    alt="student-3"
                    className="w-full h-full object-cover rounded-lg filter grayscale-[10%]"
                  />
                </div>

                {/* Decorative small circle */}
                <div className="absolute -left-6 -top-6 w-6 h-6 rounded-full bg-yellow-500/80 blur-sm" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </section>
      );
    };

    export default Hero;