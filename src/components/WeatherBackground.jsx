import { useEffect, useRef } from 'react';

const RainDrop = ({ delay }) => (
  <div 
    className="absolute animate-rain"
    style={{
      left: `${Math.random() * 100}%`,
      animationDelay: `${delay}s`,
      top: '-20px'
    }}
  >
    <div className="h-10 w-[1px] bg-gradient-to-b from-transparent via-blue-400/40 to-blue-400/60 rounded-full transform rotate-[20deg]"></div>
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
      {/* Main cloud body */}
      <div className="absolute bg-white/40 dark:bg-gray-300/40 rounded-[50px] w-32 h-16 blur-sm"></div>
      
      {/* Cloud puffs */}
      <div className="absolute bg-white/40 dark:bg-gray-300/40 rounded-full w-20 h-20 -left-4 -top-6 blur-sm"></div>
      <div className="absolute bg-white/40 dark:bg-gray-300/40 rounded-full w-20 h-20 left-8 -top-4 blur-sm"></div>
      <div className="absolute bg-white/40 dark:bg-gray-300/40 rounded-full w-16 h-16 left-20 top-0 blur-sm"></div>
      <div className="absolute bg-white/40 dark:bg-gray-300/40 rounded-full w-16 h-16 left-6 -top-2 blur-sm"></div>
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
    <div className="h-[60vh] w-1 bg-gradient-to-b from-yellow-300/0 via-yellow-300/70 to-yellow-300/0"></div>
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
      for (let i = 0; i < 100; i++) {
        const drop = document.createElement('div');
        const delay = Math.random() * 2;
        const leftPos = Math.random() * 100;
        drop.innerHTML = `
          <div class="absolute animate-rain" style="left: ${leftPos}%; animation-delay: ${delay}s; top: -20px;">
            <div class="h-10 w-[1px] bg-gradient-to-b from-transparent via-blue-400/40 to-blue-400/60 rounded-full transform rotate-[20deg]"></div>
          </div>
        `;
        container.appendChild(drop.firstChild);
      }
    }

    if (isCloudy) {
      for (let i = 0; i < 8; i++) {
        const cloud = document.createElement('div');
        const delay = Math.random() * 20;
        const scale = 0.3 + Math.random() * 0.7;
        const leftPos = Math.random() * 100;
        const topPos = Math.random() * 30;
        
        cloud.innerHTML = `
          <div class="absolute animate-float" style="left: ${leftPos}%; animation-delay: ${delay}s; top: ${topPos}%; transform: scale(${scale});">
            <div class="relative">
              <div class="absolute bg-white/40 dark:bg-gray-300/40 rounded-[50px] w-32 h-16 blur-sm"></div>
              <div class="absolute bg-white/40 dark:bg-gray-300/40 rounded-full w-20 h-20 -left-4 -top-6 blur-sm"></div>
              <div class="absolute bg-white/40 dark:bg-gray-300/40 rounded-full w-20 h-20 left-8 -top-4 blur-sm"></div>
              <div class="absolute bg-white/40 dark:bg-gray-300/40 rounded-full w-16 h-16 left-20 top-0 blur-sm"></div>
              <div class="absolute bg-white/40 dark:bg-gray-300/40 rounded-full w-16 h-16 left-6 -top-2 blur-sm"></div>
            </div>
          </div>
        `;
        container.appendChild(cloud.firstChild);
      }
    }

    if (isSnowing) {
      for (let i = 0; i < 50; i++) {
        const snowflake = document.createElement('div');
        const delay = Math.random() * 3;
        const leftPos = Math.random() * 100;
        snowflake.innerHTML = `
          <div class="absolute animate-snow" style="left: ${leftPos}%; animation-delay: ${delay}s; top: -20px;">
            <div class="h-2 w-2 bg-white dark:bg-gray-200 rounded-full opacity-70"></div>
          </div>
        `;
        container.appendChild(snowflake.firstChild);
      }
    }

    if (isThundering) {
      const addThunder = () => {
        const thunder = document.createElement('div');
        const leftPos = Math.random() * 100;
        thunder.innerHTML = `
          <div class="absolute animate-thunder" style="left: ${leftPos}%; top: 0;">
            <div class="h-[60vh] w-1 bg-gradient-to-b from-yellow-300/0 via-yellow-300/70 to-yellow-300/0"></div>
          </div>
        `;
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