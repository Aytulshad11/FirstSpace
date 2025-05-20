import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import Logo from "../../assets/Banner-Photoroom.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  
  const toggleMenu = () => setIsOpen(!isOpen)
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.mobile-menu') && !event.target.closest('.mobile-toggle')) {
        setIsOpen(false)
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Plans', path: '/plans' },
    { name: 'Elevations', path: '/elevations' },
    { name: 'Interiors', path: '/interiors' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ]
  
  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-100 shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          {/* <span className="text-2xl font-bold text-green-950">
            First<span className="text-yellow-500">Space</span>
          </span> */}
          <img src={Logo} alt="" 
          className='h-13 w-64'/>
          
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className={`text-sm font-medium ${isScrolled ? 'text-secondary-900 hover:text-primary-600' : 'text-white hover:text-accent-300'} transition duration-300`}
            >
              {link.name}
            </Link>
          ))}
        </div>
        
        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden mobile-toggle text-2xl focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? 
            <FaTimes className={isScrolled ? 'text-secondary-900' : 'text-white'} /> : 
            <FaBars className={isScrolled ? 'text-secondary-900' : 'text-white'} />
          }
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={`lg:hidden mobile-menu absolute w-full bg-white shadow-lg transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="flex flex-col space-y-4 p-6">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="text-secondary-900 hover:text-primary-600 font-medium transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar