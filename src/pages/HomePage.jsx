import { Helmet } from 'react-helmet'
import HeroBanner from '../components/home/HeroBanner'
import ServicesSection from '../components/home/ServicesSection'
import ProjectsGallery from '../components/home/ProjectsGallery'
import StandardSizesSection from '../components/home/StandardSizesSection'
import SuccessStories from '../components/home/SuccessStories'
import OngoingProjects from '../components/home/OngoingProjects'

const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title>Dream Home Builders | Custom Home Design Solutions</title>
        <meta 
          name="description" 
          content="Dream Home Builders offers premium house plans, elevations, and interior designs. Find your perfect home design." 
        />
      </Helmet>
      
      <HeroBanner />
      <ServicesSection />
      <StandardSizesSection />
      <ProjectsGallery />
      <SuccessStories />
      <OngoingProjects />
    </div>
  )
}

export default HomePage