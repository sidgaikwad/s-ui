"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Menu, X, Github, Search, Command } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
              <span className="text-white font-bold text-sm">SG</span>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-400 rounded-lg opacity-0 group-hover:opacity-50 blur transition-opacity"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-none bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                sidgaikwad/ui
              </span>
              <span className="text-xs text-gray-500">
                Component Library Hub
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <Link
              href="/"
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all"
            >
              Libraries
            </Link>
            <Link
              href="/compare"
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all"
            >
              Compare
            </Link>
            <Link
              href="/about"
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all"
            >
              About
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all">
              <Search className="w-5 h-5" />
            </button>

            <a
              href="https://github.com/sidgaikwad/ui"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all"
            >
              <Github className="w-5 h-5" />
            </a>

            <Button
              variant="primary"
              className="shadow-lg hover:shadow-xl transition-all"
            >
              Submit Library
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-all"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t animate-in slide-in-from-top-5">
            <nav className="flex flex-col gap-2">
              <Link
                href="/"
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                Libraries
              </Link>
              <Link
                href="/compare"
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                Compare
              </Link>
              <Link
                href="/about"
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <div className="flex items-center gap-2 px-4 pt-4 border-t mt-2">
                <Button variant="outline" className="flex-1">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
                <Button variant="primary" className="flex-1">
                  Submit
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
