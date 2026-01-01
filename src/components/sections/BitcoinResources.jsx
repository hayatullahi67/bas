import React from 'react';

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

  const renderIconPlaceholder = (imageSrc, alt) => {
    // Consistent visual block for all cards (rounded square with yellow border/background)
    return (
      <div className={`w-24 h-24 rounded-lg overflow-hidden bg-yellow-100 border-4 border-yellow-300 flex items-center justify-center`}> 
        {imageSrc ? (
          <img src={imageSrc} alt={alt} className="w-full h-full object-cover" />
        ) : (
          <span className="text-xs font-bold text-center text-yellow-700">{alt.toUpperCase()}</span>
        )}
      </div>
    );
  };

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((r) => (
            <article key={r.id} className="fle flex-co w-[250px] items-start gap-3">
              <div className={`w-[250px] h-[166px] rounded-lg overflow-hidden bg-yellow-100  flex items-center justify-center`}>
                {r.imageSrc ? (
                  <img src={r.imageSrc} alt={r.imageAlt} className="w-full h-full object-cover" loading="lazy" />
                ) : (
                  <span className="text-xs font-bold text-center text-yellow-700">{r.imageAlt.toUpperCase()}</span>
                )}
              </div>

              <div>
                <h4 className="text-sm font-semibold text-white">{r.title}</h4>
                <p className="text-xs text-gray-400 mt-1">{r.subtitle}</p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
