import { useEffect, useState } from 'react';
import { Edit, Trash2, PlusCircle, Check, MessageSquare, CheckCircle, X, Save, Clock, MapPin, Calendar } from 'lucide-react';
import { db } from '../firebase';
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc, serverTimestamp } from 'firebase/firestore';

const SubmittedStories = () => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [modal, setModal] = useState({ open: false, title: '', message: '' });
  const [formData, setFormData] = useState({
    id: '',
    author: '',
    title: '',
    category: '',
    content: '',
    excerpt: ''
  });

  // Fetch submitted_stories from Firestore
  useEffect(() => {
    let mounted = true;
    const fetchStories = async () => {
      try {
        const snap = await getDocs(collection(db, 'submitted_stories'));
        const items = snap.docs.map(d => ({ id: d.id, ...d.data() }));
        if (mounted) {
          setStories(items);
        }
      } catch (err) {
        console.error('Error fetching submitted stories:', err);
      } finally {
        if (mounted) setLoading(false);
      }
    };
    fetchStories();
    return () => { mounted = false; };
  }, []);

  const handleEdit = (story) => {
    setFormData({
      id: story.id,
      author: story.authorName || story.author || '',
      title: story.title || '',
      category: story.category || '',
      content: story.content || '',
      excerpt: story.excerpt || ''
    });
    setIsEditing(true);
  };

  const closeModal = () => {
    setModal({ open: false, title: '', message: '' });
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this submitted story? This will remove it from submitted_stories.')) return;
    try {
      await deleteDoc(doc(db, 'submitted_stories', id));
      setStories(prev => prev.filter(s => s.id !== id));
    } catch (err) {
      console.error('Error deleting submitted story:', err);
      alert('Failed to delete. See console for details.');
    }
  };

  const handlePostToNews = async (story) => {
    try {
      // create a copy for news collection
      const newsItem = {
        title: story.title || '',
        slug: story.slug || (story.title || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
        excerpt: story.excerpt || '',
        content: story.content || '',
        category: story.category || 'Uncategorized',
        image: story.image || '',
        author: story.authorName || story.author || 'Unknown',
        date: story.date || new Date().toISOString().split('T')[0],
        readTime: story.readTime || '5 min read'
      };

      await addDoc(collection(db, 'news'), newsItem);

      // mark submitted story as posted (but DO NOT remove it)
      await updateDoc(doc(db, 'submitted_stories', story.id), { posted: true, postedAt: serverTimestamp() });

      setStories(prev => prev.map(s => s.id === story.id ? { ...s, posted: true, postedAt: new Date().toISOString() } : s));

      setModal({
        open: true,
        title: 'Story Published',
        message: 'The community submission has been successfully published to the live news feed. It will remain in your review inbox for future reference.'
      });
    } catch (err) {
      console.error('Publication Error:', err);
      setModal({
        open: true,
        title: 'Action Failed',
        message: 'We encountered an unexpected issue while processing your request. Please ensure your connection is stable and try again.'
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!formData.id) return;
    try {
      const dataToSave = {
        title: formData.title,
        authorName: formData.author,
        category: formData.category,
        content: formData.content,
        excerpt: formData.excerpt,
        updatedAt: serverTimestamp()
      };
      await updateDoc(doc(db, 'submitted_stories', formData.id), dataToSave);
      setStories(prev => prev.map(item => item.id === formData.id ? { ...item, ...dataToSave } : item));
      setIsEditing(false);
      setModal({
        open: true,
        title: 'Submission Updated',
        message: 'Your changes to the community submission have been saved successfully.'
      });
    } catch (err) {
      console.error('Update Error:', err);
      setModal({
        open: true,
        title: 'Action Failed',
        message: 'We encountered an unexpected issue while processing your request. Please ensure your connection is stable and try again.'
      });
    }
  };

  if (loading) {
    return <div className="max-w-3xl mx-auto p-6">Loading submitted stories...</div>;
  }

  return (
    <div className="pb-20">
      {/* Header */}
      <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black mb-2 tracking-tight italic">Review <span className="text-yellow-500 underline decoration-yellow-500/30">Inbox</span></h1>
          <p className="text-sm text-gray-400">Review and publish stories submitted by the community.</p>
        </div>
        <div className="flex items-center gap-4 bg-[#0A0A0A]/80 border border-white/5 p-4 rounded-[2rem] px-8">
          <div className="text-right">
            <span className="block text-[10px] font-black text-gray-500 uppercase tracking-widest leading-none mb-1">Total Submissions</span>
            <span className="text-2xl font-black text-white leading-none">{stories.length}</span>
          </div>
          <div className="h-8 w-[1px] bg-white/10"></div>
          <div className="text-right">
            <span className="block text-[10px] font-black text-gray-500 uppercase tracking-widest leading-none mb-1">New Today</span>
            <span className="text-2xl font-black text-yellow-500 leading-none">0</span>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {stories.map((story) => (
          <div key={story.id} className={`group relative bg-[#0A0A0A] border rounded-[2.5rem] p-6 md:p-8 transition-all duration-500 ${story.posted ? 'border-white/5 opacity-70 hover:opacity-100' : 'border-yellow-500/20 shadow-xl shadow-yellow-500/5 hover:border-yellow-500/50'}`}>
            <div className="flex flex-col md:flex-row gap-8">
              {/* Status Badge Sidebar */}
              <div className="hidden md:flex flex-col items-center gap-4 py-2 border-r border-white/5 pr-8">
                {story.posted ? (
                  <div className="w-12 h-12 rounded-2xl bg-green-500/10 text-green-500 flex items-center justify-center border border-green-500/20 shadow-lg shadow-green-500/10">
                    <CheckCircle size={24} />
                  </div>
                ) : (
                  <div className="w-12 h-12 rounded-2xl bg-yellow-500/10 text-yellow-500 flex items-center justify-center border border-yellow-500/20 shadow-lg shadow-yellow-500/10">
                    <MessageSquare size={24} />
                  </div>
                )}
                <span className={`text-[10px] font-black uppercase tracking-widest ${story.posted ? 'text-green-500' : 'text-yellow-500'}`}>
                  {story.posted ? 'PUBLISHED' : 'PENDING'}
                </span>
              </div>

              <div className="flex-1 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[10px] font-black text-gray-500">
                      {story.author?.[0] || 'U'}
                    </div>
                    <span className="text-xs font-bold text-gray-400">{story.authorName || story.author || 'Unknown'}</span>
                    <span className="text-[10px] text-gray-600 font-bold">•</span>
                    <span className="text-xs font-bold text-gray-600 italic">Submitted on {story.submittedAt?.toDate?.().toLocaleDateString() || story.date || 'unknown date'}</span>
                  </div>
                  <div className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[10px] font-bold text-gray-500 tracking-tighter uppercase">
                    {story.category || 'General'}
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-black tracking-tight group-hover:text-yellow-500 transition-colors uppercase">{story.title}</h3>
                  <p className="text-gray-400 font-light leading-relaxed line-clamp-3 italic">"{story.excerpt || story.content.substring(0, 150)}..."</p>
                </div>

                <div className="pt-6 flex flex-wrap items-center gap-4 border-t border-white/5">
                  {!story.posted && (
                    <button
                      onClick={() => handlePostToNews(story)}
                      className="flex items-center gap-2 px-8 py-4 bg-yellow-500 text-black rounded-2xl font-black text-sm hover:bg-yellow-400 hover:scale-[1.05] transition-all shadow-xl shadow-yellow-500/20"
                    >
                      <PlusCircle size={18} /> PUBLISH TO SITE
                    </button>
                  )}
                  <button
                    onClick={() => handleEdit(story)}
                    className="flex items-center gap-2 px-6 py-4 bg-white/5 text-white border border-white/5 rounded-2xl font-bold text-sm hover:bg-white/10 transition-all border-dashed"
                  >
                    <Edit size={18} className="text-yellow-500" /> REVIEW DETAILS
                  </button>
                  <button
                    onClick={() => handleDelete(story.id)}
                    className="flex items-center gap-2 px-6 py-4 bg-red-500/5 text-red-500 border border-red-500/10 rounded-2xl font-bold text-sm hover:bg-red-500 hover:text-white transition-all ml-auto"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {stories.length === 0 && (
          <div className="py-32 text-center bg-[#0A0A0A] border border-white/5 border-dashed rounded-[3rem]">
            <div className="w-20 h-20 bg-white/5 rounded-[2rem] flex items-center justify-center mx-auto mb-6 text-gray-700">
              <MessageSquare size={40} />
            </div>
            <h3 className="text-xl font-black text-gray-300 mb-2 italic">Inbox Zero</h3>
            <p className="text-xs text-gray-500 tracking-widest uppercase">No submissions waiting for review.</p>
          </div>
        )}
      </div>

      {loading && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 flex flex-col items-center gap-4 shadow-2xl">
            <div className="w-12 h-12 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-xs font-black text-gray-400 uppercase tracking-widest">Processing Publication...</p>
          </div>
        </div>
      )}

      {modal.open && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-black/95 backdrop-blur-2xl" onClick={() => setModal({ open: false, title: '', message: '' })}></div>
          <div className="relative bg-[#0A0A0A] border border-white/10 rounded-[3rem] p-12 w-full max-w-lg shadow-2xl text-center">
            <div className={`w-24 h-24 rounded-[2rem] flex items-center justify-center mx-auto mb-8 border shadow-2xl ${modal.title === 'Action Failed' ? 'bg-red-500/10 text-red-500 border-red-500/20' : 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20'}`}>
              {modal.title === 'Action Failed' ? <X size={48} /> : <CheckCircle size={48} />}
            </div>
            <h3 className="text-3xl font-black mb-4 italic uppercase tracking-tighter text-white">{modal.title}</h3>
            <p className="text-gray-400 mb-10 leading-relaxed font-light text-lg">{modal.message}</p>
            <button
              onClick={() => setModal({ open: false, title: '', message: '' })}
              className="w-full py-5 bg-yellow-500 text-black rounded-2xl font-black text-xl hover:bg-yellow-400 transition-all shadow-2xl shadow-yellow-500/20"
            >
              GOT IT
            </button>
          </div>
        </div>
      )}

      {/* Edit Modal (If you decide to keep minimal inline editing or full page) */}
      {isEditing && (
        <div className="fixed inset-0 z-[250] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-black/95 backdrop-blur-2xl" onClick={() => setIsEditing(false)}></div>
          <div className="relative bg-[#0A0A0A] border border-white/10 rounded-[3rem] p-8 md:p-12 w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
              <h3 className="text-2xl font-black italic uppercase tracking-tighter">Reviewing <span className="text-yellow-500">Submission</span></h3>
              <button onClick={() => setIsEditing(false)} className="p-2 text-gray-500 hover:text-white"><X size={32} /></button>
            </div>

            <form onSubmit={handleUpdate} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Author Name</label>
                  <input type="text" name="author" value={formData.author} onChange={handleInputChange} required className="w-full px-6 py-4 bg-black border border-white/5 rounded-2xl text-white outline-none focus:border-yellow-500/50" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Post Title</label>
                  <input type="text" name="title" value={formData.title} onChange={handleInputChange} required className="w-full px-6 py-4 bg-black border border-white/5 rounded-2xl text-white outline-none focus:border-yellow-500/50" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Category</label>
                  <input type="text" name="category" value={formData.category} onChange={handleInputChange} required className="w-full px-6 py-4 bg-black border border-white/5 rounded-2xl text-white outline-none focus:border-yellow-500/50" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Excerpt</label>
                  <textarea name="excerpt" value={formData.excerpt} onChange={handleInputChange} rows="5" className="w-full px-6 py-4 bg-black border border-white/5 rounded-2xl text-white outline-none focus:border-yellow-500/50 resize-none font-light leading-relaxed" />
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Full Content Preview</label>
                  <textarea name="content" value={formData.content} onChange={handleInputChange} rows="10" required className="w-full px-6 py-4 bg-black border border-white/5 rounded-2xl text-white outline-none focus:border-yellow-500/50 resize-none font-light leading-relaxed" />
                </div>
                <button type="submit" className="w-full py-5 bg-white text-black rounded-2xl font-black text-lg hover:bg-gray-200 transition-all flex items-center justify-center gap-2">
                  <Save size={20} /> SAVE CHANGES
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubmittedStories;
