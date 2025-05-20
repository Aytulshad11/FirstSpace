import { useState } from 'react'
import { Helmet } from 'react-helmet'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    service: 'plans'
  })
  
  const [errors, setErrors] = useState({})
  const [submitStatus, setSubmitStatus] = useState(null)
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      })
    }
  }
  
  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^\d{10}$/.test(formData.phone.replace(/[^0-9]/g, ''))) {
      newErrors.phone = 'Phone number must be 10 digits'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }
    
    return newErrors
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    
    const formErrors = validateForm()
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors)
      return
    }
    
    // Simulate form submission
    setSubmitStatus('submitting')
    
    // Mock API call
    setTimeout(() => {
      setSubmitStatus('success')
      
      // Reset form after success
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        service: 'plans'
      })
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    }, 1500)
  }
  
  return (
    <div className="pt-20 pb-16">
      <Helmet>
        <title>Contact Us | Dream Home Builders</title>
        <meta 
          name="description" 
          content="Get in touch with Dream Home Builders. Contact us for custom home plans, elevations, and interior designs. We're here to help build your dream home." 
        />
      </Helmet>
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary-800 to-primary-600 text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg text-white/90">
              Have questions or ready to start your project? We're here to help.
            </p>
          </div>
        </div>
      </div>
      
      {/* Contact Info and Form */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1 bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-secondary-900 mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-100 text-primary-600 p-3 rounded-full mr-4">
                    <FaPhone />
                  </div>
                  <div>
                    <h3 className="font-medium text-secondary-900">Phone</h3>
                    <p className="text-secondary-600">+1 (123) 456-7890</p>
                    <p className="text-secondary-600">+1 (987) 654-3210</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 text-primary-600 p-3 rounded-full mr-4">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h3 className="font-medium text-secondary-900">Email</h3>
                    <p className="text-secondary-600">info@firstspace.com</p>
                    <p className="text-secondary-600">support@firstspace.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary-100 text-primary-600 p-3 rounded-full mr-4">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h3 className="font-medium text-secondary-900">Office Address</h3>
                    <p className="text-secondary-600">
                      123 Dream Home Street,<br />
                      Architecture City, AC 12345
                    </p>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-200">
                  <h3 className="font-medium text-secondary-900 mb-3">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-primary-100 text-primary-600 p-3 rounded-full hover:bg-primary-200 transition-colors">
                      <FaFacebook />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-primary-100 text-primary-600 p-3 rounded-full hover:bg-primary-200 transition-colors">
                      <FaTwitter />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-primary-100 text-primary-600 p-3 rounded-full hover:bg-primary-200 transition-colors">
                      <FaInstagram />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-primary-100 text-primary-600 p-3 rounded-full hover:bg-primary-200 transition-colors">
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-200">
                  <h3 className="font-medium text-secondary-900 mb-3">Business Hours</h3>
                  <div className="space-y-1 text-secondary-600">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-secondary-900 mb-6">Send Us a Message</h2>
              
              {submitStatus === 'success' ? (
                <div className="bg-success-100 text-success-800 p-4 rounded-lg mb-6">
                  <h3 className="font-semibold mb-1">Message Sent Successfully!</h3>
                  <p>Thank you for contacting us. We'll get back to you as soon as possible.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 rounded-md border ${errors.name ? 'border-error-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-primary-500`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-error-600">{errors.name}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 rounded-md border ${errors.email ? 'border-error-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-primary-500`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-error-600">{errors.email}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 rounded-md border ${errors.phone ? 'border-error-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-primary-500`}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-sm text-error-600">{errors.phone}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-secondary-700 mb-1">
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                      >
                        <option value="plans">House Plans</option>
                        <option value="elevations">Elevations</option>
                        <option value="interiors">Interior Design</option>
                        <option value="3d">3D Designs</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-sm font-medium text-secondary-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-1">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 rounded-md border ${errors.message ? 'border-error-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-primary-500`}
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-sm text-error-600">{errors.message}</p>
                    )}
                  </div>
                  
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      disabled={submitStatus === 'submitting'}
                      className={`px-6 py-3 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ${submitStatus === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {submitStatus === 'submitting' ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Map */}
      <section className="pb-16">
        <div className="container-custom">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-96 w-full">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242118.18123201047!2d73.69815756293744!3d18.524405966617583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1659617440454!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      
      {/* Quick Contact Options */}
      <section className="pb-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-4">Quick Contact Options</h2>
            <p className="text-secondary-600 max-w-2xl mx-auto">
              Choose the most convenient way to reach us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a 
              href="tel:+11234567890" 
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="bg-primary-100 text-primary-600 p-4 rounded-full mb-4">
                <FaPhone size={24} />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">Call Us</h3>
              <p className="text-secondary-600 text-center">Speak directly with our team</p>
              <span className="mt-2 text-primary-600 font-medium">+1 (123) 456-7890</span>
            </a>
            
            <a 
              href="https://wa.me/11234567890" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="bg-success-100 text-success-600 p-4 rounded-full mb-4">
                <FaWhatsapp size={24} />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">WhatsApp</h3>
              <p className="text-secondary-600 text-center">Chat with us instantly</p>
              <span className="mt-2 text-success-600 font-medium">+1 (123) 456-7890</span>
            </a>
            
            <a 
              href="mailto:info@dreamhome.com" 
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="bg-accent-100 text-accent-600 p-4 rounded-full mb-4">
                <FaEnvelope size={24} />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">Email Us</h3>
              <p className="text-secondary-600 text-center">Send us an email anytime</p>
              <span className="mt-2 text-accent-600 font-medium">info@dreamhome.com</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage