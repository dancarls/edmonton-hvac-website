import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

export default function PrivacyPolicy() {
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
            <li className="text-gray-400">
              <i className="ri-arrow-right-s-line"></i>
            </li>
            <li className="text-gray-600">Privacy Policy</li>
          </ol>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            <strong>Last updated:</strong> January 1, 2024
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
            <p className="text-gray-600 mb-4">
              We collect information you provide directly to us, such as when you:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Request HVAC services or consultations</li>
              <li>Fill out contact forms on our website</li>
              <li>Call or email us directly</li>
              <li>Subscribe to our newsletter</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Provide HVAC services and support</li>
              <li>Schedule appointments and service calls</li>
              <li>Send service reminders and maintenance notifications</li>
              <li>Improve our services and customer experience</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Sharing</h2>
            <p className="text-gray-600 mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties except:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>With your explicit consent</li>
              <li>To trusted service providers who assist in our operations</li>
              <li>When required by law or to protect our rights</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
            <p className="text-gray-600 mb-4">
              We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
            <p className="text-gray-600 mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have questions about this Privacy Policy, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong> <a href="mailto:privacy@abbotsfordhvac.ca" className="text-blue-600 hover:text-blue-700">privacy@abbotsfordhvac.ca</a>
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Phone:</strong> <a href="tel:604-555-0123" className="text-blue-600 hover:text-blue-700">(604) 555-0123</a>
              </p>
              <p className="text-gray-700">
                <strong>Address:</strong> 123 Main Street, Abbotsford, BC V2S 1A1
              </p>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}