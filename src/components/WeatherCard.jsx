import { WiThermometer, WiHumidity, WiStrongWind, WiBarometer } from 'react-icons/wi'

export default function WeatherCard({ weather, loading }) {
  if (loading) {
    return (
      <div className="weather-card animate-pulse">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8">
          <div className="space-y-3 text-center sm:text-left mb-4 sm:mb-0">
            <div className="h-16 w-40 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
            <div className="h-8 w-32 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
          </div>
          <div className="h-32 w-32 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="stat-card animate-pulse">
              <div className="h-12 w-12 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
              <div className="space-y-2 flex-1">
                <div className="h-4 w-16 bg-gray-200 dark:bg-gray-700 rounded"></div>
                <div className="h-6 w-20 bg-gray-200 dark:bg-gray-700 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (!weather?.current) {
    return (
      <div className="weather-card">
        <div className="flex items-center justify-center h-48">
          <p className="text-gray-500 dark:text-gray-400 text-lg">No weather data available</p>
        </div>
      </div>
    )
  }

  const { main, weather: conditions, wind } = weather.current

  return (
    <div className="weather-card backdrop-blur-md bg-white/30 dark:bg-gray-800/30">
      <div className="flex flex-col sm:flex-row items-center justify-between mb-8">
        <div className="text-center sm:text-left mb-4 sm:mb-0">
          <h2 className="temp-text mb-2">
            {Math.round(main.temp)}°C
          </h2>
          <div className="flex items-center justify-center sm:justify-start space-x-2">
            <img
              src={`https://openweathermap.org/img/wn/${conditions[0].icon}.png`}
              alt={conditions[0].description}
              className="w-8 h-8"
            />
            <p className="desc-text capitalize">
              {conditions[0].description}
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-blue-600/30 dark:from-blue-500/20 dark:to-blue-700/20 rounded-full blur-md"></div>
          <img
            src={`https://openweathermap.org/img/wn/${conditions[0].icon}@4x.png`}
            alt={conditions[0].description}
            className="weather-icon relative z-10 transform hover:scale-110 transition-transform duration-300"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <WeatherStat
          icon={<WiThermometer className="text-orange-500 dark:text-orange-400" />}
          label="Feels Like"
          value={`${Math.round(main.feels_like)}°C`}
        />
        <WeatherStat
          icon={<WiHumidity className="text-blue-500 dark:text-blue-400" />}
          label="Humidity"
          value={`${main.humidity}%`}
        />
        <WeatherStat
          icon={<WiStrongWind className="text-teal-500 dark:text-teal-400" />}
          label="Wind Speed"
          value={`${Math.round(wind.speed * 3.6)} km/h`}
        />
        <WeatherStat
          icon={<WiBarometer className="text-purple-500 dark:text-purple-400" />}
          label="Pressure"
          value={`${main.pressure} hPa`}
        />
      </div>
    </div>
  )
}

function WeatherStat({ icon, label, value }) {
  return (
    <div className="stat-card hover:bg-white/50 dark:hover:bg-gray-700/50 transition-colors duration-300">
      <div className="stat-icon text-3xl">{icon}</div>
      <div>
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{label}</p>
        <p className="text-lg font-semibold text-gray-900 dark:text-white">{value}</p>
      </div>
    </div>
  )
} 