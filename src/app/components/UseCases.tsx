'use client';

interface UseCaseCard {
  icon: string;
  command: string;
  color: string;
}

const UseCaseCard = ({ icon, command, color }: UseCaseCard) => (
  <div
    className={`flex-shrink-0 ${color} bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white/10 w-80 transition-all duration-300 hover:bg-opacity-20 hover:scale-105`}
  >
    <span className="text-4xl mb-4 block">{icon}</span>
    <p className="text-white text-sm font-medium leading-relaxed">
      {command}
    </p>
  </div>
);

const useCaseRows = [
  [
    { icon: '📅', command: 'kyra add meeting on 27th in calendar', color: 'bg-blue-500' },
    { icon: '⏰', command: 'kyra set timer for 10 minutes', color: 'bg-green-500' },
    { icon: '🗓️', command: 'kyra schedule team sync for next week', color: 'bg-purple-500' },
    { icon: '⏱️', command: 'kyra remind me to take a break in 2 hours', color: 'bg-pink-500' },
    { icon: '📊', command: 'kyra block my calendar for deep work', color: 'bg-indigo-500' },
    { icon: '🎯', command: 'kyra set deadline for project on Friday', color: 'bg-yellow-500' },
    { icon: '📋', command: 'kyra create weekly schedule template', color: 'bg-red-500' },
    { icon: '🔄', command: 'kyra set recurring meeting every Monday', color: 'bg-teal-500' },
    { icon: '📌', command: 'kyra mark this slot as busy', color: 'bg-orange-500' },
    { icon: '🕐', command: 'kyra find free time slots this week', color: 'bg-cyan-500' },
  ],
  [
    { icon: '✅', command: 'kyra add task to buy groceries', color: 'bg-emerald-500' },
    { icon: '📝', command: 'kyra take a quick note', color: 'bg-violet-500' },
    { icon: '📎', command: 'kyra attach file to project notes', color: 'bg-rose-500' },
    { icon: '🏷️', command: 'kyra tag this task as important', color: 'bg-blue-500' },
    { icon: '📁', command: 'kyra organize files by date', color: 'bg-amber-500' },
    { icon: '✏️', command: 'kyra edit last note', color: 'bg-purple-500' },
    { icon: '📋', command: 'kyra create new checklist', color: 'bg-green-500' },
    { icon: '🔍', command: 'kyra find notes from last week', color: 'bg-indigo-500' },
    { icon: '📤', command: 'kyra share this task with team', color: 'bg-pink-500' },
    { icon: '🗑️', command: 'kyra clear completed tasks', color: 'bg-red-500' },
  ],
  [
    { icon: '💡', command: 'kyra turn on living room lights', color: 'bg-yellow-500' },
    { icon: '🌡️', command: 'kyra set temperature to 72°F', color: 'bg-orange-500' },
    { icon: '🎵', command: 'kyra play my focus playlist', color: 'bg-purple-500' },
    { icon: '🔒', command: 'kyra lock all doors', color: 'bg-blue-500' },
    { icon: '📺', command: 'kyra turn on TV and Netflix', color: 'bg-red-500' },
    { icon: '☕', command: 'kyra start coffee maker', color: 'bg-brown-500' },
    { icon: '🎨', command: 'kyra set mood lighting', color: 'bg-indigo-500' },
    { icon: '📱', command: 'kyra check device status', color: 'bg-gray-500' },
    { icon: '🔔', command: 'kyra enable doorbell camera', color: 'bg-green-500' },
    { icon: '🌙', command: 'kyra activate night mode', color: 'bg-purple-900' },
  ],
];

export default function UseCases() {
  return (
    <section className="py-24 relative overflow-hidden w-screen -mx-[calc((100vw-100%)/2)]">
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <h2 className="text-3xl font-bold text-white text-center mb-4">Use Cases</h2>
        <p className="text-gray-400 text-center text-lg">Discover the endless possibilities with KyraDock A3</p>
      </div>

      <div className="space-y-12">
        {useCaseRows.map((row, rowIndex) => (
          <div key={rowIndex} className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
            
            <div 
              className="flex gap-6 overflow-hidden hover:pause px-32"
              style={{
                animation: `scroll${rowIndex} ${25 + rowIndex * 5}s linear infinite`
              }}
            >
              {[...row, ...row, ...row].map((useCase, index) => (
                <UseCaseCard key={index} {...useCase} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <style jsx global>{`
        @keyframes scroll0 {
          0% { transform: translateX(-10%); }
          100% { transform: translateX(-23.33%); }
        }
        @keyframes scroll1 {
          0% { transform: translateX(-23.33%); }
          100% { transform: translateX(-10%); }
        }
        @keyframes scroll2 {
          0% { transform: translateX(-15%); }
          100% { transform: translateX(-28.33%); }
        }
        .hover\:pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
} 