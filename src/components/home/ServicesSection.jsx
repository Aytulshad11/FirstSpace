import { useState, useRef } from 'react'
import { FaChevronLeft, FaChevronRight, FaHome, FaBuilding, FaCouch, FaCube } from 'react-icons/fa'

const services = [
  {
    id: 1,
    title: 'Floor Plan',
    description: 'Custom floor plans designed for your specific needs and preferences.',
    icon: FaHome,
    bgColor: 'bg-primary-500',
  },
  {
    id: 2,
    title: 'Elevation',
    description: 'Beautiful exterior designs that enhance the curb appeal of your home.',
    icon: FaBuilding,
    bgColor: 'bg-accent-500',
  },
  {
    id: 3,
    title: 'Interior Design',
    description: 'Thoughtful interior layouts that maximize space and functionality.',
    icon: FaCouch,
    bgColor: 'bg-success-500',
  },
  {
    id: 4,
    title: '3D Front Design',
    description: 'Realistic 3D renderings to visualize your home before construction.',
    icon: FaCube,
    bgColor: 'bg-warning-500',
  },
]

const ServicesSection = () => {
  const scrollRef = useRef(null)
  const [scrollPosition, setScrollPosition] = useState(0)
  
  const scroll = (direction) => {
    const container = scrollRef.current
    if (container) {
      const scrollAmount = 300
      const newPosition = direction === 'left' 
        ? Math.max(0, scrollPosition - scrollAmount)
        : Math.min(container.scrollWidth - container.clientWidth, scrollPosition + scrollAmount)
      
      container.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      })
      
      setScrollPosition(newPosition)
    }
  }
  
  return (
    <section className="section-padding bg-white" id="services">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle mx-auto">
            We provide a range of professional services to help you design your dream home.
          </p>
        </div>
        
        <div className="relative">
          {/* Scroll buttons */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 
                    text-secondary-800 hover:text-primary-600 transition-colors duration-300 hidden md:block"
            aria-label="Scroll left"
          >
            <FaChevronLeft size={20} />
          </button>
          
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 
                    text-secondary-800 hover:text-primary-600 transition-colors duration-300 hidden md:block"
            aria-label="Scroll right"
          >
            <FaChevronRight size={20} />
          </button>
          
          {/* Scrollable container */}
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x"
          >
            {/* {services.map((service) => (
              <div 
                key={service.id}
                className="min-w-[300px] flex-shrink-0 bg-white rounded-lg shadow-card hover:shadow-card-hover 
                        transition-all duration-300 transform hover:-translate-y-1 snap-center"
              >
                <div className="p-6">
                  <div className={`w-16 h-16 ${service.bgColor} rounded-full flex items-center justify-center mb-6 text-white`}>
                    <service.icon size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-secondary-900">{service.title}</h3>
                  <p className="text-secondary-600">{service.description}</p>
                </div>
              </div>
            ))} */}
              {services.map((service) => (
  <div 
    key={service.id}
    className="min-w-[180px] flex-shrink-0 flex flex-col items-center mx-3 snap-center"
  >
    {/* Circular Icon Container */}
    <div 
      className={`w-[180px] h-[180px] ${service.bgColor} rounded-full flex items-center justify-center shadow-card 
                  hover:shadow-card-hover transition-transform duration-300 transform hover:-translate-y-1`}
    >
      <service.icon size={40} className="text-white" />
    </div>

    {/* Title Below Circle */}
    <h3 className="mt-4 text-center text-base font-semibold text-secondary-900">
      {service.title}
    </h3>
  </div>
))}

          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection