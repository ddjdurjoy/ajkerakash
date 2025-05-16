import { WiThermometer, WiHumidity, WiStrongWind, WiBarometer } from 'react-icons/wi'

export default function WeatherCard({ weather, loading }) {
  if (loading) {
    return (
      <div className="weather-card animate-pulse">
        <div className="flex items-center justify-between mb-8">
          <div className="space-y-3">
            <div className="h-12 w-32 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
            <div className="h-6 w-24 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
          </div>
          <div className="h-24 w-24 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="stat-card animate-pulse">
              <div className="h-10 w-10 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
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
        <p className="text-gray-500 dark:text-gray-400 text-center">No weather data available</p>
      </div>
    )
  }

  const { main, weather: conditions, wind } = weather.current

  return (
    <div className="weather-card">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="temp-text">
            {Math.round(main.temp)}°C
          </h2>
          <p className="desc-text capitalize">
            {conditions[0].description}
          </p>
        </div>
        <img
          src={`https://openweathermap.org/img/wn/${conditions[0].icon}@4x.png`}
          alt={conditions[0].description}
          className="weather-icon"
        />
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <WeatherStat
          icon={<WiThermometer />}
          label="Feels Like"
          value={`${Math.round(main.feels_like)}°C`}
        />
        <WeatherStat
          icon={<WiHumidity />}
          label="Humidity"
          value={`${main.humidity}%`}
        />
        <WeatherStat
          icon={<WiStrongWind />}
          label="Wind Speed"
          value={`${Math.round(wind.speed * 3.6)} km/h`}
        />
        <WeatherStat
          icon={<WiBarometer />}
          label="Pressure"
          value={`${main.pressure} hPa`}
        />
      </div>
    </div>
  )
}

function WeatherStat({ icon, label, value }) {
  return (
    <div className="stat-card">
      <div className="stat-icon">{icon}</div>
      <div>
        <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
        <p className="text-lg font-semibold text-gray-900 dark:text-white">{value}</p>
      </div>
    </div>
  )
} 