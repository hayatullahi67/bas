import { useState, useEffect } from 'react';
import { PlusCircle, Edit, Trash2, Save, X } from 'lucide-react';
import { blogPosts as initialBlogPosts, categories } from '../mock';
import { db } from '../firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';

const UploadNews = () => {
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

  const [imageMode, setImageMode] = useState('url'); // 'url' or 'file'
  const [imagePreview, setImagePreview] = useState('');
  const [modal, setModal] = useState({ open: false, title: '', message: '' });

  // convert file to base64
  const fileToBase64 = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = (err) => reject(err);
    reader.readAsDataURL(file);
  });

  const handleFileChange = async (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    try {
      const base64 = await fileToBase64(file);
      setFormData(prev => ({ ...prev, image: base64 }));
      setImagePreview(base64);
    } catch (err) {
      console.error('File to base64 error', err);
    }
  };

  // Fetch news collection from Firestore on mount
  useEffect(() => {
    let mounted = true;
    const fetchNews = async () => {
      try {
        const snap = await getDocs(collection(db, 'news'));
        const items = snap.docs.map(d => ({ ...d.data(), id: d.id }));
        if (mounted) {
          // if there are items, replace local list; otherwise keep initial mock
          setBlogPosts(items.length ? items : initialBlogPosts);
        }
      } catch (err) {
        console.error('Error fetching news from Firestore:', err);
        if (mounted) setBlogPosts(initialBlogPosts);
      }
    };
    fetchNews();
    return () => { mounted = false; };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (name === 'title') {
      const slug = value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      setFormData(prev => ({ ...prev, slug }));
    }
    if (name === 'image' && imageMode === 'url') {
      setImagePreview(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEditing && currentPost) {
      setBlogPosts(prev => prev.map(post => post.id === currentPost.id ? { ...formData, id: post.id } : post));
      setModal({ open: true, title: 'Updated', message: 'Blog post updated locally.' });
      resetForm();
      return;
    }
    // validate image present
    if (!formData.image) {
      setModal({ open: true, title: 'Missing Image', message: 'Please provide an image (URL or upload).' });
      return;
    }

    // Save to Firestore 'news' collection
    try {
      const docRef = await addDoc(collection(db, 'news'), formData);
      setBlogPosts(prev => [{ ...formData, id: docRef.id }, ...prev]);
      setModal({ open: true, title: 'Saved', message: 'Blog post created and saved to Firebase!' });
    } catch (err) {
      setModal({ open: true, title: 'Error', message: 'Error saving to Firebase: ' + (err.message || 'unknown') });
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
      setModal({ open: true, title: 'Deleted', message: 'Blog post deleted successfully.' });
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
    <div className="pt-2">
      <div className="max-w-7xl mx-auto px-6 py-6">
        {/* Modal */}
        {modal.open && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/60" onClick={() => setModal({ open: false, title: '', message: '' })}></div>
            <div className="relative bg-gray-900 border border-gray-800 rounded-lg p-6 w-full max-w-md mx-4">
              <h3 className="text-lg font-bold text-yellow-500 mb-2">{modal.title}</h3>
              <p className="text-sm text-gray-300 mb-4">{modal.message}</p>
              <div className="flex justify-end">
                <button onClick={() => setModal({ open: false, title: '', message: '' })} className="px-4 py-2 bg-yellow-500 text-black rounded-lg font-semibold">OK</button>
              </div>
            </div>
          </div>
        )}
        <div className="mb-6">
          <h1 className="text-3xl font-black mb-2">Upload News & Stories</h1>
          <p className="text-sm text-gray-400">Create and manage blog posts for the site.</p>
        </div>

        <div className="mb-8 p-6 bg-gray-900 border border-gray-800 rounded-xl">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">{isEditing ? 'Edit Post' : 'Create New Post'}</h2>
            {isEditing && (
              <button onClick={resetForm} className="flex items-center text-gray-400 hover:text-yellow-500 transition-colors duration-200">
                <X size={18} className="mr-2" /> Cancel Edit
              </button>
            )}
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Title *</label>
                <input type="text" name="title" value={formData.title} onChange={handleInputChange} required className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-500" placeholder="Enter post title" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Slug (auto-generated)</label>
                <input type="text" name="slug" value={formData.slug} onChange={handleInputChange} required className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-500" placeholder="post-slug" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Category *</label>
                <select name="category" value={formData.category} onChange={handleInputChange} required className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-500">
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
                <button type="button" onClick={() => setImageMode('url')} className={`px-3 py-1 rounded ${imageMode === 'url' ? 'bg-yellow-500 text-black' : 'bg-gray-800 text-gray-300'}`}>Use URL</button>
                <button type="button" onClick={() => setImageMode('file')} className={`px-3 py-1 rounded ${imageMode === 'file' ? 'bg-yellow-500 text-black' : 'bg-gray-800 text-gray-300'}`}>Upload File</button>
              </div>

              {imageMode === 'url' ? (
                <input type="url" name="image" value={formData.image} onChange={handleInputChange} className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-500" placeholder="https://example.com/image.jpg" />
              ) : (
                <input type="file" accept="image/*" onChange={handleFileChange} className="w-full text-sm text-gray-300" />
              )}

              {imagePreview && (
                <div className="mt-3">
                  <label className="block text-sm text-gray-400 mb-1">Preview</label>
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

            <button type="submit" className="w-full md:w-auto px-8 py-4 bg-yellow-500 text-black font-bold text-lg rounded-lg hover:bg-yellow-400 transition-all duration-200 hover:scale-105 flex items-center justify-center">
              <Save size={18} className="mr-2" />
              {isEditing ? 'Update Post' : 'Create Post'}
            </button>
          </form>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">All Posts <span className="text-yellow-500">({blogPosts.length})</span></h2>
          <div className="space-y-4 max-h-[60vh] md:max-h-[70vh] overflow-y-auto pr-2">
            {blogPosts.map((post) => (
              <div key={post.id} className="p-4 bg-gray-900 border border-gray-800 rounded-xl hover:border-gray-700 transition-colors duration-200">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-semibold text-black bg-yellow-500 px-3 py-1 rounded-full">{post.category}</span>
                      <span className="text-sm text-gray-500">{post.date}</span>
                    </div>
                    <h3 className="text-lg font-bold mb-2">{post.title}</h3>
                    <p className="text-sm text-gray-400 line-clamp-2">{post.excerpt}</p>
                  </div>
                  <div className="flex gap-3">
                    <button onClick={() => handleEdit(post)} className="flex items-center px-4 py-2 bg-yellow-500/10 text-yellow-500 border border-yellow-500/30 rounded-lg hover:bg-yellow-500 hover:text-black transition-all duration-200">
                      <Edit size={14} className="mr-2" /> Edit
                    </button>
                    <button onClick={() => handleDelete(post.id)} className="flex items-center px-4 py-2 bg-red-500/10 text-red-500 border border-red-500/30 rounded-lg hover:bg-red-500 hover:text-white transition-all duration-200">
                      <Trash2 size={14} className="mr-2" /> Delete
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

export default UploadNews;
