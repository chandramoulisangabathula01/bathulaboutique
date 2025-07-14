
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const GalleryCallToAction = () => {
  return (
    <div className="text-center mt-16 animate-fade-in">
      <div className="bg-gradient-card p-8 rounded-2xl shadow-card border border-border">
        <h3 className="text-2xl font-display font-semibold text-foreground mb-4">
          Want to See More?
        </h3>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Visit our boutique to see our complete collection and get inspired for your next custom piece.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/gallery">
            <Button variant="elegant" size="lg">
              View Gallery
            </Button>
          </Link>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => {
              const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent('Hi! I would like to see more of your gallery and discuss my requirements.')}`;
              window.open(whatsappUrl, '_blank');
            }}
          >
            WhatsApp Gallery
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GalleryCallToAction;
