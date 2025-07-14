
import { useState } from 'react';
import GalleryHeader from './gallery/GalleryHeader';
import GalleryShowcase from './gallery/GalleryShowcase';
import CarouselSection from './gallery/CarouselSection';
import GalleryCallToAction from './gallery/GalleryCallToAction';

const Gallery = () => {
  const [currentSlides, setCurrentSlides] = useState<{ [key: string]: number }>({
    'Designer Blouses': 0,
    'Long Frocks': 0,
    'Real Pics': 0
  });

  const galleryItems = [
    {
      category: "Designer Blouses",
      items: [
        { 
          title: "Designer Blouse 1", 
          description: "Elegant design with intricate details",
          image: "/gallery/designer_blouses/1.png"
        },
        { 
          title: "Designer Blouse 2", 
          description: "Modern cut with traditional embroidery",
          image: "/gallery/designer_blouses/2.png"
        },
        { 
          title: "Designer Blouse 3", 
          description: "Bridal collection piece",
          image: "/gallery/designer_blouses/3.png"
        },
        { 
          title: "Designer Blouse 4", 
          description: "Party wear blouse",
          image: "/gallery/designer_blouses/4.png"
        },
        { 
          title: "Designer Blouse 5", 
          description: "Contemporary style blouse",
          image: "/gallery/designer_blouses/5.png"
        },
      ]
    },
    {
      category: "Long Frocks",
      items: [
        { 
          title: "Long Frock 1", 
          description: "Flowing evening gown",
          image: "/gallery/long_frocks/1.png"
        },
        { 
          title: "Long Frock 2", 
          description: "Casual long dress",
          image: "/gallery/long_frocks/2.png"
        },
        { 
          title: "Long Frock 3", 
          description: "Party wear long frock",
          image: "/gallery/long_frocks/3.png"
        },
        { 
          title: "Long Frock 4", 
          description: "Traditional long frock",
          image: "/gallery/long_frocks/4.png"
        },
        { 
          title: "Long Frock 5", 
          description: "Modern long frock",
          image: "/gallery/long_frocks/5.png"
        },
        { 
          title: "Long Frock 6", 
          description: "Elegant long frock",
          image: "/gallery/long_frocks/6.png"
        },
        { 
          title: "Long Frock 7", 
          description: "Stylish long frock",
          image: "/gallery/long_frocks/7.png"
        },
      ]
    },
    {
      category: "Real Pics",
      items: [
        { 
          title: "Real Pic 7", 
          description: "Customer photo",
          image: "/gallery/real_pics/7.png"
        },
        { 
          title: "Real Pic 8", 
          description: "Customer photo",
          image: "/gallery/real_pics/8.png"
        },
        { 
          title: "Real Pic 9", 
          description: "Customer photo",
          image: "/gallery/real_pics/9.png"
        },
        { 
          title: "Real Pic 10", 
          description: "Customer photo",
          image: "/gallery/real_pics/10.png"
        },
        { 
          title: "Real Pic 11", 
          description: "Customer photo",
          image: "/gallery/real_pics/11.png"
        },
        { 
          title: "Real Pic 12", 
          description: "Customer photo",
          image: "/gallery/real_pics/12.png"
        },
        { 
          title: "Real Pic 13", 
          description: "Customer photo",
          image: "/gallery/real_pics/13.png"
        },
        { 
          title: "Real Pic 14", 
          description: "Customer photo",
          image: "/gallery/real_pics/14.png"
        },
        { 
          title: "Real Pic 15", 
          description: "Customer photo",
          image: "/gallery/real_pics/15.png"
        },
        { 
          title: "Real Pic 16", 
          description: "Customer photo",
          image: "/gallery/real_pics/16.png"
        },
        { 
          title: "Real Pic 17", 
          description: "Customer photo",
          image: "/gallery/real_pics/17.png"
        },
        { 
          title: "Real Pic 18", 
          description: "Customer photo",
          image: "/gallery/real_pics/18.png"
        },
        { 
          title: "Real Pic 19", 
          description: "Customer photo",
          image: "/gallery/real_pics/19.png"
        },
        { 
          title: "Real Pic 20", 
          description: "Customer photo",
          image: "/gallery/real_pics/20.png"
        },
      ]
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <GalleryHeader />
        <GalleryShowcase />
        
        {/* Gallery Categories */}
        <div className="space-y-12">
          {galleryItems.map((category, categoryIndex) => (
            <CarouselSection
              key={category.category}
              category={category.category}
              items={category.items}
              categoryIndex={categoryIndex}
              currentSlides={currentSlides}
              setCurrentSlides={setCurrentSlides}
            />
          ))}
        </div>

        <GalleryCallToAction />
      </div>
    </section>
  );
};

export default Gallery;
