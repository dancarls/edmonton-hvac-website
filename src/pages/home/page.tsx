
import { useState, useEffect } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    preferred_time: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  // Add structured data for reviews
  useEffect(() => {
    const reviewsSchema = {
      "@context": "https://schema.org",
      "@type": "Review",
      "itemReviewed": {
        "@type": "LocalBusiness",
        "name": "Edmonton HVAC"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Jessica Anderson"
      },
      "reviewBody": "Outstanding service! They replaced our old furnace with a new high-efficiency unit. The team was professional and the installation was flawless."
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(reviewsSchema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const formBody = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        formBody.append(key, value);
      });

      const response = await fetch('https://readdy.ai/api/form/d3basfp6d8097tiljl6g', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody.toString(),
      });

      if (response.ok) {
        setSubmitStatus('Thank you! We\'ll contact you soon to schedule your service.');
        setFormData({ name: '', phone: '', email: '', service: '', preferred_time: '' });
      } else {
        setSubmitStatus('Something went wrong. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    {
      icon: '🔥',
      title: 'Heating Services',
      description: 'Expert furnace installation, boiler repair, heat pump systems, radiant floor heating, smart thermostats, and 24/7 emergency heating repairs to keep your Edmonton home warm all winter.',
      subServices: ['Furnace Installation & Repair', 'Boiler Services', 'Heat Pump Systems', 'Radiant Floor Heating', 'Smart Thermostats', 'Emergency Heating Repairs'],
      link: '/services/heating'
    },
    {
      icon: '❄️',
      title: 'Cooling Services',
      description: 'Complete air conditioning installation, maintenance, repair, central air systems, ductless mini-splits, and emergency AC repairs for optimal cooling comfort in Edmonton.',
      subServices: ['AC Installation', 'AC Maintenance & Repair', 'Central Air Systems', 'Ductless Mini-Splits', 'Emergency AC Repairs', 'Cooling System Upgrades'],
      link: '/services/cooling'
    },
    {
      icon: '💨',
      title: 'Ventilation Services',
      description: 'Professional whole-home ventilation systems, exhaust fans, attic fans, air balancing, ERV/HRV installation, and duct cleaning services for better indoor air circulation.',
      subServices: ['Whole-Home Ventilation', 'Exhaust & Attic Fans', 'Air Balancing', 'ERV/HRV Systems', 'Duct Cleaning', 'Ventilation Maintenance'],
      link: '/services/ventilation'
    },
    {
      icon: '🍃',
      title: 'Indoor Air Quality',
      description: 'Advanced UV air purifiers, air filtration systems, humidifiers, dehumidifiers, carbon monoxide detectors, and mold remediation to ensure healthy indoor air quality.',
      subServices: ['UV Air Purifiers', 'Air Filtration Systems', 'Humidifiers & Dehumidifiers', 'CO Detectors', 'Mold Remediation', 'Air Quality Testing'],
      link: '/services/air-quality'
    },
    {
      icon: '💧',
      title: 'Plumbing & Water Heating',
      description: "Water heater installation and repair, plumbing repairs, pipe insulation, and related services to complement your home's comfort systems in Edmonton.",
      subServices: ['Water Heater Services', 'Plumbing Repairs', 'Pipe Insulation', 'Hot Water Systems', 'Tankless Water Heaters', 'Emergency Plumbing'],
      link: '/services/plumbing'
    },
    {
      icon: '⚙️',
      title: 'Maintenance Services',
      description: 'Comprehensive annual HVAC inspections, filter replacements, thermostat upgrades, and maintenance agreements to keep your systems running efficiently year-round.',
      subServices: ['Annual Inspections', 'Filter Replacement', 'Thermostat Upgrades', 'Maintenance Agreements', 'System Tune-ups', 'Preventive Care'],
      link: '/services/maintenance'
    },
    {
      icon: '🏢',
      title: 'Commercial HVAC',
      description: 'Professional commercial HVAC system installation, repairs, refrigeration, building automation, and energy-efficient solutions for Edmonton businesses.',
      subServices: ['System Installation', 'Commercial Repairs', 'Refrigeration Services', 'Building Automation', 'Energy Solutions', 'Emergency Commercial Service'],
      link: '/services/commercial'
    },
    {
      icon: '🚨',
      title: 'Emergency Services',
      description: '24/7 emergency HVAC repairs in Edmonton. No heating in winter? AC broken in summer? We respond fast with same-day emergency service to restore your comfort.',
      subServices: ['24/7 Emergency Response', 'Same-Day Service', 'Emergency Heating Repairs', 'Emergency AC Repairs', 'Weekend & Holiday Service', 'Emergency Diagnostics'],
      link: '/services/emergency'
    }
  ];

  const testimonials = [
    {
      name: 'Jessica Anderson',
      location: 'Summerside',
      rating: 5,
      text: 'Outstanding service! They replaced our old furnace with a new high-efficiency unit. The team was professional and the installation was flawless.',
      date: '2024-01-15'
    },
    {
      name: 'David Kim',
      location: 'Oliver',
      rating: 5,
      text: 'Called for emergency AC repair during a heatwave. They responded within an hour and had our system running perfectly. Exceptional customer service.',
      date: '2024-02-08'
    },
    {
      name: 'Michelle Roberts',
      location: 'Sherwood Park',
      rating: 5,
      text: 'Been using them for maintenance for over 2 years. Always reliable, professional, and fairly priced. Highly recommend their service plans!',
      date: '2024-01-22'
    }
  ];

  const serviceAreas = [
    'Belle Rive', 'Oxford', 'Hudson', 'Sherbrooke', 'Overlanders', 'Hairsine',
    'Carleton', 'Eastwood', 'Clover Bar', 'Britannia Youngstown', 'Glenwood',
    'River Valley Laurier', 'Strathcona', 'Summerside', 'MacTaggart', 'Menisa',
    'Kameyosek', 'Sweet Grass', 'Rhatigan Ridge', 'Graydon Hill', 'Desrochers',
    'DeCoteau', 'Stillwater', 'Riverview Area', 'Nakamun Park', 'Sunrise Beach',
    'Alexander', 'Morinville', 'Calahoo', 'St. Albert', 'Sturgeon County',
    'Bon Accord', 'Fort Saskatchewan', 'Bruderheim', 'Sherwood Park',
    'Spruce Grove', 'Stony Plain', 'Enoch Cree Nation', 'Devon', 'Beaumont', 'Oliver'
  ];

  const blogPosts = [
    {
      id: '1',
      title: 'Preparing Your HVAC System for Edmonton\'s Harsh Winters',
      excerpt: 'Essential winterization tips to ensure your heating system performs efficiently during Alberta\'s extreme cold temperatures.',
      author: 'Robert Wilson',
      date: '2024-01-15',
      category: 'Winter Maintenance',
      readTime: '6 min read',
      image: 'https://readdy.ai/api/search-image?query=Professional%20HVAC%20technician%20performing%20winter%20maintenance%20on%20residential%20furnace%20system%20in%20Edmonton%20Alberta%20home%2C%20snowy%20weather%20outside%2C%20cold%20climate%20preparation%2C%20high-efficiency%20heating%20equipment&width=600&height=300&seq=edmonton-blog-1&orientation=landscape',
      slug: 'preparing-hvac-edmonton-harsh-winters'
    },
    {
      id: '2',
      title: 'Best Energy-Efficient Heating Solutions for Alberta Homes',
      excerpt: 'Discover the most cost-effective and environmentally friendly heating options for Edmonton\'s climate and energy costs.',
      author: 'Amanda Martinez',
      date: '2024-01-10',
      category: 'Energy Efficiency',
      readTime: '5 min read',
      image: 'https://readdy.ai/api/search-image?query=Modern%20energy-efficient%20furnace%20and%20heat%20pump%20system%20in%20Edmonton%20home%2C%20smart%20thermostat%2C%20high-efficiency%20HVAC%20equipment%2C%20Alberta%20energy%20savings%2C%20winter%20heating%20solutions&width=600&height=300&seq=edmonton-blog-2&orientation=landscape',
      slug: 'best-energy-efficient-heating-alberta-homes'
    },
    {
      id: '3',
      title: 'When to Replace Your Furnace: Signs Edmonton Homeowners Should Know',
      excerpt: 'Learn the key indicators that it\'s time to upgrade your furnace, especially important for Edmonton\'s demanding climate.',
      author: 'James Thompson',
      date: '2024-01-08',
      category: 'Heating',
      readTime: '4 min read',
      image: 'https://readdy.ai/api/search-image?query=Old%20furnace%20showing%20signs%20of%20wear%20versus%20new%20high-efficiency%20furnace%20replacement%20in%20Edmonton%20basement%2C%20professional%20HVAC%20upgrade%2C%20system%20comparison&width=600&height=300&seq=edmonton-blog-3&orientation=landscape',
      slug: 'when-replace-furnace-edmonton-homeowners'
    }
  ];

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
          </ol>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://readdy.ai/api/search-image?query=Modern%20comfortable%20family%20home%20in%20Edmonton%20Alberta%20with%20snow%20in%20winter%2C%20clean%20residential%20architecture%2C%20HVAC%20equipment%20visible%2C%20beautiful%20Canadian%20neighborhood%20setting%2C%20professional%20photography%2C%20cold%20climate%2C%20well-maintained%20property&width=1920&height=1080&seq=edmonton-hero-1&orientation=landscape')`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Your Trusted HVAC Specialists in <span className="text-green-500">Edmonton, AB</span>
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                Premium heating, cooling, and air quality solutions for Edmonton homes and businesses. Expert technicians delivering exceptional service with 24/7 emergency support across Alberta.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => document.getElementById('service-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors whitespace-nowrap cursor-pointer"
                  aria-label="Book a free HVAC consultation"
                >
                  Book a Free Consultation
                </button>
                <button 
                  onClick={() => document.querySelector('#vapi-widget-floating-button')?.click()}
                  className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors text-center whitespace-nowrap cursor-pointer"
                  aria-label="Talk to our AI assistant"
                >
                  Talk to Our AI Assistant
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Service Request Form */}
      <section id="service-form" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
              Schedule Your HVAC Service
            </h2>
            <form onSubmit={handleSubmit} data-readdy-form id="service-request-form" className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                  aria-describedby="name-help"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                  placeholder="Optional - we'll use AI assistant primarily"
                  aria-describedby="phone-help"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                  aria-describedby="email-help"
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Service Needed *
                </label>
                <div className="relative">
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm appearance-none"
                    aria-describedby="service-help"
                  >
                    <option value="">Select HVAC service</option>
                    <option value="furnace-repair">Furnace Repair</option>
                    <option value="furnace-installation">Furnace Installation</option>
                    <option value="ac-repair">AC Repair</option>
                    <option value="ac-installation">AC Installation</option>
                    <option value="heat-pump">Heat Pump Service</option>
                    <option value="ductless">Ductless Mini-Split</option>
                    <option value="air-quality">Indoor Air Quality</option>
                    <option value="maintenance">Maintenance Service</option>
                    <option value="emergency">Emergency Service</option>
                    <option value="other">Other HVAC Service</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <i className="ri-arrow-down-s-line text-gray-400"></i>
                  </div>
                </div>
              </div>
              <div className="md:col-span-2">
                <label htmlFor="preferred_time" className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Appointment Time
                </label>
                <input
                  type="text"
                  id="preferred_time"
                  name="preferred_time"
                  value={formData.preferred_time}
                  onChange={(e) => setFormData({...formData, preferred_time: e.target.value})}
                  placeholder="e.g., Tomorrow morning, This weekend, ASAP"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                  aria-describedby="time-help"
                />
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-green-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors disabled:opacity-50 whitespace-nowrap cursor-pointer"
                  aria-label="Submit HVAC service request"
                >
                  {isSubmitting ? 'Submitting...' : 'Request Service'}
                </button>
                {submitStatus && (
                  <p className={`mt-4 text-center ${submitStatus.includes('Thank you') ? 'text-green-600' : 'text-red-600'}`} role="status" aria-live="polite">
                    {submitStatus}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Edmonton Homeowners Choose Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience superior HVAC service with Alberta's most reliable heating and cooling specialists
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏠</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Alberta Owned & Operated</h3>
              <p className="text-gray-600">
                We understand Edmonton's climate challenges and provide solutions tailored to Alberta winters
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⏰</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Round-the-Clock Emergency</h3>
              <p className="text-gray-600">
                When your heating fails in -30°C weather, we're here with immediate emergency response
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Certified & Guaranteed</h3>
              <p className="text-gray-600">
                All technicians hold current Alberta certifications with full warranty protection on all work
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📍</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Greater Edmonton Coverage</h3>
              <p className="text-gray-600">
                From downtown Edmonton to Sherwood Park, we serve all Greater Edmonton Area communities
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Complete HVAC Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Expert HVAC Solutions for Edmonton Homes
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive heating, cooling, and air quality services designed for Alberta's demanding climate
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <article key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow h-full flex flex-col">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">{service.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  {service.description}
                </p>
                <div className="mb-4">
                  <h4 className="font-medium text-gray-800 mb-2">Services Include:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {service.subServices.map((subService, subIndex) => (
                      <li key={subIndex} className="flex items-start">
                        <span className="text-green-600 mr-2" aria-hidden="true">•</span>
                        <span>{subService}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button 
                  onClick={() => {
                    window.REACT_APP_NAVIGATE?.(service.link);
                  }}
                  className="text-green-600 font-semibold hover:text-green-700 transition-colors cursor-pointer whitespace-nowrap mt-auto"
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn More →
                </button>
              </article>
            ))}
          </div>
          <div className="text-center mt-12">
            <button 
              onClick={() => document.getElementById('service-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors whitespace-nowrap cursor-pointer"
              aria-label="Get free HVAC estimate"
            >
              Get Free Estimate Today
            </button>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Edmonton HVAC Knowledge Hub
            </h2>
            <p className="text-xl text-gray-600">
              Stay informed with expert tips and insights tailored for Alberta homeowners
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover object-top"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
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
                    className="text-green-600 font-semibold hover:text-green-700 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Read More →
                  </button>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-12">
            <button 
              onClick={() => window.REACT_APP_NAVIGATE?.('/blog')}
              className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors whitespace-nowrap cursor-pointer"
            >
              View All Articles
            </button>
          </div>
        </div>
      </section>

      {/* Service Area Map */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Edmonton Area HVAC Service Coverage
            </h2>
            <p className="text-xl text-gray-600">
              Professional HVAC services throughout Edmonton and surrounding Alberta communities
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="bg-gray-100 rounded-xl p-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83325.24904165726!2d-113.490929!3d53.544388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a02220e223e1e7%3A0x2a8608d10c4c7d9!2sEdmonton%2C%20AB%2C%20Canada!5e0!3m2!1sen!2sus!4v1704835000000!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
                title="Edmonton HVAC Service Areas Map"
              ></iframe>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">
                Communities We Serve
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {serviceAreas.map((area, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3" aria-hidden="true"></div>
                    <span className="text-gray-700">{area}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-green-50 rounded-lg">
                <h4 className="text-lg font-semibold text-green-900 mb-2">
                  Don't see your community listed?
                </h4>
                <p className="text-green-800 mb-4">
                  We may still provide service to your area. Connect with our AI assistant to confirm coverage availability!
                </p>
                <button 
                  onClick={() => document.querySelector('#vapi-widget-floating-button')?.click()}
                  className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-block whitespace-nowrap cursor-pointer"
                  aria-label="Talk to AI assistant to check service availability"
                >
                  Check Coverage
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials with Review Schema */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Edmonton Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Genuine reviews from satisfied customers throughout the Edmonton region
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <article key={index} className="bg-white rounded-xl shadow-lg p-8" itemScope itemType="https://schema.org/Review">
                <div className="flex items-center mb-4" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                  <meta itemProp="ratingValue" content={testimonial.rating.toString()} />
                  <meta itemProp="bestRating" content="5" />
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <div key={i} className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-star-fill text-yellow-400" aria-hidden="true"></i>
                    </div>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic" itemProp="reviewBody">
                  "{testimonial.text}"
                </p>
                <div itemProp="author" itemScope itemType="https://schema.org/Person">
                  <p className="font-semibold text-gray-900" itemProp="name">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.location}</p>
                </div>
                <meta itemProp="datePublished" content={testimonial.date} />
                <div itemProp="itemReviewed" itemScope itemType="https://schema.org/LocalBusiness">
                  <meta itemProp="name" content="Edmonton HVAC" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
