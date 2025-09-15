import { ProjectDataType } from "../project/types";

const PROJECTS_DATA: ProjectDataType[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    shortDesc:
      "A full-stack e-commerce platform with payment integration and real-time inventory management.",
    fullDesc:
      "This comprehensive e-commerce platform was built to handle high-traffic scenarios with real-time inventory management, secure payment processing, and an intuitive admin dashboard. The project showcases advanced React patterns, efficient state management, and scalable backend architecture.\n\nKey features include user authentication, product catalog management, shopping cart functionality, order tracking, payment integration with Stripe, and comprehensive analytics dashboard for store owners.",
    stack: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis", "Docker"],
    githubLink: "https://github.com/example/ecommerce",
    linkToProject: "https://ecommerce-demo.com",
    image:
      "/placeholder.svg?height=400&width=800&query=ecommerce platform screenshot",
    status: "Completed",
    duration: "3 months",
    year: "2024",
    challenges: [
      "Implementing real-time inventory updates across multiple concurrent users",
      "Optimizing database queries for large product catalogs",
      "Ensuring PCI compliance for payment processing",
      "Building a scalable architecture to handle traffic spikes",
    ],
    keyFeatures: [
      "Real-time inventory management",
      "Secure payment processing with Stripe",
      "Advanced product filtering and search",
      "Order tracking and notifications",
      "Admin dashboard with analytics",
      "Mobile-responsive design",
    ],
  },
  {
    id: 2,
    title: "Task Management App",
    shortDesc:
      "A collaborative task management application with real-time updates and team collaboration features.",
    fullDesc:
      "A comprehensive task management solution designed for remote teams. Built with React and Firebase, this application provides real-time collaboration features, project organization, and productivity tracking.\n\nThe app includes advanced features like drag-and-drop task organization, team member assignment, deadline tracking, and integrated communication tools.",
    stack: ["React", "TypeScript", "Firebase", "Material-UI", "WebSocket"],
    githubLink: "https://github.com/example/taskmanager",
    linkToProject: "https://taskmanager-demo.com",
    image:
      "/placeholder.svg?height=400&width=800&query=task management app screenshot",
    status: "In Progress",
    duration: "2 months",
    year: "2024",
    challenges: [
      "Implementing real-time collaboration without conflicts",
      "Designing an intuitive drag-and-drop interface",
      "Managing complex state with multiple team members",
      "Optimizing performance for large task lists",
    ],
    keyFeatures: [
      "Real-time collaboration",
      "Drag-and-drop task organization",
      "Team member assignment and notifications",
      "Project timeline and milestone tracking",
      "Integrated chat and comments",
      "Advanced filtering and search",
    ],
  },
  // ...tambahkan project lain, gunakan default value kosong untuk field baru jika belum ada datanya...
];
export default PROJECTS_DATA;
