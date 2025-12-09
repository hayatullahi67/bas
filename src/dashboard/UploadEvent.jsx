import { useState, useEffect } from 'react';
import { PlusCircle, Edit, Trash2, Save } from 'lucide-react';
import { db } from '../firebase';
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc, serverTimestamp } from 'firebase/firestore';

const UploadEvent = () => {
  const [formData, setFormData] = useState({
    eventName: '',
    venue: '',
    address: '',
    date: '',
    time: '',
    description: '',
    banner: '',
    id: null,
  });
  const [events, setEvents] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [modal, setModal] = useState({ open: false, title: '', message: '', confirmAction: null });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // fetch events from Firestore
  useEffect(() => {
    let mounted = true;
    const fetchEvents = async () => {
      try {
        const snap = await getDocs(collection(db, 'events'));
        const items = snap.docs.map(d => ({ id: d.id, ...d.data() }));
        if (mounted) setEvents(items);
      } catch (err) {
        console.error('Error fetching events:', err);
      }
    };
    fetchEvents();
    return () => { mounted = false; };
  }, []);

  const openModal = (title, message, confirmAction = null) => {
    setModal({ open: true, title, message, confirmAction });
  };

  const closeModal = () => setModal({ open: false, title: '', message: '', confirmAction: null });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      eventName: formData.eventName,
      venue: formData.venue,
      address: formData.address,
      date: formData.date,
      time: formData.time,
      description: formData.description,
      banner: formData.banner,
      createdAt: serverTimestamp()
    };

    try {
      if (isEditing && formData.id) {
        await updateDoc(doc(db, 'events', formData.id), payload);
        setEvents(prev => prev.map(ev => ev.id === formData.id ? { ...ev, ...payload, id: formData.id } : ev));
        openModal('Updated', 'Event updated successfully.');
      } else {
        const ref = await addDoc(collection(db, 'events'), payload);
        setEvents(prev => [{ ...payload, id: ref.id }, ...prev]);
        openModal('Saved', 'Event created and saved to Firebase!');
      }
      // reset form
      setFormData({ eventName: '', venue: '', address: '', date: '', time: '', description: '', banner: '', id: null });
      setIsEditing(false);
    } catch (err) {
      console.error('Error saving event:', err);
      openModal('Error', 'Error saving event: ' + (err.message || 'unknown'));
    }
  };

  const handleEdit = (event) => {
    setFormData({ ...event });
    setIsEditing(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = (id) => {
    openModal('Confirm Delete', 'Are you sure you want to delete this event?', async () => {
      try {
        await deleteDoc(doc(db, 'events', id));
        setEvents(prev => prev.filter(ev => ev.id !== id));
        closeModal();
      } catch (err) {
        console.error('Error deleting event:', err);
        openModal('Error', 'Failed to delete event. See console for details.');
      }
    });
  };

  return (
    <div className="max-w-3xl mx-auto bg-gray-900 border border-gray-800 rounded-xl p-6">
      {/* Modal */}
      {modal.open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/60" onClick={closeModal}></div>
          <div className="relative bg-gray-900 border border-gray-800 rounded-lg p-6 w-full max-w-md mx-4">
            <h3 className="text-lg font-bold text-yellow-500 mb-2">{modal.title}</h3>
            <p className="text-sm text-gray-300 mb-4">{modal.message}</p>
            <div className="flex justify-end gap-2">
              {modal.confirmAction ? (
                <>
                  <button onClick={closeModal} className="px-4 py-2 bg-gray-700 text-white rounded">Cancel</button>
                  <button onClick={modal.confirmAction} className="px-4 py-2 bg-red-500 text-white rounded font-semibold">Delete</button>
                </>
              ) : (
                <button onClick={closeModal} className="px-4 py-2 bg-yellow-500 text-black rounded font-semibold">OK</button>
              )}
            </div>
          </div>
        </div>
      )}

      <h2 className="text-2xl font-bold mb-4 text-yellow-500">Upload Event</h2>
      <form onSubmit={handleSubmit} className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-2">Event Name *</label>
          <input type="text" name="eventName" value={formData.eventName} onChange={handleChange} required className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-500" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-2">Venue *</label>
          <input type="text" name="venue" value={formData.venue} onChange={handleChange} required className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-500" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-2">Address *</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} required className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-500" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">Date *</label>
            <input type="date" name="date" value={formData.date} onChange={handleChange} required className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">Time *</label>
            <input type="text" name="time" value={formData.time} onChange={handleChange} required placeholder="e.g. 6:00 PM or 18:00" className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-500" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-2">Description *</label>
          <textarea name="description" value={formData.description} onChange={handleChange} required rows="4" className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-500 resize-none" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-2">Banner Image URL *</label>
          <input type="url" name="banner" value={formData.banner} onChange={handleChange} required className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-500" />
        </div>
        <div className="flex gap-3">
          <button type="submit" className="flex-1 px-6 py-3 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-400 transition-all duration-200 flex items-center justify-center">
            <Save size={16} className="mr-2" /> {isEditing ? 'Update Event' : 'Upload Event'}
          </button>
          {isEditing && (
            <button type="button" onClick={() => { setIsEditing(false); setFormData({ eventName: '', venue: '', address: '', date: '', time: '', description: '', banner: '', id: null }); }} className="px-6 py-3 bg-gray-700 text-white rounded-lg">Cancel</button>
          )}
        </div>
      </form>

      <div>
        <h3 className="text-xl font-bold mb-3">Posted Events <span className="text-yellow-500">({events.length})</span></h3>
        {events.length === 0 ? (
          <p className="text-gray-400">No events posted yet.</p>
        ) : (
          <div className="space-y-4">
            {events.map(ev => (
              <div key={ev.id} className="p-4 bg-gray-800 border border-gray-700 rounded-lg flex items-center justify-between gap-4">
                <div>
                  <div className="text-sm text-gray-400">{ev.date} • {ev.time}</div>
                  <div className="text-lg font-semibold text-yellow-400">{ev.eventName}</div>
                  <div className="text-sm text-gray-300">{ev.venue} — {ev.address}</div>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => handleEdit(ev)} className="px-3 py-2 bg-yellow-500/10 text-yellow-500 border border-yellow-500/30 rounded-lg hover:bg-yellow-500 hover:text-black transition"> <Edit size={14} /> </button>
                  <button onClick={() => handleDelete(ev.id)} className="px-3 py-2 bg-red-500/10 text-red-500 border border-red-500/30 rounded-lg hover:bg-red-500 hover:text-white transition"> <Trash2 size={14} /> </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadEvent;
