'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed w-full top-0 z-50 px-4 py-6">
      <nav className="max-w-3xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-8 py-4">
        <div className="flex items-center justify-center gap-8 sm:gap-12">
          <Link href="/" className="text-white hover:text-purple-300 transition-colors duration-200 text-sm font-medium">
            Home
          </Link>
          <Link href="#features" className="text-white hover:text-purple-300 transition-colors duration-200 text-sm font-medium">
            Features
          </Link>
          <Link href="#creator" className="text-white hover:text-purple-300 transition-colors duration-200 text-sm font-medium">
            Creator
          </Link>
        </div>
      </nav>
    </header>
  );
}