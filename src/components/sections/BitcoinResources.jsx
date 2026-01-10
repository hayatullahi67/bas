import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function BitcoinResources() {
  // const resources = [
  //   { id: 1, title: 'BITCOIN WHITEPAPER', subtitle: 'Bitcoin whitepaper and history', imageSrc: 'https://images.unsplash.com/photo-1542228262-6c3d0a1f6b9f?w=400&h=400&fit=crop', imageAlt: 'whitepaper' },
  //   { id: 2, title: 'MEMPOOL SPACE', subtitle: 'Realtime mempool visualizer', imageSrc: 'https://images.unsplash.com/photo-1542228262-6c3d0a1f6b9f?w=400&h=400&fit=crop', imageAlt: 'mempool' },
  //   { id: 3, title: 'TIMECHAIN CALENDAR', subtitle: 'Events & important dates', imageSrc: 'https://images.unsplash.com/photo-1542228262-6c3d0a1f6b9f?w=400&h=400&fit=crop', imageAlt: 'calendar' },
  //   { id: 4, title: 'CYBERFORT', subtitle: 'Security tools & best practices', imageSrc: 'https://images.unsplash.com/photo-1542228262-6c3d0a1f6b9f?w=400&h=400&fit=crop', imageAlt: 'cyberfort' },
  //   { id: 5, title: 'AFRICAN BITCOIN MAP', subtitle: 'Regional initiatives & resources', imageSrc: 'https://images.unsplash.com/photo-1542228262-6c3d0a1f6b9f?w=400&h=400&fit=crop', imageAlt: 'map' },
  //   { id: 6, title: 'CITRUSRATES', subtitle: 'Analytics & on-chain stats', imageSrc: 'https://images.unsplash.com/photo-1542228262-6c3d0a1f6b9f?w=400&h=400&fit=crop', imageAlt: 'citrusrate' },
  //   { id: 7, title: 'GEYSER FUND', subtitle: 'Funding & grants for builders', imageSrc: 'https://images.unsplash.com/photo-1542228262-6c3d0a1f6b9f?w=400&h=400&fit=crop', imageAlt: 'geyser' },
  //   { id: 8, title: 'TANDO', subtitle: 'Community projects & tools', imageSrc: 'https://images.unsplash.com/photo-1542228262-6c3d0a1f6b9f?w=400&h=400&fit=crop', imageAlt: 'tando' },
  // ];

  const resources = [
    { id: 1, title: 'BITCOIN WHITEPAPER', subtitle: 'Bitcoin whitepaper and history', imageSrc: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop', imageAlt: 'whitepaper' },
    { id: 2, title: 'MEMPOOL SPACE', subtitle: 'Realtime mempool visualizer', imageSrc: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop', imageAlt: 'mempool' },
    { id: 3, title: 'TIMECHAIN CALENDAR', subtitle: 'Events & important dates', imageSrc: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=400&h=300&fit=crop', imageAlt: 'calendar' },
    { id: 4, title: 'CYBERFORT', subtitle: 'Security tools & best practices', imageSrc: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop', imageAlt: 'cyberfort' },
    { id: 5, title: 'AFRICAN BITCOIN MAP', subtitle: 'Regional initiatives & resources', imageSrc: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=400&h=300&fit=crop', imageAlt: 'map' },
    { id: 6, title: 'CITRUSRATES', subtitle: 'Analytics & on-chain stats', imageSrc: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop', imageAlt: 'citrusrate' },
    { id: 7, title: 'GEYSER FUND', subtitle: 'Funding & grants for builders', imageSrc: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=300&fit=crop', imageAlt: 'geyser' },
    { id: 8, title: 'TANDO', subtitle: 'Community projects & tools', imageSrc: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop', imageAlt: 'tando' },
  ];

  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-6">

        <div className="mb-6">
          <div className="inline-block bg-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded-sm">BITCOIN RESOURCES</div>
        </div>

        <div className="mb-6 max-w-3xl text-gray-300 text-sm">
          <p>
            A curated selection of Bitcoin resources — whitepapers, tools, maps and community projects to help you explore further.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((r) => (
            <article
              key={r.id}
              className="group relative flex flex-col bg-[#0A0A0A] border border-white/5 hover:border-yellow-500/50 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative aspect-video overflow-hidden bg-yellow-100/5">
                {r.imageSrc ? (
                  <img
                    src={r.imageSrc}
                    alt={r.imageAlt}
                    className="w-full h-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-100"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-yellow-900/20">
                    <span className="text-xs font-bold text-center text-yellow-500">{r.imageAlt.toUpperCase()}</span>
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col flex-grow">
                <h4 className="text-lg font-bold mb-2 line-clamp-2 leading-tight group-hover:text-yellow-500 transition-colors uppercase text-white">
                  {r.title}
                </h4>
                <p className="text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed">
                  {r.subtitle}
                </p>

                {/* Spacer to push button to bottom */}
                <div className="mt-auto pt-4 border-t border-white/5">
                  <button className="flex items-center gap-2 text-xs font-bold text-yellow-500 hover:text-white transition-colors group/btn">
                    ACCESS RESOURCE
                    <ArrowUpRight className="w-3 h-3 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
