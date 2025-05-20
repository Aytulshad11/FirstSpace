import { Link } from 'react-router-dom'
import { FaClock, FaMapMarkerAlt } from 'react-icons/fa'

// Ongoing projects data
const ongoingProjects = [
  {
    id: 101,
    title: 'Modern Villa Complex',
    location: 'Bangalore, Karnataka',
    progress: 75,
    completionDate: 'December 2025',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 102,
    title: 'Eco-friendly Township',
    location: 'Pune, Maharashtra',
    progress: 40,
    completionDate: 'March 2026',
    image: 'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 103,
    title: 'Luxury Apartments',
    location: 'Gurgaon, Haryana',
    progress: 60,
    completionDate: 'August 2025',
    image: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
]

const OngoingProjects = () => {
  return (
    <section className="section-padding bg-white" id="ongoing-projects">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
          <div>
            <h2 className="section-title">Ongoing Projects</h2>
            <p className="section-subtitle">
              Check out our latest projects currently in progress.
            </p>
          </div>
          <Link to="/plans" className="btn btn-primary mt-4 md:mt-0">
            View All
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ongoingProjects.map((project) => (
            <div 
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-card hover:shadow-card-hover 
                      transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-primary-600 text-white py-1 px-3 rounded-full text-sm font-medium flex items-center">
                  <FaClock className="mr-1" />
                  {project.progress}% Complete
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-secondary-900">{project.title}</h3>
                
                <div className="flex items-center mb-3 text-secondary-600">
                  <FaMapMarkerAlt className="mr-1" size={14} />
                  <span className="text-sm">{project.location}</span>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-3">
                  <div 
                    className="bg-primary-600 h-2.5 rounded-full" 
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
                
                <div className="flex items-center justify-between">
                  <p className="text-sm text-secondary-600">
                    <span className="font-medium">Expected completion:</span> {project.completionDate}
                  </p>
                  
                  <Link 
                    to={`/property/${project.id}`} 
                    className="text-primary-600 hover:text-primary-800 font-medium text-sm inline-flex items-center"
                  >
                    Details
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OngoingProjects