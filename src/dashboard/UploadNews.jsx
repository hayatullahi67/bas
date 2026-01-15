import { useState, useEffect } from 'react';
import { PlusCircle, Edit, Trash2, Save, X, Newspaper, Calendar, Eye, Tag, User, Clock, Link2, UploadCloud, FileText, CheckCircle, Sparkles, Linkedin, Twitter } from 'lucide-react';
import { categories } from '../mock';
import { db } from '../firebase';
import { collection, addDoc, getDocs, deleteDoc, updateDoc, doc, serverTimestamp, query, orderBy, onSnapshot } from 'firebase/firestore';
import { useNews } from '../context/NewsContext';
import StatusModal from './components/StatusModal';
import NewsPreviewModal from './components/NewsPreviewModal';
import ProcessingOverlay from './components/ProcessingOverlay';
import NewsListItem from './components/NewsListItem';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';

// Add custom size options
const fontSizeArr = ['10px', '12px', '14px', '16px', '18px', '20px', '24px', '30px', '36px', '48px'];
var Size = Quill.import('attributors/style/size');
Size.whitelist = fontSizeArr;
Quill.register(Size, true);

// Custom styles for the size picker to show values
const quillSizeStyles = `
  .ql-snow .ql-picker.ql-size .ql-picker-label::before,
  .ql-snow .ql-picker.ql-size .ql-picker-item::before {
    content: attr(data-value) !important;
  }
  .ql-snow .ql-picker.ql-size .ql-picker-label[data-value="10px"]::before,
  .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="10px"]::before { content: "10px" !important; }
  .ql-snow .ql-picker.ql-size .ql-picker-label[data-value="12px"]::before,
  .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="12px"]::before { content: "12px" !important; }
  .ql-snow .ql-picker.ql-size .ql-picker-label[data-value="14px"]::before,
  .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="14px"]::before { content: "14px" !important; }
  .ql-snow .ql-picker.ql-size .ql-picker-label[data-value="16px"]::before,
  .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="16px"]::before { content: "16px" !important; }
  .ql-snow .ql-picker.ql-size .ql-picker-label[data-value="18px"]::before,
  .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="18px"]::before { content: "18px" !important; }
  .ql-snow .ql-picker.ql-size .ql-picker-label[data-value="20px"]::before,
  .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="20px"]::before { content: "20px" !important; }
  .ql-snow .ql-picker.ql-size .ql-picker-label[data-value="24px"]::before,
  .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="24px"]::before { content: "24px" !important; }
  .ql-snow .ql-picker.ql-size .ql-picker-label[data-value="30px"]::before,
  .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="30px"]::before { content: "30px" !important; }
  .ql-snow .ql-picker.ql-size .ql-picker-label[data-value="36px"]::before,
  .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="36px"]::before { content: "36px" !important; }
  .ql-snow .ql-picker.ql-size .ql-picker-label[data-value="48px"]::before,
  .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="48px"]::before { content: "48px" !important; }
`;

const UploadNews = () => {
  const { news: blogPosts, loading: isInitialLoading, loadMore, loadingMore, hasMore } = useNews();
  const [isEditing, setIsEditing] = useState(false);
  const [currentPost, setCurrentPost] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
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
    readTime: '5 min read',
    youtubeUrl: ''
  });

  const [imageMode, setImageMode] = useState('url');
  const [imagePreview, setImagePreview] = useState('');
  const [authorImageMode, setAuthorImageMode] = useState('url');
  const [authorImagePreview, setAuthorImagePreview] = useState('');
  const [modal, setModal] = useState({ open: false, title: '', message: '' });
  const [detailModal, setDetailModal] = useState({ open: false, post: null });

  // convert file to base64 and compress
  const compressImage = (file, maxWidth = 800) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let width = img.width;
        let height = img.height;

        if (width > maxWidth) {
          height = (maxWidth / width) * height;
          width = maxWidth;
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);

        // Export as compressed jpeg
        resolve(canvas.toDataURL('image/jpeg', 0.7));
      };
      img.onerror = reject;
    };
    reader.onerror = reject;
  });

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
      setIsSubmitting(true);
      const compressedBase64 = await compressImage(file);
      setFormData(prev => ({ ...prev, image: compressedBase64 }));
      setImagePreview(compressedBase64);
    } catch (err) {
      console.error('Image compression error', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAuthorFileChange = async (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    try {
      setIsSubmitting(true);
      const compressedBase64 = await compressImage(file, 300); // Author images can be smaller
      setFormData(prev => ({ ...prev, authorImage: compressedBase64 }));
      setAuthorImagePreview(compressedBase64);
    } catch (err) {
      console.error('Author image compression error', err);
    } finally {
      setIsSubmitting(false);
    }
  };



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

  const handleContentChange = (content) => {
    setFormData(prev => ({
      ...prev,
      content
    }));
  };

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      [{ 'font': [] }],
      [{ 'size': fontSizeArr }],
      [{ 'align': [] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'script': 'sub' }, { 'script': 'super' }],
      ['blockquote', 'code-block'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
      ['link', 'image', 'video'],
      ['clean']
    ],
  };

  const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike',
    'color', 'background',
    'script',
    'blockquote', 'code-block',
    'list', 'bullet', 'indent',
    'align',
    'link', 'image', 'video'
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      ...formData,
      image: formData.image || imagePreview,
      updatedAt: serverTimestamp()
    };

    if (payload.id) delete payload.id;

    try {
      if (isEditing && currentPost) {
        const postRef = doc(db, 'news', currentPost.id);
        await updateDoc(postRef, payload);

        setTimeout(() => {
          setModal({
            open: true,
            title: 'Changes Saved',
            message: 'The article has been updated successfully and is now live.'
          });
        }, 300);
      } else {
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
      readTime: '5 min read',
      youtubeUrl: ''
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

          {/* YouTube Video URL (Optional) */}
          <div>
            <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider flex items-center gap-2">
              <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              YouTube Video URL (Optional)
            </label>
            <input
              type="url"
              name="youtubeUrl"
              value={formData.youtubeUrl}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder:text-gray-600 focus:outline-none focus:border-yellow-500/50 focus:ring-2 focus:ring-yellow-500/20 transition-all"
              placeholder="https://www.youtube.com/watch?v=..."
            />
            <p className="text-xs text-gray-500 mt-2">Add a YouTube video to embed in your article (optional)</p>
          </div>

          {/* Content with Preview */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">Content</label>
              <div className="quill-editor-container">
                <ReactQuill
                  theme="snow"
                  value={formData.content}
                  onChange={handleContentChange}
                  modules={modules}
                  formats={formats}
                  className="bg-gray-800/50 border border-gray-700 rounded-xl text-white overflow-hidden"
                />
              </div>

              <style jsx="true">{`
                .quill-editor-container .ql-toolbar {
                  background: #1f2937;
                  border-top-left-radius: 0.75rem;
                  border-top-right-radius: 0.75rem;
                  border-color: #374151;
                }
                .quill-editor-container .ql-container {
                  border-bottom-left-radius: 0.75rem;
                  border-bottom-right-radius: 0.75rem;
                  border-color: #374151;
                  min-height: 300px;
                  font-size: 1rem;
                  color: white;
                }
                .quill-editor-container .ql-editor.ql-blank::before {
                  color: #4b5563;
                }
                .quill-editor-container .ql-snow .ql-stroke {
                  stroke: #9ca3af;
                }
                .quill-editor-container .ql-snow .ql-fill {
                  fill: #9ca3af;
                }
                .quill-editor-container .ql-snow .ql-picker {
                  color: #9ca3af;
                }
                .quill-editor-container .ql-snow .ql-picker-options {
                  background-color: #111827;
                  border-color: #374151;
                }
                .quill-editor-container .ql-snow .ql-picker-item {
                  color: #9ca3af;
                }
              `}</style>
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
              <NewsListItem
                key={post.id}
                post={post}
                onView={handleView}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
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

            {hasMore && (
              <div className="pt-6 text-center">
                <button
                  onClick={loadMore}
                  disabled={loadingMore}
                  className="px-6 py-3 bg-gray-900 border border-gray-800 text-white text-xs font-bold uppercase tracking-widest hover:border-yellow-500/50 transition-all flex items-center gap-2 mx-auto disabled:opacity-50"
                >
                  {loadingMore ? (
                    <div className="w-4 h-4 border-2 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <PlusCircle size={14} className="text-yellow-500" />
                  )}
                  {loadingMore ? 'Loading More...' : 'Load More Articles'}
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      <StatusModal
        open={modal.open}
        title={modal.title}
        message={modal.message}
        onClose={() => setModal({ open: false, title: '', message: '' })}
      />

      <NewsPreviewModal
        open={detailModal.open}
        post={detailModal.post}
        onClose={() => setDetailModal({ open: false, post: null })}
      />

      <style>{quillSizeStyles}</style>
      <ProcessingOverlay isVisible={isSubmitting} />
    </div>
  );
};

export default UploadNews;