import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ProgramCard = () => {
//   const stats = [
//     { value: '250+', label: 'Registrations' },
//     { value: '50+', label: 'Alumni' },
//     { value: '15+', label: 'Career Launch' },
//     { value: '10+', label: 'Countries' },
//     { value: '150K', label: 'Sats Rewarded' },
//     { value: '30+', label: 'Educators' }
//   ];

  return (
 <div className="bg-black text-white py-20">
      <div className="container mx-auto px-6">
        {/* Main Content Grid */}
        <div className="flex flex-col lg:flex-row gap-[170px] items-start mb-20">
          {/* Left - Image */}
<<<<<<< HEAD
          <div className="max-sm:hidden md:relative flex-shrink-0">
=======
          <div className="hidden md:relative flex-shrink-0">
>>>>>>> 90b6020f646788a78030acbb88796a5efa2740d1
            <div className="rounded-[25px] overflow-hidden shadow-lg w-[367px] h-[412px]">
              <img 
                src="https://images.unsplash.com/photo-1540569014015-19a7be504e3a?w=600&h=700&fit=crop" 
                alt="Bitcoin educator presenting" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6 max-w-[620px]">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gray-900 border-2 border-gray-800 text-white px-4 py-2 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
              It Cost $0 To Study Bitcoin
            </div>

            {/* Heading */}
            <h2 className="text-[32px] md:text-[40px] font-bold leading-tight text-white">
              Begin Your Bitcoin Journey With Us!
            </h2>

            {/* Description Paragraphs */}
            <div className="space-y-4 text-gray-400 text-[15px]">
<<<<<<< HEAD
             <p className="leading-relaxed">
                **Master the fundamentals of sound money.** Our free educational program is designed to guide you through the core principles of Bitcoin—from its decentralized structure  and cryptographic basis to its role as a hedge against inflation. Learn how to securely acquire, store, and utilize the hardest money ever created.
              </p>
              <p className="leading-relaxed">
              **Go beyond theory with a global community.** Engage with seasoned Bitcoiners and developers in a supportive environment. Our program not only covers technical literacy (like running nodes and self-custody) but also fosters career development, helping you launch into the industry or simply become a more informed participant in the global digital economy.
              </p>
=======
              <p className="leading-relaxed">
                Ut Enim Ad Maliqua. Ut Enim Ad MLIt Enim Ad Maliqua. Ut Enim Ad Maliqua. Ut Enim Ad MLIt Enim Ad Maliqua. Ut Enim Ad MLIt Enim Ad Maliqua. Ut Enim Ad Maliqua. Ut Enim Ad MLIt Enim Ad Maliqua. Ut Enim Ad MLIt Enim Ad Maliqua. Ut Enim Ad MLIt
              </p>
              <p className="leading-relaxed">
                Nim Ad Maliqua. Ut Enim Ad MLIt Enim Ad Maliqua. Ut Enim Ad Maliqua. Ut EnIm Ad MLIt Enim Ad Maliqua. Ut ELE Enim Ad Maliqua. Ut Enim Ad MLIt Enim Ad Maliqua. U
              </p>
>>>>>>> 90b6020f646788a78030acbb88796a5efa2740d1
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-[14px] py-[10px] h-[50px] rounded-[40px] font-semibold text-[14px] transition-colors flex items-center gap-2">
                Join our Next Diploma Program
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="bg-gray-900 hover:bg-gray-800 text-white px-[14px] py-[10px] rounded-[40px] font-semibold text-[14px] border border-gray-800 transition-colors flex items-center gap-2">
                Join Our Bitcoin Meetups
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className=" rounded-3xl p-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {/* Stat 1 */}
            <div className="text-center bg-gray-900 px-[20px] py-[20px] rounded-[10px]">
              <div className="text-[48px] font-bold text-yellow-400 mb-1">250+</div>
              <div className="text-[11px] text-gray-400 uppercase tracking-wider font-medium">REGISTRATIONS</div>
            </div>

            {/* Stat 2 */}
            <div className="text-center bg-gray-900 px-[20px] py-[20px] rounded-[10px]">
              <div className="text-[48px] font-bold text-yellow-400 mb-1">50+</div>
              <div className="text-[11px] text-gray-400 uppercase tracking-wider font-medium">ALUMNI</div>
            </div>

            {/* Stat 3 */}
            <div className="text-center bg-gray-900 px-[20px] py-[20px] rounded-[10px]">
              <div className="text-[48px] font-bold text-yellow-400 mb-1">15+</div>
              <div className="text-[11px] text-gray-400 uppercase tracking-wider font-medium">CAREER LAUNCH</div>
              <div className="w-12 h-1 bg-blue-500 mx-auto mt-3"></div>
            </div>

            {/* Stat 4 */}
            <div className="text-center bg-gray-900 px-[20px] py-[20px] rounded-[10px]">
              <div className="text-[48px] font-bold text-yellow-400 mb-1">10+</div>
              <div className="text-[11px] text-gray-400 uppercase tracking-wider font-medium">COUNTRIES</div>
            </div>

            {/* Stat 5 */}
            <div className="text-center bg-gray-900 px-[20px] py-[20px] rounded-[10px]">
              <div className="text-[48px] font-bold text-yellow-400 mb-1">150K</div>
              <div className="text-[11px] text-gray-400 uppercase tracking-wider font-medium">SATS REWARDED</div>
            </div>

            {/* Stat 6 */}
            <div className="text-center bg-gray-900 px-[20px] py-[20px] rounded-[10px]">
              <div className="text-[48px] font-bold text-yellow-400 mb-1">30+</div>
              <div className="text-[11px] text-gray-400 uppercase tracking-wider font-medium">EDUCATORS</div>
            </div>
          </div>
        </div>
      </div>
    </div>)
};

export default ProgramCard;
