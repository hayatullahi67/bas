import { useState, useEffect } from 'react';
import { PlusCircle, Edit, Trash2, Save, Twitter, Heart } from 'lucide-react';
import { db } from '../firebase';
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc, serverTimestamp } from 'firebase/firestore';
import TwitterEmbed from '../components/TwitterEmbed';

const UploadTestimonials = () => {
  const [formData, setFormData] = useState({
    twitterLink: '',
    id: null,
  });
  const [testimonials, setTestimonials] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [modal, setModal] = useState({ open: false, title: '', message: '', confirmAction: null });
  const [initialLoading, setInitialLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // fetch testimonials from Firestore
  useEffect(() => {
    let mounted = true;
    const fetchTestimonials = async () => {
      try {
        const snap = await getDocs(collection(db, 'testimonials'));
        const items = snap.docs.map(d => ({ id: d.id, ...d.data() }));
        if (mounted) setTestimonials(items);
      } catch (err) {
        console.error('Error fetching testimonials:', err);
      } finally {
        if (mounted) setInitialLoading(false);
      }
    };
    fetchTestimonials();
    return () => { mounted = false; };
  }, []);

  const openModal = (title, message, confirmAction = null) => {
    setModal({ open: true, title, message, confirmAction });
  };

  const closeModal = () => setModal({ open: false, title: '', message: '', confirmAction: null });

  const validateTwitterLink = (link) => {
    return link.includes('twitter.com') || link.includes('x.com');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.twitterLink.trim()) {
      openModal('Error', 'Please enter a Twitter/X post link');
      return;
    }

    if (!validateTwitterLink(formData.twitterLink)) {
      openModal('Error', 'Please enter a valid Twitter/X post link (twitter.com or x.com)');
      return;
    }

    setIsSubmitting(true);
    try {
      const payload = {
        twitterLink: formData.twitterLink,
        createdAt: serverTimestamp()
      };

      if (isEditing && formData.id) {
        await updateDoc(doc(db, 'testimonials', formData.id), { twitterLink: formData.twitterLink });
        setTestimonials(prev => prev.map(t => t.id === formData.id ? { ...t, twitterLink: formData.twitterLink } : t));
        openModal('Updated', 'Testimonial updated successfully.');
      } else {
        const docRef = await addDoc(collection(db, 'testimonials'), payload);
        setTestimonials(prev => [{ ...payload, id: docRef.id }, ...prev]);
        openModal('Saved', 'Testimonial created and saved to Firebase!');
      }
      // reset form
      setFormData({ twitterLink: '', id: null });
      setIsEditing(false);
    } catch (err) {
      console.error('Error saving testimonial:', err);
      openModal('Error', 'Error saving testimonial: ' + (err.message || 'unknown'));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEdit = (testimonial) => {
    setFormData({ twitterLink: testimonial.twitterLink, id: testimonial.id });
    setIsEditing(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = (testimonial) => {
    openModal('Confirm Delete', 'Are you sure you want to delete this testimonial?', async () => {
      try {
        await deleteDoc(doc(db, 'testimonials', testimonial.id));
        setTestimonials(prev => prev.filter(t => t.id !== testimonial.id));
        openModal('Deleted', 'Testimonial deleted successfully.');
      } catch (err) {
        console.error('Error deleting testimonial:', err);
        openModal('Error', 'Error deleting testimonial: ' + (err.message || 'unknown'));
      }
    });
  };

  const handleCancel = () => {
    setFormData({ twitterLink: '', id: null });
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-black p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Twitter className="text-yellow-500" size={32} />
            <h1 className="text-4xl font-bold text-white">Upload Testimonials</h1>
          </div>
          <p className="text-gray-400">Add Twitter/X post links as testimonials</p>
        </div>

        {/* Form Section */}
        <div className="bg-[#0A0A0A] border border-white/10 rounded-xl p-6 mb-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Twitter Link Input */}
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                <Twitter size={16} className="inline mr-2" />
                Twitter/X Post Link
              </label>
              <input
                type="text"
                name="twitterLink"
                value={formData.twitterLink}
                onChange={handleChange}
                placeholder="https://x.com/... or https://twitter.com/..."
                className="w-full px-4 py-2 bg-white/5 border border-white/10 text-white rounded-lg focus:border-yellow-500 focus:outline-none placeholder-gray-500"
              />
              <p className="text-xs text-gray-500 mt-1">
                Paste the full URL of a Twitter/X post
              </p>
            </div>

            {/* Submit Buttons */}
            <div className="flex gap-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center gap-2 px-6 py-2 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Save size={18} />
                {isEditing ? 'Update' : 'Add'} Testimonial
              </button>
              {isEditing && (
                <button
                  type="button"
                  onClick={handleCancel}
                  className="flex items-center gap-2 px-6 py-2 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-600 transition-colors"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Testimonials List */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Uploaded Testimonials ({testimonials.length})</h2>
          
          {initialLoading ? (
            <div className="text-center py-12">
              <p className="text-gray-400">Loading testimonials...</p>
            </div>
          ) : testimonials.length === 0 ? (
            <div className="bg-[#0A0A0A] border border-white/10 rounded-xl p-12 text-center">
              <Heart className="mx-auto mb-3 text-gray-600" size={40} />
              <p className="text-gray-400">No testimonials yet. Add your first one!</p>
            </div>
          ) : (
            <div className="grid gap-4">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-[#0A0A0A] border border-white/10 rounded-xl p-6 hover:border-yellow-500/30 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex-1 min-w-0">
                      <a
                        href={testimonial.twitterLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-yellow-500 hover:text-yellow-400 break-all text-sm flex items-center gap-2"
                      >
                        <Twitter size={16} className="flex-shrink-0" />
                        View on X
                      </a>
                      {testimonial.createdAt && (
                        <p className="text-xs text-gray-500 mt-1">
                          Added: {new Date(testimonial.createdAt.seconds * 1000).toLocaleDateString()}
                        </p>
                      )}
                    </div>
                    <div className="flex gap-2 flex-shrink-0">
                      <button
                        onClick={() => handleEdit(testimonial)}
                        className="p-2 text-blue-400 hover:bg-blue-400/10 rounded-lg transition-colors"
                        title="Edit"
                      >
                        <Edit size={18} />
                      </button>
                      <button
                        onClick={() => handleDelete(testimonial)}
                        className="p-2 text-red-400 hover:bg-red-400/10 rounded-lg transition-colors"
                        title="Delete"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                  <div className="border-t border-white/10 pt-4">
                    <TwitterEmbed tweetUrl={testimonial.twitterLink} />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {modal.open && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-[#0A0A0A] border border-white/10 rounded-xl max-w-sm w-full p-6 space-y-4">
            <h2 className="text-xl font-bold text-white">{modal.title}</h2>
            <p className="text-gray-400">{modal.message}</p>
            <div className="flex gap-3 justify-end">
              {modal.confirmAction ? (
                <>
                  <button
                    onClick={closeModal}
                    className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      modal.confirmAction();
                      closeModal();
                    }}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                  >
                    Delete
                  </button>
                </>
              ) : (
                <button
                  onClick={closeModal}
                  className="px-4 py-2 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition-colors"
                >
                  OK
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadTestimonials;
