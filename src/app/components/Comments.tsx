'use client';

import { useEffect, useState } from 'react';

interface Comment {
  id: number;
  body: string;
  user: {
    username: string;
  };
}

export default function Comments() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://dummyjson.com/comments?limit=6')
      .then(response => response.json())
      .then(data => {
        setComments(data.comments);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching comments:', error);
        setIsLoading(false);
      });
  }, []);

  return (
    <section className="py-20 bg-black/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          What People Say
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            Array(3).fill(0).map((_, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 animate-pulse">
                <div className="h-4 bg-purple-900/50 rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-purple-900/50 rounded w-1/2"></div>
              </div>
            ))
          ) : (
            comments.map(comment => (
              <div key={comment.id} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 transform hover:scale-105 transition-all duration-300">
                <p className="text-gray-300 mb-4">{comment.body}</p>
                <p className="text-purple-400 font-medium">- {comment.user.username}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
} 