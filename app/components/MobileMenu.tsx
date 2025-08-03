"use client"

import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

export default function MobileMenu() {
  return (
    <div className="lg:hidden fixed top-4 left-4 z-50">
      <Button
        variant="outline"
        size="icon"
        className="bg-[#2a2a2a] border-[#f59e0b] text-[#f59e0b] hover:bg-[#f59e0b] hover:text-[#1a1a1a]"
      >
        <Menu className="h-4 w-4" />
      </Button>
    </div>
  )
}
