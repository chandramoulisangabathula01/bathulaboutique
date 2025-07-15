import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Star, Users, Calendar } from 'lucide-react';
import heroBanner from '@/assets/hero_pic.webp';

// --- Placeholder for your custom Button component ---
const ButtonPlaceholder = ({ variant, size, className, children, ...props }: any) => (
  <button className={`${className} ${variant} ${size}`} {...props}>{children}</button>
);
const RealButton = Button || ButtonPlaceholder;

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  const imageVariants = {
    hidden: { x: 100, opacity: 0, scale: 0.8 },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 0.5
      }
    }
  };

  const statsVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: 0.8
      }
    }
  };

  return (
    // The paddingTop for the content is now handled by the ResizableNavbar's height.
    <section id="home" className="relative  min-h-screen bg-gradient-section overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
      </div>

      {/* Main Content Container - CORRECTED LINE BELOW */}
      <div className="relative container mx-auto px-4 pt-[85px] min-h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-between">
        
        {/* Left Content Section */}
        <motion.div 
          className="w-full lg:w-1/2 mb-12 lg:mb-0"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center lg:text-left">
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 leading-tight"
              variants={itemVariants}
            >
              Beautiful
              <motion.span 
                className="text-primary block sm:inline sm:ml-3"
                animate={{ color: ["hsl(345, 50%, 70%)", "hsl(40, 85%, 75%)", "hsl(345, 50%, 70%)"] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Custom-Made
              </motion.span>
              <span className="block">Clothes for Women</span>
            </motion.h1>
            
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              variants={itemVariants}
            >
              Get special, custom-made clothes like designer blouses, kurtas, and traditional wear. We make them with great care and love.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start"
              variants={itemVariants}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <RealButton variant="elegant" size="lg" className="w-full sm:w-auto" asChild>
                  <a href="https://maps.app.goo.gl/WZg5SNjofwCcpcF8A" target="_blank" rel="noopener noreferrer">
                    Get directions
                  </a>
                </RealButton>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <RealButton variant="outline" size="lg" className="w-full sm:w-auto" asChild>
                  <a href="/gallery">
                    View Our Gallery
                  </a>
                </RealButton>
              </motion.div>
            </motion.div>

            {/* Key Statistics */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8"
              variants={statsVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div 
                className="text-center lg:text-left bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border/20"
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <Calendar className="w-5 h-5 text-primary mr-2" />
                  <span className="text-2xl sm:text-3xl font-display font-bold text-red-900">9+</span>
                </div>
                <p className="text-sm text-muted-foreground font-medium">Years Experience</p>
              </motion.div>

              <motion.div 
                className="text-center lg:text-left bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border/20"
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <Users className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-2xl sm:text-3xl font-display font-bold text-green-600">500+</span>
                </div>
                <p className="text-sm text-muted-foreground font-medium">Satisfied Clients</p>
              </motion.div>

              <motion.div 
                className="text-center lg:text-left bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border/20"
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center justify-center lg:justify-start mb-2">
                  <Star className="w-5 h-5 text-yellow-500 mr-2 fill-current" />
                  <span className="text-2xl sm:text-3xl font-display font-bold text-yellow-600">5 Stars</span>
                </div>
                <p className="text-sm text-muted-foreground font-medium">On Google</p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Image Section */}
        <motion.div 
          className="w-full lg:w-1/2 lg:pl-12"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="relative"
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <motion.div 
              className="relative rounded-2xl overflow-hidden shadow-elegant"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={heroBanner}
                alt="Elegant boutique tailoring showcase"
                className="w-full h-auto max-h-[500px] object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent"></div>
            </motion.div>
            <motion.div
              className="absolute -top-4 -right-4 w-16 h-16 bg-accent rounded-full flex items-center justify-center shadow-card"
              animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
              transition={{ rotate: { duration: 8, repeat: Infinity }, scale: { duration: 2, repeat: Infinity } }}
            >
              <Star className="w-8 h-8 text-accent-foreground fill-current" />
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary rounded-full shadow-soft"
              animate={{ y: [0, -10, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-3 bg-primary rounded-full mt-2"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
