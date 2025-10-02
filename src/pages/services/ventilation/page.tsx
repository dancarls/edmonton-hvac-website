
import { useState } from 'react';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';

export default function VentilationServices() {
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

      const response = await fetch('https://readdy.ai/api/form/d3ad1vog3i95tm0o9ch0', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody.toString(),
      });

      if (response.ok) {
        setSubmitStatus('Thank you! We\'ll contact you soon about your ventilation service needs.');
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

  const ventilationServices = [
    {
      icon: 'ri-windy-line',
      title: 'Whole-Home Ventilation',
      description: 'Complete whole-home ventilation systems to ensure proper air circulation throughout your property. Balanced ventilation for optimal indoor air quality.',
      features: ['Balanced Air Exchange', 'Energy Recovery', 'Humidity Control', 'Fresh Air Intake', 'Professional Installation']
    },
    {
      icon: 'ri-typhoon-line',
      title: 'Exhaust & Attic Fans',
      description: 'Bathroom exhaust fans, kitchen range hoods, and attic ventilation fans to remove moisture, odors, and excess heat from your home.',
      features: ['Bathroom Exhaust Fans', 'Kitchen Range Hoods', 'Attic Ventilation', 'Moisture Control', 'Quiet Operation']
    },
    {
      icon: 'ri-scales-3-line',
      title: 'Air Balancing',
      description: 'Professional air balancing services to ensure even airflow throughout your home. Optimize comfort and energy efficiency.',
      features: ['Airflow Testing', 'Duct Balancing', 'System Optimization', 'Comfort Improvement', 'Energy Savings']
    },
    {
      icon: 'ri-leaf-line',
      title: 'ERV/HRV Systems',
      description: 'Energy Recovery Ventilation and Heat Recovery Ventilation systems that bring in fresh air while conserving energy.',
      features: ['Energy Recovery', 'Heat Recovery', 'Fresh Air Exchange', 'Humidity Transfer', 'Cost Savings']
    },
    {
      icon: 'ri-road-map-line',
      title: 'Duct Cleaning',
      description: 'Professional ductwork cleaning to remove dust, debris, and allergens from your ventilation system for healthier indoor air.',
      features: ['Deep Duct Cleaning', 'Allergen Removal', 'Improved Air Quality', 'System Efficiency', 'Professional Equipment']
    },
    {
      icon: 'ri-settings-4-line',
      title: 'Ventilation Maintenance',
      description: 'Regular maintenance for all ventilation systems including cleaning, filter replacement, and performance optimization.',
      features: ['Filter Replacement', 'System Cleaning', 'Performance Testing', 'Preventive Care', 'Extended Lifespan']
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
      question: 'How often should I have my ventilation system serviced?',
      answer: 'Ventilation systems should be professionally serviced annually, with ductwork cleaned every 3-5 years and exhaust fans cleaned yearly for optimal performance.'
    },
    {
      question: 'How can I improve indoor air quality with ventilation?',
      answer: 'Use quality air filters, upgrade to ERV/HRV systems, ensure proper exhaust ventilation, schedule regular duct cleaning, and maintain balanced airflow throughout your home.'
    },
    {
      question: 'What is an ERV/HRV system and should I get one?',
      answer: 'ERV (Energy Recovery Ventilation) and HRV (Heat Recovery Ventilation) systems bring fresh air in while recovering energy from exhaust air, improving air quality and efficiency.'
    },
    {
      question: 'What are the signs I need better ventilation?',
      answer: 'Signs include stuffy air, excess humidity, condensation on windows, lingering odors, uneven temperatures, and increased allergy or respiratory symptoms.'
    },
    {
      question: 'How often should I clean my home\'s ductwork?',
      answer: 'Ductwork should be professionally cleaned every 3-5 years, or more frequently if you have pets, allergies, recent renovations, or notice excessive dust.'
    },
    {
      question: 'What is zoning in ventilation and should I get it?',
      answer: 'Zoning lets you control airflow and temperatures individually in different areas, saving energy and improving comfort by directing conditioned air where needed.'
    },
    {
      question: 'How can proper ventilation save me money?',
      answer: 'Good ventilation reduces strain on heating and cooling systems, prevents humidity-related issues, improves energy efficiency, and extends HVAC equipment life.'
    },
    {
      question: 'What are common causes of poor indoor air quality?',
      answer: 'Poor ventilation, dirty filters, sealed buildings, cooking odors, pet dander, dust mites, mold, and lack of fresh air exchange contribute to poor indoor air quality.'
    },
    {
      question: 'Can ventilation help with allergies?',
      answer: 'Yes! Proper ventilation with quality filtration reduces allergens like pollen, dust mites, pet dander, and mold spores, significantly improving indoor air for allergy sufferers.'
    },
    {
      question: 'What are the newest technologies in ventilation systems?',
      answer: 'Latest tech includes smart ventilation controls, variable-speed fans, energy recovery systems, integrated air quality monitoring, and demand-controlled ventilation.'
    },
    {
      question: 'Why is proper home ventilation important?',
      answer: 'Proper ventilation removes indoor pollutants and excess moisture, prevents mold growth, improves health and comfort, and maintains good indoor air quality year-round.'
    },
    {
      question: 'How do I know if I need a whole house ventilation system?',
      answer: 'If your home is very airtight, has persistent moisture problems, stuffiness, or poor air quality, a whole house ventilation system is recommended for proper air exchange.'
    },
    {
      question: 'What are ERVs and HRVs and how do they work?',
      answer: 'Energy Recovery Ventilators (ERVs) and Heat Recovery Ventilators (HRVs) exchange stale indoor air with fresh outdoor air while conserving energy by transferring heat and humidity.'
    },
    {
      question: 'How often should ductwork be inspected or cleaned?',
      answer: 'Ductwork should be inspected annually during HVAC maintenance and professionally cleaned every 3-5 years, or sooner if allergies worsen or visible contamination exists.'
    },
    {
      question: 'How does ventilation affect allergies and asthma?',
      answer: 'Proper ventilation significantly reduces indoor allergens and triggers by continuously bringing in filtered fresh air and removing stale air containing pollutants.'
    },
    {
      question: 'What maintenance do ventilation systems require?',
      answer: 'Regular filter changes (every 1-3 months), annual system cleaning, fan maintenance, and checking dampers and controls ensure proper airflow and system longevity.'
    },
    {
      question: 'What is the difference between filtration and purification systems?',
      answer: 'Filtration systems trap and remove particles from air, while purification systems actively neutralize microbes, chemicals, and odors using UV light, ions, or other technologies.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative py-24 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://readdy.ai/api/search-image?query=Professional%20HVAC%20technician%20installing%20modern%20ventilation%20system%20with%20energy%20recovery%20ventilator%20in%20residential%20home%2C%20clean%20ductwork%20installation%2C%20fresh%20air%20ventilation%2C%20professional%20ventilation%20service%2C%20healthy%20indoor%20air%20circulation&width=1920&height=800&seq=ventilation-hero-1&orientation=landscape')`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Ventilation Services in <span className="text-blue-400">Edmonton, AB</span>
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-200">
              Professional ventilation system installation, repair, and maintenance. Improve your indoor air quality and energy efficiency with our expert ventilation solutions throughout Edmonton and surrounding Alberta communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('ventilation-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors whitespace-nowrap cursor-pointer"
              >
                Get Free Ventilation Quote
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

      {/* Ventilation Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Complete Ventilation Solutions
            </h2>
            <p className="text-xl text-gray-600">
              From whole-home systems to duct cleaning, we handle all your ventilation needs in Edmonton
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ventilationServices.map((service, index) => (
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

      {/* Why Choose Our Ventilation Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our Ventilation Experts?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-microscope-line text-xl text-blue-600"></i>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Advanced Testing Equipment</h3>
                    <p className="text-gray-600">We use professional-grade airflow meters and diagnostic equipment to ensure optimal ventilation performance and air quality.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-plant-line text-xl text-green-600"></i>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Healthier Indoor Air</h3>
                    <p className="text-gray-600">Our ventilation solutions reduce allergens, control humidity, and ensure continuous fresh air circulation for a healthier home.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-money-dollar-circle-line text-xl text-blue-600"></i>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Energy-Efficient Systems</h3>
                    <p className="text-gray-600">Our ERV and HRV systems recover energy from exhaust air, reducing heating and cooling costs while maintaining air quality.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-xl p-4">
              <img 
                src="https://readdy.ai/api/search-image?query=HVAC%20technician%20performing%20professional%20duct%20cleaning%20service%20with%20specialized%20vacuum%20equipment%2C%20clean%20residential%20ductwork%20system%2C%20professional%20ventilation%20maintenance%20in%20Abbotsford%20home%2C%20modern%20air%20quality%20improvement%20service&width=600&height=400&seq=ventilation-service-1&orientation=landscape"
                alt="Professional ventilation service"
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
              Edmonton Area Ventilation Service Coverage
            </h2>
            <p className="text-xl text-gray-600">
              Professional ventilation services throughout Edmonton and surrounding Alberta communities
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="bg-gray-100 rounded-xl p-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83325.24904165726!2d-113.490929!3d53.544388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!10x53a02220e223e1e7%3A0x2a8608d10c4c7d9!2sEdmonton%2C%20AB%2C%20Canada!5e0!3m2!1sen!2sus!4v1704835000000!5m2!1sen!2sus"
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
                Edmonton Areas We Serve for Ventilation Services
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
                  Need ventilation service in other Edmonton areas?
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

      {/* Ventilation Service Request Form */}
      <section id="ventilation-form" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Request Ventilation Service
              </h2>
              <p className="text-lg text-gray-600">
                Get a free quote for your ventilation needs. We'll respond quickly with pricing and availability.
              </p>
            </div>
            <form onSubmit={handleSubmit} data-readdy-form id="ventilation-service-form" className="grid md:grid-cols-2 gap-6">
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
                    <option value="">Select ventilation service</option>
                    <option value="whole-home-ventilation">Whole-Home Ventilation</option>
                    <option value="exhaust-fans">Exhaust & Attic Fans</option>
                    <option value="air-balancing">Air Balancing</option>
                    <option value="erv-hrv">ERV/HRV Systems</option>
                    <option value="duct-cleaning">Duct Cleaning</option>
                    <option value="maintenance">Ventilation Maintenance</option>
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
                    className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm appearance-none"
                  >
                    <option value="">Select urgency</option>
                    <option value="urgent">Urgent - Within 24 hours</option>
                    <option value="soon">This Week</option>
                    <option value="planning">Planning Ahead</option>
                    <option value="consultation">Just Need Consultation</option>
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
                  placeholder="Tell us about your ventilation concerns, current system, or what you're looking for..."
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
                  {isSubmitting ? 'Submitting...' : 'Request Ventilation Service'}
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
              Common questions about ventilation services in Edmonton
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
              <i className="ri-windy-line text-3xl text-green-600"></i>
            </div>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Breathe Easier with Better Ventilation
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Improve your indoor air quality with professional ventilation solutions from our Edmonton specialists.
          </p>
          <button 
            onClick={() => document.querySelector('#vapi-widget-floating-button')?.click()}
            className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-colors inline-block whitespace-nowrap cursor-pointer"
          >
            Get Ventilation Help Now
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
