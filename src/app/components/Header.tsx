'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-black/30 backdrop-blur-xl border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 py-5">
        <div className="flex items-center justify-center relative">
          <div className="hidden md:flex space-x-12">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium">
              Home
            </Link>
            <Link href="/addons" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium">
              Addons
            </Link>
            <Link href="/faq" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium">
              FAQ
            </Link>
          </div>

          <button
            className="md:hidden absolute right-0 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden pt-4 pb-3 space-y-4">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors duration-200 block text-sm font-medium">
              Home
            </Link>
            <Link href="/addons" className="text-gray-300 hover:text-white transition-colors duration-200 block text-sm font-medium">
              Addons
            </Link>
            <Link href="/faq" className="text-gray-300 hover:text-white transition-colors duration-200 block text-sm font-medium">
              FAQ
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}