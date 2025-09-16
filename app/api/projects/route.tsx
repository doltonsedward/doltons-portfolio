import { NextResponse } from 'next/server';

const PROJECTS_DATA = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    shortDesc:
      'A full-stack e-commerce platform with payment integration and real-time inventory management.',
    stack: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    githubLink: 'https://github.com/example/ecommerce',
    linkToProject: 'https://ecommerce-demo.com',
    image: '/placeholder.svg?height=300&width=400&query=ecommerce platform',
    status: 'Completed',
  },
  {
    id: 2,
    title: 'Task Management App',
    shortDesc:
      'A collaborative task management application with real-time updates and team collaboration features.',
    stack: ['React', 'TypeScript', 'Firebase', 'Material-UI'],
    githubLink: 'https://github.com/example/taskmanager',
    linkToProject: 'https://taskmanager-demo.com',
    image: '/placeholder.svg?height=300&width=400&query=task management app',
    status: 'In Progress',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    shortDesc:
      'A responsive weather dashboard with location-based forecasts and interactive charts.',
    stack: ['Vue.js', 'Chart.js', 'OpenWeather API'],
    githubLink: 'https://github.com/example/weather',
    linkToProject: 'https://weather-dashboard-demo.com',
    image: '/placeholder.svg?height=300&width=400&query=weather dashboard',
    status: 'Completed',
  },
  {
    id: 4,
    title: 'Social Media Analytics',
    shortDesc:
      'Analytics dashboard for social media metrics with data visualization and reporting features.',
    stack: ['React', 'D3.js', 'Express', 'MongoDB'],
    githubLink: 'https://github.com/example/analytics',
    linkToProject: 'https://analytics-demo.com',
    image: '/placeholder.svg?height=300&width=400&query=analytics dashboard',
    status: 'Planning',
  },
  {
    id: 5,
    title: 'Recipe Finder',
    shortDesc:
      'A recipe discovery app with ingredient-based search and meal planning capabilities.',
    stack: ['React Native', 'Redux', 'Spoonacular API'],
    githubLink: 'https://github.com/example/recipes',
    linkToProject: 'https://recipes-demo.com',
    image: '/placeholder.svg?height=300&width=400&query=recipe app',
    status: 'Completed',
  },
  {
    id: 6,
    title: 'Learning Management System',
    shortDesc:
      'An educational platform with course management, progress tracking, and interactive quizzes.',
    stack: ['Next.js', 'Prisma', 'PostgreSQL', 'NextAuth'],
    githubLink: 'https://github.com/example/lms',
    linkToProject: 'https://lms-demo.com',
    image: '/placeholder.svg?height=300&width=400&query=learning platform',
    status: 'In Progress',
  },
  {
    id: 7,
    title: 'Fitness Tracker',
    shortDesc:
      'A comprehensive fitness tracking app with workout plans and progress visualization.',
    stack: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
    githubLink: 'https://github.com/example/fitness',
    linkToProject: 'https://fitness-demo.com',
    image: '/placeholder.svg?height=300&width=400&query=fitness tracker',
    status: 'Completed',
  },
  {
    id: 8,
    title: 'Real Estate Platform',
    shortDesc:
      'A property listing platform with advanced search filters and virtual tour integration.',
    stack: ['React', 'TypeScript', 'Supabase', 'Mapbox'],
    githubLink: 'https://github.com/example/realestate',
    linkToProject: 'https://realestate-demo.com',
    image: '/placeholder.svg?height=300&width=400&query=real estate platform',
    status: 'Planning',
  },
  {
    id: 9,
    title: 'Cryptocurrency Tracker',
    shortDesc:
      'Real-time cryptocurrency tracking with portfolio management and price alerts.',
    stack: ['Vue.js', 'Vuex', 'CoinGecko API', 'WebSocket'],
    githubLink: 'https://github.com/example/crypto',
    linkToProject: 'https://crypto-tracker-demo.com',
    image: '/placeholder.svg?height=300&width=400&query=crypto tracker',
    status: 'In Progress',
  },
];

export async function GET() {
  return NextResponse.json(PROJECTS_DATA);
}
