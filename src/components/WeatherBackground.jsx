import { useEffect, useRef } from 'react';

const RainDrop = ({ delay }) => (
  <div 
    className="absolute animate-rain opacity-70"
    style={{
      left: `${Math.random() * 100}%`,
      animationDelay: `${delay}s`,
      top: '-20px'
    }}
  >
    <div className="h-8 w-0.5 bg-gradient-to-b from-transparent via-blue-400/50 to-blue-400/70 rounded-full transform -rotate-15"></div>
  </div>
);

const Cloud = ({ delay, scale }) => (
  <div 
    className="absolute animate-float"
    style={{
      left: `${Math.random() * 100}%`,
      animationDelay: `${delay}s`,
      top: `${Math.random() * 30}%`,
      transform: `scale(${scale})`
    }}
  >
    <div className="relative">
      <div className="absolute bg-white/30 dark:bg-gray-300/30 rounded-full w-16 h-16 blur-sm"></div>
      <div className="absolute bg-white/30 dark:bg-gray-300/30 rounded-full w-20 h-20 -left-6 top-2 blur-sm"></div>
      <div className="absolute bg-white/30 dark:bg-gray-300/30 rounded-full w-16 h-16 left-8 top-1 blur-sm"></div>
    </div>
  </div>
);

const Snow = ({ delay }) => (
  <div 
    className="absolute animate-snow"
    style={{
      left: `${Math.random() * 100}%`,
      animationDelay: `${delay}s`,
      top: '-20px'
    }}
  >
    <div className="h-2 w-2 bg-white dark:bg-gray-200 rounded-full opacity-70"></div>
  </div>
);

const ThunderBolt = ({ delay }) => (
  <div 
    className="absolute animate-thunder"
    style={{
      left: `${Math.random() * 100}%`,
      animationDelay: `${delay}s`,
      top: '0'
    }}
  >
    <div className="h-32 w-1 bg-gradient-to-b from-yellow-300/0 via-yellow-300/70 to-yellow-300/0"></div>
  </div>
);

export default function WeatherBackground({ weatherCode }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clear existing elements
    container.innerHTML = '';

    // Weather conditions based on OpenWeatherMap codes
    const isRaining = weatherCode?.includes('09') || weatherCode?.includes('10');
    const isSnowing = weatherCode?.includes('13');
    const isCloudy = weatherCode?.includes('02') || weatherCode?.includes('03') || weatherCode?.includes('04');
    const isThundering = weatherCode?.includes('11');

    // Add weather elements
    if (isRaining) {
      for (let i = 0; i < 50; i++) {
        const drop = document.createElement('div');
        drop.innerHTML = `<div class="absolute animate-rain opacity-70" style="left: ${Math.random() * 100}%; animation-delay: ${Math.random() * 2}s; top: -20px;">
          <div class="h-8 w-0.5 bg-gradient-to-b from-transparent via-blue-400/50 to-blue-400/70 rounded-full transform -rotate-15"></div>
        </div>`;
        container.appendChild(drop.firstChild);
      }
    }

    if (isCloudy) {
      for (let i = 0; i < 6; i++) {
        const cloud = document.createElement('div');
        cloud.innerHTML = `<div class="absolute animate-float" style="left: ${Math.random() * 100}%; animation-delay: ${Math.random() * 3}s; top: ${Math.random() * 30}%; transform: scale(${0.5 + Math.random()});">
          <div class="relative">
            <div class="absolute bg-white/30 dark:bg-gray-300/30 rounded-full w-16 h-16 blur-sm"></div>
            <div class="absolute bg-white/30 dark:bg-gray-300/30 rounded-full w-20 h-20 -left-6 top-2 blur-sm"></div>
            <div class="absolute bg-white/30 dark:bg-gray-300/30 rounded-full w-16 h-16 left-8 top-1 blur-sm"></div>
          </div>
        </div>`;
        container.appendChild(cloud.firstChild);
      }
    }

    if (isSnowing) {
      for (let i = 0; i < 50; i++) {
        const snowflake = document.createElement('div');
        snowflake.innerHTML = `<div class="absolute animate-snow" style="left: ${Math.random() * 100}%; animation-delay: ${Math.random() * 3}s; top: -20px;">
          <div class="h-2 w-2 bg-white dark:bg-gray-200 rounded-full opacity-70"></div>
        </div>`;
        container.appendChild(snowflake.firstChild);
      }
    }

    if (isThundering) {
      const addThunder = () => {
        const thunder = document.createElement('div');
        thunder.innerHTML = `<div class="absolute animate-thunder" style="left: ${Math.random() * 100}%; top: 0;">
          <div class="h-32 w-1 bg-gradient-to-b from-yellow-300/0 via-yellow-300/70 to-yellow-300/0"></div>
        </div>`;
        container.appendChild(thunder.firstChild);
        setTimeout(() => thunder.firstChild?.remove(), 1000);
      };

      setInterval(addThunder, 3000);
    }

    return () => {
      container.innerHTML = '';
    };
  }, [weatherCode]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
    />
  );
} 