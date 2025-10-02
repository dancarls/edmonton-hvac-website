
import { useParams } from 'react-router-dom';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  slug: string;
}

export default function BlogPostPage() {
  const { slug } = useParams();

  // In a real application, you would fetch the post data based on the slug
  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'How to Prepare Your HVAC System for Winter in Abbotsford',
      excerpt: 'Essential maintenance tips to ensure your heating system runs efficiently during Fraser Valley\'s cold months.',
      content: `
        <h2>Why Winter HVAC Preparation Matters</h2>
        <p>As temperatures drop in Abbotsford and the Fraser Valley, your heating system becomes the most important appliance in your home. Proper preparation ensures efficient operation, lower energy bills, and prevents costly emergency repairs during the coldest months.</p>
        
        <h2>Essential Pre-Winter Maintenance Tasks</h2>
        
        <h3>1. Replace or Clean Air Filters</h3>
        <p>Dirty filters reduce airflow and force your system to work harder. Replace disposable filters or clean reusable ones monthly during peak usage periods.</p>
        
        <h3>2. Test Your Thermostat</h3>
        <p>Ensure your thermostat is working correctly by testing both heating and cooling modes. Consider upgrading to a programmable or smart thermostat for better efficiency.</p>
        
        <h3>3. Inspect Vents and Ductwork</h3>
        <p>Check all vents for obstructions and ensure dampers are open. Look for visible damage to ductwork that could cause heat loss.</p>
        
        <h3>4. Schedule Professional Maintenance</h3>
        <p>A professional tune-up includes cleaning, lubricating moving parts, checking electrical connections, and ensuring safe operation.</p>
        
        <h2>Warning Signs to Watch For</h2>
        <ul>
          <li>Unusual noises during operation</li>
          <li>Uneven heating throughout your home</li>
          <li>Higher than normal energy bills</li>
          <li>Frequent cycling on and off</li>
          <li>Yellow pilot light (should be blue)</li>
        </ul>
        
        <h2>Emergency Preparedness</h2>
        <p>Keep our emergency service number handy: (604) 555-0123. We provide 24/7 emergency HVAC repairs throughout Abbotsford and the Fraser Valley.</p>
        
        <p>Don't wait until the first cold snap to discover your heating system isn't ready. Contact Abbotsford HVAC today to schedule your pre-winter maintenance and ensure your family stays warm all season long.</p>
      `,
      author: 'Mike Thompson',
      date: '2024-01-15',
      category: 'Maintenance',
      readTime: '5 min read',
      image: 'https://readdy.ai/api/search-image?query=Professional%20HVAC%20technician%20performing%20winter%20maintenance%20on%20residential%20furnace%20system%20in%20Abbotsford%20home%2C%20checking%20filters%20and%20equipment%2C%20cold%20weather%20preparation&width=1200&height=600&seq=blog-post-1&orientation=landscape',
      slug: 'prepare-hvac-system-winter-abbotsford'
    }
  ];

  const currentPost = blogPosts.find(post => post.slug === slug);
  const relatedPosts = blogPosts.filter(post => post.slug !== slug).slice(0, 3);

  if (!currentPost) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <button 
            onClick={() => window.REACT_APP_NAVIGATE?.('/blog')}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors cursor-pointer"
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
            <li className="text-gray-900 truncate">{currentPost.title}</li>
          </ol>
        </div>
      </nav>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-8">
          <div className="mb-4">
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              {currentPost.category}
            </span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {currentPost.title}
          </h1>
          <div className="flex items-center text-gray-600 mb-6">
            <span className="font-medium">{currentPost.author}</span>
            <span className="mx-3">•</span>
            <span>{new Date(currentPost.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            <span className="mx-3">•</span>
            <span>{currentPost.readTime}</span>
          </div>
          <img 
            src={currentPost.image}
            alt={currentPost.title}
            className="w-full h-64 lg:h-96 object-cover object-top rounded-xl shadow-lg"
          />
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <div 
            dangerouslySetInnerHTML={{ __html: currentPost.content }}
            className="text-gray-700 leading-relaxed"
          />
        </div>

        {/* Call to Action */}
        <div className="mt-12 p-8 bg-blue-50 rounded-xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Need Professional HVAC Service?
          </h3>
          <p className="text-gray-700 mb-6">
            Don't wait for HVAC problems to escalate. Contact Abbotsford HVAC for expert service, maintenance, and repairs throughout the Fraser Valley.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="tel:604-555-0123"
              className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors text-center cursor-pointer whitespace-nowrap"
            >
              Call (604) 555-0123
            </a>
            <button 
              onClick={() => window.REACT_APP_NAVIGATE?.('/contact')}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap"
            >
              Get Free Quote
            </button>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover object-top"
                  />
                  <div className="p-6">
                    <div className="text-sm text-gray-500 mb-2">
                      {post.category} • {post.readTime}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm line-clamp-2">
                      {post.excerpt}
                    </p>
                    <button 
                      onClick={() => window.REACT_APP_NAVIGATE?.(`/blog/${post.slug}`)}
                      className="text-blue-600 font-semibold hover:text-blue-700 transition-colors cursor-pointer whitespace-nowrap"
                    >
                      Read More →
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
