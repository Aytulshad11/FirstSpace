import { Link } from 'react-router-dom'
import { FaRulerCombined } from 'react-icons/fa'

const standardSizes = [
  {
    id: 1,
    size: '30x60',
    title: '30x60 House Design',
    sqft: '1800 sq ft',
    description: 'Perfect for small to medium families.',
    image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 2,
    size: '40x80',
    title: '40x80 House Design',
    sqft: '3200 sq ft',
    description: 'Ideal for larger families with spacious living areas.',
    image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 3,
    size: '60x90',
    title: '60x90 House Design',
    sqft: '5400 sq ft',
    description: 'Luxurious design with abundant space for entertainment.',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 4,
    size: '20x40',
    title: '20x40 House Design',
    sqft: '800 sq ft',
    description: 'Compact and efficient design for urban living.',
    image: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
]

const StandardSizesSection = () => {
  return (
    <section className="section-padding bg-gray-50" id="standard-sizes">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
          <div>
            <h2 className="section-title ">Standard House Sizes</h2>
            <p className="section-subtitle">
              Pre-designed house plans for the most popular plot dimensions.
            </p>
          </div>
          <Link to="/plans" className="btn bg-green-700 btn-primary mt-4 md:mt-0">
            View All Plans
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {standardSizes.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-lg overflow-hidden shadow-card hover:shadow-card-hover 
                      transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-green-700 text-white py-1 px-3 rounded-full text-sm font-medium flex items-center">
                  <FaRulerCombined className="mr-1" />
                  {item.size}
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1 text-secondary-900">{item.title}</h3>
                <p className="text-green-700 text-sm font-medium mb-2">{item.sqft}</p>
                <p className="text-secondary-600 text-sm mb-4">{item.description}</p>
                <Link 
                  to={`/plans?size=${item.size}`} 
                  className="text-green-700 hover:text-green-800 font-medium text-sm inline-flex items-center"
                >
                  View Plans
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StandardSizesSection