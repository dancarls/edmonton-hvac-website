
import { useState } from 'react';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';

export default function HeatingServices() {
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

      const response = await fetch('https://readdy.ai/api/form/8c0adk74jlskm93dk4ma', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody.toString(),
      });

      if (response.ok) {
        setSubmitStatus('Thank you! We\'ll contact you soon about your heating service needs.');
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

  const heatingServices = [
    {
      icon: 'ri-fire-line',
      title: 'Furnace Installation',
      description: 'Professional gas and electric furnace installation with energy-efficient models from top brands. We handle permits, inspections, and warranty registration.',
      features: ['Gas & Electric Options', 'High-Efficiency Models', 'Permit & Inspection Handling', 'Manufacturer Warranties', 'Free Installation Estimates']
    },
    {
      icon: 'ri-tools-line',
      title: 'Furnace Repair',
      description: 'Expert furnace repair services for all makes and models. From pilot light issues to complete system breakdowns, we diagnose and fix it fast.',
      features: ['All Makes & Models', 'Same-Day Service', 'Diagnostic Testing', 'Parts Warranty', '24/7 Emergency Repairs']
    },
    {
      icon: 'ri-leaf-line',
      title: 'Heat Pump Systems',
      description: 'Energy-efficient heat pump installation and maintenance. Perfect for Abbotsford\'s moderate climate with year-round heating and cooling.',
      features: ['Air Source Heat Pumps', 'Ground Source Options', 'Dual Fuel Systems', 'Energy Rebates Available', 'Year-Round Comfort']
    },
    {
      icon: 'ri-water-percent-line',
      title: 'Boiler Services',
      description: 'Complete boiler installation, repair, and maintenance services. Specializing in high-efficiency condensing boilers and hydronic heating systems.',
      features: ['Boiler Installation', 'Repair & Maintenance', 'Hydronic Systems', 'Radiant Floor Heating', 'Steam & Hot Water']
    },
    {
      icon: 'ri-home-wifi-line',
      title: 'Smart Thermostats',
      description: 'Upgrade to programmable and smart thermostats for better comfort and energy savings. Professional installation and setup included.',
      features: ['WiFi-Enabled Models', 'Energy Savings', 'Remote Control', 'Professional Setup', 'Compatibility Check']
    },
    {
      icon: 'ri-alarm-warning-line',
      title: 'Emergency Heating',
      description: '24/7 emergency heating repairs when your system fails. Fast response times to get your Abbotsford home warm again quickly.',
      features: ['24/7 Availability', 'Rapid Response', 'All System Types', 'Emergency Diagnostics', 'Temporary Solutions']
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
      question: 'How often should I have my heating system serviced?',
      answer: 'It\'s recommended to have your heating system professionally serviced annually, ideally in fall before heating season begins, to ensure it runs efficiently and reliably throughout winter.'
    },
    {
      question: 'What signs indicate my heating system needs repair?',
      answer: 'Common signs include strange noises, uneven temperatures, weak airflow, unusual smells, frequent cycling, rising energy bills, and the system not reaching set temperatures.'
    },
    {
      question: 'How long does a typical heating system last?',
      answer: 'A well-maintained heating system typically lasts 15-20 years for gas furnaces and 20-30 years for electric systems, depending on usage and maintenance quality.'
    },
    {
      question: 'What size furnace do I need for my Edmonton home?',
      answer: 'Furnace sizing depends on square footage, insulation, windows, and Edmonton\'s climate. Our technicians perform load calculations to determine the right size for optimal efficiency and comfort in Alberta winters.'
    },
    {
      question: 'What warranties do heating systems usually come with?',
      answer: 'Warranties usually cover parts for 5-10 years, with labor coverage for 1-2 years, depending on the manufacturer. We help you understand and register all warranties.'
    },
    {
      question: 'How much does heating system installation or replacement cost?',
      answer: 'Costs range widely depending on system size and complexity but typically fall between $3,000 and $8,000+ for residential installations in Abbotsford.'
    },
    {
      question: 'What are common causes of heating system breakdowns?',
      answer: 'Neglected maintenance, dirty filters, worn parts, thermostat issues, and electrical problems are typical causes of heating system failures.'
    },
    {
      question: 'Can I install a smart thermostat with my existing heating system?',
      answer: 'Most modern heating systems support smart thermostats, which can improve comfort and cut energy use by 10-20% through better scheduling and control.'
    },
    {
      question: 'What energy efficiency ratings should I consider?',
      answer: 'Higher AFUE ratings for heating (above 90%) are recommended. High-efficiency systems qualify for utility rebates and significantly reduce energy costs.'
    },
    {
      question: 'What brands of heating equipment do you recommend?',
      answer: 'Popular brands are Carrier, Lennox, Trane, Goodman, and Rheem for reliability and parts availability. We help you choose the best option for your needs.'
    },
    {
      question: 'What is the difference between a furnace and a heat pump?',
      answer: 'A furnace burns fuel to generate heat while a heat pump transfers heat from outside air to inside, also providing cooling. Heat pumps are more efficient in moderate climates like Abbotsford.'
    },
    {
      question: 'How do I know if my furnace needs to be replaced?',
      answer: 'Frequent repairs, uneven heating, excessive noise, and age over 15 years indicate replacement might be necessary. Rising energy bills also suggest declining efficiency.'
    },
    {
      question: 'What types of furnaces are best for Edmonton winters?',
      answer: 'High-efficiency gas furnaces with AFUE above 90% perform excellently in Edmonton\'s cold climate, providing reliable heat even in extreme Alberta cold.'
    },
    {
      question: 'What is AFUE and why is it important?',
      answer: 'Annual Fuel Utilization Efficiency shows furnace efficiency percentage; higher AFUE saves energy and lowers bills. Modern furnaces should have AFUE above 90%.'
    },
    {
      question: 'How do I prevent my furnace from breaking down?',
      answer: 'Regular annual maintenance, timely filter changes every 1-3 months, and professional inspections prevent most breakdowns and extend system life.'
    },
    {
      question: 'Can I convert my oil furnace to gas or electric?',
      answer: 'Yes, but a professional should assess your home and install the proper equipment. Gas conversion often provides better efficiency and lower operating costs.'
    },
    {
      question: 'What safety checks should I perform on my heating system?',
      answer: 'Check for carbon monoxide leaks with detectors, ensure proper ventilation clearances, inspect gas connections, and have annual professional safety inspections.'
    },
    {
      question: 'What are signs of carbon monoxide leaks from heating?',
      answer: 'Headaches, dizziness, nausea, flu-like symptoms, and unusual odors necessitate immediate action. Leave the house and call emergency services if suspected.'
    },
    {
      question: 'How does radiant floor heating compare to baseboard heaters?',
      answer: 'Radiant heating is more energy-efficient and provides even heat distribution but is costlier to install. Baseboard heaters are less expensive but can create uneven temperatures.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative py-24 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://readdy.ai/api/search-image?query=Professional%20HVAC%20technician%20installing%20modern%20gas%20furnace%20in%20clean%20basement%20mechanical%20room%2C%20Edmonton%20residential%20home%2C%20high-efficiency%20heating%20system%2C%20professional%20installation%2C%20clean%20organized%20workspace%2C%20modern%20heating%20equipment%2C%20Canadian%20home%20interior&width=1920&height=800&seq=heating-hero-1&orientation=landscape')`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Expert Heating Services in <span className="text-blue-400">Edmonton, AB</span>
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-200">
              Professional furnace installation, repair, and maintenance services. Keep your home warm and comfortable all winter long with our expert heating solutions across Edmonton and surrounding Alberta communities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('heating-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors whitespace-nowrap cursor-pointer"
              >
                Get Free Heating Quote
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

      {/* Heating Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Complete Heating Solutions
            </h2>
            <p className="text-xl text-gray-600">
              From furnace installation to emergency repairs, we handle all your heating needs in Edmonton
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {heatingServices.map((service, index) => (
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

      {/* Why Choose Our Heating Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our Heating Experts?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-shield-check-line text-xl text-blue-600"></i>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Licensed & Certified Technicians</h3>
                    <p className="text-gray-600">Our heating specialists are fully licensed, bonded, and continuously trained on the latest heating technologies and safety protocols.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-time-line text-xl text-green-600"></i>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Fast Response Times</h3>
                    <p className="text-gray-600">We understand heating emergencies can't wait. Our team provides same-day service and 24/7 emergency repairs throughout Edmonton.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-award-line text-xl text-blue-600"></i>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Quality Workmanship Guarantee</h3>
                    <p className="text-gray-600">All our heating installations and repairs come with comprehensive warranties and our satisfaction guarantee.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-xl p-4">
              <img 
                src="https://readdy.ai/api/search-image?query=HVAC%20technician%20performing%20professional%20furnace%20maintenance%20service%20in%20modern%20home%20basement%2C%20checking%20heating%20system%20components%2C%20diagnostic%20tools%2C%20clean%20professional%20work%20environment%2C%20Abbotsford%20residential%20heating%20service%2C%20high-efficiency%20furnace%20inspection&width=600&height=400&seq=heating-service-1&orientation=landscape"
                alt="Professional heating service"
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
              Edmonton Area Heating Service Coverage
            </h2>
            <p className="text-xl text-gray-600">
              Professional heating services throughout Edmonton and surrounding Alberta communities
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
                Edmonton Areas We Serve for Heating Services
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
                  Need heating service in other Edmonton areas?
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

      {/* Heating Service Request Form */}
      <section id="heating-form" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Request Heating Service
              </h2>
              <p className="text-lg text-gray-600">
                Get a free quote for your heating needs. We'll respond quickly with pricing and availability.
              </p>
            </div>
            <form onSubmit={handleSubmit} data-readdy-form id="heating-service-form" className="grid md:grid-cols-2 gap-6">
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
                    <option value="">Select heating service</option>
                    <option value="furnace-installation">Furnace Installation</option>
                    <option value="furnace-repair">Furnace Repair</option>
                    <option value="heat-pump">Heat Pump Service</option>
                    <option value="boiler-service">Boiler Service</option>
                    <option value="thermostat">Smart Thermostat</option>
                    <option value="emergency-heating">Emergency Heating</option>
                    <option value="maintenance">Heating Maintenance</option>
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
                    <option value="emergency">Emergency - No Heat</option>
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
                  placeholder="Tell us about your heating system, any issues you're experiencing, or what you're looking for..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm resize-none"
                ></textarea>
                <p className="text-xs text-gray-500 mt-1">{formData.message.length}/500 characters</p>
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-blue-7
                  transition-colors disabled:opacity-50 whitespace-nowrap cursor-pointer"
                >
                  {isSubmitting ? 'Submitting...' : 'Request Heating Service'}
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
              Common questions about heating services in Edmonton
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
      <section className="py-16 bg-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
            <div className="w-10 h-10 flex items-center justify-center">
              <i className="ri-alarm-warning-line text-3xl text-red-600"></i>
            </div>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            No Heat? We're Here to Help!
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Don't let a broken heating system leave you in the cold. Our emergency heating repair team is available 24/7 throughout Edmonton.
          </p>
          <button 
            onClick={() => document.querySelector('#vapi-widget-floating-button')?.click()}
            className="bg-white text-red-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-colors inline-block whitespace-nowrap cursor-pointer"
          >
            Get Emergency Help Now
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
