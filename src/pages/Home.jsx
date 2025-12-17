




import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, Shield, TrendingUp } from 'lucide-react';
import { blogPosts, testimonials, features, categories } from '../mock';
import { PostsGrid, TestimonialCarousel ,Hero, Mission } from '../components/sections';

const Home = () => {
  // testimonial carousel handled by TestimonialCarousel component

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
    <div className="pt-16 md:mt-[40px]">
      {/* Hero Section */}
         <Hero/>   

      {/* Why Bitcoin Matters */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Pillars of   <span className="text-yellow-500"> Bitcoin Africa Story </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Discover how Bitcoin is transforming lives and creating opportunities across Africa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="group relative overflow-hidden  bg-gray-900 border border-gray-800 hover:border-yellow-500 transition-all duration-300 hover:scale-105"
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
     <Mission />

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
                <PostsGrid posts={posts} />
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

          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* Communities Card (replaces Newsletter CTA) */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900 border border-gray-800  p-8 shadow-lg">
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-white">African Bitcoin Communities</h2>
              <p className="text-sm text-gray-400 mt-2">Discover other amazing Bitcoin communities across Africa</p>
            </div>

            {/* Logo grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
              {Array.from({ length: 8 }).map((_, i) => (
<<<<<<< HEAD
                <div key={i} className="flex items-center justify-center h-20 bg-gray-800 border border-gray-700 ">
=======
                <div key={i} className="flex items-center justify-center h-20 bg-gray-800 border border-gray-700 rounded-lg">
>>>>>>> 90b6020f646788a78030acbb88796a5efa2740d1
                  <span className="text-sm text-gray-300">Bitcoin {i === 0 ? 'Ghana' : i === 1 ? 'Dada' : i === 2 ? 'Nigeria' : i === 3 ? 'Kenya' : i === 4 ? 'Tribe' : i === 5 ? 'BitSawa' : i === 6 ? 'Ekasi' : 'BTCAfrica'} Logo</span>
                </div>
              ))}
            </div>

            {/* Community list */}
            <div className="space-y-4 mb-6">
<<<<<<< HEAD
              <div className="flex items-start justify-between p-4 bg-gray-800 border border-gray-700 ">
=======
              <div className="flex items-start justify-between p-4 bg-gray-800 border border-gray-700 rounded-lg">
>>>>>>> 90b6020f646788a78030acbb88796a5efa2740d1
                <div>
                  <div className="flex items-center gap-3">
                    <div className="font-semibold text-white">BTrust Builders</div>
                    <div className="text-xs text-gray-400 px-2 py-1 bg-gray-700 rounded-full">2.5k+</div>
                  </div>
                  <div className="text-sm text-gray-400 mt-1">Building Bitcoin infrastructure and education across West Africa</div>
                </div>
                <button className="ml-4 px-3 py-1 border border-yellow-500 text-yellow-500 rounded-md hover:bg-yellow-500/10">Visit</button>
              </div>

<<<<<<< HEAD
              <div className="flex items-start justify-between p-4 bg-gray-800 border border-gray-700 ">
=======
              <div className="flex items-start justify-between p-4 bg-gray-800 border border-gray-700 rounded-lg">
>>>>>>> 90b6020f646788a78030acbb88796a5efa2740d1
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