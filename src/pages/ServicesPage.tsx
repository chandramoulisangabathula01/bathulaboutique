import React from 'react';
import { Link } from 'react-router-dom';
import { servicesData, Service } from '../data/services';
import Navbar from '../components/Navbar'; // Assuming Navbar is in '../components/Navbar'
import Footer from '../components/Footer'; // Assuming Footer is in '../components/Footer'

const ServicesPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-8 pt-24"> {/* Added pt-24 to account for Navbar height */}
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service: Service) => (
            <Link to={`/services/${service.slug}`} key={service.slug} className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-56 object-cover object-center"
                loading="lazy"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2 text-gray-800">{service.title}</h2>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <p className="text-indigo-600 font-medium">Learn More &rarr;</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ServicesPage;
