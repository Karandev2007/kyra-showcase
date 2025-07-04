'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[radial-gradient(circle_at_center,#13151a,#090909)]">
      <div className="relative w-24 h-24">
        <Image
          src="/loading.gif"
          alt="Loading..."
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
} 