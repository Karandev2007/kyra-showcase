import Image from 'next/image';

interface CreatorProps {
  name: string;
  description: string[];
  imagePath: string;
}

export default function Creator({ name, description, imagePath }: CreatorProps) {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-8">Creator</h2>
        <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
          <div className="flex items-start gap-6">
            <div className="relative w-20 h-20 flex-shrink-0">
              <Image
                src={imagePath}
                alt={`${name}'s profile picture`}
                fill
                className="object-cover rounded-full border-2 border-purple-500/50"
                priority
              />
            </div>

            {/* content */}
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
              <div className="space-y-2">
                {description.map((line, index) => (
                  <p key={index} className="text-gray-300 leading-relaxed">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 