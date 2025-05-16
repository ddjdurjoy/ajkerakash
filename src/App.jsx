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
    <div className={`min-h-screen transition-colors duration-500 ${theme?.background || 'bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800'}`}>
      <div className="weather-container py-12">
        <div className="max-w-sm mx-auto mb-12">
          <LocationSelector 
            currentLocation={location} 
            onLocationChange={setLocation} 
          />
        </div>
        
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <div className="transform hover:scale-[1.02] transition-transform duration-300">
              <WeatherCard weather={weather} loading={loading} />
            </div>
            
            <div className="transform hover:scale-[1.02] transition-transform duration-300">
              <HourlyForecast forecast={weather?.hourly} loading={loading} />
            </div>
            
            {weather?.current && (
              <div className="transform hover:scale-[1.02] transition-transform duration-300">
                <WeatherTips weatherCode={weather.current.weather[0].icon} />
              </div>
            )}
          </div>
          
          <div className="space-y-8">
            <div className="transform hover:scale-[1.02] transition-transform duration-300">
              <DateTimeDisplay />
            </div>
            
            <div className="transform hover:scale-[1.02] transition-transform duration-300">
              <WeatherMap location={location} />
            </div>
          </div>
        </div>
      </div>
      
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/5 dark:to-black/20"></div>
      </div>
    </div>
  )
}

export default App
