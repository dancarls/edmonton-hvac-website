
import { useState } from 'react';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';

export default function MaintenanceServices() {
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

      const response = await fetch('https://readdy.ai/api/form/d3ad1vog3i95tm0o9ci0', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody.toString(),
      });

      if (response.ok) {
        setSubmitStatus('Thank you! We\'ll contact you soon about your maintenance service needs.');
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

  const maintenanceServices = [
    {
      icon: 'ri-search-line',
      title: 'Annual Inspections',
      description: 'Comprehensive annual HVAC system inspections to identify potential issues, ensure optimal performance, and maintain warranty coverage.',
      features: ['Complete System Check', 'Performance Testing', 'Safety Inspection', 'Efficiency Analysis', 'Warranty Compliance']
    },
    {
      icon: 'ri-filter-line',
      title: 'Filter Replacement',
      description: 'Regular air filter replacement services with high-quality filters to maintain air quality and system efficiency.',
      features: ['High-Quality Filters', 'Regular Replacement', 'Filter Upgrades', 'Allergy Relief', 'System Protection']
    },
    {
      icon: 'ri-temp-hot-line',
      title: 'Thermostat Upgrades',
      description: 'Smart thermostat installation and programming for improved comfort, energy savings, and remote control capabilities.',
      features: ['Smart Thermostats', 'Energy Savings', 'Remote Control', 'Programming Setup', 'Compatibility Check']
    },
    {
      icon: 'ri-file-shield-line',
      title: 'Maintenance Agreements',
      description: 'Comprehensive maintenance plans with priority service, discounted repairs, and scheduled tune-ups to keep your systems running smoothly.',
      features: ['Priority Service', 'Discounted Repairs', 'Scheduled Tune-ups', 'Extended Warranties', 'Peace of Mind']
    },
    {
      icon: 'ri-tools-line',
      title: 'System Tune-ups',
      description: 'Professional HVAC system tune-ups including cleaning, calibration, and optimization for peak performance and efficiency.',
      features: ['System Cleaning', 'Performance Optimization', 'Calibration', 'Efficiency Improvement', 'Preventive Care']
    },
    {
      icon: 'ri-heart-pulse-line',
      title: 'Preventive Care',
      description: 'Proactive maintenance services to prevent breakdowns, extend equipment life, and maintain optimal indoor comfort year-round.',
      features: ['Breakdown Prevention', 'Equipment Longevity', 'Cost Savings', 'Reliability', 'Comfort Assurance']
    }
  ];

  const serviceAreas = [
    'Summerside', 'Sherwood Park', 'St. Albert', 'Spruce Grove',
    'Stony Plain', 'Fort Saskatchewan', 'Beaumont', 'Devon',
    'Morinville', 'Leduc', 'Calmar', 'Bon Accord',
    'Legal', 'Gibbons', 'Redwater', 'Lamont',
    'Bruderheim', 'Andrew', 'Mundare', 'Vegreville'
  ];

  const faqs = [
    {
      question: 'How often should I have my HVAC system serviced?',
      answer: 'It\'s recommended to have your HVAC system professionally serviced at least once a year, ideally before heating or cooling seasons begin, to ensure it runs efficiently and reliably.'
    },
    {
      question: 'What are the benefits of regular HVAC maintenance?',
      answer: 'Maintenance helps improve efficiency, lower bills, extend system life, improve air quality, prevent breakdowns, maintain warranties, and ensure safe operation.'
    },
    {
      question: 'What is an HVAC tune-up and what does it include?',
      answer: 'A tune-up involves system cleaning, inspection, lubrication, refrigerant checks, filter replacement, calibration, safety tests, and performance optimization.'
    },
    {
      question: 'Do maintenance agreements save money?',
      answer: 'Yes! Maintenance agreements typically include discounted repairs, priority service, and prevent costly breakdowns. The savings often exceed the plan cost over time.'
    },
    {
      question: 'Can regular maintenance extend my system\'s life?',
      answer: 'Absolutely! Regular maintenance can extend HVAC system life by 5-10 years by preventing wear, maintaining efficiency, and catching issues before they become major problems.'
    },
    {
      question: 'What should I look for when choosing an HVAC contractor?',
      answer: 'Look for licensed, insured professionals with strong customer reviews, fair pricing, local experience, transparent estimates, and comprehensive maintenance programs.'
    },
    {
      question: 'How can I improve my home\'s energy efficiency with HVAC maintenance?',
      answer: 'Regular maintenance, cleaning coils, changing filters, sealing ductwork, calibrating thermostats, and keeping systems tuned help reduce energy waste significantly.'
    },
    {
      question: 'What\'s included in a typical maintenance visit?',
      answer: 'Our maintenance includes system inspection, cleaning, filter replacement, performance testing, safety checks, lubrication, and minor adjustments to optimize efficiency.'
    },
    {
      question: 'When is the best time to schedule HVAC maintenance?',
      answer: 'Schedule heating maintenance in fall and cooling maintenance in spring, before peak usage seasons. This ensures optimal performance when you need it most.'
    },
    {
      question: 'What financing options are available for maintenance plans?',
      answer: 'We offer flexible payment options for maintenance agreements, making it easy to budget for regular service and ensure your systems stay in peak condition year-round.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative py-24 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://readdy.ai/api/search-image?query=Professional%20HVAC%20technician%20performing%20detailed%20maintenance%20service%20on%20residential%20heating%20and%20cooling%20system%2C%20checking%20components%20with%20diagnostic%20tools%2C%20clean%20organized%20work%20environment%2C%20preventive%20maintenance%20service%2C%20professional%20HVAC%20care&width=1920&height=800&seq=maintenance-hero-1&orientation=landscape')`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              HVAC Maintenance Services in <span className="text-blue-400">Edmonton, AB</span>
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-200">
              Comprehensive HVAC maintenance and tune-up services. Keep your heating and cooling systems running efficiently with our preventive maintenance programs throughout Edmonton and surrounding Alberta communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('maintenance-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors whitespace-nowrap cursor-pointer"
              >
                Schedule Maintenance
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

      {/* Maintenance Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Complete HVAC Maintenance Solutions
            </h2>
            <p className="text-xl text-gray-600">
              From annual inspections to maintenance agreements, we keep your HVAC systems running efficiently in Edmonton
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {maintenanceServices.map((service, index) => (
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

      {/* Maintenance Plans */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Choose Your Maintenance Plan
            </h2>
            <p className="text-xl text-gray-600">
              Flexible maintenance plans to fit your needs and budget
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 flex items-center justify-center">
                  <i className="ri-home-line text-2xl text-blue-600"></i>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Basic Plan</h3>
              <p className="text-gray-600 mb-6">Perfect for newer systems or budget-conscious homeowners</p>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center">
                  <div className="w-4 h-4 flex items-center justify-center mr-3">
                    <i className="ri-check-line text-green-500"></i>
                  </div>
                  Annual system inspection
                </li>
                <li className="flex items-center">
                  <div className="w-4 h-4 flex items-center justify-center mr-3">
                    <i className="ri-check-line text-green-500"></i>
                  </div>
                  Filter replacement
                </li>
                <li className="flex items-center">
                  <div className="w-4 h-4 flex items-center justify-center mr-3">
                    <i className="ri-check-line text-green-500"></i>
                  </div>
                  Basic cleaning
                </li>
                <li className="flex items-center">
                  <div className="w-4 h-4 flex items-center justify-center mr-3">
                    <i className="ri-check-line text-green-500"></i>
                  </div>
                  10% repair discount
                </li>
              </ul>
              <button 
                onClick={() => document.getElementById('maintenance-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap"
              >
                Choose Basic
              </button>
            </div>
            
            <div className="bg-green-50 rounded-xl p-8 text-center border-2 border-green-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">Most Popular</span>
              </div>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 flex items-center justify-center">
                  <i className="ri-star-line text-2xl text-green-600"></i>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Premium Plan</h3>
              <p className="text-gray-600 mb-6">Complete care for maximum comfort and efficiency</p>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center">
                  <div className="w-4 h-4 flex items-center justify-center mr-3">
                    <i className="ri-check-line text-green-500"></i>
                  </div>
                  Bi-annual system inspection
                </li>
                <li className="flex items-center">
                  <div className="w-4 h-4 flex items-center justify-center mr-3">
                    <i className="ri-check-line text-green-500"></i>
                  </div>
                  Filter replacement included
                </li>
                <li className="flex items-center">
                  <div className="w-4 h-4 flex items-center justify-center mr-3">
                    <i className="ri-check-line text-green-500"></i>
                  </div>
                  Complete system cleaning
                </li>
                <li className="flex items-center">
                  <div className="w-4 h-4 flex items-center justify-center mr-3">
                    <i className="ri-check-line text-green-500"></i>
                  </div>
                  Priority service
                </li>
                <li className="flex items-center">
                  <div className="w-4 h-4 flex items-center justify-center mr-3">
                    <i className="ri-check-line text-green-500"></i>
                  </div>
                  20% repair discount
                </li>
              </ul>
              <button 
                onClick={() => document.getElementById('maintenance-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors cursor-pointer whitespace-nowrap"
              >
                Choose Premium
              </button>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 flex items-center justify-center">
                  <i className="ri-building-line text-2xl text-blue-600"></i>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Commercial Plan</h3>
              <p className="text-gray-600 mb-6">Comprehensive maintenance for business properties</p>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center">
                  <div className="w-4 h-4 flex items-center justify-center mr-3">
                    <i className="ri-check-line text-green-500"></i>
                  </div>
                  Quarterly inspections
                </li>
                <li className="flex items-center">
                  <div className="w-4 h-4 flex items-center justify-center mr-3">
                    <i className="ri-check-line text-green-500"></i>
                  </div>
                  Emergency service priority
                </li>
                <li className="flex items-center">
                  <div className="w-4 h-4 flex items-center justify-center mr-3">
                    <i className="ri-check-line text-green-500"></i>
                  </div>
                  Customized maintenance
                </li>
                <li className="flex items-center">
                  <div className="w-4 h-4 flex items-center justify-center mr-3">
                    <i className="ri-check-line text-green-500"></i>
                  </div>
                  Detailed reporting
                </li>
                <li className="flex items-center">
                  <div className="w-4 h-4 flex items-center justify-center mr-3">
                    <i className="ri-check-line text-green-500"></i>
                  </div>
                  25% repair discount
                </li>
              </ul>
              <button 
                onClick={() => document.getElementById('maintenance-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap"
              >
                Choose Commercial
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Maintenance Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our Maintenance Services?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-money-dollar-circle-line text-xl text-blue-600"></i>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Cost Savings</h3>
                    <p className="text-gray-600">Regular maintenance prevents costly breakdowns and extends equipment life, saving you thousands in replacement costs.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-leaf-line text-xl text-green-600"></i>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Energy Efficiency</h3>
                    <p className="text-gray-600">Well-maintained systems run more efficiently, reducing energy consumption and lowering your utility bills.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-shield-check-line text-xl text-blue-600"></i>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Reliability & Peace of Mind</h3>
                    <p className="text-gray-600">Regular maintenance reduces the risk of unexpected breakdowns, ensuring your comfort when you need it most.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-xl p-4">
              <img 
                src="https://readdy.ai/api/search-image?query=HVAC%20technician%20performing%20detailed%20system%20maintenance%20and%20inspection%2C%20professional%20maintenance%20checklist%2C%20modern%20HVAC%20equipment%20servicing%20in%20Abbotsford%20home%2C%20preventive%20care%20service%2C%20professional%20maintenance%20work%2C%20system%20optimization&width=600&height=400&seq=maintenance-service-1&orientation=landscape"
                alt="Professional maintenance service"
                className="w-full h-auto rounded-lg object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Edmonton Area Maintenance Service Coverage
            </h2>
            <p className="text-xl text-gray-600">
              Professional HVAC maintenance services throughout Edmonton and surrounding Alberta communities
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
                Edmonton Areas We Serve for HVAC Maintenance
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
                  Need maintenance service in other Edmonton areas?
                </h4>
                <p className="text-blue-800 mb-4">
                  We serve the entire Greater Edmonton Area! Contact us to schedule maintenance in your specific location.
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

      {/* Maintenance Service Request Form */}
      <section id="maintenance-form" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Schedule Maintenance Service
              </h2>
              <p className="text-lg text-gray-600">
                Keep your HVAC systems running efficiently with our professional maintenance services.
              </p>
            </div>
            <form onSubmit={handleSubmit} data-readdy-form id="maintenance-service-form" className="grid md:grid-cols-2 gap-6">
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
                    <option value="">Select maintenance service</option>
                    <option value="annual-inspection">Annual Inspection</option>
                    <option value="filter-replacement">Filter Replacement</option>
                    <option value="thermostat-upgrade">Thermostat Upgrade</option>
                    <option value="maintenance-agreement">Maintenance Agreement</option>
                    <option value="system-tune-up">System Tune-up</option>
                    <option value="preventive-care">Preventive Care</option>
                    <option value="other">Other</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <i className="ri-arrow-down-s-line text-gray-400"></i>
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="property_type" className="block text-sm font-medium text-gray-700 mb-2">
                  Property Type
                </label>
                <div className="relative">
                  <select
                    id="property_type"
                    name="property_type"
                    value={formData.property_type}
                    onChange={(e) => setFormData({...formData, property_type: e.target.value})}
                    className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm appearance-none"
                  >
                    <option value="">Select property type</option>
                    <option value="single-family">Single Family Home</option>
                    <option value="townhouse">Townhouse</option>
                    <option value="condo">Condo/Apartment</option>
                    <option value="commercial">Commercial Building</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <i className="ri-arrow-down-s-line text-gray-400"></i>
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Timing
                </label>
                <div className="relative">
                  <select
                    id="urgency"
                    name="urgency"
                    value={formData.urgency}
                    onChange={(e) => setFormData({...formData, urgency: e.target.value})}
                    className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm appearance-none"
                  >
                    <option value="">Select timing preference</option>
                    <option value="this-week">This Week</option>
                    <option value="next-week">Next Week</option>
                    <option value="this-month">This Month</option>
                    <option value="flexible">Flexible Scheduling</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <i className="ri-arrow-down-s-line text-gray-400"></i>
                  </div>
                </div>
              </div>
              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  maxLength={500}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Tell us about your HVAC systems, maintenance history, or specific maintenance needs..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm resize-none"
                ></textarea>
                <p className="text-xs text-gray-500 mt-1">{formData.message.length}/500 characters</p>
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-blue-7 00 transition-colors disabled:opacity-50 whitespace-nowrap cursor-pointer"
                >
                  {isSubmitting ? 'Submitting...' : 'Schedule Maintenance Service'}
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
              Common questions about HVAC maintenance services in Edmonton
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
      <section className="py-16 bg-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
            <div className="w-10 h-10 flex items-center justify-center">
              <i className="ri-tools-line text-3xl text-green-600"></i>
            </div>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Keep Your HVAC Running Smoothly
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Don't wait for breakdowns. Protect your investment with professional HVAC maintenance from our Edmonton experts.
          </p>
          <button 
            onClick={() => document.querySelector('#vapi-widget-floating-button')?.click()}
            className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-colors inline-block whitespace-nowrap cursor-pointer"
          >
            Schedule Maintenance Now
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
