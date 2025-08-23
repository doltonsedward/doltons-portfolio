import { Talk } from "./TalkCard";

export const talksData: Talk[] = [
  {
    id: "1",
    title: "Building Modern React Applications with Next.js",
    description: "A comprehensive webinar covering the latest features of Next.js 14, including App Router, Server Components, and performance optimization techniques for production applications.",
    type: "webinar",
    status: "upcoming",
    date: "2024-02-15",
    duration: "2 hours",
    audience: "Frontend Developers",
    platform: "Zoom",
    registrationUrl: "https://example.com/register",
    topics: ["Next.js", "React", "Server Components", "Performance", "TypeScript"]
  },
  {
    id: "2",
    title: "Full-Stack Development Mentoring Session",
    description: "One-on-one mentoring session for aspiring developers looking to transition into full-stack development. Covering career guidance, technical skills, and project portfolio building.",
    type: "mentoring",
    status: "upcoming",
    date: "2024-02-10",
    duration: "1 hour",
    audience: "Beginner to Intermediate Developers",
    platform: "Google Meet",
    registrationUrl: "https://calendly.com/doltons/mentoring",
    topics: ["Career Guidance", "Full-Stack", "Portfolio", "React", "Node.js"]
  },
  {
    id: "3",
    title: "React Native: From Web to Mobile",
    description: "Hands-on workshop demonstrating how to leverage React knowledge to build cross-platform mobile applications. Includes practical exercises and real-world examples.",
    type: "workshop",
    status: "past",
    date: "2024-01-20",
    duration: "4 hours",
    audience: "React Developers",
    attendees: 85,
    platform: "Microsoft Teams",
    recordingUrl: "https://youtube.com/watch?v=example",
    topics: ["React Native", "Mobile Development", "Cross-Platform", "Expo", "Navigation"]
  },
  {
    id: "4",
    title: "Modern JavaScript for Backend Development",
    description: "Exploring Node.js ecosystem, best practices for API development, database integration, and deployment strategies for scalable backend applications.",
    type: "webinar",
    status: "past",
    date: "2023-12-15",
    duration: "90 minutes",
    audience: "Backend Developers",
    attendees: 120,
    platform: "YouTube Live",
    recordingUrl: "https://youtube.com/watch?v=example2",
    topics: ["Node.js", "Express", "API Design", "Database", "Deployment"]
  },
  {
    id: "5",
    title: "Tech Conference: The Future of Web Development",
    description: "Keynote presentation at TechConf 2023 discussing emerging trends in web development, including AI integration, edge computing, and the evolution of developer tools.",
    type: "conference",
    status: "past",
    date: "2023-11-08",
    duration: "45 minutes",
    audience: "Tech Community",
    attendees: 300,
    platform: "In-person + Live Stream",
    recordingUrl: "https://youtube.com/watch?v=example3",
    topics: ["Web Development", "AI", "Edge Computing", "Developer Tools", "Future Trends"]
  },
  {
    id: "6",
    title: "Code Review Best Practices Workshop",
    description: "Interactive workshop focusing on effective code review techniques, team collaboration, and maintaining code quality in agile development environments.",
    type: "workshop",
    status: "past",
    date: "2023-10-25",
    duration: "3 hours",
    audience: "Development Teams",
    attendees: 45,
    platform: "Zoom",
    recordingUrl: "https://youtube.com/watch?v=example4",
    topics: ["Code Review", "Team Collaboration", "Code Quality", "Agile", "Best Practices"]
  },
  {
    id: "7",
    title: "Weekly JavaScript Mentoring Circle",
    description: "Regular mentoring session for junior developers to discuss challenges, share experiences, and learn advanced JavaScript concepts in a supportive environment.",
    type: "mentoring",
    status: "ongoing",
    date: "2024-01-01",
    duration: "1.5 hours weekly",
    audience: "Junior Developers",
    platform: "Discord",
    registrationUrl: "https://discord.gg/example",
    topics: ["JavaScript", "Mentoring", "Career Development", "Problem Solving", "Community"]
  }
];

export const upcomingTalks = talksData.filter(talk => talk.status === "upcoming");
export const pastTalks = talksData.filter(talk => talk.status === "past");
export const ongoingTalks = talksData.filter(talk => talk.status === "ongoing");