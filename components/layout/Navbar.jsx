"use client";

import { LightbulbIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Web Design", href: "/web-design" },
    { label: "Graphic Design", href: "/graphic-design" },
    { label: "Network", href: "/network" },
  ];

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <LightbulbIcon className="h-8 w-8 text-teal-600" />
            <span className="text-xl font-semibold text-gray-900">
              <span className="text-teal-600">meet</span>ing
              <span className="text-sm text-gray-600 ml-1">creative</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-black text-white px-6 py-2 hover:bg-gray-800 transition-colors"
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
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-gray-600 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block px-4 py-2 text-gray-600 hover:bg-gray-50"
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