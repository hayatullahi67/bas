import { Mail, MapPin, Send, Twitter, MessageCircle } from 'lucide-react';
import { ContactForm } from '../components/sections';

const Contact = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-900/30 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full">
            <span className="text-yellow-500 text-sm font-semibold">Get In Touch</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            Let's <span className="text-yellow-500">Connect</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Have questions about Bitcoin? Want to collaborate? Or just want to say hello? 
            We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Send Us a <span className="text-yellow-500">Message</span>
              </h2>
              <ContactForm />
            </div>

            {/* Contact Info & Socials */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Other Ways to <span className="text-yellow-500">Reach Us</span>
              </h2>

              {/* Contact Cards */}
              <div className="space-y-6 mb-12">
                <div className="p-6 bg-gray-900 border border-gray-800 rounded-xl hover:border-yellow-500 transition-colors duration-300">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail className="text-yellow-500" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Email</h3>
                      <a 
                        href="mailto:hello@bitcoinafricastory.com" 
                        className="text-gray-400 hover:text-yellow-500 transition-colors duration-200"
                      >
                        hello@bitcoinafricastory.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-gray-900 border border-gray-800 rounded-xl hover:border-yellow-500 transition-colors duration-300">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin className="text-yellow-500" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Location</h3>
                      <p className="text-gray-400">
                        Operating across Africa<br />
                        Based in Nigeria
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Connect on Social Media</h3>
                <div className="space-y-4">
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-gray-900 border border-gray-800 rounded-xl hover:border-yellow-500 hover:bg-gray-800 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center mr-4">
                      <Twitter className="text-yellow-500" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold group-hover:text-yellow-500 transition-colors duration-200">Twitter / X</div>
                      <div className="text-sm text-gray-400">Follow for daily Bitcoin insights</div>
                    </div>
                  </a>

                  <a
                    href="https://t.me"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-gray-900 border border-gray-800 rounded-xl hover:border-yellow-500 hover:bg-gray-800 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center mr-4">
                      <Send className="text-yellow-500" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold group-hover:text-yellow-500 transition-colors duration-200">Telegram</div>
                      <div className="text-sm text-gray-400">Join our community chat</div>
                    </div>
                  </a>

                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      alert('Nostr connection coming soon!');
                    }}
                    className="flex items-center p-4 bg-gray-900 border border-gray-800 rounded-xl hover:border-yellow-500 hover:bg-gray-800 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center mr-4">
                      <MessageCircle className="text-yellow-500" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold group-hover:text-yellow-500 transition-colors duration-200">Nostr</div>
                      <div className="text-sm text-gray-400">Connect on the decentralized protocol</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Response Time Notice */}
              <div className="mt-8 p-6 bg-yellow-500/10 border border-yellow-500/30 rounded-xl">
                <p className="text-gray-300 text-sm">
                  <strong className="text-yellow-500">Response Time:</strong> We typically respond within 24-48 hours. 
                  For urgent matters, reach out on Twitter or Telegram for faster responses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-900/30 to-transparent">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border border-yellow-500/30 rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for exclusive Bitcoin education content and community updates.
            </p>
            <form 
              className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
              onSubmit={(e) => {
                e.preventDefault();
                alert('Newsletter signup feature coming soon!');
              }}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-500"
                required
              />
              <button
                type="submit"
                className="px-8 py-4 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-400 transition-colors duration-200 hover:scale-105"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;