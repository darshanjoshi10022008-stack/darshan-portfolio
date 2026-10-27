export const projects = [
  {
    id: "studenttools-india",
    name: "StudentTools India",
    category: "Academic & Career Utilities Platform",
    tagline: "Centralized web tools ecosystem designed to assist Indian students with academic calculations and productivity.",
    statusBadge: "Live Website",
    statusType: "live", // 'live' | 'development'
    featured: true,
    description: "StudentTools India is a live web platform created for students across India. It brings together practical digital utilities—including university CGPA/SGPA calculators, a college 75% attendance rule planner, CTC in-hand salary estimator, and an ATS-friendly single-column resume builder.",
    highlights: [
      "Dynamic university CGPA & SGPA calculators with Indian grade scale conversion",
      "College attendance calculator with 75% rule safety planner",
      "CTC in-hand salary breakdown with EPF & tax estimations",
      "ATS-compliant single-column fresher resume builder",
      "Deployed and publicly live at studenttoolindia.online"
    ],
    techTags: ["React.js", "Node.js", "Tailwind CSS", "Client-Side Computing"],
    image: "/images/projects/studenttools.png",
    gallery: [
      { url: "/images/projects/studenttools.png", title: "StudentTools India — Live Homepage & Quick Access" }
    ],
    accentColor: "#0ea5e9",
    links: {
      liveDemo: "https://studenttoolindia.online/",
      viewProject: "https://studenttoolindia.online/",
      sourceUrl: "https://github.com/darshanjoshi10022008-stack",
      isLive: true
    }
  },
  {
    id: "hirehub",
    name: "HireHub",
    category: "Full-Stack Recruitment Portal",
    tagline: "A full-featured career portal supporting multi-role authentication, role discovery, and candidate application pipelines.",
    statusBadge: "MERN Stack Project",
    statusType: "development",
    featured: true,
    description: "HireHub is a full-stack career platform engineered with React 19, Express 5, Node.js, and MongoDB Atlas. It features role discovery with faceted keyword and location search, cryptographic single-use email verification, and an applicant tracking system (ATS) for candidates and recruiters.",
    highlights: [
      "Job search with faceted filtering by role category, work type, and location",
      "Multi-role authentication for candidates, recruiters, and administrators",
      "Single-use SHA-256 hashed verification tokens preventing replay attacks",
      "Candidate ATS tracking live pipeline stages with recruiter audit notes",
      "54 passing automated test scenarios verifying workflows & security guards"
    ],
    techTags: ["React.js", "Express.js", "Node.js", "MongoDB Atlas", "Tailwind CSS"],
    image: "/images/projects/hirehub.png",
    gallery: [
      { url: "/images/projects/hirehub.png", title: "HireHub — Homepage Hero & Search Engine" },
      { url: "/images/projects/hirehub-search.png", title: "HireHub — Faceted Job Search & Filter Grid" },
      { url: "/images/projects/hirehub-dashboard.png", title: "HireHub — Candidate Dashboard & Application Tracking" }
    ],
    accentColor: "#6366f1",
    links: {
      liveDemo: null,
      viewProject: null,
      sourceUrl: "https://github.com/darshanjoshi10022008-stack/HireHub",
      isLive: false
    }
  },
  {
    id: "shopest",
    name: "Shopest (ShopNest)",
    category: "Full-Stack E-Commerce Platform",
    tagline: "A responsive e-commerce storefront with product filtering, cart state management, and modern product cards.",
    statusBadge: "MERN Stack Project",
    statusType: "development",
    featured: true,
    description: "Shopest (ShopNest) is an e-commerce web application focused on product discovery and an effortless shopping experience. Built with modular component architecture, dynamic category & department navigation, wishlist management, and real-time shopping cart calculations.",
    highlights: [
      "Responsive product catalog with instant category & department filtering",
      "Dynamic shopping cart with quantity adjustments and real-time total updates",
      "Interactive wishlist and product detail views",
      "Engineered with responsive design principles for seamless mobile & desktop shopping"
    ],
    techTags: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    image: "/images/projects/shopest.png",
    gallery: [
      { url: "/images/projects/shopest.png", title: "Shopest — Storefront Homepage & Category Navigation" },
      { url: "/images/projects/shopest-shop.png", title: "Shopest — Product Catalog & Filtering Grid" },
      { url: "/images/projects/shopest-cart.png", title: "Shopest — Shopping Cart & Summary Calculations" }
    ],
    accentColor: "#3b82f6",
    links: {
      liveDemo: null,
      viewProject: null,
      sourceUrl: "https://github.com/darshanjoshi10022008-stack/shopnest-ecommerce",
      isLive: false
    }
  }
];
