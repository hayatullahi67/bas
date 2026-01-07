
// import React, { useState } from 'react';
// import { ArrowLeft, ArrowRight } from 'lucide-react';

// export default function BitcoinPrograms() {
//   // --- DATA STRUCTURE ---
//   const programs = [
//     {
//       id: 1,
//       type: "diploma", 
//       title: "BITCOIN DIPLOMA",
//       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//       tag: "BEGINNER | FREE",
//       // Placeholder for the image source:
//       imageSrc: "path/to/bitcoin-diploma-graphic.png", 
//       tagText: "text-black",
//       tagBg: "bg-yellow-400", 
//     },
//     {
//       id: 2,
//       type: "stor",
//       title: "GETTING STARTED WITH BITCOIN",
//       description: "nt ut labore et dolore magna aliqua. Ut",
//       tag: "BEGINNER - INTERMEDIARY | PAID",
//       imageSrc: "path/to/bitcoin-africa-story-logo.png",
//       tagText: "text-white",
//       tagBg: "bg-black/80",
//     },
//     {
//       id: 3,
//       type: "story", 
//       title: "BUILDING YOUR PROOF OF WORK",
//       description: "pisciting elit. Sed do eiusmod tempor inc.",
//       tag: "ADVANCE | PAID",
//       imageSrc: "path/to/bitcoin-africa-story-logo.png",
//       tagText: "text-white",
//       tagBg: "bg-black/80", 
//     },
    
//     {
//       id: 4,
//       type: "stor",
//       title: "BITCOIN FOR YOUTH",
//       description: "minim veniam, quis nostrud exercitala",
//       tag: "BEGINNER | FREE",
//       imageSrc: "path/to/bitcoin-africa-story-logo.png",
//       tagText: "text-black",
//       tagBg: "bg-yellow-400", 
//     },
//     // {
//     //   id: 5,
//     //   type: "story",
//     //   title: "ADVANCED TRADING",
//     //   description: "Mastering complex trading strategies.",
//     //   tag: "EXPERT | PAID",
//     //   imageSrc: "path/to/advanced-trading-graphic.png",
//     //   tagText: "text-white",
//     //   tagBg: "bg-black/80",
//     // }
//   ];

//   const [startIndex, setStartIndex] = useState(0);
//   const cardsToShow = 4; // Display 4 cards in the viewport

//   const nextPrograms = () => {
//     if (startIndex + cardsToShow < programs.length) {
//       setStartIndex((prev) => prev + 1);
//     }
//   };

//   const prevPrograms = () => {
//     if (startIndex > 0) {
//       setStartIndex((prev) => prev - 1);
//     }
//   };

//   // --- CARD RENDER LOGIC ---

//   const renderVisualBlock = (program) => {
//     // This function returns a div that acts as the container for the program's main graphic.
    
//     let visualClasses = `w-full h-full relative`;
    
//     // Applying the distinctive styling based on the image:
//     if (program.type === 'story') {
//         // Dark purple background for the diploma card
//         visualClasses += ' bg-[red] text-white'; 
//     } else {
//         // White background with a yellow border for the story cards
//         visualClasses += ' bg-[#4f2f83] '; 
//     }
  
//     return (
//         <div className={visualClasses}>
//             {/* This is the IMAGE/GRAPHIC placeholder area. 
//               Replace this block with a real <img> or a div using a background image.
//             */}
//             <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
//                 {program.type === 'diploma' ? (
//                     // Placeholder for the unique diploma graphic
//                     <span className="text-xl font-bold"></span>
//                 ) : (
//                     // Placeholder for the Bitcoin Africa Story logo/graphic
//                     <span className="text-xl font-bold text-black/70">

// {/* [Image of Bitcoin Africa Story Logo/Graphic] */}
// </span>
//                 )}
//             </div>
            
//             {/* Tag Overlay (fixed position inside the visual block) */}
//             <span className={`
//                 absolute bottom-0 left-0 
//                 text-xs font-bold px-3 py-1 
//                 ${program.tagBg} ${program.tagText} 
//             `}>
//                 {program.tag}
//             </span>
//         </div>
//     );
//   };


//   // --- MAIN COMPONENT RENDER ---

//   return (
//     <div className="bg-black text-white py-20">
//       <div className="container mx-auto px-6">
        
//         {/* Header Section (Kept minimal and correct) */}
//         <div className="mb-12">
//           <div className="inline-block px-4 py-1 bg-yellow-500 text-black font-semibold text-sm rounded-md mb-4">
//             BITCOIN EDUCATION PROGRAMS
//           </div>
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">
//             New to <span className="text-yellow-500">Bitcoin?</span>
//           </h2>
//           <p className="text-gray-400 max-w-2xl">
//             Explore our Bitcoin Educational Program to learn more and get more insight on Bitcoin.
//           </p>
//         </div>
        
//         <hr className="border-gray-800 mb-12" />

//         {/* Programs Carousel Container */}
//         <div className="relative overflow-hidden">
          
//           {/* Card Wrapper - Use explicit pixel widths for precise control */}
//           <div 
//             className="flex transition-transform duration-500 ease-in-out gap-[20px]"
//             style={{ 
//               transform: `translateX(-${startIndex * (288 + 20)}px)`,
//               width: `${(288 * programs.length) + (20 * (programs.length - 1))}px`
//             }}
//           >
            
//             {programs.map((program) => (
//               <div 
//                 key={program.id}
//                 // Outer container defines the fixed size and rounded corners
//                 className="flex-shrink-0 w-[288px] h-[370px]  overflow-hidden relative" 
//               >
//                 {/* 1. Main Visual Block (Fixed Height: 288px) */}
//                 <div className="h-[288px] w-full  overflow-hidden">
//                   {renderVisualBlock(program)}
//                 </div>

//                 {/* 2. Text Footer Block (Shorter text block below the card) */}
//                 <div className="h-[82px] pt-2 pb-0 flex flex-col justify-start bg-black">
//                   <h4 className="text-sm font-bold text-white mb-0.5">{program.title}</h4>
//                   <p className="text-xs text-gray-400 line-clamp-1 leading-tight">{program.description}</p>
//                 </div>

//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Navigation Controls (Aligned to left as per image) */}
//         <div className="flex justify-start mt-12 gap-4"> 
//           <button
//             onClick={prevPrograms}
//             disabled={startIndex === 0}
//             className={`
//               rounded-full p-3 transition-colors duration-300
//               ${startIndex === 0 
//                 ? 'bg-gray-700 text-gray-500 cursor-not-allowed' 
//                 : 'bg-yellow-500 hover:bg-yellow-400 text-black shadow-lg'
//               }
//             `}
//           >
//             <ArrowLeft className="w-6 h-6" />
//           </button>
          
//           <button
//             onClick={nextPrograms}
//             disabled={startIndex + cardsToShow >= programs.length}
//             className={`
//               rounded-full p-3 transition-colors duration-300
//               ${startIndex + cardsToShow >= programs.length
//                 ? 'bg-gray-700 text-gray-500 cursor-not-allowed' 
//                 : 'bg-yellow-500 hover:bg-yellow-400 text-black shadow-lg'
//               }
//             `}
//           >
//             <ArrowRight className="w-6 h-6" />
//           </button>
//         </div>

//       </div>
//     </div>
//   );
// }



import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, BookOpen, Clock } from 'lucide-react';

const programs = [
  {
    id: 1,
    title: "BITCOIN DIPLOMA",
    level: "BEGINNER",
    price: "FREE",
    duration: "4 Weeks",
    image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=500&auto=format&fit=crop",
    desc: "Master the fundamental principles of sound money and decentralization."
  },
  {
    id: 2,
    title: "GETTING STARTED WITH BITCOIN",
    level: "INTERMEDIATE",
    price: "PAID",
    duration: "2 Weeks",
    image: "https://images.unsplash.com/photo-1621416848446-991125d75b06?q=80&w=500&auto=format&fit=crop",
    desc: "A practical guide to self-custody, wallets, and securing your first sats."
  },
  {
    id: 3,
    title: "BUILDING YOUR PROOF OF WORK",
    level: "ADVANCED",
    price: "PAID",
    duration: "8 Weeks",
    image: "https://images.unsplash.com/photo-1516245834210-c4c142787335?q=80&w=500&auto=format&fit=crop",
    desc: "Deep dive into mining, nodes, and the technical layer of the protocol."
  },
  {
    id: 4,
    title: "BITCOIN FOR YOUTH",
    level: "BEGINNER",
    price: "FREE",
    duration: "Ongoing",
    image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=500&auto=format&fit=crop",
    desc: "Empowering the next generation with financial literacy and digital freedom."
  },
  {
    id: 5,
    title: "LIGHTNING NETWORK 101",
    level: "INTERMEDIATE",
    price: "FREE",
    duration: "1 Week",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=500&auto=format&fit=crop",
    desc: "Learn how to use the second layer for instant, near-free payments."
  }
];

const BitcoinPrograms = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    const scrollAmount = 340; // Card width + gap
    if (direction === 'left') {
      current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-black text-white px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-12">
          <span className="inline-block px-4 py-1.5 rounded-lg bg-yellow-500 text-black text-xs font-bold uppercase tracking-widest mb-6">
            Bitcoin Education Programs
          </span>
          <h2 className="text-5xl font-bold mb-4">
            New to <span className="text-yellow-500">Bitcoin?</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Explore our Bitcoin Educational Program to learn more and get more insight on Bitcoin.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative group">
          {/* Custom Scrollable Area */}
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-10"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {programs.map((course) => (
              <div 
                key={course.id} 
                className="min-w-[320px] md:min-w-[320px] snap-start group/card"
              >
                <div className="relative h-[450px]  overflow-hidden border border-white/10 hover:border-yellow-500/50 transition-all duration-500 bg-[#111]">
                  {/* Thumbnail */}
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover opacity-50 group-hover/card:scale-110 group-hover/card:opacity-70 transition-all duration-700"
                  />
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black via-black/40 to-transparent">
                    <div className="flex gap-2 mb-4">
                      <span className="px-3 py-1 bg-yellow-500 text-black text-[10px] font-bold rounded">
                        {course.level} | {course.price}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold mb-3 group-hover/card:text-yellow-500 transition-colors">
                      {course.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm mb-6 line-clamp-2">
                      {course.desc}
                    </p>

                    <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                      <div className="flex items-center gap-1.5 text-xs text-gray-400">
                        <Clock className="w-4 h-4 text-yellow-500" />
                        {course.duration}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-gray-400">
                        <BookOpen className="w-4 h-4 text-yellow-500" />
                        Online
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-4 mt-8">
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BitcoinPrograms;