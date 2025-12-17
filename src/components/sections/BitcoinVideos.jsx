// import React, { useState } from 'react';
// import { Play } from 'lucide-react';

// export default function BitcoinVideos() {
//   // Sample video data - replace with real YouTube video IDs or URLs
//   const videos = [
//     {
//       id: 1,
//       title: 'New To Bitcoin?',
//       description: 'Explore our Bitcoin Educational Program to learn more and get more insight on Bitcoin. Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//       videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
//       thumbnail: 'https://images.unsplash.com/photo-1611339555312-e607c90352fd?w=400&h=225&fit=crop',
//     },
//     {
//       id: 2,
//       title: 'Bitcoin Basics Explained',
//       description: 'Understanding the fundamentals of Bitcoin and blockchain technology. Learn how decentralized systems work and why Bitcoin matters.',
//       videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
//       thumbnail: 'https://images.unsplash.com/photo-1518611505868-48510c2e2e80?w=400&h=225&fit=crop',
//     },
//     {
//       id: 3,
//       title: 'Getting Started with Wallets',
//       description: 'A comprehensive guide on Bitcoin wallets, security best practices, and how to safely store your cryptocurrency.',
//       videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
//       thumbnail: 'https://images.unsplash.com/photo-1526628653497-7706f9c1744d?w=400&h=225&fit=crop',
//     },
//     {
//       id: 4,
//       title: 'Mining and Transactions',
//       description: 'Dive deep into how Bitcoin mining works and understand the transaction process on the blockchain.',
//       videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
//       thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=225&fit=crop',
//     },
//     {
//       id: 5,
//       title: 'Bitcoin Investment Strategy',
//       description: 'Learn investment strategies and risk management techniques for Bitcoin and other cryptocurrencies.',
//       videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
//       thumbnail: 'https://images.unsplash.com/photo-1563564311-ee3e91c64b19?w=400&h=225&fit=crop',
//     },
//     {
//       id: 6,
//       title: 'Crypto Market Analysis',
//       description: 'Understanding market trends, charts, and how to analyze cryptocurrency market movements.',
//       videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
//       thumbnail: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=225&fit=crop',
//     },
//   ];

//   // State for active video
//   const [activeVideoId, setActiveVideoId] = useState(videos[0]?.id || 1);
//   const activeVideo = videos.find(v => v.id === activeVideoId);

//   return (
//     <section className="bg-black text-white py-20">
//       <div className="container mx-auto px-6">
        
//         {/* Header */}
//         <div className="mb-12">
//           <div className="inline-block px-4 py-1 bg-yellow-500 text-black font-semibold text-sm rounded-md mb-4">
//             BITCOIN VIDEOS
//           </div>
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">
//             Learn From <span className="text-yellow-500">Expert Videos</span>
//           </h2>
//           <p className="text-gray-400 max-w-2xl">
//             Watch our curated collection of Bitcoin educational videos to deepen your understanding.
//           </p>
//         </div>

//         <hr className="border-gray-800 mb-12" />

//         {/* Main Content - Flex Container */}
//         <div className="flex flex-col lg:flex-row gap-8">
          
//           {/* LEFT SIDE - Active Video Player & Description */}
//           <div className="flex-1 min-w-0">
//             {activeVideo && (
//               <div>
//                 {/* Video Player Container */}
//                 <div className="relative bg-gradient-to-br from-red-300 to-red-200 rounded-2xl overflow-hidden aspect-video shadow-2xl mb-6">
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <button className="bg-red-600 hover:bg-red-700 transition-colors rounded-full p-6 shadow-xl z-10">
//                       <Play className="w-8 h-8 text-white fill-white" />
//                     </button>
//                   </div>
//                 </div>

//                 {/* Video Title */}
//                 <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
//                   {activeVideo.title}
//                 </h3>

//                 {/* Video Description - Only shows for active video */}
//                 <p className="text-gray-300 leading-relaxed">
//                   {activeVideo.description}
//                 </p>
//               </div>
//             )}
//           </div>

//           {/* RIGHT SIDE - Scrollable Video List */}
//           <div className="lg:w-80">
//             <div className="flex flex-col h-full">
//               <h4 className="text-lg font-bold mb-4 text-white">More Videos</h4>
              
//               {/* Scrollable Container */}
//               <div className="flex-1 overflow-y-auto pr-2 space-y-4 custom-scrollbar">
//                 {videos.map((video) => {
//                   const isActive = video.id === activeVideoId;
                  
//                   return (
//                     <button
//                       key={video.id}
//                       onClick={() => setActiveVideoId(video.id)}
//                       className={`w-full rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105 ${
//                         isActive
//                           ? 'ring-2 ring-yellow-500 shadow-lg shadow-yellow-500/50'
//                           : 'hover:ring-1 hover:ring-gray-600'
//                       }`}
//                     >
//                       {/* Thumbnail Container */}
//                       <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden group">
//                         {/* Thumbnail Image */}
//                         <img 
//                           src={video.thumbnail} 
//                           alt={video.title}
//                           className="w-full h-full object-cover group-hover:brightness-75 transition-all"
//                         />

//                         {/* Play Icon Overlay */}
//                         <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/60 transition-all">
//                           <Play className="w-6 h-6 text-white fill-white opacity-80 group-hover:opacity-100" />
//                         </div>

//                         {/* Active Indicator */}
//                         {isActive && (
//                           <div className="absolute inset-0 border-2 border-yellow-500 rounded-lg pointer-events-none" />
//                         )}
//                       </div>

//                       {/* Video Title in List */}
//                       <div className={`pt-2 text-sm font-semibold text-left ${
//                         isActive ? 'text-yellow-400' : 'text-gray-300 group-hover:text-white'
//                       }`}>
//                         {video.title}
//                       </div>
//                     </button>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>

//         </div>

//       </div>

//       {/* Custom Scrollbar Styles */}
//       <style>{`
//         .custom-scrollbar::-webkit-scrollbar {
//           width: 8px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-track {
//           background: transparent;
//         }
//         .custom-scrollbar::-webkit-scrollbar-thumb {
//           background: #374151;
//           border-radius: 4px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-thumb:hover {
//           background: #4B5563;
//         }
//       `}</style>
//     </section>
//   );
// }



import React, { useState } from 'react';
import { PlayCircle, Clock } from 'lucide-react';

// --- Real Video Data for the Playlist ---
// Note: These videos provide educational content on various Bitcoin topics.
// The embedUrl uses the video ID to ensure the actual video plays.
const videoData = [
  {
    id: 1,
    title: "Bitcoin 101: What is Bitcoin and Why Does it Matter?",
    description: "This foundational lesson covers the history, purpose, and basic mechanisms of Bitcoin. Understand why this digital asset has captured the world's attention and its role in modern finance. This video is great for absolute beginners.",
    duration: "40:05", // Estimated duration
    embedUrl: "https://www.youtube.com/embed/zQjKD9jiBes?autoplay=0", // Bitcoin 101 Course
    thumbnailUrl: "https://placehold.co/400x225/eab308/000000?text=BITCOIN+101",
  },
  {
    id: 2,
    title: "The Africa Story: Building Your Proof of Work",
    description: "A deep dive into how Bitcoin is being adopted across the African continent, focusing on practical applications, remittance, and financial inclusion. Essential viewing for regional context.",
    duration: "22:10",
    embedUrl: "https://www.youtube.com/embed/jNQXAC9IVRw?autoplay=0", // General Bitcoin Intro (using original placeholder ID)
    thumbnailUrl: "https://placehold.co/400x225/2563eb/ffffff?text=Africa+Story",
  },
  {
    id: 3,
    title: "Getting Started with Your First Wallet",
    description: "A step-by-step guide on setting up and securing your first non-custodial Bitcoin wallet. Learn about seed phrases, private keys, and best security practices.",
    duration: "08:45",
    embedUrl: "https://www.youtube.com/embed/IZWrAbFveSA?autoplay=0", // How To Invest In Crypto Complete Beginner's Guide (covers wallets)
    thumbnailUrl: "https://placehold.co/400x225/10b981/000000?text=Wallet+Setup",
  },
  {
    id: 4,
    title: "Understanding Halving and Supply Mechanics",
    description: "Explores the Bitcoin Halving event, its economic implications, and how Bitcoin's finite supply mechanism drives its value proposition. Intermediate level content.",
    duration: "05:00", // Estimated duration
    embedUrl: "https://www.youtube.com/embed/AVWDiXT3nMk?autoplay=0", // Bitcoin halving explained
    thumbnailUrl: "https://placehold.co/400x225/f97316/000000?text=Halving+Explained",
  },
  {
    id: 5,
    title: "Advanced Trading Strategies for Beginners",
    description: "An introduction to technical analysis, order types, and basic risk management strategies used in Bitcoin trading. Not financial advice, purely educational.",
    duration: "35:00",
    embedUrl: "https://www.youtube.com/embed/C0DPogF-4Zk?autoplay=0", // General Trading Intro (using original placeholder ID)
    thumbnailUrl: "https://placehold.co/400x225/be185d/ffffff?text=Advanced+Trading",
  },
  {
    id: 6,
    title: "The Philosophy of Sound Money",
    description: "Discussing the economic and philosophical arguments for decentralized, hard money versus fiat currencies. A historical and conceptual overview.",
    duration: "08:00", // Estimated duration
    embedUrl: "https://www.youtube.com/embed/MaXwCP0qvmE?autoplay=0", // The Bitcoin Dream / Introductory Course
    thumbnailUrl: "https://placehold.co/400x225/6d28d9/ffffff?text=Sound+Money",
  },
];


const BitcoinVideos = () => {
  // Set the first video as active by default
  const [activeVideo, setActiveVideo] = useState(videoData[0]);

  // Handle click on a video thumbnail in the playlist
  const handleVideoClick = (video) => {
    setActiveVideo(video);
    // Optional: Scroll back to the top of the container when a new video is clicked
    document.getElementById('video-playlist-container')?.scrollTo({ top: 0, behavior: 'smooth' });
  };


  // --- Sub-Component: Minimal Playlist Item (Thumbnail Only) ---
  const PlaylistItem = ({ video, isActive, onClick }) => (
    <div 
      className={`
        relative w-full aspect-video rounded-xl overflow-hidden cursor-pointer transition-all duration-300
        ${isActive 
          ? 'ring-4 ring-yellow-500 shadow-2xl' // Active state uses a visible yellow ring
          : 'opacity-70 hover:opacity-100 hover:ring-2 ring-gray-600' // Inactive videos are slightly muted
        }
        mb-4 last:mb-0 bg-gray-900
      `}
      onClick={() => onClick(video)}
    >
      {/* Thumbnail Image */}
      <img 
        src={video.thumbnailUrl} 
        alt={video.title} 
        className="w-full h-full object-cover" 
        onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x225/374151/ffffff?text=Video"; }}
      />
      {/* Play Icon Overlay */}
      <PlayCircle className="absolute inset-0 m-auto w-10 h-10 text-white opacity-80" fill="currentColor" />
    </div>
  );


  // --- Main Component Render ---
  return (
    <div className="bg-black text-white py-20">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-block px-4 py-1 bg-yellow-500 text-black font-semibold text-sm rounded-md mb-4">
            BITCOIN VIDEOS
          </div>
          {/* Note: The image shows a description here, but we'll use the active video title for better UX */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Bitcoin <span className="text-yellow-500">Video Library</span>
          </h2>
        </div>

        {/* Video Player & Playlist Container */}
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* LEFT SIDE: Active Video Player and Description */}
          <div className="lg:w-7/12">
            
            {/* Video Player (Embed) */}
            {/* Aspect ratio container for responsive embedding */}
            <div className="relative pt-[56.25%] bg-gray-900 rounded-xl overflow-hidden shadow-2xl border-2 border-yellow-500/50">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`${activeVideo.embedUrl}&modestbranding=1&rel=0`}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Content/Description Block (Matching the large text block below the video in the image) */}
            <div className="mt-6">
                <h3 className="text-xl font-bold text-white mb-2">{activeVideo.title}</h3>
                <div className="flex items-center text-sm text-yellow-500 font-medium mb-4">
                    <Clock className="w-4 h-4 mr-1" /> Duration: {activeVideo.duration}
                </div>
                <p className="text-gray-400 leading-relaxed text-sm">
                    {activeVideo.description}
                </p>
                {/* Adding the generic introductory text seen in the image's description block */}
                <h4 className="text-white text-lg font-semibold mt-6 mb-2">New to Bitcoin?</h4>
                <p className="text-gray-500 leading-snug text-sm">
                    Explore Our Bitcoin Educational Program To Learn More And Get More Insight On Bitcoin. Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Utminnim Veniam, Quia Nostrud Exercitation Ullamco Laboris Nisi Utminmim Veniam, Quia Nostrud Exercitation Ullamco Laboris Nisi Ut.
                </p>
            </div>
          </div>

          {/* RIGHT SIDE: Scrollable Video Playlist (Thumbnails Only) */}
          <div className="lg:w-5/12">
            {/* The image does not show a header here, but for accessibility and context, keeping the list scrollable container */}
            <h3 className="text-xl font-bold text-white mb-4 border-b border-gray-800 pb-2">
              All Videos
            </h3>
            
            <div 
              id="video-playlist-container"
              className="h-[600px] overflow-y-scroll pr-4" // Fixed height and scrollable
              style={{
                  scrollbarWidth: 'thin', // Firefox
                  scrollbarColor: '#ca8a04 #1f2937', // Yellow-600 on Gray-800
              }}
            >
              <style jsx global>{`
                /* Webkit browsers (Chrome, Safari) */
                #video-playlist-container::-webkit-scrollbar {
                  width: 8px;
                }
                #video-playlist-container::-webkit-scrollbar-track {
                  background: #1f2937; /* Gray-800 */
                  border-radius: 10px;
                }
                #video-playlist-container::-webkit-scrollbar-thumb {
                  background: #a16207; /* Yellow-700 */
                  border-radius: 10px;
                }
                #video-playlist-container::-webkit-scrollbar-thumb:hover {
                  background: #eab308; /* Yellow-500 */
                }
              `}</style>

              {videoData.map((video) => (
                <PlaylistItem
                  key={video.id}
                  video={video}
                  isActive={video.id === activeVideo.id}
                  onClick={handleVideoClick}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BitcoinVideos;