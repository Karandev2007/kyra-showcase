'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Footer() {
  const [fact, setFact] = useState('Loading a random fact...');

  useEffect(() => {
    fetch('https://uselessfacts.jsph.pl/api/v2/facts/random')
      .then(response => response.json())
      .then(data => setFact(data.text))
      .catch(() => setFact('Do you know KyraDock A3 uses fallback API for AI Models?'));
  }, []);

  return (
    <footer className="py-8 border-t border-white/20 bg-black/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          <div className="text-center max-w-2xl">
            <p className="text-gray-300 text-sm italic">"{fact}"</p>
          </div>
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