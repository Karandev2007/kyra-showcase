import Image from 'next/image';

interface TrustedSecure {
  children: React.ReactNode;
  imagePath: string;
}

export default function TrustedSecure({ children, imagePath }: TrustedSecure) {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative w-full aspect-[4/3] max-w-lg mx-auto">
            <Image
              src={imagePath}
              alt="Kyra Security Illustration"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="relative bg-black/20 backdrop-blur-sm rounded-xl p-8 border border-purple-900/20 hover:border-purple-900/50 transition-all duration-300 group">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-6">Trusted & Secure</h2>
              <div className="text-gray-300 space-y-4 text-lg leading-relaxed">
                {children}
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 to-transparent rounded-xl group-hover:from-purple-900/10 transition-all duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
} 