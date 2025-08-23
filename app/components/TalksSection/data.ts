import { Talk } from "./TalkCard";

export const talksData: Talk[] = [
  {
    id: "1",
    title: "Building Modern React Applications with Next.js",
    shortDesc: "Learn Next.js 14 features including App Router, Server Components, and performance optimization for production apps.",
    description: "A comprehensive webinar covering the latest features of Next.js 14, including App Router, Server Components, and performance optimization techniques for production applications. We'll dive deep into the new paradigms of React Server Components, explore the enhanced routing system, and discuss best practices for building scalable, performant web applications. You'll learn about data fetching strategies, caching mechanisms, and deployment optimization techniques that will help you build production-ready applications.",
    type: "webinar",
    status: "upcoming",
    date: "2024-02-15",
    duration: "2 hours",
    audience: "Frontend Developers",
    platform: "Zoom",
    registrationUrl: "https://example.com/register",
    topics: ["Next.js", "React", "Server Components", "Performance", "TypeScript"],
    bannerImage: "https://images.unsplash.com/photo-1656872626217-47c483c9daa5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw2fHxjb25mZXJlbmNlJTIwcHJlc2VudGF0aW9uJTIwdGVjaG5vbG9neSUyMHdlYmluYXJ8ZW58MHwwfHxibHVlfDE3NTU5MjA2ODR8MA&ixlib=rb-4.1.0&q=85",
    bannerAlt: "Modern tech webinar banner - Steve Johnson on Unsplash"
  },
  {
    id: "2",
    title: "Full-Stack Development Mentoring Session",
    shortDesc: "One-on-one mentoring for aspiring developers transitioning to full-stack development with career guidance.",
    description: "One-on-one mentoring session for aspiring developers looking to transition into full-stack development. This personalized session covers career guidance, technical skills assessment, and project portfolio building strategies. We'll discuss the current job market, essential technologies to focus on, and create a personalized learning roadmap tailored to your goals. Whether you're a complete beginner or looking to advance your career, this session will provide actionable insights and practical advice to accelerate your development journey.",
    type: "mentoring",
    status: "upcoming",
    date: "2024-02-10",
    duration: "1 hour",
    audience: "Beginner to Intermediate Developers",
    platform: "Google Meet",
    registrationUrl: "https://calendly.com/doltons/mentoring",
    topics: ["Career Guidance", "Full-Stack", "Portfolio", "React", "Node.js"],
    bannerImage: "https://images.unsplash.com/photo-1557180491-4c2f503222d9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHxtZW50b3JpbmclMjBjb2FjaGluZyUyMG1lZXRpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHwwfHxwdXJwbGV8MTc1NTkyMDY4NHww&ixlib=rb-4.1.0&q=85",
    bannerAlt: "Professional mentoring session - Daoud Abismail on Unsplash"
  },
  {
    id: "3",
    title: "React Native: From Web to Mobile",
    shortDesc: "Hands-on workshop showing how to leverage React knowledge to build cross-platform mobile applications.",
    description: "Hands-on workshop demonstrating how to leverage React knowledge to build cross-platform mobile applications. This intensive session includes practical exercises and real-world examples, covering navigation patterns, native module integration, performance optimization, and deployment strategies. You'll learn about the React Native ecosystem, popular libraries, and best practices for building production-ready mobile apps. We'll also explore Expo's role in modern React Native development and discuss when to eject to bare workflow.",
    type: "workshop",
    status: "past",
    date: "2024-01-20",
    duration: "4 hours",
    audience: "React Developers",
    attendees: 85,
    platform: "Microsoft Teams",
    recordingUrl: "https://youtube.com/watch?v=example",
    topics: ["React Native", "Mobile Development", "Cross-Platform", "Expo", "Navigation"],
    bannerImage: "https://images.unsplash.com/photo-1649180559928-91d16a63bd39?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw1fHxtb2JpbGUlMjBkZXZlbG9wbWVudCUyMHdvcmtzaG9wJTIwdGVjaG5vbG9neXxlbnwwfDB8fGdyZWVufDE3NTU5MjA2ODR8MA&ixlib=rb-4.1.0&q=85",
    bannerAlt: "Mobile development workshop banner - Rubaitul Azad on Unsplash"
  },
  {
    id: "4",
    title: "Modern JavaScript for Backend Development",
    shortDesc: "Explore Node.js ecosystem, API development best practices, and deployment strategies for scalable backends.",
    description: "Exploring Node.js ecosystem, best practices for API development, database integration, and deployment strategies for scalable backend applications. This comprehensive session covers modern JavaScript features, asynchronous programming patterns, error handling strategies, and security best practices. We'll dive into popular frameworks like Express and Fastify, explore database integration patterns with both SQL and NoSQL databases, and discuss containerization and cloud deployment strategies.",
    type: "webinar",
    status: "past",
    date: "2023-12-15",
    duration: "90 minutes",
    audience: "Backend Developers",
    attendees: 120,
    platform: "YouTube Live",
    recordingUrl: "https://youtube.com/watch?v=example2",
    topics: ["Node.js", "Express", "API Design", "Database", "Deployment"],
    bannerImage: "https://images.unsplash.com/photo-1603899122406-e7eb957f9fd6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw1fHxjb2RpbmclMjBiYWNrZW5kJTIwc2VydmVyJTIwdGVjaG5vbG9neXxlbnwwfDB8fHllbGxvd3wxNzU1OTIwNjg0fDA&ixlib=rb-4.1.0&q=85",
    bannerAlt: "Backend development webinar banner - Franck on Unsplash"
  },
  {
    id: "5",
    title: "Tech Conference: The Future of Web Development",
    shortDesc: "Keynote presentation discussing emerging trends in web development, AI integration, and developer tools evolution.",
    description: "Keynote presentation at TechConf 2023 discussing emerging trends in web development, including AI integration, edge computing, and the evolution of developer tools. This forward-looking presentation explores how artificial intelligence is reshaping development workflows, the rise of edge computing and its impact on application architecture, and the next generation of developer tools that are making coding more accessible and efficient. We'll also discuss the changing landscape of web frameworks and the future of full-stack development.",
    type: "conference",
    status: "past",
    date: "2023-11-08",
    duration: "45 minutes",
    audience: "Tech Community",
    attendees: 300,
    platform: "In-person + Live Stream",
    recordingUrl: "https://youtube.com/watch?v=example3",
    topics: ["Web Development", "AI", "Edge Computing", "Developer Tools", "Future Trends"],
    bannerImage: "https://images.unsplash.com/photo-1572712340248-5da111805d29?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw1fHxjb25mZXJlbmNlJTIwa2V5bm90ZSUyMHN0YWdlJTIwYXVkaWVuY2V8ZW58MHwwfHxvcmFuZ2V8MTc1NTkyMDY4NHww&ixlib=rb-4.1.0&q=85",
    bannerAlt: "Large tech conference banner - Lalith sai Thomala on Unsplash"
  },
  {
    id: "6",
    title: "Code Review Best Practices Workshop",
    shortDesc: "Interactive workshop on effective code review techniques, team collaboration, and maintaining code quality.",
    description: "Interactive workshop focusing on effective code review techniques, team collaboration, and maintaining code quality in agile development environments. This hands-on session covers the psychology of code reviews, how to give and receive constructive feedback, tools and workflows that streamline the review process, and strategies for building a positive code review culture. We'll explore different review methodologies, discuss common pitfalls and how to avoid them, and practice reviewing real code examples.",
    type: "workshop",
    status: "past",
    date: "2023-10-25",
    duration: "3 hours",
    audience: "Development Teams",
    attendees: 45,
    platform: "Zoom",
    recordingUrl: "https://youtube.com/watch?v=example4",
    topics: ["Code Review", "Team Collaboration", "Code Quality", "Agile", "Best Practices"],
    bannerImage: "https://images.unsplash.com/photo-1659355894740-d7caa8e9c653?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBjb2xsYWJvcmF0aW9uJTIwdGVhbSUyMHJldmlld3xlbnwwfDB8fHRlYWx8MTc1NTkyMDY4NHww&ixlib=rb-4.1.0&q=85",
    bannerAlt: "Code review workshop banner - Fotos on Unsplash"
  },
  {
    id: "7",
    title: "Weekly JavaScript Mentoring Circle",
    shortDesc: "Regular mentoring session for junior developers to discuss challenges and learn advanced JavaScript concepts.",
    description: "Regular mentoring session for junior developers to discuss challenges, share experiences, and learn advanced JavaScript concepts in a supportive environment. This ongoing community initiative provides a safe space for developers to ask questions, share their projects, and learn from each other. Each session focuses on different aspects of JavaScript development, from fundamental concepts to advanced patterns, with plenty of time for Q&A and peer-to-peer learning. The format encourages active participation and collaborative problem-solving.",
    type: "mentoring",
    status: "ongoing",
    date: "2024-01-01",
    duration: "1.5 hours weekly",
    audience: "Junior Developers",
    platform: "Discord",
    registrationUrl: "https://discord.gg/example",
    topics: ["JavaScript", "Mentoring", "Career Development", "Problem Solving", "Community"],
    bannerImage: "https://images.unsplash.com/photo-1659080907110-566bf9a98503?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwyfHxjb21tdW5pdHklMjBsZWFybmluZyUyMGphdmFzY3JpcHQlMjBtZW50b3Jpbmd8ZW58MHwwfHxwdXJwbGV8MTc1NTkyMDY4Nnww&ixlib=rb-4.1.0&q=85",
    bannerAlt: "Community mentoring banner - Fotos on Unsplash"
  },
  {
    id: "8",
    title: "Advanced React Patterns and Performance",
    shortDesc: "Deep dive into advanced React patterns, performance optimization, and modern state management solutions.",
    description: "Deep dive into advanced React patterns, performance optimization techniques, and modern state management solutions. This advanced workshop covers render optimization, custom hooks patterns, compound components, and advanced state management with Context API and external libraries. We'll explore React's concurrent features, Suspense boundaries, and error boundaries, along with profiling techniques to identify and resolve performance bottlenecks in complex applications.",
    type: "workshop",
    status: "upcoming",
    date: "2024-03-10",
    duration: "5 hours",
    audience: "Senior React Developers",
    platform: "Zoom",
    registrationUrl: "https://example.com/advanced-react",
    topics: ["React", "Performance", "State Management", "Advanced Patterns", "Optimization"],
    bannerImage: "https://images.unsplash.com/photo-1604995078160-9ee913264957?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw0fHxjb25mZXJlbmNlJTIwcHJlc2VudGF0aW9uJTIwdGVjaG5vbG9neSUyMHdlYmluYXJ8ZW58MHwwfHxibHVlfDE3NTU5MjA2ODR8MA&ixlib=rb-4.1.0&q=85",
    bannerAlt: "Modern tech webinar banner - Possessed Photography on Unsplash"
  },
  {
    id: "9",
    title: "Building Scalable APIs with GraphQL",
    shortDesc: "Learn to design and implement scalable GraphQL APIs with best practices for schema design and performance.",
    description: "Comprehensive guide to designing and implementing scalable GraphQL APIs with best practices for schema design, resolver optimization, and performance monitoring. This workshop covers GraphQL fundamentals, schema-first development, advanced resolver patterns, and integration with various databases and services. We'll also explore authentication and authorization strategies, caching mechanisms, and monitoring tools to ensure your GraphQL APIs perform well at scale.",
    type: "webinar",
    status: "past",
    date: "2023-09-20",
    duration: "2.5 hours",
    audience: "Backend Developers",
    attendees: 95,
    platform: "YouTube Live",
    recordingUrl: "https://youtube.com/watch?v=example5",
    topics: ["GraphQL", "API Design", "Schema Design", "Performance", "Scalability"],
    bannerImage: "https://images.unsplash.com/photo-1603695576504-b2b22b530965?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwyfHxjb2RpbmclMjBiYWNrZW5kJTIwc2VydmVyJTIwdGVjaG5vbG9neXxlbnwwfDB8fHllbGxvd3wxNzU1OTIwNjg0fDA&ixlib=rb-4.1.0&q=85",
    bannerAlt: "Backend development webinar banner - Jorge Ramirez on Unsplash"
  }
];

// Utility functions for filtering
export const upcomingTalks = talksData.filter(talk => talk.status === "upcoming");
export const pastTalks = talksData.filter(talk => talk.status === "past");
export const ongoingTalks = talksData.filter(talk => talk.status === "ongoing");

// Function to get talk by ID (for detail page)
export const getTalkById = (id: string): Talk | undefined => {
  return talksData.find(talk => talk.id === id);
};

// Function to get paginated talks
export const getPaginatedTalks = (talks: Talk[], page: number, itemsPerPage: number) => {
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return {
    talks: talks.slice(startIndex, endIndex),
    hasMore: endIndex < talks.length,
    totalPages: Math.ceil(talks.length / itemsPerPage)
  };
};