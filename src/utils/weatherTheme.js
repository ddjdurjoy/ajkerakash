export const getWeatherTheme = (weatherCode, isNight = false) => {
  // Weather condition codes: https://openweathermap.org/weather-conditions
  const themes = {
    // Clear sky
    '01d': {
      background: 'bg-gradient-to-br from-sky-400 to-blue-500',
      text: 'text-white',
    },
    '01n': {
      background: 'bg-gradient-to-br from-gray-900 to-blue-900',
      text: 'text-white',
    },
    // Few clouds
    '02d': {
      background: 'bg-gradient-to-br from-blue-300 to-blue-400',
      text: 'text-white',
    },
    '02n': {
      background: 'bg-gradient-to-br from-gray-800 to-blue-800',
      text: 'text-white',
    },
    // Scattered clouds
    '03d': {
      background: 'bg-gradient-to-br from-blue-200 to-gray-300',
      text: 'text-gray-800',
    },
    '03n': {
      background: 'bg-gradient-to-br from-gray-700 to-blue-700',
      text: 'text-white',
    },
    // Broken clouds
    '04d': {
      background: 'bg-gradient-to-br from-gray-300 to-gray-400',
      text: 'text-gray-800',
    },
    '04n': {
      background: 'bg-gradient-to-br from-gray-800 to-gray-900',
      text: 'text-white',
    },
    // Shower rain
    '09d': {
      background: 'bg-gradient-to-br from-blue-600 to-blue-700',
      text: 'text-white',
    },
    '09n': {
      background: 'bg-gradient-to-br from-blue-900 to-gray-900',
      text: 'text-white',
    },
    // Rain
    '10d': {
      background: 'bg-gradient-to-br from-blue-500 to-blue-600',
      text: 'text-white',
    },
    '10n': {
      background: 'bg-gradient-to-br from-blue-800 to-gray-900',
      text: 'text-white',
    },
    // Thunderstorm
    '11d': {
      background: 'bg-gradient-to-br from-gray-600 to-gray-800',
      text: 'text-white',
    },
    '11n': {
      background: 'bg-gradient-to-br from-gray-900 to-blue-900',
      text: 'text-white',
    },
    // Snow
    '13d': {
      background: 'bg-gradient-to-br from-blue-100 to-gray-200',
      text: 'text-gray-800',
    },
    '13n': {
      background: 'bg-gradient-to-br from-gray-200 to-blue-200',
      text: 'text-gray-800',
    },
    // Mist
    '50d': {
      background: 'bg-gradient-to-br from-gray-400 to-gray-500',
      text: 'text-white',
    },
    '50n': {
      background: 'bg-gradient-to-br from-gray-700 to-gray-800',
      text: 'text-white',
    },
  };

  return themes[weatherCode] || themes['01d']; // Default to clear sky day if code not found
}; 