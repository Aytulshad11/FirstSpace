import { useState, useRef } from 'react'
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa'

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    location: 'Delhi',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 5,
    text: 'We are extremely satisfied with the house plan designed by DreamHome. The team understood our requirements perfectly and delivered a beautiful design that maximizes space utilization and natural light.'
  },
  {
    id: 2,
    name: 'Priya Sharma',
    location: 'Mumbai',
    avatar: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 5,
    text: 'The elevation design for our bungalow was stunning! Everyone in our neighborhood asks about who designed our house. Thank you for making our dream home stand out.'
  },
  {
    id: 3,
    name: 'Karthik Reddy',
    location: 'Hyderabad',
    avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4,
    text: 'Working with DreamHome was a breeze. Their interior design suggestions were practical and aesthetically pleasing. Our home feels more spacious and functional now.'
  },
  {
    id: 4,
    name: 'Meera Patel',
    location: 'Ahmedabad',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 5,
    text: 'The 3D visualization of our house helped us make better decisions before construction. The final result matches exactly what was shown in the renders. Highly recommended!'
  }
]

const SuccessStories = () => {
  const scrollRef = useRef(null)
  const [scrollPosition, setScrollPosition] = useState(0)
  
  const scroll = (direction) => {
    const container = scrollRef.current
    if (container) {
      const scrollAmount = container.clientWidth * 0.8
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
    <section className="section-padding bg-gray-50" id="testimonials">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Success Stories</h2>
          <p className="section-subtitle mx-auto">
            Hear what our clients have to say about their experience with us.
          </p>
        </div>
        
        <div className="relative">
          {/* Navigation Buttons */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-3 
                    text-secondary-800 hover:text-primary-600 transition-colors duration-300 hidden md:block"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft size={18} />
          </button>
          
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-3 
                    text-secondary-800 hover:text-primary-600 transition-colors duration-300 hidden md:block"
            aria-label="Next testimonial"
          >
            <FaChevronRight size={18} />
          </button>
          
          {/* Testimonials Slider */}
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 pb-6 scrollbar-hide snap-x"
          >
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="min-w-[320px] md:min-w-[400px] flex-shrink-0 bg-white rounded-lg shadow-card p-6 snap-center"
              >
                <div className="mb-4 text-accent-500">
                  <FaQuoteLeft size={24} />
                </div>
                
                <div className="mb-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <FaStar 
                      key={i} 
                      className={i < testimonial.rating ? "text-warning-400" : "text-gray-300"} 
                      size={16}
                    />
                  ))}
                </div>
                
                {/* <p className="text-secondary-700 mb-6 italic">"{testimonial.text}"</p>
                 */}
                 <p className="text-secondary-700 mb-6 italic line-clamp-3 max-w-md">
  "{testimonial.text}"
</p>

                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4" 
                  />
                  <div>
                    <h4 className="font-semibold text-secondary-900">{testimonial.name}</h4>
                    <p className="text-secondary-500 text-sm">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SuccessStories