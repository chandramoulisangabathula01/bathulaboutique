"use client"

import { Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa'; // Use FaWhatsapp to match the source style
import { motion } from 'framer-motion';

const FloatingButtons = () => {
  const handleWhatsApp = () => {
    // Note: The phone number is from the source file. Update if needed.
    const whatsappUrl = `https://wa.me/+919502833302?text=${encodeURIComponent("Hi, I'm interested in your services")}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleCall = () => {
    // Note: The phone number is from the source file. Update if needed.
    window.location.href = 'tel:+919502833302';
  };

  const buttonVariants = {
    // The "bobbing" animation
    animate: {
      y: [0, -10, 0],
      boxShadow: [
        '0 4px 8px rgba(0,0,0,0.1)',
        '0 8px 16px rgba(0,0,0,0.2)',
        '0 4px 8px rgba(0,0,0,0.1)',
      ],
    },
    // Hover and tap animations
    whileHover: { scale: 1.1, boxShadow: '0 0 25px rgba(230, 171, 101, 0.5)' },
    whileTap: { scale: 0.9 },
  };

  const pulseVariants = {
    // The "pulsing halo" animation
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.1, 0.3],
    },
  };

  return (
    <>
      {/* WhatsApp Button - Bottom Right */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 400, damping: 30, duration: 0.2 }}
      >
        <motion.button
          onClick={handleWhatsApp}
          className="bg-[#500c17] p-4 rounded-full shadow-lg flex items-center justify-center relative"
          variants={buttonVariants}
          animate="animate"
          whileHover="whileHover"
          whileTap="whileTap"
          transition={{
            y: {
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            },
            boxShadow: {
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            },
          }}
        >
          <FaWhatsapp className="w-8 h-8 text-[#e6ab65]" />
          <motion.div
            className="absolute -inset-2 rounded-full bg-[#500c17]  opacity-30 pointer-events-none"
            variants={pulseVariants}
            animate="animate"
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.button>
      </motion.div>

      {/* Call Button - Bottom Left */}
      <motion.div
        className="fixed bottom-6 left-6 z-50"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 400, damping: 30, duration: 0.2, delay: 0.1 }}
      >
        <motion.button
          onClick={handleCall}
          className="bg-[#500c17] p-4 rounded-full shadow-lg flex items-center justify-center relative"
          variants={buttonVariants}
          animate="animate"
          whileHover="whileHover"
          whileTap="whileTap"
          transition={{
            y: {
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: 0.2, // Stagger the animation so they aren't perfectly in sync
            },
            boxShadow: {
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: 0.2,
            },
          }}
        >
          {/* Using w-7 h-7 for the phone icon for better visual balance */}
          <Phone className="w-7 h-7 text-[#e6ab65]" />
          <motion.div
            className="absolute -inset-2 rounded-full bg-[#711f50] opacity-30 pointer-events-none"
            variants={pulseVariants}
            animate="animate"
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.2,
            }}
          />
        </motion.button>
      </motion.div>
    </>
  );
};

export default FloatingButtons;