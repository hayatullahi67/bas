import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, Clock } from 'lucide-react';
import { blogPosts, categories } from '../mock';
import { PostsGrid } from '../components/sections';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Group posts by category to support the 'All' view that shows categorized sections
  const groupedPosts = useMemo(() => {
    return blogPosts.reduce((acc, post) => {
      const cat = post.category || 'Uncategorized';
      if (!acc[cat]) acc[cat] = [];
      acc[cat].push(post);
      return acc;
    }, {});
  }, [blogPosts]);

  const categoriesToShow = (categories && categories.length > 0)
    ? categories.filter(c => c !== 'All')
    : Object.keys(groupedPosts);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-900/30 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            Bitcoin <span className="text-yellow-500">Education</span> Blog
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            Learn about Bitcoin, financial freedom, adoption stories, and practical strategies 
            to take control of your financial future.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-gray-900 border border-gray-800 rounded-lg text-white focus:outline-none focus:border-yellow-500"
            />
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-6 sticky top-16 bg-black/95 backdrop-blur-sm border-b border-gray-800 z-40">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-yellow-500 text-black'
                    : 'bg-gray-900 text-gray-300 hover:bg-gray-800 border border-gray-800'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {selectedCategory === 'All' ? (
            // Render categorized sections (Home-style) when 'All' is selected
            categoriesToShow.map((cat) => {
              const posts = (groupedPosts[cat] || []).slice(0, 3);
              if (!posts || posts.length === 0) return null;
              return (
                <div key={cat} className="mb-16">
                  <h3 className="text-2xl md:text-3xl font-bold mb-8">{cat}</h3>
                  <PostsGrid posts={posts} />
                </div>
              );
            })
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-gray-400">No articles found. Try adjusting your search or filter.</p>
            </div>
          ) : (
            <PostsGrid posts={filteredPosts} />
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-900/30 to-transparent">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border border-yellow-500/30 rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Never Miss an <span className="text-yellow-500">Article</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Subscribe to get our latest Bitcoin education content delivered straight to your inbox.
            </p>
            <form 
              className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
              onSubmit={(e) => {
                e.preventDefault();
                alert('Newsletter signup feature coming soon!');
              }}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-500"
                required
              />
              <button
                type="submit"
                className="px-8 py-4 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-400 transition-colors duration-200 hover:scale-105"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;