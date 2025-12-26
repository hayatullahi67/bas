import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, Clock, Save, AlertCircle, CheckCircle } from 'lucide-react';
import { blogPosts, categories } from '../mock';
import { PostsGrid } from '../components/sections';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "../components/ui/carousel";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [imageMode, setImageMode] = useState('url');
  const [imagePreview, setImagePreview] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitError, setSubmitError] = useState('');

  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    category: '',
    date: new Date().toISOString().split('T')[0],
    readTime: '',
    image: '',
    excerpt: '',
    content: '',
    authorName: ''
  });

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
      ...(name === 'title' && { slug: value.toLowerCase().replace(/\s+/g, '-') })
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file size (5MB max)
    const maxSizeInBytes = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSizeInBytes) {
      setSubmitError('Image file must not be more than 5MB');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      setImagePreview(event.target?.result);
      setFormData(prev => ({ ...prev, image: event.target?.result }));
    };
    reader.readAsDataURL(file);
    setSubmitError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    setSubmitMessage('');

    try {
      if (!formData.title || !formData.category || !formData.date || !formData.excerpt || !formData.content || !formData.authorName) {
        setSubmitError('Please fill in all required fields');
        setIsSubmitting(false);
        return;
      }

      const submittedData = {
        title: formData.title,
        slug: formData.slug,
        category: formData.category,
        date: formData.date,
        readTime: formData.readTime || '5 min read',
        image: formData.image,
        excerpt: formData.excerpt,
        content: formData.content,
        authorName: formData.authorName,
        submittedAt: serverTimestamp()
      };

      await addDoc(collection(db, 'submitted_stories'), submittedData);

      setSubmitMessage('Story submitted successfully! Thank you for your contribution.');
      setFormData({
        title: '',
        slug: '',
        category: '',
        date: new Date().toISOString().split('T')[0],
        readTime: '',
        image: '',
        excerpt: '',
        content: '',
        authorName: ''
      });
      setImagePreview('');
      setImageMode('url');

      setTimeout(() => {
        setSubmitMessage('');
      }, 5000);
    } catch (error) {
      console.error('Error submitting story:', error);
      setSubmitError('Failed to submit story. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
         <section className="relative md:min-h-[90vh] flex items-center overflow-hidden">

  {/* Background Image with Carousel */}
  <Carousel 
    plugins={[Autoplay({ delay: 3000 })]} 
    opts={{ duration: 50 }} 
    className="absolute inset-0 w-full h-full z-0"
  >
    <CarouselContent className="h-full">
      <CarouselItem className="pl-0 h-full">
        <img
          src="assets/blogbg1.jpg"
          alt="Hero background 1"
          className="h-full w-full object-cover opacity-70"
        />
      </CarouselItem>
      <CarouselItem className="pl-0 h-full">
        <img
          src="assets/blogbg2.jpg"
          alt="Hero background 2"
          className="h-full w-full object-cover opacity-70"
        />
      </CarouselItem>
    </CarouselContent>
  </Carousel>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/80"></div>
  <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black"></div>

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
    <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
      <div className="w-full lg:w-1/2 text-left mt-12 md:mt-10 lg:text-left">
        <h1 className="text-5xl sm:text-7xl md:text-6xl lg:text-7xl md:font-extrabold mb-4 leading-tight">
          <span>The </span> <br className="sm:hidden"/> <span>Pulse of </span> <br className="sm:hidden"/> <span>Bitcoin </span> <br className=""/> <span className="text-yellow-400">in Africa</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
          From grassroots education to circular economy projects, we bring you the voices, experiences, and innovations shaping Africa's Bitcoin future.
        </p>

        <div className="flex sm:flex-row gap-4 justify-start mb-6 w-full max-w-md">
          <button className="inline-flex w-full sm:w-auto items-center justify-center px-6 py-3 bg-yellow-500 text-black font-bold text-lg hover:bg-yellow-400 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-yellow-500/50">
            Donate
          </button>

          <button className="inline-flex w-full sm:w-auto items-center justify-center px-6 py-3 bg-transparent border-2 border-yellow-500 text-yellow-500 font-bold text-lg hover:bg-yellow-500 hover:text-black transition-all duration-200">
            Submit story
          </button>
        </div>
      </div>
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
                className={`px-6 py-2  font-medium transition-all duration-200 ${
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

      {/* Submit Story Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-900/30 to-transparent">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border border-yellow-500/30 rounded-2xl p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Share Your Bitcoin <span className="text-yellow-500">Story</span>
              </h2>
              <p className="text-lg text-gray-300">
                Have a Bitcoin adoption story or education content to share? Submit your story below.
              </p>
            </div>

            <button
              onClick={() => setShowForm(!showForm)}
              className="w-full mb-6 px-8 py-4 bg-yellow-500 text-black font-bold text-lg rounded-lg hover:bg-yellow-400 transition-all duration-200 hover:scale-105"
            >
              {showForm ? 'Cancel' : 'Submit Your Story'}
            </button>

            {showForm && (
              <>
                {submitError && (
                  <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg flex items-start gap-3">
                    <AlertCircle size={20} className="text-red-500 mt-0.5 flex-shrink-0" />
                    <p className="text-red-200">{submitError}</p>
                  </div>
                )}

                {submitMessage && (
                  <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg flex items-start gap-3">
                    <CheckCircle size={20} className="text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-green-200">{submitMessage}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">Title *</label>
                      <input type="text" name="title" value={formData.title} onChange={handleInputChange} required className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-500" placeholder="Enter post title" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">Author Name *</label>
                      <input type="text" name="authorName" value={formData.authorName} onChange={handleInputChange} required className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-500" placeholder="Your name" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Slug (auto-generated)</label>
                    <input type="text" name="slug" value={formData.slug} readOnly className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-gray-400 focus:outline-none cursor-not-allowed" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">Category *</label>
                      <select name="category" value={formData.category} onChange={handleInputChange} required className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-500">
                        <option value="">Select a category</option>
                        {categories.filter(cat => cat !== 'All').map(cat => (
                          <option key={cat} value={cat}>{cat}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">Date *</label>
                      <input type="date" name="date" value={formData.date} onChange={handleInputChange} required className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-500" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">Read Time</label>
                      <input type="text" name="readTime" value={formData.readTime} onChange={handleInputChange} className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-500" placeholder="5 min read" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Image</label>
                    <div className="flex gap-2 mb-3">
                      <button type="button" onClick={() => setImageMode('url')} className={`px-3 py-1 rounded text-sm font-medium transition-colors ${imageMode === 'url' ? 'bg-yellow-500 text-black' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}>Use URL</button>
                      <button type="button" onClick={() => setImageMode('file')} className={`px-3 py-1 rounded text-sm font-medium transition-colors ${imageMode === 'file' ? 'bg-yellow-500 text-black' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}>Upload File</button>
                    </div>

                    {imageMode === 'url' ? (
                      <input type="url" name="image" value={formData.image} onChange={handleInputChange} className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-500" placeholder="https://example.com/image.jpg" />
                    ) : (
                      <div>
                        <input type="file" accept="image/*" onChange={handleFileChange} className="w-full text-sm text-gray-300 file:px-4 file:py-2 file:bg-gray-800 file:border file:border-gray-700 file:rounded file:text-white file:cursor-pointer hover:file:bg-gray-700" />
                        <p className="text-xs text-gray-400 mt-2">Maximum file size: 5MB</p>
                      </div>
                    )}

                    {imagePreview && (
                      <div className="mt-4">
                        <label className="block text-sm text-gray-400 mb-2">Preview</label>
                        <img src={imagePreview} alt="preview" className="max-h-48 rounded-md border border-gray-700" />
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Excerpt *</label>
                    <textarea name="excerpt" value={formData.excerpt} onChange={handleInputChange} rows="3" required className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-500 resize-none" placeholder="Brief description of the post" />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Content *</label>
                    <textarea name="content" value={formData.content} onChange={handleInputChange} rows="8" required className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-500 resize-none" placeholder="Full blog post content" />
                  </div>

                  <button type="submit" disabled={isSubmitting} className="w-full md:w-auto px-8 py-4 bg-yellow-500 text-black font-bold text-lg rounded-lg hover:bg-yellow-400 disabled:bg-gray-600 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105 flex items-center justify-center">
                    <Save size={18} className="mr-2" />
                    {isSubmitting ? 'Submitting...' : 'Submit Story'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;