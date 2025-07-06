'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/20 bg-black/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 w-full">
            <p className="text-white font-medium">
              © 2025 Karan & QeinTech. All rights reserved.
            </p>
            <p className="text-white font-medium flex items-center gap-2">
              Made with <span className="text-red-500 animate-pulse text-xl">❤️</span> by Karan
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 w-full">
            <Link href="/legal/terms" className="text-gray-300 hover:text-white transition-colors duration-200">Terms & Conditions</Link>
            <Link href="/legal/privacy" className="text-gray-300 hover:text-white transition-colors duration-200">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 