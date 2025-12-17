import { useEffect, useState } from 'react';
import { Edit, Trash2, PlusCircle, Check } from 'lucide-react';
import { db } from '../firebase';
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc, serverTimestamp } from 'firebase/firestore';

const SubmittedStories = () => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState({ open: false, story: null });

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

  const openEditModal = (story) => {
    setModal({ open: true, story: { ...story } });
  };

  const closeModal = () => setModal({ open: false, story: null });

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

      alert('Story published to News successfully. It remains in submitted_stories.');
    } catch (err) {
      console.error('Error posting to news:', err);
      alert('Failed to post to news. See console for details.');
    }
  };

  const handleSaveEdit = async (e) => {
    e.preventDefault();
    const s = modal.story;
    if (!s || !s.id) return;
    try {
      const dataToSave = {
        title: s.title || '',
        slug: s.slug || '',
        excerpt: s.excerpt || '',
        content: s.content || '',
        category: s.category || 'Uncategorized',
        image: s.image || '',
        authorName: s.authorName || s.author || '',
        date: s.date || new Date().toISOString().split('T')[0],
        readTime: s.readTime || '5 min read'
      };
      await updateDoc(doc(db, 'submitted_stories', s.id), dataToSave);
      setStories(prev => prev.map(item => item.id === s.id ? { ...item, ...dataToSave } : item));
      closeModal();
    } catch (err) {
      console.error('Error updating submitted story:', err);
      alert('Failed to update story. See console for details.');
    }
  };

  if (loading) {
    return <div className="max-w-3xl mx-auto p-6">Loading submitted stories...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto bg-gray-900 border border-gray-800 rounded-xl p-8">
      <h2 className="text-2xl font-bold mb-6 text-yellow-500">Submitted Stories</h2>
      {stories.length === 0 ? (
        <p className="text-gray-400">No submitted stories found.</p>
      ) : (
        <div className="space-y-4">
          {stories.map(story => (
            <div key={story.id} className="p-6 bg-gray-800 rounded-lg border border-gray-700 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${story.posted ? 'bg-green-500 text-black' : 'bg-yellow-500 text-black'}`}>{story.posted ? 'Posted' : 'Pending'}</span>
                  <span className="text-sm text-gray-500">{story.date}</span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-yellow-400">{story.title}</h3>
                <p className="text-sm text-gray-400 mb-1">By: {story.authorName || story.author || 'Unknown'}</p>
                <p className="text-sm text-gray-300 mb-2 line-clamp-3">{story.excerpt || story.content}</p>
              </div>
              <div className="flex gap-2 md:flex-col">
                {!story.posted && (
                  <button onClick={() => handlePostToNews(story)} className="flex items-center px-4 py-2 bg-green-500/10 text-green-500 border border-green-500/30 rounded-lg hover:bg-green-500 hover:text-black transition-all duration-200">
                    <PlusCircle size={14} className="mr-2" /> Post to News
                  </button>
                )}
                <button onClick={() => openEditModal(story)} className="flex items-center px-4 py-2 bg-yellow-500/10 text-yellow-500 border border-yellow-500/30 rounded-lg hover:bg-yellow-500 hover:text-black transition-all duration-200">
                  <Edit size={14} className="mr-2" /> Edit
                </button>
                <button onClick={() => handleDelete(story.id)} className="flex items-center px-4 py-2 bg-red-500/10 text-red-500 border border-red-500/30 rounded-lg hover:bg-red-500 hover:text-white transition-all duration-200">
                  <Trash2 size={14} className="mr-2" /> Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Edit Modal */}
      {modal.open && modal.story && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/60" onClick={closeModal}></div>
          <div className="relative bg-gray-900 border border-gray-800 rounded-lg p-4 w-full max-w-xl mx-4">
            <h3 className="text-lg font-bold text-yellow-500 mb-2">Edit Submitted Story</h3>
            <div className="max-h-[65vh] overflow-y-auto pr-2">
              <form onSubmit={handleSaveEdit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-1">Title</label>
                <input value={modal.story.title} onChange={(e) => setModal(prev => ({ ...prev, story: { ...prev.story, title: e.target.value } }))} className="w-full px-3 py-2 bg-black border border-gray-700 rounded text-white" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-1">Author</label>
                <input value={modal.story.authorName || modal.story.author || ''} onChange={(e) => setModal(prev => ({ ...prev, story: { ...prev.story, authorName: e.target.value } }))} className="w-full px-3 py-2 bg-black border border-gray-700 rounded text-white" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-1">Category</label>
                <input value={modal.story.category || ''} onChange={(e) => setModal(prev => ({ ...prev, story: { ...prev.story, category: e.target.value } }))} className="w-full px-3 py-2 bg-black border border-gray-700 rounded text-white" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-1">Excerpt</label>
                <textarea value={modal.story.excerpt || ''} onChange={(e) => setModal(prev => ({ ...prev, story: { ...prev.story, excerpt: e.target.value } }))} className="w-full px-3 py-2 bg-black border border-gray-700 rounded text-white" rows={3} />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-1">Content</label>
                <textarea value={modal.story.content || ''} onChange={(e) => setModal(prev => ({ ...prev, story: { ...prev.story, content: e.target.value } }))} className="w-full px-3 py-2 bg-black border border-gray-700 rounded text-white" rows={6} />
              </div>
              <div className="flex justify-end gap-2">
                <button type="button" onClick={closeModal} className="px-4 py-2 bg-gray-700 text-white rounded">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-yellow-500 text-black rounded font-semibold flex items-center gap-2"><Check size={16} /> Save</button>
              </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubmittedStories;
