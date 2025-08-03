"use client"

export default function ExperienceSection() {
  return (
    <section id="experience" className="px-8 py-16 lg:px-16 bg-[#1a1a1a] min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <div className="w-16 h-1 bg-[#f59e0b] mb-8"></div>
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">Blog</h1>
        </div>

        <div className="space-y-8">
          <div className="bg-[#2a2a2a] rounded-lg p-8 hover:bg-[#2f2f2f] transition-colors duration-300">
            <div className="flex items-start space-x-4">
              <div className="w-3 h-3 bg-[#f59e0b] rounded-full mt-2 flex-shrink-0"></div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-white mb-3">
                  Building Scalable React Applications: Best Practices and Patterns
                </h3>
                <p className="text-[#a0a0a0] mb-4 leading-relaxed">
                  Explore the essential patterns and practices for building maintainable and scalable React
                  applications. From component architecture to state management, learn how to structure your projects
                  for long-term success.
                </p>
                <div className="flex items-center space-x-4">
                  <span className="text-[#f59e0b] font-medium">Dec 15, 2024</span>
                  <span className="text-[#a0a0a0]">•</span>
                  <span className="text-[#a0a0a0]">8 min read</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#2a2a2a] rounded-lg p-8 hover:bg-[#2f2f2f] transition-colors duration-300">
            <div className="flex items-start space-x-4">
              <div className="w-3 h-3 bg-[#f59e0b] rounded-full mt-2 flex-shrink-0"></div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-white mb-3">
                  The Future of Mobile Development: React Native vs Flutter
                </h3>
                <p className="text-[#a0a0a0] mb-4 leading-relaxed">
                  A comprehensive comparison of React Native and Flutter for cross-platform mobile development. Discover
                  which framework suits your project needs and development workflow.
                </p>
                <div className="flex items-center space-x-4">
                  <span className="text-[#f59e0b] font-medium">Nov 28, 2024</span>
                  <span className="text-[#a0a0a0]">•</span>
                  <span className="text-[#a0a0a0]">12 min read</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#2a2a2a] rounded-lg p-8 hover:bg-[#2f2f2f] transition-colors duration-300">
            <div className="flex items-start space-x-4">
              <div className="w-3 h-3 bg-[#f59e0b] rounded-full mt-2 flex-shrink-0"></div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-white mb-3">
                  Mastering TypeScript: Advanced Types and Patterns
                </h3>
                <p className="text-[#a0a0a0] mb-4 leading-relaxed">
                  Dive deep into TypeScript's advanced type system. Learn about utility types, conditional types, and
                  how to leverage TypeScript's power for better code quality and developer experience.
                </p>
                <div className="flex items-center space-x-4">
                  <span className="text-[#f59e0b] font-medium">Oct 20, 2024</span>
                  <span className="text-[#a0a0a0]">•</span>
                  <span className="text-[#a0a0a0]">15 min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
