import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { blogPosts } from '../mock';

const UpcomingEvent = ({ title, location, date, attendees }) => (
  <div className="mb-6 p-4 bg-gray-800 rounded-md shadow-sm border border-gray-800">
    <div className="inline-block bg-yellow-500 text-black px-3 py-1 rounded text-sm font-semibold mb-2">Workshop</div>
    <h4 className="font-semibold text-gray-100">{title}</h4>
    <div className="text-sm text-gray-400 mt-2">{location}</div>
    <div className="text-sm text-gray-400 mt-1">{date}</div>
    <div className="text-sm text-gray-400 mt-1">{attendees} attending</div>
  </div>
);

const Community = () => {
  // get a few community-related posts to use as events (fallback)
  const events = blogPosts
    .filter((p) => p.category && p.category.toLowerCase().includes('community'))
    .slice(0, 3)
    .map((p, i) => ({
      id: p.id || i,
      title: p.title,
      location: p.location || 'Various, Africa',
      date: new Date(p.date).toLocaleString(),
      attendees: `${Math.floor(Math.random() * 100) + 20}`,
    }));

  // simple logos array
  const logos = ['Bitcoin Ghana', 'Bitcoin Dada', 'Bitcoin Nigeria', 'Crypto Kenya', 'The Bitcoin Tribe', 'BitSawa', 'Bitcoin Ekasi', 'BTCAfrica'];

  return (
    <div className="pt-20 pb-32">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-5xl font-extrabold mb-4 text-gray-100">Join Our Community</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">Connect with fellow Africans learning and using Bitcoin. Share experiences, ask questions, and grow together.</p>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left column */}
        <div className="space-y-6">
          <div className="bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-800">
            <h2 className="text-2xl font-bold mb-2 text-gray-100">Join Our Communities</h2>
            <p className="text-gray-400 mb-6">Connect with our community on your favorite platforms.</p>

            <div className="flex gap-4">
              <a
                className="flex-1 inline-flex items-center justify-center gap-3 px-6 py-3 rounded-md bg-yellow-500 text-black font-medium hover:bg-yellow-400 transition"
                href="#"
              >
                <span>Join Telegram</span>
              </a>
              <a
                className="flex-1 inline-flex items-center justify-center gap-3 px-6 py-3 rounded-md bg-transparent border border-yellow-500 text-yellow-500 font-medium hover:bg-yellow-500/10 transition"
                href="#"
              >
                <span>Join WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-800">
            <h3 className="text-xl font-semibold text-gray-100 mb-2">African Bitcoin Communities</h3>
            <p className="text-gray-400 mb-6">Discover other amazing Bitcoin communities across Africa</p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
              {logos.map((l) => (
                <div key={l} className="h-20 flex items-center justify-center bg-gray-800 border border-gray-800 rounded-md text-sm text-gray-300">{l} Logo</div>
              ))}
            </div>

            <div className="space-y-3">
              <div className="flex items-start justify-between p-4 bg-gray-800 rounded">
                <div>
                  <div className="font-semibold text-gray-100">BTrust Builders <span className="ml-2 inline-block text-xs bg-yellow-50 text-yellow-600 px-2 py-0.5 rounded">2.5K+</span></div>
                  <div className="text-sm text-gray-400">Building Bitcoin infrastructure and education across West Africa</div>
                </div>
                <button className="ml-4 px-3 py-1 border border-yellow-500 text-yellow-500 rounded-md">Visit</button>
              </div>

              <div className="flex items-start justify-between p-4 bg-gray-800 rounded">
                <div>
                  <div className="font-semibold text-gray-100">Bitcoin Dada <span className="ml-2 inline-block text-xs bg-yellow-50 text-yellow-600 px-2 py-0.5 rounded">1.8K+</span></div>
                  <div className="text-sm text-gray-400">Empowering African women through Bitcoin education</div>
                </div>
                <button className="ml-4 px-3 py-1 border border-yellow-500 text-yellow-500 rounded-md">Visit</button>
              </div>
            </div>

            <div className="text-center mt-6">
              <button className="inline-flex items-center gap-2 px-5 py-2 border border-yellow-500 text-yellow-500 rounded-full hover:bg-yellow-500/10">Submit Community <ArrowRight size={16} /></button>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-6">
          <div className="bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-800">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-100">Upcoming Events</h3>
              <button className="inline-flex items-center gap-2 px-3 py-2 border border-yellow-500 text-yellow-500 rounded">Add Event</button>
            </div>

            <div className="mt-6">
              {events.length ? (
                events.map((e) => (
                  <UpcomingEvent key={e.id} title={e.title} location={e.location} date={e.date} attendees={e.attendees} />
                ))
              ) : (
                <div className="text-gray-400">No upcoming events yet.</div>
              )}
            </div>

            <div className="text-center mt-4">
              <Link to="#" className="inline-flex items-center gap-2 px-4 py-2 border border-yellow-500 text-yellow-500 rounded">View Calendar</Link>
            </div>
          </div>

          
        </div>



      
      </div>
      
        <div className="bg-gray-900 max-w-6xl mx-auto mt-[40px] rounded-2xl p-10 shadow-lg border border-gray-800">
            <h3 className="text-xl font-semibold text-center mb-2 text-gray-100">Growing Together</h3>
            <p className="text-center text-gray-400 mb-6">Our community impact across Africa</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-yellow-500">5,240</div>
                <div className="text-sm text-gray-400">Active Members</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-500">850+</div>
                <div className="text-sm text-gray-400">Discussions</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-500">125</div>
                <div className="text-sm text-gray-400">Local Events</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-500">28</div>
                <div className="text-sm text-gray-400">Countries</div>
              </div>
            </div>
          </div>
    </div>
  );
};

export default Community;
