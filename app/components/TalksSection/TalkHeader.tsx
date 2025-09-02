import { Mic } from "lucide-react";
import React from "react";

const TalkHeader = () => (
  <div className="text-center mb-12">
    <div className="flex items-center justify-center mb-4">
      <Mic className="h-8 w-8 text-gray-900 dark:text-gray-100 mr-3" />
      <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
        Talks & Teaching
      </h2>
    </div>
    <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
      Sharing knowledge through webinars, workshops, and mentoring sessions.
      Join upcoming events or explore recordings from past talks covering modern
      web development, career guidance, and technical best practices.
    </p>
  </div>
);

export default TalkHeader;
