
import React, { useState, useEffect } from 'react';

export const CountdownBanner: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-amber-500 text-white py-2 px-4 sticky top-0 z-50 shadow-md">
      <div className="max-w-4xl mx-auto flex items-center justify-center gap-4 text-sm md:text-base font-bold">
        <span className="uppercase tracking-wider">¡NO PIERDAS TIEMPO! LA OFERTA EXPIRA EN:</span>
        <div className="bg-white text-amber-600 px-3 py-1 rounded-md font-mono text-lg shadow-inner">
          {formatTime(timeLeft)}
        </div>
      </div>
    </div>
  );
};
