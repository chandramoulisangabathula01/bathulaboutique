import React from 'react';
import Navbar from '../components/Navbar'; // Assuming Navbar is in src/components/Navbar.tsx
import Footer from '../components/Footer'; // Assuming Footer is in src/components/Footer.tsx
import heroBanner from '@/assets/hero_pic.webp'; // Import the hero image

const AboutUsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
      <Navbar />
      
      {/* Hero Section */}
      <section id="about-us" className="relative min-h-screen bg-gradient-section overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
        </div>
        <div className="relative container mx-auto px-4 pt-[85px] min-h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-between">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 leading-tight">
              About Us
              <span className="text-primary block sm:inline sm:ml-3">Bathula Boutique</span>
              <span className="block">Crafting Elegance, Defining Style</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Discover the story behind our passion for fashion. We blend traditional artistry with modern design to create exquisite apparel for every woman.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start">
              <div className="w-full sm:w-auto">
                <a href="/services" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90">
                  Our Services
                </a>
              </div>
              <div className="w-full sm:w-auto">
                <a href="/gallery" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground">
                  View Gallery
                </a>
              </div>
            </div>
          </div>
          {/* Image Section */}
          <div className="w-full lg:w-1/2 lg:pl-12">
            <div className="relative">
              <img
                src={heroBanner}
                alt="About Us - Bathula Boutique"
                className="w-full h-auto rounded-2xl shadow-elegant"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto max-w-4xl">
          
          {/* Company Story */}
          <div className="mb-12 text-center">
            <h2 className="font-display text-4xl font-bold text-primary mb-4">Our Journey</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Welcome to Bathula Boutique, where passion for exquisite fashion meets a commitment to timeless elegance. Founded in [Year], our journey began with a vision to create a space that celebrates the artistry of traditional and contemporary design, offering discerning clients a curated collection of unparalleled quality and style.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              From humble beginnings, we have grown into a destination for those who appreciate fine craftsmanship and unique pieces. Each garment in our collection is a testament to our dedication to detail, sourced and created with the utmost care.
            </p>
          </div>

          {/* Mission Statement */}
          <div className="mb-12 text-center">
            <h2 className="font-display text-4xl font-bold text-accent mb-4">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our mission is to empower individuals through fashion, offering pieces that not only enhance their style but also reflect their unique personality and confidence. We strive to provide an exceptional shopping experience, blending personalized service with a passion for fashion innovation.
            </p>
          </div>

          {/* Values */}
          <div className="text-center">
            <h2 className="font-display text-4xl font-bold text-primary mb-4">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 rounded-lg shadow-card bg-card">
                <h3 className="font-display text-2xl font-semibold text-foreground mb-2">Quality</h3>
                <p className="text-muted-foreground">Uncompromising standards in fabric, craftsmanship, and design.</p>
              </div>
              <div className="p-6 rounded-lg shadow-card bg-card">
                <h3 className="font-display text-2xl font-semibold text-foreground mb-2">Elegance</h3>
                <p className="text-muted-foreground">Timeless style and sophisticated aesthetics in every piece.</p>
              </div>
              <div className="p-6 rounded-lg shadow-card bg-card">
                <h3 className="font-display text-2xl font-semibold text-foreground mb-2">Customer Focus</h3>
                <p className="text-muted-foreground">Dedicated service to ensure a delightful and personalized experience.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUsPage;
