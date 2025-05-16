import { format } from 'date-fns'

export default function HourlyForecast({ forecast, loading }) {
  if (loading) {
    return (
      <div className="weather-card rounded-xl shadow-lg p-4 sm:p-6 backdrop-blur-md bg-white/30 dark:bg-gray-800/30">
        <div className="h-6 sm:h-8 w-36 sm:w-48 bg-gray-200 dark:bg-gray-700 rounded mb-4 sm:mb-6"></div>
        <div className="flex overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent">
          <div className="flex space-x-4 sm:space-x-6 px-1">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="flex-none w-20 sm:w-24 animate-pulse">
                <div className="h-4 sm:h-5 w-12 sm:w-16 mx-auto bg-gray-200 dark:bg-gray-700 rounded mb-3"></div>
                <div className="h-12 sm:h-16 w-12 sm:w-16 mx-auto bg-gray-200 dark:bg-gray-700 rounded-full mb-3"></div>
                <div className="h-5 sm:h-6 w-16 sm:w-20 mx-auto bg-gray-200 dark:bg-gray-700 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (!forecast) {
    return null
  }

  return (
    <div className="weather-card rounded-xl shadow-lg p-4 sm:p-6 backdrop-blur-md bg-white/30 dark:bg-gray-800/30">
      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-4 sm:mb-6 flex items-center">
        <span className="relative group">
          24-Hour Forecast
          <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500/50 dark:bg-blue-400/50 rounded transform origin-left transition-transform group-hover:scale-x-110"></div>
        </span>
      </h3>
      <div className="flex overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent">
        <div className="flex space-x-4 sm:space-x-6 px-1">
          {forecast.map((hour, index) => (
            <div 
              key={hour.dt} 
              className="flex-none w-20 sm:w-24 p-2 sm:p-3 rounded-lg hover:bg-white/50 dark:hover:bg-gray-700/50 transition-all duration-300 transform hover:-translate-y-1"
              style={{ 
                animationDelay: `${index * 100}ms`,
                animation: 'fadeInUp 0.5s ease-out forwards'
              }}
            >
              <p className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-300 mb-2 text-center">
                {format(new Date(hour.dt * 1000), 'ha')}
              </p>
              <div className="relative w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-blue-600/20 dark:from-blue-500/10 dark:to-blue-700/10 rounded-full blur-sm"></div>
                <img
                  src={`https://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`}
                  alt={hour.weather[0].description}
                  className="relative z-10 w-full h-full transform hover:scale-110 transition-transform duration-300"
                />
              </div>
              <p className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white text-center">
                {Math.round(hour.main.temp)}°C
              </p>
              <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 mt-1 capitalize text-center truncate">
                {hour.weather[0].description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Custom scrollbar styles */
        .scrollbar-thin::-webkit-scrollbar {
          height: 6px;
        }

        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }

        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: rgba(156, 163, 175, 0.5);
          border-radius: 3px;
        }

        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: rgba(156, 163, 175, 0.7);
        }

        /* For Firefox */
        .scrollbar-thin {
          scrollbar-width: thin;
          scrollbar-color: rgba(156, 163, 175, 0.5) transparent;
        }
      `}</style>
    </div>
  )
} 