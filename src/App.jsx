import { useState, useEffect } from 'react'
import { getWeatherData } from './api/weatherApi'
import WeatherCard from './components/WeatherCard'
import HourlyForecast from './components/HourlyForecast'
import DateTimeDisplay from './components/DateTimeDisplay'
import LocationSelector from './components/LocationSelector'
import WeatherMap from './components/WeatherMap'
import WeatherTips from './components/WeatherTips'
import { getWeatherTheme } from './utils/weatherTheme'

function App() {
  const [location, setLocation] = useState('Moulvibazar')
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchWeather() {
      try {
        setLoading(true)
        const data = await getWeatherData(location)
        setWeather(data)
      } catch (error) {
        console.error('Error fetching weather:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchWeather()
  }, [location])

  const theme = weather?.current ? getWeatherTheme(weather.current.weather[0].icon) : null

  return (
    <div className={`min-h-screen transition-colors duration-500 ${theme?.background || 'bg-gray-50'}`}>
      <div className="weather-container py-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <LocationSelector 
              currentLocation={location} 
              onLocationChange={setLocation} 
            />
            <WeatherCard weather={weather} loading={loading} />
            <HourlyForecast forecast={weather?.hourly} loading={loading} />
            {weather?.current && (
              <WeatherTips weatherCode={weather.current.weather[0].icon} />
            )}
          </div>
          <div className="space-y-6">
            <DateTimeDisplay />
            <WeatherMap location={location} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
