import { Link } from 'react-router-dom'
import { FaBed, FaBath, FaRuler, FaMapMarkerAlt } from 'react-icons/fa'

const PropertyCard = ({ property }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-card hover:shadow-card-hover 
                  transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
      <Link to={`/property/${property.id}`} className="block relative">
        <div className="relative h-64 overflow-hidden">
          <img 
            src={property.images[0]} 
            alt={property.title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
          {property.category && (
            <div className="absolute top-4 left-4 bg-primary-600 text-white py-1 px-3 rounded-full text-sm font-medium">
              {property.category.charAt(0).toUpperCase() + property.category.slice(1)}
            </div>
          )}
        </div>
      </Link>
      
      <div className="p-4">
        <Link to={`/property/${property.id}`} className="block">
          <h3 className="text-lg font-semibold mb-1 text-secondary-900 hover:text-primary-600 transition-colors">
            {property.title}
          </h3>
        </Link>
        
        <div className="flex items-center mb-3 text-secondary-600">
          <FaMapMarkerAlt className="mr-1" size={14} />
          <span className="text-sm">{property.location}</span>
        </div>
        
        <p className="text-secondary-600 text-sm mb-4 line-clamp-2">{property.description}</p>
        
        {/* Property features */}
        <div className="flex flex-wrap gap-4 mb-4">
          {property.bedrooms && (
            <div className="flex items-center text-secondary-700">
              <FaBed className="mr-1" />
              <span className="text-sm">{property.bedrooms} {property.bedrooms === 1 ? 'Bedroom' : 'Bedrooms'}</span>
            </div>
          )}
          
          {property.bathrooms && (
            <div className="flex items-center text-secondary-700">
              <FaBath className="mr-1" />
              <span className="text-sm">{property.bathrooms} {property.bathrooms === 1 ? 'Bathroom' : 'Bathrooms'}</span>
            </div>
          )}
          
          {property.area && (
            <div className="flex items-center text-secondary-700">
              <FaRuler className="mr-1" />
              <span className="text-sm">{property.area} sq ft</span>
            </div>
          )}
        </div>
        
        <div className="flex items-center justify-between">
          {property.price && (
            <p className="text-primary-600 font-semibold">₹{property.price.toLocaleString('en-IN')}</p>
          )}
          
          <Link 
            to={`/property/${property.id}`} 
            className="text-primary-600 hover:text-primary-800 font-medium text-sm inline-flex items-center"
          >
            View Details
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PropertyCard