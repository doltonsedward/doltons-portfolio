import { ProjectDataType } from '../project/types';

const PROJECTS_DATA: ProjectDataType[] = [
  {
    id: 1,
    title: 'IT Lance',
    slug: 'it-lance',
    shortDesc:
      'A lightweight, design-focused job board UI targeted for IT job seekers.',
    fullDesc:
      'IT Lance is a small web project focused on a clean, unique UI for job seekers and recruiters. It provides landing and static pages showcasing job listings and company information — implemented as a static site (GitHub Pages). It is intended as an open-source UI/UX project for job marketplace concepts.',
    stack: ['HTML', 'CSS', 'JavaScript'],
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
  // ...tambahkan project lain, gunakan default value kosong untuk field baru jika belum ada datanya...
];
export default PROJECTS_DATA;
