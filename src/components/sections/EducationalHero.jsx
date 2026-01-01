// import React from 'react';
// import { Link } from 'react-router-dom';
// import { ArrowRight, Send } from 'lucide-react';

// const EducationalHero = () => {
//   return (
    
 
//      <div className=" bg-black text-white">
//       <div className="container mx-auto px-6 py-16">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Left Content */}
//           <div className="space-y-8">
//             {/* Badge */}
//             <div className="inline-flex items-center gap-2 bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-medium">
//               <span className="w-2 h-2 bg-black rounded-full"></span>
//               Learn From Anywhere In The World
//             </div>

//             {/* Heading */}
//             <div className="space-y-2">
//               <h1 className="text-[20px] md:text-[40px] lg:text-[60px] font-bold">
//                 STUDY <span className="text-yellow-400">BITCOIN.</span>
//               </h1>
//               <h1 className="text-[20px] md:text-[40px] lg:text-[60px] font-bold">
//                 STUDY FREEDOM!
//               </h1>
//             </div>

//             {/* Description */}
//             <p className="text-gray-400 text-lg max-w-md">
//               Everything you need to start your Bitcoin journey. Guides, tools, and trusted resources to help you learn and grow.
//             </p>

//             {/* Buttons */}
//             <div className="flex flex-wrap gap-4">
//               <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold transition-colors">
//                 Explore Bitcoin Programs
//               </button>
//               <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold border border-gray-800 transition-colors">
//                 Explore Bitcoin Resources
//               </button>
//             </div>
//           </div>

//           {/* Right Images Grid (hidden on screens <600px, visible from 600px+) */}
//           <div className="hidden min-[600px]:block min-[600px]:relative">
//             <div className="grid grid-cols-2 gap-4">
//               {/* Top Left - Team working */}
//               <div className="relative rounded-2xl w-[269px] h-[280px] overflow-hidden shadow-2xl transform hover:scale-105 transition-transform">
//                 {/* <div className="absolute top-4 left-4 z-10 bg-green-500 text-white p-2 rounded-full">
//                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                   </svg>
//                 </div> */}
//                 <img 
//                   src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop" 
//                   alt="Team collaborating" 
//                   className="w-full h-64 object-cover"
//                 />
//               </div>

//               {/* Top Right - Person in hat */}
//               <div className=" hidden min-[600px]:block rounded-2xl w-[280px] h-[400px]  shadow-2xl transform hover:scale-105 transition-transform row-span-2 mt-8">
//                 <div className=" hidden min-[600px]:absolute bottom-4 left-[40px] z-10 bg-yellow-400 text-black px-3 py-2 rounded-full text-[12px] font-medium flex items-center gap-2">
//                   <span className="w-2 h-2 bg-black rounded-full"></span>
//                   Learn From Anywhere In The World
//                 </div>
//                 <img 
//                   src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop" 
//                   alt="Student learning" 
//                   className="w-full h-full "
//                 />
//               </div>

//               {/* Bottom Left - Study group */}
//               <div className="md:relative rounded-2xl w-[269px] h-[280px] overflow-hidden shadow-2xl transform hover:scale-105 transition-transform">
//                 <img 
//                   src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop" 
//                   alt="Study group" 
//                   className="w-full h-64 object-cover"
//                 />
//               </div>
//             </div>

//             {/* Decorative elements */}
//             <div className="absolute -z-10 top-1/4 right-0 w-72 h-72 bg-yellow-400 opacity-10 rounded-full blur-3xl"></div>
//             <div className="absolute -z-10 bottom-1/4 left-0 w-72 h-72 bg-green-400 opacity-10 rounded-full blur-3xl"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EducationalHero;






import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Send } from 'lucide-react';

const EducationalHero = () => {
  return (
    <section id="hero" className="relative   flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/assets/basbg.jpg')",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/80" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black" />
        </div>

        {/* Hero Content - two column layout */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
            {/* Left: Text content */}
            <div className="w-full lg:w-1/2 text-left mt-12 md:mt-10 lg:text-left">
              <div className="inline-block  mb-6 px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full">
                <span className="text-yellow-500 text-sm font-semibold">Learn From Anywhere In The World</span>
              </div>

              <div className="space-y-2">
                <h1 className="text-5xl sm:text-7xl md:text-6xl lg:text-7xl md:font-extrabold mb-4 leading-tight">
                  STUDY <span className="text-[#FAD604]">BITCOIN.</span>
                </h1>
                <h1 className="text-5xl sm:text-7xl md:text-6xl lg:text-7xl md:font-extrabold mb-4 leading-tight">
                  STUDY FREEDOM!
                </h1>
              </div>

              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
               Everything you need to start your Bitcoin journey. Guides, tools, and trusted resources to help you learn and grow.
              </p>

              <div className="flex  sm:flex-row gap-4 justify-start mb-6 w-full max-w-md">
                <button className="inline-flex w-full sm:w-auto items-center justify-center px-6 py-3 bg-yellow-500 text-black font-bold text-lg  hover:bg-yellow-400 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-yellow-500/50">
                  Explore Bitcoin Programs
                  <ArrowRight className="ml-2" size={18} />
                </button>
                <button className="inline-flex w-full sm:w-auto items-center justify-center px-6 py-3 bg-transparent border-2 border-yellow-500 text-yellow-500 font-bold text-lg  hover:bg-yellow-500 hover:text-black transition-all duration-200">
                  Explore Bitcoin Resources
                </button>
              </div>

            </div>

            {/* Right: Image collage */}
            <div className="w-full hidden lg:w-1/2 flex items-center justify-center">
              <div className="relative w-[460px] h-[300px] lg:w-[520px] lg:h-[360px]">
                {/* Large top-right image */}
                <div className="absolute right-0 top-0 w-[320px] h-[240px] lg:w-[360px] lg:h-[270px] rounded-2xl overflow-hidden border border-gray-800 shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop"
                    alt="Team collaborating"
                    className="w-full h-full object-cover grayscale-[10%]"
                  />
                </div>

                {/* Large bottom-left image */}
                <div className="absolute left-0 bottom-[-70px] w-[300px] h-[260px] lg:w-[340px] lg:h-[300px] rounded-2xl overflow-hidden border border-gray-800 shadow-xl transform -translate-y-6 lg:-translate-y-8">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop"
                    alt="Student learning"
                    className="w-full h-full object-cover grayscale-[10%]"
                  />
                </div>

                {/* Small middle accent */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[212px] h-[212px] lg:w-[232px] lg:h-[232px] rounded-xl overflow-hidden border-2 border-yellow-500 shadow-md bg-gradient-to-tr from-yellow-500/10 to-transparent flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop"
                    alt="Study group"
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

export default EducationalHero;






