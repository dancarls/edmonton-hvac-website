
import { useState } from 'react';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';

export default function AirQualityServices() {
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

      const response = await fetch('https://readdy.ai/api/form/d3ad1vog3i95tm0o9cg0', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody.toString(),
      });

      if (response.ok) {
        setSubmitStatus('Thank you! We\'ll contact you soon about your air quality service needs.');
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

  const airQualityServices = [
    {
      icon: 'ri-flashlight-line',
      title: 'UV Air Purifiers',
      description: 'Advanced UV-C light air purification systems that eliminate bacteria, viruses, mold, and other airborne pathogens from your HVAC system.',
      features: ['UV-C Light Technology', 'Pathogen Elimination', 'HVAC Integration', 'Low Maintenance', 'Continuous Protection']
    },
    {
      icon: 'ri-filter-3-line',
      title: 'Air Filtration Systems',
      description: 'High-efficiency air filtration systems including HEPA filters, electronic air cleaners, and media filters for superior air quality.',
      features: ['HEPA Filtration', 'Electronic Air Cleaners', 'Media Filters', 'Allergen Removal', 'Dust Control']
    },
    {
      icon: 'ri-drop-line',
      title: 'Humidifiers & Dehumidifiers',
      description: 'Whole-home humidity control systems to maintain optimal indoor humidity levels for comfort and health year-round.',
      features: ['Whole-Home Humidity Control', 'Mold Prevention', 'Comfort Enhancement', 'Wood Protection', 'Health Benefits']
    },
    {
      icon: 'ri-alarm-warning-line',
      title: 'CO Detectors',
      description: 'Professional carbon monoxide detector installation and monitoring systems to protect your family from this deadly gas.',
      features: ['Professional Installation', 'Monitoring Systems', 'Battery Backup', 'Safety Compliance', 'Regular Testing']
    },
    {
      icon: 'ri-bug-line',
      title: 'Mold Remediation',
      description: 'Complete mold inspection, testing, and remediation services to eliminate harmful mold and prevent future growth.',
      features: ['Mold Inspection', 'Air Quality Testing', 'Safe Removal', 'Prevention Solutions', 'Health Protection']
    },
    {
      icon: 'ri-test-tube-line',
      title: 'Air Quality Testing',
      description: 'Comprehensive indoor air quality testing to identify pollutants, allergens, and other air quality issues in your home.',
      features: ['Comprehensive Testing', 'Pollutant Identification', 'Allergen Detection', 'Professional Analysis', 'Improvement Recommendations']
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
      question: 'How do I know if I have poor indoor air quality?',
      answer: 'Signs include frequent allergies, respiratory issues, lingering odors, excessive dust, humidity problems, visible mold, and feeling better when you leave home.'
    },
    {
      question: 'How can I improve indoor air quality with HVAC?',
      answer: 'Use high-quality air filters, install UV purifiers, add humidity control, ensure proper ventilation, schedule duct cleaning, and maintain your HVAC system regularly.'
    },
    {
      question: 'What\'s the difference between air purifiers and air filters?',
      answer: 'Air filters remove particles from air passing through your HVAC system. Air purifiers use additional technologies like UV light or ionization to eliminate microorganisms and odors.'
    },
    {
      question: 'How often should I change my air filters for better air quality?',
      answer: 'Change standard filters every 1-3 months, high-efficiency filters every 6-12 months. Check monthly and replace when dirty, especially if you have allergies or pets.'
    },
    {
      question: 'Can air quality systems help with allergies?',
      answer: 'Yes! Proper filtration, humidity control, and air purification can significantly reduce allergens like pollen, dust mites, pet dunder, and mold spores.'
    },
    {
      question: 'What are the benefits of UV air purifiers?',
      answer: 'UV purifiers eliminate bacteria, viruses, mold, and other pathogens, reduce odors, require minimal maintenance, and provide continuous air sanitization through your HVAC system.'
    },
    {
      question: 'How do humidity levels affect indoor air quality?',
      answer: 'Low humidity causes dry skin and respiratory irritation. High humidity promotes mold and dust mites. Optimal humidity (30-50%) improves comfort and air quality.'
    },
    {
      question: 'What causes poor indoor air quality in homes?',
      answer: 'Common causes include inadequate ventilation, dirty HVAC systems, household chemicals, cooking fumes, pet dunder, dust mites, mold, and outdoor pollutants.'
    },
    {
      question: 'How much do air quality improvements cost?',
      answer: 'Costs vary from $100 for basic filters to $3,000+ for whole-home air purification systems. Many improvements provide immediate health benefits and long-term savings.'
    },
    {
      question: 'What are the newest technologies in air quality systems?',
      answer: 'Latest tech includes smart air quality monitors, photocatalytic oxidation, plasma air purifiers, advanced HEPA filtration, and integrated whole-home air treatment systems.'
    },
    {
      question: 'How can an air purifier improve indoor air quality?',
      answer: 'Air purifiers remove allergens, dust, bacteria, viruses, and odors from your indoor air, creating a healthier environment especially beneficial for those with allergies or asthma.'
    },
    {
      question: 'What are common indoor air pollutants and how to remove them?',
      answer: 'Common pollutants include dust, mold, pet dunder, pollen, VOCs, and smoke. They can be removed through proper filtration, ventilation, air purification, and source control.'
    },
    {
      question: 'Can I install a humidifier or dehumidifier with my HVAC?',
      answer: 'Yes, whole-home humidifiers and dehumidifiers can be integrated with your HVAC system to automatically maintain optimal humidity levels throughout your home.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative py-24 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://readdy.ai/api/search-image?query=Professional%20HVAC%20technician%20installing%20advanced%20air%20purification%20system%20with%20HEPA%20filter%20and%20UV%20light%20in%20modern%20Abbotsford%20home%2C%20clean%20indoor%20air%20quality%20equipment%2C%20healthy%20home%20environment%2C%20professional%20air%20quality%20service%2C%20advanced%20filtration%20technology&width=1920&height=800&seq=air-quality-hero-1&orientation=landscape')`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Indoor Air Quality Services in <span className="text-blue-400">Edmonton, AB</span>
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-200">
              Comprehensive air purification, filtration, and humidity control services. Create a healthier indoor environment with our advanced air quality solutions throughout Edmonton and surrounding Alberta communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('air-quality-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors whitespace-nowrap cursor-pointer"
              >
                Get Free Air Quality Assessment
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

      {/* Air Quality Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Complete Air Quality Solutions
            </h2>
            <p className="text-xl text-gray-600">
              From air purification to humidity control, we improve your indoor air quality in Edmonton
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {airQualityServices.map((service, index) => (
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

      {/* Why Choose Our Air Quality Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our Air Quality Experts?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-heart-pulse-line text-xl text-blue-600"></i>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Health-Focused Solutions</h3>
                    <p className="text-gray-600">Our air quality solutions are designed to reduce allergens, eliminate pathogens, and create a healthier indoor environment for your family.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-test-tube-line text-xl text-green-600"></i>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Professional Testing & Analysis</h3>
                    <p className="text-gray-600">We use advanced testing equipment to identify specific air quality issues and recommend targeted solutions for your home.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-star-line text-xl text-blue-600"></i>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Premium Equipment & Technology</h3>
                    <p className="text-gray-600">We install only the highest quality air purification and filtration systems from trusted manufacturers with proven performance.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-xl p-4">
              <img 
                src="https://readdy.ai/api/search-image?query=Modern%20home%20interior%20with%20family%20enjoying%20clean%20healthy%20air%2C%20advanced%20air%20purification%20system%20visible%2C%20comfortable%20living%20room%20setting%20in%20Abbotsford%20home%2C%20healthy%20indoor%20environment%2C%20air%20quality%20improvement%20results%2C%20happy%20family%20breathing%20clean%20air&width=600&height=400&seq=air-quality-service-1&orientation=landscape"
                alt="Professional air quality service"
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
              Edmonton Area Air Quality Service Coverage
            </h2>
            <p className="text-xl text-gray-600">
              Professional air quality services throughout Edmonton and surrounding Alberta communities
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
                Edmonton Areas We Serve for Air Quality Services
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
                  Need air quality service in other Edmonton areas?
                </h4>
                <p className="text-blue-800 mb-4">
                  We serve the entire Greater Edmonton Area! Contact us to confirm service availability in your specific location.
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

      {/* Air Quality Service Request Form */}
      <section id="air-quality-form" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Request Air Quality Service
              </h2>
              <p className="text-lg text-gray-600">
                Get a free assessment of your indoor air quality needs. We'll respond quickly with recommendations and pricing.
              </p>
            </div>
            <form onSubmit={handleSubmit} data-readdy-form id="air-quality-service-form" className="grid md:grid-cols-2 gap-6">
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
                <label htmlFor="phone" className="block text-sm font-medium text-gray-707 mb-2">
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
                <label htmlFor="email" className="block text-sm font-medium text-gray-707 mb-2">
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
                <label htmlFor="service_type" className="block text-sm font-medium text-gray-707 mb-2">
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
                    <option value="">Select air quality service</option>
                    <option value="uv-air-purifiers">UV Air Purifiers</option>
                    <option value="air-filtration">Air Filtration Systems</option>
                    <option value="humidity-control">Humidifiers/Dehumidifiers</option>
                    <option value="co-detectors">CO Detectors</option>
                    <option value="mold-remediation">Mold Remediation</option>
                    <option value="air-quality-testing">Air Quality Testing</option>
                    <option value="other">Other</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <i className="ri-arrow-down-s-line text-gray-400"></i>
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="property_type" className="block text-sm font-medium text-gray-707 mb-2">
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
                <label htmlFor="urgency" className="block text-sm font-medium text-gray-707 mb-2">
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
                    <option value="urgent">Urgent - Health Concerns</option>
                    <option value="soon">This Week</option>
                    <option value="planning">Planning Ahead</option>
                    <option value="assessment">Just Need Assessment</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <i className="ri-arrow-down-s-line text-gray-400"></i>
                  </div>
                </div>
              </div>
              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-707 mb-2">
                  Additional Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  maxLength={500}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Tell us about any air quality concerns, allergies, respiratory issues, or what you're looking for..."
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
                  {isSubmitting ? 'Submitting...' : 'Request Air Quality Service'}
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
              Common questions about air quality services in Edmonton
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

      {/* CTA Section */}
      <section className="py-16 bg-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
            <div className="w-10 h-10 flex items-center justify-center">
              <i className="ri-leaf-line text-3xl text-green-600"></i>
            </div>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Breathe Cleaner, Healthier Air Today
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Improve your family's health and comfort with professional air quality solutions from our Edmonton experts.
          </p>
          <button 
            onClick={() => document.querySelector('#vapi-widget-floating-button')?.click()}
            className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-colors inline-block whitespace-nowrap cursor-pointer"
          >
            Get Air Quality Help Now
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
