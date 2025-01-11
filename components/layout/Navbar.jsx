"use client";

import { LightbulbIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();  // ดึง pathname ปัจจุบัน

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Web Design", href: "/web-design" },
    { label: "Graphic Design", href: "/graphic-design" },
    { label: "Network", href: "/network" },
  ];

  return (
    <nav className="fixed w-full bg-white/50 backdrop-blur-md z-50 py-4 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 no-underline">
            <img
              src="/assets/img/logo1.png"
              alt="Background"
              className="w-full h-[30px] object-cover"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-10 lg:space-x-12">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-black md:text-xs lg:text-base transition-colors ${pathname === item.href ? "text-teal-600" : ""
                  }`}  // เพิ่มเงื่อนไขเพื่อเพิ่มคลาส active
              >
                {item.label}
                <span
                  className={`absolute left-0 bottom-0 w-0 h-[2px] bg-teal-600 transition-all ease-in-out ${pathname === item.href ? "w-full" : ""
                    }`} // เส้นใต้จะขยายเต็มเมื่อเป็น active
                />
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-black text-white px-8 py-3 lg:px-4 lg:py-1 text-sm lg:text-base hover:bg-gray-900 no-underline transition-all"
            >
              Contact Us
            </Link>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-transparent">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-gray-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block px-4 py-2 text-gray-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
