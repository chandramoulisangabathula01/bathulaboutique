import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { servicesData } from '@/data/services';
import { ImageWithSkeleton } from '@/components/ui/image-skeleton';
import { ServiceCardSkeleton } from '@/components/ui/card-skeleton';

const Services = () => {

  return (
    <section id="services" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From traditional wear to contemporary designs, we specialize in creating beautiful, 
            custom-fitted garments that celebrate your unique style and personality.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <Card 
              key={service.title}
              className="relative overflow-hidden hover-lift shadow-card animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Image with Skeleton */}
              <div className="absolute inset-0 z-0">
                <ImageWithSkeleton
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  skeletonClassName="w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-6 h-full flex flex-col text-white">
                {/* Service Title & Description */}
                <h3 className="text-xl font-display font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-white/90 mb-6 leading-relaxed flex-grow">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-white/90">
                      <svg className="w-4 h-4 text-primary mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Price & CTA */}
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-primary">
                    {service.price}
                  </span>
                  <Link to={`/services/${service.slug}`}>
                    <Button variant="outline" size="sm" className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-foreground">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <h3 className="text-2xl font-display font-semibold text-foreground mb-4">
            Ready to Create Something Beautiful?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get in touch with us to discuss your vision and let us bring your dream outfit to life.
          </p>
          <Button 
            variant="elegant" 
            size="lg" 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;