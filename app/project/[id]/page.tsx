import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ArrowLeft, Calendar, User, ExternalLinkIcon } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

// TODO(stagewise): Replace this with real project data from your backend/database
const allProjects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    shortDesc: "A full-stack e-commerce platform with payment integration and real-time inventory management.",
    fullDesc: "This comprehensive e-commerce platform was built to handle high-traffic scenarios with real-time inventory management, secure payment processing, and an intuitive admin dashboard. The project showcases advanced React patterns, efficient state management, and scalable backend architecture.\n\nKey features include user authentication, product catalog management, shopping cart functionality, order tracking, payment integration with Stripe, and comprehensive analytics dashboard for store owners.",
    stack: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis", "Docker"],
    githubLink: "https://github.com/example/ecommerce",
    linkToProject: "https://ecommerce-demo.com",
    image: "/placeholder.svg?height=400&width=800&query=ecommerce platform screenshot",
    status: "Completed",
    duration: "3 months",
    year: "2024",
    challenges: [
      "Implementing real-time inventory updates across multiple concurrent users",
      "Optimizing database queries for large product catalogs",
      "Ensuring PCI compliance for payment processing",
      "Building a scalable architecture to handle traffic spikes"
    ],
    keyFeatures: [
      "Real-time inventory management",
      "Secure payment processing with Stripe",
      "Advanced product filtering and search",
      "Order tracking and notifications",
      "Admin dashboard with analytics",
      "Mobile-responsive design"
    ]
  },
  {
    id: 2,
    title: "Task Management App",
    shortDesc: "A collaborative task management application with real-time updates and team collaboration features.",
    fullDesc: "A comprehensive task management solution designed for remote teams. Built with React and Firebase, this application provides real-time collaboration features, project organization, and productivity tracking.\n\nThe app includes advanced features like drag-and-drop task organization, team member assignment, deadline tracking, and integrated communication tools.",
    stack: ["React", "TypeScript", "Firebase", "Material-UI", "WebSocket"],
    githubLink: "https://github.com/example/taskmanager",
    linkToProject: "https://taskmanager-demo.com",
    image: "/placeholder.svg?height=400&width=800&query=task management app screenshot",
    status: "In Progress",
    duration: "2 months",
    year: "2024",
    challenges: [
      "Implementing real-time collaboration without conflicts",
      "Designing an intuitive drag-and-drop interface",
      "Managing complex state with multiple team members",
      "Optimizing performance for large task lists"
    ],
    keyFeatures: [
      "Real-time collaboration",
      "Drag-and-drop task organization",
      "Team member assignment and notifications",
      "Project timeline and milestone tracking",
      "Integrated chat and comments",
      "Advanced filtering and search"
    ]
  }
  // Add more projects as needed...
];

// TODO(stagewise): Replace this with real blog data from your backend/database
const getRelatedBlogs = (projectId: number) => {
  // Mock blog data - replace with actual blog posts related to the project
  const mockBlogs = [
    {
      id: 1,
      title: "Building a Scalable E-Commerce Platform: My Journey",
      excerpt: "Learn about the challenges and solutions I encountered while building a full-stack e-commerce platform from scratch.",
      publishedDate: "2024-01-15",
      readTime: "8 min read",
      slug: "building-scalable-ecommerce-platform"
    },
    {
      id: 2,
      title: "Implementing Real-time Inventory Management",
      excerpt: "Deep dive into the technical implementation of real-time inventory updates using WebSockets and Redis.",
      publishedDate: "2024-01-22",
      readTime: "6 min read",
      slug: "realtime-inventory-management"
    },
    {
      id: 3,
      title: "Payment Integration Best Practices with Stripe",
      excerpt: "Security considerations and implementation details for integrating Stripe payment processing.",
      publishedDate: "2024-02-05",
      readTime: "5 min read",
      slug: "stripe-payment-integration"
    }
  ];

  // Filter blogs based on project (in real implementation, this would be a database query)
  return projectId === 1 ? mockBlogs : mockBlogs.slice(0, 1);
};

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const projectId = parseInt(params.id);
  const project = allProjects.find(p => p.id === projectId);
  
  if (!project) {
    notFound();
  }

  const relatedBlogs = getRelatedBlogs(projectId);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-16 lg:px-12">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link href="/project" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Projects</span>
          </Link>
        </div>

        {/* Project Header */}
        <div className="mb-8">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">{project.title}</h1>
              <p className="text-lg text-gray-600">{project.shortDesc}</p>
            </div>
            <Badge 
              variant={project.status === 'Completed' ? 'default' : project.status === 'In Progress' ? 'secondary' : 'outline'}
              className="ml-4 flex-shrink-0"
            >
              {project.status}
            </Badge>
          </div>

          <div className="flex gap-4 text-sm text-gray-500 mb-6">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {project.year}
            </span>
            <span>Duration: {project.duration}</span>
          </div>

          <div className="flex gap-4 mb-8">
            {project.githubLink && (
              <Button variant="outline" asChild>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  View Code
                </a>
              </Button>
            )}
            {project.linkToProject && (
              <Button asChild>
                <a href={project.linkToProject} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Live Demo
                </a>
              </Button>
            )}
          </div>
        </div>

        {/* Project Image */}
        <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden mb-8">
          <Image
            src={project.image}
            alt={project.title}
            width={800}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Tech Stack */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Technology Stack</h3>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech, index) => (
              <Badge key={index} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Project Description */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Project Overview</h3>
          <div className="prose prose-gray max-w-none">
            {project.fullDesc.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-gray-600 mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.keyFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-600">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Challenges */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical Challenges</h3>
          <div className="space-y-4">
            {project.challenges.map((challenge, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-600">{challenge}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Related Blog Posts */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Related Blog Posts</h3>
          {relatedBlogs.length > 0 ? (
            <div className="grid gap-6">
              {relatedBlogs.map((blog) => (
                <Card key={blog.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                        <Link href={`/blog/${blog.slug}`}>
                          {blog.title}
                        </Link>
                      </h4>
                      <ExternalLinkIcon className="h-4 w-4 text-gray-400 flex-shrink-0 ml-2" />
                    </div>
                    <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(blog.publishedDate).toLocaleDateString()}
                      </span>
                      <span>{blog.readTime}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="p-8 text-center">
                <p className="text-gray-500">No blog posts available for this project yet.</p>
                <p className="text-sm text-gray-400 mt-2">Check back later for insights and development stories!</p>
              </CardContent>
            </Card>
          )}
        </div>

        {/* CTA Section */}
        <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
          <CardContent className="p-8 text-center">
            <div className="flex items-center justify-center mb-4">
              <User className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Interested in How I Think & Solve Problems?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              You've seen my work, now see my approach. I love tackling complex challenges and turning ideas into reality. 
              If you're looking for a developer who can think critically and deliver results, let's connect!
            </p>
            <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700">
              <a 
                href="https://www.linkedin.com/in/doltons-edward-nicholas-p/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <ExternalLink className="h-5 w-5" />
                Let's Connect on LinkedIn
              </a>
            </Button>
            <p className="text-sm text-gray-500 mt-4">
              Ready to discuss your next project? I'd love to hear from you!
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}