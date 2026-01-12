import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Share2, Twitter, Facebook, Link2, Linkedin } from 'lucide-react';
import { blogPosts as mockPosts } from '../mock';
import ScrollToTop from '../components/ScrollToTop';
import { db } from '../firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useNews } from '../context/NewsContext';

const BlogPost = () => {
  const { slug } = useParams();
  const { news: posts, loading: newsLoading } = useNews();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!newsLoading) {
      const found = posts.find(p => p.slug === slug);
      setPost(found || mockPosts.find(p => p.slug === slug));
      setLoading(false);
    }
  }, [slug, posts, newsLoading]);

  if (loading) {
    return (
      <div className="pt-32 min-h-screen text-center">
        <div className="w-12 h-12 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-gray-400">Loading story...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link to="/news" className="text-yellow-500 hover:text-yellow-400">
            ← Back to News
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = posts
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  const handleShare = (platform) => {
    const url = window.location.href;
    const text = post.title;

    switch (platform) {
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
          to="/news"
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
        <div className="flex flex-wrap items-center justify-between gap-6 mb-12 p-6 bg-gray-900/50 border border-gray-800 rounded-2xl">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-16 h-16 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 border border-yellow-500/20 overflow-hidden shadow-xl">
                {post.authorImage ? (
                  <img src={post.authorImage} alt={post.author} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-2xl font-black">{post.author?.charAt(0) || 'B'}</span>
                )}
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-2 border-[#0A0A0A] rounded-full"></div>
            </div>
            <div>
              <div className="font-bold text-white text-lg tracking-tight">{post.author}</div>
              <div className="text-xs text-yellow-500/70 font-black uppercase tracking-widest flex items-center gap-2">
                <Calendar size={12} /> {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex flex-col items-end">
              <div className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-1">Engage with Author</div>
              <div className="flex gap-3">
                {post.authorLinkedIn && (
                  <a href={post.authorLinkedIn} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                    <Linkedin size={18} />
                  </a>
                )}
                {post.authorX && (
                  <a href={post.authorX} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    <Twitter size={18} />
                  </a>
                )}
              </div>
            </div>
            <div className="h-10 w-px bg-gray-800 hidden md:block"></div>
            <div className="flex flex-col">
              <div className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-1">Read Duration</div>
              <div className="text-sm font-bold text-white flex items-center gap-2">
                <Clock size={14} className="text-yellow-500" /> {post.readTime}
              </div>
            </div>
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
                  to={`/news/${relatedPost.slug}`}
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