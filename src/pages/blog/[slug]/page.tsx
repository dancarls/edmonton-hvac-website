
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import { loadBlogPost, BlogPost } from '../../../utils/cms';

export default function BlogPostPage() {
  const { slug } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      if (slug) {
        const blogPost = await loadBlogPost(slug);
        setPost(blogPost);
      }
      setLoading(false);
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading article...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <button 
            onClick={() => window.REACT_APP_NAVIGATE?.('/blog')}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap"
          >
            Back to Blog
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Breadcrumb Navigation */}
      <nav className="bg-gray-50 py-3" aria-label="Breadcrumb">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <button 
                onClick={() => window.REACT_APP_NAVIGATE?.('/')}
                className="text-blue-600 hover:text-blue-700 cursor-pointer"
              >
                Home
              </button>
            </li>
            <li className="text-gray-500">/</li>
            <li>
              <button 
                onClick={() => window.REACT_APP_NAVIGATE?.('/blog')}
                className="text-blue-600 hover:text-blue-700 cursor-pointer"
              >
                Blog
              </button>
            </li>
            <li className="text-gray-500">/</li>
            <li className="text-gray-900 truncate">{post.title}</li>
          </ol>
        </div>
      </nav>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-8">
          <div className="mb-4">
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              {post.category}
            </span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center text-gray-600 mb-6">
            <span className="font-medium">{post.author}</span>
            <span className="mx-3">•</span>
            <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            <span className="mx-3">•</span>
            <span>{post.readTime}</span>
          </div>
          <img 
            src={post.image}
            alt={post.title}
            className="w-full h-64 lg:h-96 object-cover object-top rounded-xl shadow-lg"
          />
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <div 
            dangerouslySetInnerHTML={{ __html: post.body }}
            className="text-gray-700 leading-relaxed"
          />
        </div>

        {/* CMS Access Notice */}
        <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-200">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">
            📝 Content Management
          </h3>
          <p className="text-blue-800 mb-3">
            This article content is managed through your Netlify CMS. To edit or add your full content:
          </p>
          <ol className="text-blue-800 text-sm space-y-1 mb-4">
            <li>1. Go to <strong>yoursite.com/admin</strong></li>
            <li>2. Log in with your Netlify account</li>
            <li>3. Click "Blog Posts" and find this article</li>
            <li>4. Click "Edit" and replace with your content</li>
            <li>5. Save and publish - changes appear automatically</li>
          </ol>
          <a 
            href="/admin" 
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            Access CMS →
          </a>
        </div>

        {/* Call to Action */}
        <div className="mt-12 p-8 bg-blue-50 rounded-xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Need Professional HVAC Service?
          </h3>
          <p className="text-gray-700 mb-6">
            Don't wait for HVAC problems to escalate. Contact Edmonton HVAC for expert service, maintenance, and repairs throughout Edmonton and surrounding areas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => (document.querySelector('#vapi-widget-floating-button') as HTMLElement)?.click()}
              className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors text-center cursor-pointer whitespace-nowrap"
            >
              Talk to Our AI Assistant
            </button>
            <button 
              onClick={() => window.REACT_APP_NAVIGATE?.('/contact')}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap"
            >
              Get Free Quote
            </button>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
