// import React from 'react';
// import { ArrowRight } from 'lucide-react';

// const ProgramCard = () => {
//   return (
//     <div className="bg-black text-white py-24 lg:py-32">
//       <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
//         {/* Main Content Grid */}
//         <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 xl:gap-28 items-start mb-24">
//           {/* Left - Image */}
//           <div className="hidden md:block flex-shrink-0 lg:sticky lg:top-8">
//             <div className="rounded-3xl overflow-hidden shadow-2xl w-full md:w-[380px] lg:w-[420px] h-[450px] lg:h-[500px] relative group">
//               <img 
//                 src="https://images.unsplash.com/photo-1540569014015-19a7be504e3a?w=600&h=700&fit=crop" 
//                 alt="Bitcoin educator presenting" 
//                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//             </div>
//           </div>

//           {/* Right - Content */}
//           <div className="space-y-8 flex-1">
//             {/* Badge */}
//             <div className="inline-flex items-center gap-2.5 bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg">
//               <span className="w-2.5 h-2.5 bg-yellow-400 rounded-full animate-pulse"></span>
//               It Cost $0 To Study Bitcoin
//             </div>

//             {/* Heading */}
//             <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
//               Begin Your Bitcoin Journey{' '}
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
//                 With Us!
//               </span>
//             </h2>

//             {/* Description Paragraphs */}
//             <div className="space-y-6 text-gray-300 text-base lg:text-lg leading-relaxed">
//               <p>
//                 <strong className="text-white font-semibold">Master the fundamentals of sound money.</strong> Our free educational program is designed to guide you through the core principles of Bitcoin—from its decentralized structure and cryptographic basis to its role as a hedge against inflation. Learn how to securely acquire, store, and utilize the hardest money ever created.
//               </p>
//               <p>
//                 <strong className="text-white font-semibold">Go beyond theory with a global community.</strong> Engage with seasoned Bitcoiners and developers in a supportive environment. Our program not only covers technical literacy (like running nodes and self-custody) but also fosters career development, helping you launch into the industry or simply become a more informed participant in the global digital economy.
//               </p>
//             </div>

//             {/* Buttons */}
//             <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-4">
//               <button className="group bg-yellow-400 hover:bg-yellow-500 text-black px-7 py-4 rounded-full font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2.5 shadow-xl hover:shadow-2xl hover:shadow-yellow-400/20 hover:-translate-y-0.5">
//                 Join our Next Diploma Program
//                 <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
//               </button>
//               <button className="group bg-transparent hover:bg-gray-800 text-white px-7 py-4 rounded-full font-bold text-sm border-2 border-gray-700 hover:border-gray-600 transition-all duration-300 flex items-center justify-center gap-2.5 hover:-translate-y-0.5">
//                 Join Our Bitcoin Meetups
//                 <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Stats Section */}
//         <div className="rounded-3xl p-8 lg:p-12">
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
//             {/* Stat 1 */}
//             <div className="group text-center bg-gradient-to-br from-gray-900 to-gray-950 px-3 py-8 rounded-2xl border border-gray-800 hover:border-yellow-400/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-yellow-400/10">
//               <div className="text-3xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-yellow-600 mb-2">250+</div>
//               <div className="text-xs text-gray-400 uppercase tracking-widest font-semibold">Registrations</div>
//             </div>

//             {/* Stat 2 */}
//             <div className="group text-center bg-gradient-to-br from-gray-900 to-gray-950 px-3 py-8 rounded-2xl border border-gray-800 hover:border-yellow-400/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-yellow-400/10">
//               <div className="text-3xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-yellow-600 mb-2">50+</div>
//               <div className="text-xs text-gray-400 uppercase tracking-widest font-semibold">Alumni</div>
//             </div>

//             {/* Stat 3 */}
//             <div className="group text-center bg-gradient-to-br from-gray-900 to-gray-950 px-3 py-8 rounded-2xl border border-gray-800 hover:border-yellow-400/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-yellow-400/10">
//               <div className="text-3xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-yellow-600 mb-2">15+</div>
//               <div className="text-xs text-gray-400 uppercase tracking-widest font-semibold">Career Launch</div>
//               <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-blue-400 mx-auto mt-4 rounded-full"></div>
//             </div>

//             {/* Stat 4 */}
//             <div className="group text-center bg-gradient-to-br from-gray-900 to-gray-950 px-3 py-8 rounded-2xl border border-gray-800 hover:border-yellow-400/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-yellow-400/10">
//               <div className="text-3xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-yellow-600 mb-2">10+</div>
//               <div className="text-xs text-gray-400 uppercase tracking-widest font-semibold">Countries</div>
//             </div>

//             {/* Stat 5 */}
//             <div className="group text-center bg-gradient-to-br from-gray-900 to-gray-950 px-3 py-8 rounded-2xl border border-gray-800 hover:border-yellow-400/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-yellow-400/10">
//               <div className="text-3xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-yellow-600 mb-2">150K</div>
//               <div className="text-xs text-gray-400 uppercase tracking-widest font-semibold">Sats Rewarded</div>
//             </div>

//             {/* Stat 6 */}
//             <div className="group text-center bg-gradient-to-br from-gray-900 to-gray-950 px-3 py-8 rounded-2xl border border-gray-800 hover:border-yellow-400/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-yellow-400/10">
//               <div className="text-3xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-yellow-600 mb-2">30+</div>
//               <div className="text-xs text-gray-400 uppercase tracking-widest font-semibold">Educators</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProgramCard;


import React from 'react';
import { ArrowRight, Users, GraduationCap, Briefcase, Globe, Zap, User } from 'lucide-react';

const ProgramCard = () => {
  const stats = [
    { label: 'Registrations', value: '250+', icon: <Users className="w-4 h-4" /> },
    { label: 'Alumni', value: '50+', icon: <GraduationCap className="w-4 h-4" /> },
    { label: 'Careers', value: '15+', icon: <Briefcase className="w-4 h-4" /> },
    { label: 'Countries', value: '10+', icon: <Globe className="w-4 h-4" /> },
    { label: 'Sats Rewarded', value: '150K', icon: <Zap className="w-4 h-4" /> },
    { label: 'Educators', value: '30+', icon: <User className="w-4 h-4" /> },
  ];

  return (
    <section className="relative w-full py-20 bg-[#0A0A0A] text-white overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-500/5 blur-[120px] rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Image Side with modern framing */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1591115765373-520b7a217294?q=80&w=2070&auto=format&fit=crop" 
                alt="Bitcoin Educator" 
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                <p className="text-yellow-500 font-medium tracking-widest uppercase text-xs">Community Led</p>
                <h3 className="text-xl font-semibold">Empowering the next generation</h3>
              </div>
            </div>
          </div>

          {/* Right: Content Side */}
          <div className="flex flex-col space-y-8">
            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse mr-2"></span>
                It Costs $0 To Study Bitcoin
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Begin Your Bitcoin <br />
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  Journey With Us
                </span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                Master the fundamentals of sound money. Our free educational programs are designed 
                to guide you through decentralization, cryptography, and the future of global finance.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="group relative px-8 py-4 bg-yellow-500 text-black font-bold  flex items-center gap-2 hover:bg-yellow-400 transition-all shadow-[0_0_20px_rgba(234,179,8,0.3)]">
                Join Next Diploma
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold  hover:bg-white/10 transition-all backdrop-blur-sm">
                View Meetups
              </button>
            </div>

            {/* Redesigned Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-10 border-t border-white/10">
              {stats.map((stat, index) => (
                <div key={index} className="group">
                  <div className="flex items-center gap-2 text-gray-500 mb-1 group-hover:text-yellow-500 transition-colors">
                    {stat.icon}
                    <span className="text-[10px] uppercase tracking-widest font-bold">{stat.label}</span>
                  </div>
                  <div className="text-2xl font-bold text-white tracking-tight">{stat.value}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProgramCard;