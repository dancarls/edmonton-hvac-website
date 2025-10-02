
import { useState } from 'react';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';

export default function CoolingServices() {
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

      const response = await fetch('https://readdy.ai/api/form/d3ad1vog3i95tm0o9cgg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody.toString(),
      });

      if (response.ok) {
        setSubmitStatus('Thank you! We\'ll contact you soon about your cooling service needs.');
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

  const coolingServices = [
    {
      icon: 'ri-snowy-line',
      title: 'AC Installation',
      description: 'Professional air conditioning installation for central air systems, ductless mini-splits, and window units. Energy-efficient models with manufacturer warranties.',
      features: ['Central Air Systems', 'Ductless Mini-Splits', 'High-Efficiency Models', 'Professional Installation', 'Warranty Coverage']
    },
    {
      icon: 'ri-tools-line',
      title: 'AC Repair & Service',
      description: 'Expert air conditioning repair for all makes and models. From refrigerant leaks to compressor issues, we diagnose and fix AC problems quickly.',
      features: ['All Makes & Models', 'Same-Day Service', 'Refrigerant Services', 'Compressor Repair', '24/7 Emergency AC']
    },
    {
      icon: 'ri-settings-3-line',
      title: 'AC Maintenance',
      description: 'Regular air conditioning maintenance to keep your system running efficiently. Includes cleaning, tune-ups, and seasonal preparation.',
      features: ['Seasonal Tune-ups', 'Filter Replacement', 'Coil Cleaning', 'System Inspection', 'Preventive Care']
    },
    {
      icon: 'ri-building-4-line',
      title: 'Central Air Systems',
      description: 'Complete central air conditioning systems for whole-home cooling. Ductwork installation, zoning systems, and smart controls available.',
      features: ['Whole-Home Cooling', 'Ductwork Installation', 'Zoning Systems', 'Smart Thermostats', 'Energy Efficient']
    },
    {
      icon: 'ri-home-wifi-line',
      title: 'Ductless Mini-Splits',
      description: 'Ductless mini-split systems perfect for targeted cooling without ductwork. Quiet operation and individual room control.',
      features: ['No Ductwork Required', 'Individual Room Control', 'Quiet Operation', 'Heat Pump Options', 'Easy Installation']
    },
    {
      icon: 'ri-alarm-warning-line',
      title: 'Emergency AC Repairs',
      description: '24/7 emergency air conditioning repairs when your AC fails during hot weather. Fast response to restore your comfort quickly.',
      features: ['24/7 Availability', 'Rapid Response', 'Weekend Service', 'Emergency Diagnostics', 'Same-Day Repairs']
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
      question: 'How often should I have my air conditioning system serviced?',
      answer: 'It\'s recommended to have your AC system professionally serviced annually, ideally in spring before cooling season begins, to ensure optimal performance and efficiency.'
    },
    {
      question: 'What signs indicate my AC system needs repair?',
      answer: 'Common signs include weak airflow, warm air from vents, strange noises, unusual smells, frequent cycling, rising energy bills, and ice formation on the unit.'
    },
    {
      question: 'How long does a typical air conditioning system last?',
      answer: 'A well-maintained central AC system typically lasts 15-20 years, while ductless mini-splits can last 15-25 years with proper care and maintenance.'
    },
    {
      question: 'What size air conditioner do I need for my home?',
      answer: 'A professional assessment calculates proper size based on your home\'s square footage, insulation, windows, and Edmonton\'s climate conditions.'
    },
    {
      question: 'How much does air conditioning installation cost?',
      answer: 'Costs vary widely depending on system type and size but typically range from $3,000 to $10,000+ for central air systems, with ductless systems often less expensive.'
    },
    {
      question: 'What energy efficiency ratings should I consider for AC?',
      answer: 'Higher SEER ratings for cooling (above 14, preferably 16+) are recommended. High-efficiency systems qualify for rebates and significantly reduce energy costs.'
    },
    {
      question: 'How often should I change my AC air filters?',
      answer: 'AC filters should typically be changed every 1-3 months during cooling season, more often if you have pets, allergies, or live in a dusty area.'
    },
    {
      question: 'What are common causes of AC system breakdowns?',
      answer: 'Neglected maintenance, dirty filters, refrigerant leaks, electrical issues, and worn compressor components are typical causes of AC system failures.'
    },
    {
      question: 'Can a ductless mini-split work in Edmonton\'s climate?',
      answer: 'Yes! Modern ductless systems work efficiently in Edmonton\'s climate and can provide both heating and cooling with excellent energy efficiency, even in Alberta\'s temperature extremes.'
    },
    {
      question: 'What financing options are available for AC installation?',
      answer: 'We offer flexible financing plans, and there may be government or utility rebates available for energy-efficient AC upgrades in Alberta.'
    },
    {
      question: 'What is SEER rating and why does it matter?',
      answer: 'Seasonal Energy Efficiency Ratio measures AC efficiency; higher SEER ratings mean less energy used and lower utility bills. Look for SEER 16+ for best efficiency.'
    },
    {
      question: 'Why is my air conditioner freezing up?',
      answer: 'AC freeze-up is often due to low refrigerant levels, dirty air filters, blocked airflow, or thermostat issues. Professional diagnosis is needed to prevent damage.'
    },
    {
      question: 'How can I reduce my AC energy bills?',
      answer: 'Regular maintenance, clean filters, proper insulation, programmable thermostats, sealing air leaks, and upgrading to high-efficiency systems all help reduce costs.'
    },
    {
      question: 'Should I cover my AC unit in winter?',
      answer: 'It\'s not typically recommended to completely cover your AC unit as it can trap moisture and cause damage. A partial cover for the top is usually sufficient.'
    },
    {
      question: 'What are the benefits of ductless mini-split systems?',
      answer: 'Mini-splits provide individual room control (zoning), are energy efficient, work well in homes without ducts, operate quietly, and can provide both heating and cooling.'
    },
    {
      question: 'When is it time to replace my air conditioner?',
      answer: 'Consider replacement when your AC is over 10-15 years old, requires frequent repairs, has declining efficiency, or repair costs exceed 50% of replacement cost.'
    },
    {
      question: 'How do refrigerants affect AC performance and environment?',
      answer: 'Proper refrigerant levels ensure optimal performance and efficiency. Newer refrigerants like R-410A are more environmentally friendly than older types like R-22.'
    },
    {
      question: 'Can I use my air conditioner as a heat pump?',
      answer: 'Only if it\'s specifically designed as a heat pump system. Standard AC units cannot provide efficient heating - they\'re cooling-only systems.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative py-24 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://readdy.ai/api/search-image?query=Professional%20HVAC%20technician%20installing%20modern%20central%20air%20conditioning%20unit%20outside%20Abbotsford%20home%2C%20summer%20cooling%20installation%2C%20clean%20residential%20exterior%2C%20modern%20AC%20condenser%20unit%2C%20professional%20cooling%20system%20installation%2C%20Canadian%20residential%20setting&width=1920&height=800&seq=cooling-hero-1&orientation=landscape')`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Expert Cooling Services in <span className="text-blue-400">Edmonton, AB</span>
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-200">
              Professional air conditioning installation, repair, and maintenance services. Beat the summer heat with our expert cooling solutions throughout Edmonton and surrounding Alberta communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('cooling-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors whitespace-nowrap cursor-pointer"
              >
                Get Free Cooling Quote
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

      {/* Cooling Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Complete Cooling Solutions
            </h2>
            <p className="text-xl text-gray-600">
              From AC installation to emergency repairs, we handle all your cooling needs in Edmonton
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coolingServices.map((service, index) => (
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

      {/* Why Choose Our Cooling Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our Cooling Experts?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-award-line text-xl text-blue-600"></i>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Certified AC Technicians</h3>
                    <p className="text-gray-600">Our cooling specialists are EPA certified for refrigerant handling and trained on all major AC brands and systems.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-speed-up-line text-xl text-green-600"></i>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Same-Day AC Service</h3>
                    <p className="text-gray-600">Beat the heat with our same-day air conditioning service. We prioritize AC emergencies during hot weather.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-leaf-line text-xl text-blue-600"></i>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Energy-Efficient Solutions</h3>
                    <p className="text-gray-600">We install high-efficiency AC systems that reduce energy costs and qualify for utility rebates and tax credits.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-xl p-4">
              <img 
                src="https://readdy.ai/api/search-image?query=HVAC%20technician%20performing%20professional%20air%20conditioning%20maintenance%20service%2C%20cleaning%20AC%20coils%20and%20checking%20refrigerant%20levels%2C%20modern%20residential%20cooling%20system%2C%20professional%20AC%20service%20in%20Abbotsford%20home%2C%20clean%20technical%20work%20environment&width=600&height=400&seq=cooling-service-1&orientation=landscape"
                alt="Professional cooling service"
                className="w-full h-auto rounded-lg object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Edmonton Area Cooling Service Coverage
            </h2>
            <p className="text-xl text-gray-600">
              Professional air conditioning services throughout Edmonton and surrounding Alberta communities
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
                Edmonton Areas We Serve for Cooling Services
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
                  Need cooling service in other Edmonton areas?
                </h4>
                <p className="text-blue-800 mb-4">
                  We serve the entire Greater Edmonton Area! Contact us to confirm service availability in your area.
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

      {/* Cooling Service Request Form */}
      <section id="cooling-form" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Request Cooling Service
              </h2>
              <p className="text-lg text-gray-600">
                Get a free quote for your air conditioning needs. We'll respond quickly with pricing and availability.
              </p>
            </div>
            <form onSubmit={handleSubmit} data-readdy-form id="cooling-service-form" className="grid md:grid-cols-2 gap-6">
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
                    <option value="">Select cooling service</option>
                    <option value="ac-installation">AC Installation</option>
                    <option value="ac-repair">AC Repair</option>
                    <option value="central-air">Central Air System</option>
                    <option value="ductless">Ductless Mini-Split</option>
                    <option value="ac-maintenance">AC Maintenance</option>
                    <option value="emergency-ac">Emergency AC Repair</option>
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
                  How urgent is this?
                </label>
                <div className="relative">
                  <select
                    id="urgency"
                    name="urgency"
                    value={formData.urgency}
                    onChange={(e) => setFormData({...formData, urgency: e.target.value})}
                    className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus-ring-2 focus:ring-blue-500 focus:border-transparent text-sm appearance-none"
                  >
                    <option value="">Select urgency</option>
                    <option value="emergency">Emergency - No AC</option>
                    <option value="urgent">Urgent - Within 24 hours</option>
                    <option value="soon">This Week</option>
                    <option value="planning">Planning Ahead</option>
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
                  placeholder="Tell us about your cooling system, any issues you're experiencing, or what you're looking for..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus-ring-2 focus:ring-blue-500 focus:border-transparent text-sm resize-none"
                ></textarea>
                <p className="text-xs text-gray-500 mt-1">{formData.message.length}/500 characters</p>
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors disabled:opacity-50 whitespace-nowrap cursor-pointer"
                >
                  {isSubmitting ? 'Submitting...' : 'Request Cooling Service'}
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about cooling services in Edmonton
            </p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
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

      {/* Emergency CTA */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
            <div className="w-10 h-10 flex items-center justify-center">
              <i className="ri-snowy-line text-3xl text-blue-600"></i>
            </div>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            AC Broken? We're Here to Help!
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Don't suffer in the heat with a broken air conditioner. Our emergency AC repair team is available 24/7 throughout Edmonton.
          </p>
          <button 
            onClick={() => document.querySelector('#vapi-widget-floating-button')?.click()}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-colors inline-block whitespace-nowrap cursor-pointer"
          >
            Get Emergency AC Help Now
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
