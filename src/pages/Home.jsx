// import React, { useMemo } from 'react';
// import { Link } from 'react-router-dom';
// import { ArrowRight, BookOpen, Users, Shield, TrendingUp } from 'lucide-react';
// import { blogPosts, testimonials, features, categories } from '../mock';

// const Home = () => {
//   // Group posts by category for categorized display (dynamic, works with API-shaped data)
//   const groupedPosts = useMemo(() => {
//     return blogPosts.reduce((acc, post) => {
//       const cat = post.category || 'Uncategorized';
//       if (!acc[cat]) acc[cat] = [];
//       acc[cat].push(post);
//       return acc;
//     }, {});
//   }, [blogPosts]);

//   // Use categories from mock if available, otherwise derive from grouped posts
//   const categoriesToShow = (categories && categories.length > 0)
//     ? categories.filter(c => c !== 'All')
//     : Object.keys(groupedPosts);

//   return (
//     <div className="pt-16">
//       {/* Hero Section */}
//       <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
//         {/* Background Image with Overlay */}
//         <div 
//           className="absolute inset-0 z-0"
//           style={{
//             backgroundImage: 'url(https://images.unsplash.com/photo-1594058823798-2f15b332a414?w=1920&q=80)',
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//           }}
//         >
//           <div className="absolute inset-0 bg-black/80" />
//           <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black" />
//         </div>

//         {/* Hero Content */}
//         <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
//           <div className="inline-block mt-[30px] mb-6 px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full">
//             <span className="text-yellow-500 text-sm font-semibold">2+ Years of Bitcoin Education</span>
//           </div>
//           <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
//             Learn Bitcoin.
//             <br />
//             <span className="text-yellow-500">Change Your Life.</span>
//           </h1>
//           <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
//             Empowering Africans through Bitcoin education and financial freedom.
//             Join the movement towards self-sovereignty.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link 
//               to="/blog" 
//               className="inline-flex items-center justify-center px-8 py-4 bg-yellow-500 text-black font-bold text-lg rounded-lg hover:bg-yellow-400 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-yellow-500/50"
//             >
//               Start Learning
//               <ArrowRight className="ml-2" size={20} />
//             </Link>
//             <Link 
//               to="/about" 
//               className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-yellow-500 text-yellow-500 font-bold text-lg rounded-lg hover:bg-yellow-500 hover:text-black transition-all duration-200"
//             >
//               Our Mission
//             </Link>
//           </div>

//           {/* Stats */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
//             <div>
//               <div className="text-4xl font-bold text-yellow-500 mb-2">2+</div>
//               <div className="text-gray-400 text-sm">Years Teaching</div>
//             </div>
//             <div>
//               <div className="text-4xl font-bold text-yellow-500 mb-2">500+</div>
//               <div className="text-gray-400 text-sm">Students Reached</div>
//             </div>
//             <div>
//               <div className="text-4xl font-bold text-yellow-500 mb-2">50+</div>
//               <div className="text-gray-400 text-sm">Communities</div>
//             </div>
//             <div>
//               <div className="text-4xl font-bold text-yellow-500 mb-2">100%</div>
//               <div className="text-gray-400 text-sm">Free Education</div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Why Bitcoin Matters */}
//       <section className="py-20 px-6">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">
//               Why Bitcoin <span className="text-yellow-500">Matters</span>
//             </h2>
//             <p className="text-xl text-gray-400 max-w-2xl mx-auto">
//               Discover how Bitcoin is transforming lives and creating opportunities across Africa
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {features.map((feature) => (
//               <div
//                 key={feature.id}
//                 className="group relative overflow-hidden rounded-xl bg-gray-900 border border-gray-800 hover:border-yellow-500 transition-all duration-300 hover:scale-105"
//               >
//                 <div className="aspect-video overflow-hidden">
//                   <img
//                     src={feature.image}
//                     alt={feature.title}
//                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
//                   />
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-2xl font-bold mb-3 text-yellow-500">{feature.title}</h3>
//                   <p className="text-gray-400 leading-relaxed">{feature.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* About Mission */}
//       <section className="py-20 px-6 bg-gradient-to-b from-transparent to-gray-900/30">
//         <div className="max-w-6xl mx-auto">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <div className="inline-block mb-4 px-3 py-1 bg-yellow-500/10 border border-yellow-500/30 rounded-full">
//                 <span className="text-yellow-500 text-sm font-semibold">Our Mission</span>
//               </div>
//               <h2 className="text-4xl md:text-5xl font-bold mb-6">
//                 Spreading Bitcoin Adoption Across <span className="text-yellow-500">Africa</span>
//               </h2>
//               <p className="text-lg text-gray-300 mb-6 leading-relaxed">
//                 For the past 2 years, I've been on a mission to educate Africans about Bitcoin and its 
//                 transformative power. From local meetups to online workshops, we're building a community 
//                 of empowered individuals who understand the importance of financial self-sovereignty.
//               </p>
//               <p className="text-lg text-gray-300 mb-8 leading-relaxed">
//                 Bitcoin isn't just technology—it's hope for millions seeking economic freedom. Together, 
//                 we're creating a future where everyone has access to sound money and financial opportunity.
//               </p>
//               <Link 
//                 to="/about" 
//                 className="inline-flex items-center text-yellow-500 font-semibold hover:text-yellow-400 transition-colors duration-200"
//               >
//                 Read Our Full Story
//                 <ArrowRight className="ml-2" size={20} />
//               </Link>
//             </div>
//             <div className="grid grid-cols-2 gap-4">
//               <div className="space-y-4">
//                 <div className="p-6 bg-gray-900 border border-gray-800 rounded-xl">
//                   <BookOpen className="text-yellow-500 mb-3" size={32} />
//                   <h3 className="text-lg font-semibold mb-2">Education First</h3>
//                   <p className="text-sm text-gray-400">Comprehensive Bitcoin courses for all levels</p>
//                 </div>
//                 <div className="p-6 bg-gray-900 border border-gray-800 rounded-xl">
//                   <Shield className="text-yellow-500 mb-3" size={32} />
//                   <h3 className="text-lg font-semibold mb-2">Security Focus</h3>
//                   <p className="text-sm text-gray-400">Learn to protect your Bitcoin safely</p>
//                 </div>
//               </div>
//               <div className="space-y-4 mt-8">
//                 <div className="p-6 bg-gray-900 border border-gray-800 rounded-xl">
//                   <Users className="text-yellow-500 mb-3" size={32} />
//                   <h3 className="text-lg font-semibold mb-2">Community Driven</h3>
//                   <p className="text-sm text-gray-400">Join a network of Bitcoin enthusiasts</p>
//                 </div>
//                 <div className="p-6 bg-gray-900 border border-gray-800 rounded-xl">
//                   <TrendingUp className="text-yellow-500 mb-3" size={32} />
//                   <h3 className="text-lg font-semibold mb-2">Practical Skills</h3>
//                   <p className="text-sm text-gray-400">Real-world Bitcoin usage and strategies</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Recent Blog Posts - CATEGORIZED */}
//       <section className="py-20 px-6">
//         <div className="max-w-7xl mx-auto">
//           {/* Header */}
//           <div className="flex justify-between items-end mb-12">
//             <div>
//               <h2 className="text-4xl md:text-5xl font-bold mb-4">
//                 From Our News and <span className="text-yellow-500">Stories</span>
//               </h2>
//               <p className="text-xl text-gray-400">Latest insights on Bitcoin Movement and adoption in Africa</p>
//             </div>
//             <Link 
//               to="/blog" 
//               className="hidden md:inline-flex items-center text-yellow-500 font-semibold hover:text-yellow-400 transition-colors duration-200"
//             >
//               View All Posts
//               <ArrowRight className="ml-2" size={20} />
//             </Link>
//           </div>

//           {/* Dynamically render categories and their posts (preserves existing UI) */}
//           {categoriesToShow.map((cat) => {
//             const posts = (groupedPosts[cat] || []).slice(0, 3);
//             if (!posts || posts.length === 0) return null;
//             return (
//               <div key={cat} className="mb-16">
//                 <h3 className="text-2xl md:text-3xl font-bold mb-8">{cat}</h3>
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                   {posts.map((post) => (
//                     <Link
//                       key={post.id}
//                       to={`/blog/${post.slug}`}
//                       className="group bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-yellow-500 transition-all duration-300 hover:scale-105"
//                     >
//                       <div className="aspect-video overflow-hidden">
//                         <img
//                           src={post.image}
//                           alt={post.title}
//                           className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
//                         />
//                       </div>
//                       <div className="p-6">
//                         <div className="flex items-center justify-between mb-3">
//                           <span className="text-xs font-semibold text-yellow-500 bg-yellow-500/10 px-3 py-1 rounded-full">
//                             {post.category}
//                           </span>
//                           <span className="text-xs text-gray-500">{post.readTime}</span>
//                         </div>
//                         <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-500 transition-colors duration-200">
//                           {post.title}
//                         </h3>
//                         <p className="text-gray-400 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
//                         <div className="flex items-center justify-between text-sm">
//                           <span className="text-gray-500">{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
//                           <span className="text-yellow-500 group-hover:translate-x-1 transition-transform duration-200">→</span>
//                         </div>
//                       </div>
//                     </Link>
//                   ))}
//                 </div>
//               </div>
//             );
//           })}

//           <div className="text-center mt-8 md:hidden">
//             <Link 
//               to="/blog" 
//               className="inline-flex items-center text-yellow-500 font-semibold hover:text-yellow-400 transition-colors duration-200"
//             >
//               View All Posts
//               <ArrowRight className="ml-2" size={20} />
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="py-20 px-6 bg-gradient-to-b from-gray-900/30 to-transparent">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">
//               Success <span className="text-yellow-500">Stories</span>
//             </h2>
//             <p className="text-xl text-gray-400 max-w-2xl mx-auto">
//               Hear from learners who transformed their financial futures with Bitcoin
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {testimonials.map((testimonial) => (
//               <div
//                 key={testimonial.id}
//                 className="p-8 bg-gray-900 border border-gray-800 rounded-xl hover:border-yellow-500 transition-colors duration-300"
//               >
//                 <div className="flex items-center mb-6">
//                   <div className="w-14 h-14 rounded-full bg-yellow-500 flex items-center justify-center text-black font-bold text-lg">
//                     {testimonial.avatar}
//                   </div>
//                   <div className="ml-4">
//                     <div className="font-semibold text-white">{testimonial.name}</div>
//                     <div className="text-sm text-gray-400">{testimonial.location}</div>
//                   </div>
//                 </div>
//                 <p className="text-gray-300 leading-relaxed italic">"{testimonial.text}"</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Newsletter CTA */}
//       <section className="py-20 px-6">
//         <div className="max-w-4xl mx-auto">
//           <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border border-yellow-500/30 rounded-2xl p-12 text-center">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">
//               Join the <span className="text-yellow-500">Movement</span>
//             </h2>
//             <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
//               Get exclusive Bitcoin education content, tips, and community updates delivered to your inbox.
//             </p>
//             <form 
//               className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
//               onSubmit={(e) => {
//                 e.preventDefault();
//                 alert('Newsletter signup feature coming soon!');
//               }}
//             >
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="flex-1 px-6 py-4 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-500"
//                 required
//               />
//               <button
//                 type="submit"
//                 className="px-8 py-4 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-400 transition-colors duration-200 hover:scale-105"
//               >
//                 Subscribe
//               </button>
//             </form>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;





import React, { useMemo, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, Shield, TrendingUp } from 'lucide-react';
import { blogPosts, testimonials, features, categories } from '../mock';

const Home = () => {
  // Carousel state for testimonials
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Carousel navigation helpers
  const prevTestimonial = () => {
    setCurrentIndex((i) => (testimonials && testimonials.length ? (i - 1 + testimonials.length) % testimonials.length : 0));
  };
  const nextTestimonial = () => {
    setCurrentIndex((i) => (testimonials && testimonials.length ? (i + 1) % testimonials.length : 0));
  };

  // Auto-slide testimonials every 5 seconds (respects pause)
  useEffect(() => {
    if (!testimonials || testimonials.length === 0) return;
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, testimonials]);

  // Group posts by category for categorized display (dynamic, works with API-shaped data)
  const groupedPosts = useMemo(() => {
    return blogPosts.reduce((acc, post) => {
      const cat = post.category || 'Uncategorized';
      if (!acc[cat]) acc[cat] = [];
      acc[cat].push(post);
      return acc;
    }, {});
  }, [blogPosts]);

  // Use categories from mock if available, otherwise derive from grouped posts
  const categoriesToShow = (categories && categories.length > 0)
    ? categories.filter(c => c !== 'All')
    : Object.keys(groupedPosts);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1594058823798-2f15b332a414?w=1920&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/80" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-block mt-[30px] mb-6 px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full">
            <span className="text-yellow-500 text-sm font-semibold">2+ Years of Bitcoin Education</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            Learn Bitcoin.
            <br />
            <span className="text-yellow-500">Change Your Life.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Empowering Africans through Bitcoin education and financial freedom.
            Join the movement towards self-sovereignty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
            <div>
              <div className="text-4xl font-bold text-yellow-500 mb-2">2+</div>
              <div className="text-gray-400 text-sm">Years Teaching</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-500 mb-2">500+</div>
              <div className="text-gray-400 text-sm">Students Reached</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-500 mb-2">50+</div>
              <div className="text-gray-400 text-sm">Communities</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-500 mb-2">100%</div>
              <div className="text-gray-400 text-sm">Free Education</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Bitcoin Matters */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Bitcoin <span className="text-yellow-500">Matters</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Discover how Bitcoin is transforming lives and creating opportunities across Africa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="group relative overflow-hidden rounded-xl bg-gray-900 border border-gray-800 hover:border-yellow-500 transition-all duration-300 hover:scale-105"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-yellow-500">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Mission */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-3 py-1 bg-yellow-500/10 border border-yellow-500/30 rounded-full">
                <span className="text-yellow-500 text-sm font-semibold">Our Mission</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Spreading Bitcoin Adoption Across <span className="text-yellow-500">Africa</span>
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                For the past 2 years, I've been on a mission to educate Africans about Bitcoin and its 
                transformative power. From local meetups to online workshops, we're building a community 
                of empowered individuals who understand the importance of financial self-sovereignty.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Bitcoin isn't just technology—it's hope for millions seeking economic freedom. Together, 
                we're creating a future where everyone has access to sound money and financial opportunity.
              </p>
              <Link 
                to="/about" 
                className="inline-flex items-center text-yellow-500 font-semibold hover:text-yellow-400 transition-colors duration-200"
              >
                Read Our Full Story
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="p-6 bg-gray-900 border border-gray-800 rounded-xl">
                  <BookOpen className="text-yellow-500 mb-3" size={32} />
                  <h3 className="text-lg font-semibold mb-2">Education First</h3>
                  <p className="text-sm text-gray-400">Comprehensive Bitcoin courses for all levels</p>
                </div>
                <div className="p-6 bg-gray-900 border border-gray-800 rounded-xl">
                  <Shield className="text-yellow-500 mb-3" size={32} />
                  <h3 className="text-lg font-semibold mb-2">Security Focus</h3>
                  <p className="text-sm text-gray-400">Learn to protect your Bitcoin safely</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="p-6 bg-gray-900 border border-gray-800 rounded-xl">
                  <Users className="text-yellow-500 mb-3" size={32} />
                  <h3 className="text-lg font-semibold mb-2">Community Driven</h3>
                  <p className="text-sm text-gray-400">Join a network of Bitcoin enthusiasts</p>
                </div>
                <div className="p-6 bg-gray-900 border border-gray-800 rounded-xl">
                  <TrendingUp className="text-yellow-500 mb-3" size={32} />
                  <h3 className="text-lg font-semibold mb-2">Practical Skills</h3>
                  <p className="text-sm text-gray-400">Real-world Bitcoin usage and strategies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Blog Posts - CATEGORIZED */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                From Our News and <span className="text-yellow-500">Stories</span>
              </h2>
              <p className="text-xl text-gray-400">Latest insights on Bitcoin Movement and adoption in Africa</p>
            </div>
            <Link 
              to="/blog" 
              className="hidden md:inline-flex items-center text-yellow-500 font-semibold hover:text-yellow-400 transition-colors duration-200"
            >
              View All Posts
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>

          {/* Dynamically render categories and their posts (preserves existing UI) */}
          {categoriesToShow.map((cat) => {
            const posts = (groupedPosts[cat] || []).slice(0, 3);
            if (!posts || posts.length === 0) return null;
            return (
              <div key={cat} className="mb-16">
                <h3 className="text-2xl md:text-3xl font-bold mb-8">{cat}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {posts.map((post) => (
                    <Link
                      key={post.id}
                      to={`/blog/${post.slug}`}
                      className="group bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-yellow-500 transition-all duration-300 hover:scale-105"
                    >
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs font-semibold text-yellow-500 bg-yellow-500/10 px-3 py-1 rounded-full">
                            {post.category}
                          </span>
                          <span className="text-xs text-gray-500">{post.readTime}</span>
                        </div>
                        <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-500 transition-colors duration-200">
                          {post.title}
                        </h3>
                        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-500">{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                          <span className="text-yellow-500 group-hover:translate-x-1 transition-transform duration-200">→</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}

          <div className="text-center mt-8 md:hidden">
            <Link 
              to="/blog" 
              className="inline-flex items-center text-yellow-500 font-semibold hover:text-yellow-400 transition-colors duration-200"
            >
              View All Posts
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials - CAROUSEL */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-900/30 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Success <span className="text-yellow-500">Stories</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Hear from learners who transformed their financial futures with Bitcoin
            </p>
          </div>

          {/* Carousel Container */}
          <div
            className="relative w-[40%] m-[auto] overflow-visible"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onKeyDown={(e) => { if (e.key === 'ArrowLeft') prevTestimonial(); if (e.key === 'ArrowRight') nextTestimonial(); }}
            tabIndex={0}
          >
            {/* Prev button */}
            <button
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
              className="absolute -left-6 md:-left-10 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-gray-800/70 hover:bg-yellow-500 flex items-center justify-center text-white transition-colors duration-200 shadow-lg"
            >
              <ArrowRight className="rotate-180" size={18} />
            </button>

            {/* Next button */}
            <button
              onClick={nextTestimonial}
              aria-label="Next testimonial"
              className="absolute -right-6 md:-right-10 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-gray-800/70 hover:bg-yellow-500 flex items-center justify-center text-white transition-colors duration-200 shadow-lg"
            >
              <ArrowRight size={18} />
            </button>
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="max-w-3xl mx-auto p-8 bg-gray-900 border border-gray-800 rounded-xl hover:border-yellow-500 transition-colors duration-300">
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 rounded-full bg-yellow-500 flex items-center justify-center text-black font-bold text-lg">
                        {testimonial.avatar}
                      </div>
                      <div className="ml-4">
                        <div className="font-semibold text-white">{testimonial.name}</div>
                        <div className="text-sm text-gray-400">{testimonial.location}</div>
                      </div>
                    </div>
                    <p className="text-gray-300 leading-relaxed italic text-lg">"{testimonial.text}"</p>
                  </div>
                </div>
              ))}
              </div>
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-yellow-500 w-8' 
                      : 'bg-gray-700 hover:bg-gray-600'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Communities Card (replaces Newsletter CTA) */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-white">African Bitcoin Communities</h2>
              <p className="text-sm text-gray-400 mt-2">Discover other amazing Bitcoin communities across Africa</p>
            </div>

            {/* Logo grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="flex items-center justify-center h-20 bg-gray-800 border border-gray-700 rounded-lg">
                  <span className="text-sm text-gray-300">Bitcoin {i === 0 ? 'Ghana' : i === 1 ? 'Dada' : i === 2 ? 'Nigeria' : i === 3 ? 'Kenya' : i === 4 ? 'Tribe' : i === 5 ? 'BitSawa' : i === 6 ? 'Ekasi' : 'BTCAfrica'} Logo</span>
                </div>
              ))}
            </div>

            {/* Community list */}
            <div className="space-y-4 mb-6">
              <div className="flex items-start justify-between p-4 bg-gray-800 border border-gray-700 rounded-lg">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="font-semibold text-white">BTrust Builders</div>
                    <div className="text-xs text-gray-400 px-2 py-1 bg-gray-700 rounded-full">2.5k+</div>
                  </div>
                  <div className="text-sm text-gray-400 mt-1">Building Bitcoin infrastructure and education across West Africa</div>
                </div>
                <button className="ml-4 px-3 py-1 border border-yellow-500 text-yellow-500 rounded-md hover:bg-yellow-500/10">Visit</button>
              </div>

              <div className="flex items-start justify-between p-4 bg-gray-800 border border-gray-700 rounded-lg">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="font-semibold text-white">Bitcoin Dada</div>
                    <div className="text-xs text-gray-400 px-2 py-1 bg-gray-700 rounded-full">1.8k+</div>
                  </div>
                  <div className="text-sm text-gray-400 mt-1">Empowering African women through Bitcoin education</div>
                </div>
                <button className="ml-4 px-3 py-1 border border-yellow-500 text-yellow-500 rounded-md hover:bg-yellow-500/10">Visit</button>
              </div>
            </div>

            <div className="text-center">
              <button className="inline-flex items-center gap-2 px-5 py-2 border border-yellow-500 text-yellow-500 rounded-full hover:bg-yellow-500/10">Submit Community <ArrowRight size={16} /></button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;