import { useState, useEffect, useMemo } from 'react';

const calculateCelestialPosition = (currentTime, sunriseTime, sunsetTime) => {
  const current = new Date(currentTime).getTime();
  const sunrise = new Date(sunriseTime).getTime();
  const sunset = new Date(sunsetTime).getTime();
  
  // Night time before sunrise
  if (current < sunrise) {
    return {
      isDay: false,
      position: ((current + 24*60*60*1000 - sunset) / (sunrise - sunset + 24*60*60*1000)) * 180
    };
  }
  // Day time
  else if (current >= sunrise && current <= sunset) {
    return {
      isDay: true,
      position: ((current - sunrise) / (sunset - sunrise)) * 180
    };
  }
  // Night time after sunset
  else {
    return {
      isDay: false,
      position: ((current - sunset) / (sunrise + 24*60*60*1000 - sunset)) * 180
    };
  }
};

const formatTime = (timestamp) => {
  return new Date(timestamp * 1000).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });
};

const STAR_COUNT = 20;

export default function SunMoonCard({ sunrise, sunset }) {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [celestialPosition, setCelestialPosition] = useState({ isDay: true, position: 0 });
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 640);

  // Generate static star positions for better performance
  const starPositions = useMemo(() => {
    return Array.from({ length: STAR_COUNT }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 2}s`,
      size: Math.random() * 0.5 + 0.5 // Random size between 0.5 and 1
    }));
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      clearInterval(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (sunrise && sunset) {
      const position = calculateCelestialPosition(
        currentTime,
        sunrise * 1000,
        sunset * 1000
      );
      setCelestialPosition(position);
    }
  }, [currentTime, sunrise, sunset]);

  const orbitRadius = useMemo(() => {
    return windowWidth < 640 ? 80 : 100;
  }, [windowWidth]);

  if (!sunrise || !sunset) return null;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6 transform hover:scale-[1.02] transition-all duration-300 w-full">
      <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-gray-800 dark:text-white text-center">
        {celestialPosition.isDay ? 'Daylight' : 'Night'} Hours
      </h3>
      
      <div className="relative h-32 sm:h-40 lg:h-48 mb-4 sm:mb-6">
        {/* Sky background with stars at night */}
        <div className="absolute inset-0 rounded-full overflow-hidden">
          <div className={`absolute inset-0 transition-all duration-1000 ${
            celestialPosition.isDay 
              ? 'bg-gradient-to-b from-blue-300 via-blue-200 to-blue-100 dark:from-blue-800 dark:via-blue-700 dark:to-blue-600' 
              : 'bg-gradient-to-b from-gray-900 via-blue-900 to-blue-800'
          }`}>
            {/* Optimized stars with pre-calculated positions */}
            {!celestialPosition.isDay && starPositions.map((star, i) => (
              <div
                key={i}
                className="absolute bg-white rounded-full animate-pulse-glow"
                style={{
                  left: star.left,
                  top: star.top,
                  width: `${star.size}px`,
                  height: `${star.size}px`,
                  animationDelay: star.delay
                }}
              />
            ))}
          </div>
        </div>

        {/* Arc path with enhanced gradient */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" viewBox="0 0 200 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.05)" />
                <stop offset="50%" stopColor="rgba(255,255,255,0.2)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
              </linearGradient>
            </defs>
            <path
              d="M0,100 A100,100 0 0,1 200,100"
              fill="none"
              stroke="url(#pathGradient)"
              strokeWidth="2"
              className="transition-all duration-1000"
            />
          </svg>
        </div>

        {/* Sun/Moon with optimized positioning */}
        <div
          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-1000"
          style={{
            top: '100%',
            transform: `
              translateX(-50%)
              rotate(${celestialPosition.position}deg)
              translateY(-${orbitRadius}px)
              rotate(-${celestialPosition.position}deg)
            `
          }}
        >
          {celestialPosition.isDay ? (
            // Enhanced sun with more dynamic rays
            <div className="relative">
              <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-yellow-400 shadow-lg shadow-yellow-400/50 animate-pulse-glow">
                <div className="absolute inset-0 rounded-full bg-yellow-300 animate-pulse opacity-75"></div>
              </div>
              {/* Dynamic sun rays */}
              <div className="absolute inset-[-4px] sm:inset-[-6px] animate-spin-slow">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 sm:w-1.5 h-1.5 sm:h-2 bg-yellow-300/60"
                    style={{
                      left: '50%',
                      top: '50%',
                      transform: `rotate(${i * 30}deg) translateY(-12px)`,
                      opacity: 0.6 + Math.sin(i / 12 * Math.PI) * 0.4
                    }}
                  />
                ))}
              </div>
            </div>
          ) : (
            // Enhanced moon with more realistic craters
            <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-gray-100 shadow-lg shadow-gray-200/30 relative overflow-hidden">
              <div className="absolute right-1 top-1 w-6 sm:w-8 h-6 sm:h-8 rounded-full bg-gray-800/10"></div>
              {/* More detailed craters */}
              <div className="absolute left-2 top-2 w-2 h-2 rounded-full bg-gray-300/40"></div>
              <div className="absolute right-3 bottom-2 w-1.5 h-1.5 rounded-full bg-gray-300/30"></div>
              <div className="absolute left-3 bottom-3 w-1 h-1 rounded-full bg-gray-300/20"></div>
              <div className="absolute left-1 top-3 w-1 h-1 rounded-full bg-gray-300/25"></div>
              <div className="absolute right-2 top-1 w-1.5 h-1.5 rounded-full bg-gray-300/35"></div>
            </div>
          )}
        </div>
      </div>

      {/* Times display */}
      <div className="flex justify-between items-center text-xs sm:text-sm px-2 sm:px-4">
        <div className="flex flex-col items-center">
          <span className="text-orange-500 dark:text-orange-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
            </svg>
          </span>
          <span className="font-semibold mt-1 text-gray-600 dark:text-gray-300">
            {formatTime(sunrise)}
          </span>
          <span className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">Sunrise</span>
        </div>

        <div className="flex flex-col items-center">
          <span className="font-semibold text-gray-700 dark:text-gray-200">
            {currentTime.toLocaleTimeString('en-US', { 
              hour: '2-digit',
              minute: '2-digit',
              hour12: true
            })}
          </span>
          <span className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 mt-1">Current</span>
        </div>

        <div className="flex flex-col items-center">
          <span className="text-blue-600 dark:text-blue-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          </span>
          <span className="font-semibold mt-1 text-gray-600 dark:text-gray-300">
            {formatTime(sunset)}
          </span>
          <span className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">Sunset</span>
        </div>
      </div>
    </div>
  );
} 