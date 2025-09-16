'use client';

import { Button } from '@/components/ui/button';

export default function ContactSection() {
  const handleGetInTouch = () => {
    window.open(
      'https://www.linkedin.com/in/doltons-edward-nicholas-p/',
      '_blank'
    );
  };

  return (
    <section
      id="contact"
      className="px-6 py-16 lg:px-12 bg-gray-900 text-white"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Let's Work Together</h2>
        <p className="text-xl text-gray-300 mb-8">
          Have a project in mind? I'd love to hear about it.
        </p>
        <Button
          onClick={handleGetInTouch}
          size="lg"
          variant="outline"
          className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
        >
          Get In Touch
        </Button>
      </div>
    </section>
  );
}
