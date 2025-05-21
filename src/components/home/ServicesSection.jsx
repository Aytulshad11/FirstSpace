// import { useState, useRef } from 'react'
// import { FaChevronLeft, FaChevronRight, FaHome, FaBuilding, FaCouch, FaCube } from 'react-icons/fa'

// const services = [
//   {
//     id: 1,
//     title: 'Floor Plan',
//     description: 'Custom floor plans designed for your specific needs and preferences.',
//     icon: FaHome,
//     bgColor: 'bg-primary-500',
//   },
//   {
//     id: 2,
//     title: 'Elevation',
//     description: 'Beautiful exterior designs that enhance the curb appeal of your home.',
//     icon: FaBuilding,
//     bgColor: 'bg-accent-500',
//   },
//   {
//     id: 3,
//     title: 'Interior Design',
//     description: 'Thoughtful interior layouts that maximize space and functionality.',
//     icon: FaCouch,
//     bgColor: 'bg-success-500',
//   },
//   {
//     id: 4,
//     title: '3D Front Design',
//     description: 'Realistic 3D renderings to visualize your home before construction.',
//     icon: FaCube,
//     bgColor: 'bg-warning-500',
//   },
// ]

// const ServicesSection = () => {
//   const scrollRef = useRef(null)
//   const [scrollPosition, setScrollPosition] = useState(0)
  
//   const scroll = (direction) => {
//     const container = scrollRef.current
//     if (container) {
//       const scrollAmount = 300
//       const newPosition = direction === 'left' 
//         ? Math.max(0, scrollPosition - scrollAmount)
//         : Math.min(container.scrollWidth - container.clientWidth, scrollPosition + scrollAmount)
      
//       container.scrollTo({
//         left: newPosition,
//         behavior: 'smooth'
//       })
      
//       setScrollPosition(newPosition)
//     }
//   }
  
//   return (
//     <section className="section-padding bg-white" id="services">
//       <div className="container-custom">
//         <div className="text-center mb-12">
//           <h2 className="section-title">Our Services</h2>
//           <p className="section-subtitle mx-auto">
//             We provide a range of professional services to help you design your dream home.
//           </p>
//         </div>
        
//         <div className="relative">
//           {/* Scroll buttons */}
//           <button 
//             onClick={() => scroll('left')}
//             className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 
//                     text-secondary-800 hover:text-primary-600 transition-colors duration-300 hidden md:block"
//             aria-label="Scroll left"
//           >
//             <FaChevronLeft size={20} />
//           </button>
          
//           <button 
//             onClick={() => scroll('right')}
//             className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 
//                     text-secondary-800 hover:text-primary-600 transition-colors duration-300 hidden md:block"
//             aria-label="Scroll right"
//           >
//             <FaChevronRight size={20} />
//           </button>
          
//           {/* Scrollable container */}
//           <div 
//             ref={scrollRef}
//             className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x"
//           >
//             {/* {services.map((service) => (
//               <div 
//                 key={service.id}
//                 className="min-w-[300px] flex-shrink-0 bg-white rounded-lg shadow-card hover:shadow-card-hover 
//                         transition-all duration-300 transform hover:-translate-y-1 snap-center"
//               >
//                 <div className="p-6">
//                   <div className={`w-16 h-16 ${service.bgColor} rounded-full flex items-center justify-center mb-6 text-white`}>
//                     <service.icon size={28} />
//                   </div>
//                   <h3 className="text-xl font-semibold mb-3 text-secondary-900">{service.title}</h3>
//                   <p className="text-secondary-600">{service.description}</p>
//                 </div>
//               </div>
//             ))} */}
//               {services.map((service) => (
//   <div 
//     key={service.id}
//     className="min-w-[180px] flex-shrink-0 flex flex-col items-center mx-3 snap-center"
//   >
//     {/* Circular Icon Container */}
//     <div 
//       className={`w-[180px] h-[180px] ${service.bgColor} rounded-full flex items-center justify-center shadow-card 
//                   hover:shadow-card-hover transition-transform duration-300 transform hover:-translate-y-1`}
//     >
//       <service.icon size={40} className="text-white" />
//     </div>

//     {/* Title Below Circle */}
//     <h3 className="mt-4 text-center text-base font-semibold text-secondary-900">
//       {service.title}
//     </h3>
//   </div>
// ))}

//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default ServicesSection

// import { useEffect, useRef } from 'react'

// const services = [
//   {
//     id: 1,
//     title: 'Floor Plan',
//     image: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg',
//   },
//   {
//     id: 2,
//     title: 'Elevation',
//     image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg',
//   },
//   {
//     id: 3,
//     title: 'Interior Design',
//     image: 'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg',
//   },
//   {
//     id: 4,
//     title: '3D Front Design',
//     image: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg',
//   },
//   {
//     id: 5,
//     title: 'Landscape',
//     image: 'https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg',
//   },
// ]

// const ServicesSection = () => {
//   const scrollRef = useRef(null)

//   useEffect(() => {
//     const container = scrollRef.current
//     if (!container) return

//     const scrollInterval = setInterval(() => {
//       if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 5) {
//         // scroll to start if at end
//         container.scrollTo({ left: 0, behavior: 'smooth' })
//       } else {
//         container.scrollBy({ left: 200, behavior: 'smooth' })
//       }
//     }, 1000) // every 3 seconds

//     return () => clearInterval(scrollInterval)
//   }, [])

//   return (
//     <section className="section-padding bg-white" id="services">
//       <div className="container-custom">
//         <div className="text-center mb-12">
//           <h2 className="section-title">Our Services</h2>
//           <p className="section-subtitle mx-auto">
//             We provide a range of professional services to help you design your dream home.
//           </p>
//         </div>

//         <div className="relative">
//           <div 
//             ref={scrollRef}
//             className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x"
//           >
//             {services.map((service) => (
//               <div 
//                 key={service.id}
//                 className="min-w-[160px] flex-shrink-0 flex flex-col items-center mx-3 snap-center"
//               >
//                 {/* Circle with image */}
//                 <div 
//                   className="w-[140px] h-[140px] rounded-full overflow-hidden shadow-card hover:shadow-card-hover 
//                              transition-transform duration-300 transform hover:-translate-y-1"
//                 >
//                   <img 
//                     src={service.image}
//                     alt={service.title}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>

//                 {/* Title Below Circle */}
//                 <h3 className="mt-4 text-center text-base font-semibold text-secondary-900">
//                   {service.title}
//                 </h3>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default ServicesSection


// import { useEffect, useRef } from 'react'

// const services = [
//   {
//     id: 1,
//     title: 'Floor Plan',
//     image: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg',
//   },
//   {
//     id: 2,
//     title: 'Elevation',
//     image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg',
//   },
//   {
//     id: 3,
//     title: 'Interior Design',
//     image: 'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg',
//   },
//   {
//     id: 4,
//     title: '3D Front Design',
//     image: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg',
//   },
//   {
//     id: 5,
//     title: 'Landscape',
//     image: 'https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg',
//   },
//   {
//     id: 6,
//     title: 'Modular Kitchen',
//     image: 'https://images.pexels.com/photos/280232/pexels-photo-280232.jpeg',
//   },
//   {
//     id: 7,
//     title: 'Living Room',
//     image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg',
//   },
// ]

// const ServicesSection = () => {
//   const scrollRef = useRef(null)

//   useEffect(() => {
//     const container = scrollRef.current
//     if (!container) return

//     const interval = setInterval(() => {
//       if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 5) {
//         container.scrollTo({ left: 0, behavior: 'smooth' })
//       } else {
//         container.scrollBy({ left: 200, behavior: 'smooth' })
//       }
//     }, 3000)

//     return () => clearInterval(interval)
//   }, [])

//   return (
//     <section className="section-padding bg-white" id="services">
//       <div className="container-custom">
//         <div className="text-center mb-12">
//           <h2 className="section-title">Our Services</h2>
//           <p className="section-subtitle mx-auto">
//             We provide a range of professional services to help you design your dream home.
//           </p>
//         </div>

//         <div className="relative">
//           <div 
//             ref={scrollRef}
//             className="flex gap-10 overflow-x-auto pb-4 scrollbar-hide snap-x px-4"
//           >
//             {services.map((service) => (
//               <div 
//                 key={service.id}
//                 className="min-w-[180px] flex-shrink-0 flex flex-col items-center snap-center"
//               >
//                 {/* Circle with image and border */}
//                 <div 
//                   className="w-[130px] h-[130px] rounded-full overflow-hidden border-2 border-gray-200 
//                              shadow-md hover:shadow-lg transition-transform duration-300 transform hover:-translate-y-1"
//                 >
//                   <img 
//                     src={service.image}
//                     alt={service.title}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>

//                 {/* Title */}
//                 <h3 className="mt-4 text-center text-base font-semibold text-secondary-900">
//                   {service.title}
//                 </h3>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default ServicesSection


// import { useEffect, useRef, useState } from 'react'

// const initialServices = [
//   {
//     id: 1,
//     title: 'Floor Plan',
//     image: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg',
//   },
//   {
//     id: 2,
//     title: 'Elevation',
//     image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg',
//   },
//   {
//     id: 3,
//     title: 'Interior Design',
//     image: 'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg',
//   },
//   {
//     id: 4,
//     title: '3D Front Design',
//     image: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg',
//   },
//   {
//     id: 5,
//     title: 'Landscape',
//     image: 'https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg',
//   },
//   // {
//   //   id: 6,
//   //   title: 'Modular Kitchen',
//   //   image: 'https://images.pexels.com/photos/280232/pexels-photo-280232.jpeg',
//   // },
//   // {
//   //   id: 7,
//   //   title: 'Living Room',
//   //   image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg',
//   // },
// ]

// const ServicesSection = () => {
//   const [services, setServices] = useState(initialServices)
//   const scrollRef = useRef(null)

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setServices((prev) => {
//         const updated = [...prev.slice(1), prev[0]] // move first to end
//         return updated
//       })
//     }, 5000)

//     return () => clearInterval(interval)
//   }, [])

//   return (
//     <section className="section-padding bg-white" id="services">
//       <div className="container-custom">
//         <div className="text-center mb-12">
//           <h2 className="section-title">Our Services</h2>
//           <p className="section-subtitle mx-auto">
//             We provide a range of professional services to help you design your dream home.
//           </p>
//         </div>

//         <div className="relative overflow-hidden">
//           <div 
//             ref={scrollRef}
//             className="flex gap-10 overflow-x-hidden transition-all duration-700 ease-in-out"
//           >
//             {services.map((service) => (
//               <div 
//                 key={service.id}
//                 className="min-w-[180px] flex-shrink-0 flex flex-col items-center snap-center"
//               >
//                 {/* Circle with image and border */}
//                 <div 
//                   className="w-[130px] h-[130px] rounded-full overflow-hidden border-2 border-gray-200 
//                              shadow-md hover:shadow-lg transition-transform duration-300 transform hover:-translate-y-1"
//                 >
//                   <img 
//                     src={service.image}
//                     alt={service.title}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>

//                 {/* Title */}
//                 <h3 className="mt-4 text-center text-base font-semibold text-secondary-900">
//                   {service.title}
//                 </h3>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default ServicesSection


import { useEffect, useRef } from 'react'

const services = [
  { id: 1, title: 'Floor Plan',       image: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg' },
  { id: 2, title: 'Elevation',        image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg' },
  { id: 3, title: 'Interior Design',  image: 'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg' },
  { id: 4, title: '3D Front Design',  image: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg' },
  { id: 5, title: 'Landscape',        image: 'https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg' },
  { id: 6, title: 'Modular Kitchen',  image: 'https://images.pexels.com/photos/280232/pexels-photo-280232.jpeg' },
  { id: 7, title: 'Living Room',      image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg' },
]

export default function ServicesSection() {
  const trackRef = useRef(null)
  const cardRef = useRef(null)

  useEffect(() => {
    const track = trackRef.current
    const cardW = cardRef.current.offsetWidth + 40 // card width + gap-10
    let scrollDelta = 0
    let pause = false
    let rafId

    const step = () => {
      if (!pause) {
        track.scrollLeft += 1
        scrollDelta += 1

        if (scrollDelta >= cardW) {
          scrollDelta = 0
          pause = true
          track.scrollLeft -= cardW
          track.append(track.firstElementChild)

          // Pause for 2 seconds
          setTimeout(() => {
            pause = false
            rafId = requestAnimationFrame(step)
          }, 2000)
          return
        }
      }

      rafId = requestAnimationFrame(step)
    }

    rafId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(rafId)
  }, [])

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle mx-auto">
            We provide a range of professional services to help you design your dream home.
          </p>
        </div>

        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className="flex gap-10 overflow-x-hidden"
          >
            {services.map((s, i) => (
              <div
                ref={i === 0 ? cardRef : undefined}
                key={s.id}
                className="min-w-[180px] flex-shrink-0 flex flex-col items-center"
              >
                <div
                  className="w-[150px] h-[150px] rounded-full border-12 border-gray-400
                             overflow-hidden shadow-md hover:shadow-lg
                             transition-transform duration-300 hover:-translate-y-1"
                >
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-secondary-900 text-center">
                  {s.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
