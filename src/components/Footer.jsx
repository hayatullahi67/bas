import { Link } from 'react-router-dom';
import { Twitter, Send, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="https://customer-assets.emergentagent.com/job_orange-education/artifacts/o5w3l51g_baslogo.jpg" 
                alt="Bitcoin Africa Story" 
                className="h-10 w-10 rounded-full object-cover border-2 border-yellow-500"
              />
              <span className="text-lg font-bold text-white">
                Bitcoin <span className="text-yellow-500">Africa Story</span>
              </span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Driving Bitcoin adoption across Africa through education and empowerment. 
              Join us in building financial freedom for all.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-yellow-500 hover:text-black transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://t.me"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-yellow-500 hover:text-black transition-colors duration-200"
                aria-label="Telegram"
              >
                <Send size={18} />
              </a>
              <a
                href="mailto:hello@bitcoinafricastory.com"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-yellow-500 hover:text-black transition-colors duration-200"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-yellow-500 transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-yellow-500 transition-colors duration-200">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-400 hover:text-yellow-500 transition-colors duration-200">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-yellow-500 transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-400 text-sm mb-3">
              Get Bitcoin education tips delivered to your inbox.
            </p>
            <form className="space-y-2" onSubmit={(e) => {
              e.preventDefault();
              alert('Newsletter signup coming soon!');
            }}>
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:border-yellow-500"
                required
              />
              <button
                type="submit"
                className="w-full px-3 py-2 bg-yellow-500 text-black font-medium text-sm rounded-lg hover:bg-yellow-400 transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Bitcoin Africa Story. All rights reserved. Empowering Africa through Bitcoin education.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;