// import { Link } from 'react-router-dom';
// import { Twitter, Send, Mail } from 'lucide-react';

// const Footer = () => {
//   return (
//     <footer className="bg-black border-t border-gray-800">
//       <div className="max-w-7xl mx-auto px-6 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           {/* Brand */}
//           <div className="md:col-span-2">
//             <div className="flex items-center space-x-3 mb-4">
//               <img 
//                 src="https://customer-assets.emergentagent.com/job_orange-education/artifacts/o5w3l51g_baslogo.jpg" 
//                 alt="Bitcoin Africa Story" 
//                 className="h-10 w-10 rounded-full object-cover border-2 border-yellow-500"
//               />
//               <span className="text-lg font-bold text-white">
//                 Bitcoin <span className="text-yellow-500">Africa Story</span>
//               </span>
//             </div>
//             <p className="text-gray-400 mb-4 max-w-md">
//               Driving Bitcoin adoption across Africa through education and empowerment. 
//               Join us in building financial freedom for all.
//             </p>
//             {/* Social Links */}
//             <div className="flex space-x-4">
//               <a
//                 href="https://twitter.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-yellow-500 hover:text-black transition-colors duration-200"
//                 aria-label="Twitter"
//               >
//                 <Twitter size={18} />
//               </a>
//               <a
//                 href="https://t.me"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-yellow-500 hover:text-black transition-colors duration-200"
//                 aria-label="Telegram"
//               >
//                 <Send size={18} />
//               </a>
//               <a
//                 href="mailto:hello@bitcoinafricastory.com"
//                 className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-yellow-500 hover:text-black transition-colors duration-200"
//                 aria-label="Email"
//               >
//                 <Mail size={18} />
//               </a>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-white font-semibold mb-4">Quick Links</h3>
//             <ul className="space-y-2">
//               <li>
//                 <Link to="/about" className="text-gray-400 hover:text-yellow-500 transition-colors duration-200">
//                   About Us
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/blog" className="text-gray-400 hover:text-yellow-500 transition-colors duration-200">
//                   Blog
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/resources" className="text-gray-400 hover:text-yellow-500 transition-colors duration-200">
//                   Resources
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/contact" className="text-gray-400 hover:text-yellow-500 transition-colors duration-200">
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Newsletter */}
//           <div>
//             <h3 className="text-white font-semibold mb-4">Stay Updated</h3>
//             <p className="text-gray-400 text-sm mb-3">
//               Get Bitcoin education tips delivered to your inbox.
//             </p>
//             <form className="space-y-2" onSubmit={(e) => {
//               e.preventDefault();
//               alert('Newsletter signup coming soon!');
//             }}>
//               <input
//                 type="email"
//                 placeholder="Your email"
//                 className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:border-yellow-500"
//                 required
//               />
//               <button
//                 type="submit"
//                 className="w-full px-3 py-2 bg-yellow-500 text-black font-medium text-sm rounded-lg hover:bg-yellow-400 transition-colors duration-200"
//               >
//                 Subscribe
//               </button>
//             </form>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="border-t border-gray-800 mt-8 pt-6 text-center">
//           <p className="text-gray-500 text-sm">
//             © {new Date().getFullYear()} Bitcoin Africa Story. All rights reserved. Empowering Africa through Bitcoin education.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;




// import { Link } from 'react-router-dom';
// import { Twitter, Facebook, Youtube } from 'lucide-react';

// // --- Mock Data for Structure and Firebase Integration Example ---

// // Mock data for posts, structured to simulate what you'd fetch from a Firebase Firestore collection
// const mockPosts = [
//   { 
//     id: 1, 
//     title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 
//     author: 'LYN ALDEN', 
//     image: 'https://customer-assets.emergentagent.com/job_orange-education/artifacts/o5w3l51g_baslogo.jpg', 
//     link: '/post/lorem-ipsum-1' 
//   },
//   { 
//     id: 2, 
//     title: 'Sed do eiusmod tempor incididunt ut labore et dolore magna.', 
//     author: 'LYN ALDEN', 
//     image: 'https://customer-assets.emergentagent.com/job_orange-education/artifacts/o5w3l51g_baslogo.jpg', 
//     link: '/post/sed-do-eiusmod-2' 
//   },
//   { 
//     id: 3, 
//     title: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.', 
//     author: 'LYN ALDEN', 
//     image: 'https://customer-assets.emergentagent.com/job_orange-education/artifacts/o5w3l51g_baslogo.jpg', 
//     link: '/post/ut-enim-ad-minim-3' 
//   },
// ];

// // Mock data for categories, structured as a simple array you'd map over
// const mockCategories = [
//   { name: 'NEWS', link: '/category/news' },
//   { name: 'BITCOIN', link: '/category/bitcoin' },
//   { name: 'GUIDES', link: '/category/guides' },
//   { name: 'TECHNICAL', link: '/category/technical' },
//   { name: 'ARTICLES', link: '/category/articles' },
//   { name: 'BUSINESS', link: '/category/business' },
//   { name: 'AFRICA BITCOIN STORIES', link: '/category/africa-bitcoin-stories' },
// ];

// // Reusable Post Card component for Popular and Top Stories sections
// const PostCard = ({ title, author, image, link }) => (
//     <Link to={link} className="flex items-start space-x-3 group">
//       {/* Post Image/Thumbnail */}
//       <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 overflow-hidden rounded-md border border-gray-700">
//         {/* Placeholder image that will be replaced by fetched post image */}
//         <img 
//           src={image} 
//           alt={title} 
//           className="w-full h-full object-cover group-hover:opacity-75 transition-opacity duration-200"
//         />
//       </div>
//       {/* Post Content */}
//       <div className="flex-1">
//         <p className="text-gray-200 text-sm leading-snug group-hover:text-yellow-500 transition-colors duration-200">
//           {title}
//         </p>
//         <p className="text-gray-500 text-xs mt-1">
//           BY <span className="font-medium">{author}</span>
//         </p>
//       </div>
//     </Link>
// );


// const Footer = () => {
//   // In a real Firebase setup, you would fetch the data here (e.g., using useEffect and useState)
//   const popularPosts = mockPosts.slice(0, 3); // Example of selecting the first 3
//   const topStories = mockPosts.slice(0, 3);   // Example, could be a separate query

//   return (
//     // Base color is black with a subtle border for separation
//     <footer className="bg-black border-t-8 border-yellow-500">
//       <div className="max-w-7xl mx-auto px-6 py-12">
        
//         {/* === MAIN CONTENT: POSTS AND CATEGORIES GRID === */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          
//           {/* 1. Popular Posts Column */}
//           <div className="space-y-6">
//             <h2 className="text-lg font-bold text-yellow-500 uppercase tracking-wider">Popular Posts</h2>
//             <div className="space-y-4">
//               {popularPosts.map((post) => (
//                 // This is where you would map the data from your Firebase query for Popular Posts
//                 <PostCard 
//                   key={post.id} 
//                   title={post.title} 
//                   author={post.author} 
//                   image={post.image} 
//                   link={post.link} 
//                 />
//               ))}
//             </div>
//           </div>

//           {/* 2. Top Stories Column */}
//           <div className="space-y-6">
//             <h2 className="text-lg font-bold text-yellow-500 uppercase tracking-wider">Top Stories</h2>
//             <div className="space-y-4">
//               {topStories.map((post) => (
//                 // This is where you would map the data from your Firebase query for Top Stories
//                 <PostCard 
//                   key={post.id + 'ts'} 
//                   title={post.title} 
//                   author={post.author} 
//                   image={post.image} 
//                   link={post.link} 
//                 />
//               ))}
//             </div>
//           </div>

//           {/* 3. Categories Column */}
//           <div className="space-y-6">
//             <h2 className="text-lg font-bold text-yellow-500 uppercase tracking-wider">Categories</h2>
//             <ul className="space-y-2">
//               {mockCategories.map((category) => (
//                 // This is where you would map the data from your Firebase query for Categories
//                 <li key={category.name}>
//                   <Link 
//                     to={category.link} 
//                     className="text-gray-300 text-base uppercase hover:text-yellow-500 transition-colors duration-200"
//                   >
//                     {category.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* --- Separator --- */}
//         <hr className="my-10 border-gray-800" />
        
//         {/* === BOTTOM ROW: LOGO, ABOUT, FOLLOW US === */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
          
//           {/* Logo and About Us Text (2 columns on medium screens) */}
//           <div className="md:col-span-2 space-y-4">
//             {/* Logo - Maintained as an image */}
//             <Link to="/" className="inline-block">
//               <img 
//                 src="https://customer-assets.emergentagent.com/job_orange-education/artifacts/o5w3l51g_baslogo.jpg" 
//                 alt="Bitcoin Africa Story Logo" 
//                 className="h-10 w-auto" 
//               />
//             </Link>
            
//             {/* About Us Text */}
//             <div className="space-y-1">
//                 <h3 className="text-sm font-semibold text-gray-100 uppercase">About Us</h3>
//                 <p className="text-gray-400 text-sm max-w-lg">
//                   BITCOIN AFRICA STORY WAS INITIATED WITH SOLID PROOF-OF-WORK. Bitcoin Africa Story is dedicated to driving Bitcoin adoption across the continent. Sed do eiusmod tempor incididunt ut labore et dolore magna.
//                 </p>
//             </div>
//           </div>

//           {/* Follow Us/Social Links */}
//           <div className="md:col-span-1 md:col-start-4 flex justify-start md:justify-end">
//             <div className="space-y-4">
//               <h3 className="text-sm font-semibold text-gray-100 uppercase">Follow Us</h3>
//               <div className="flex space-x-4">
//                 {/* Twitter */}
//                 <a
//                   href="https://twitter.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-gray-400 hover:text-yellow-500 transition-colors duration-200"
//                   aria-label="Twitter"
//                 >
//                   <Twitter size={24} />
//                 </a>
//                 {/* YouTube - Using a different icon for diversity */}
//                 <a
//                   href="https://youtube.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-gray-400 hover:text-yellow-500 transition-colors duration-200"
//                   aria-label="YouTube"
//                 >
//                   <Youtube size={24} />
//                 </a>
//                 {/* Facebook */}
//                 <a
//                   href="https://facebook.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-gray-400 hover:text-yellow-500 transition-colors duration-200"
//                   aria-label="Facebook"
//                 >
//                   <Facebook size={24} />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         {/* --- Bottom Footer Links/Copyright --- */}
//         <div className="mt-8 pt-6 text-center md:text-left text-sm text-gray-500 border-t border-gray-800">
//           <ul className="flex flex-wrap justify-center md:justify-start space-x-4">
//               <li><Link to="/advertise" className="hover:text-yellow-500">ADVERTISE</Link></li>
//               <li><Link to="/terms" className="hover:text-yellow-500">TERM OF USE</Link></li>
//               <li><Link to="/privacy" className="hover:text-yellow-500">PRIVACY POLICY</Link></li>
//           </ul>
//           <p className="mt-2 text-xs">
//             © {new Date().getFullYear()} Bitcoin Africa Story.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



// import { Link } from 'react-router-dom';
// import { Twitter, Facebook, Youtube } from 'lucide-react';

// // --- Mock Data (Kept for Structure) ---
// // Mock data for posts, structured to simulate what you'd fetch from a Firebase Firestore collection
// const mockPosts = [
//   { 
//     id: 1, 
//     title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 
//     author: 'LYN ALDEN', 
//     image: 'https://customer-assets.emergentagent.com/job_orange-education/artifacts/o5w3l51g_baslogo.jpg', 
//     link: '/post/lorem-ipsum-1' 
//   },
//   { 
//     id: 2, 
//     title: 'Sed do eiusmod tempor incididunt ut labore et dolore magna.', 
//     author: 'LYN ALDEN', 
//     image: 'https://customer-assets.emergentagent.com/job_orange-education/artifacts/o5w3l51g_baslogo.jpg', 
//     link: '/post/sed-do-eiusmod-2' 
//   },
//   { 
//     id: 3, 
//     title: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.', 
//     author: 'LYN ALDEN', 
//     image: 'https://customer-assets.emergentagent.com/job_orange-education/artifacts/o5w3l51g_baslogo.jpg', 
//     link: '/post/ut-enim-ad-minim-3' 
//   },
// ];

// // Mock data for categories
// const mockCategories = [
//   { name: 'NEWS', link: '/category/news' },
//   { name: 'BITCOIN', link: '/category/bitcoin' },
//   { name: 'GUIDES', link: '/category/guides' },
//   { name: 'TECHNICAL', link: '/category/technical' },
//   { name: 'ARTICLES', link: '/category/articles' },
//   { name: 'BUSINESS', link: '/category/business' },
//   { name: 'AFRICA BITCOIN STORIES', link: '/category/africa-bitcoin-stories' },
// ];

// // Reusable Post Card component
// const PostCard = ({ title, author, image, link }) => (
//     <Link to={link} className="flex items-start space-x-3 group">
//       {/* Post Image/Thumbnail */}
//       <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 overflow-hidden rounded-md border border-gray-700">
//         <img 
//           src={image} 
//           alt={title} 
//           className="w-full h-full object-cover group-hover:opacity-75 transition-opacity duration-200"
//         />
//       </div>
//       {/* Post Content */}
//       <div className="flex-1">
//         <p className="text-gray-200 text-sm leading-snug group-hover:text-yellow-500 transition-colors duration-200">
//           {title}
//         </p>
//         <p className="text-gray-500 text-xs mt-1">
//           BY <span className="font-medium">{author}</span>
//         </p>
//       </div>
//     </Link>
// );


// const Footer = () => {
//   const popularPosts = mockPosts.slice(0, 3);
//   const topStories = mockPosts.slice(0, 3);

//   return (
//     // Base color is black with a subtle border for separation
//     <footer className="bg-black border-t-8 border-yellow-500">
//       <div className="max-w-7xl mx-auto px-6 py-12">
        
//         {/* === TOP SECTION: POSTS AND CATEGORIES GRID === */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          
//           {/* 1. Popular Posts Column */}
//           <div className="space-y-6">
//             <h2 className="text-lg font-bold text-yellow-500 uppercase tracking-wider">Popular Posts</h2>
//             <div className="space-y-4">
//               {popularPosts.map((post) => (
//                 <PostCard 
//                   key={post.id} 
//                   title={post.title} 
//                   author={post.author} 
//                   image={post.image} 
//                   link={post.link} 
//                 />
//               ))}
//             </div>
//           </div>

//           {/* 2. Top Stories Column */}
//           <div className="space-y-6">
//             <h2 className="text-lg font-bold text-yellow-500 uppercase tracking-wider">Top Stories</h2>
//             <div className="space-y-4">
//               {topStories.map((post) => (
//                 <PostCard 
//                   key={post.id + 'ts'} 
//                   title={post.title} 
//                   author={post.author} 
//                   image={post.image} 
//                   link={post.link} 
//                 />
//               ))}
//             </div>
//           </div>

//           {/* 3. Categories Column */}
//           <div className="space-y-6">
//             <h2 className="text-lg font-bold text-yellow-500 uppercase tracking-wider">Categories</h2>
//             <ul className="space-y-2">
//               {mockCategories.map((category) => (
//                 <li key={category.name}>
//                   <Link 
//                     to={category.link} 
//                     className="text-gray-300 text-base uppercase hover:text-yellow-500 transition-colors duration-200"
//                   >
//                     {category.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* --- Separator --- */}
//         {/* <hr className="my-10 border-gray-800" /> */}
        
//         {/* === BOTTOM SECTION: LOGO, ABOUT, FOLLOW US (3-Column Grid) === */}
//         {/* Uses grid-cols-1 on mobile and grid-cols-3 on medium+ screens */}
//         <div className="mt-[130px] grid grid-cols-1 md:grid-cols-3  gap-[50px] items-start">
          
//           {/* 1. Logo/Brand Column */}
//           <div className="flex justify-start">
//             <Link to="/">
//               <img 
//                 src="/assets/BASlogo.png" 
//                 alt="Bitcoin Africa Story Logo" 
//                 className="w-[200px] " 
//               />
//             </Link>
//           </div>

//           {/* 2. About Us Column */}
//           <div className="text-center md:text-left md:mt-[30px]">
//             <div>
//               <h3 className="text-lg font-bold text-white mb-2 uppercase">About Us</h3>
//             <p className="text-gray-400 text-sm max-w-sm mx-auto md:mx-0">
//               BITCOIN AFRICA WAS INITIATED WITH SOLID PROOF-OF-WORK. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna.
//             </p>
//             </div>
            
//           </div>

//           {/* 3. Follow Us Column */}
//           <div className="text-center md:text-left md:mt-[20px]">
//             <h3 className="text-lg font-bold text-white mb-2 uppercase">Follow Us</h3>
//             <div className="flex space-x-4 justify-center md:justify-start">
//               {/* Twitter */}
//               <a
//                 href="https://twitter.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-yellow-500 hover:text-black transition-colors duration-200"
//                 aria-label="Twitter"
//               >
//                 <Twitter size={16} />
//               </a>
//               {/* YouTube */}
//               <a
//                 href="https://youtube.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-yellow-500 hover:text-black transition-colors duration-200"
//                 aria-label="YouTube"
//               >
//                 <Youtube size={16} />
//               </a>
//               {/* Facebook */}
//               <a
//                 href="https://facebook.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-yellow-500 hover:text-black transition-colors duration-200"
//                 aria-label="Facebook"
//               >
//                 <Facebook size={16} />
//               </a>
//             </div>

//                     <div className="mt-8 pt-6 text-center md:text-left   text-sm ">
//           <ul className="flex md:flex-wrap d space-x-4 text-white">
//               <li><Link to="/advertise" className="hover:text-yellow-500 uppercase">ADVERTISE</Link></li>
//               <li><Link to="/terms" className="hover:text-yellow-500 uppercase">TERM OF USE</Link></li>
//               <li><Link to="/privacy" className="hover:text-yellow-500 uppercase">PRIVACY POLICY</Link></li>
//           </ul>
//           <p className="mt-2 text-xs text-gray-500">
//             © {new Date().getFullYear()} Bitcoin Africa Story.
//           </p>
//         </div>
//           </div>
//         </div>
        
//         {/* --- Bottom Footer Links/Copyright --- */}
//         {/* Separated from the 3-column grid below */}
//         {/* <div className="mt-8 pt-6 text-center md:text-right text-sm ">
//           <ul className="flex flex-wrap justify-center md:justify-end space-x-4 text-white">
//               <li><Link to="/advertise" className="hover:text-yellow-500 uppercase">ADVERTISE</Link></li>
//               <li><Link to="/terms" className="hover:text-yellow-500 uppercase">TERM OF USE</Link></li>
//               <li><Link to="/privacy" className="hover:text-yellow-500 uppercase">PRIVACY POLICY</Link></li>
//           </ul>
//           <p className="mt-2 text-xs text-gray-500">
//             © {new Date().getFullYear()} Bitcoin Africa Story.
//           </p>
//         </div> */}
//       </div>
//     </footer>
//   );
// };

// export default Footer;













// import { Link } from 'react-router-dom';
// import { Twitter, Facebook, Youtube } from 'lucide-react';

// // --- Updated Mock Data with More Stable Image Links ---
// const mockPosts = [
//   { 
//     id: 1, 
//     title: 'Bitcoin slips to $90K after brief jump above $94K as Fed\'s cautious tone tempers rate-cut optimism.', 
//     author: 'SURBHI KHANNA', 
//     // Image: Bitcoin chart visualization
//     image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Bitcoin_price_chart_2021.svg/512px-Bitcoin_price_chart_2021.svg.png', 
//     link: '/post/bitcoin-slips-fed-cautions' 
//   },
//   { 
//     id: 2, 
//     title: 'How High Can Bitcoin Go Now That It\'s Hit Its All-Time High? Experts Weigh In.', 
//     author: 'CHARLES LLOYD BOVAIRD II', 
//     // Image: Physical Bitcoin coin graphic
//     image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Bitcoin_logo.svg/330px-Bitcoin_logo.svg.png', 
//     link: '/post/bitcoin-all-time-high' 
//   },
//   { 
//     id: 3, 
//     title: 'Africa Turns To Bitcoin For Real Financial Solutions: A Story From Lagos.', 
//     author: 'LYN ALDEN', 
//     // Image: Abstract financial data/world map graphic
//     image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Crypto-mining-process.jpg/640px-Crypto-mining-process.jpg', 
//     link: '/post/africa-financial-solutions' 
//   },
// ];

// // Mock data for categories (Unchanged)
// const mockCategories = [
//   { name: 'NEWS', link: '/category/news' },
//   { name: 'BITCOIN', link: '/category/bitcoin' },
//   { name: 'GUIDES', link: '/category/guides' },
//   { name: 'TECHNICAL', link: '/category/technical' },
//   { name: 'ARTICLES', link: '/category/articles' },
//   { name: 'BUSINESS', link: '/category/business' },
//   { name: 'AFRICA BITCOIN STORIES', link: '/category/africa-bitcoin-stories' },
// ];

// // Reusable Post Card component (Unchanged)
// const PostCard = ({ title, author, image, link }) => (
//   <Link to={link} className="flex items-start space-x-3 group">
//     {/* Post Image/Thumbnail */}
//     <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 overflow-hidden rounded-md border border-gray-700">
//       <img 
//         src={image} 
//         alt={title} 
//         // Note: The 'object-cover' will ensure the image fits well within the small container.
//         className="w-full h-full object-cover group-hover:opacity-75 transition-opacity duration-200"
//       />
//     </div>
//     {/* Post Content */}
//     <div className="flex-1">
//       <p className="text-gray-200 text-sm leading-snug group-hover:text-yellow-500 transition-colors duration-200">
//         {title}
//       </p>
//       <p className="text-gray-500 text-xs mt-1">
//         BY <span className="font-medium">{author}</span>
//       </p>
//     </div>
//   </Link>
// );


// const Footer = () => {
//   // Using the new mock data for both sections
//   const popularPosts = mockPosts.slice(0, 3);
//   const topStories = mockPosts.slice(0, 3);

//   return (
//     // Base color is black with a subtle border for separation
//     <footer className="bg-black border-t-8 border-yellow-500">
//       <div className="max-w-7xl mx-auto px-6 py-12">
        
//         {/* === TOP SECTION: POSTS AND CATEGORIES GRID === */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          
//           {/* 1. Popular Posts Column */}
//           <div className="space-y-6">
//             <h2 className="text-lg font-bold text-yellow-500 uppercase tracking-wider">Popular Posts</h2>
//             <div className="space-y-4">
//               {popularPosts.map((post) => (
//                 <PostCard 
//                   key={post.id} 
//                   title={post.title} 
//                   author={post.author} 
//                   image={post.image} 
//                   link={post.link} 
//                 />
//               ))}
//             </div>
//           </div>

//           {/* 2. Top Stories Column */}
//           <div className="space-y-6">
//             <h2 className="text-lg font-bold text-yellow-500 uppercase tracking-wider">Top Stories</h2>
//             <div className="space-y-4">
//               {topStories.map((post) => (
//                 <PostCard 
//                   key={post.id + 'ts'} 
//                   title={post.title} 
//                   author={post.author} 
//                   image={post.image} 
//                   link={post.link} 
//                 />
//               ))}
//             </div>
//           </div>

//           {/* 3. Categories Column */}
//           <div className="space-y-6">
//             <h2 className="text-lg font-bold text-yellow-500 uppercase tracking-wider">Categories</h2>
//             <ul className="space-y-2">
//               {mockCategories.map((category) => (
//                 <li key={category.name}>
//                   <Link 
//                     to={category.link} 
//                     className="text-gray-300 text-base uppercase hover:text-yellow-500 transition-colors duration-200"
//                   >
//                     {category.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* === BOTTOM SECTION: LOGO, ABOUT, FOLLOW US (3-Column Grid) === */}
//         <div className="mt-[130px] grid grid-cols-1 md:grid-cols-3 gap-[50px] items-start">
          
//           {/* 1. Logo/Brand Column */}
//           <div className="flex justify-start">
//             <Link to="/">
//               <img 
//                 src="/assets/BASlogo.png" 
//                 alt="Bitcoin Africa Story Logo" 
//                 className="w-[200px] " 
//               />
//             </Link>
//           </div>

//           {/* 2. About Us Column */}
//           <div className="text-center md:text-left md:mt-[30px]">
//             <div>
//               <h3 className="text-lg font-bold text-white mb-2 uppercase">About Us</h3>
//             <p className="text-gray-400 text-sm max-w-sm mx-auto md:mx-0">
//               BITCOIN AFRICA WAS INITIATED WITH SOLID PROOF-OF-WORK. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna.
//             </p>
//             </div>
//           </div>

//           {/* 3. Follow Us Column */}
//           <div className="text-center md:text-left md:mt-[20px]">
//             <h3 className="text-lg font-bold text-white mb-2 uppercase">Follow Us</h3>
//             <div className="flex space-x-4 justify-center md:justify-start">
//               {/* Twitter */}
//               <a
//                 href="https://twitter.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-yellow-500 hover:text-black transition-colors duration-200"
//                 aria-label="Twitter"
//               >
//                 <Twitter size={16} />
//               </a>
//               {/* YouTube */}
//               <a
//                 href="https://youtube.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-yellow-500 hover:text-black transition-colors duration-200"
//                 aria-label="YouTube"
//               >
//                 <Youtube size={16} />
//               </a>
//               {/* Facebook */}
//               <a
//                 href="https://facebook.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-yellow-500 hover:text-black transition-colors duration-200"
//                 aria-label="Facebook"
//               >
//                 <Facebook size={16} />
//               </a>
//             </div>

//             <div className="mt-8 pt-6 text-center md:text-left   text-sm ">
//               <ul className="flex md:flex-wrap d space-x-4 text-white">
//                   <li><Link to="/advertise" className="hover:text-yellow-500 uppercase">ADVERTISE</Link></li>
//                   <li><Link to="/terms" className="hover:text-yellow-500 uppercase">TERM OF USE</Link></li>
//                   <li><Link to="/privacy" className="hover:text-yellow-500 uppercase">PRIVACY POLICY</Link></li>
//               </ul>
//               <p className="mt-2 text-xs text-gray-500">
//                 © {new Date().getFullYear()} Bitcoin Africa Story.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;





// import { Link } from 'react-router-dom';
// import { Twitter, Facebook, Youtube } from 'lucide-react';

// // --- Updated Mock Data with LOCAL PATHS ---
// // ACTION REQUIRED: You must save three images named 'post-chart.jpg', 
// // 'post-africa.jpg', and 'post-tech.jpg' into your public folder (or public/assets).
// const mockPosts = [
//   { 
//     id: 1, 
//     title: 'Bitcoin slips to $90K after brief jump above $94K as Fed\'s cautious tone tempers rate-cut optimism.', 
//     author: 'SURBHI KHANNA', 
//     // This assumes you save an image to /public/post-chart.jpg
//     image: '/post-chart.jpg', 
//     link: '/post/bitcoin-slips-fed-cautions' 
//   },
//   { 
//     id: 2, 
//     title: 'Africa Turns To Bitcoin For Real Financial Solutions: A Story From Lagos.', 
//     author: 'LYN ALDEN', 
//     // This assumes you save an image to /public/post-africa.jpg
//     image: '/post-africa.jpg', 
//     link: '/post/africa-financial-solutions' 
//   },
//   { 
//     id: 3, 
//     title: 'How High Can Bitcoin Go Now That It\'s Hit Its All-Time High? Experts Weigh In.', 
//     author: 'CHARLES LLOYD BOVAIRD II', 
//     // This assumes you save an image to /public/post-tech.jpg
//     image: '/post-tech.jpg', 
//     link: '/post/bitcoin-all-time-high' 
//   },
// ];

// // ... rest of the mockCategories and PostCard components remain the same ...

// const mockCategories = [
//   { name: 'NEWS', link: '/category/news' },
//   { name: 'BITCOIN', link: '/category/bitcoin' },
//   { name: 'GUIDES', link: '/category/guides' },
//   { name: 'TECHNICAL', link: '/category/technical' },
//   { name: 'ARTICLES', link: '/category/articles' },
//   { name: 'BUSINESS', link: '/category/business' },
//   { name: 'AFRICA BITCOIN STORIES', link: '/category/africa-bitcoin-stories' },
// ];

// const PostCard = ({ title, author, image, link }) => (
//     <Link to={link} className="flex items-start space-x-3 group">
//       {/* Post Image/Thumbnail */}
//       <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 overflow-hidden rounded-md border border-gray-700">
//         <img 
//           src={image} 
//           alt={title} 
//           className="w-full h-full object-cover group-hover:opacity-75 transition-opacity duration-200"
//         />
//       </div>
//       {/* Post Content */}
//       <div className="flex-1">
//         <p className="text-gray-200 text-sm leading-snug group-hover:text-yellow-500 transition-colors duration-200">
//           {title}
//         </p>
//         <p className="text-gray-500 text-xs mt-1">
//           BY <span className="font-medium">{author}</span>
//         </p>
//       </div>
//     </Link>
// );


// const Footer = () => {
//   const popularPosts = mockPosts.slice(0, 3);
//   const topStories = mockPosts.slice(0, 3);

//   return (
//     // Base color is black with a subtle border for separation
//     <footer className="bg-black border-t-8 border-yellow-500">
//       <div className="max-w-7xl mx-auto px-6 py-12">
        
//         {/* === TOP SECTION: POSTS AND CATEGORIES GRID === */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          
//           {/* 1. Popular Posts Column */}
//           <div className="space-y-6">
//             <h2 className="text-lg font-bold text-yellow-500 uppercase tracking-wider">Popular Posts</h2>
//             <div className="space-y-4">
//               {popularPosts.map((post) => (
//                 <PostCard 
//                   key={post.id} 
//                   title={post.title} 
//                   author={post.author} 
//                   image={post.image} 
//                   link={post.link} 
//                 />
//               ))}
//             </div>
//           </div>

//           {/* 2. Top Stories Column */}
//           <div className="space-y-6">
//             <h2 className="text-lg font-bold text-yellow-500 uppercase tracking-wider">Top Stories</h2>
//             <div className="space-y-4">
//               {topStories.map((post) => (
//                 <PostCard 
//                   key={post.id + 'ts'} 
//                   title={post.title} 
//                   author={post.author} 
//                   image={post.image} 
//                   link={post.link} 
//                 />
//               ))}
//             </div>
//           </div>

//           {/* 3. Categories Column */}
//           <div className="space-y-6">
//             <h2 className="text-lg font-bold text-yellow-500 uppercase tracking-wider">Categories</h2>
//             <ul className="space-y-2">
//               {mockCategories.map((category) => (
//                 <li key={category.name}>
//                   <Link 
//                     to={category.link} 
//                     className="text-gray-300 text-base uppercase hover:text-yellow-500 transition-colors duration-200"
//                   >
//                     {category.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
        
//         {/* === BOTTOM SECTION: LOGO, ABOUT, FOLLOW US (3-Column Grid) === */}
//         <div className="mt-[130px] grid grid-cols-1 md:grid-cols-3 gap-[50px] items-start">
          
//           {/* 1. Logo/Brand Column */}
//           <div className="flex justify-start">
//             <Link to="/">
//               <img 
//                 src="/assets/BASlogo.png" 
//                 alt="Bitcoin Africa Story Logo" 
//                 className="w-[200px] " 
//               />
//             </Link>
//           </div>

//           {/* 2. About Us Column */}
//           <div className="text-center md:text-left md:mt-[30px]">
//             <div>
//               <h3 className="text-lg font-bold text-white mb-2 uppercase">About Us</h3>
//             <p className="text-gray-400 text-sm max-w-sm mx-auto md:mx-0">
//               BITCOIN AFRICA WAS INITIATED WITH SOLID PROOF-OF-WORK. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna.
//             </p>
//             </div>
            
//           </div>

//           {/* 3. Follow Us Column */}
//           <div className="text-center md:text-left md:mt-[20px]">
//             <h3 className="text-lg font-bold text-white mb-2 uppercase">Follow Us</h3>
//             <div className="flex space-x-4 justify-center md:justify-start">
//               {/* Twitter */}
//               <a
//                 href="https://twitter.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-yellow-500 hover:text-black transition-colors duration-200"
//                 aria-label="Twitter"
//               >
//                 <Twitter size={16} />
//               </a>
//               {/* YouTube */}
//               <a
//                 href="https://youtube.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-yellow-500 hover:text-black transition-colors duration-200"
//                 aria-label="YouTube"
//               >
//                 <Youtube size={16} />
//               </a>
//               {/* Facebook */}
//               <a
//                 href="https://facebook.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-yellow-500 hover:text-black transition-colors duration-200"
//                 aria-label="Facebook"
//               >
//                 <Facebook size={16} />
//               </a>
//             </div>

//             <div className="mt-8 pt-6 text-center md:text-left   text-sm ">
//               <ul className="flex md:flex-wrap d space-x-4 text-white">
//                   <li><Link to="/advertise" className="hover:text-yellow-500 uppercase">ADVERTISE</Link></li>
//                   <li><Link to="/terms" className="hover:text-yellow-500 uppercase">TERM OF USE</Link></li>
//                   <li><Link to="/privacy" className="hover:text-yellow-500 uppercase">PRIVACY POLICY</Link></li>
//               </ul>
//               <p className="mt-2 text-xs text-gray-500">
//                 © {new Date().getFullYear()} Bitcoin Africa Story.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;




import { Link } from 'react-router-dom';
import { Twitter, Facebook, Youtube } from 'lucide-react';

// --- 1. POPULAR POSTS MOCK DATA (Focus on Market/Tech) ---
// const mockPopularPosts = [
//   { 
//     id: 1, 
//     title: 'Bitcoin Price Plunges Below $90,000 as Hawkish Fed Rate Cut Kills Market Sentiment.', 
//     author: 'SURBHI KHANNA', 
//     // New Image Tag: Person looking stressed at a financial chart
//     image: 'https://placehold.co/80x80/282c34/facc15/svg?text=CHART', //  
//     link: '/post/bitcoin-slips-fed-cautions' 
//   },
//   { 
//     id: 2, 
//     title: 'Fed Rate Cut Exposes Bitcoin\'s Inflation Hedge Problem, Analysts Weigh In on Identity Crisis.', 
//     author: 'CHARLES LLOYD BOVAIRD II', 
//     // New Image Tag: Analyst/Expert speaking
//     image: 'https://placehold.co/80x80/facc15/000/svg?text=ANALYST', //  
//     link: '/post/bitcoin-all-time-high' 
//   },
//   { 
//     id: 3, 
//     title: 'Lightning Labs Integrates Spark to Accelerate Bitcoin Rewards and Self-Custody.', 
//     author: 'JOSHUA DE VOS', 
//     // New Image Tag: Person using Bitcoin app on phone
//     image: 'https://placehold.co/80x80/282c34/60a5fa/svg?text=PHONE+APP', //  
//     link: '/post/lightning-network-spark' 
//   },
// ];

// // --- 2. TOP STORIES MOCK DATA (Focus on Global/Institutional) ---
// const mockTopStories = [
//   { 
//     id: 4, 
//     title: 'Crypto Adoption in Africa Is Exploding: Can Mobile-First Solutions Lead the Charge?', 
//     author: 'LYN ALDEN', 
//     // New Image Tag: Person in Africa using mobile money
//     image: 'https://placehold.co/80x80/65a30d/fff/svg?text=AFRICAN+USER', //  
//     link: '/post/africa-financial-solutions' 
//   },
//   { 
//     id: 5, 
//     title: 'Bitwise\'s $1.25B Index Fund Uplists to NYSE Arca, Signaling Massive Institutional Shift.', 
//     author: 'ALEXANDER DIMITRI', 
//     // New Image Tag: Institutional/Stock Market scene
//     image: 'https://placehold.co/80x80/000/fff/svg?text=NYSE', //  
//     link: '/post/bitwise-etf-uplisting' 
//   },
//   { 
//     id: 6, 
//     title: 'Suspected Private Key Leak Leads to $1.1 Million Loss Across Multiple EVM Chains.', 
//     author: 'ZACH XBT', 
//     // New Image Tag: Hacker/Security threat visualization
//     image: 'https://placehold.co/80x80/dc2626/fff/svg?text=SECURITY+ALERT', //  
//     link: '/post/private-key-leak' 
//   },
// ];

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
const mockCategories = [
  { name: 'NEWS', link: '/category/news' },
  { name: 'BITCOIN', link: '/category/bitcoin' },
  { name: 'GUIDES', link: '/category/guides' },
  { name: 'TECHNICAL', link: '/category/technical' },
  { name: 'ARTICLES', link: '/category/articles' },
  { name: 'BUSINESS', link: '/category/business' },
  { name: 'AFRICA BITCOIN STORIES', link: '/category/africa-bitcoin-stories' },
];

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
              {mockCategories.map((category) => (
                <li key={category.name}>
                  <Link 
                    to={category.link} 
                    className="text-gray-300 text-base uppercase hover:text-yellow-500 transition-colors duration-200"
                  >
                    {category.name}
                  </Link>
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
                className="w-[200px] " 
              />
            </Link>
          </div>

          {/* 2. About Us Column */}
          <div className="text-center md:text-left md:mt-[30px]">
            <div>
              <h3 className="text-lg font-bold text-white mb-2 uppercase">About Us</h3>
            <p className="text-gray-400 text-sm max-w-sm mx-auto md:mx-0">
              BITCOIN AFRICA WAS INITIATED WITH SOLID PROOF-OF-WORK. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna.
            </p>
            </div>
            
          </div>

          {/* 3. Follow Us Column */}
          <div className="text-center md:text-left md:mt-[20px]">
            <h3 className="text-lg font-bold text-white mb-2 uppercase">Follow Us</h3>
            <div className="flex space-x-4 justify-center md:justify-start">
              {/* Twitter */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-yellow-500 hover:text-black transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter size={16} />
              </a>
              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-yellow-500 hover:text-black transition-colors duration-200"
                aria-label="YouTube"
              >
                <Youtube size={16} />
              </a>
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-yellow-500 hover:text-black transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
            </div>

            <div className="mt-8 pt-6 text-center md:text-left   text-sm ">
              <ul className="flex md:flex-wrap d space-x-4 text-white">
                  <li><Link to="/advertise" className="hover:text-yellow-500 uppercase">ADVERTISE</Link></li>
                  <li><Link to="/terms" className="hover:text-yellow-500 uppercase">TERM OF USE</Link></li>
                  <li><Link to="/privacy" className="hover:text-yellow-500 uppercase">PRIVACY POLICY</Link></li>
              </ul>
              <p className="mt-2 text-xs text-gray-500">
                © {new Date().getFullYear()} Bitcoin Africa Story.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;