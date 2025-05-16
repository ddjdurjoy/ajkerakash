import { useState, useEffect } from 'react'
import WeatherCard from '../components/WeatherCard'
import HourlyForecast from '../components/HourlyForecast'
import DateTimeDisplay from '../components/DateTimeDisplay'
import LocationSelector from '../components/LocationSelector'
import WeatherMap from '../components/WeatherMap'

function Home() {
  const [location, setLocation] = useState('Moulvibazar')
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // TODO: Fetch weather data based on location
  }, [location])

  return (
    <div className="weather-container">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <LocationSelector 
            currentLocation={location} 
            onLocationChange={setLocation} 
          />
          <WeatherCard weather={weather} loading={loading} />
          <HourlyForecast forecast={weather?.hourly} loading={loading} />
        </div>
        <div className="space-y-6">
          <DateTimeDisplay location={location} />
          <WeatherMap location={location} />
        </div>
      </div>
    </div>
  )
}

export default Home 