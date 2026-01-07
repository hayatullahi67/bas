// import React from 'react';

// export default function OtherBitcoinPrograms() {
//   // --- DATA STRUCTURE ---
//   const programs = [
//     {
//       id: 1,
//       type: "diploma", 
//       title: "BITCOIN DIPLOMA",
//       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//       tag: "BEGINNER | FREE",
//       imageSrc: "https://images.pexels.com/photos/811838/pexels-photo-811838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", 
//       tagText: "text-black",
//       tagBg: "bg-yellow-400", 
//     },
//     {
//       id: 2,
//       type: "story", 
//       title: "BUILDING YOUR PROOF OF WORK",
//       description: "pisciting elit. Sed do eiusmod tempor inc.",
//       tag: "ADVANCE | PAID",
//       imageSrc: "https://images.pexels.com/photos/5905707/pexels-photo-5905707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//       tagText: "text-white",
//       tagBg: "bg-black/80", 
//     },
//     {
//       id: 3,
//       type: "story",
//       title: "GETTING STARTED WITH BITCOIN",
//       description: "nt ut labore et dolore magna aliqua. Ut",
//       tag: "BEGINNER - INTERMEDIARY | PAID",
//       imageSrc: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//       tagText: "text-white",
//       tagBg: "bg-black/80",
//     },
//     {
//       id: 4,
//       type: "story",
//       title: "BITCOIN FOR YOUTH",
//       description: "minim veniam, quis nostrud exercitala",
//       tag: "BEGINNER | FREE",
//       imageSrc: "https://images.pexels.com/photos/843700/pexels-photo-843700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//       tagText: "text-black",
//       tagBg: "bg-yellow-400", 
//     },
//     {
//       id: 5,
//       type: "story",
//       title: "ADVANCED TRADING STRATEGIES",
//       description: "Master complex trading strategies and market analysis.",
//       tag: "EXPERT | PAID",
//       imageSrc: "https://images.pexels.com/photos/3762804/pexels-photo-3762804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//       tagText: "text-white",
//       tagBg: "bg-black/80",
//     },
//     {
//       id: 6,
//       type: "diploma",
//       title: "BLOCKCHAIN FUNDAMENTALS",
//       description: "Understanding the core technology behind Bitcoin.",
//       tag: "BEGINNER | FREE",
//       imageSrc: "https://images.pexels.com/photos/7065096/pexels-photo-7065096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//       tagText: "text-black",
//       tagBg: "bg-yellow-400",
//     },
//     {
//       id: 7,
//       type: "story",
//       title: "CRYPTO INVESTMENT BOOTCAMP",
//       description: "Learn portfolio management and investment strategies.",
//       tag: "INTERMEDIATE | PAID",
//       imageSrc: "https://images.pexels.com/photos/7065097/pexels-photo-7065097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//       tagText: "text-white",
//       tagBg: "bg-black/80",
//     },
//     {
//       id: 8,
//       type: "story",
//       title: "BITCOIN SECURITY ESSENTIALS",
//       description: "Protect your assets and learn secure wallet management.",
//       tag: "BEGINNER | FREE",
//       imageSrc: "https://images.pexels.com/photos/5380674/pexels-photo-5380674.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//       tagText: "text-black",
//       tagBg: "bg-yellow-400",
//     },
//   ];



//   // --- CARD RENDER LOGIC ---
// //   const renderVisualBlock = (program) => {
// //     let visualClasses = `w-full h-full relative`;
    
// //     if (program.type === 'diploma') {
// //         visualClasses += ' bg-[#4f2f83] text-white'; 
// //     } else {
// //         visualClasses += ' bg-white '; 
// //     }
  
// //     return (
// //         <div className={visualClasses}>
// //             <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
// //                 {program.type === 'diploma' ? (
// //                     <span className="text-xl font-bold"></span>
// //                 ) : (
// //                     <span className="text-xl font-bold text-black/70">
// // [Image of Bitcoin Africa Story Logo/Graphic]
// // </span>
// //                 )}
// //             </div>
            
// //             <span className={`
// //                 absolute bottom-0 left-0 
// //                 text-xs font-bold px-3 py-1 
// //                 ${program.tagBg} ${program.tagText} 
// //             `}>
// //                 {program.tag}
// //             </span>
// //         </div>
// //     );
// //   };

// const renderVisualBlock = (program) => {
//   return (
//     <div className="w-full h-full relative overflow-hidden">

//       {/* Always show image */}
//       <img
//         src={program.imageSrc}
//         alt={program.title}
//         className="absolute inset-0 w-full h-full object-cover"
//       />

//       {/* Bottom tag badge */}
//       <span
//         className={`
//           absolute bottom-0 left-0 
//           text-xs font-bold px-3 py-1
//           ${program.tagBg} ${program.tagText}
//         `}
//       >
//         {program.tag}
//       </span>

//     </div>
//   );
// };


//   // --- MAIN COMPONENT RENDER ---
//   return (
//     <div className="bg-black text-white py-20">
//       <div className="container mx-auto px-6">
        
//         {/* Header Section */}
//         <div className="mb-12">
//           <div className="inline-block px-4 py-1 bg-yellow-500 text-black font-semibold text-sm rounded-md mb-4">
//             OTHER BITCOIN EDUCATION PROGRAMS
//           </div>
//           <h2 className="text-3xl text-[#FAD604] md:text-4xl font-bold mb-4">
//             Other Bitcoin Programs
//           </h2>
//           <p className="text-gray-400 max-w-2xl">
//                  Explore more Bitcoin Educational Program across and beyond Africa
//           </p>
//         </div>
        
//         <hr className="border-gray-800 mb-12" />

//         {/* Programs Grid Container - 4 cards per row */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            
//             {programs.map((program) => (
//               <div 
//                 key={program.id}
//                 className="flex-shrink-0 h-[370px] rounded-[15px] overflow-hidden relative" 
//               >
//                 {/* 1. Main Visual Block (Fixed Height: 288px) */}
//                 <div className="h-[288px] w-full rounded-t-[15px] overflow-hidden">
//                   {renderVisualBlock(program)}
//                 </div>

//                 {/* 2. Text Footer Block */}
//                 <div className="h-[82px] pt-2 pb-0 flex flex-col justify-start bg-black">
//                   <h4 className="text-sm font-bold text-white mb-0.5">{program.title}</h4>
//                   <p className="text-xs text-gray-400 line-clamp-1 leading-tight">{program.description}</p>
//                 </div>

//               </div>
//             ))}
//         </div>

//       </div>
//     </div>
//   );
// }




import React from 'react';
import { Globe, ArrowUpRight } from 'lucide-react';

// const otherPrograms = [
//   {
//     id: 1,
//     title: "ADVANCED TRADING STRATEGIES",
//     level: "EXPERT",
//     price: "PAID",
//     image: "https://images.unsplash.com/photo-1611974717482-4828c3fc3ad8?q=80&w=600&auto=format&fit=crop",
//     desc: "Master complex trading strategies and market analysis techniques."
//   },
//   {
//     id: 2,
//     title: "BLOCKCHAIN FUNDAMENTALS",
//     level: "BEGINNER",
//     price: "FREE",
//     image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=600&auto=format&fit=crop",
//     desc: "Understanding the core technology behind Bitcoin and distributed ledgers."
//   },
//   {
//     id: 3,
//     title: "CRYPTO INVESTMENT BOOTCAMP",
//     level: "INTERMEDIATE",
//     price: "PAID",
//     image: "https://images.unsplash.com/photo-1621416848446-991125d75b06?q=80&w=600&auto=format&fit=crop",
//     desc: "Learn portfolio management and investment psychology."
//   },
//   {
//     id: 4,
//     title: "BITCOIN SECURITY ESSENTIALS",
//     level: "BEGINNER",
//     price: "FREE",
//     image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=600&auto=format&fit=crop",
//     desc: "Protect your assets and learn secure hardware wallet management."
//   }
// ];


const otherPrograms = [
  {
    id: 1,
    title: "ADVANCED TRADING STRATEGIES",
    level: "EXPERT",
    price: "PAID",
    image: "https://images.unsplash.com/photo-1611974717482-4828c3fc3ad8?q=80&w=600&auto=format&fit=crop",
    desc: "Master complex trading strategies and market analysis techniques."
  },
  {
    id: 2,
    title: "BLOCKCHAIN FUNDAMENTALS",
    level: "BEGINNER",
    price: "FREE",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=600&auto=format&fit=crop",
    desc: "Understanding the core technology behind Bitcoin and distributed ledgers."
  },
  {
    id: 3,
    title: "CRYPTO INVESTMENT BOOTCAMP",
    level: "INTERMEDIATE",
    price: "PAID",
    image: "https://images.unsplash.com/photo-1621416848446-991125d75b06?q=80&w=600&auto=format&fit=crop",
    desc: "Learn portfolio management and investment psychology."
  },
  {
    id: 4,
    title: "BITCOIN SECURITY ESSENTIALS",
    level: "BEGINNER",
    price: "FREE",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=600&auto=format&fit=crop",
    desc: "Protect your assets and learn secure hardware wallet management."
  },
  {
    id: 5,
    title: "MINING RIG ARCHITECTURE",
    level: "EXPERT",
    price: "PAID",
    image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=600&auto=format&fit=crop",
    desc: "Technical deep-dive into ASIC hardware and mining pool operations."
  },
  {
    id: 6,
    title: "LIGHTNING NETWORK DEV",
    level: "ADVANCE",
    price: "PAID",
    image: "https://images.unsplash.com/photo-1516245834210-c4c142787335?q=80&w=600&auto=format&fit=crop",
    desc: "Build Layer-2 applications for instant global payments."
  },
  {
    id: 7,
    title: "DECENTRALIZED FINANCE",
    level: "INTERMEDIARY",
    price: "FREE",
    image: "https://images.unsplash.com/photo-1644143379190-08a5f055639d?q=80&w=600&auto=format&fit=crop",
    desc: "Exploring the bridge between Bitcoin and open financial protocols."
  },
  {
    id: 8,
    title: "BITCOIN POLICY & LAW",
    level: "BEGINNER",
    price: "FREE",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=600&auto=format&fit=crop",
    desc: "Understanding the regulatory landscape of digital assets globally."
  }
];

const OtherBitcoinPrograms = () => {
  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-yellow-500 text-black text-[10px] font-bold uppercase tracking-widest mb-6">
            OTHER BITCOIN EDUCATION PROGRAMS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Other Bitcoin <span className="text-yellow-500">Programs</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Explore more Bitcoin Educational Program across and beyond Africa.
          </p>
        </div>

        {/* 4-Column Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {otherPrograms.map((program) => (
            <div 
              key={program.id} 
              className="group relative flex flex-col bg-[#0A0A0A]  overflow-hidden border border-white/5 hover:border-yellow-500/50 transition-all duration-500"
            >
              {/* Card Image Container */}
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={program.image} 
                  alt={program.title}
                  className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-80"
                />
                
                {/* Level Badge Overlay (Exactly like your screenshots) */}
                <div className="absolute bottom-0 left-0">
                  <span className={`inline-block px-3 py-1 text-[10px] font-bold ${
                    program.level === 'EXPERT' ? 'bg-black text-white' : 'bg-yellow-500 text-black'
                  }`}>
                    {program.level} | {program.price}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold mb-3 line-clamp-2 leading-tight group-hover:text-yellow-500 transition-colors uppercase">
                  {program.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed">
                  {program.desc}
                </p>
                
                {/* Spacer to push button to bottom */}
                <div className="mt-auto pt-4 border-t border-white/5">
                  <button className="flex items-center gap-2 text-xs font-bold text-yellow-500 hover:text-white transition-colors group/btn">
                    VIEW DETAILS 
                    <ArrowUpRight className="w-3 h-3 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OtherBitcoinPrograms;