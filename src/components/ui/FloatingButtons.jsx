import { FaPhone, FaWhatsapp } from 'react-icons/fa'

const FloatingButtons = () => {
  return (
    <div className="fixed z-40 right-4 bottom-4 md:right-6 md:bottom-6 flex flex-col gap-3">
      <a 
        href="tel:+11234567890" 
        className="bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Call us"
      >
        <FaPhone size={20} />
      </a>
      
      <a 
        href="https://wa.me/11234567890" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="bg-success-600 hover:bg-success-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Contact us on WhatsApp"
      >
        <FaWhatsapp size={20} />
      </a>
    </div>
  )
}

export default FloatingButtons