import { format } from 'date-fns'

export default function HourlyForecast({ forecast, loading }) {
  if (loading) {
    return (
      <div className="weather-card mt-6">
        <div className="h-8 w-48 bg-gray-200 dark:bg-gray-700 rounded mb-6"></div>
        <div className="forecast-scroll">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="forecast-card animate-pulse">
              <div className="h-5 w-16 mx-auto bg-gray-200 dark:bg-gray-700 rounded mb-3"></div>
              <div className="h-16 w-16 mx-auto bg-gray-200 dark:bg-gray-700 rounded-full mb-3"></div>
              <div className="h-6 w-20 mx-auto bg-gray-200 dark:bg-gray-700 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (!forecast) {
    return null
  }

  return (
    <div className="weather-card mt-6 backdrop-blur-md bg-white/30 dark:bg-gray-800/30">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
        <span className="relative">
          24-Hour Forecast
          <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500/50 dark:bg-blue-400/50 rounded"></div>
        </span>
      </h3>
      <div className="forecast-scroll">
        {forecast.map((hour, index) => (
          <div 
            key={hour.dt} 
            className="forecast-card hover:bg-white/50 dark:hover:bg-gray-700/50 transition-all duration-300 transform hover:-translate-y-1"
            style={{ 
              animationDelay: `${index * 100}ms`,
              animation: 'fadeInUp 0.5s ease-out forwards'
            }}
          >
            <p className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">
              {format(new Date(hour.dt * 1000), 'ha')}
            </p>
            <div className="relative w-16 h-16 mx-auto mb-2">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-blue-600/20 dark:from-blue-500/10 dark:to-blue-700/10 rounded-full blur-sm"></div>
              <img
                src={`https://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`}
                alt={hour.weather[0].description}
                className="relative z-10 w-full h-full transform hover:scale-110 transition-transform duration-300"
              />
            </div>
            <p className="text-lg font-semibold text-gray-900 dark:text-white">
              {Math.round(hour.main.temp)}°C
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 capitalize">
              {hour.weather[0].description}
            </p>
          </div>
        ))}
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
      `}</style>
    </div>
  )
} 