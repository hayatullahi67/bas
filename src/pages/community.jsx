import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ScrollToTop from '../components/ScrollToTop';
import CountUp from '../components/ui/CountUp';
import { eventsService } from '../services/eventsService';

const UpcomingEvent = ({ title, location, date, banner }) => (
  <div className="mb-6 bg-gray-900 border border-gray-800 hover:border-yellow-500 transition-all duration-300 group overflow-hidden">
    {banner && (
      <div className="h-48 overflow-hidden relative">
        <img
          src={banner}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
      </div>
    )}
    <div className="p-6">
      <div className="inline-block bg-yellow-500 text-black px-3 py-1 text-[10px] font-black uppercase tracking-widest mb-4">Upcoming Event</div>
      <h4 className="text-xl font-bold text-gray-100 group-hover:text-yellow-500 transition-colors mb-3 line-clamp-2 italic">{title}</h4>

      <div className="space-y-2 mt-4 pt-4 border-t border-gray-800/50">
        <div className="text-sm text-gray-400 flex items-center gap-3">
          <span className="w-5 h-5 flex items-center justify-center bg-yellow-500/10 text-yellow-500 rounded text-xs">📍</span>
          <span className="line-clamp-1">{location}</span>
        </div>
        <div className="text-sm text-gray-400 flex items-center gap-3">
          <span className="w-5 h-5 flex items-center justify-center bg-yellow-500/10 text-yellow-500 rounded text-xs">📅</span>
          <span>{date}</span>
        </div>
      </div>
    </div>
  </div>
);

const Community = () => {
  const [events, setEvents] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await eventsService.getUpcomingEvents(4);
        setEvents(data);
      } catch (error) {
        console.error("Error fetching community events:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  return (
    <div className="mt-[75px] pb-32">
      <section id="hero" className="relative flex items-center overflow-hidden">
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
                <span>Join </span> <br className="sm:hidden" /> <span>Our </span> <br className="sm:hidden" /> <span>Growing </span> <br className="" /> <span className="text-[#FAD604]">Community!</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
                Connect with fellow Africans learning and using Bitcoin. Share experiences, ask questions, and grow together.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-gray-900 p-8 shadow-lg border border-gray-800">
            <h2 className="text-2xl font-bold mb-2 text-gray-100">Join Our Communities</h2>
            <p className="text-gray-400 mb-6">Connect with our community on your favorite platforms.</p>

            <div className="flex gap-4">
              <a
                className="flex-1 inline-flex items-center justify-center gap-3 px-6 py-3 bg-yellow-500 text-black font-medium hover:bg-yellow-400 transition"
                href="#"
              >
                <span>Join Telegram</span>
              </a>
              <a
                className="flex-1 inline-flex items-center justify-center gap-3 px-6 py-3 bg-transparent border border-yellow-500 text-yellow-500 font-medium hover:bg-yellow-500/10 transition"
                href="#"
              >
                <span>Join WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gray-900 p-6 shadow-lg border border-gray-800">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold text-gray-100 flex items-center gap-3">
                <span className="w-2 h-8 bg-yellow-500 rounded-full"></span>
                Upcoming Events
              </h3>
            </div>

            <div className="max-h-[600px] overflow-y-auto pr-2 custom-scrollbar space-y-4">
              {loading ? (
                <div className="py-20 flex flex-col items-center justify-center text-center bg-gray-800/20 border border-gray-800 border-dashed rounded-2xl">
                  <div className="w-10 h-10 border-2 border-yellow-500 border-t-transparent rounded-full animate-spin mb-4"></div>
                  <p className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">Syncing with blockchain events...</p>
                </div>
              ) : events.length ? (
                <div className="grid grid-cols-1 gap-6">
                  {events.map((e) => (
                    <UpcomingEvent
                      key={e.id}
                      title={e.eventName}
                      location={`${e.venue}${e.address ? ` • ${e.address}` : ''}`}
                      date={`${e.date} @ ${e.time}`}
                      banner={e.banner}
                    />
                  ))}
                </div>
              ) : (
                <div className="py-20 text-center bg-gray-800/20 border border-gray-800 border-dashed rounded-2xl">
                  <p className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">No upcoming missions scheduled</p>
                </div>
              )}
            </div>


            <div className="text-center mt-8 pt-6 border-t border-gray-800">
              <Link to="#" className="inline-flex items-center gap-2 text-yellow-500 font-bold text-sm hover:text-yellow-400 transition-all uppercase tracking-widest">
                Full Event Calendar <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 max-w-6xl mx-auto mt-[40px] p-10 shadow-lg border border-gray-800">
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
