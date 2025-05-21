// import { Link } from 'react-router-dom'

// const HeroBanner = () => {
//   return (
//     <div className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
//       {/* Background Image */}
//       <div 
//         className="absolute inset-0 bg-cover bg-center"
//         style={{ 
//           backgroundImage: 'url(https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
//           backgroundPosition: 'center',
//         }}
//       >
//         {/* Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/80 to-secondary-900/40"></div>
//       </div>

//       <div className="container-custom relative z-10 mt-16 md:mt-0">
//         <div className="max-w-3xl animate-fade-in">
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
//             Build Your Dream Home
//           </h1>
//           <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
//             Premium house designs, elevations, and interior planning services customized for your specific needs.
//           </p>
          
//           <div className="flex flex-wrap gap-4">
//             <Link 
//               to="/plans" 
//               className="btn bg-green-900 btn-primary"
//             >
//               Explore Plans
//             </Link>
//             <Link 
//               to="/contact" 
//               className="btn text-yellow-500 btn-secondary"
//             >
//               Contact Us
//             </Link>
//           </div>
          
//           <div className="mt-12 bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 inline-block">
//             <p className="text-white font-semibold mb-2">Limited Time Offer</p>
//             <p className="text-white/90 text-sm flex items-center">
//               <span className="line-through mr-2">₹7,000</span>
//               <span className="text-yellow-500 font-bold text-lg">₹4,999</span>
//               <span className="ml-2">for basic plans</span>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default HeroBanner


import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const images = [
  'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',
  'https://images.pexels.com/photos/534164/pexels-photo-534164.jpeg',
  'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg',
  'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
];

const HeroBanner = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 6000); // 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image Slideshow */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentImage ? 'opacity-100 z-0' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${img}?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
          }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/80 to-secondary-900/40"></div>
        </div>
      ))}

      {/* Content */}
      <div className="container-custom relative z-10 mt-16 md:mt-0">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            Build Your Dream Home
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
            Premium house designs, elevations, and interior planning services customized for your specific needs.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link to="/plans" className="btn bg-green-900 btn-primary">
              Explore Plans
            </Link>
            <Link to="/contact" className="btn text-yellow-500 btn-secondary">
              Contact Us
            </Link>
          </div>

          <div className="mt-12 bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 inline-block">
            <p className="text-white font-semibold mb-2">Limited Time Offer</p>
            <p className="text-white/90 text-sm flex items-center">
              <span className="line-through mr-2">₹7,000</span>
              <span className="text-yellow-500 font-bold text-lg">₹4,999</span>
              <span className="ml-2">for basic plans</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
