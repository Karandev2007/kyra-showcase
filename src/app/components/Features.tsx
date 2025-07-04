'use client';

const features = [
  {
    title: 'Voice Control',
    description: 'Natural language processing for seamless voice interactions',
    icon: '🎙️',
  },
  {
    title: 'Plugins Support',
    description: 'Easily extend functionality with custom plugins',
    icon: '🔌',
  },
  {
    title: 'Hybrid AI',
    description: 'Combining local and cloud processing for optimal performance',
    icon: '🤖',
  },
  {
    title: 'Smart Home',
    description: 'Compatible with major smart home platforms',
    icon: '🏠',
  },
  {
    title: 'Automation',
    description: 'Create custom routines and automated workflows',
    icon: '⚙️',
  },
  {
    title: 'Updates',
    description: 'Regular updates and new feature releases',
    icon: '🔄',
  },
];

export default function Features() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-purple-900/20 hover:border-purple-900/50 transition-all duration-300"
            >
              <div className="relative z-10">
                <span className="text-4xl mb-4 block">{feature.icon}</span>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400">
                  {feature.description}
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 to-transparent rounded-xl group-hover:from-purple-900/10 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-48 h-48 bg-purple-900/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-48 h-48 bg-purple-900/20 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
} 