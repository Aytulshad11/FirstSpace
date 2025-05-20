import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBed, FaBath, FaRuler, FaMapMarkerAlt, FaCheck, FaPhone, FaWhatsapp, FaEnvelope } from 'react-icons/fa'

const PropertyDetails = ({ property }) => {
  const [mainImage, setMainImage] = useState(property.images[0])
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Property Gallery */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
        <div className="space-y-4">
          {/* Main Image */}
          <div className="rounded-lg overflow-hidden h-80">
            <img 
              src={mainImage} 
              alt={property.title} 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Thumbnail Gallery */}
          <div className="grid grid-cols-5 gap-2">
            {property.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setMainImage(image)}
                className={`rounded-lg overflow-hidden h-16 border-2 transition-all ${mainImage === image ? 'border-primary-500' : 'border-transparent'}`}
              >
                <img 
                  src={image} 
                  alt={`${property.title} view ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
        
        {/* Property Information */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center">
              {property.category && (
                <span className="bg-primary-100 text-primary-800 text-xs font-medium py-1 px-2 rounded mr-2">
                  {property.category.charAt(0).toUpperCase() + property.category.slice(1)}
                </span>
              )}
              {property.status && (
                <span className="bg-success-100 text-success-800 text-xs font-medium py-1 px-2 rounded">
                  {property.status}
                </span>
              )}
            </div>
            
            <h1 className="text-2xl md:text-3xl font-bold text-secondary-900 mt-2">
              {property.title}
            </h1>
            
            <div className="flex items-center mt-2 text-secondary-600">
              <FaMapMarkerAlt className="mr-1" />
              <span>{property.location}</span>
            </div>
          </div>
          
          {property.price && (
            <div className="bg-primary-50 p-4 rounded-lg">
              <div className="flex items-end">
                <h3 className="text-2xl font-bold text-primary-800">₹{property.price.toLocaleString('en-IN')}</h3>
                {property.pricePerSqFt && (
                  <span className="text-secondary-600 ml-2 text-sm">
                    (₹{property.pricePerSqFt}/sq ft)
                  </span>
                )}
              </div>
            </div>
          )}
          
          {/* Property Features */}
          <div className="grid grid-cols-3 gap-4 py-4 border-t border-b border-gray-200">
            {property.bedrooms && (
              <div className="text-center">
                <div className="flex justify-center">
                  <FaBed className="text-primary-600 text-xl" />
                </div>
                <p className="mt-1 text-sm text-secondary-800 font-medium">{property.bedrooms} Bedrooms</p>
              </div>
            )}
            
            {property.bathrooms && (
              <div className="text-center">
                <div className="flex justify-center">
                  <FaBath className="text-primary-600 text-xl" />
                </div>
                <p className="mt-1 text-sm text-secondary-800 font-medium">{property.bathrooms} Bathrooms</p>
              </div>
            )}
            
            {property.area && (
              <div className="text-center">
                <div className="flex justify-center">
                  <FaRuler className="text-primary-600 text-xl" />
                </div>
                <p className="mt-1 text-sm text-secondary-800 font-medium">{property.area} sq ft</p>
              </div>
            )}
          </div>
          
          {/* Contact Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <a 
              href="tel:+11234567890" 
              className="bg-primary-600 hover:bg-primary-700 text-white py-2 rounded flex items-center justify-center text-sm transition-colors"
            >
              <FaPhone className="mr-1" /> Call Now
            </a>
            <a 
              href="https://wa.me/11234567890" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-success-600 hover:bg-success-700 text-white py-2 rounded flex items-center justify-center text-sm transition-colors"
            >
              <FaWhatsapp className="mr-1" /> WhatsApp
            </a>
            <a 
              href="mailto:info@dreamhome.com" 
              className="bg-secondary-600 hover:bg-secondary-700 text-white py-2 rounded flex items-center justify-center text-sm transition-colors"
            >
              <FaEnvelope className="mr-1" /> Email
            </a>
          </div>
        </div>
      </div>
      
      {/* Property Description & Features */}
      <div className="p-6 border-t border-gray-200">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-xl font-semibold mb-4 text-secondary-900">About This Property</h2>
            <p className="text-secondary-700 whitespace-pre-line mb-6">
              {property.description}
            </p>
            
            {property.features && property.features.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-3 text-secondary-900">Property Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                  {property.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-secondary-700">
                      <FaCheck className="text-success-500 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          <div className="bg-gray-50 p-5 rounded-lg self-start">
            <h3 className="text-lg font-semibold mb-4 text-secondary-900">Property Details</h3>
            <ul className="space-y-3">
              {property.propertyType && (
                <li className="flex justify-between">
                  <span className="text-secondary-600">Property Type:</span>
                  <span className="font-medium text-secondary-900">{property.propertyType}</span>
                </li>
              )}
              {property.size && (
                <li className="flex justify-between">
                  <span className="text-secondary-600">Size:</span>
                  <span className="font-medium text-secondary-900">{property.size}</span>
                </li>
              )}
              {property.yearBuilt && (
                <li className="flex justify-between">
                  <span className="text-secondary-600">Year Built:</span>
                  <span className="font-medium text-secondary-900">{property.yearBuilt}</span>
                </li>
              )}
              {property.floors && (
                <li className="flex justify-between">
                  <span className="text-secondary-600">Floors:</span>
                  <span className="font-medium text-secondary-900">{property.floors}</span>
                </li>
              )}
              {property.parking && (
                <li className="flex justify-between">
                  <span className="text-secondary-600">Parking:</span>
                  <span className="font-medium text-secondary-900">{property.parking}</span>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropertyDetails