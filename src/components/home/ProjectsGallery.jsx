import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaMapMarkerAlt } from 'react-icons/fa'

// Import the project data
import { projects } from '../../data/projectsData'

const ProjectsGallery = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  
  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'north', name: 'North India' },
    { id: 'south', name: 'South India' },
    { id: 'west', name: 'West India' },
    { id: 'east', name: 'East India' }
  ]
  
  const filteredProjects = activeFilter === 'all' 
    ? projects.slice(0, 6) // Show only 6 projects on homepage
    : projects.filter(project => project.region === activeFilter).slice(0, 6)
  
  return (
    <section className="section-padding bg-white" id="projects">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Projects Completed</h2>
          <p className="section-subtitle mx-auto">
            We've successfully completed beautiful home designs across India.
          </p>
        </div>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${activeFilter === filter.id 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-gray-100 text-secondary-600 hover:bg-gray-200'}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.name}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-card hover:shadow-card-hover 
                      transition-all duration-300 transform hover:-translate-y-1"
            >
              <Link to={`/property/${project.id}`} className="block relative">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.images[0]} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <div className="flex items-center text-white">
                      <FaMapMarkerAlt className="mr-1" />
                      <span className="text-sm">{project.location}</span>
                    </div>
                  </div>
                </div>
              </Link>
              
              <div className="p-4">
                <Link to={`/property/${project.id}`} className="block">
                  <h3 className="text-lg font-semibold mb-2 text-secondary-900 hover:text-primary-600 transition-colors">
                    {project.title}
                  </h3>
                </Link>
                <p className="text-secondary-600 text-sm mb-3 line-clamp-2">{project.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {project.features.slice(0, 2).map((feature, index) => (
                      <span 
                        key={index}
                        className="bg-gray-100 text-secondary-700 px-2 py-1 rounded text-xs"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <Link 
                    to={`/property/${project.id}`} 
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
          ))}
        </div>
        
        {/* View All Link */}
        <div className="text-center mt-10">
          <Link to="/plans" className="btn btn-primary">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ProjectsGallery