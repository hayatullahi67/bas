import { useState } from 'react';

const initialStories = [
  // Example mock data
  { id: '1', title: 'Story 1', author: 'User A', content: 'Story content...', status: 'pending' },
  { id: '2', title: 'Story 2', author: 'User B', content: 'Another story...', status: 'pending' },
];

const SubmittedStories = () => {
  const [stories, setStories] = useState(initialStories);

  const handleEdit = (id) => {
    alert('Edit story (mock)!');
  };

  const handleDelete = (id) => {
    if (window.confirm('Delete this story?')) {
      setStories(prev => prev.filter(story => story.id !== id));
    }
  };

  const handleAccept = (id) => {
    setStories(prev => prev.map(story => story.id === id ? { ...story, status: 'accepted' } : story));
    alert('Story accepted!');
  };

  return (
    <div className="max-w-3xl mx-auto bg-gray-900 border border-gray-800 rounded-xl p-8">
      <h2 className="text-2xl font-bold mb-6 text-yellow-500">Submitted Stories</h2>
      <div className="space-y-4">
        {stories.map(story => (
          <div key={story.id} className="p-6 bg-gray-800 rounded-lg border border-gray-700 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-bold text-yellow-500 mb-2">{story.title}</h3>
              <p className="text-sm text-gray-400 mb-1">By: {story.author}</p>
              <p className="text-sm text-gray-300 mb-2">{story.content}</p>
              <span className={`text-xs px-3 py-1 rounded-full ${story.status === 'accepted' ? 'bg-green-500 text-black' : 'bg-yellow-500 text-black'}`}>{story.status}</span>
            </div>
            <div className="flex gap-2 md:flex-col">
              <button onClick={() => handleEdit(story.id)} className="px-4 py-2 bg-yellow-500/10 text-yellow-500 border border-yellow-500/30 rounded-lg hover:bg-yellow-500 hover:text-black font-semibold transition-all duration-200">Edit</button>
              <button onClick={() => handleDelete(story.id)} className="px-4 py-2 bg-red-500/10 text-red-500 border border-red-500/30 rounded-lg hover:bg-red-500 hover:text-white font-semibold transition-all duration-200">Delete</button>
              {story.status !== 'accepted' && (
                <button onClick={() => handleAccept(story.id)} className="px-4 py-2 bg-green-500/10 text-green-500 border border-green-500/30 rounded-lg hover:bg-green-500 hover:text-black font-semibold transition-all duration-200">Accept</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubmittedStories;
