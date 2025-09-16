'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
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
          <Button asChild className="flex-1">
            <a
              href="#contact"
              className="flex items-center justify-center gap-2"
            >
              <Mail className="h-4 w-4" />
              Get in Touch
            </a>
          </Button>
          <Button variant="outline" asChild className="flex-1">
            <a
              href="mailto:doltons@example.com?subject=Speaking Opportunity&body=Hi Doltons, I'd like to discuss a speaking opportunity..."
              className="flex items-center justify-center gap-2"
            >
              <ExternalLink className="h-4 w-4" />
              Email Directly
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
