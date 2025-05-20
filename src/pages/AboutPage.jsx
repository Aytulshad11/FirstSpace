import { Helmet } from 'react-helmet'
import { FaUsers, FaBuilding, FaMedal, FaClipboardCheck } from 'react-icons/fa'

const AboutPage = () => {
  return (
    <div className="pt-20 pb-16">
      <Helmet>
        <title>About Us | Dream Home Builders</title>
        <meta 
          name="description" 
          content="Learn about Dream Home Builders, our team, our mission, and our approach to creating beautiful home designs across India." 
        />
      </Helmet>
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary-800 to-primary-600 text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">About Dream Home Builders</h1>
            <p className="text-lg text-white/90">
              Building your dreams with innovative designs and quality craftsmanship since 2015
            </p>
          </div>
        </div>
      </div>
      
      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-4">Our Story</h2>
              <p className="text-secondary-700 mb-4">
                Dream Home Builders was founded in 2015 with a simple mission: to help every Indian family design and build their dream home, regardless of budget constraints.
              </p>
              <p className="text-secondary-700 mb-4">
                Starting as a small team of three architects in Bangalore, we've grown to a nationwide network of professionals serving clients across India. Our journey has been marked by a commitment to innovation, quality, and customer satisfaction.
              </p>
              <p className="text-secondary-700">
                Today, we pride ourselves on creating beautiful, functional home designs that reflect the unique needs and aspirations of each client while respecting local architectural traditions and modern sustainability practices.
              </p>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Dream Home Builders team" 
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg hidden md:block">
                <p className="text-primary-600 font-bold">8+ Years</p>
                <p className="text-secondary-700">of excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Statistics */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-4">Our Impact</h2>
            <p className="text-secondary-600 max-w-2xl mx-auto">
              We've helped thousands of families across India realize their dream homes, from compact urban apartments to sprawling countryside villas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-primary-600 text-4xl font-bold mb-2">2,500+</div>
              <div className="text-secondary-700">Projects Completed</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-primary-600 text-4xl font-bold mb-2">28</div>
              <div className="text-secondary-700">States Covered</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-primary-600 text-4xl font-bold mb-2">50+</div>
              <div className="text-secondary-700">Expert Architects</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-primary-600 text-4xl font-bold mb-2">98%</div>
              <div className="text-secondary-700">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-4">Our Core Values</h2>
            <p className="text-secondary-600 max-w-2xl mx-auto">
              These foundational principles guide our approach to every project and interaction.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 text-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUsers size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-secondary-900">Client-Centric</h3>
              <p className="text-secondary-600">
                We listen attentively to our clients' needs and preferences, ensuring each design reflects their unique vision.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-accent-100 text-accent-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaBuilding size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-secondary-900">Design Excellence</h3>
              <p className="text-secondary-600">
                We pursue architectural excellence through innovative designs that balance aesthetics with functionality.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-success-100 text-success-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaMedal size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-secondary-900">Quality Assurance</h3>
              <p className="text-secondary-600">
                We maintain rigorous standards for every project, ensuring exceptional quality and attention to detail.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-warning-100 text-warning-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaClipboardCheck size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-secondary-900">Integrity</h3>
              <p className="text-secondary-600">
                We operate with transparency, honesty, and accountability in all our business practices.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-primary-50">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-4">Ready to Start Your Dream Home Journey?</h2>
          <p className="text-secondary-600 max-w-2xl mx-auto mb-8">
            Whether you're looking for a custom design or one of our pre-designed plans, we're here to help you create a home you'll love for years to come.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact" className="btn btn-primary">
              Contact Us
            </a>
            <a href="/plans" className="btn btn-secondary">
              Explore Plans
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage