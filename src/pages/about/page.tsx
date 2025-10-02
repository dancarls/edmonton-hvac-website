
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

export default function AboutPage() {
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
                className="text-green-600 hover:text-green-700 cursor-pointer"
              >
                Home
              </button>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-600">About</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        className="relative h-96 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('https://readdy.ai/api/search-image?query=Professional%20HVAC%20technician%20team%20working%20on%20modern%20heating%20and%20cooling%20systems%20in%20Edmonton%20Alberta%2C%20experienced%20technicians%20with%20tools%20and%20equipment%2C%20cold%20weather%20expertise%2C%20Canadian%20HVAC%20specialists&width=1200&height=600&seq=edmonton-about-hero&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-5xl font-bold mb-6">About Edmonton HVAC</h1>
            <p className="text-xl leading-relaxed">
              Your trusted local HVAC experts with over 15 years of experience serving Edmonton, AB and surrounding Alberta communities
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2009, Edmonton HVAC began as a family-owned business with a simple mission: to provide reliable, professional heating and cooling services to our Edmonton community. What started as a small operation has grown into Alberta's most trusted HVAC company.
                </p>
                <p>
                  Over the years, we've installed thousands of heating and cooling systems, performed countless repairs, and helped Edmonton families stay comfortable through Alberta's extreme weather conditions. Our commitment to quality workmanship, honest pricing, and exceptional customer service has earned us a reputation as Edmonton's premier HVAC contractor.
                </p>
                <p>
                  Today, we're proud to serve not just Edmonton, but the entire Greater Edmonton Area including Sherwood Park, St. Albert, and surrounding communities, bringing the same dedication and expertise that built our reputation to every job we undertake.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Modern%20HVAC%20company%20office%20building%20exterior%20with%20company%20vehicles%20parked%20outside%20in%20Edmonton%20Alberta%20winter%20setting%2C%20professional%20business%20appearance%20with%20snow%2C%20clean%20architectural%20design%20with%20Edmonton%20skyline%20visible&width=600&height=500&seq=edmonton-company-building&orientation=landscape"
                alt="Edmonton HVAC Office"
                className="rounded-lg shadow-lg object-cover w-full h-96 object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and ensure we deliver the best possible service to Edmonton homeowners and businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-shield-check-line text-2xl text-green-600"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">Alberta Weather Expertise</h3>
              <p className="text-gray-600">
                We understand Edmonton's harsh winters and demanding climate, providing solutions designed for Alberta's extreme conditions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-24-hours-line text-2xl text-red-600"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">24/7 Emergency Service</h3>
              <p className="text-gray-600">
                When your heating fails in -30°C weather, we're here with immediate response and emergency repair services.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-tools-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Craftsmanship</h3>
              <p className="text-gray-600">
                Our certified technicians bring years of Alberta HVAC experience and ongoing training to ensure quality results.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-hand-heart-line text-2xl text-orange-600"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">Honesty & Integrity</h3>
              <p className="text-gray-600">
                We provide transparent pricing, honest assessments, and ethical business practices in all our Edmonton interactions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-leaf-line text-2xl text-purple-600"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">Energy Efficiency Focus</h3>
              <p className="text-gray-600">
                We promote high-efficiency solutions perfect for Alberta's energy costs and environmental responsibility.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-community-line text-2xl text-green-600"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">Edmonton Community Focused</h3>
              <p className="text-gray-600">
                As a local Edmonton business, we're committed to supporting our Alberta community and building lasting relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Edmonton Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our Alberta-certified technicians and support staff are dedicated to providing exceptional HVAC services throughout Edmonton
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20HVAC%20company%20owner%20manager%20in%20business%20attire%20standing%20confidently%20in%20Edmonton%20Alberta%20office%20environment%2C%20middle-aged%20experienced%20leader%20with%20Canadian%20winter%20backdrop%2C%20clean%20professional%20appearance&width=400&height=300&seq=edmonton-team-owner&orientation=landscape"
                alt="Robert Wilson - Owner"
                className="w-full h-64 object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Robert Wilson</h3>
                <p className="text-green-600 font-medium mb-3">Owner & Founder</p>
                <p className="text-gray-600 text-sm">
                  With over 20 years in the Alberta HVAC industry, Robert founded Edmonton HVAC to bring reliable, honest service to our community.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="https://readdy.ai/api/search-image?query=Experienced%20female%20HVAC%20technician%20in%20uniform%20working%20on%20heating%20system%20in%20Edmonton%20Alberta%20home%2C%20professional%20appearance%20with%20tools%2C%20expertise%20and%20competence%20in%20cold%20climate%20residential%20setting&width=400&height=300&seq=edmonton-team-tech1&orientation=landscape"
                alt="Amanda Martinez - Lead Technician"
                className="w-full h-64 object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Amanda Martinez</h3>
                <p className="text-green-600 font-medium mb-3">Lead Technician</p>
                <p className="text-gray-600 text-sm">
                  Red Seal certified with 15 years Alberta experience, Amanda specializes in complex installations and cold-climate systems.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20customer%20service%20representative%20in%20modern%20Edmonton%20office%20environment%2C%20friendly%20approachable%20person%20managing%20service%20calls%2C%20clean%20business%20atmosphere%20with%20Alberta%20winter%20view&width=400&height=300&seq=edmonton-team-service&orientation=landscape"
                alt="James Thompson - Service Manager"
                className="w-full h-64 object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">James Thompson</h3>
                <p className="text-green-600 font-medium mb-3">Service Manager</p>
                <p className="text-gray-600 text-sm">
                  James coordinates our Edmonton service operations and ensures every customer receives prompt, professional attention.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Awards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Alberta Certifications & Recognition</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence is recognized by Alberta industry organizations and satisfied Edmonton customers
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-award-line text-3xl text-green-600"></i>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Red Seal Certified</h4>
              <p className="text-sm text-gray-600">All technicians Alberta certified</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-shield-check-line text-3xl text-blue-600"></i>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Licensed & Insured</h4>
              <p className="text-sm text-gray-600">Fully bonded Alberta business</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-star-line text-3xl text-orange-600"></i>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">BBB A+ Rating</h4>
              <p className="text-sm text-gray-600">Better Business Bureau</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-medal-line text-3xl text-red-600"></i>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Edmonton Awards</h4>
              <p className="text-sm text-gray-600">Local business excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Work with Edmonton's HVAC Experts?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Experience the difference that professional, reliable HVAC service makes for your Edmonton home or business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.REACT_APP_NAVIGATE?.('/contact')}
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap"
            >
              Get Free Quote
            </button>
            <button 
              onClick={() => document.querySelector('#vapi-widget-floating-button')?.click()}
              className="bg-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors cursor-pointer whitespace-nowrap"
            >
              Talk to Our AI Assistant
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
