import { useState, useEffect } from 'react';
import { PlusCircle, Edit, Trash2, Save, X, Newspaper, Calendar, Eye, Tag, User, Clock, Link2, UploadCloud, FileText, CheckCircle, Sparkles, Linkedin, Twitter } from 'lucide-react';
import { categories } from '../mock';
import { db } from '../firebase';
import { collection, addDoc, getDocs, deleteDoc, updateDoc, doc, serverTimestamp, query, orderBy, onSnapshot } from 'firebase/firestore';

const UploadNews = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentPost, setCurrentPost] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    category: 'Adoption',
    image: '',
    author: 'Bitcoin Educator',
    authorImage: '',
    authorLinkedIn: '',
    authorX: '',
    date: new Date().toISOString().split('T')[0],
    readTime: '5 min read'
  });

  const [imageMode, setImageMode] = useState('url');
  const [imagePreview, setImagePreview] = useState('');
  const [authorImageMode, setAuthorImageMode] = useState('url');
  const [authorImagePreview, setAuthorImagePreview] = useState('');
  const [modal, setModal] = useState({ open: false, title: '', message: '' });
  const [detailModal, setDetailModal] = useState({ open: false, post: null });

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

  const handleAuthorFileChange = async (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    try {
      const base64 = await fileToBase64(file);
      setFormData(prev => ({ ...prev, authorImage: base64 }));
      setAuthorImagePreview(base64);
    } catch (err) {
      console.error('Author image to base64 error', err);
    }
  };

  // Fetch news collection from Firestore with real-time updates
  useEffect(() => {
    const q = query(collection(db, 'news'), orderBy('date', 'desc'));

    console.log('Initializing news real-time listener...');
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const items = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      console.log('News synchronization complete:', items.length, 'items');
      setBlogPosts(items);
      setIsInitialLoading(false);
    }, (error) => {
      console.error('Firestore synchronization error:', error);
      setIsInitialLoading(false);
    });

    return () => {
      console.log('Detaching news listener');
      unsubscribe();
    };
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
    if (name === 'authorImage' && authorImageMode === 'url') {
      setAuthorImagePreview(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      ...formData,
      image: formData.image || imagePreview,
      updatedAt: serverTimestamp()
    };

    // Clean payload for Firestore (ensure no id is inside the data object)
    if (payload.id) delete payload.id;

    try {
      if (isEditing && currentPost) {
        const postRef = doc(db, 'news', currentPost.id);
        await updateDoc(postRef, payload);

        // Show modal AFTER Firebase updates (onSnapshot will update the list)
        setTimeout(() => {
          setModal({
            open: true,
            title: 'Changes Saved',
            message: 'The article has been updated successfully and is now live.'
          });
        }, 300);
      } else {
        // validate image present for new post
        if (!payload.image) {
          setModal({
            open: true,
            title: 'Media Required',
            message: 'Please provide a featured image URL or upload a local file to proceed.'
          });
          setIsSubmitting(false);
          return;
        }
        await addDoc(collection(db, 'news'), { ...payload, createdAt: serverTimestamp() });

        // Show modal AFTER Firebase updates (onSnapshot will update the list)
        setTimeout(() => {
          setModal({
            open: true,
            title: 'Story Published',
            message: 'Your news article has been successfully published and is now live for the community.'
          });
        }, 300);
      }
      resetForm();
    } catch (err) {
      console.error('Publication Error:', err);
      setModal({
        open: true,
        title: 'Action Failed',
        message: 'We encountered an unexpected issue. Please ensure your connection is stable and try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEdit = (post) => {
    setCurrentPost(post);
    setFormData(post);
    setIsEditing(true);
    setImagePreview(post.image);
    setAuthorImagePreview(post.authorImage || '');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleView = (post) => {
    setDetailModal({ open: true, post });
  };

  const handleDelete = async (postId) => {
    if (window.confirm('Are you sure you want to delete this post from Firebase?')) {
      try {
        await deleteDoc(doc(db, 'news', postId));
        setModal({ open: true, title: 'Deleted', message: 'Blog post deleted successfully.' });
      } catch (err) {
        setModal({ open: true, title: 'Error', message: 'Error deleting: ' + (err.message || 'unknown') });
      }
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      slug: '',
      excerpt: '',
      content: '',
      category: 'Adoption',
      image: '',
      author: 'Bitcoin Educator',
      authorImage: '',
      authorLinkedIn: '',
      authorX: '',
      date: new Date().toISOString().split('T')[0],
      readTime: '5 min read'
    });
    setImagePreview('');
    setAuthorImagePreview('');
    setIsEditing(false);
    setCurrentPost(null);
  };

  return (
    <div className="min-h-screen pb-12">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg">
            <Newspaper className="text-black" size={24} />
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            News Manager
          </h1>
        </div>
        <p className="text-sm text-gray-400 ml-14">Manage and publish articles for your community</p>
      </div>

      {/* Form Card */}
      <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-6 mb-8 shadow-2xl">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-yellow-500/10 rounded-xl border border-yellow-500/20">
              {isEditing ? <Edit className="text-yellow-500" size={20} /> : <Sparkles className="text-yellow-500" size={20} />}
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">{isEditing ? 'Edit Article' : 'Create New Article'}</h2>
              <p className="text-xs text-gray-500">Fill in the details below</p>
            </div>
          </div>
          {isEditing && (
            <button
              onClick={resetForm}
              className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
            >
              <X size={16} /> Cancel
            </button>
          )}
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">Article Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder:text-gray-600 focus:outline-none focus:border-yellow-500/50 focus:ring-2 focus:ring-yellow-500/20 transition-all"
              placeholder="Enter your article title..."
            />
          </div>

          {/* Row 1: Category, Date */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-yellow-500/50 focus:ring-2 focus:ring-yellow-500/20 transition-all"
              >
                {categories.filter(cat => cat !== 'All').map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">Publish Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-yellow-500/50 focus:ring-2 focus:ring-yellow-500/20 transition-all"
              />
            </div>
          </div>

          {/* Row 2: Author, Read Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">Author</label>
              <input
                type="text"
                name="author"
                value={formData.author}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder:text-gray-600 focus:outline-none focus:border-yellow-500/50 focus:ring-2 focus:ring-yellow-500/20 transition-all"
                placeholder="Author name"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">Read Time</label>
              <input
                type="text"
                name="readTime"
                value={formData.readTime}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder:text-gray-600 focus:outline-none focus:border-yellow-500/50 focus:ring-2 focus:ring-yellow-500/20 transition-all"
                placeholder="e.g. 5 min read"
              />
            </div>
          </div>

          {/* Row 3: Author Media & Socials */}
          <div className="bg-gray-800/20 border border-gray-800 rounded-2xl p-5 space-y-6">
            <h3 className="text-xs font-black text-yellow-500 uppercase tracking-[0.2em] flex items-center gap-2">
               <User size={14} /> Author Profile Details
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider">Author Profile Image</label>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setAuthorImageMode('url')}
                    className={`flex-1 py-2 px-4 rounded-lg text-[10px] font-black uppercase transition-all ${authorImageMode === 'url' ? 'bg-yellow-500 text-black' : 'bg-gray-800 text-gray-400'}`}
                  >
                    URL
                  </button>
                  <button
                    type="button"
                    onClick={() => setAuthorImageMode('file')}
                    className={`flex-1 py-2 px-4 rounded-lg text-[10px] font-black uppercase transition-all ${authorImageMode === 'file' ? 'bg-yellow-500 text-black' : 'bg-gray-800 text-gray-400'}`}
                  >
                    Upload
                  </button>
                </div>
                <input
                  type={authorImageMode === 'url' ? 'url' : 'file'}
                  name="authorImage"
                  onChange={authorImageMode === 'url' ? handleInputChange : handleAuthorFileChange}
                  value={authorImageMode === 'url' ? formData.authorImage : undefined}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white text-xs focus:ring-1 focus:ring-yellow-500/50 transition-all"
                  placeholder="Author profile image URL..."
                  accept={authorImageMode === 'file' ? "image/*" : undefined}
                />
                {authorImagePreview && (
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-yellow-500/20">
                    <img src={authorImagePreview} alt="Author" className="w-full h-full object-cover" />
                  </div>
                )}
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">LinkedIn Profile</label>
                  <input
                    type="url"
                    name="authorLinkedIn"
                    value={formData.authorLinkedIn}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white text-sm focus:ring-1 focus:ring-yellow-500/50 transition-all placeholder:text-gray-700"
                    placeholder="https://linkedin.com/in/..."
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">X (Twitter) Profile</label>
                  <input
                    type="url"
                    name="authorX"
                    value={formData.authorX}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white text-sm focus:ring-1 focus:ring-yellow-500/50 transition-all placeholder:text-gray-700"
                    placeholder="https://x.com/..."
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Slug */}
          <div>
            <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">URL Slug</label>
            <input
              type="text"
              name="slug"
              value={formData.slug}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-yellow-500/70 font-mono text-sm focus:outline-none focus:border-yellow-500/50 focus:ring-2 focus:ring-yellow-500/20 transition-all"
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">Featured Image</label>
            <div className="flex gap-2 mb-3">
              <button
                type="button"
                onClick={() => setImageMode('url')}
                className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all ${imageMode === 'url'
                    ? 'bg-yellow-500 text-black'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                  }`}
              >
                URL
              </button>
              <button
                type="button"
                onClick={() => setImageMode('file')}
                className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all ${imageMode === 'file'
                    ? 'bg-yellow-500 text-black'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                  }`}
              >
                Upload
              </button>
            </div>
            <input
              type={imageMode === 'url' ? 'url' : 'file'}
              name="image"
              onChange={imageMode === 'url' ? handleInputChange : handleFileChange}
              value={imageMode === 'url' ? formData.image : undefined}
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white text-sm focus:outline-none focus:border-yellow-500/50 focus:ring-2 focus:ring-yellow-500/20 transition-all"
              placeholder={imageMode === 'url' ? 'https://example.com/image.jpg' : ''}
              accept={imageMode === 'file' ? "image/*" : undefined}
            />
          </div>

          {/* Excerpt */}
          <div>
            <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">Excerpt</label>
            <textarea
              name="excerpt"
              value={formData.excerpt}
              onChange={handleInputChange}
              rows="3"
              required
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder:text-gray-600 focus:outline-none focus:border-yellow-500/50 focus:ring-2 focus:ring-yellow-500/20 transition-all resize-none"
              placeholder="Brief summary of the article..."
            />
          </div>

          {/* Content with Preview */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">Content</label>
              <textarea
                name="content"
                value={formData.content}
                onChange={handleInputChange}
                rows="12"
                required
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder:text-gray-600 focus:outline-none focus:border-yellow-500/50 focus:ring-2 focus:ring-yellow-500/20 transition-all resize-none leading-relaxed"
                placeholder="Write your article content here..."
              />
            </div>

            {imagePreview && (
              <div className="lg:col-span-1">
                <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">Preview</label>
                <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700">
                  <img src={imagePreview} alt="Preview" className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <span className="text-xs font-bold text-yellow-500 uppercase">{formData.category}</span>
                    <p className="text-sm font-semibold text-white mt-1 line-clamp-2">{formData.title || 'Article Title'}</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex items-center gap-4 pt-4 border-t border-gray-800">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold rounded-xl hover:from-yellow-400 hover:to-yellow-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 shadow-lg shadow-yellow-500/20"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                  Processing...
                </>
              ) : (
                <>
                  <Save size={18} />
                  {isEditing ? 'Update Article' : 'Publish Article'}
                </>
              )}
            </button>

          </div>
        </form>
      </div>

      {/* Articles List */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-white">Published Articles</h2>
            <p className="text-sm text-gray-500">{blogPosts.length} total articles</p>
          </div>
        </div>

        {isInitialLoading ? (
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-16 text-center">
            <div className="w-12 h-12 border-4 border-yellow-500/30 border-t-yellow-500 rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-500 text-sm">Loading articles...</p>
          </div>
        ) : (
          <div className="space-y-4">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-5 hover:border-gray-700 transition-all group"
              >
                <div className="flex flex-col md:flex-row gap-5">
                  <div className="w-full md:w-48 h-32 rounded-xl overflow-hidden bg-gray-800 flex-shrink-0">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold text-black bg-yellow-500 px-2 py-1 rounded">{post.category}</span>
                      <span className="text-xs text-gray-500">{post.date}</span>
                      <span className="text-xs text-gray-500">•</span>
                      <span className="text-xs text-gray-500">{post.author}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-yellow-500 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-400 line-clamp-2 mb-4">{post.excerpt}</p>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleView(post)}
                        className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-xs font-medium transition-colors flex items-center gap-2"
                      >
                        <Eye size={14} /> View
                      </button>
                      <button
                        onClick={() => handleEdit(post)}
                        className="px-4 py-2 bg-yellow-500/10 hover:bg-yellow-500/20 text-yellow-500 rounded-lg text-xs font-medium transition-colors flex items-center gap-2"
                      >
                        <Edit size={14} /> Edit
                      </button>
                      <button
                        onClick={() => handleDelete(post.id)}
                        className="px-4 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-500 rounded-lg text-xs font-medium transition-colors flex items-center gap-2 ml-auto"
                      >
                        <Trash2 size={14} /> Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {blogPosts.length === 0 && (
              <div className="bg-gray-900 border border-gray-800 border-dashed rounded-2xl p-16 text-center">
                <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Newspaper size={32} className="text-gray-600" />
                </div>
                <p className="text-gray-400 font-semibold mb-1">No articles yet</p>
                <p className="text-sm text-gray-600">Create your first article above</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Success/Error Modal */}
      {modal.open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 w-full max-w-md shadow-2xl">
            <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${modal.title === 'Action Failed' || modal.title === 'Error'
                ? 'bg-red-500/20 text-red-500'
                : 'bg-yellow-500/20 text-yellow-500'
              }`}>
              {modal.title === 'Action Failed' || modal.title === 'Error' ? (
                <X size={32} />
              ) : (
                <CheckCircle size={32} />
              )}
            </div>
            <h3 className="text-2xl font-bold text-white text-center mb-2">{modal.title}</h3>
            <p className="text-gray-400 text-center mb-6">{modal.message}</p>
            <button
              onClick={() => setModal({ open: false, title: '', message: '' })}
              className="w-full py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold rounded-xl hover:from-yellow-400 hover:to-yellow-500 transition-all"
            >
              Continue
            </button>
          </div>
        </div>
      )}

      {/* Detail View Modal */}
      {detailModal.open && detailModal.post && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col">
            <div className="p-6 border-b border-gray-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-black bg-yellow-500 px-3 py-1 rounded">{detailModal.post.category}</span>
                <span className="text-sm text-gray-500">{detailModal.post.date}</span>
              </div>
              <button
                onClick={() => setDetailModal({ open: false, post: null })}
                className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
              >
                <X size={20} className="text-gray-400" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-8">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-4">{detailModal.post.title}</h2>

                <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-800/50">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="w-14 h-14 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 border border-yellow-500/20 overflow-hidden shadow-xl">
                        {detailModal.post.authorImage ? (
                          <img src={detailModal.post.authorImage} alt="" className="w-full h-full object-cover" />
                        ) : (
                          <span className="text-xl font-black">{detailModal.post.author.charAt(0)}</span>
                        )}
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-2 border-[#0A0A0A] rounded-full"></div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-white tracking-tight">{detailModal.post.author}</div>
                      <div className="text-xs text-yellow-500/70 font-black uppercase tracking-widest">{detailModal.post.readTime} • Author</div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    {detailModal.post.authorLinkedIn && (
                      <a href={detailModal.post.authorLinkedIn} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-gray-800 hover:bg-blue-600/20 hover:text-blue-400 rounded-xl transition-all border border-gray-700">
                        <Linkedin size={18} />
                      </a>
                    )}
                    {detailModal.post.authorX && (
                      <a href={detailModal.post.authorX} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-gray-800 hover:bg-white/10 hover:text-white rounded-xl transition-all border border-gray-700">
                        <Twitter size={18} />
                      </a>
                    )}
                  </div>
                </div>

                {detailModal.post.image && (
                  <div className="mb-8 rounded-2xl overflow-hidden">
                    <img
                      src={detailModal.post.image}
                      alt={detailModal.post.title}
                      className="w-full h-auto max-h-96 object-cover"
                    />
                  </div>
                )}

                <div className="bg-gradient-to-r from-yellow-500/10 to-transparent border-l-4 border-yellow-500 p-4 rounded-r-xl mb-8">
                  <p className="text-gray-300 italic">{detailModal.post.excerpt}</p>
                </div>

                <div className="prose prose-invert max-w-none">
                  <p className="text-gray-400 leading-relaxed whitespace-pre-wrap">{detailModal.post.content}</p>
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-gray-800 flex justify-end">
              <button
                onClick={() => setDetailModal({ open: false, post: null })}
                className="px-6 py-2 bg-gray-800 hover:bg-gray-700 rounded-xl font-medium transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadNews;