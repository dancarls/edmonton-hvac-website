
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const navigate = useNavigate();

  // Add timeout for dropdown delay
  let dropdownTimeout: NodeJS.Timeout;

  const handleMouseEnter = () => {
    clearTimeout(dropdownTimeout);
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeout = setTimeout(() => {
      setIsServicesOpen(false);
    }, 200); // 200ms delay before closing
  };

  const services = [
    { name: 'Heating Services', path: '/services/heating' },
    { name: 'Cooling Services', path: '/services/cooling' },
    { name: 'Ventilation Services', path: '/services/ventilation' },
    { name: 'Indoor Air Quality', path: '/services/air-quality' },
    { name: 'Plumbing & Water Heating', path: '/services/plumbing' },
    { name: 'Maintenance Services', path: '/services/maintenance' },
    { name: 'Commercial HVAC', path: '/services/commercial' },
    { name: 'Emergency Services', path: '/services/emergency' }
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <button 
              onClick={() => navigate('/')}
              className="text-2xl font-bold text-green-500 cursor-pointer"
              style={{ fontFamily: '"Pacifico", serif' }}
            >
              Edmonton HVAC
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => navigate('/')}
              className="text-gray-700 hover:text-green-500 font-medium cursor-pointer"
            >
              Home
            </button>
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="text-gray-700 hover:text-green-500 font-medium flex items-center cursor-pointer"
              >
                Services
                <div className="w-4 h-4 flex items-center justify-center ml-1">
                  <i className="ri-arrow-down-s-line" />
                </div>
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-xl border z-50">
                  <div className="py-2">
                    {services.map((service, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          navigate(service.path);
                          setIsServicesOpen(false);
                        }}
                        className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 cursor-pointer transition-colors"
                      >
                        {service.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button 
              onClick={() => navigate('/about')}
              className="text-gray-700 hover:text-green-500 font-medium cursor-pointer"
            >
              About
            </button>
            <button 
              onClick={() => navigate('/blog')}
              className="text-gray-700 hover:text-green-500 font-medium cursor-pointer"
            >
              Blog
            </button>
            <button 
              onClick={() => navigate('/contact')}
              className="text-gray-700 hover:text-green-500 font-medium cursor-pointer"
            >
              Contact
            </button>
          </nav>

          {/* CTA Buttons - Hidden on small screens, shown on larger screens */}
          <div className="hidden lg:flex items-center space-x-4">
            <button 
              onClick={() => (document.querySelector('#vapi-widget-floating-button') as HTMLElement)?.click()}
              className="text-green-500 font-semibold hover:text-green-600 cursor-pointer whitespace-nowrap"
            >
              Talk to Our AI Assistant
            </button>
            <button 
              onClick={() => (document.querySelector('#vapi-widget-floating-button') as HTMLElement)?.click()}
              className="bg-green-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-600 transition-colors cursor-pointer whitespace-nowrap"
            >
              Get Quote
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 cursor-pointer bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-2xl text-gray-700`} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t bg-white">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => {
                  navigate('/');
                  setIsMenuOpen(false);
                }}
                className="text-gray-700 hover:text-blue-600 font-medium text-left cursor-pointer py-2"
              >
                Home
              </button>
              
              {services.map((service, index) => (
                <button
                  key={index}
                  onClick={() => {
                    navigate(service.path);
                    setIsMenuOpen(false);
                  }}
                  className="text-gray-700 hover:text-green-500 font-medium text-left pl-4 cursor-pointer py-2"
                >
                  {service.name}
                </button>
              ))}
              
              <button 
                onClick={() => {
                  navigate('/about');
                  setIsMenuOpen(false);
                }}
                className="text-gray-700 hover:text-green-500 font-medium text-left cursor-pointer py-2"
              >
                About
              </button>
              <button 
                onClick={() => {
                  navigate('/blog');
                  setIsMenuOpen(false);
                }}
                className="text-gray-700 hover:text-green-500 font-medium text-left cursor-pointer py-2"
              >
                Blog
              </button>
              <button 
                onClick={() => {
                  navigate('/contact');
                  setIsMenuOpen(false);
                }}
                className="text-gray-700 hover:text-green-500 font-medium text-left cursor-pointer py-2"
              >
                Contact
              </button>
              <div className="pt-4 border-t">
                <button 
                  onClick={() => {
                    (document.querySelector('#vapi-widget-floating-button') as HTMLElement)?.click();
                    setIsMenuOpen(false);
                  }}
                  className="block text-green-500 font-semibold mb-3 cursor-pointer py-2"
                >
                  Talk to Our AI Assistant
                </button>
                <button 
                  onClick={() => {
                    (document.querySelector('#vapi-widget-floating-button') as HTMLElement)?.click();
                    setIsMenuOpen(false);
                  }}
                  className="bg-green-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-600 transition-colors cursor-pointer whitespace-nowrap"
                >
                  Get Quote
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
