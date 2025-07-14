import { Card } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay, { AutoplayType } from 'embla-carousel-autoplay';
import { EmblaCarouselType } from 'embla-carousel'; // Correct import for EmblaCarouselType
import { useRef, useState } from 'react';

const Testimonials = () => {
  const plugin = useRef<AutoplayType>(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Banjara Hills, Hyderabad",
      text: "The designer blouse I got made here was absolutely stunning! The attention to detail and the perfect fit exceeded all my expectations. I received so many compliments at the wedding.",
      rating: 5,
      service: "Designer Blouse"
    },
    {
      name: "Anitha Reddy",
      location: "Jubilee Hills, Hyderabad",
      text: "I've been getting my kurtas tailored here for over a year now. The quality is consistently excellent, and they always deliver on time. Highly recommend for anyone looking for quality tailoring.",
      rating: 5,
      service: "Traditional Kurtas"
    },
    {
      name: "Kavitha Nair",
      location: "Gachibowli, Hyderabad",
      text: "The half-saree set they made for my daughter's function was beyond beautiful. The coordination of colors and the traditional work was perfectly executed. Thank you for making it so special!",
      rating: 5,
      service: "Half-Sarees"
    },
    {
      name: "Deepika Agarwal",
      location: "Hitech City, Hyderabad",
      text: "Professional service and beautiful craftsmanship. The long frock they designed for me was exactly what I envisioned. The fitting was perfect and the quality of work is outstanding.",
      rating: 5,
      service: "Long Frocks"
    },
    {
      name: "Meera Krishnan",
      location: "Madhapur, Hyderabad",
      text: "Excellent alteration services! They transformed my old blouses to fit perfectly. The team is very understanding and works with you to achieve exactly what you want.",
      rating: 5,
      service: "Alterations"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our valued clients across Hyderabad 
            have to say about their experience with our tailoring services.
          </p>
        </div>

        {/* 3D Testimonials Carousel */}
        <div className="relative mb-16">
          <Carousel
            plugins={[plugin.current as any]}
            className="w-full max-w-6xl mx-auto"
            opts={{
              align: "center",
              loop: true,
            }}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem 
                  key={testimonial.name}
                  className="pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="h-full perspective-1000">
                    <Card 
                      className={`
                        p-6 h-full bg-gradient-card border-none shadow-card 
                        transition-all duration-500 transform-gpu
                        hover:shadow-elegant hover:scale-105
                        ${index === currentSlide ? 'scale-105 z-20 shadow-elegant' : 'scale-95 z-10'}
                        ${Math.abs(index - currentSlide) === 1 ? 'scale-100 z-15' : ''}
                        ${Math.abs(index - currentSlide) > 1 ? 'scale-90 opacity-70' : ''}
                      `}
                      style={{
                        transform: index === currentSlide 
                          ? 'rotateY(0deg) scale(1.05)' 
                          : `rotateY(${(index - currentSlide) * 5}deg) scale(0.95)`,
                        animationDelay: `${index * 0.1}s`
                      }}
                    >
                      {/* Rating Stars */}
                      <div className="flex items-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg 
                            key={i}
                            className="w-5 h-5 text-accent fill-current animate-pulse"
                            viewBox="0 0 20 20"
                            style={{ animationDelay: `${i * 0.1}s` }}
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>

                      {/* Testimonial Text */}
                      <blockquote className="text-foreground mb-6 leading-relaxed text-sm md:text-base">
                        "{testimonial.text}"
                      </blockquote>

                      {/* Client Info */}
                      <div className="border-t border-border pt-4 mt-auto">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-semibold text-foreground font-display">
                              {testimonial.name}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {testimonial.location}
                            </p>
                          </div>
                          <div className="text-right">
                            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20">
                              {testimonial.service}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* 3D Effect Shine */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Custom Navigation */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <CarouselPrevious className="relative left-0 top-0 translate-y-0 bg-card/80 backdrop-blur-sm border-border hover:bg-primary hover:text-primary-foreground" />
              
              {/* Dots Indicator */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-primary w-8' 
                        : 'bg-border hover:bg-primary/50'
                    }`}
                    onClick={() => setCurrentSlide(index)}
                  />
                ))}
              </div>
              
              <CarouselNext className="relative right-0 top-0 translate-y-0 bg-card/80 backdrop-blur-sm border-border hover:bg-primary hover:text-primary-foreground" />
            </div>
          </Carousel>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 animate-fade-in">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">
              500+
            </div>
            <p className="text-muted-foreground">Happy Clients</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">
              2000+
            </div>
            <p className="text-muted-foreground">Garments Crafted</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">
              5 Years
            </div>
            <p className="text-muted-foreground">Of Excellence</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">
              100%
            </div>
            <p className="text-muted-foreground">Satisfaction Rate</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <h3 className="text-2xl font-display font-semibold text-foreground mb-4">
            Join Our Happy Clients
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience the same level of quality and service that has made our clients so happy. 
            Start your custom tailoring journey today.
          </p>
          <button className="px-8 py-3 bg-gradient-hero text-white rounded-lg font-medium shadow-elegant hover:shadow-elegant transform hover:scale-105 transition-all duration-300">
            Start Your Order
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
