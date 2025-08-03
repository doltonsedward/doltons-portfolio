"use client"

import { BookOpen, Briefcase } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="px-8 py-16 lg:px-16 bg-[#1a1a1a] min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <div className="w-16 h-1 bg-[#f59e0b] mb-8"></div>
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">Resume</h1>
        </div>

        {/* Education Section */}
        <div className="mb-16">
          <div className="flex items-center space-x-4 mb-8">
            <BookOpen className="h-8 w-8 text-[#f59e0b]" />
            <h2 className="text-3xl font-bold text-white">Education</h2>
          </div>

          <div className="space-y-8">
            <div className="relative">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-[#f59e0b] rounded-full mt-2 flex-shrink-0"></div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">Universitas Bina Nusantara (BINUS)</h3>
                  <p className="text-[#a0a0a0] mb-2">Bachelor of Computer Science (B.Sc. Computer Science)</p>
                  <p className="text-[#f59e0b] font-medium">2019 — 2023</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-[#f59e0b] rounded-full mt-2 flex-shrink-0"></div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">SMA Negeri 1 Jakarta</h3>
                  <p className="text-[#a0a0a0] mb-2">Science Major</p>
                  <p className="text-[#f59e0b] font-medium">2016 — 2019</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div>
          <div className="flex items-center space-x-4 mb-8">
            <Briefcase className="h-8 w-8 text-[#f59e0b]" />
            <h2 className="text-3xl font-bold text-white">Experience</h2>
          </div>

          <div className="space-y-8">
            <div className="relative">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-[#f59e0b] rounded-full mt-2 flex-shrink-0"></div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">Frontend Developer</h3>
                  <p className="text-[#a0a0a0] mb-2">PT. Nirvana Indonesia Yoga</p>
                  <p className="text-[#f59e0b] font-medium mb-3">Jun 2022 — Present • 3 yrs 3 mos</p>
                  <p className="text-[#a0a0a0] italic mb-3">Jakarta, Indonesia</p>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-[#f59e0b] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#a0a0a0]">
                        Built and maintained responsive web applications tailored to yoga and wellness clients
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-[#f59e0b] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#a0a0a0]">
                        Collaborated with stakeholders to gather requirements and improve usability
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-[#f59e0b] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#a0a0a0]">
                        Implemented end-to-end testing for consistent performance and reliability
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-[#f59e0b] rounded-full mt-2 flex-shrink-0"></div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">Full Stack Engineer</h3>
                  <p className="text-[#a0a0a0] mb-2">Kelas Fitness</p>
                  <p className="text-[#f59e0b] font-medium mb-3">May 2022 — Present • 3 yrs 4 mos</p>
                  <p className="text-[#a0a0a0] italic mb-3">Jakarta, Indonesia</p>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-[#f59e0b] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#a0a0a0]">
                        Developed and maintained both frontend and backend of the Kelas Fitness web & mobile app
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-[#f59e0b] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#a0a0a0]">
                        Conducted regular end-to-end testing to ensure stable releases and seamless user experience
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-[#f59e0b] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#a0a0a0]">
                        Contributed to feature planning and technical decision-making in agile environment
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-[#f59e0b] rounded-full mt-2 flex-shrink-0"></div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">Mentor (Part-time)</h3>
                  <p className="text-[#a0a0a0] mb-2">Skilvul</p>
                  <p className="text-[#f59e0b] font-medium mb-3">Feb 2022 — Present • 3 yrs 7 mos</p>
                  <p className="text-[#a0a0a0] italic mb-3">Remote</p>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-[#f59e0b] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#a0a0a0]">
                        Led knowledge-sharing sessions in the Skilvul Discord community
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-[#f59e0b] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#a0a0a0]">
                        Assisted instructors during live sessions and provided real-time coding support
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-[#f59e0b] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-[#a0a0a0]">
                        Supported the learning journey of hundreds of tech students
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
