import React from 'react';

export default function ReasonsToBuySection() {
  return (
    <section
      className="relative bg-cover bg-center text-white py-20 px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 mb-20"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Why Choose Us
          </h2>
          <p className="text-lg opacity-90">
            Trusted by thousands for quality design solutions
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center mb-16">
          {[
            { number: "3500+", label: "Plans Completed" },
            { number: "2500+", label: "Elevations Designed" },
            { number: "2000+", label: "Interiors Completed" },
            { number: "1500+", label: "Bungalows Designed" },
            { number: "1300+", label: "Commercial Projects" },
          ].map((item, idx) => (
            <div key={idx}>
              <div className="text-3xl font-bold text-primary-400">{item.number}</div>
              <div className="text-sm opacity-90">{item.label}</div>
            </div>
          ))}
        </div>

        {/* Reasons */}
        <div className="bg-white/10 backdrop-blur-sm p-6 md:p-10 rounded-xl">
          <h3 className="text-xl md:text-2xl font-semibold mb-6">
            Reasons to Choose Our Services
          </h3>
          <ul className="list-disc list-inside space-y-3 text-sm md:text-base opacity-90">
            <li>Online drawings & on-site visit facility</li>
            <li>Quick and hassle-free service</li>
            <li>Customized house designs tailored to your needs</li>
            <li>Vastu-compliant planning for peace and prosperity</li>
            <li>Detailed technical drawings that save construction time and cost</li>
            <li>Years of experience at an affordable price</li>
            <li>Innovative & expert team of architects</li>
            <li>End-to-end support from start to finish</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
