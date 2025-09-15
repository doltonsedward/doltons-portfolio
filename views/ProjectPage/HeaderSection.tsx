import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const HeaderSection = () => (
  <header>
    <div className="flex items-center gap-4 mb-8">
      <Link
        href="/"
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
      >
        <ArrowLeft className="h-5 w-5" />
        <span>Back to Home</span>
      </Link>
    </div>

    <div className="mb-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">All Projects</h1>
      <p className="text-lg text-gray-600">
        Explore my complete portfolio of web applications and development
        projects.
      </p>
    </div>
  </header>
);

export default HeaderSection;
