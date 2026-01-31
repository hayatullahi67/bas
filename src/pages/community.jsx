import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
  const [search, setSearch] = React.useState('');

  React.useEffect(() => {
    const fetch = async () => {
      try {
        const all = await eventsService.getAllEvents();
        setEvents(all || []);
      } catch (err) {
        console.error('Error loading events:', err);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, []);

  const filtered = React.useMemo(() => {
    if (!search) return events;
    const s = search.trim().toLowerCase();
    return events.filter(e => {
      return (
        (e.eventName && e.eventName.toLowerCase().includes(s)) ||
        (e.organiser && e.organiser.toLowerCase().includes(s)) ||
        (e.tags && e.tags.join(' ').toLowerCase().includes(s)) ||
        (e.city && e.city.toLowerCase().includes(s))
      );
    });
  }, [events, search]);

  const navigate = useNavigate();

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

              <div className="mt-4 flex gap-3">
                <button onClick={() => { const el = document.getElementById('events'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }} className="px-5 py-3 bg-yellow-500 rounded font-bold">🔍 Explore Events</button>
                <Link to="/dashboard/upload-event" className="px-5 py-3 border border-yellow-500 text-yellow-500 rounded">➕ Submit an Event</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 mt-8">
        <div className="mb-6">
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search by event, organiser, city or tag"
            className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-gray-200"
          />
        </div>

        <div className="mb-4 text-sm text-gray-400">{loading ? 'Loading events…' : `${filtered.length} events`}</div>

        {loading ? (
          <div className="p-8 bg-gray-900 border border-gray-800 rounded text-center">
            <div className="w-10 h-10 border-2 border-yellow-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-gray-400">Loading events…</p>
          </div>
        ) : filtered.length === 0 ? (
          <div className="p-8 bg-gray-900 border border-gray-800 rounded text-center text-gray-400">No events found. Try a different search.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(e => (
              <div
                key={e.id}
                role="button"
                tabIndex={0}
                onKeyDown={(ev) => { if (ev.key === 'Enter') { if (e.registrationUrl) window.open(e.registrationUrl, '_blank'); else navigate(`/events/${e.id}`); } }}
                onClick={() => { if (e.registrationUrl) window.open(e.registrationUrl, '_blank'); else navigate(`/events/${e.id}`); }}
                className="cursor-pointer bg-gray-900 border border-gray-800  overflow-hidden"
              >
                {e.banner && <div className="h-40 overflow-hidden"><img src={e.banner} alt={e.eventName} className="w-full h-full object-cover" /></div>}
                <div className="p-4">
                  <div className="text-sm text-gray-400">{e.date} {e.time ? `• ${e.time}` : ''} {e.city ? `• ${e.city}` : ''}</div>
                  <h4 className="text-lg font-bold text-white mt-2">{e.eventName}</h4>
                  <p className="text-sm text-gray-400 mt-2 line-clamp-2">{e.venue || (e.format === 'virtual' ? 'Online' : '')}</p>

                  <div className="mt-4 flex items-center gap-3">
                    {e.registrationUrl && (
                      <a href={e.registrationUrl} target="_blank" rel="noreferrer" onClick={(ev) => ev.stopPropagation()} className="px-4 py-2 bg-yellow-500 text-black rounded font-bold">Register</a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="max-w-6xl mx-auto mt-12 px-6">
        <div className="bg-gray-900 border border-gray-800 overflow-hidden shadow-2xl ">
          {/* Join Conversation Section */}
          <div className="p-6 md:p-8 text-center border-b border-gray-800/50">
            <div className="inline-block mb-3 px-3 py-1 bg-yellow-500/10 border border-yellow-500/30 rounded-full">
              <span className="text-yellow-500 text-[10px] font-bold uppercase tracking-widest">Connect With Us</span>
            </div>
            <h4 className="text-2xl font-bold text-white mb-3">Join the conversation</h4>
            <p className="text-gray-400 max-w-xl mx-auto mb-6 text-sm">
              Join our Telegram channel or WhatsApp group to stay updated and connect with other members across Africa.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 mb-5">
              <a
                href=": https://t.me/+KirVlW8gMMtlNDI8"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold text-sm transition-all shadow-lg shadow-blue-600/10"
              >
                Telegram Channel
              </a>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-2.5 bg-green-600 hover:bg-green-700 text-white rounded-lg font-bold text-sm transition-all shadow-lg shadow-green-600/10"
              >
                WhatsApp Group
              </a>
            </div>
            <div className="text-gray-500 text-xs">
              Want an event featured? <Link to="/dashboard/upload-event" className="text-yellow-500 hover:underline">Submit it here</Link>.
            </div>
          </div>

          {/* Stats Section */}
          <div className="p-6 md:p-8 bg-black/20">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div className="space-y-1">
                <div className="text-2xl md:text-3xl font-black text-yellow-500"><CountUp end={5240} /></div>
                <div className="text-[10px] font-bold text-gray-500 uppercase tracking-tighter">Active Members</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl md:text-3xl font-black text-yellow-500"><CountUp end={850} suffix="+" /></div>
                <div className="text-[10px] font-bold text-gray-500 uppercase tracking-tighter">Discussions</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl md:text-3xl font-black text-yellow-500"><CountUp end={125} /></div>
                <div className="text-[10px] font-bold text-gray-500 uppercase tracking-tighter">Local Events</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl md:text-3xl font-black text-yellow-500"><CountUp end={28} /></div>
                <div className="text-[10px] font-bold text-gray-500 uppercase tracking-tighter">Countries</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ScrollToTop />
    </div>
  );
};

export default Community;
