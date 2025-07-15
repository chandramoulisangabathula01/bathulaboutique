export interface Service {
  title: string;
  slug: string;
  description: string;
  features: string[];
  price: string;
  image: string;
  subtitle?: string;
  images?: string[];
  testimonials?: {
    name: string;
    text: string;
    rating: number;
  }[];
}

export const servicesData: Service[] = [
  {
    title: "Designer Blouses",
    slug: "designer-blouses",
    description: "Exquisite custom-made designer blouses with intricate embroidery, beadwork, and contemporary cuts that perfectly complement your sarees.",
    features: ["Custom embroidery", "Premium fabrics", "Modern cuts", "Traditional designs"],
    price: "Starting from ₹500",
    image: "/gallery/designer_blouses/1.webp",
    subtitle: "Exquisite Custom-Made Designer Blouses",
    images: [
      "/gallery/designer_blouses/2.webp",
      "/gallery/designer_blouses/3.webp",
      "/gallery/designer_blouses/4.webp",
    ],
    testimonials: [
      {
        name: "Priya Sharma",
        text: "The embroidery work on my blouse was absolutely stunning. Got so many compliments!",
        rating: 5
      },
      {
        name: "Kavya Reddy",
        text: "Perfect fitting and beautiful design. Exactly what I wanted for my sister's wedding.",
        rating: 5
      }
    ]
  },
  {
    title: "Traditional Kurtas",
    slug: "traditional-kurtas",
    description: "Elegant kurtas crafted with attention to detail, featuring beautiful necklines, sleeve designs, and comfortable fits for any occasion.",
    features: ["Traditional patterns", "Comfortable fit", "Quality stitching", "Multiple styles"],
    price: "Starting from ₹1,800",
    image:  "/gallery/traditional_wear/1.webp",
    subtitle: "Elegant Kurtas for Every Occasion",
    images: [
      "/gallery/traditional_wear/2.webp",
      "/gallery/traditional_wear/2.webp",
      "/gallery/traditional_wear/2.webp",
    ],
    testimonials: [
      {
        name: "Meera Patel",
        text: "Beautiful kurtas with perfect fitting. The fabric quality is excellent and very comfortable.",
        rating: 5
      },
      {
        name: "Sita Devi",
        text: "Ordered multiple kurtas for festivals. Each one is unique and beautifully crafted.",
        rating: 5
      }
    ]
  },
  {
    title: "Long Frocks & Gowns",
    slug: "long-frocks",
    description: "Stunning long frocks and gowns perfect for special occasions, designed to enhance your silhouette with grace and elegance.",
    features: ["Evening wear", "Party designs", "Elegant silhouettes", "Custom lengths"],
    price: "Starting from ₹3,200",
    image: "/gallery/long_frocks/5.webp",
    subtitle: "Stunning Long Frocks for Special Occasions",
    images: [
      "/gallery/long_frocks/1.webp",
      "/gallery/long_frocks/2.webp",
      "/gallery/long_frocks/3.webp",
    ],
    testimonials: [
      {
        name: "Anjali Singh",
        text: "The gown was absolutely perfect for my engagement. Everyone asked where I got it from!",
        rating: 5
      },
      {
        name: "Radha Krishnan",
        text: "Beautiful long frock with perfect fitting. The fabric flows beautifully and looks elegant.",
        rating: 5
      }
    ]
  },
  {
    title: "Half-Sarees",
    slug: "half-sarees",
    description: "Beautiful half-saree sets with coordinated blouses and skirts, perfect for traditional celebrations and cultural events.",
    features: ["Coordinated sets", "Traditional appeal", "Perfect draping", "Festival ready"],
    price: "Starting from ₹4,000",
    image: "/gallery/long_frocks/4.webp",
    subtitle: "Beautiful Half-Saree Sets",
    images: [
     " /gallery/long_frocks/7.webp",
      " /gallery/long_frocks/3.webp",
      " /gallery/long_frocks/6.webp",
    ],
    testimonials: [
      {
        name: "Lakshmi Nair",
        text: "Perfect half-saree set for my daughter's function. Traditional yet modern design.",
        rating: 5
      },
      {
        name: "Geetha Rao",
        text: "Beautiful coordinated set with excellent draping. Very comfortable to wear.",
        rating: 5
      }
    ]
  },
  {
    title: "Cotton Pajamas",
    slug: "cotton-pajamas",
    description: "Comfortable and stylish cotton pajamas and nightwear, designed for ultimate comfort without compromising on style.",
    features: ["Soft cotton fabric", "Comfortable fit", "Breathable material", "Easy maintenance"],
    price: "Starting from ₹800",
    image: " /gallery/long_frocks/7.webp",
    subtitle: "Comfortable Cotton Nightwear",
    images: [
" /gallery/long_frocks/7.webp",
" /gallery/long_frocks/2.webp",
" /gallery/long_frocks/3.webp",
    ],
    testimonials: [
      {
        name: "Sunita Devi",
        text: "Very comfortable cotton pajamas. Soft fabric and good quality stitching.",
        rating: 5
      },
      {
        name: "Rekha Sharma",
        text: "Perfect for daily wear. Comfortable fit and easy to maintain.",
        rating: 5
      }
    ]
  },
  {
    title: "Alterations & Fitting",
    slug: "alterations",
    description: "Professional alteration services to ensure your existing garments fit perfectly and look their absolute best.",
    features: ["Perfect fitting", "Quick service", "Professional finish", "Size adjustments"],
    price: "Starting from ₹300",
    image: " /gallery/long_frocks/1.webp",
    subtitle: "Professional Alteration Services",
    images: [
      " /gallery/long_frocks/3.webp",
      " /gallery/long_frocks/7.webp",
      " /gallery/long_frocks/6.webp",

    ],
    testimonials: [
      {
        name: "Pooja Gupta",
        text: "Excellent alteration work. My dress fits perfectly now. Very professional service.",
        rating: 5
      },
      {
        name: "Nisha Patel",
        text: "Quick and reliable alteration service. Great attention to detail.",
        rating: 5
      }
    ]
  }
];

export const getServiceBySlug = (slug: string) => {
  return servicesData.find(service => service.slug === slug);
};

export const getAllServices = () => {
  return servicesData;
};
