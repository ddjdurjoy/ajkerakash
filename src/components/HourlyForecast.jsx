import { format } from 'date-fns'

export default function HourlyForecast({ forecast, loading }) {
  if (loading) {
    return (
      <div className="weather-card mt-6">
        <div className="h-6 w-40 bg-gray-200 dark:bg-gray-700 rounded mb-6"></div>
        <div className="forecast-scroll">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="forecast-card animate-pulse">
              <div className="h-4 w-12 mx-auto bg-gray-200 dark:bg-gray-700 rounded mb-3"></div>
              <div className="h-12 w-12 mx-auto bg-gray-200 dark:bg-gray-700 rounded-full mb-3"></div>
              <div className="h-5 w-16 mx-auto bg-gray-200 dark:bg-gray-700 rounded"></div>
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
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
        24-Hour Forecast
      </h3>
      <div className="forecast-scroll">
        {forecast.map((hour) => (
          <div key={hour.dt} className="forecast-card">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
              {format(new Date(hour.dt * 1000), 'ha')}
            </p>
            <img
              src={`https://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`}
              alt={hour.weather[0].description}
              className="w-12 h-12 mx-auto mb-2"
            />
            <p className="text-lg font-semibold text-gray-900 dark:text-white">
              {Math.round(hour.main.temp)}°C
            </p>
          </div>
        ))}
      </div>
    </div>
  )
} 