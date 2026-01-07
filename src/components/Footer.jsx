import { Link } from 'react-router-dom';
import { Twitter, Facebook, Youtube } from 'lucide-react';



// --- 1. POPULAR POSTS MOCK DATA (Focus on Market/Tech) ---
const mockPopularPosts = [
  { 
    id: 1, 
    title: 'Bitcoin Price Plunges Below $90,000 as Hawkish Fed Rate Cut Kills Market Sentiment.', 
    author: 'SURBHI KHANNA',
    image: 'https://images.pexels.com/photos/7567442/pexels-photo-7567442.jpeg?auto=compress&cs=tinysrgb&w=200',
    link: '/post/bitcoin-slips-fed-cautions' 
  },
  { 
    id: 2, 
    title: 'Fed Rate Cut Exposes Bitcoin\'s Inflation Hedge Problem, Analysts Weigh In on Identity Crisis.', 
    author: 'CHARLES LLOYD BOVAIRD II',
    image: 'https://images.unsplash.com/photo-1590086782792-42dd2350140d?auto=format&fit=crop&w=200&q=60',
    link: '/post/bitcoin-all-time-high' 
  },
  { 
    id: 3, 
    title: 'Lightning Labs Integrates Spark to Accelerate Bitcoin Rewards and Self-Custody.', 
    author: 'JOSHUA DE VOS',
    image: 'https://images.pexels.com/photos/6770774/pexels-photo-6770774.jpeg?auto=compress&cs=tinysrgb&w=200',
    link: '/post/lightning-network-spark' 
  },
];


// --- 2. TOP STORIES MOCK DATA (Focus on Global/Institutional) ---
const mockTopStories = [
  { 
    id: 4, 
    title: 'Crypto Adoption in Africa Is Exploding: Can Mobile-First Solutions Lead the Charge?', 
    author: 'LYN ALDEN',
    image: 'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?auto=format&fit=crop&w=200&q=60',
    link: '/post/africa-financial-solutions' 
  },
  { 
    id: 5, 
    title: 'Bitwise\'s $1.25B Index Fund Uplists to NYSE Arca, Signaling Massive Institutional Shift.', 
    author: 'ALEXANDER DIMITRI',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=200&q=60',
    link: '/post/bitwise-etf-uplisting' 
  },
  { 
    id: 6, 
    title: 'Suspected Private Key Leak Leads to $1.1 Million Loss Across Multiple EVM Chains.', 
    author: 'ZACH XBT',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=200&q=60',
    link: '/post/private-key-leak' 
  },
];


// Mock data for categories (Unchanged)
// const mockCategories = [
//   { name: 'NEWS', link: '/category/news' },
//   { name: 'BITCOIN', link: '/category/bitcoin' },
//   { name: 'GUIDES', link: '/category/guides' },
//   { name: 'TECHNICAL', link: '/category/technical' },
//   { name: 'ARTICLES', link: '/category/articles' },
//   { name: 'BUSINESS', link: '/category/business' },
//   { name: 'AFRICA BITCOIN STORIES', link: '/category/africa-bitcoin-stories' },
// ];
  
// Mock data for categories with post counts
const mockCategories = [
  { name: 'BUSINESS', link: '/category/business', count: 4267 },
  { name: 'CULTURE', link: '/category/culture', count: 3558 },
  { name: 'MARKETS', link: '/category/markets', count: 2295 },
  { name: 'TECHNICAL', link: '/category/technical', count: 1321 },
  { name: 'NEWS', link: '/category/news', count: 726 },
  { name: 'INDUSTRY EVENTS', link: '/category/industry-events', count: 364 },
  { name: 'PRESS RELEASES', link: '/category/press-releases', count: 285 },
  { name: 'LEGAL', link: '/category/legal', count: 201 },
]


// Reusable Post Card component (Unchanged)
const PostCard = ({ title, author, image, link }) => (
  <Link to={link} className="flex items-start space-x-3 group">
    {/* Post Image/Thumbnail */}
    <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 overflow-hidden rounded-md border border-gray-700">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover group-hover:opacity-75 transition-opacity duration-200"
      />
    </div>
    {/* Post Content */}
    <div className="flex-1">
      <p className="text-gray-200 text-sm leading-snug group-hover:text-yellow-500 transition-colors duration-200">
        {title}
      </p>
      <p className="text-gray-500 text-xs mt-1">
        BY <span className="font-medium">{author}</span>
      </p>
    </div>
  </Link>
);


const Footer = () => {
  
  return (
    <footer className="bg-black border-t-8 border-yellow-500">
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* === TOP SECTION: POSTS AND CATEGORIES GRID === */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          
          {/* 1. Popular Posts Column */}
          <div className="space-y-6">
            <h2 className="text-lg font-bold text-yellow-500 uppercase tracking-wider">Popular Posts</h2>
            <div className="space-y-4">
              {mockPopularPosts.map((post) => (
                <PostCard 
                  key={post.id} 
                  title={post.title} 
                  author={post.author} 
                  image={post.image} 
                  link={post.link} 
                />
              ))}
            </div>
          </div>

          {/* 2. Top Stories Column */}
          <div className="space-y-6">
            <h2 className="text-lg font-bold text-yellow-500 uppercase tracking-wider">Top Stories</h2>
            <div className="space-y-4">
              {mockTopStories.map((post) => (
                <PostCard 
                  key={post.id + 'ts'} 
                  title={post.title} 
                  author={post.author} 
                  image={post.image} 
                  link={post.link} 
                />
              ))}
            </div>
          </div>

          {/* 3. Categories Column */}
          <div className="space-y-6">
            <h2 className="text-lg font-bold text-yellow-500 uppercase tracking-wider">Categories</h2>
            <ul className="space-y-2">
              {/* {mockCategories.map((category) => (
                <li key={category.name}>
                  <Link 
                    to={category.link} 
                    className="text-gray-300 text-base uppercase hover:text-yellow-500 transition-colors duration-200"
                  >
                    {category.name}
                  </Link>
                </li>
              ))} */}
              {mockCategories.map((category, index) => (
            <li 
              key={category.name} 
              className="flex items-center justify-between py-1 "
            >
              <span className="text-white text-base font-medium uppercase hover:text-yellow-500 cursor-pointer transition-colors duration-200">
                {category.name}
              </span>
              <span className="text-white ">
                {category.count}
              </span>
            </li>
          ))}
            </ul>
          </div>
        </div>
        
        {/* === BOTTOM SECTION: LOGO, ABOUT, FOLLOW US (3-Column Grid) === */}
        <div className="mt-[130px] grid grid-cols-1 md:grid-cols-3 gap-[50px] items-start">
          
          {/* 1. Logo/Brand Column */}
          <div className="flex justify-start">
            <Link to="/">
              <img 
                src="/assets/BASlogo.png" 
                alt="Bitcoin Africa Story Logo" 
                className="w-[100%] md:w-[200px] " 
              />
            </Link>
          </div>

          {/* 2. About Us Column */}
          <div className="text-center md:text-left md:mt-[30px]">
            <div>
              <h3 className="text-lg font-bold text-white mb-2 uppercase">About Us</h3>
            <p className="text-gray-400 text-sm max-w-sm mx-auto md:mx-0">
              Bitcoin Africa Story is a trusted source of news, insights, and narratives focused on Bitcoin adoption, innovation, and impact around Bitcoin adoption across the African continent.
            </p>
            </div>
            
          </div>

          {/* 3. Follow Us Column */}
          <div className="text-center md:text-left md:mt-[20px]">
            <h3 className="text-lg font-bold text-white mb-2 uppercase">Follow Us</h3>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-500 transition-colors duration-200"
              >
                X (Twitter)
              </a>
              <span className="text-gray-600">·</span>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-500 transition-colors duration-200"
              >
                YouTube
              </a>
              <span className="text-gray-600">·</span>
              <a
                href="https://t.me"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-500 transition-colors duration-200"
              >
                Telegram
              </a>
              <span className="text-gray-600">·</span>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-500 transition-colors duration-200"
              >
                LinkedIn
              </a>
              <span className="text-gray-600">·</span>
              <a
                href="https://nostr.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-500 transition-colors duration-200"
              >
                Nostr
              </a>
            </div>

            <div className="mt-8 pt-6 text-center md:text-left   text-sm ">
              <ul className="flex md:flex-wrap d space-x-4 text-white">
                  <li><Link to="/advertise" className="hover:text-yellow-500 uppercase">ADVERTISE</Link></li>
                  <li><Link to="/terms" className="hover:text-yellow-500 uppercase">TERM OF USE</Link></li>
                  <li><Link to="/privacy" className="hover:text-yellow-500 uppercase">PRIVACY POLICY</Link></li>
              </ul>
              <p className="mt-2 text-xs text-gray-500">
                © Bitcoin Africa Story, 2025. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;