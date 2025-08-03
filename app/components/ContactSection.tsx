"use client"

import { Button } from "@/components/ui/button"
import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactSection() {
  const handleGetInTouch = () => {
    window.open("https://www.linkedin.com/in/doltons-edward-nicholas-p/", "_blank")
  }

  return (
    <section id="contact" className="px-8 py-16 lg:px-16 bg-[#1a1a1a] min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <div className="w-16 h-1 bg-[#ffda6b] mb-8"></div>
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">Contact</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-semibold text-white mb-6">Let's Work Together</h2>
            <p className="text-xl text-[#a0a0a0] mb-8 leading-relaxed">
              Have a project in mind? I'd love to hear about it. Whether you're looking to build something new or
              improve an existing application, let's create something amazing together.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#ffda6b] rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-[#1a1a1a]" />
                </div>
                <div>
                  <p className="text-white font-medium">Email</p>
                  <p className="text-[#a0a0a0]">doltons.edward@example.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#ffda6b] rounded-lg flex items-center justify-center">
                  <Phone className="h-6 w-6 text-[#1a1a1a]" />
                </div>
                <div>
                  <p className="text-white font-medium">Phone</p>
                  <p className="text-[#a0a0a0]">+62 812 3456 7890</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#ffda6b] rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-[#1a1a1a]" />
                </div>
                <div>
                  <p className="text-white font-medium">Location</p>
                  <p className="text-[#a0a0a0]">Jakarta, Indonesia</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#2a2a2a] rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-white font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-[#3a3a3a] border border-[#4a4a4a] rounded-lg text-white placeholder-[#a0a0a0] focus:border-[#ffda6b] focus:outline-none"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-white font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-[#3a3a3a] border border-[#4a4a4a] rounded-lg text-white placeholder-[#a0a0a0] focus:border-[#ffda6b] focus:outline-none"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-white font-medium mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-[#3a3a3a] border border-[#4a4a4a] rounded-lg text-white placeholder-[#a0a0a0] focus:border-[#ffda6b] focus:outline-none resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <Button type="submit" className="w-full bg-[#ffda6b] text-[#1a1a1a] hover:bg-[#e6c659] font-medium py-3">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
