import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import HomePage from './pages/HomePage'
import PropertiesPage from './pages/PropertiesPage'
import PropertyDetailPage from './pages/PropertyDetailPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import FloatingButtons from './components/ui/FloatingButtons'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Helmet>
          <title>Dream Home Builders | Build Your Dream Home</title>
          <meta name="description" content="Dream Home Builders offers premium house plans, elevations, and interior designs. Find your perfect home design." />
        </Helmet>
        
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/plans" element={<PropertiesPage category="plans" />} />
            <Route path="/elevations" element={<PropertiesPage category="elevations" />} />
            <Route path="/interiors" element={<PropertiesPage category="interiors" />} />
            <Route path="/property/:id" element={<PropertyDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        
        <Footer />
        <FloatingButtons />
      </div>
    </Router>
  )
}

export default App