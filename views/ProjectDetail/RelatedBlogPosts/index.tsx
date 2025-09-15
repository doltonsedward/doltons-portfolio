import { Card, CardContent } from "@/components/ui/card";
import { Calendar, ExternalLinkIcon } from "lucide-react";
import Link from "next/link";

const getRelatedBlogs = (projectId: number) => {
  const mockBlogs = [
    {
      id: 1,
      title: "Building a Scalable E-Commerce Platform: My Journey",
      excerpt:
        "Learn about the challenges and solutions I encountered while building a full-stack e-commerce platform from scratch.",
      publishedDate: "2024-01-15",
      readTime: "8 min read",
      slug: "building-scalable-ecommerce-platform",
    },
    {
      id: 2,
      title: "Implementing Real-time Inventory Management",
      excerpt:
        "Deep dive into the technical implementation of real-time inventory updates using WebSockets and Redis.",
      publishedDate: "2024-01-22",
      readTime: "6 min read",
      slug: "realtime-inventory-management",
    },
    {
      id: 3,
      title: "Payment Integration Best Practices with Stripe",
      excerpt:
        "Security considerations and implementation details for integrating Stripe payment processing.",
      publishedDate: "2024-02-05",
      readTime: "5 min read",
      slug: "stripe-payment-integration",
    },
  ];

  return projectId === 1 ? mockBlogs : mockBlogs.slice(0, 1);
};

type RelatedBlogPostsPropsType = {
  projectId: number;
};

const RelatedBlogPosts = ({ projectId }: RelatedBlogPostsPropsType) => {
  const relatedBlogs = getRelatedBlogs(projectId || 0);

  return (
    <div className="mb-12">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">
        Related Blog Posts
      </h3>
      {relatedBlogs.length > 0 ? (
        <div className="grid gap-6">
          {relatedBlogs.map((blog) => (
            <Card key={blog.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                    <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
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
            <p className="text-gray-500">
              No blog posts available for this project yet.
            </p>
            <p className="text-sm text-gray-400 mt-2">
              Check back later for insights and development stories!
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default RelatedBlogPosts;
