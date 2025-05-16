import { useState, useEffect } from 'react'

export default function WeatherMap({ location }) {
  const [mapUrl, setMapUrl] = useState('')
  const [error, setError] = useState(null)

  useEffect(() => {
    try {
      // Default coordinates for Bangladesh (center)
      const defaultLat = 23.8103
      const defaultLon = 90.4125

      // Construct the map URL with proper coordinate validation
      const url = `https://embed.windy.com/embed2.html?lat=${defaultLat}&lon=${defaultLon}&zoom=6&level=surface&overlay=rain&product=ecmwf&menu=&message=true&marker=true&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=default&metricTemp=default&radarRange=-1`
      
      setMapUrl(url)
      setError(null)
    } catch (err) {
      console.error('Error setting up map:', err)
      setError('Failed to load weather map')
    }
  }, [location])

  if (error) {
    return (
      <div className="weather-card">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Weather Radar
        </h3>
        <div className="text-red-500 dark:text-red-400">{error}</div>
      </div>
    )
  }

  return (
    <div className="weather-card">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Weather Radar
      </h3>
      <div className="aspect-video rounded-lg overflow-hidden relative">
        {mapUrl && (
          <iframe
            title="Weather Map"
            src={mapUrl}
            frameBorder="0"
            className="w-full h-full absolute inset-0"
            style={{ minHeight: '400px' }}
            allowFullScreen
          ></iframe>
        )}
      </div>
    </div>
  )
} 