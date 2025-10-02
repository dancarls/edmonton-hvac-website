
import { useState } from 'react';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';

export default function CommercialServices() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service_type: '',
    property_type: '',
    urgency: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const formBody = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        formBody.append(key, value);
      });

      const response = await fetch('https://readdy.ai/api/form/d3ad1vog3i95tm0o9cig', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody.toString(),
      });

      if (response.ok) {
        setSubmitStatus('Thank you! We\'ll contact you soon about your commercial HVAC needs.');
        setFormData({ name: '', phone: '', email: '', service_type: '', property_type: '', urgency: '', message: '' });
      } else {
        setSubmitStatus('Something went wrong. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const commercialServices = [
    {
      icon: 'ri-building-line',
      title: 'System Installation',
      description: 'Complete commercial HVAC system design and installation for office buildings, retail spaces, restaurants, and industrial facilities.',
      features: ['Custom System Design', 'Professional Installation', 'Code Compliance', 'Energy Efficient', 'Project Management']
    },
    {
      icon: 'ri-tools-line',
      title: 'Commercial Repairs',
      description: 'Emergency and scheduled commercial HVAC repairs to minimize downtime and maintain comfortable business environments.',
      features: ['24/7 Emergency Service', 'Rapid Response', 'Minimal Downtime', 'All System Types', 'Preventive Solutions']
    },
    {
      icon: 'ri-temp-cold-line',
      title: 'Refrigeration Services',
      description: 'Commercial refrigeration installation, repair, and maintenance for restaurants, grocery stores, and food service businesses.',
      features: ['Walk-in Coolers', 'Display Cases', 'Ice Machines', 'Food Safety Compliance', 'Energy Optimization']
    },
    {
      icon: 'ri-dashboard-line',
      title: 'Building Automation',
      description: 'Smart building automation systems for optimal energy efficiency, comfort control, and remote monitoring capabilities.',
      features: ['Smart Controls', 'Remote Monitoring', 'Energy Management', 'Automated Scheduling', 'Cost Savings']
    },
    {
      icon: 'ri-leaf-line',
      title: 'Energy Solutions',
      description: 'Energy-efficient HVAC solutions and retrofits to reduce operating costs and meet sustainability goals for your business.',
      features: ['Energy Audits', 'Efficiency Upgrades', 'Rebate Assistance', 'Cost Analysis', 'Sustainability Planning']
    },
    {
      icon: 'ri-alarm-warning-line',
      title: 'Emergency Commercial Service',
      description: 'Priority emergency HVAC service for commercial properties to restore comfort and prevent business interruption.',
      features: ['Priority Response', 'Business Continuity', 'Temporary Solutions', 'Fast Repairs', 'Preventive Measures']
    }
  ];

  const serviceAreas = [
    'Downtown Edmonton', 'Sherwood Park', 'St. Albert', 'Spruce Grove',
    'Stony Plain', 'Fort Saskatchewan', 'Beaumont', 'Devon',
    'Morinville', 'Leduc', 'Calmar', 'Bon Accord',
    'Legal', 'Gibbons', 'Redwater', 'Lamont',
    'Bruderheim', 'Andrew', 'Mundare', 'Vegreville'
  ];

  const faqs = [
    {
      question: 'What types of commercial properties do you service?',
      answer: 'We service all types of commercial properties including office buildings, retail stores, restaurants, warehouses, medical facilities, schools, and industrial buildings.'
    },
    {
      question: 'Do you provide 24/7 emergency service for businesses?',
      answer: 'Yes! We understand that HVAC issues can seriously impact your business. We provide 24/7 emergency service with priority response for commercial customers.'
    },
    {
      question: 'Can you help with energy efficiency and cost reduction?',
      answer: 'Absolutely! We offer energy audits, efficiency upgrades, and can help you access utility rebates and incentives to reduce your operating costs.'
    },
    {
      question: 'Do you offer commercial maintenance contracts?',
      answer: 'Yes, we provide comprehensive commercial maintenance agreements with regular inspections, priority service, and discounted repairs to keep your systems running reliably.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative py-24 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://readdy.ai/api/search-image?query=Professional%20commercial%20HVAC%20technician%20installing%20large%20rooftop%20commercial%20air%20conditioning%20unit%20on%20modern%20office%20building%20in%20Abbotsford%2C%20commercial%20HVAC%20installation%2C%20business%20building%20exterior%2C%20professional%20commercial%20service%2C%20industrial%20HVAC%20equipment&width=1920&height=800&seq=commercial-hero-1&orientation=landscape')`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Commercial HVAC Services in <span className="text-blue-400">Edmonton, AB</span>
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-200">
              Expert commercial HVAC installation, repair, and maintenance for businesses. Ensure optimal comfort and productivity with our reliable commercial HVAC solutions across Edmonton and surrounding Alberta communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('commercial-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors whitespace-nowrap cursor-pointer"
              >
                Get Free Commercial Quote
              </button>
              <button 
                onClick={() => document.querySelector('#vapi-widget-floating-button')?.click()}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors text-center whitespace-nowrap cursor-pointer"
              >
                Talk to Our AI Assistant
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Complete Commercial HVAC Solutions
            </h2>
            <p className="text-xl text-gray-600">
              From system installation to building automation, we handle all your commercial HVAC needs in Edmonton
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {commercialServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <i className={`${service.icon} text-2xl text-blue-600`}></i>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-4 h-4 flex items-center justify-center mr-2">
                        <i className="ri-check-line text-green-500"></i>
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Commercial Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our Commercial HVAC Services?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-time-line text-xl text-blue-600"></i>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Minimal Business Disruption</h3>
                    <p className="text-gray-600">We work around your business schedule to minimize disruption and maintain your operations during installation and repairs.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-money-dollar-circle-line text-xl text-green-600"></i>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Cost-Effective Solutions</h3>
                    <p className="text-gray-600">Our energy-efficient systems and preventive maintenance programs help reduce your operating costs and maximize ROI.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-shield-check-line text-xl text-blue-600"></i>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Commercial Expertise</h3>
                    <p className="text-gray-600">Our technicians specialize in commercial systems and understand the unique requirements of business environments.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-xl p-4">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20HVAC%20technician%20servicing%20large%20commercial%20rooftop%20unit%20on%20modern%20office%20building%2C%20commercial%20HVAC%20maintenance%2C%20business%20building%20rooftop%20with%20city%20skyline%2C%20professional%20commercial%20service%2C%20industrial%20equipment%20maintenance%20in%20Abbotsford&width=600&height=400&seq=commercial-service-1&orientation=landscape"
                alt="Professional commercial HVAC service"
                className="w-full h-auto rounded-lg object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Property Types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Commercial Properties We Serve
            </h2>
            <p className="text-xl text-gray-600">
              Professional HVAC services for all types of commercial properties in Abbotsford
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-10 h-10 flex items-center justify-center">
                  <i className="ri-building-line text-3xl text-blue-600"></i>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Office Buildings</h3>
              <p className="text-gray-600">
                Climate control for professional office environments and corporate facilities
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-10 h-10 flex items-center justify-center">
                  <i className="ri-store-line text-3xl text-green-600"></i>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Retail Spaces</h3>
              <p className="text-gray-600">
                Comfortable shopping environments for retail stores and shopping centers
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-10 h-10 flex items-center justify-center">
                  <i className="ri-restaurant-line text-3xl text-blue-600"></i>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Restaurants</h3>
              <p className="text-gray-600">
                Kitchen ventilation, dining area comfort, and refrigeration systems
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-10 h-10 flex items-center justify-center">
                  <i className="ri-hospital-line text-3xl text-green-600"></i>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Healthcare</h3>
              <p className="text-gray-600">
                Precise climate control for medical facilities and healthcare environments
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Edmonton Area Commercial Service Coverage
            </h2>
            <p className="text-xl text-gray-600">
              Professional commercial HVAC services throughout Edmonton and surrounding Alberta business districts
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
              ></iframe>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">
                Edmonton Areas We Serve for Commercial HVAC
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {serviceAreas.map((area, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">{area}</span>
                  </div>
                ))}
              </div>
              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-blue-900 mb-2">
                  Need commercial service in other Edmonton areas?
                </h4>
                <p className="text-blue-800 mb-4">
                  We serve businesses throughout the Greater Edmonton Area! Contact us to discuss your commercial HVAC project location.
                </p>
                <button 
                  onClick={() => document.querySelector('#vapi-widget-floating-button')?.click()}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block whitespace-nowrap cursor-pointer"
                >
                  Check Coverage with AI Assistant
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Service Request Form */}
      <section id="commercial-form" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Request Commercial HVAC Service
              </h2>
              <p className="text-lg text-gray-600">
                Get a free quote for your commercial HVAC needs. We'll respond quickly with expert recommendations and pricing.
              </p>
            </div>
            <form onSubmit={handleSubmit} data-readdy-form id="commercial-service-form" className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Contact Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
              </div>
              <div>
                <label htmlFor="service_type" className="block text-sm font-medium text-gray-700 mb-2">
                  Service Type *
                </label>
                <div className="relative">
                  <select
                    id="service_type"
                    name="service_type"
                    required
                    value={formData.service_type}
                    onChange={(e) => setFormData({...formData, service_type: e.target.value})}
                    className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm appearance-none"
                  >
                    <option value="">Select commercial service</option>
                    <option value="system-installation">System Installation</option>
                    <option value="commercial-repairs">Commercial Repairs</option>
                    <option value="refrigeration">Refrigeration Services</option>
                    <option value="building-automation">Building Automation</option>
                    <option value="energy-solutions">Energy Solutions</option>
                    <option value="emergency-service">Emergency Service</option>
                    <option value="maintenance-contract">Maintenance Contract</option>
                    <option value="other">Other</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <i className="ri-arrow-down-s-line text-gray-400"></i>
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="property_type" className="block text-sm font-medium text-gray-700 mb-2">
                  Business Type *
                </label>
                <div className="relative">
                  <select
                    id="property_type"
                    name="property_type"
                    required
                    value={formData.property_type}
                    onChange={(e) => setFormData({...formData, property_type: e.target.value})}
                    className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm appearance-none"
                  >
                    <option value="">Select business type</option>
                    <option value="office-building">Office Building</option>
                    <option value="retail-store">Retail Store</option>
                    <option value="restaurant">Restaurant</option>
                    <option value="warehouse">Warehouse</option>
                    <option value="medical-facility">Medical Facility</option>
                    <option value="school">School/Education</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="other">Other</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <i className="ri-arrow-down-s-line text-gray-400"></i>
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">
                  How urgent is this?
                </label>
                <div className="relative">
                  <select
                    id="urgency"
                    name="urgency"
                    value={formData.urgency}
                    onChange={(e) => setFormData({...formData, urgency: e.target.value})}
                    className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm appearance-none"
                  >
                    <option value="">Select urgency</option>
                    <option value="emergency">Emergency - System Down</option>
                    <option value="urgent">Urgent - Within 24 hours</option>
                    <option value="soon">This Week</option>
                    <option value="planning">Planning New Project</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <i className="ri-arrow-down-s-line text-gray-400"></i>
                  </div>
                </div>
              </div>
              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  maxLength={500}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Tell us about your commercial HVAC needs, building size, current systems, or project requirements..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm resize-none"
                ></textarea>
                <p className="text-xs text-gray-500 mt-1">{formData.message.length}/500 characters</p>
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors disabled:opacity-50 whitespace-nowrap cursor-pointer"
                >
                  {isSubmitting ? 'Submitting...' : 'Request Commercial Service'}
                </button>
                {submitStatus && (
                  <p className={`mt-4 text-center ${submitStatus.includes('Thank you') ? 'text-green-600' : 'text-red-600'}`}>
                    {submitStatus}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about commercial HVAC services in Edmonton
            </p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
            <div className="w-10 h-10 flex items-center justify-center">
              <i className="ri-building-line text-3xl text-blue-600"></i>
            </div>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Keep Your Business Comfortable
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Don't let HVAC issues disrupt your business. Get reliable commercial HVAC service from our Edmonton experts.
          </p>
          <button 
            onClick={() => document.querySelector('#vapi-widget-floating-button')?.click()}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-colors inline-block whitespace-nowrap cursor-pointer"
          >
            Get Commercial Service Now
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
