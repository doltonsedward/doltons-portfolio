// import { Button } from '@/components/ui/button';
import { Button } from '@heroui/react';
import { ExternalLink } from 'lucide-react';
import React from 'react';

const ContactMe = () => (
  <div className="mt-16 text-center">
    <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border border-gray-200 dark:border-gray-700">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
        Interested in Having Me Speak?
      </h3>
      <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
        I'm always excited to share knowledge and connect with the developer
        community. Whether it's a conference, webinar, workshop, or mentoring
        session, I'd love to hear from you.
      </p>
      <Button color="primary" variant="solid">
        <a
          href="https://www.linkedin.com/in/doltons-edward-nicholas-p/"
          target="_blank"
          className="inline-flex items-center"
        >
          <ExternalLink className="h-4 w-4 mr-2" />
          Get in Touch
        </a>
      </Button>
    </div>
  </div>
);

export default ContactMe;
