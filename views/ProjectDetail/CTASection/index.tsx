import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink, User } from 'lucide-react';

const CTASection = () => (
  <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
    <CardContent className="p-8 text-center">
      <div className="flex items-center justify-center mb-4">
        <User className="h-8 w-8 text-blue-600" />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Interested in How I Think & Solve Problems?
      </h3>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
        You've seen my work, now see my approach. I love tackling complex
        challenges and turning ideas into reality. If you're looking for a
        developer who can think critically and deliver results, let's connect!
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
);

export default CTASection;
