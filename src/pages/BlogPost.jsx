import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Share2, Twitter, Facebook, Link2 } from 'lucide-react';
import { blogPosts } from '../mock';
import ScrollToTop from '../components/ScrollToTop';

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-yellow-500 hover:text-yellow-400">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  const handleShare = (platform) => {
    const url = window.location.href;
    const text = post.title;
    
    switch(platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        alert('Link copied to clipboard!');
        break;
      default:
        break;
    }
  };

  return (
    <div className="pt-16">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <Link 
          to="/blog" 
          className="inline-flex items-center text-gray-400 hover:text-yellow-500 transition-colors duration-200"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Blog
        </Link>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-6 pb-20">
        {/* Category Badge */}
        <div className="mb-6">
          <span className="inline-block text-sm font-semibold text-black bg-yellow-500 px-4 py-2 rounded-full">
            {post.category}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
          {post.title}
        </h1>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-6 mb-8 text-gray-400">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center text-black font-bold mr-3">
              BA
            </div>
            <div>
              <div className="font-semibold text-white">{post.author}</div>
              <div className="text-sm">Bitcoin Educator</div>
            </div>
          </div>
          <div className="flex items-center">
            <Calendar size={16} className="mr-2" />
            {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </div>
          <div className="flex items-center">
            <Clock size={16} className="mr-2" />
            {post.readTime}
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-12 rounded-xl overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-auto"
          />
        </div>

        {/* Share Buttons */}
        <div className="mb-12 p-6 bg-gray-900 border border-gray-800 rounded-xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Share2 className="text-yellow-500 mr-3" size={20} />
              <span className="text-white font-semibold">Share this article</span>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => handleShare('twitter')}
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-yellow-500 hover:text-black transition-colors duration-200"
                aria-label="Share on Twitter"
              >
                <Twitter size={18} />
              </button>
              <button
                onClick={() => handleShare('facebook')}
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-yellow-500 hover:text-black transition-colors duration-200"
                aria-label="Share on Facebook"
              >
                <Facebook size={18} />
              </button>
              <button
                onClick={() => handleShare('copy')}
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-yellow-500 hover:text-black transition-colors duration-200"
                aria-label="Copy Link"
              >
                <Link2 size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="prose prose-invert prose-lg max-w-none mb-16">
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            {post.excerpt}
          </p>
          
          <div className="text-gray-300 leading-relaxed space-y-6">
            <p>
              Bitcoin represents a fundamental shift in how we think about money, value, and financial freedom. 
              For too long, traditional financial systems have controlled access to economic opportunities, 
              leaving millions of Africans without the tools they need to build wealth and secure their futures.
            </p>
            
            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Understanding the Basics</h2>
            <p>
              At its core, Bitcoin is a decentralized digital currency that operates without the need for banks 
              or intermediaries. It's secured by cryptography and maintained by a global network of computers. 
              This makes it resistant to censorship, seizure, and manipulation.
            </p>
            
            <p>
              But Bitcoin is more than just technology—it's a movement towards financial sovereignty. When you 
              hold Bitcoin, you truly own your money. No one can freeze your account, deny you access, or 
              inflate away your savings.
            </p>
            
            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Why This Matters for Africa</h2>
            <p>
              Africa faces unique financial challenges: currency devaluation, limited banking access, high 
              remittance fees, and economic instability. Bitcoin offers practical solutions to these problems:
            </p>
            
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Protection against inflation and currency devaluation</li>
              <li>Access to global markets and opportunities</li>
              <li>Lower-cost international money transfers</li>
              <li>Financial inclusion for the unbanked</li>
              <li>True ownership of wealth without intermediaries</li>
            </ul>
            
            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Taking Action</h2>
            <p>
              Learning about Bitcoin is just the first step. The real transformation happens when you start 
              using it, understanding its principles, and sharing that knowledge with others. Whether you're 
              looking to protect your savings, access new opportunities, or simply take control of your 
              financial future, Bitcoin provides the tools you need.
            </p>
            
            <p>
              Start small. Learn the basics. Practice with small amounts. Ask questions. Join communities. 
              And most importantly, never stop learning. The Bitcoin journey is ongoing, and there's always 
              more to discover.
            </p>
            
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-8 my-12">
              <h3 className="text-2xl font-bold text-yellow-500 mb-4">Key Takeaway</h3>
              <p className="text-gray-300 text-lg">
                Bitcoin isn't just an investment—it's a tool for financial freedom. By understanding and 
                using Bitcoin, you're taking control of your economic future and joining a global movement 
                towards monetary sovereignty.
              </p>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-20 pt-12 border-t border-gray-800">
            <h2 className="text-3xl font-bold mb-8">
              Related <span className="text-yellow-500">Articles</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.slug}`}
                  className="group bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-yellow-500 transition-all duration-300"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold mb-2 group-hover:text-yellow-500 transition-colors duration-200">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-gray-400">{relatedPost.readTime}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
<ScrollToTop />
    </div>
  );
};

export default BlogPost;