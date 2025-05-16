import { format } from 'date-fns'

export default function HourlyForecast({ forecast, loading }) {
  if (loading) {
    return (
      <div className="weather-card mt-6">
        <div className="flex space-x-8 overflow-x-auto pb-4">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex-none animate-pulse">
              <div className="h-4 w-16 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
              <div className="h-16 w-16 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
              <div className="h-4 w-16 bg-gray-200 dark:bg-gray-700 rounded"></div>
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
    <div className="weather-card mt-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        24-Hour Forecast
      </h3>
      <div className="flex space-x-8 overflow-x-auto pb-4">
        {forecast.map((hour) => (
          <div key={hour.dt} className="flex-none text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
              {format(new Date(hour.dt * 1000), 'ha')}
            </p>
            <img
              src={`https://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`}
              alt={hour.weather[0].description}
              className="w-16 h-16 mx-auto"
            />
            <p className="font-medium text-gray-900 dark:text-white">
              {Math.round(hour.main.temp)}°C
            </p>
          </div>
        ))}
      </div>
    </div>
  )
} 