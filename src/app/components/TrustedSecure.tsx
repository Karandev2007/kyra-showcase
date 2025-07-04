import Image from 'next/image';

interface TrustedSecureProps {
  children: React.ReactNode;
  imagePath: string;
}

export default function TrustedSecure({ children, imagePath }: TrustedSecureProps) {
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

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">Trusted & Secure</h2>
            <div className="text-gray-300 space-y-4 text-lg leading-relaxed">
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 