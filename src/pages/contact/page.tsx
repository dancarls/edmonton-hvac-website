
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    preferredContact: 'ai_assistant',
    urgency: 'normal'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://readdy.ai/api/form/d3basfp6d8097tiljl70', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData).toString()
      });

      if (response.ok) {
        setSubmitStatus('Thank you! We\'ll contact you through our AI assistant within 24 hours to discuss your HVAC needs.');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          service: '',
          message: '',
          preferredContact: 'ai_assistant',
          urgency: 'normal'
        });
      } else {
        setSubmitStatus('There was an error sending your message. Please try again or use our AI assistant directly.');
      }
    } catch (error) {
      setSubmitStatus('There was an error sending your message. Please try again or use our AI assistant directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section 
        className="relative h-96 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('https://readdy.ai/api/search-image?query=Professional%20HVAC%20customer%20service%20office%20with%20modern%20AI%20communication%20technology%2C%20friendly%20staff%20ready%20to%20help%20customers%2C%20clean%20business%20environment%20in%20Edmonton%20Alberta%2C%20winter%20setting&width=1200&height=600&seq=edmonton-contact-hero&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl leading-relaxed">
              Ready to improve your home's comfort? Get in touch with Edmonton's HVAC experts today
            </p>
          </div>
        </div>
      </section>

      {/* Emergency Contact Bar */}
      <section className="bg-red-600 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-lg font-semibold">
              <span className="inline-block w-6 h-6 mr-2">
                <i className="ri-alarm-warning-line text-xl"></i>
              </span>
              HVAC Emergency? Talk to Our AI Assistant Now: 
              <button 
                onClick={() => document.querySelector('#vapi-widget-floating-button')?.click()}
                className="ml-2 underline hover:no-underline cursor-pointer"
              >
                Start Chat/Call
              </button>
              <span className="ml-4 text-sm">(24/7 Emergency Service)</span>
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get Your Free Quote</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll contact you through our AI assistant within 24 hours with a personalized quote for your HVAC needs.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6" data-readdy-form id="contact-form">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="Smith"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="john@example.com"
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
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="(780) 555-0123 (Optional)"
                    />
                    <p className="text-xs text-gray-500 mt-1">We primarily use AI assistant for contact</p>
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm pr-8"
                  >
                    <option value="">Select a service...</option>
                    <option value="heating">Heating Services</option>
                    <option value="cooling">Cooling Services</option>
                    <option value="ventilation">Ventilation Services</option>
                    <option value="air-quality">Indoor Air Quality</option>
                    <option value="plumbing">Plumbing & Water Heating</option>
                    <option value="maintenance">Maintenance Services</option>
                    <option value="commercial">Commercial HVAC</option>
                    <option value="emergency">Emergency Services</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="preferredContact" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Contact Method
                    </label>
                    <select
                      id="preferredContact"
                      name="preferredContact"
                      value={formData.preferredContact}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm pr-8"
                    >
                      <option value="ai_assistant">AI Assistant (Recommended)</option>
                      <option value="email">Email</option>
                      <option value="phone">Phone Call (if provided)</option>
                      <option value="text">Text Message (if provided)</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">
                      Urgency Level
                    </label>
                    <select
                      id="urgency"
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm pr-8"
                    >
                      <option value="normal">Normal (within 48 hours)</option>
                      <option value="urgent">Urgent (within 24 hours)</option>
                      <option value="emergency">Emergency (ASAP)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    maxLength={500}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm resize-vertical"
                    placeholder="Please describe your HVAC needs, current issues, or any specific questions you have..."
                  />
                  <p className="text-sm text-gray-500 mt-1">{formData.message.length}/500 characters</p>
                </div>

                {submitStatus && (
                  <div className={`p-4 rounded-lg ${submitStatus.includes('Thank you') ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                    {submitStatus}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer whitespace-nowrap"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message & Get Quote'}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <div className="bg-gray-50 rounded-lg p-8 mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-6 h-6 flex items-center justify-center mt-1 mr-4">
                      <i className="ri-customer-service-2-line text-xl text-blue-600"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">AI Assistant (Primary Contact)</h4>
                      <p className="text-gray-600">
                        <button 
                          onClick={() => document.querySelector('#vapi-widget-floating-button')?.click()}
                          className="text-blue-600 hover:text-blue-700 cursor-pointer"
                        >
                          Talk to Our AI Assistant
                        </button>
                      </p>
                      <p className="text-sm text-green-600 font-medium">Available 24/7 for all inquiries</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-6 h-6 flex items-center justify-center mt-1 mr-4">
                      <i className="ri-mail-line text-xl text-blue-600"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                      <p className="text-gray-600">
                        <a href="mailto:info@edmontonhvac.ca" className="hover:text-blue-600 cursor-pointer">
                          info@edmontonhvac.ca
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-6 h-6 flex items-center justify-center mt-1 mr-4">
                      <i className="ri-map-pin-line text-xl text-blue-600"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Service Area</h4>
                      <p className="text-gray-600">
                        123 Main Street, Edmonton, AB T5J 0A1<br />
                        Serving Edmonton, St. Albert, Sherwood Park,<br />
                        Spruce Grove, and surrounding Alberta areas
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-6 h-6 flex items-center justify-center mt-1 mr-4">
                      <i className="ri-time-line text-xl text-blue-600"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Business Hours</h4>
                      <div className="text-gray-600 space-y-1">
                        <p>Monday - Friday: 7:00 AM - 7:00 PM</p>
                        <p>Saturday - Sunday: 8:00 AM - 5:00 PM</p>
                        <p className="text-red-600 font-medium">AI Assistant: 24/7</p>
                        <p className="text-red-600 font-medium">Emergency Service: 24/7</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Areas Map */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6 border-b">
                  <h3 className="text-xl font-bold text-gray-900">Our Service Areas</h3>
                  <p className="text-gray-600 mt-2">We proudly serve the Edmonton region</p>
                </div>
                <div className="h-64">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2620.123!2d-113.490929!3d53.544388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a02220e223e1e7%3A0x2a8608d10c4c7d9!2s123%20Main%20Street%2C%20Edmonton%2C%20AB%20T5J%200A1%2C%20Canada!5e0!3m2!1sen!2s!4v1635959999999!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8">Need Help Right Away?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-customer-service-2-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">AI Assistant</h3>
              <p className="text-blue-100 mb-4">Get instant help from our AI</p>
              <button 
                onClick={() => document.querySelector('#vapi-widget-floating-button')?.click()}
                className="inline-block bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap"
              >
                Start Chat/Call
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-chat-3-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Live Chat</h3>
              <p className="text-blue-100 mb-4">Chat with our AI support</p>
              <button 
                onClick={() => document.querySelector('#vapi-widget-floating-button')?.click()}
                className="inline-block bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap"
              >
                Start Chat
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-calendar-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Schedule Service</h3>
              <p className="text-blue-100 mb-4">Book an appointment with AI</p>
              <button 
                onClick={() => document.querySelector('#vapi-widget-floating-button')?.click()}
                className="inline-block bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}