import { useState } from 'react';

const UploadEvent = () => {
  const [formData, setFormData] = useState({
    eventName: '',
    venue: '',
    address: '',
    date: '',
    time: '',
    description: '',
    banner: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Event uploaded (mock)!');
    setFormData({ eventName: '', venue: '', address: '', date: '', time: '', description: '', banner: '' });
  };

  return (
    <div className="max-w-2xl mx-auto bg-gray-900 border border-gray-800 rounded-xl p-8">
      <h2 className="text-2xl font-bold mb-6 text-yellow-500">Upload Event</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
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
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">Date *</label>
            <input type="date" name="date" value={formData.date} onChange={handleChange} required className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">Time *</label>
            <input type="time" name="time" value={formData.time} onChange={handleChange} required className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-500" />
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
        <button type="submit" className="w-full px-8 py-4 bg-yellow-500 text-black font-bold text-lg rounded-lg hover:bg-yellow-400 transition-all duration-200 hover:scale-105">Upload Event</button>
      </form>
    </div>
  );
};

export default UploadEvent;
