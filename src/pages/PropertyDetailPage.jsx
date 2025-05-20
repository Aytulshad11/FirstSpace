import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { FaArrowLeft } from 'react-icons/fa'
import PropertyDetails from '../components/property/PropertyDetails'
import PropertyCard from '../components/ui/PropertyCard'
import { properties } from '../data/propertiesData'

const PropertyDetailPage = () => {
  const { id } = useParams()
  const [property, setProperty] = useState(null)
  const [relatedProperties, setRelatedProperties] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    // Find the property
    const propertyId = parseInt(id)
    const foundProperty = properties.find(p => p.id === propertyId)
    
    if (foundProperty) {
      setProperty(foundProperty)
      
      // Find related properties (same category, but not the same property)
      const related = properties
        .filter(p => p.category === foundProperty.category && p.id !== propertyId)
        .slice(0, 3)
      
      setRelatedProperties(related)
    }
    
    setLoading(false)
    
    // Scroll to top when property changes
    window.scrollTo(0, 0)
  }, [id])
  
  if (loading) {
    return (
      <div className="pt-24 pb-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-secondary-600">Loading property details...</p>
        </div>
      </div>
    )
  }
  
  if (!property) {
    return (
      <div className="pt-24 pb-16 min-h-screen">
        <div className="container-custom py-12 text-center">
          <h1 className="text-3xl font-bold text-secondary-900 mb-4">Property Not Found</h1>
          <p className="text-secondary-600 mb-8">The property you are looking for does not exist or has been removed.</p>
          <Link to="/plans" className="btn btn-primary">
            Browse All Properties
          </Link>
        </div>
      </div>
    )
  }
  
  return (
    <div className="pt-24 pb-16">
      <Helmet>
        <title>{property.title} | Dream Home Builders</title>
        <meta 
          name="description" 
          content={`${property.description.substring(0, 160)}...`} 
        />
      </Helmet>
      
      <div className="container-custom">
        <div className="mb-6">
          <Link 
            to={`/${property.category}`} 
            className="inline-flex items-center text-primary-600 hover:text-primary-800 transition-colors"
          >
            <FaArrowLeft className="mr-2" />
            Back to {property.category.charAt(0).toUpperCase() + property.category.slice(1)}
          </Link>
        </div>
        
        <PropertyDetails property={property} />
        
        {/* Related Properties */}
        {relatedProperties.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-secondary-900 mb-6">Similar Properties</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProperties.map(property => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default PropertyDetailPage