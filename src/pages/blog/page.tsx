
import { useState } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

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

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'How to Prepare Your HVAC System for Winter in Abbotsford',
      excerpt: 'Essential maintenance tips to ensure your heating system runs efficiently during Fraser Valley\'s cold months.',
      content: 'Full article content here...',
      author: 'Mike Thompson',
      date: '2024-01-15',
      category: 'Maintenance',
      readTime: '5 min read',
      image: 'https://readdy.ai/api/search-image?query=Professional%20HVAC%20technician%20performing%20winter%20maintenance%20on%20residential%20furnace%20system%20in%20Abbotsford%20home%2C%20checking%20filters%20and%20equipment%2C%20cold%20weather%20preparation&width=800&height=400&seq=blog-1&orientation=landscape',
      slug: 'prepare-hvac-system-winter-abbotsford'
    },
    {
      id: '2',
      title: 'Signs Your Air Conditioner Needs Repair Before Summer',
      excerpt: 'Don\'t wait for the hottest day of the year to discover your AC isn\'t working. Watch for these warning signs.',
      content: 'Full article content here...',
      author: 'Sarah Chen',
      date: '2024-01-10',
      category: 'Cooling',
      readTime: '4 min read',
      image: 'https://readdy.ai/api/search-image?query=Air%20conditioning%20unit%20showing%20signs%20of%20wear%20and%20repair%20needs%2C%20residential%20exterior%20AC%20unit%20with%20visible%20issues%2C%20professional%20diagnostic%20assessment&width=800&height=400&seq=blog-2&orientation=landscape',
      slug: 'air-conditioner-repair-signs-summer'
    },
    {
      id: '3',
      title: 'Energy-Efficient HVAC Upgrades That Save Money',
      excerpt: 'Discover which HVAC improvements offer the best return on investment for Abbotsford homeowners.',
      content: 'Full article content here...',
      author: 'David Kim',
      date: '2024-01-08',
      category: 'Energy Efficiency',
      readTime: '6 min read',
      image: 'https://readdy.ai/api/search-image?query=Modern%20energy-efficient%20HVAC%20system%20installation%20in%20contemporary%20home%2C%20smart%20thermostat%20and%20high-efficiency%20equipment%2C%20cost%20savings%20visualization&width=800&height=400&seq=blog-3&orientation=landscape',
      slug: 'energy-efficient-hvac-upgrades-save-money'
    },
    {
      id: '4',
      title: 'Indoor Air Quality Solutions for Fraser Valley Allergies',
      excerpt: 'Combat seasonal allergies and improve your home\'s air quality with these professional HVAC solutions.',
      content: 'Full article content here...',
      author: 'Sarah Chen',
      date: '2024-01-05',
      category: 'Air Quality',
      readTime: '5 min read',
      image: 'https://readdy.ai/api/search-image?query=Indoor%20air%20quality%20improvement%20system%20with%20air%20purifiers%20and%20filtration%20equipment%20in%20modern%20home%20interior%2C%20clean%20fresh%20air%20visualization&width=800&height=400&seq=blog-4&orientation=landscape',
      slug: 'indoor-air-quality-fraser-valley-allergies'
    },
    {
      id: '5',
      title: 'Heat Pump vs Furnace: Which is Right for Your Home?',
      excerpt: 'Compare the pros and cons of heat pumps and furnaces for Abbotsford\'s climate and your home\'s needs.',
      content: 'Full article content here...',
      author: 'Mike Thompson',
      date: '2024-01-02',
      category: 'Heating',
      readTime: '7 min read',
      image: 'https://readdy.ai/api/search-image?query=Side%20by%20side%20comparison%20of%20modern%20heat%20pump%20and%20furnace%20systems%2C%20residential%20heating%20equipment%20installation%2C%20professional%20comparison%20visualization&width=800&height=400&seq=blog-5&orientation=landscape',
      slug: 'heat-pump-vs-furnace-abbotsford-homes'
    },
    {
      id: '6',
      title: 'Commercial HVAC Maintenance Best Practices',
      excerpt: 'Keep your business comfortable and energy-efficient with proper commercial HVAC maintenance schedules.',
      content: 'Full article content here...',
      author: 'David Kim',
      date: '2023-12-28',
      category: 'Commercial',
      readTime: '8 min read',
      image: 'https://readdy.ai/api/search-image?query=Commercial%20HVAC%20system%20maintenance%20in%20office%20building%2C%20large%20scale%20heating%20and%20cooling%20equipment%2C%20professional%20technicians%20working&width=800&height=400&seq=blog-6&orientation=landscape',
      slug: 'commercial-hvac-maintenance-best-practices'
    }
  ];

  const categories = ['All', 'Maintenance', 'Heating', 'Cooling', 'Air Quality', 'Energy Efficiency', 'Commercial'];

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Breadcrumb Navigation */}
      <nav className="bg-gray-50 py-3" aria-label="Breadcrumb">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <li className="text-gray-900">Blog</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            HVAC Tips & Insights Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert advice, maintenance tips, and industry insights to help you make informed decisions about your home's heating, cooling, and air quality systems.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors whitespace-nowrap cursor-pointer ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover object-top"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span>{post.author}</span>
                    <span className="mx-2">•</span>
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
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

      {/* Newsletter Signup */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated with HVAC Tips
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get expert HVAC advice, maintenance reminders, and exclusive offers delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button className="bg-green-500 text-white px-6 py-3 rounded-r-lg font-semibold hover:bg-green-600 transition-colors cursor-pointer whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
