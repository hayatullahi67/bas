import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { blogPosts } from '../mock';
import ScrollToTop from '../components/ScrollToTop';
import CountUp from '../components/ui/CountUp';

const UpcomingEvent = ({ title, location, date, attendees }) => (
  <div className="mb-6 p-4 bg-gray-800  shadow-sm border border-gray-800">
    <div className="inline-block bg-yellow-500 text-black px-3 py-1  text-sm font-semibold mb-2">Workshop</div>
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
    <div className="mt-[75px] pb-32">
      <section id="hero" className="relative  flex items-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/assets/story.jpg')",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/80" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
            <div className="w-full lg:w-1/2 text-left mt-12 md:mt-10 lg:text-left">
              <div className="inline-block mb-6 px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full">
                <span className="text-yellow-500 text-sm font-semibold">Your Network is your Networth</span>
              </div>

              <h1 className="text-5xl sm:text-7xl md:text-6xl lg:text-7xl md:font-extrabold mb-4 leading-tight">
                <span>Join </span> <br className="sm:hidden"/> <span>Our </span> <br className="sm:hidden"/> <span>Growing </span> <br className=""/> <span className="text-[#FAD604]">Community!</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
                Connect with fellow Africans learning and using Bitcoin. Share experiences, ask questions, and grow together.
              </p>

              {/* <div className="flex sm:flex-row gap-4 justify-start mb-6 w-full max-w-md">
                <a
                  href="#"
                  className="inline-flex w-full sm:w-auto items-center justify-center px-6 py-3 bg-yellow-500 text-black font-bold text-lg hover:bg-yellow-400 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-yellow-500/50"
                >
                  Join Telegram
                </a>
                <a
                  href="#"
                  className="inline-flex w-full sm:w-auto items-center justify-center px-6 py-3 bg-transparent border-2 border-yellow-500 text-yellow-500 font-bold text-lg hover:bg-yellow-500 hover:text-black transition-all duration-200"
                >
                  Join WhatsApp
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left column */}
        <div className="space-y-6">
          <div className="bg-gray-900  p-8 shadow-lg border border-gray-800">
            <h2 className="text-2xl font-bold mb-2 text-gray-100">Join Our Communities</h2>
            <p className="text-gray-400 mb-6">Connect with our community on your favorite platforms.</p>

            <div className="flex gap-4">
              <a
                className="flex-1 inline-flex items-center justify-center gap-3 px-6 py-3  bg-yellow-500 text-black font-medium hover:bg-yellow-400 transition"
                href="#"
              >
                <span>Join Telegram</span>
              </a>
              <a
                className="flex-1 inline-flex items-center justify-center gap-3 px-6 py-3  bg-transparent border border-yellow-500 text-yellow-500 font-medium hover:bg-yellow-500/10 transition"
                href="#"
              >
                <span>Join WhatsApp</span>
              </a>
            </div>
          </div>

          {/* <div className="bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-800">
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
          </div> */}
        </div>

        {/* Right column */}
        <div className="space-y-6">
          <div className="bg-gray-900  p-6 shadow-lg border border-gray-800">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-100">Upcoming Events</h3>
              {/* <button className="inline-flex items-center gap-2 px-3 py-2 border border-yellow-500 text-yellow-500 ">Add Event</button> */}
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
              <Link to="#" className="inline-flex items-center gap-2 px-4 py-2 border border-yellow-500 text-yellow-500 ">View Calendar</Link>
            </div>
          </div>

          
        </div>



      
      </div>
      
        <div className="bg-gray-900 max-w-6xl mx-auto mt-[40px]  p-10 shadow-lg border border-gray-800">
            <h3 className="text-xl font-semibold text-center mb-2 text-gray-100">Growing Together</h3>
            <p className="text-center text-gray-400 mb-6">Our community impact across Africa</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-yellow-500"><CountUp end={5240} /></div>
                <div className="text-sm text-gray-400">Active Members</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-500"><CountUp end={850} suffix="+" /></div>
                <div className="text-sm text-gray-400">Discussions</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-500"><CountUp end={125} /></div>
                <div className="text-sm text-gray-400">Local Events</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-500"><CountUp end={28} /></div>
                <div className="text-sm text-gray-400">Countries</div>
              </div>
            </div>
          </div>
<ScrollToTop />
    </div>
  );
};

export default Community;
