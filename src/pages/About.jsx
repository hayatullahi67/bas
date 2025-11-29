import { Calendar, Users, Target, Heart } from 'lucide-react';

const About = () => {
  const milestones = [
    { year: '2023', title: 'The Beginning', description: 'Started teaching Bitcoin to local communities in Nigeria' },
    { year: '2023', title: '100 Students', description: 'Reached our first 100 students across multiple cities' },
    { year: '2024', title: 'Expanding Reach', description: 'Extended education programs to Ghana, Kenya, and South Africa' },
    { year: '2024', title: '500+ Community', description: 'Built a thriving community of over 500 Bitcoin enthusiasts' },
    { year: '2025', title: 'Going Digital', description: 'Launched online courses to reach all of Africa' },
    { year: '2025', title: 'The Future', description: 'Continuing to empower millions across the continent' }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-900/30 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full">
            <span className="text-yellow-500 text-sm font-semibold">About Us</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            Empowering Africa Through <span className="text-yellow-500">Bitcoin</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Our journey began with a simple belief: everyone deserves access to financial freedom. 
            For the past 2 years, we've been making that belief a reality across Africa.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Our <span className="text-yellow-500">Story</span>
              </h2>
              <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                <p>
                  It all started with a question: Why do so many Africans struggle with financial access 
                  when solutions like Bitcoin exist? This question led me on a journey to understand Bitcoin 
                  deeply and share that knowledge with my community.
                </p>
                <p>
                  What began as small meetups with a handful of curious individuals has grown into a movement. 
                  Over the past two years, I've witnessed the transformation that happens when people truly 
                  understand Bitcoin—not just as an investment, but as a tool for financial sovereignty.
                </p>
                <p>
                  From Lagos to Nairobi, from Accra to Johannesburg, the message is the same: Bitcoin offers 
                  hope. It offers an alternative to currencies that lose value, to banking systems that exclude, 
                  and to financial controls that limit opportunity.
                </p>
                <p>
                  Today, we're not just teaching Bitcoin—we're building a community of empowered individuals 
                  who understand their financial power and are ready to take control of their economic futures.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <img
                src="assets/communities.jpg"
                alt="Community"
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-gray-900 border border-gray-800 rounded-xl">
                  <div className="text-3xl font-bold text-yellow-500 mb-2">2+</div>
                  <div className="text-gray-400">Years of Teaching</div>
                </div>
                <div className="p-6 bg-gray-900 border border-gray-800 rounded-xl">
                  <div className="text-3xl font-bold text-yellow-500 mb-2">500+</div>
                  <div className="text-gray-400">Lives Changed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent via-gray-900/30 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="p-10 bg-gray-900 border border-gray-800 rounded-2xl">
              <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mb-6">
                <Target className="text-yellow-500" size={32} />
              </div>
              <h2 className="text-3xl font-bold mb-4">
                Our <span className="text-yellow-500">Mission</span>
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                To provide accessible, comprehensive Bitcoin education to every African, empowering them 
                with the knowledge and tools needed to achieve financial sovereignty and build generational 
                wealth through sound money principles.
              </p>
            </div>

            {/* Vision */}
            <div className="p-10 bg-gray-900 border border-gray-800 rounded-2xl">
              <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mb-6">
                <Heart className="text-yellow-500" size={32} />
              </div>
              <h2 className="text-3xl font-bold mb-4">
                Our <span className="text-yellow-500">Vision</span>
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                An Africa where every individual has the knowledge, tools, and confidence to control their 
                financial future. A continent where Bitcoin adoption drives economic freedom, innovation, 
                and prosperity for all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-yellow-500">Journey</span>
            </h2>
            <p className="text-xl text-gray-400">Key milestones in our mission to spread Bitcoin education</p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-yellow-500/30" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-yellow-500 rounded-full border-4 border-black transform -translate-x-1/2" />

                  {/* Content */}
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 pl-16 md:pl-0' : 'md:pl-12 pl-16 md:pl-0'}`}>
                    <div className="p-6 bg-gray-900 border border-gray-800 rounded-xl hover:border-yellow-500 transition-colors duration-300">
                      <div className="flex items-center mb-3">
                        <Calendar className="text-yellow-500 mr-2" size={20} />
                        <span className="text-yellow-500 font-bold">{milestone.year}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                      <p className="text-gray-400">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-900/30 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-yellow-500">Values</span>
            </h2>
            <p className="text-xl text-gray-400">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-gray-900 border border-gray-800 rounded-xl text-center hover:border-yellow-500 transition-colors duration-300">
              <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-yellow-500" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Community First</h3>
              <p className="text-gray-400 leading-relaxed">
                We believe in the power of community. Together, we learn, grow, and build a better financial future.
              </p>
            </div>

            <div className="p-8 bg-gray-900 border border-gray-800 rounded-xl text-center hover:border-yellow-500 transition-colors duration-300">
              <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="text-yellow-500" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Education Excellence</h3>
              <p className="text-gray-400 leading-relaxed">
                We're committed to providing accurate, comprehensive, and accessible Bitcoin education for everyone.
              </p>
            </div>

            <div className="p-8 bg-gray-900 border border-gray-800 rounded-xl text-center hover:border-yellow-500 transition-colors duration-300">
              <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="text-yellow-500" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Empowerment</h3>
              <p className="text-gray-400 leading-relaxed">
                Our goal is to empower individuals with knowledge and tools to take control of their financial destiny.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border border-yellow-500/30 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Bitcoin Journey?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join our community of learners and take the first step towards financial freedom.
            </p>
            <a
              href="/blog"
              className="inline-block px-8 py-4 bg-yellow-500 text-black font-bold text-lg rounded-lg hover:bg-yellow-400 transition-all duration-200 hover:scale-105"
            >
              Start Learning Today
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;