// type StackType =
//   | "React"
//   | "Next.js"
//   | "Node.js"
//   | "Express"
//   | "MongoDB"
//   | "PostgreSQL"
//   | "TypeScript"
//   | "JavaScript"
//   | "Python"
//   | "Django"
//   | "Flask"
//   | "Ruby on Rails"
//   | "Java"
//   | "Spring Boot"
//   | "C#"
//   | ".NET"
//   | "PHP"
//   | "Laravel"
//   | "Go"
//   | "Rust"
//   | "Vue.js"
//   | "Angular"
//   | "Svelte"
//   | "Tailwind CSS"
//   | "Bootstrap"
//   | "GraphQL"
//   | "REST API"
//   | "Firebase";

export type ProjectStatusType = "In Progress" | "Completed" | "Planning";

export type ProjectDataType = {
  id: number;
  title: string;
  shortDesc: string;
  fullDesc: string;
  stack: string[];
  githubLink: string;
  linkToProject: string;
  image: string;
  status: ProjectStatusType;
  duration: string;
  year: string;
  challenges: string[];
  keyFeatures: string[];
};
