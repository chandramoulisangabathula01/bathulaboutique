import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

// --- UI Library Imports ---
// Make sure you have installed the library that provides these components.
// These are placeholders for the components from your example.
import {
  Navbar as ResizableNavbar,
  NavBody,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from '@/components/ui/resizable-navbar'; // Assuming this is the correct path

// --- Placeholder for your custom Button component ---
// The library seems to have its own button, but we can use yours if needed.
// For this example, let's assume the library provides a NavbarButton.
import { NavbarButton } from '@/components/ui/resizable-navbar'; // Assuming this exists

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to reset overflow when the component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: 'Home', href: '/', type: 'link' },
    { name: 'Services', href: '#services', type: 'anchor' },
    { name: 'Gallery', href: '/gallery', type: 'link' },
    { name: 'Testimonials', href: '#testimonials', type: 'anchor' },
    { name: 'Contact', href: '#contact', type: 'anchor' },
  ];

  const handleWhatsappRedirect = () => {
    const whatsappUrl = `https://wa.me/919876543210?text=${encodeURIComponent('Hi! I would like to book an appointment for tailoring services.')}`;
    window.open(whatsappUrl, '_blank');
    setIsMobileMenuOpen(false); // Also close menu if open
  };

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1); // Remove '#'
    
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollToId: targetId } });
    } else {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false); // Close mobile menu after click
  };

  useEffect(() => {
    if (location.pathname === '/' && location.state && (location.state as { scrollToId?: string }).scrollToId) {
      const targetId = (location.state as { scrollToId: string }).scrollToId;
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
      // Clear the state after scrolling
      window.history.replaceState({}, document.title);
    }
  }, [location.state, location.pathname]);

  // Custom component for the logo to keep the code clean
  const Logo = () => (
    <a
      href="/"
      onClick={() => isMobileMenuOpen && setIsMobileMenuOpen(false)}
      className="flex items-center gap-2"
    >
      <img src="/gallery/logo_circle.png" alt="Bathula Boutique Logo" className="h-24 w-24 md:h-24 md:w-24" />
      {/* <span className="text-xl md:text-2xl font-display font-bold text-red-900 hover:text-primary-hover transition-colors duration-300">
        Bathula Boutique
      </span> */}
    </a>
  );

  return (
    <ResizableNavbar>
      {/* ======================= */}
      {/* Desktop Navigation      */}
      {/* ======================= */}
      <NavBody>
        <Logo />

        {/* We map items manually to handle internal vs. external links */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            item.type === 'link' ? (
              <Link
                key={item.name}
                to={item.href}
                state={item.href === '/gallery' ? null : undefined}
                className="relative text-foreground hover:text-primary transition-colors duration-300 font-medium after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.name}
              </Link>
            ) : (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleAnchorClick(e, item.href)}
                className="relative text-foreground hover:text-primary transition-colors duration-300 font-medium after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.name}
              </a>
            )
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <NavbarButton variant="primary" onClick={handleWhatsappRedirect}>
            Book Appointment
          </NavbarButton>
        </div>
      </NavBody>

      {/* ======================= */}
      {/* Mobile Navigation       */}
      {/* ======================= */}
      <MobileNav>
        <MobileNavHeader>
          <Logo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {/* We map again to handle links and close the menu onClick */}
          {navItems.map((item, idx) => (
            item.type === 'link' ? (
              <Link
                key={`mobile-${idx}`}
                to={item.href}
                state={item.href === '/gallery' ? null : undefined}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ) : (
              <a
                key={`mobile-${idx}`}
                href={item.href}
                onClick={(e) => handleAnchorClick(e, item.href)}
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                {item.name}
              </a>
            )
          ))}
          <div className="flex w-full flex-col gap-4 pt-4">
            <NavbarButton
              onClick={handleWhatsappRedirect}
              variant="primary"
              className="w-full"
            >
              Book Appointment
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </ResizableNavbar>
  );
};

export default Navbar;
