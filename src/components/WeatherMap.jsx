export default function WeatherMap({ location }) {
  // Windy.com map embed URL with Bangladesh coordinates
  const mapUrl = `https://embed.windy.com/embed2.html?lat=23.8103&lon=90.4125&zoom=6&level=surface&overlay=rain&product=ecmwf&menu=&message=true&marker=true&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=default&metricTemp=default&radarRange=-1`

  return (
    <div className="weather-card">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Weather Radar
      </h3>
      <div className="aspect-video rounded-lg overflow-hidden">
        <iframe
          title="Weather Map"
          src={mapUrl}
          frameBorder="0"
          className="w-full h-full"
        ></iframe>
      </div>
    </div>
  )
} 