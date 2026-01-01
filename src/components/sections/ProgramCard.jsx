// import React from 'react';
// import { Link } from 'react-router-dom';
// import { ArrowRight } from 'lucide-react';

// const ProgramCard = () => {


//   return (
//  <div className="bg-black text-white py-20">
//       <div className="container mx-auto px-6">
//         {/* Main Content Grid */}
//         <div className="flex flex-col lg:flex-row gap-[170px] items-start mb-20">
//           {/* Left - Image */}
//           <div className="max-sm:hidden md:relative flex-shrink-0">
//             <div className="rounded-[25px] overflow-hidden shadow-lg w-[367px] h-[412px]">
//               <img 
//                 src="https://images.unsplash.com/photo-1540569014015-19a7be504e3a?w=600&h=700&fit=crop" 
//                 alt="Bitcoin educator presenting" 
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>

//           {/* Right - Content */}
//           <div className="space-y-6 max-w-[620px]">
//             {/* Badge */}
//             <div className="inline-flex items-center gap-2 bg-gray-900 border-2 border-gray-800 text-white px-4 py-2 rounded-full text-sm font-medium">
//               <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
//               It Cost $0 To Study Bitcoin
//             </div>

//             {/* Heading */}
//             <h2 className="text-[32px] md:text-[40px] font-bold leading-tight text-white">
//               Begin Your Bitcoin Journey With Us!
//             </h2>

//             {/* Description Paragraphs */}
//             <div className="space-y-4 text-gray-400 text-[15px]">
//              <p className="leading-relaxed">
//                 **Master the fundamentals of sound money.** Our free educational program is designed to guide you through the core principles of Bitcoin—from its decentralized structure  and cryptographic basis to its role as a hedge against inflation. Learn how to securely acquire, store, and utilize the hardest money ever created.
//               </p>
//               <p className="leading-relaxed">
//               **Go beyond theory with a global community.** Engage with seasoned Bitcoiners and developers in a supportive environment. Our program not only covers technical literacy (like running nodes and self-custody) but also fosters career development, helping you launch into the industry or simply become a more informed participant in the global digital economy.
//               </p>
//             </div>

//             {/* Buttons */}
//             <div className="flex flex-wrap gap-4 pt-2">
//               <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-[14px] py-[10px] h-[50px] rounded-[40px] font-semibold text-[14px] transition-colors flex items-center gap-2">
//                 Join our Next Diploma Program
//                 <ArrowRight className="w-4 h-4" />
//               </button>
//               <button className="bg-gray-900 hover:bg-gray-800 text-white px-[14px] py-[10px] rounded-[40px] font-semibold text-[14px] border border-gray-800 transition-colors flex items-center gap-2">
//                 Join Our Bitcoin Meetups
//                 <ArrowRight className="w-4 h-4" />
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Stats Section */}
//         <div className=" rounded-3xl p-12">
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
//             {/* Stat 1 */}
//             <div className="text-center bg-gray-900 px-[20px] py-[20px] rounded-[10px]">
//               <div className="text-[48px] font-bold text-yellow-400 mb-1">250+</div>
//               <div className="text-[11px] text-gray-400 uppercase tracking-wider font-medium">REGISTRATIONS</div>
//             </div>

//             {/* Stat 2 */}
//             <div className="text-center bg-gray-900 px-[20px] py-[20px] rounded-[10px]">
//               <div className="text-[48px] font-bold text-yellow-400 mb-1">50+</div>
//               <div className="text-[11px] text-gray-400 uppercase tracking-wider font-medium">ALUMNI</div>
//             </div>

//             {/* Stat 3 */}
//             <div className="text-center bg-gray-900 px-[20px] py-[20px] rounded-[10px]">
//               <div className="text-[48px] font-bold text-yellow-400 mb-1">15+</div>
//               <div className="text-[11px] text-gray-400 uppercase tracking-wider font-medium">CAREER LAUNCH</div>
//               <div className="w-12 h-1 bg-blue-500 mx-auto mt-3"></div>
//             </div>

//             {/* Stat 4 */}
//             <div className="text-center bg-gray-900 px-[20px] py-[20px] rounded-[10px]">
//               <div className="text-[48px] font-bold text-yellow-400 mb-1">10+</div>
//               <div className="text-[11px] text-gray-400 uppercase tracking-wider font-medium">COUNTRIES</div>
//             </div>

//             {/* Stat 5 */}
//             <div className="text-center bg-gray-900 px-[20px] py-[20px] rounded-[10px]">
//               <div className="text-[48px] font-bold text-yellow-400 mb-1">150K</div>
//               <div className="text-[11px] text-gray-400 uppercase tracking-wider font-medium">SATS REWARDED</div>
//             </div>

//             {/* Stat 6 */}
//             <div className="text-center bg-gray-900 px-[20px] py-[20px] rounded-[10px]">
//               <div className="text-[48px] font-bold text-yellow-400 mb-1">30+</div>
//               <div className="text-[11px] text-gray-400 uppercase tracking-wider font-medium">EDUCATORS</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>)
// };

// export default ProgramCard;


import React from 'react';
import { ArrowRight } from 'lucide-react';

const ProgramCard = () => {
  return (
    <div className="bg-black text-white py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        {/* Main Content Grid */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 xl:gap-28 items-start mb-24">
          {/* Left - Image */}
          <div className="hidden md:block flex-shrink-0 lg:sticky lg:top-8">
            <div className="rounded-3xl overflow-hidden shadow-2xl w-full md:w-[380px] lg:w-[420px] h-[450px] lg:h-[500px] relative group">
              <img 
                src="https://images.unsplash.com/photo-1540569014015-19a7be504e3a?w=600&h=700&fit=crop" 
                alt="Bitcoin educator presenting" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8 flex-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg">
              <span className="w-2.5 h-2.5 bg-yellow-400 rounded-full animate-pulse"></span>
              It Cost $0 To Study Bitcoin
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
              Begin Your Bitcoin Journey{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                With Us!
              </span>
            </h2>

            {/* Description Paragraphs */}
            <div className="space-y-6 text-gray-300 text-base lg:text-lg leading-relaxed">
              <p>
                <strong className="text-white font-semibold">Master the fundamentals of sound money.</strong> Our free educational program is designed to guide you through the core principles of Bitcoin—from its decentralized structure and cryptographic basis to its role as a hedge against inflation. Learn how to securely acquire, store, and utilize the hardest money ever created.
              </p>
              <p>
                <strong className="text-white font-semibold">Go beyond theory with a global community.</strong> Engage with seasoned Bitcoiners and developers in a supportive environment. Our program not only covers technical literacy (like running nodes and self-custody) but also fosters career development, helping you launch into the industry or simply become a more informed participant in the global digital economy.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-4">
              <button className="group bg-yellow-400 hover:bg-yellow-500 text-black px-7 py-4 rounded-full font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2.5 shadow-xl hover:shadow-2xl hover:shadow-yellow-400/20 hover:-translate-y-0.5">
                Join our Next Diploma Program
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button className="group bg-transparent hover:bg-gray-800 text-white px-7 py-4 rounded-full font-bold text-sm border-2 border-gray-700 hover:border-gray-600 transition-all duration-300 flex items-center justify-center gap-2.5 hover:-translate-y-0.5">
                Join Our Bitcoin Meetups
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="rounded-3xl p-8 lg:p-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {/* Stat 1 */}
            <div className="group text-center bg-gradient-to-br from-gray-900 to-gray-950 px-3 py-8 rounded-2xl border border-gray-800 hover:border-yellow-400/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-yellow-400/10">
              <div className="text-3xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-yellow-600 mb-2">250+</div>
              <div className="text-xs text-gray-400 uppercase tracking-widest font-semibold">Registrations</div>
            </div>

            {/* Stat 2 */}
            <div className="group text-center bg-gradient-to-br from-gray-900 to-gray-950 px-3 py-8 rounded-2xl border border-gray-800 hover:border-yellow-400/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-yellow-400/10">
              <div className="text-3xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-yellow-600 mb-2">50+</div>
              <div className="text-xs text-gray-400 uppercase tracking-widest font-semibold">Alumni</div>
            </div>

            {/* Stat 3 */}
            <div className="group text-center bg-gradient-to-br from-gray-900 to-gray-950 px-3 py-8 rounded-2xl border border-gray-800 hover:border-yellow-400/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-yellow-400/10">
              <div className="text-3xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-yellow-600 mb-2">15+</div>
              <div className="text-xs text-gray-400 uppercase tracking-widest font-semibold">Career Launch</div>
              <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-blue-400 mx-auto mt-4 rounded-full"></div>
            </div>

            {/* Stat 4 */}
            <div className="group text-center bg-gradient-to-br from-gray-900 to-gray-950 px-3 py-8 rounded-2xl border border-gray-800 hover:border-yellow-400/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-yellow-400/10">
              <div className="text-3xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-yellow-600 mb-2">10+</div>
              <div className="text-xs text-gray-400 uppercase tracking-widest font-semibold">Countries</div>
            </div>

            {/* Stat 5 */}
            <div className="group text-center bg-gradient-to-br from-gray-900 to-gray-950 px-3 py-8 rounded-2xl border border-gray-800 hover:border-yellow-400/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-yellow-400/10">
              <div className="text-3xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-yellow-600 mb-2">150K</div>
              <div className="text-xs text-gray-400 uppercase tracking-widest font-semibold">Sats Rewarded</div>
            </div>

            {/* Stat 6 */}
            <div className="group text-center bg-gradient-to-br from-gray-900 to-gray-950 px-3 py-8 rounded-2xl border border-gray-800 hover:border-yellow-400/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-yellow-400/10">
              <div className="text-3xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-yellow-600 mb-2">30+</div>
              <div className="text-xs text-gray-400 uppercase tracking-widest font-semibold">Educators</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;