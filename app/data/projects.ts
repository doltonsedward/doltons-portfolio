import { ProjectDataType } from '../project/types';

const PROJECTS_DATA: ProjectDataType[] = [
  {
    id: 7,
    title: 'SchemaCraft',
    slug: 'schema-craft',
    shortDesc:
      'A powerful visual database schema designer and mapper that transforms SQL-like syntax into interactive ER diagrams.',
    fullDesc:
      'SchemaCraft is a developer-centric tool designed to streamline database modeling. It allows users to write schema definitions in a dedicated code editor and instantly visualizes them as interactive, draggable Entity Relationship Diagrams (ERD). Built for clarity and speed, it helps developers map complex relationships, export diagrams for documentation, and manage database structures through a modern, side-by-side interface.',
    stack: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'React Flow', // Library umum untuk diagram/canvas seperti di gambar
      'Monaco Editor', // Library umum untuk editor kode
      'Lucide React',
    ],
    githubLink: 'https://github.com/dollong-workspace/db-schema-mapper',
    linkToProject: 'https://schemacraft.vercel.app/', // Ganti jika ada link demo spesifik
    image: '/assets/projects/schemacraft.png',
    status: 'Completed',
    duration: '4–6 weeks',
    year: '2024–2025',
    challenges: [
      'Syntax Parsing: Implementing a custom parser to transform SQL/DBML-like strings into structured JSON data for diagram rendering.',
      'Real-time Synchronization: Ensuring seamless, low-latency updates between the code editor and the visual canvas.',
      'Diagram Auto-Layout: Engineering the logic for automatic line routing and relationship mapping to prevent overlapping UI elements.',
      'State Management: Handling complex states for multiple tables, columns, and their interconnected references.',
    ],
    keyFeatures: [
      'Live SQL/DBML Editor: Side-by-side view with syntax highlighting for real-time schema modeling.',
      'Interactive ERD Canvas: Fully draggable and zoomable interface with interactive table nodes.',
      'Relationship Mapping: Visual representation of One-to-Many and Many-to-Many relationships using intuitive connectors.',
      'Export & Sharing: Features to export diagrams as images or `share schema configurations with team members.',
      'Modern Developer UI: Equipped with Dark Mode support and a clean, high-fidelity aesthetic.',
    ],
  },
  {
    id: 1,
    title: 'IT Lance',
    slug: 'it-lance',
    shortDesc:
      'A lightweight, design-focused job board UI targeted for IT job seekers.',
    fullDesc:
      'IT Lance is a small web project focused on a clean, unique UI for job seekers and recruiters. It provides landing and static pages showcasing job listings and company information — implemented as a static site (GitHub Pages). It is intended as an open-source UI/UX project for job marketplace concepts.',
    stack: ['HTML', 'CSS', 'JavaScript', 'React JS'],
    githubLink: 'https://github.com/doltonsedward/IT_Lance-App',
    linkToProject: 'https://doltonsedward.github.io/IT_Lance-App/',
    image: '/assets/projects/it-lance.png',
    status: 'Completed',
    duration: '2–3 weeks (estimate)',
    year: '2022–2023 (estimate)',
    challenges: [
      'Designing lightweight UI/UX that is clear for job seekers',
      'Implementing responsive layouts and assets',
      'Packaging as a static GitHub Pages deployment',
    ],
    keyFeatures: [
      'Clean, lightweight job listing UI',
      'Responsive landing and info pages',
      'Simple HTML/CSS/JS static implementation',
    ],
  },
  {
    id: 6,
    title: 'Hyperhire Landing Page',
    slug: 'hyperhire-landing-page',
    shortDesc:
      'A high-fidelity implementation of an AI-powered recruitment platform connecting Korean enterprises with top-tier global talent.',
    fullDesc:
      'Hyperhire is a premier B2B HR solution designed to streamline the hiring of international talent for Korean companies. This project is a pixel-perfect replication of their landing page, built to demonstrate precision engineering under strict time constraints. It highlights the platform’s core value: bridging the gap between skilled global professionals and businesses through AI-driven matching, automated payroll, and compliance management—all presented through a fluid, high-performance user interface.',
    stack: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'HeroUI',
    ],
    githubLink: 'https://github.com/doltonsedward/hyperhire-landing-page',
    linkToProject: 'https://hyperhire-landing-page-ecru.vercel.app/',
    image: '/assets/projects/hyperhire.png',
    status: 'Completed',
    duration: '1 day (Hackathon style)',
    year: '2025',
    challenges: [
      'Rapid Prototyping: Delivering a production-ready UI within a strict 24-hour timeframe without compromising code quality.',
      'Complex Animations: Engineering smooth, scroll-triggered reveal effects and micro-interactions using Framer Motion to match the original premium feel.',
      'Pixel-Perfect Accuracy: Translating a complex design system (likely Figma) into responsive Tailwind CSS code with exact spacing, typography, and color fidelity.',
      'HeroUI Integration: Customizing HeroUI components to blend seamlessly with the bespoke design requirements.',
    ],
    keyFeatures: [
      'Immersive Hero Section: Features dynamic entry animations and a clear value proposition.',
      'Responsive Grid Layouts: Adaptive talent cards and service grids that stack perfectly across mobile, tablet, and desktop.',
      'Interactive UI Elements: Hover states, smooth scrolling, and engaging micro-interactions powered by Framer Motion.',
      'Modern Tech Stack: Built on the Next.js App Router for optimal performance and SEO.',
    ],
  },
  {
    id: 2,
    title: 'Literature',
    slug: 'literature',
    shortDesc:
      'A web-based writing platform that lets users create, publish and collect literary works.',
    fullDesc:
      'Literature is a web app for writing and sharing works with readers. The project covers a complete flow including landing, authentication (login/register), home/search results, profile, collection and detailed literature pages. It also includes admin pages and PDF viewer/downloader utilities. Built with a JS front-end and styled with SCSS, the app aims for a clean reading/writing experience and content management features.',
    stack: ['JavaScript', 'SCSS', 'CSS', 'HTML'],
    githubLink: 'https://github.com/doltonsedward/Literature',
    linkToProject: 'https://literature-app.vercel.app/',
    image: '/assets/projects/literature.png',
    status: 'Completed',
    duration: '1–2 months (estimate)',
    year: '2023 (estimate)',
    challenges: [
      'Providing a readable, editor-friendly UI for authors',
      'Handling PDF view/download and collection management',
      'Keeping UI responsive and accessible for long-form content',
    ],
    keyFeatures: [
      'Writer editor & publish flow',
      'User profile and collections',
      'Detail & collection pages',
      'PDF viewer & downloader',
      'Authentication (login/register)',
      'Responsive reading experience',
    ],
  },
  {
    id: 3,
    title: 'Dewe Tour',
    slug: 'dewe-tour',
    shortDesc:
      'A travel booking application designed to simplify booking tickets and travel packages online.',
    fullDesc:
      'DeweTour (Dewetour) is an online travel booking app aimed to simplify booking travel tickets quickly without visiting a travel provider. The project includes authentication, search results, profile, detail tour pages, booking & payment flows, admin/dashboard features (graphs), chat and notifications. It is a more full-featured app compared to the others and is deployed on Vercel for a live demo.',
    stack: ['JavaScript', 'SCSS', 'CSS'],
    githubLink: 'https://github.com/doltonsedward/Dewe_Tour',
    linkToProject: 'https://dewe-tour.vercel.app/',
    image: '/assets/projects/dewe-tour.png',
    status: 'Completed',
    duration: '3–4 months (estimate)',
    year: '2023 (estimate)',
    challenges: [
      'Building booking flow and payment integration',
      'Implementing chat and real-time interactions',
      'Making dashboard analytics and admin features',
    ],
    keyFeatures: [
      'Search & result pages for tours',
      'Booking & payment flow',
      'User profile & dashboard with graphs',
      'Chat between user and admin',
      'Responsive UI and Vercel deployment',
    ],
  },
  // {
  //   id: 4,
  //   title: 'E-Commerce Platform',
  //   slug: 'e-commerce-platform',
  //   shortDesc:
  //     'A full-stack e-commerce platform with payment integration and real-time inventory management.',
  //   fullDesc:
  //     'This comprehensive e-commerce platform was built to handle high-traffic scenarios with real-time inventory management, secure payment processing, and an intuitive admin dashboard. The project showcases advanced React patterns, efficient state management, and scalable backend architecture.\n\nKey features include user authentication, product catalog management, shopping cart functionality, order tracking, payment integration with Stripe, and comprehensive analytics dashboard for store owners.',
  //   stack: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis', 'Docker'],
  //   githubLink: 'https://github.com/example/ecommerce',
  //   linkToProject: 'https://ecommerce-demo.com',
  //   image:
  //     '/placeholder.svg?height=400&width=800&query=ecommerce platform screenshot',
  //   status: 'Completed',
  //   duration: '3 months',
  //   year: '2024',
  //   challenges: [
  //     'Implementing real-time inventory updates across multiple concurrent users',
  //     'Optimizing database queries for large product catalogs',
  //     'Ensuring PCI compliance for payment processing',
  //     'Building a scalable architecture to handle traffic spikes',
  //   ],
  //   keyFeatures: [
  //     'Real-time inventory management',
  //     'Secure payment processing with Stripe',
  //     'Advanced product filtering and search',
  //     'Order tracking and notifications',
  //     'Admin dashboard with analytics',
  //     'Mobile-responsive design',
  //   ],
  // },
  {
    id: 5,
    title: 'Savetime Task Manager',
    slug: 'savetime-task-manager',
    shortDesc:
      'A collaborative task management application with real-time updates and team collaboration features.',
    fullDesc:
      'A comprehensive task management solution designed for remote teams. Built with React and Firebase, this application provides real-time collaboration features, project organization, and productivity tracking.\n\nThe app includes advanced features like drag-and-drop task organization, team member assignment, deadline tracking, and integrated communication tools.',
    stack: ['React', 'TypeScript', 'Firebase', 'Material-UI', 'WebSocket'],
    githubLink: 'https://github.com/example/taskmanager',
    linkToProject: 'https://taskmanager-demo.com',
    image: '/assets/projects/savetime-task-manager.png',
    status: 'Completed',
    duration: '2 months',
    year: '2024',
    challenges: [
      'Implementing real-time collaboration without conflicts',
      'Designing an intuitive drag-and-drop interface',
      'Managing complex state with multiple team members',
      'Optimizing performance for large task lists',
    ],
    keyFeatures: [
      'Real-time collaboration',
      'Drag-and-drop task organization',
      'Team member assignment and notifications',
      'Project timeline and milestone tracking',
      'Integrated chat and comments',
      'Advanced filtering and search',
    ],
  },
  {
    id: 8,
    title: 'Toraja Hill Stop',
    slug: 'toraja-hill-stop',
    shortDesc:
      'A breathtaking digital presence for a hospitality business, featuring direct WhatsApp booking and live chat integration.',
    fullDesc:
      'Toraja Hill Stop is a modern, mobile-friendly landing page designed exclusively for guesthouses and homestays. Built to bypass expensive OTA commissions, it connects guests directly with the owner via WhatsApp. The project showcases a warm terracotta aesthetic with elegant typography, a stunning hero section, and Tawk.to live chat support. Engineered for blazing-fast performance with React and Vite, it delivers a premium user experience from inquiry to booking.',
    stack: [
      'React',
      'Vite',
      'Tailwind CSS',
      'shadcn/ui',
      'Supabase',
      'Tawk.to',
      'Lucide React',
    ],
    githubLink:
      'https://github.com/dollong-workspace/toraja-hill-stop-landing-page',
    linkToProject: 'https://www.torajahillstop.com/',
    image: '/assets/projects/torajahillstop.png',
    status: 'Completed',
    duration: '1–2 weeks',
    year: '2025',
    challenges: [
      'Eliminating OTA Dependency: Designing a seamless direct booking flow via WhatsApp to maximize owner revenue.',
      'Performance Optimization: Achieving near-instant load times for high-quality mountain gallery images.',
      'Aesthetic Alignment: Translating the physical charm of Toraja into a digital interface using elegant palettes and typography.',
      'Real-time Engagement: Integrating and configuring Tawk.to for instant, zero-cost customer support.',
    ],
    keyFeatures: [
      'Direct WhatsApp Booking: Bypasses 15-20% OTA commissions with a pre-formatted message system.',
      'Exquisite Hero Section: Greets visitors with breathtaking mountain imagery and smooth hover effects.',
      'Tawk.to Live Chat: Enables real-time visitor engagement and inquiry management on the go.',
      'Performance & SEO Optimized: Built with semantic HTML, optimized meta tags, and loads in milliseconds.',
    ],
  },
  {
    id: 9,
    title: 'Nutrilife',
    slug: 'nutrilife',
    shortDesc:
      'A personalized health and wellness app focused on mindful nutrition and intuitive lifestyle tracking.',
    fullDesc:
      'Nutrilife is a modern health application designed to empower users with personalized dietary and wellness insights. Built with an intuitive and visually engaging interface, the app makes tracking daily nutrition, discovering healthy habits, and monitoring progress an effortless and motivating experience. The architecture leverages scalable, responsive UI components to ensure seamless interactions across all devices, turning complex health data into clear, actionable visual milestones.',
    stack: [
      'React',
      'Next.js',
      'Tailwind CSS',
      'TypeScript',
      'Framer Motion',
      'Node.js',
    ],
    githubLink: 'https://github.com/dollong-workspace/nutrilife',
    linkToProject: 'https://app-nutrilife.lovable.app',
    image: '/assets/projects/nutrilife.png',
    status: 'Completed',
    duration: '3–4 weeks',
    year: '2025',
    challenges: [
      'Data Visualization: Creating easy-to-understand charts and actionable metrics for daily nutritional intake.',
      'User Engagement: Designing an inspiring aesthetic that motivates daily check-ins without feeling monotonous.',
      'Accessibility & Responsiveness: Ensuring health data tracking is seamless and comfortable on mobile devices.',
      'State Management: Synchronizing personalized user records to reflect real-time lifestyle milestones safely.',
    ],
    keyFeatures: [
      'Personalized Dashboard: A visually stunning overview of daily progress, calories, and macros.',
      'Interactive Goal Tracking: Smooth micro-animations and encouraging feedback for every health milestone.',
      'Responsive UI: Adaptive layouts and mobile-first experience for tracking on the go.',
      'Actionable Insights: Transforms raw data into motivating visual summaries and recommendations.',
    ],
  },
  {
    id: 10,
    title: 'Crumble Cookies',
    slug: 'crumble-cookies',
    shortDesc:
      'A delightful eCommerce landing page designed to showcase artisanal baked goods and boost online orders.',
    fullDesc:
      'Crumble Cookies is an appetizing web project created to present premium, freshly baked cookies in the digital space. The design heavily emphasizes high-quality product imagery and a mouth-watering aesthetic to tempt visitors. Built with a smooth, interactive UI, it simplifies the browsing and ordering experience, making it irresistible for customers to explore different cookie flavors and add them to their cart. This project highlights frontend capabilities in creating engaging, sales-driven user interfaces.',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    githubLink: 'https://github.com/dollong-workspace/crumble-cookies',
    linkToProject: '#',
    image: '/assets/projects/crumble-cookies.png', // Sesuaikan gambar jika ada
    status: 'In Progress',
    duration: '1–2 weeks',
    year: '2025',
    challenges: [
      'Visual Appeal: Crafting a warm, inviting UI that effectively translates the appeal of fresh baked goods through a screen.',
      'Interactive Micro-animations: Implementing seamless hover states and entering animations to make the browsing experience feel premium.',
      'Responsive Product Grids: Ensuring the layout adapts perfectly from desktop multi-column gallery to a smooth mobile scrolling experience.',
    ],
    keyFeatures: [
      "Appetizing Hero Section: A visually striking introduction that instantly captures the brand's delicious identity.",
      'Dynamic Product Showcase: Smoothly animated grid displaying current cookie flavors and seasonal specials.',
      'Intuitive Layout: Clean, accessible navigation designed to guide visitors naturally toward the ordering process.',
    ],
  },
  {
    id: 11,
    title: 'Dapur Nusantara',
    slug: 'dapur-nusantara',
    shortDesc:
      'A vibrant digital catalog and ordering interface celebrating authentic Indonesian culinary heritage.',
    fullDesc:
      "Dapur Nusantara brings the rich flavors of traditional Indonesian cuisine to the forefront of the modern web. This project serves as an interactive restaurant menu and digital storefront, designed to tantalize users with vibrant visuals of classic dishes. The interface balances traditional cultural aesthetics with contemporary web design principles, offering smooth category filtering and detailed dish descriptions to enhance the customer's digital dining journey.",
    stack: ['React', 'Next.js', 'Tailwind CSS'],
    githubLink: 'https://github.com/dollong-workspace/dapur-nusantara',
    linkToProject: '#',
    image: '/assets/projects/dapur-nusantara.png', // Sesuaikan gambar jika ada
    status: 'In Progress',
    duration: '2–3 weeks',
    year: '2025',
    challenges: [
      'Cultural Aesthetic Translation: Blending traditional Indonesian design elements with a clean, modern user interface.',
      'Menu Categorization: Building an intuitive filtering system that handles diverse food categories (heavy meals, snacks, traditional beverages) smoothly.',
      'Image Optimization: Ensuring high-resolution food photography loads quickly without compromising visual quality.',
    ],
    keyFeatures: [
      'Interactive Menu Filtering: Quick and seamless category switching for an effortless browsing experience.',
      'Rich Visual Presentation: High-fidelity image displays accompanied by engaging descriptions of the region-specific dishes.',
      'Responsive Mobile-First Design: Tailored for on-the-go users looking to browse or order food comfortably from their phones.',
    ],
  },
  {
    id: 12,
    title: 'Kopi Kita',
    slug: 'kopi-kita',
    shortDesc:
      'A sleek, atmospheric landing page for a modern local coffee shop, designed to attract local patrons.',
    fullDesc:
      "Kopi Kita is a minimalist and atmospheric digital storefront designed for a contemporary local coffee shop. Recognizing that a coffee shop is as much about the vibe as it is about the coffee, the project aims to digitally reflect the physical store's ambiance. It features a dark-themed or warm palette (depending on the store's branding), showcasing the coffee menu, barista specials, and the shop's cozy interior through fluid layouts and refined typography.",
    stack: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
    githubLink: 'https://github.com/dollong-workspace/kopi-kita-landing-page',
    linkToProject: '#',
    image: '/assets/projects/kopi-kita.png', // Sesuaikan gambar jika ada
    status: 'In Progress',
    duration: '1–2 weeks',
    year: '2025',
    challenges: [
      'Ambiance Recreation: Capturing the cozy, intimate feel of a coffee shop through digital color palettes and font choices.',
      'Content Rhythm: Designing a scrolling experience that naturally paces the user through the menu, about section, and location details.',
      'Performance: Keeping the site lightweight and fast while utilizing high-quality background images and subtle entrance animations.',
    ],
    keyFeatures: [
      'Immersive Hero Banner: Sets the mood instantly with atmospheric imagery and elegant typography.',
      'Curated Digital Menu: Carefully structured sections highlighting signature roasts, pastries, and barista specials.',
      'Location & Hours Hub: Clear, accessible practical information to drive foot traffic to the physical store.',
    ],
  },
  {
    id: 13,
    title: 'Cuci Mobil Kilat',
    slug: 'cuci-mobil-kilat',
    shortDesc:
      'A fast, streamlined booking platform designed for a local express car wash service.',
    fullDesc:
      'Cuci Mobil Kilat is a digital booking solution tailored for a local car wash striving to modernize its appointment system. Built to minimize wait times and maximize operational efficiency, the app allows users to quickly select wash packages, pick available time slots, and confirm bookings on the go. Its bold, high-contrast UI ensures readability even under bright outdoor conditions, making it the perfect pit-stop companion for busy car owners.',
    stack: ['React', 'Tailwind CSS'],
    githubLink: 'https://github.com/dollong-workspace/cuci-mobil-kilat',
    linkToProject: '#',
    image: '/assets/projects/cuci-mobil-kilat.png', // Sesuaikan gambar jika ada
    status: 'In Progress',
    duration: '1–2 weeks',
    year: '2025',
    challenges: [
      'Streamlined Booking Flow: Reducing the number of clicks required from service selection to confirmed appointment.',
      'Time Slot Management: Creating an intuitive interface to display available working hours and prevent double-booking.',
      'Mobile Accessibility: Ensuring the UI components are chunky, readable, and perfectly tap-able for users accessing the site from their phones.',
    ],
    keyFeatures: [
      'Express Booking: A multi-step form that captures vehicle details and service choices in seconds.',
      'Service Packages Hub: A clear, comparative display of available wash packages and pricing.',
      'Responsive Outdoor UI: High-contrast design elements adapted for quick visibility on bright screens.',
    ],
  },
  {
    id: 14,
    title: 'Bakmi Jago',
    slug: 'bakmi-jago',
    shortDesc:
      'A charming landing page designed to digitalize and promote a beloved local noodle shop.',
    fullDesc:
      "Bakmi Jago brings the warmth and authenticity of a legendary local noodle shop to the digital era. The landing page acts as an inviting digital storefront that highlights the shop's signature dishes, history, and customer testimonials. Through mouth-watering photography and warm color schemes, the site successfully captures the comforting essence of a hot bowl of noodles, driving both foot traffic and online orders.",
    stack: ['React', 'Next.js', 'Tailwind CSS'],
    githubLink: 'https://github.com/dollong-workspace/bakmi-jago-landing-page',
    linkToProject: '#',
    image: '/assets/projects/bakmi-jago.png', // Sesuaikan gambar jika ada
    status: 'In Progress',
    duration: '1–2 weeks',
    year: '2025',
    challenges: [
      'Visual Storytelling: Conveying the rich aroma and taste of traditional noodles entirely through digital imagery and typography.',
      'Menu Display: Organizing a diverse menu of toppings, noodle types, and side dishes into an easy-to-read format.',
      'Brand Identity: Maintaining the grassroots, authentic feel of the business while using modern web frameworks.',
    ],
    keyFeatures: [
      'Hero Showcase: A full-width, appetizing introduction to the shop\'s signature "Bakmi Spesial".',
      'Testimonial Carousel: Building trust by highlighting positive reviews from long-time customers.',
      'Interactive Menu: An easily navigable section detailing prices, variations, and popular combos.',
    ],
  },
  {
    id: 15,
    title: 'WA Directly',
    slug: 'wa-directly',
    shortDesc:
      'A simple, privacy-focused tool to start WhatsApp conversations instantly without saving phone numbers.',
    fullDesc:
      'WA Directly was built to solve a common annoyance: saving temporary contacts just to send a single WhatsApp message. It provides a lightning-fast, zero-friction interface where users simply enter a phone number and country code to click through directly to the WhatsApp app. Designed with a strict privacy-first approach, it stores absolutely zero user data, utilizing a secure tech stack to act merely as a bridge to the official WhatsApp API.',
    stack: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'shadcn/ui'],
    githubLink: 'https://github.com/dollong-workspace/wa-directly',
    linkToProject: 'https://wa-directly.lovable.app',
    image: '/assets/projects/wa-directly.png', // Sesuaikan gambar jika ada
    status: 'Completed',
    duration: '1 week',
    year: '2025',
    challenges: [
      'Frictionless UX: Designing a single-purpose interface that does its one job perfectly without any bloated features.',
      'Input Validation: Handling diverse international phone number formats and sanitizing user input seamlessly.',
      'Complete Privacy: Developing a frontend-only architecture to ensure no data is ever sent to a database or tracked.',
    ],
    keyFeatures: [
      'Instant Redirection: Bypasses the contact-saving process by utilizing the official wa.me API.',
      'Intelligent Formatting: Automatically handles leading zeros and formatting based on selected country codes.',
      'Zero Trace Architecture: A fully stateless application guaranteeing 100% user privacy and no analytics tracking.',
    ],
  },
];

export default PROJECTS_DATA;
