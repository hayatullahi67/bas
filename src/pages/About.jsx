import { Calendar, Users, Target, Heart } from 'lucide-react';

const About = () => {
  const milestones = [
    { year: '2024', title: 'The Beginning', description: 'Started teaching Bitcoin to local communities in Nigeria.' },
    { year: '2024', title: 'First 100 Students', description: 'Reached our first 100 students across multiple cities' },
    { year: '2024', title: 'Growing Across Africa', description: 'Extended education programs to Ghana, Kenya, and South Africa' },
    { year: '2025', title: ' 300+ Community Members', description: 'Built a thriving network of students, learners, volunteers, and educators across Africa.' },
    { year: '2025', title: '6 Online Bitcoin Diplomas', description: 'Launched online Bitcoin learning programs to make education accessible to every African, anywhere.' },
    { year: '2025', title: '10+ Bitcoin Events', description: 'Hosted impactful events — from school sessions to classroom workshops, church outreach, youth hangouts, and community meetups.' },
    { year: '2025', title: 'Building Circular Economies', description: 'Launched initiatives like Bitcoin Ikorodu and continued scaling real Bitcoin adoption across African communities.' }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      {/* <section className="py-20 px-6 bg-gradient-to-b from-gray-900/30 to-transparent">
        <div className="max-w-4xl mx-auto ">
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
      </section> */}

      <section >
        <div  style={{
          backgroundImage: "linear-gradient(to top right, transparent 0%, rgba(0,0,0,0.9) 100%), linear-gradient(to top left, transparent 0%, rgba(0,0,0,0.9) 100%), linear-gradient(to bottom right, transparent 0%, rgba(0,0,0,0.9) 100%), linear-gradient(to bottom left, transparent 0%, rgba(0,0,0,0.9) 100%), url('/assets/aboutus.png')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }} 
        className='pt-[100px] relative min-h-[600px] md:min-h-[700px]'
        >
          
          <div className='w-[90%] mx-auto relative z-10 px-4 md:px-0'>
            <div className='bg-[#FFD70061] text-[white] w-full max-w-[300px] md:w-[300px] h-[44px] rounded-full py-[10px] px-[10px] mx-auto md:mx-0'>
              <h5 className='text-sm md:text-base'>2+ Years of Proof-of-Quality-Works</h5>
            </div>
            <div className='mt-4'>
              <h1 className='text-3xl md:text-5xl lg:text-6xl font-black'>Empowering <br /> Africa <br /> Through <br /> <span className='text-[#FAD604]' >Bitcoin</span></h1>
            </div>
            <div className='mt-4'>
              <p className='w-full md:w-[500px] text-base md:text-lg'>
                Our journey began with a simple belief: everyone deserves access to financial freedom.
                 We've been making that belief a reality across Africa.
              </p>
            </div>

            <div>
              <div className='flex flex-col md:flex-row gap-[10px] md:gap-[20px] mt-[30px] pb-[50px] items-center md:items-start'>
                <div className='w-[150px] md:w-[200px] h-[60px] md:h-[80px] bg-[#FAD604] flex items-center justify-center text-white rounded'> 
                  <div>
                    <p className='text-[black] text-[20px] md:text-[30px]'>Donate</p>
                  </div>
                </div>

                 <div className='w-[150px] md:w-[200px] h-[60px] md:h-[80px] flex items-center justify-center text-white border border-[2px] rounded'> 
                  <div>
                    <p className='text-[white] text-[20px] md:text-[30px]'>contact us</p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
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
                <h5>From One Question to a Continental Movement</h5>
                 
                 <h5>Bitcoin Africa Story started with a question:</h5>
                   <p>“Why are so many Africans still excluded from financial opportunities when Bitcoin exists?”</p>
                <p>
                  That question sparked a journey — from small, informal meetups in Nigeria to a growing pan-African network of learners, merchants, educators, youths, and creators discovering Bitcoin together.
                </p>
                <p>
                  Through collaboration with Bitcoin initiatives across the continent — from Ghana to Kenya, Uganda to South Africa, and the rest of Africa — we’ve seen the impact firsthand:
When Africans understand Bitcoin, everything changes.
                </p>
                <p>
                  Today, Bitcoin Africa Story stands at the intersection of education, community empowerment, storytelling, and circular economy building.
We’re helping people not only learn Bitcoin, but use it in their daily lives.
                </p>
               
              </div>
            </div>
            
            <div className="space-y-6">
              <img
                src="assets/communities.jpg"
                alt="Community"
                className="w-full shadow-2xl"
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
               Accelerating Bitcoin adoption in Africa by educating communities, empowering youth, supporting grassroots initiatives, building local Bitcoin networks, and sharing African Bitcoin stories — making Bitcoin practical, simple, and life-changing for everyday Africans.

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
                To build a financially empowered Africa where individuals, families, and communities understand Bitcoin, use Bitcoin, and benefit from its freedom, transparency, and opportunity.
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
            <p className="text-xl text-gray-400">Milestones on the Road to Africa’s Bitcoin Future</p>
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
               Bitcoin adoption grows from the grassroots — through people, not institutions.

              </p>
            </div>

            <div className="p-8 bg-gray-900 border border-gray-800 rounded-xl text-center hover:border-yellow-500 transition-colors duration-300">
              <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="text-yellow-500" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Education Excellence</h3>
              <p className="text-gray-400 leading-relaxed">
               We prioritize accuracy, clarity, and accessibility in every lesson and resource.
              </p>
            </div>

            <div className="p-8 bg-gray-900 border border-gray-800 rounded-xl text-center hover:border-yellow-500 transition-colors duration-300">
              <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="text-yellow-500" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Empowerment</h3>
              <p className="text-gray-400 leading-relaxed">
                We equip people with tools for independence, not dependency.

              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
  <div className="max-w-4xl mx-auto">
    {/* Kept your gradient background and border style */}
    <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border border-yellow-500/30 rounded-2xl p-8 md:p-12">
      
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
        Join The Movement
      </h2>

      <div className="space-y-6">
        <p className="text-lg text-gray-300">
          Whether you're a beginner, a student, a merchant, a builder, or a passionate Bitcoiner:
        </p>

        <p className="text-xl font-bold text-white">
          You are welcome here.
        </p>

        <p className="text-lg text-gray-300 leading-relaxed">
          Start learning, contribute to circular economies, or support our work as we continue 
          empowering communities — one person, one story, one sats transaction at a time.
        </p>

        {/* Link List Section */}
        <div className="flex flex-col space-y-4 pt-4">
          <a href="/journey" className="flex items-center gap-3 text-white font-bold text-lg hover:text-yellow-500 transition-colors group">
            <span className="group-hover:translate-x-1 transition-transform">👉</span> 
            Start Your Bitcoin Journey Today
          </a>
          
          <a href="/support" className="flex items-center gap-3 text-white font-bold text-lg hover:text-yellow-500 transition-colors group">
            <span className="group-hover:translate-x-1 transition-transform">👉</span> 
            Support Our Work
          </a>
          
          <a href="/community" className="flex items-center gap-3 text-white font-bold text-lg hover:text-yellow-500 transition-colors group">
            <span className="group-hover:translate-x-1 transition-transform">👉</span> 
            Join the Community
          </a>
        </div>
      </div>

    </div>
  </div>
</section>
    </div>
  );
};

export default About;