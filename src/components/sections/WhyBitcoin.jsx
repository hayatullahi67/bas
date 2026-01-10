// import React, { useState } from 'react';
// import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

// export default function WhyBitcoin() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const testimonials = [
//     { id: 1, name: "John Doe", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop", text: "Hay As Majority Of Guys On My Room All Enjoys The Class And They Request Also If They Can Also Attend The Next Class..." },
//     { id: 2, name: "Sarah Smith", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop", text: "Thank You I Have Really Enjoyed Today's Class You Are The Best Instructor I Have Had. Thank You So Much For Everything..." },
//     { id: 3, name: "Mike Johnson", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop", text: "Bitcoin And Guys On My Office Is VERY Grateful On Your Class. We All Just Want To Make You Grateful On Us And We..." },
//     { id: 4, name: "Emma Wilson", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop", text: "The Bitcoin course has completely changed my perspective on money and finance. The instructors are knowledgeable..." },
//     { id: 5, name: "David Chen", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop", text: "I never thought I would understand Bitcoin, but this program made it so accessible. Highly recommend to anyone..." }
//   ];

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev + 1) % testimonials.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
//   };

//   // Logic to get the three required indices
//   const getVisibleTestimonialIndices = () => {
//     const prevIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
//     const nextIndex = (currentIndex + 1) % testimonials.length;
    
//     // Return the indices, which we will use to grab the data and assign classes
//     return [
//       { index: prevIndex, role: 'prev' }, 
//       { index: currentIndex, role: 'curr' }, 
//       { index: nextIndex, role: 'next' }
//     ];
//   };

//   return (
//     <div className="bg-black text-white py-20 overflow-hidden">
//       <div className="container mx-auto px-6">
        
//         {/* Section Header (Unchanged) */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold mb-8">
//             Why Study <span className="text-yellow-500">Bitcoin?</span>
//           </h2>
//           <div className="max-w-4xl mx-auto mb-16">
//             <div className="relative bg-gradient-to-br from-pink-300 via-pink-200 to-pink-100 rounded-3xl overflow-hidden aspect-video shadow-2xl">
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <button className="bg-red-600 hover:bg-red-700 transition-colors rounded-full p-6 shadow-xl">
//                   <Play className="w-8 h-8 text-white fill-white" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Testimonials Title (Unchanged) */}
//         <div className="text-center mb-24"> 
//           <h3 className="text-2xl md:text-3xl font-bold">
//             What Our Learners Are Saying!
//           </h3>
//         </div>

//         {/* CAROUSEL CONTAINER - ABSOLUTE POSITIONING METHOD */}
//         <div className="relative flex justify-center items-start h-[450px] max-w-6xl mx-auto mb-[px]">

//           {/* This central element holds the *active* card and serves as the anchor for the others */}
//           <div className="relative flex justify-center items-start h-full"> 
            
//             {getVisibleTestimonialIndices().map(({ index, role }) => {
//               const testimonial = testimonials[index];
//               const isCenter = role === 'curr';
              
//               // Base class setup for all cards
//               let baseClasses = `
//                 absolute  top-0 rounded-2xl p-6  shadow-xl transition-all duration-500 ease-in-out
//                 flex flex-col justify-between items-center text-center
//                 bg-gray-900 border border-gray-800
//               `;

//               // Conditional classes for size, layer, and position
//               let conditionalClasses;
//               if (isCenter) {
//                 // Center Card: Bigger, Highest Z-index, Full Opacity, Anchored
//                 conditionalClasses = ' h-[360px] z-20 scale-100 opacity-100 w-[400px]  relative  mx-0';
//               } else if (role === 'prev') {
//                 // Left Card: Wider, Lower Z-index, Absolute Positioned to the left of center
//                 conditionalClasses = ' h-[320px] z-10 w-[350px] -left-[340px] top-[20px]'; // Positioned left 
//               } else { // role === 'next'
//                 // Right Card: Wider, Lower Z-index, Absolute Positioned to the right of center
//                 conditionalClasses = ' h-[320px] z-10 w-[350px] -right-[340px] top-[20px]'; // Positioned right
//               }

//               return (
//                 <div 
//                   key={testimonial.id}
//                   className={`${baseClasses} ${conditionalClasses}`}
//                 >
//                   {/* Content Container */}
//                   <div className={`flex flex-col pt-8 ${isCenter ? 'items-center' : 'items-center'} `}> {/* Justify content to start for side cards */}
//                     {/* Profile Image - Pops out on active card */}
//                     <div className={`
//                       rounded-full overflow-hidden mb-6 transition-all duration-500
//                       w-16 h-16 border-4 border-yellow-500
//                     `}>
//                       <img 
//                         src={testimonial.image} 
//                         alt={testimonial.name}
//                         className="w-full h-full object-cover"
//                       />
//                     </div>

//                     {/* Testimonial Text */}
//                     <p className={`
//                       mb-6 transition-all duration-500
//                       ${isCenter ? 'text-gray-300 text-base text-center' : 'text-gray-500 text-sm line-clamp-4 text-left'}
//                     `}>
//                       {testimonial.text}
//                     </p>

//                     {/* Name */}
//                     <h4 className={`
//                       font-bold mb-2
//                       ${isCenter ? 'text-white text-lg text-center' : 'text-gray-400 text-left'}
//                     `}>
//                       {testimonial.name}
//                     </h4>

//                     {/* Link - Only show on active card */}
//                     <div className={`
//                       transition-opacity duration-300
//                       ${isCenter ? 'opacity-100' : 'opacity-0'}
//                     `}>
//                       {/* <a href="#" className="text-yellow-500 font-semibold text-sm hover:text-yellow-400 flex items-center gap-1">
//                         Special Details <span className="text-lg">→</span>
//                       </a> */}
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* Yellow decoration bar (Unchanged) */}
//         {/* <div className="h-12 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-30 rounded-full mx-auto max-w-4xl blur-xl -mt-24 mb-12 pointer-events-none" /> */}

//         {/* Controls (Unchanged) */}
//         <div className="flex flex-col items-center gap-8">
//           {/* Navigation Dots */}
//           <div className="flex justify-center gap-3">
//             {testimonials.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentIndex(index)}
//                 className={`h-3 rounded-full transition-all duration-300 ${
//                   index === currentIndex ? 'bg-yellow-500 w-8' : 'bg-gray-700 w-3 hover:bg-yellow-500/50'
//                 }`}
//               />
//             ))}
//           </div>

//           {/* Arrow Buttons */}
//           <div className="flex justify-center gap-6">
//             <button 
//               onClick={prevSlide}
//               className="bg-yellow-500 hover:bg-yellow-400 text-black rounded-full p-4 transition-transform hover:scale-110 shadow-lg"
//             >
//               <ChevronLeft className="w-6 h-6" />
//             </button>
//             <button 
//               onClick={nextSlide}
//               className="bg-yellow-500 hover:bg-yellow-400 text-black rounded-full p-4 transition-transform hover:scale-110 shadow-lg"
//             >
//               <ChevronRight className="w-6 h-6" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// import React, { useState } from 'react';
// import { Play, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

// const testimonials = [
//   {
//     id: 1,
//     name: "David Chen",
//     role: "Alumni",
//     image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop",
//     text: "I never thought I would understand Bitcoin, but this program made it so accessible. Highly recommend to anyone looking for financial sovereignty."
//   },
//   {
//     id: 2,
//     name: "John Doe",
//     role: "Community Member",
//     image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop",
//     text: "The majority of guys in my group really enjoyed the class. We are already requesting the advanced diploma. The energy is incredible!"
//   },
//   {
//     id: 3,
//     name: "Sarah Smith",
//     role: "Entrepreneur",
//     image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop",
//     text: "Thank you! I really enjoyed today's class. You are the best instructor I have had. This changed my perspective on the global economy."
//   }
// ];

// const WhyBitcoin = () => {
//   const [active, setActive] = useState(1);

//   const next = () => setActive((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
//   const prev = () => setActive((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

//   return (
//     <section className="py-24 bg-black text-white overflow-hidden">
//       <div className="max-w-6xl mx-auto px-6">
        
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold mb-4">
//             Why Study <span className="text-yellow-500">Bitcoin?</span>
//           </h2>
//           <p className="text-gray-400 max-w-2xl mx-auto">
//             Discover how decentralized finance is reshaping the African landscape and 
//             empowering individuals with sound money principles.
//           </p>
//         </div>

//         {/* Improved Video Player - Constrained & Elegant */}
//         <div className="relative max-w-4xl mx-auto mb-24 group">
//           <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
          
//           <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 bg-white/5 shadow-2xl">
//             {/* Thumbnail Image */}
//             <img 
//               src="https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=2069&auto=format&fit=crop" 
//               className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
//               alt="Bitcoin Education Video"
//             />
            
//             {/* Play Button Overlay */}
//             <div className="absolute inset-0 flex items-center justify-center">
//               <button className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center text-black shadow-[0_0_30px_rgba(234,179,8,0.5)] hover:scale-110 transition-all duration-300 group/btn">
//                 <Play className="w-8 h-8 fill-current translate-x-1" />
//               </button>
//             </div>

//             {/* Bottom Bar Info */}
//             <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
//               <span className="text-xs font-bold uppercase tracking-widest text-yellow-500">Featured Video</span>
//               <p className="text-lg font-medium">The Future of Money in Africa (4:12)</p>
//             </div>
//           </div>
//         </div>

//         {/* Testimonials - Modern Slider */}
//         <div className="relative pt-10">
//           <div className="text-center mb-10">
//             <h3 className="text-2xl font-semibold italic text-gray-300">"What our learners are saying"</h3>
//           </div>

//           <div className="flex flex-col md:flex-row gap-8 items-center justify-center min-h-[300px]">
//             {testimonials.map((t, i) => {
//               const isActive = i === active;
//               return (
//                 <div 
//                   key={t.id}
//                   className={`relative p-8 rounded-3xl border transition-all duration-500 max-w-md ${
//                     isActive 
//                     ? 'bg-white/10 border-yellow-500/50 scale-100 opacity-100 shadow-xl' 
//                     : 'bg-white/5 border-white/5 scale-90 opacity-40 hidden md:block'
//                   }`}
//                 >
//                   <Quote className="absolute top-6 right-8 w-10 h-10 text-yellow-500/20" />
//                   <div className="flex items-center gap-4 mb-6">
//                     <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full border-2 border-yellow-500" />
//                     <div>
//                       <h4 className="font-bold">{t.name}</h4>
//                       <p className="text-xs text-yellow-500 uppercase">{t.role}</p>
//                     </div>
//                   </div>
//                   <p className="text-gray-300 leading-relaxed text-sm">"{t.text}"</p>
//                 </div>
//               );
//             })}
//           </div>

//           {/* Navigation Controls */}
//           <div className="flex justify-center items-center gap-6 mt-12">
//             <button onClick={prev} className="p-3 rounded-full border border-white/10 hover:bg-white/10 hover:text-yellow-500 transition-all">
//               <ChevronLeft className="w-6 h-6" />
//             </button>
//             <div className="flex gap-2">
//               {testimonials.map((_, i) => (
//                 <div 
//                   key={i} 
//                   className={`h-1.5 rounded-full transition-all duration-300 ${i === active ? 'w-8 bg-yellow-500' : 'w-2 bg-white/20'}`}
//                 />
//               ))}
//             </div>
//             <button onClick={next} className="p-3 rounded-full border border-white/10 hover:bg-white/10 hover:text-yellow-500 transition-all">
//               <ChevronRight className="w-6 h-6" />
//             </button>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default WhyBitcoin;



import React, { useState } from 'react';
import { Play, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "David Chen",
    role: "ALUMNI",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop",
    text: "I never thought I would understand Bitcoin, but this program made it so accessible. Highly recommend to anyone looking for financial sovereignty."
  },
  {
    id: 2,
    name: "John Doe",
    role: "COMMUNITY MEMBER",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop",
    text: "The majority of guys in my group really enjoyed the class. We are already requesting the advanced diploma. The energy is incredible!"
  },
  {
    id: 3,
    name: "Sarah Smith",
    role: "ENTREPRENEUR",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop",
    text: "Thank you! I really enjoyed today's class. You are the best instructor I have had. This changed my perspective on the global economy."
  },
  {
    id: 4,
    name: "Michael K.",
    role: "STUDENT",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop",
    text: "The grassroots approach BAS takes is exactly what Africa needs. Learning about self-custody was a massive eye-opener for me."
  }
];

const WhyBitcoin = () => {
  const [active, setActive] = useState(0);

  const next = () => setActive((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  const prev = () => setActive((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  return (
    <section className="py-24 bg-black text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Study <span className="text-yellow-500">Bitcoin?</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover how decentralized finance is reshaping the African landscape and 
            empowering individuals with sound money principles.
          </p>
        </div>

        {/* Video Player */}
        <div className="relative max-w-4xl mx-auto mb-24 group">
          <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
          <div className="relative aspect-video  overflow-hidden border border-white/10 bg-white/5 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=2069&auto=format&fit=crop" 
              className="w-full h-full object-cover opacity-60 transition-transform duration-700"
              alt="Bitcoin Education Video"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center text-black shadow-[0_0_30px_rgba(234,179,8,0.5)] hover:scale-110 transition-all duration-300">
                <Play className="w-8 h-8 fill-current translate-x-1" />
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mb-10">
          <h3 className="text-3xl font-bold text-white">What Our Learners Are Saying!</h3>
        </div>

        {/* Sliding Carousel Wrapper */}
        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(calc(-${active * 100}%))` }}
            >
              {testimonials.map((t, i) => (
                <div key={t.id} className="w-full flex-shrink-0 px-4 flex justify-center">
                  <div className={`relative p-8 rounded-3xl border transition-all duration-500 w-full max-w-lg bg-[#111111] ${
                    i === active ? 'border-yellow-500 shadow-[0_0_20px_rgba(234,179,8,0.1)]' : 'border-white/5 opacity-40 scale-95'
                  }`}>
                    <Quote className="absolute top-8 right-8 w-10 h-10 text-yellow-500/10" strokeWidth={3} />
                    
                    <div className="flex items-center gap-4 mb-8">
                      <div className="relative">
                        <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full border-2 border-yellow-500 object-cover" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg leading-none">{t.name}</h4>
                        <p className="text-[10px] text-yellow-500 font-bold mt-1 tracking-widest">{t.role}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-400 text-lg leading-relaxed italic">
                      "{t.text}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls - Matching your screenshot style */}
          <div className="flex flex-col items-center mt-12 gap-6">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <div 
                  key={i} 
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === active ? 'w-10 bg-yellow-500' : 'w-2 bg-white/20'}`}
                />
              ))}
            </div>
            
            <div className="flex gap-4">
              <button 
                onClick={prev} 
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition-all group"
              >
                <ChevronLeft className="w-5 h-5 transition-transform group-active:scale-90" />
              </button>
              <button 
                onClick={next} 
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition-all group"
              >
                <ChevronRight className="w-5 h-5 transition-transform group-active:scale-90" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyBitcoin;