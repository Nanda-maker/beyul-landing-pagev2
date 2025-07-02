
"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleNavClick = (itemName: string, url: string) => {
    setActiveTab(itemName)
    // Smooth scroll to section
    if (url.startsWith('#')) {
      const element = document.querySelector(url)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <div
      className={cn(
        "flex items-center gap-3 bg-white/20 dark:bg-gray-800/30 border border-beyul-purple/20 dark:border-gray-600/30 backdrop-blur-lg py-1 px-1 rounded-full shadow-lg",
        className,
      )}
    >
      {items.map((item) => {
        const Icon = item.icon
        const isActive = activeTab === item.name

        return (
          <button
            key={item.name}
            onClick={() => handleNavClick(item.name, item.url)}
            className={cn(
              "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
              "text-beyul-dark dark:text-white hover:text-beyul-purple dark:hover:text-purple-400",
              isActive && "bg-beyul-purple/10 dark:bg-purple-400/10 text-beyul-purple dark:text-purple-400",
            )}
          >
            <span className="hidden md:inline">{item.name}</span>
            <span className="md:hidden">
              <Icon size={18} strokeWidth={2.5} />
            </span>
            {isActive && (
              <motion.div
                layoutId="lamp"
                className="absolute inset-0 w-full bg-beyul-purple/5 dark:bg-purple-400/10 rounded-full -z-10"
                initial={false}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
              >
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-beyul-purple dark:bg-purple-400 rounded-t-full">
                  <div className="absolute w-12 h-6 bg-beyul-purple/20 dark:bg-purple-400/20 rounded-full blur-md -top-2 -left-2" />
                  <div className="absolute w-8 h-6 bg-beyul-purple/20 dark:bg-purple-400/20 rounded-full blur-md -top-1" />
                  <div className="absolute w-4 h-4 bg-beyul-purple/20 dark:bg-purple-400/20 rounded-full blur-sm top-0 left-2" />
                </div>
              </motion.div>
            )}
          </button>
        )
      })}
    </div>
  )
}
