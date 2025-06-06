"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

const navItems = [
  { title: "Introduction", href: "/docs" },
  { title: "Installation", href: "/docs/installation" },
  { title: "Typography", href: "/docs/primitives/typography" },
  { title: "Alert Dialog", href: "/docs/primitives/alert-dialog" },
  { title: "Tabs", href: "/docs/primitives/tabs" },
  { title: "Tooltip", href: "/docs/primitives/tooltip" },
]

export default function MobileSidebar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden z-[999999]">
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 text-foreground dark:text-white focus:outline-none"
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[9999] bg-black/50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          "fixed top-0 left-0 z-50 h-full w-64 bg-background p-6 transition-transform duration-300",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-foreground dark:text-white">
            Menu
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-foreground dark:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block rounded-md px-2 py-2 text-sm text-foreground dark:text-white hover:bg-accent"
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}
