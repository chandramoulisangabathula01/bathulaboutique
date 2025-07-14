
import galleryShowcase from '@/assets/gallery-showcase.jpg';

const GalleryShowcase = () => {
  return (
    <div className="mb-16 animate-fade-in">
      <div className="relative rounded-2xl overflow-hidden shadow-elegant hover-lift">
        <img
          src={galleryShowcase}
          alt="Gallery showcase of custom tailored garments"
          className="w-full h-64 md:h-96 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent"></div>
        <div className="absolute bottom-6 left-6 right-6">
          <h3 className="text-2xl font-display font-bold text-white mb-2">
            Handcrafted Excellence
          </h3>
          <p className="text-white/90">
            Every piece tells a story of craftsmanship and elegance
          </p>
        </div>
      </div>
    </div>
  );
};

export default GalleryShowcase;
