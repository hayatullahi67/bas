// import React, { useState } from 'react';
// import { PlayCircle, Clock } from 'lucide-react';

// // --- Real Video Data for the Playlist ---
// // Note: These videos provide educational content on various Bitcoin topics.
// // The embedUrl uses the video ID to ensure the actual video plays.
// const videoData = [
//   {
//     id: 1,
//     title: "Bitcoin 101: What is Bitcoin and Why Does it Matter?",
//     description: "This foundational lesson covers the history, purpose, and basic mechanisms of Bitcoin. Understand why this digital asset has captured the world's attention and its role in modern finance. This video is great for absolute beginners.",
//     duration: "40:05", // Estimated duration
//     embedUrl: "https://www.youtube.com/embed/zQjKD9jiBes?autoplay=0", // Bitcoin 101 Course
//     thumbnailUrl: "https://placehold.co/400x225/eab308/000000?text=BITCOIN+101",
//   },
//   {
//     id: 2,
//     title: "The Africa Story: Building Your Proof of Work",
//     description: "A deep dive into how Bitcoin is being adopted across the African continent, focusing on practical applications, remittance, and financial inclusion. Essential viewing for regional context.",
//     duration: "22:10",
//     embedUrl: "https://www.youtube.com/embed/jNQXAC9IVRw?autoplay=0", // General Bitcoin Intro (using original placeholder ID)
//     thumbnailUrl: "https://placehold.co/400x225/2563eb/ffffff?text=Africa+Story",
//   },
//   {
//     id: 3,
//     title: "Getting Started with Your First Wallet",
//     description: "A step-by-step guide on setting up and securing your first non-custodial Bitcoin wallet. Learn about seed phrases, private keys, and best security practices.",
//     duration: "08:45",
//     embedUrl: "https://www.youtube.com/embed/IZWrAbFveSA?autoplay=0", // How To Invest In Crypto Complete Beginner's Guide (covers wallets)
//     thumbnailUrl: "https://placehold.co/400x225/10b981/000000?text=Wallet+Setup",
//   },
//   {
//     id: 4,
//     title: "Understanding Halving and Supply Mechanics",
//     description: "Explores the Bitcoin Halving event, its economic implications, and how Bitcoin's finite supply mechanism drives its value proposition. Intermediate level content.",
//     duration: "05:00", // Estimated duration
//     embedUrl: "https://www.youtube.com/embed/AVWDiXT3nMk?autoplay=0", // Bitcoin halving explained
//     thumbnailUrl: "https://placehold.co/400x225/f97316/000000?text=Halving+Explained",
//   },
//   {
//     id: 5,
//     title: "Advanced Trading Strategies for Beginners",
//     description: "An introduction to technical analysis, order types, and basic risk management strategies used in Bitcoin trading. Not financial advice, purely educational.",
//     duration: "35:00",
//     embedUrl: "https://www.youtube.com/embed/C0DPogF-4Zk?autoplay=0", // General Trading Intro (using original placeholder ID)
//     thumbnailUrl: "https://placehold.co/400x225/be185d/ffffff?text=Advanced+Trading",
//   },
//   {
//     id: 6,
//     title: "The Philosophy of Sound Money",
//     description: "Discussing the economic and philosophical arguments for decentralized, hard money versus fiat currencies. A historical and conceptual overview.",
//     duration: "08:00", // Estimated duration
//     embedUrl: "https://www.youtube.com/embed/MaXwCP0qvmE?autoplay=0", // The Bitcoin Dream / Introductory Course
//     thumbnailUrl: "https://placehold.co/400x225/6d28d9/ffffff?text=Sound+Money",
//   },
// ];


// const BitcoinVideos = () => {
//   // Set the first video as active by default
//   const [activeVideo, setActiveVideo] = useState(videoData[0]);

//   // Handle click on a video thumbnail in the playlist
//   const handleVideoClick = (video) => {
//     setActiveVideo(video);
//     // Optional: Scroll back to the top of the container when a new video is clicked
//     document.getElementById('video-playlist-container')?.scrollTo({ top: 0, behavior: 'smooth' });
//   };


//   // --- Sub-Component: Minimal Playlist Item (Thumbnail Only) ---
//   const PlaylistItem = ({ video, isActive, onClick }) => (
//     <div 
//       className={`
//         relative w-full aspect-video rounded-xl overflow-hidden cursor-pointer transition-all duration-300
//         ${isActive 
//           ? 'ring-4 ring-yellow-500 shadow-2xl' // Active state uses a visible yellow ring
//           : 'opacity-70 hover:opacity-100 hover:ring-2 ring-gray-600' // Inactive videos are slightly muted
//         }
//         mb-4 last:mb-0 bg-gray-900
//       `}
//       onClick={() => onClick(video)}
//     >
//       {/* Thumbnail Image */}
//       <img 
//         src={video.thumbnailUrl} 
//         alt={video.title} 
//         className="w-full h-full object-cover" 
//         onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x225/374151/ffffff?text=Video"; }}
//       />
//       {/* Play Icon Overlay */}
//       <PlayCircle className="absolute inset-0 m-auto w-10 h-10 text-white opacity-80" fill="currentColor" />
//     </div>
//   );


//   // --- Main Component Render ---
//   return (
//     <div className="bg-black text-white py-20">
//       <div className="container mx-auto px-6">
        
//         {/* Section Header */}
//         <div className="mb-12">
//           <div className="inline-block px-4 py-1 bg-yellow-500 text-black font-semibold text-sm rounded-md mb-4">
//             BITCOIN VIDEOS
//           </div>
//           {/* Note: The image shows a description here, but we'll use the active video title for better UX */}
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">
//             Bitcoin <span className="text-yellow-500">Video Library</span>
//           </h2>
//         </div>

//         {/* Video Player & Playlist Container */}
//         <div className="flex flex-col lg:flex-row gap-8">
          
//           {/* LEFT SIDE: Active Video Player and Description */}
//           <div className="lg:w-7/12">
            
//             {/* Video Player (Embed) */}
//             {/* Aspect ratio container for responsive embedding */}
//             <div className="relative pt-[56.25%] bg-gray-900 rounded-xl overflow-hidden shadow-2xl border-2 border-yellow-500/50">
//               <iframe
//                 className="absolute inset-0 w-full h-full"
//                 src={`${activeVideo.embedUrl}&modestbranding=1&rel=0`}
//                 title={activeVideo.title}
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               ></iframe>
//             </div>

//             {/* Content/Description Block (Matching the large text block below the video in the image) */}
//             <div className="mt-6">
//                 <h3 className="text-xl font-bold text-white mb-2">{activeVideo.title}</h3>
//                 <div className="flex items-center text-sm text-yellow-500 font-medium mb-4">
//                     <Clock className="w-4 h-4 mr-1" /> Duration: {activeVideo.duration}
//                 </div>
//                 <p className="text-gray-400 leading-relaxed text-sm">
//                     {activeVideo.description}
//                 </p>
//                 {/* Adding the generic introductory text seen in the image's description block */}
//                 <h4 className="text-white text-lg font-semibold mt-6 mb-2">New to Bitcoin?</h4>
//                 <p className="text-gray-500 leading-snug text-sm">
//                     Explore Our Bitcoin Educational Program To Learn More And Get More Insight On Bitcoin. Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Utminnim Veniam, Quia Nostrud Exercitation Ullamco Laboris Nisi Utminmim Veniam, Quia Nostrud Exercitation Ullamco Laboris Nisi Ut.
//                 </p>
//             </div>
//           </div>

//           {/* RIGHT SIDE: Scrollable Video Playlist (Thumbnails Only) */}
//           <div className="lg:w-5/12">
//             {/* The image does not show a header here, but for accessibility and context, keeping the list scrollable container */}
//             <h3 className="text-xl font-bold text-white mb-4 border-b border-gray-800 pb-2">
//               All Videos
//             </h3>
            
//             <div 
//               id="video-playlist-container"
//               className="h-[600px] overflow-y-scroll pr-4" // Fixed height and scrollable
//               style={{
//                   scrollbarWidth: 'thin', // Firefox
//                   scrollbarColor: '#ca8a04 #1f2937', // Yellow-600 on Gray-800
//               }}
//             >
//               <style jsx global>{`
//                 /* Webkit browsers (Chrome, Safari) */
//                 #video-playlist-container::-webkit-scrollbar {
//                   width: 8px;
//                 }
//                 #video-playlist-container::-webkit-scrollbar-track {
//                   background: #1f2937; /* Gray-800 */
//                   border-radius: 10px;
//                 }
//                 #video-playlist-container::-webkit-scrollbar-thumb {
//                   background: #a16207; /* Yellow-700 */
//                   border-radius: 10px;
//                 }
//                 #video-playlist-container::-webkit-scrollbar-thumb:hover {
//                   background: #eab308; /* Yellow-500 */
//                 }
//               `}</style>

//               {videoData.map((video) => (
//                 <PlaylistItem
//                   key={video.id}
//                   video={video}
//                   isActive={video.id === activeVideo.id}
//                   onClick={handleVideoClick}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BitcoinVideos;


import React, { useState } from 'react';
import { Play, Clock, Share2, Layers, ChevronRight, Activity } from 'lucide-react';

const videoData = [
  {
    id: 1,
    title: "01 / THE GENESIS BLOCK & PROTOCOL ORIGINS",
    description: "An architectural deep-dive into the whitepaper that redefined scarcity. We examine the immutable ledger and the game theory that secures the network.",
    duration: "40:05",
    embedUrl: "https://www.youtube.com/embed/zQjKD9jiBes",
    thumbnailUrl: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=800&auto=format&fit=crop",
    category: "PROTOCOL"
  },
  {
    id: 2,
    title: "02 / CROSS-BORDER SETTLEMENT IN AFRICA",
    description: "Analyzing the real-world impact of Lightning Network integration for remittances across the African continent. Practicality over theory.",
    duration: "22:10",
    embedUrl: "https://www.youtube.com/embed/jNQXAC9IVRw",
    thumbnailUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop",
    category: "ADOPTION"
  },
  {
    id: 3,
    title: "03 / CRYPTOGRAPHIC CUSTODY: BEST PRACTICES",
    description: "Eliminating third-party risk. A masterclass in multisig setups, cold storage air-gapping, and physical security for digital sovereign assets.",
    duration: "08:45",
    embedUrl: "https://www.youtube.com/embed/IZWrAbFveSA",
    thumbnailUrl: "https://images.unsplash.com/photo-1621416848446-991125d75b06?q=80&w=800&auto=format&fit=crop",
    category: "SECURITY"
  },
  {
    id: 4,
    title: "04 / MACRO-ECONOMIC SCARCITY MECHANICS",
    description: "How the halving cycle creates a predictable monetary policy. Comparing Bitcoin's stock-to-flow ratio against legacy gold and fiat standards.",
    duration: "05:00",
    embedUrl: "https://www.youtube.com/embed/AVWDiXT3nMk",
    thumbnailUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=800&auto=format&fit=crop",
    category: "ECONOMICS"
  }
];

const BitcoinVideos = () => {
  const [activeVideo, setActiveVideo] = useState(videoData[0]);

  return (
    <div className="bg-black min-h-screen text-white font-mono uppercase tracking-tighter">
      {/* Top Status Bar */}
      <div className="border-b border-white/10 px-8 py-3 flex justify-between items-center text-[10px] text-gray-500">
        <div className="flex gap-6">
          <span className="flex items-center gap-2"><Activity className="w-3 h-3 text-yellow-500" /> NETWORK: MAINNET</span>
          <span>EST. 2009</span>
        </div>
        <div className="flex gap-4">
          <span>LATENCY: 24MS</span>
          <span className="text-yellow-500">LIVE FEED</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[calc(100vh-45px)]">
        
        {/* LEFT: MAIN CONTENT AREA (8 cols) */}
        <div className="lg:col-span-8 border-r border-white/10 flex flex-col">
          
          {/* Main Video Section */}
          <div className="p-8 lg:p-12 flex-grow">
            <div className="relative aspect-video bg-[#0A0A0A] border border-white/20">
                <iframe
                    className="w-full h-full"
                    src={`${activeVideo.embedUrl}?autoplay=0&controls=1&modestbranding=1`}
                    title={activeVideo.title}
                    allowFullScreen
                ></iframe>
                
                {/* Visual Accent - Corner Marks */}
                <div className="absolute -top-[1px] -left-[1px] w-4 h-4 border-t border-l border-yellow-500"></div>
                <div className="absolute -bottom-[1px] -right-[1px] w-4 h-4 border-b border-r border-yellow-500"></div>
            </div>

            {/* Video Meta Info */}
            <div className="mt-12 space-y-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-3 mb-4 text-yellow-500 text-xs font-bold tracking-[0.2em]">
                            <Layers className="w-4 h-4" />
                            MODULE: {activeVideo.category}
                        </div>
                        <h1 className="text-3xl md:text-5xl font-black leading-none">
                            {activeVideo.title}
                        </h1>
                    </div>
                    <div className="flex gap-2">
                        <button className="px-6 py-3 border border-white/10 hover:bg-white hover:text-black transition-all text-xs font-bold">
                            SHARE
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-y border-white/10">
                    <div>
                        <span className="block text-gray-500 text-[10px] mb-1">DURATION</span>
                        <span className="text-xl font-bold">{activeVideo.duration}</span>
                    </div>
                    <div>
                        <span className="block text-gray-500 text-[10px] mb-1">FORMAT</span>
                        <span className="text-xl font-bold underline decoration-yellow-500">4K HDR</span>
                    </div>
                    <div>
                        <span className="block text-gray-500 text-[10px] mb-1">LEVEL</span>
                        <span className="text-xl font-bold">PRO-VERIFIED</span>
                    </div>
                </div>

                <p className="text-gray-400 font-sans normal-case text-lg leading-relaxed max-w-3xl">
                    {activeVideo.description}
                </p>
            </div>
          </div>
        </div>

        {/* RIGHT: PLAYLIST SIDEBAR (4 cols) */}
        <div className="lg:col-span-4 bg-[#050505] flex flex-col">
          <div className="p-6 border-b border-white/10 flex justify-between items-center">
            <h2 className="text-sm font-black tracking-[0.3em]">CURRICULUM</h2>
            <span className="text-[10px] text-yellow-500 font-bold">4 / 04 COMPLETE</span>
          </div>

          <div className="flex-grow overflow-y-auto">
            {videoData.map((video) => (
              <button
                key={video.id}
                onClick={() => setActiveVideo(video)}
                className={`w-full group relative flex flex-col border-b border-white/5 transition-all duration-300 ${
                  activeVideo.id === video.id 
                  ? 'bg-white text-black' 
                  : 'bg-transparent text-white hover:bg-white/5'
                }`}
              >
                <div className="p-6 flex gap-6">
                    <div className="w-24 aspect-square bg-zinc-900 flex-shrink-0 border border-white/10 overflow-hidden">
                        <img 
                            src={video.thumbnailUrl} 
                            alt="" 
                            className={`w-full h-full object-cover transition-opacity duration-500 ${activeVideo.id === video.id ? 'opacity-100' : 'opacity-40 group-hover:opacity-100'}`}
                        />
                    </div>
                    <div className="flex flex-col justify-between py-1">
                        <h3 className={`text-xs font-black leading-tight tracking-tight ${activeVideo.id === video.id ? 'text-black' : 'text-gray-300 group-hover:text-white'}`}>
                            {video.title}
                        </h3>
                        <div className={`flex items-center gap-2 text-[10px] font-bold ${activeVideo.id === video.id ? 'text-black/60' : 'text-gray-500'}`}>
                            <Clock className="w-3 h-3" />
                            {video.duration}
                        </div>
                    </div>
                    {activeVideo.id === video.id && (
                        <div className="absolute right-6 top-1/2 -translate-y-1/2">
                            <ChevronRight className="w-5 h-5" />
                        </div>
                    )}
                </div>
              </button>
            ))}
          </div>

          {/* Sidebar Bottom Promo */}
          
        </div>

      </div>
    </div>
  );
};

export default BitcoinVideos;