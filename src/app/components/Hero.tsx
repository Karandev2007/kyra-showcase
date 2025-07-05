'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Built for developers & makers.';
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // added delay
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(loadingTimeout);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      let currentIndex = 0;
      const typingInterval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setDisplayText(fullText.slice(0, currentIndex));
          currentIndex++;
        } else {
          setIsTypingComplete(true);
          clearInterval(typingInterval);
        }
      }, 100);

      return () => clearInterval(typingInterval);
    }
  }, [isLoading]);

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,#13151a,#090909)] pointer-events-none">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/20 to-black/80" />
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-30 pointer-events-none">
        <Image
          src="/kyra.png"
          alt="kyra bg"
          fill
          className="object-contain transform -rotate-12"
          priority
        />
      </div>

      {/* hero sec */}
      <div className="relative max-w-7xl mx-auto px-4 py-32 mt-20">
        <div className="max-w-3xl">
          <h1 className="font-extrabold tracking-tight">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-purple-900 text-4xl sm:text-5xl md:text-6xl mb-3">
              Meet KyraDock A3
            </span>
            <span className="block text-gray-400 text-2xl sm:text-3xl md:text-4xl min-h-[2.5rem]">
              {displayText}
              <span className={`inline-block w-0.5 h-6 ml-1 bg-purple-700 ${isTypingComplete ? 'animate-blink' : ''}`} />
            </span>
          </h1>

          <div className="mt-10">
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-900/30 to-transparent pointer-events-none" />
    </section>
  );
}