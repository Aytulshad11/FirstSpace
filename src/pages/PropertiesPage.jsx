import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { FaFilter, FaSort, FaTimes } from 'react-icons/fa'
import PropertyCard from '../components/ui/PropertyCard'
import { properties } from '../data/propertiesData'

const PropertiesPage = ({ category }) => {
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const sizeParam = queryParams.get('size')
  
  const [filteredProperties, setFilteredProperties] = useState([])
  const [activeFilters, setActiveFilters] = useState({
    category: category || 'all',
    bedrooms: 'all',
    size: sizeParam || 'all',
    priceRange: 'all'
  })
  const [sortOption, setSortOption] = useState('newest')
  const [showFilters, setShowFilters] = useState(false)
  
  // Set page title based on category
  let pageTitle = 'All Properties'
  if (category === 'plans') pageTitle = 'House Plans'
  if (category === 'elevations') pageTitle = 'Elevations'
  if (category === 'interiors') pageTitle = 'Interior Designs'
  
  // Filter and sort properties
  useEffect(() => {
    let filtered = [...properties]
    
    // Filter by category
    if (activeFilters.category !== 'all') {
      filtered = filtered.filter(property => property.category === activeFilters.category)
    }
    
    // Filter by bedrooms
    if (activeFilters.bedrooms !== 'all') {
      filtered = filtered.filter(property => property.bedrooms === parseInt(activeFilters.bedrooms))
    }
    
    // Filter by size
    if (activeFilters.size !== 'all') {
      filtered = filtered.filter(property => property.size === activeFilters.size)
    }
    
    // Filter by price range
    if (activeFilters.priceRange !== 'all') {
      let min, max
      
      switch (activeFilters.priceRange) {
        case 'under20k':
          max = 20000
          filtered = filtered.filter(property => property.price < max)
          break
        case '20k-30k':
          min = 20000
          max = 30000
          filtered = filtered.filter(property => property.price >= min && property.price <= max)
          break
        case '30k-50k':
          min = 30000
          max = 50000
          filtered = filtered.filter(property => property.price >= min && property.price <= max)
          break
        case 'above50k':
          min = 50000
          filtered = filtered.filter(property => property.price > min)
          break
        default:
          break
      }
    }
    
    // Sort properties
    switch (sortOption) {
      case 'price-low':
        filtered.sort((a, b) => (a.price || 0) - (b.price || 0))
        break
      case 'price-high':
        filtered.sort((a, b) => (b.price || 0) - (a.price || 0))
        break
      case 'newest':
        filtered.sort((a, b) => {
          const yearA = a.yearBuilt ? parseInt(a.yearBuilt) : 0
          const yearB = b.yearBuilt ? parseInt(b.yearBuilt) : 0
          return yearB - yearA
        })
        break
      default:
        break
    }
    
    setFilteredProperties(filtered)
  }, [activeFilters, sortOption, category])
  
  // Update category filter when prop changes
  useEffect(() => {
    setActiveFilters(prev => ({
      ...prev,
      category: category || 'all'
    }))
  }, [category])
  
  // Handle filter changes
  const handleFilterChange = (filterName, value) => {
    setActiveFilters(prev => ({
      ...prev,
      [filterName]: value
    }))
  }
  
  // Reset all filters
  const resetFilters = () => {
    setActiveFilters({
      category: category || 'all',
      bedrooms: 'all',
      size: 'all',
      priceRange: 'all'
    })
    setSortOption('newest')
  }
  
  return (
    <div className="pt-20 pb-16">
      <Helmet>
        <title>{pageTitle} | Dream Home Builders</title>
        <meta 
          name="description" 
          content={`Browse our collection of ${pageTitle.toLowerCase()}. Find the perfect design for your dream home.`} 
        />
      </Helmet>
      
      <div className="bg-gray-50 py-12">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">{pageTitle}</h1>
          <p className="text-secondary-600 max-w-3xl">
            Browse our collection of {pageTitle.toLowerCase()} designed by professional architects.
            Find the perfect design for your dream home.
          </p>
        </div>
      </div>
      
      <div className="container-custom py-8">
        {/* Mobile Filter Toggle */}
        <div className="flex justify-between items-center mb-6 lg:hidden">
          <button
            className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-md"
            onClick={() => setShowFilters(!showFilters)}
          >
            <FaFilter /> {showFilters ? 'Hide Filters' : 'Show Filters'}
          </button>
          
          <div className="flex items-center gap-2">
            <label htmlFor="mobile-sort" className="text-secondary-700">Sort:</label>
            <select
              id="mobile-sort"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="border border-gray-300 rounded-md py-2 px-3 text-sm bg-white"
            >
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Filters Sidebar */}
          <div className={`lg:w-1/4 bg-white p-6 rounded-lg shadow-md self-start ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-secondary-900">Filters</h2>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={resetFilters}
                  className="text-primary-600 hover:text-primary-800 text-sm flex items-center"
                >
                  Reset <FaTimes className="ml-1" />
                </button>
                
                <button 
                  className="lg:hidden"
                  onClick={() => setShowFilters(false)}
                >
                  <FaTimes />
                </button>
              </div>
            </div>
            
            {/* Category Filter */}
            {!category && (
              <div className="mb-6">
                <h3 className="font-medium text-secondary-900 mb-3">Category</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="category"
                      value="all"
                      checked={activeFilters.category === 'all'}
                      onChange={() => handleFilterChange('category', 'all')}
                      className="mr-2"
                    />
                    <span>All Categories</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="category"
                      value="plans"
                      checked={activeFilters.category === 'plans'}
                      onChange={() => handleFilterChange('category', 'plans')}
                      className="mr-2"
                    />
                    <span>Plans</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="category"
                      value="elevations"
                      checked={activeFilters.category === 'elevations'}
                      onChange={() => handleFilterChange('category', 'elevations')}
                      className="mr-2"
                    />
                    <span>Elevations</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="category"
                      value="interiors"
                      checked={activeFilters.category === 'interiors'}
                      onChange={() => handleFilterChange('category', 'interiors')}
                      className="mr-2"
                    />
                    <span>Interiors</span>
                  </label>
                </div>
              </div>
            )}
            
            {/* Bedroom Filter */}
            <div className="mb-6">
              <h3 className="font-medium text-secondary-900 mb-3">Bedrooms</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="bedrooms"
                    value="all"
                    checked={activeFilters.bedrooms === 'all'}
                    onChange={() => handleFilterChange('bedrooms', 'all')}
                    className="mr-2"
                  />
                  <span>Any</span>
                </label>
                {[2, 3, 4, 5].map(num => (
                  <label key={num} className="flex items-center">
                    <input
                      type="radio"
                      name="bedrooms"
                      value={num}
                      checked={activeFilters.bedrooms === num.toString()}
                      onChange={() => handleFilterChange('bedrooms', num.toString())}
                      className="mr-2"
                    />
                    <span>{num} {num === 1 ? 'Bedroom' : 'Bedrooms'}</span>
                  </label>
                ))}
              </div>
            </div>
            
            {/* Size Filter */}
            <div className="mb-6">
              <h3 className="font-medium text-secondary-900 mb-3">Size</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="size"
                    value="all"
                    checked={activeFilters.size === 'all'}
                    onChange={() => handleFilterChange('size', 'all')}
                    className="mr-2"
                  />
                  <span>Any Size</span>
                </label>
                {['20x40', '30x50', '30x60', '40x60', '40x80', '60x90'].map(size => (
                  <label key={size} className="flex items-center">
                    <input
                      type="radio"
                      name="size"
                      value={size}
                      checked={activeFilters.size === size}
                      onChange={() => handleFilterChange('size', size)}
                      className="mr-2"
                    />
                    <span>{size}</span>
                  </label>
                ))}
              </div>
            </div>
            
            {/* Price Range Filter */}
            <div>
              <h3 className="font-medium text-secondary-900 mb-3">Price Range</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="priceRange"
                    value="all"
                    checked={activeFilters.priceRange === 'all'}
                    onChange={() => handleFilterChange('priceRange', 'all')}
                    className="mr-2"
                  />
                  <span>Any Price</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="priceRange"
                    value="under20k"
                    checked={activeFilters.priceRange === 'under20k'}
                    onChange={() => handleFilterChange('priceRange', 'under20k')}
                    className="mr-2"
                  />
                  <span>Under ₹20,000</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="priceRange"
                    value="20k-30k"
                    checked={activeFilters.priceRange === '20k-30k'}
                    onChange={() => handleFilterChange('priceRange', '20k-30k')}
                    className="mr-2"
                  />
                  <span>₹20,000 - ₹30,000</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="priceRange"
                    value="30k-50k"
                    checked={activeFilters.priceRange === '30k-50k'}
                    onChange={() => handleFilterChange('priceRange', '30k-50k')}
                    className="mr-2"
                  />
                  <span>₹30,000 - ₹50,000</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="priceRange"
                    value="above50k"
                    checked={activeFilters.priceRange === 'above50k'}
                    onChange={() => handleFilterChange('priceRange', 'above50k')}
                    className="mr-2"
                  />
                  <span>Above ₹50,000</span>
                </label>
              </div>
            </div>
          </div>
          
          {/* Property Listings */}
          <div className="lg:w-3/4">
            <div className="flex justify-between items-center mb-6 hidden lg:flex">
              <p className="text-secondary-600">
                Found <span className="font-medium text-secondary-900">{filteredProperties.length}</span> properties
              </p>
              
              <div className="flex items-center gap-3">
                <label htmlFor="desktop-sort" className="text-secondary-700">Sort by:</label>
                <select
                  id="desktop-sort"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="border border-gray-300 rounded-md py-2 px-3 text-sm bg-white"
                >
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>
            
            {filteredProperties.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProperties.map(property => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            ) : (
              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">No properties found</h3>
                <p className="text-secondary-600 mb-4">Try adjusting your filters to find properties.</p>
                <button
                  onClick={resetFilters}
                  className="btn btn-primary"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropertiesPage