"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sidebar } from "@/components/sidebar"
import SignupModal from "@/app/signup/page"
import LoginModal from "@/app/login/page"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="border-b border-gray-800 py-4 px-6 sticky top-0 z-10 bg-background">
      <div className="flex items-center justify-between">
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        <div className="relative flex-1 max-w-md mx-4">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <Input
            type="search"
            placeholder="Search..."
            className="pl-10 bg-gray-900 border-gray-700 focus:border-primary"
          />
        </div>

        <div className="flex items-center space-x-4">
          <LoginModal/>
          <SignupModal/>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-background pt-16">
          <div className="p-4">
            <Sidebar />
          </div>
        </div>
      )}
    </header>
  )
}

