
import { useState } from 'react';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';

export default function EmergencyServices() {
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

      const response = await fetch('https://readdy.ai/api/form/d3ad1vog3i95tm0o9cfg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody.toString(),
      });

      if (response.ok) {
        setSubmitStatus('Thank you! We\'ll contact you immediately about your emergency service needs.');
        setFormData({ name: '', phone: '', email: '', service_type: '', property_type: '', urgency: '', message: '' });
      } else {
        setSubmitStatus('Something went wrong. Please try again or call us directly.');
      }
    } catch (error) {
      setSubmitStatus('Something went wrong. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const emergencyServices = [
    {
      icon: 'ri-alarm-warning-line',
      title: '24/7 Emergency Response',
      description: 'Round-the-clock emergency HVAC service available 365 days a year. When your comfort system fails, we\'re here to help immediately.',
      features: ['24/7 Availability', '365 Days a Year', 'Rapid Response', 'Emergency Hotline', 'No Extra Weekend Fees']
    },
    {
      icon: 'ri-time-line',
      title: 'Same-Day Service',
      description: 'Fast same-day emergency repairs to restore your heating or cooling quickly. Priority scheduling for urgent HVAC problems.',
      features: ['Same-Day Response', 'Priority Scheduling', 'Urgent Repairs', 'Fast Diagnosis', 'Quick Solutions']
    },
    {
      icon: 'ri-fire-line',
      title: 'Emergency Heating Repairs',
      description: 'Emergency furnace and heating system repairs when you have no heat. Critical for Abbotsford\'s cold winters.',
      features: ['No Heat Emergencies', 'Furnace Breakdowns', 'Boiler Failures', 'Heat Pump Issues', 'Thermostat Problems']
    },
    {
      icon: 'ri-snowy-line',
      title: 'Emergency AC Repairs', 
      description: 'Emergency air conditioning repairs during hot weather. Don\'t suffer in the heat when your AC breaks down.',
      features: ['AC System Failures', 'Cooling Emergencies', 'Refrigerant Leaks', 'Compressor Issues', 'Electrical Problems']
    },
    {
      icon: 'ri-calendar-line',
      title: 'Weekend & Holiday Service',
      description: 'Emergency HVAC service available on weekends and holidays when other companies are closed.',
      features: ['Weekend Service', 'Holiday Availability', 'No Extra Charges', 'Same Quality Service', 'Emergency Coverage']
    },
    {
      icon: 'ri-stethoscope-line',
      title: 'Emergency Diagnostics',
      description: 'Fast emergency system diagnostics to quickly identify and fix HVAC problems, minimizing downtime.',
      features: ['Rapid Diagnosis', 'Advanced Tools', 'System Analysis', 'Problem Identification', 'Efficient Repairs']
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
      question: 'What constitutes an HVAC emergency?',
      answer: 'HVAC emergencies include complete system failures (no heat in winter, no AC in extreme heat), gas leaks, electrical issues, water leaks from systems, or any situation that threatens safety or property.'
    },
    {
      question: 'How quickly do you respond to emergencies?',
      answer: 'We aim to respond to true emergencies within 1-2 hours during business hours and within 2-4 hours after hours, weekends, and holidays, depending on location and weather conditions.'
    },
    {
      question: 'Do you charge extra for emergency service?',
      answer: 'Emergency calls may have a service call fee, but we don\'t charge extra for weekends or holidays. We provide upfront pricing before any work begins.'
    },
    {
      question: 'What should I do while waiting for emergency service?',
      answer: 'For heating emergencies, dress warmly and close off unused rooms. For AC emergencies, stay hydrated and use fans. If you smell gas, leave immediately and call the gas company.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative py-24 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(220, 38, 38, 0.7), rgba(220, 38, 38, 0.7)), url('https://readdy.ai/api/search-image?query=Emergency%20HVAC%20technician%20responding%20to%20urgent%20service%20call%20at%20night%2C%20professional%20emergency%20van%20with%20lights%2C%20urgent%20HVAC%20repair%20service%20in%20Abbotsford%2C%20emergency%20response%20vehicle%2C%2024-hour%20service%20availability%2C%20critical%20heating%20cooling%20repair&width=1920&height=800&seq=emergency-hero-1&orientation=landscape')`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
              <div className="w-12 h-12 flex items-center justify-center">
                <i className="ri-alarm-warning-line text-4xl text-red-600"></i>
              </div>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              24/7 Emergency HVAC Service in <span className="text-yellow-300">Edmonton, AB</span>
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-100">
              When your heating or cooling system fails, we respond fast. Available 24/7, 365 days a year for emergency HVAC repairs throughout Edmonton and surrounding Alberta communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.querySelector('#vapi-widget-floating-button')?.click()}
                className="bg-yellow-400 text-red-900 px-8 py-4 rounded-lg text-lg font-bold hover:bg-yellow-300 transition-colors text-center whitespace-nowrap cursor-pointer shadow-lg"
              >
                🚨 GET EMERGENCY HELP NOW
              </button>
              <button 
                onClick={() => document.getElementById('emergency-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors whitespace-nowrap cursor-pointer"
              >
                Submit Emergency Request
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Alert Bar */}
      <section className="bg-red-600 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center text-white text-center">
            <div className="w-6 h-6 flex items-center justify-center mr-3">
              <i className="ri-alarm-warning-line text-xl"></i>
            </div>
            <p className="text-lg font-semibold">
              HVAC EMERGENCY? Don't wait - get immediate help through our AI assistant or call us for fast response!
            </p>
          </div>
        </div>
      </section>

      {/* Emergency Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Complete Emergency HVAC Services
            </h2>
            <p className="text-xl text-gray-600">
              When HVAC emergencies strike, we're ready with fast, professional emergency service throughout Edmonton
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {emergencyServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border-l-4 border-red-500">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <i className={`${service.icon} text-2xl text-red-600`}></i>
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

      {/* Emergency Response Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Emergency Response Process
            </h2>
            <p className="text-xl text-gray-600">
              Fast, efficient emergency service when you need it most
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-gray-600">
                Call our emergency hotline 24/7. We answer immediately and dispatch a technician.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Response</h3>
              <p className="text-gray-600">
                Our technician arrives quickly with fully stocked emergency vehicle and diagnostic tools.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quick Diagnosis</h3>
              <p className="text-gray-600">
                We quickly identify the problem and provide upfront pricing for emergency repairs.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Restore Comfort</h3>
              <p className="text-gray-600">
                We complete repairs efficiently to restore your heating or cooling as quickly as possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Emergency Service */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our Emergency HVAC Service?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-time-line text-xl text-red-600"></i>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Fastest Response Times</h3>
                    <p className="text-gray-600">We prioritize emergency calls and aim for 1-2 hour response times, even during extreme weather conditions.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-tools-line text-xl text-red-600"></i>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Fully Stocked Emergency Vehicles</h3>
                    <p className="text-gray-600">Our emergency vehicles carry extensive parts inventory to complete most repairs on the first visit.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-shield-check-line text-xl text-red-600"></i>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Emergency-Trained Technicians</h3>
                    <p className="text-gray-600">Our technicians are specially trained for emergency situations and safety protocols.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-xl p-4">
              <img 
                src="https://readdy.ai/api/search-image?query=Emergency%20HVAC%20technician%20working%20urgently%20to%20repair%20heating%20system%20in%20cold%20weather%2C%20professional%20emergency%20repair%20service%2C%20technician%20with%20emergency%20tools%20and%20parts%2C%20urgent%20HVAC%20repair%20in%20Abbotsford%20home%2C%20emergency%20service%20response&width=600&height=400&seq=emergency-service-1&orientation=landscape"
                alt="Emergency HVAC service"
                className="w-full h-auto rounded-lg object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Service Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Edmonton Area Emergency Service Coverage
            </h2>
            <p className="text-xl text-gray-600">
              24/7 emergency HVAC service throughout Edmonton and surrounding Alberta communities
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
                Edmonton Areas We Serve for Emergency HVAC
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {serviceAreas.map((area, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">{area}</span>
                  </div>
                ))}
              </div>
              <div className="bg-red-50 rounded-lg p-6 border border-red-200">
                <h4 className="text-lg font-semibold text-red-900 mb-2">
                  Emergency outside these areas?
                </h4>
                <p className="text-red-800 mb-4">
                  Contact us anyway! We may be able to help or recommend emergency service providers in your Alberta location.
                </p>
                <button 
                  onClick={() => document.querySelector('#vapi-widget-floating-button')?.click()}
                  className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors inline-block whitespace-nowrap cursor-pointer"
                >
                  Get Emergency Help Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Service Request Form */}
      <section id="emergency-form" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-8 border-l-4 border-red-500">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 flex items-center justify-center">
                  <i className="ri-alarm-warning-line text-2xl text-red-600"></i>
                </div>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Request Emergency HVAC Service
              </h2>
              <p className="text-lg text-gray-600">
                For fastest service, use our AI assistant above. Or submit this form for immediate response.
              </p>
            </div>
            <form onSubmit={handleSubmit} data-readdy-form id="emergency-service-form" className="grid md:grid-cols-2 gap-6">
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
                />
              </div>
              <div>
                <label htmlFor="service_type" className="block text-sm font-medium text-gray-700 mb-2">
                  Emergency Type *
                </label>
                <div className="relative">
                  <select
                    id="service_type"
                    name="service_type"
                    required
                    value={formData.service_type}
                    onChange={(e) => setFormData({...formData, service_type: e.target.value})}
                    className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm appearance-none"
                  >
                    <option value="">Select emergency type</option>
                    <option value="no-heat">No Heat - Furnace Not Working</option>
                    <option value="no-ac">No AC - Air Conditioner Not Working</option>
                    <option value="gas-leak">Gas Leak or Gas Smell</option>
                    <option value="water-leak">Water Leak from HVAC System</option>
                    <option value="electrical-issue">Electrical Issue with HVAC</option>
                    <option value="strange-noises">Strange Noises or Burning Smells</option>
                    <option value="carbon-monooxide">Carbon Monoxide Detector Alert</option>
                    <option value="other-emergency">Other Emergency</option>
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
                    className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm appearance-none"
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
                  Urgency Level *
                </label>
                <div className="relative">
                  <select
                    id="urgency"
                    name="urgency"
                    required
                    value={formData.urgency}
                    onChange={(e) => setFormData({...formData, urgency: e.target.value})}
                    className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm appearance-none"
                  >
                    <option value="">How urgent is this?</option>
                    <option value="critical">Critical - Safety Issue</option>
                    <option value="urgent">Urgent - No Heat/AC</option>
                    <option value="same-day">Same Day Service Needed</option>
                    <option value="next-day">Next Day Service</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <i className="ri-arrow-down-s-line text-gray-400"></i>
                  </div>
                </div>
              </div>
              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Emergency Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  maxLength={500}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Describe your HVAC emergency: What happened? What symptoms are you experiencing? When did it start?"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm resize-none"
                ></textarea>
                <p className="text-xs text-gray-500 mt-1">{formData.message.length}/500 characters</p>
              </div>
              <div className="md:col-span-2">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                  <div className="flex items-start">
                    <div className="w-5 h-5 flex items-center justify-center mr-3">
                      <i className="ri-information-line text-red-600"></i>
                    </div>
                    <div className="text-sm text-red-800">
                      <strong>Safety Notice:</strong> If you smell gas, suspect a gas leak, or your carbon monoxide detector is alarming, leave the premises immediately and call the gas company emergency line, then call us.
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-red-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-red-700 transition-colors disabled:opacity-50 whitespace-nowrap cursor-pointer"
                >
                  {isSubmitting ? 'Submitting Emergency Request...' : 'Request Emergency Service Now'}
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
              Emergency Service FAQ
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about emergency HVAC services in Edmonton
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

      {/* Final Emergency CTA */}
      <section className="py-16 bg-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
            <div className="w-10 h-10 flex items-center justify-center">
              <i className="ri-phone-line text-3xl text-red-600"></i>
            </div>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Don't Wait - Get Help Now!
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Don't let HVAC issues escalate. Get immediate emergency help through our AI assistant for fast, professional service across Edmonton.
          </p>
          <button 
            onClick={() => document.querySelector('#vapi-widget-floating-button')?.click()}
            className="bg-yellow-400 text-red-900 px-12 py-6 rounded-lg text-2xl font-bold hover:bg-yellow-300 transition-colors inline-block whitespace-nowrap cursor-pointer shadow-lg animate-pulse"
          >
            🚨 GET EMERGENCY HELP NOW
          </button>
          <p className="text-red-100 mt-4 text-sm">
            Available 24/7 • 365 Days a Year • Fast Response
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
