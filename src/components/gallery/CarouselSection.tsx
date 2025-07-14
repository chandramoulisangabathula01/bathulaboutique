
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { useRef, useState, useEffect } from 'react';

interface GalleryItem {
  title: string;
  description: string;
  image: string;
}

interface CarouselSectionProps {
  category: string;
  items: GalleryItem[];
  categoryIndex: number;
  currentSlides: { [key: string]: number };
  setCurrentSlides: React.Dispatch<React.SetStateAction<{ [key: string]: number }>>;
}

const CarouselSection = ({ 
  category, 
  items, 
  categoryIndex, 
  currentSlides, 
  setCurrentSlides 
}: CarouselSectionProps) => {
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );
  const [api, setApi] = useState<any>();

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      const selectedIndex = api.selectedScrollSnap();
      setCurrentSlides(prev => ({
        ...prev,
        [category]: selectedIndex
      }));
    };

    api.on('select', onSelect);
    onSelect(); // Set initial slide

    return () => {
      api.off('select', onSelect);
    };
  }, [api, category, setCurrentSlides]);

  const currentSlide = currentSlides[category] || 0;
  const currentItem = items[currentSlide];

  return (
    <div 
      className="animate-fade-in"
      style={{ animationDelay: `${categoryIndex * 0.2}s` }}
    >
      {/* Category Heading */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl md:text-3xl font-display font-semibold text-foreground">
          {category}
        </h3>
      </div>

      {/* Netflix-style Carousel */}
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
        setApi={setApi}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {items.map((item, itemIndex) => (
            <CarouselItem 
              key={item.title}
              className="pl-2 md:pl-4 basis-4/5 sm:basis-2/3 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
            >
              <div className="group relative overflow-hidden rounded-2xl hover-lift cursor-pointer">
                <div className="aspect-[4/5] relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 md:opacity-0 transition-opacity duration-300"></div>
                  
                  {/* Content Overlay - Desktop Hover */}
                  <div className="hidden md:flex absolute inset-0 flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <h4 className="font-display font-semibold text-white text-lg mb-2">
                      {item.title}
                    </h4>
                    <p className="text-white/90 text-sm mb-4 line-clamp-2">
                      {item.description}
                    </p>
                    <Button 
                      size="sm" 
                      variant="elegant"
                      className="w-fit"
                    >
                      View Details
                    </Button>
                  </div>

                  {/* Netflix-style Badge */}
                  <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-card/95 backdrop-blur-sm text-foreground px-2 py-1 rounded-md text-xs font-medium border border-border">
                      {category}
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation - Desktop only */}
        <div className="hidden md:block">
          <CarouselPrevious className="-left-12 bg-card/80 backdrop-blur-sm border-border hover:bg-primary hover:text-primary-foreground" />
          <CarouselNext className="-right-12 bg-card/80 backdrop-blur-sm border-border hover:bg-primary hover:text-primary-foreground" />
        </div>
      </Carousel>

      {/* Mobile Content Display - Shows current slide info */}
      <div className="md:hidden mt-4 p-4 bg-gradient-card rounded-2xl border border-border shadow-card">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
            <img
              src={currentItem.image}
              alt={currentItem.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h4 className="font-display font-semibold text-foreground text-lg mb-1">
              {currentItem.title}
            </h4>
            <p className="text-muted-foreground text-sm mb-2">
              {currentItem.description}
            </p>
            <Button 
              size="sm" 
              variant="elegant"
              className="text-xs"
            >
              View Details
            </Button>
          </div>
        </div>
        
        {/* Slide Indicators */}
        <div className="flex justify-center gap-2 mt-4">
          {items.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-primary w-6' 
                  : 'bg-border hover:bg-primary/50'
              }`}
              onClick={() => {
                api?.scrollTo(index);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselSection;
