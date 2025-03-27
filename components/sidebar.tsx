"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart3, Database, DollarSign, Home, Menu, PieChart, Table, X } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Sidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const navigation = [
    { name: "Dashboard", href: "/", icon: Home },
    { name: "Valuation", href: "/valuation", icon: DollarSign },
    { name: "Financial Overview", href: "/financial-overview", icon: BarChart3 },
    { name: "Performance", href: "/performance", icon: PieChart },
    { name: "Cap Table", href: "/cap-table", icon: Table },
    { name: "Data Room", href: "/data-room", icon: Database },
  ]

  return (
    <>
      {/* Mobile menu button */}
      <button
        type="button"
        className="md:hidden fixed top-4 left-4 z-50 p-2 text-white bg-[#4B0082] rounded-md"
        onClick={toggleSidebar}
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar for mobile */}
      <div
        className={cn(
          "fixed inset-0 z-40 flex md:hidden transform transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="relative flex-1 flex flex-col max-w-xs w-full bg-[#4B0082]">
          <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center px-5">
              <div className="flex-shrink-0">
                <span className="text-white font-bold text-xl">StartupHub</span>
              </div>
            </div>
            <nav className="mt-5 px-2 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "group flex items-center px-4 py-3 text-base font-medium rounded-md",
                    pathname === item.href ? "bg-[#EDE9FE] text-[#6B46C1]" : "text-white hover:bg-[#5D1E9E]",
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon
                    className={cn(
                      "mr-3 flex-shrink-0 h-5 w-5",
                      pathname === item.href ? "text-[#6B46C1]" : "text-white",
                    )}
                  />
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
        <div className="flex-shrink-0 w-14" onClick={() => setIsOpen(false)}></div>
      </div>

      {/* Static sidebar for desktop */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64">
          <div className="flex flex-col h-0 flex-1 bg-[#4B0082]">
            <div className="flex items-center h-16 flex-shrink-0 px-5">
              <span className="text-white font-bold text-xl">StartupHub</span>
            </div>
            <div className="flex-1 flex flex-col overflow-y-auto">
              <nav className="flex-1 px-4 py-4 space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "group flex items-center px-4 py-3 text-base font-medium rounded-md",
                      pathname === item.href ? "bg-[#EDE9FE] text-[#6B46C1]" : "text-white hover:bg-[#5D1E9E]",
                    )}
                  >
                    <item.icon
                      className={cn(
                        "mr-3 flex-shrink-0 h-5 w-5",
                        pathname === item.href ? "text-[#6B46C1]" : "text-white",
                      )}
                    />
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

