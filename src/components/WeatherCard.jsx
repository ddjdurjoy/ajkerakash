import { WiThermometer, WiHumidity, WiStrongWind, WiBarometer } from 'react-icons/wi'

export default function WeatherCard({ weather, loading }) {
  if (loading) {
    return (
      <div className="weather-card animate-pulse">
        <div className="h-32 bg-gray-200 dark:bg-gray-700 rounded-lg mb-4"></div>
        <div className="space-y-3">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
        </div>
      </div>
    )
  }

  if (!weather?.current) {
    return (
      <div className="weather-card">
        <p className="text-gray-500 dark:text-gray-400">No weather data available</p>
      </div>
    )
  }

  const { main, weather: conditions, wind } = weather.current

  return (
    <div className="weather-card">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            {Math.round(main.temp)}°C
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 capitalize">
            {conditions[0].description}
          </p>
        </div>
        <img
          src={`https://openweathermap.org/img/wn/${conditions[0].icon}@4x.png`}
          alt={conditions[0].description}
          className="w-24 h-24"
        />
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <WeatherStat
          icon={<WiThermometer className="w-6 h-6" />}
          label="Feels Like"
          value={`${Math.round(main.feels_like)}°C`}
        />
        <WeatherStat
          icon={<WiHumidity className="w-6 h-6" />}
          label="Humidity"
          value={`${main.humidity}%`}
        />
        <WeatherStat
          icon={<WiStrongWind className="w-6 h-6" />}
          label="Wind Speed"
          value={`${Math.round(wind.speed * 3.6)} km/h`}
        />
        <WeatherStat
          icon={<WiBarometer className="w-6 h-6" />}
          label="Pressure"
          value={`${main.pressure} hPa`}
        />
      </div>
    </div>
  )
}

function WeatherStat({ icon, label, value }) {
  return (
    <div className="flex items-center space-x-2">
      <div className="text-gray-500 dark:text-gray-400">{icon}</div>
      <div>
        <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
        <p className="font-medium text-gray-900 dark:text-white">{value}</p>
      </div>
    </div>
  )
} 