import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

const GalleryPage = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('all');
  const [visibleImages, setVisibleImages] = useState(12);


  const categories = [
    { id: 'all', name: 'All' },
    { id: 'blouses', name: 'Designer Blouses' },
    { id: 'frocks', name: 'Long Frocks' },
    { id: 'real-pics', name: 'Customer Photos' },
    { id: 'kurtas', name: 'Traditional Kurtas' },
    { id: 'half-sarees', name: 'Half-Sarees' },
    { id: 'pajamas', name: 'Cotton Pajamas' },
    { id: 'alterations', name: 'Alterations' }
  ];

  const comingSoonCategories = ['kurtas', 'half-sarees', 'pajamas', 'alterations'];

  const isComingSoon = (categoryId: string) => comingSoonCategories.includes(categoryId);

  const allImages = [
    // Designer Blouses
    { 
      id: 1, 
      category: 'blouses', 
      title: 'Embroidered Silk Blouse',
      description: 'Intricate gold embroidery on royal blue silk',
      image: '/gallery/designer_blouses/1.webp',
      isPortrait: true
    },
    { 
      id: 2, 
      category: 'blouses', 
      title: 'Contemporary Cut Blouse',
      description: 'Modern design with traditional elements',
      image: '/gallery/designer_blouses/2.webp',
      isPortrait: false
    },
    { 
      id: 3, 
      category: 'blouses', 
      title: 'Bridal Blouse',
      description: 'Heavy work blouse for special occasions',
      image: '/gallery/designer_blouses/3.webp',
      isPortrait: true
    },
    { 
      id: 4, 
      category: 'blouses', 
      title: 'Designer Party Blouse',
      description: 'Elegant design for evening parties',
      image: '/gallery/designer_blouses/4.webp',
      isPortrait: false
    },
    { 
      id: 5, 
      category: 'blouses', 
      title: 'Traditional Blouse',
      description: 'Classic design with modern touches',
      image: '/gallery/designer_blouses/5.webp',
      isPortrait: true
    },

    // Long Frocks
    { 
      id: 6, 
      category: 'frocks', 
      title: 'Evening Gown',
      description: 'Flowing silhouette for special events',
      image: '/gallery/long_frocks/1.webp',
      isPortrait: true
    },
    { 
      id: 7, 
      category: 'frocks', 
      title: 'Party Dress',
      description: 'Contemporary design with traditional touch',
      image: '/gallery/long_frocks/2.webp',
      isPortrait: false
    },
    { 
      id: 8, 
      category: 'frocks', 
      title: 'Casual Long Dress',
      description: 'Comfortable and stylish for daily wear',
      image: '/gallery/long_frocks/3.webp',
      isPortrait: true
    },
    { 
      id: 9, 
      category: 'frocks', 
      title: 'Maxi Dress',
      description: 'Flowy and elegant for summer occasions',
      image: '/gallery/long_frocks/4.webp',
      isPortrait: false
    },
    { 
      id: 10, 
      category: 'frocks', 
      title: 'Designer Gown',
      description: 'Elegant design for special occasions',
      image: '/gallery/long_frocks/5.webp',
      isPortrait: true
    },
    { 
      id: 11, 
      category: 'frocks', 
      title: 'Evening Wear',
      description: 'Sophisticated style for evening events',
      image: '/gallery/long_frocks/6.webp',
      isPortrait: false
    },
    { 
      id: 12, 
      category: 'frocks', 
      title: 'Formal Gown',
      description: 'Classic formal wear with modern elements',
      image: '/gallery/long_frocks/7.webp',
      isPortrait: true
    },

    // Real Customer Photos
    { 
      id: 13, 
      category: 'real-pics', 
      title: 'Customer Design 1',
      description: 'Real customer wearing our creation',
      image: '/gallery/real_pics/7.webp',
      isPortrait: true
    },
    { 
      id: 14, 
      category: 'real-pics', 
      title: 'Customer Design 2',
      description: 'Beautiful customer moments',
      image: '/gallery/real_pics/8.webp',
      isPortrait: false
    },
    { 
      id: 15, 
      category: 'real-pics', 
      title: 'Customer Design 3',
      description: 'Customer satisfaction in every stitch',
      image: '/gallery/real_pics/9.webp',
      isPortrait: true
    },
    { 
      id: 16, 
      category: 'real-pics', 
      title: 'Customer Design 4',
      description: 'Real people, real style',
      image: '/gallery/real_pics/10.webp',
      isPortrait: false
    },
    { 
      id: 17, 
      category: 'real-pics', 
      title: 'Customer Design 5',
      description: 'Customer wearing our creation',
      image: '/gallery/real_pics/11.webp',
      isPortrait: true
    },
    { 
      id: 18, 
      category: 'real-pics', 
      title: 'Customer Design 6',
      description: 'Elegant customer moments',
      image: '/gallery/real_pics/12.webp',
      isPortrait: false
    },
    { 
      id: 19, 
      category: 'real-pics', 
      title: 'Customer Design 7',
      description: 'Real style stories',
      image: '/gallery/real_pics/13.webp',
      isPortrait: true
    },
    { 
      id: 20, 
      category: 'real-pics', 
      title: 'Customer Design 8',
      description: 'Customer satisfaction showcase',
      image: '/gallery/real_pics/14.webp',
      isPortrait: false
    },
    { 
      id: 21, 
      category: 'real-pics', 
      title: 'Customer Design 9',
      description: 'Beautiful customer creations',
      image: '/gallery/real_pics/15.webp',
      isPortrait: true
    },
    { 
      id: 22, 
      category: 'real-pics', 
      title: 'Customer Design 10',
      description: 'Real fashion moments',
      image: '/gallery/real_pics/16.webp',
      isPortrait: false
    },
    { 
      id: 23, 
      category: 'real-pics', 
      title: 'Customer Design 11',
      description: 'Customer style stories',
      image: '/gallery/real_pics/17.webp',
      isPortrait: true
    },
    { 
      id: 24, 
      category: 'real-pics', 
      title: 'Customer Design 12',
      description: 'Real elegance in every design',
      image: '/gallery/real_pics/18.webp',
      isPortrait: false
    },
    { 
      id: 25, 
      category: 'real-pics', 
      title: 'Customer Design 13',
      description: 'Customer wearing our designs',
      image: '/gallery/real_pics/19.webp',
      isPortrait: true
    },
    { 
      id: 26, 
      category: 'real-pics', 
      title: 'Customer Design 14',
      description: 'Real beauty in every stitch',
      image: '/gallery/real_pics/20.webp',
      isPortrait: false
    }
  ];

  const filteredImages = activeCategory === 'all' 
    ? allImages 
    : allImages.filter(img => img.category === activeCategory);

  const displayedImages = filteredImages.slice(0, visibleImages);
  const hasMoreImages = visibleImages < filteredImages.length;

  const loadMoreImages = () => {
    setVisibleImages(prev => Math.min(prev + 12, filteredImages.length));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <section className="pt-24 pb-8 bg-gradient-section">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className="mb-6 p-2 hover:bg-secondary"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
            
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
                Our Gallery
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Explore our beautiful collection of handcrafted garments. Each piece tells a story of 
                craftsmanship, elegance, and attention to detail.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 md:gap-4"
          >
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "elegant" : "outline"}
                size="sm"
                onClick={() => {
                  setActiveCategory(category.id);
                  setVisibleImages(12);
                }}
                className="mb-2"
              >
                {category.name}
              </Button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {isComingSoon(activeCategory) ? (
              <div className="text-center py-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                    Coming Soon!
                  </h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    We're working on adding beautiful {categories.find(c => c.id === activeCategory)?.name.toLowerCase()} to our collection.
                    Please check back later or contact us for custom orders.
                  </p>
                </motion.div>
              </div>
            ) : (
              /* Masonry Grid for Mobile-First */
              <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
              {displayedImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * (index % 12) }}
                  className="break-inside-avoid mb-4"
                >
                  <div className="relative group cursor-pointer overflow-hidden rounded-xl shadow-card hover-lift">
                    <img
                      src={image.image}
                      alt={image.title}
                      className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <h3 className="font-semibold text-lg mb-1">
                          {image.title}
                        </h3>
                        <p className="text-sm text-white/90">
                          {image.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            )}

            {/* Load More Button */}
            {!isComingSoon(activeCategory) && hasMoreImages && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mt-12"
              >
                <Button
                  variant="elegant"
                  size="lg"
                  onClick={loadMoreImages}
                  className="px-8"
                >
                  Load More Images
                </Button>
                <p className="text-muted-foreground mt-4">
                  Showing {displayedImages.length} of {filteredImages.length} images
                </p>
              </motion.div>
            )}

            {/* No More Images Message */}
            {!isComingSoon(activeCategory) && !hasMoreImages && displayedImages.length > 12 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mt-12"
              >
                <p className="text-muted-foreground">
                  You've seen all {filteredImages.length} images in this category
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-section">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">
              Love What You See?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get in touch with us to create your own custom piece or to learn more about our services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="elegant" 
                size="lg"
                onClick={() => {
                  const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent('Hi! I saw your gallery and I\'m interested in your tailoring services. Can you please provide more details?')}`;
                  window.open(whatsappUrl, '_blank');
                }}
              >
                WhatsApp Us
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => navigate('/#contact')}
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default GalleryPage;
