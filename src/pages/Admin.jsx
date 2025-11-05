import { useState } from 'react';
import { PlusCircle, Edit, Trash2, Save, X } from 'lucide-react';
import { blogPosts as initialBlogPosts, categories } from '../mock';

const Admin = () => {
  const [blogPosts, setBlogPosts] = useState(initialBlogPosts);
  const [isEditing, setIsEditing] = useState(false);
  const [currentPost, setCurrentPost] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    category: 'Bitcoin Basics',
    image: '',
    author: 'Bitcoin Educator',
    date: new Date().toISOString().split('T')[0],
    readTime: '5 min read'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Auto-generate slug from title
    if (name === 'title') {
      const slug = value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      setFormData(prev => ({ ...prev, slug }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (isEditing && currentPost) {
      // Update existing post
      setBlogPosts(prev => prev.map(post => 
        post.id === currentPost.id ? { ...formData, id: post.id } : post
      ));
      alert('Blog post updated successfully!');
    } else {
      // Create new post
      const newPost = {
        ...formData,
        id: String(blogPosts.length + 1)
      };
      setBlogPosts(prev => [newPost, ...prev]);
      alert('Blog post created successfully!');
    }

    resetForm();
  };

  const handleEdit = (post) => {
    setCurrentPost(post);
    setFormData(post);
    setIsEditing(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = (postId) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      setBlogPosts(prev => prev.filter(post => post.id !== postId));
      alert('Blog post deleted successfully!');
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      slug: '',
      excerpt: '',
      content: '',
      category: 'Bitcoin Basics',
      image: '',
      author: 'Bitcoin Educator',
      date: new Date().toISOString().split('T')[0],
      readTime: '5 min read'
    });
    setIsEditing(false);
    setCurrentPost(null);
  };

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            Blog <span className="text-yellow-500">Admin</span>
          </h1>
          <p className="text-xl text-gray-400">Create and manage blog posts</p>
          <div className="mt-4 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
            <p className="text-sm text-gray-300">
              <strong className="text-yellow-500">Note:</strong> This is a frontend-only admin panel using mock data. 
              Changes will be reset on page refresh. Backend integration coming soon!
            </p>
          </div>
        </div>

        {/* Post Form */}
        <div className="mb-12 p-8 bg-gray-900 border border-gray-800 rounded-xl">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">
              {isEditing ? 'Edit Post' : 'Create New Post'}
            </h2>
            {isEditing && (
              <button
                onClick={resetForm}
                className="flex items-center text-gray-400 hover:text-yellow-500 transition-colors duration-200"
              >
                <X size={20} className="mr-2" />
                Cancel Edit
              </button>
            )}
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Title *
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-500"
                  placeholder="Enter post title"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Slug (auto-generated)
                </label>
                <input
                  type="text"
                  name="slug"
                  value={formData.slug}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-500"
                  placeholder="post-slug"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Category *
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-500"
                  required
                >
                  {categories.filter(cat => cat !== 'All').map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Date *
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Read Time
                </label>
                <input
                  type="text"
                  name="readTime"
                  value={formData.readTime}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-500"
                  placeholder="5 min read"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Image URL *
              </label>
              <input
                type="url"
                name="image"
                value={formData.image}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-500"
                placeholder="https://example.com/image.jpg"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Excerpt *
              </label>
              <textarea
                name="excerpt"
                value={formData.excerpt}
                onChange={handleInputChange}
                rows="3"
                className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-500 resize-none"
                placeholder="Brief description of the post"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Content *
              </label>
              <textarea
                name="content"
                value={formData.content}
                onChange={handleInputChange}
                rows="8"
                className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-500 resize-none"
                placeholder="Full blog post content"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full md:w-auto px-8 py-4 bg-yellow-500 text-black font-bold text-lg rounded-lg hover:bg-yellow-400 transition-all duration-200 hover:scale-105 flex items-center justify-center"
            >
              <Save size={20} className="mr-2" />
              {isEditing ? 'Update Post' : 'Create Post'}
            </button>
          </form>
        </div>

        {/* Posts List */}
        <div>
          <h2 className="text-2xl font-bold mb-6">
            All Posts <span className="text-yellow-500">({blogPosts.length})</span>
          </h2>
          <div className="space-y-4">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="p-6 bg-gray-900 border border-gray-800 rounded-xl hover:border-gray-700 transition-colors duration-200"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-semibold text-black bg-yellow-500 px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-sm text-gray-500">{post.date}</span>
                    </div>
                    <h3 className="text-lg font-bold mb-2">{post.title}</h3>
                    <p className="text-sm text-gray-400 line-clamp-2">{post.excerpt}</p>
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={() => handleEdit(post)}
                      className="flex items-center px-4 py-2 bg-yellow-500/10 text-yellow-500 border border-yellow-500/30 rounded-lg hover:bg-yellow-500 hover:text-black transition-all duration-200"
                    >
                      <Edit size={16} className="mr-2" />
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(post.id)}
                      className="flex items-center px-4 py-2 bg-red-500/10 text-red-500 border border-red-500/30 rounded-lg hover:bg-red-500 hover:text-white transition-all duration-200"
                    >
                      <Trash2 size={16} className="mr-2" />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;