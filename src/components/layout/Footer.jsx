import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-secondary-900 text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              First<span className="text-accent-400">Space</span>
            </h3>
            <p className="text-gray-300 mb-4 text-sm">
              We specialize in creating beautiful home plans, elevations, and interior designs 
              tailored to your needs and preferences.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-accent-400 transition-colors duration-300">
                <FaFacebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-accent-400 transition-colors duration-300">
                <FaTwitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-accent-400 transition-colors duration-300">
                <FaInstagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-accent-400 transition-colors duration-300">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-accent-400 transition-colors duration-300 text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/plans" className="text-gray-300 hover:text-accent-400 transition-colors duration-300 text-sm">
                  Plans
                </Link>
              </li>
              <li>
                <Link to="/elevations" className="text-gray-300 hover:text-accent-400 transition-colors duration-300 text-sm">
                  Elevations
                </Link>
              </li>
              <li>
                <Link to="/interiors" className="text-gray-300 hover:text-accent-400 transition-colors duration-300 text-sm">
                  Interiors
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-accent-400 transition-colors duration-300 text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-accent-400 transition-colors duration-300 text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaPhone className="mt-1 text-accent-400 mr-3" />
                <span className="text-gray-300 text-sm">+1 (123) 456-7890</span>
              </li>
              <li className="flex items-start">
                <FaEnvelope className="mt-1 text-accent-400 mr-3" />
                <span className="text-gray-300 text-sm">info@firstspace.com</span>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 text-accent-400 mr-3" />
                <span className="text-gray-300 text-sm">
                  123 Dream Home Street,<br />
                  Architecture City, AC 12345
                </span>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4 text-sm">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <form className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Your Email" 
                className="px-4 py-2 bg-secondary-800 border border-secondary-700 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-400 text-white text-sm"
                required
              />
              <button 
                type="submit" 
                className="bg-accent-500 hover:bg-accent-600 text-white py-2 px-4 rounded-md transition-colors duration-300 text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-secondary-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} FirstSpace. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-accent-400 transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-accent-400 transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer