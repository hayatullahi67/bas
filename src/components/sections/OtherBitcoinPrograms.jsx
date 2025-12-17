import React from 'react';

export default function OtherBitcoinPrograms() {
  // --- DATA STRUCTURE ---
  const programs = [
    {
      id: 1,
      type: "diploma", 
      title: "BITCOIN DIPLOMA",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      tag: "BEGINNER | FREE",
<<<<<<< HEAD
      imageSrc: "https://images.pexels.com/photos/811838/pexels-photo-811838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", 
=======
      imageSrc: "path/to/bitcoin-diploma-graphic.png", 
>>>>>>> 90b6020f646788a78030acbb88796a5efa2740d1
      tagText: "text-black",
      tagBg: "bg-yellow-400", 
    },
    {
      id: 2,
      type: "story", 
      title: "BUILDING YOUR PROOF OF WORK",
      description: "pisciting elit. Sed do eiusmod tempor inc.",
      tag: "ADVANCE | PAID",
<<<<<<< HEAD
      imageSrc: "https://images.pexels.com/photos/5905707/pexels-photo-5905707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
=======
      imageSrc: "path/to/bitcoin-africa-story-logo.png",
>>>>>>> 90b6020f646788a78030acbb88796a5efa2740d1
      tagText: "text-white",
      tagBg: "bg-black/80", 
    },
    {
      id: 3,
      type: "story",
      title: "GETTING STARTED WITH BITCOIN",
      description: "nt ut labore et dolore magna aliqua. Ut",
      tag: "BEGINNER - INTERMEDIARY | PAID",
<<<<<<< HEAD
      imageSrc: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
=======
      imageSrc: "path/to/bitcoin-africa-story-logo.png",
>>>>>>> 90b6020f646788a78030acbb88796a5efa2740d1
      tagText: "text-white",
      tagBg: "bg-black/80",
    },
    {
      id: 4,
      type: "story",
      title: "BITCOIN FOR YOUTH",
      description: "minim veniam, quis nostrud exercitala",
      tag: "BEGINNER | FREE",
<<<<<<< HEAD
      imageSrc: "https://images.pexels.com/photos/843700/pexels-photo-843700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
=======
      imageSrc: "path/to/bitcoin-africa-story-logo.png",
>>>>>>> 90b6020f646788a78030acbb88796a5efa2740d1
      tagText: "text-black",
      tagBg: "bg-yellow-400", 
    },
    {
      id: 5,
      type: "story",
      title: "ADVANCED TRADING STRATEGIES",
      description: "Master complex trading strategies and market analysis.",
      tag: "EXPERT | PAID",
<<<<<<< HEAD
      imageSrc: "https://images.pexels.com/photos/3762804/pexels-photo-3762804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
=======
      imageSrc: "path/to/bitcoin-africa-story-logo.png",
>>>>>>> 90b6020f646788a78030acbb88796a5efa2740d1
      tagText: "text-white",
      tagBg: "bg-black/80",
    },
    {
      id: 6,
      type: "diploma",
      title: "BLOCKCHAIN FUNDAMENTALS",
      description: "Understanding the core technology behind Bitcoin.",
      tag: "BEGINNER | FREE",
<<<<<<< HEAD
      imageSrc: "https://images.pexels.com/photos/7065096/pexels-photo-7065096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
=======
      imageSrc: "path/to/blockchain-graphic.png",
>>>>>>> 90b6020f646788a78030acbb88796a5efa2740d1
      tagText: "text-black",
      tagBg: "bg-yellow-400",
    },
    {
      id: 7,
      type: "story",
      title: "CRYPTO INVESTMENT BOOTCAMP",
      description: "Learn portfolio management and investment strategies.",
      tag: "INTERMEDIATE | PAID",
<<<<<<< HEAD
      imageSrc: "https://images.pexels.com/photos/7065097/pexels-photo-7065097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
=======
      imageSrc: "path/to/bitcoin-africa-story-logo.png",
>>>>>>> 90b6020f646788a78030acbb88796a5efa2740d1
      tagText: "text-white",
      tagBg: "bg-black/80",
    },
    {
      id: 8,
      type: "story",
      title: "BITCOIN SECURITY ESSENTIALS",
      description: "Protect your assets and learn secure wallet management.",
      tag: "BEGINNER | FREE",
<<<<<<< HEAD
      imageSrc: "https://images.pexels.com/photos/5380674/pexels-photo-5380674.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
=======
      imageSrc: "path/to/bitcoin-africa-story-logo.png",
>>>>>>> 90b6020f646788a78030acbb88796a5efa2740d1
      tagText: "text-black",
      tagBg: "bg-yellow-400",
    },
  ];

<<<<<<< HEAD


  // --- CARD RENDER LOGIC ---
//   const renderVisualBlock = (program) => {
//     let visualClasses = `w-full h-full relative`;
    
//     if (program.type === 'diploma') {
//         visualClasses += ' bg-[#4f2f83] text-white'; 
//     } else {
//         visualClasses += ' bg-white '; 
//     }
  
//     return (
//         <div className={visualClasses}>
//             <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
//                 {program.type === 'diploma' ? (
//                     <span className="text-xl font-bold"></span>
//                 ) : (
//                     <span className="text-xl font-bold text-black/70">
// [Image of Bitcoin Africa Story Logo/Graphic]
// </span>
//                 )}
//             </div>
            
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

const renderVisualBlock = (program) => {
  return (
    <div className="w-full h-full relative overflow-hidden">

      {/* Always show image */}
      <img
        src={program.imageSrc}
        alt={program.title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Bottom tag badge */}
      <span
        className={`
          absolute bottom-0 left-0 
          text-xs font-bold px-3 py-1
          ${program.tagBg} ${program.tagText}
        `}
      >
        {program.tag}
      </span>

    </div>
  );
};

=======
  // --- CARD RENDER LOGIC ---
  const renderVisualBlock = (program) => {
    let visualClasses = `w-full h-full relative`;
    
    if (program.type === 'diploma') {
        visualClasses += ' bg-[#4f2f83] text-white'; 
    } else {
        visualClasses += ' bg-white '; 
    }
  
    return (
        <div className={visualClasses}>
            <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
                {program.type === 'diploma' ? (
                    <span className="text-xl font-bold"></span>
                ) : (
                    <span className="text-xl font-bold text-black/70">
[Image of Bitcoin Africa Story Logo/Graphic]
</span>
                )}
            </div>
            
            <span className={`
                absolute bottom-0 left-0 
                text-xs font-bold px-3 py-1 
                ${program.tagBg} ${program.tagText} 
            `}>
                {program.tag}
            </span>
        </div>
    );
  };
>>>>>>> 90b6020f646788a78030acbb88796a5efa2740d1

  // --- MAIN COMPONENT RENDER ---
  return (
    <div className="bg-black text-white py-20">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="mb-12">
          <div className="inline-block px-4 py-1 bg-yellow-500 text-black font-semibold text-sm rounded-md mb-4">
            OTHER BITCOIN EDUCATION PROGRAMS
          </div>
          <h2 className="text-3xl text-[#FAD604] md:text-4xl font-bold mb-4">
            Other Bitcoin Programs
          </h2>
          <p className="text-gray-400 max-w-2xl">
                 Explore more Bitcoin Educational Program across and beyond Africa
          </p>
        </div>
        
        <hr className="border-gray-800 mb-12" />

        {/* Programs Grid Container - 4 cards per row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            
            {programs.map((program) => (
              <div 
                key={program.id}
                className="flex-shrink-0 h-[370px] rounded-[15px] overflow-hidden relative" 
              >
                {/* 1. Main Visual Block (Fixed Height: 288px) */}
                <div className="h-[288px] w-full rounded-t-[15px] overflow-hidden">
                  {renderVisualBlock(program)}
                </div>

                {/* 2. Text Footer Block */}
                <div className="h-[82px] pt-2 pb-0 flex flex-col justify-start bg-black">
                  <h4 className="text-sm font-bold text-white mb-0.5">{program.title}</h4>
                  <p className="text-xs text-gray-400 line-clamp-1 leading-tight">{program.description}</p>
                </div>

              </div>
            ))}
        </div>

      </div>
    </div>
  );
}
