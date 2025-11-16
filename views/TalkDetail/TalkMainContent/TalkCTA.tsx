'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@heroui/react';
import { Award, Mail, ExternalLink } from 'lucide-react';

export default function TalkCTA() {
  return (
    <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-blue-200 dark:border-blue-800">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-blue-900 dark:text-blue-100">
          <Award className="h-5 w-5" />
          Need a Speaker for Your Event?
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-blue-800 dark:text-blue-200">
          I'm available for speaking engagements, workshops, and mentoring
          sessions. Let's discuss how I can help your team or community grow
          their technical skills.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            as="a"
            href="https://www.linkedin.com/in/doltons-edward-nicholas-p/"
            target="_blank"
            color="primary"
            className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
            startContent={<ExternalLink className="h-4 w-4" />}
          >
            Get in Touch
          </Button>
          <Button
            as="a"
            href="mailto:edwarddoltons@gmail.com"
            target="_blank"
            variant="bordered"
            className="flex-1"
            startContent={<Mail className="h-4 w-4" />}
          >
            Email Directly
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
