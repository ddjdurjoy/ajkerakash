import { WiUmbrella, WiDaySunny, WiRain, WiSnow, WiThunderstorm, WiFog } from 'react-icons/wi'

const tips = {
  // Clear sky
  '01d': {
    icon: <WiDaySunny className="w-6 h-6" />,
    tip: 'Don\'t forget your sunscreen and stay hydrated!',
  },
  '01n': {
    icon: <WiDaySunny className="w-6 h-6" />,
    tip: 'Clear night - perfect for stargazing!',
  },
  // Few clouds
  '02d': {
    icon: <WiDaySunny className="w-6 h-6" />,
    tip: 'Pleasant weather - great for outdoor activities!',
  },
  '02n': {
    icon: <WiDaySunny className="w-6 h-6" />,
    tip: 'Mild night ahead - enjoy the evening!',
  },
  // Scattered/Broken clouds
  '03d': {
    icon: <WiDaySunny className="w-6 h-6" />,
    tip: 'Partly cloudy - perfect for a walk!',
  },
  '03n': {
    icon: <WiDaySunny className="w-6 h-6" />,
    tip: 'Cloudy night - mild temperatures expected.',
  },
  '04d': {
    icon: <WiDaySunny className="w-6 h-6" />,
    tip: 'Overcast but dry - good for outdoor plans.',
  },
  '04n': {
    icon: <WiDaySunny className="w-6 h-6" />,
    tip: 'Cloudy night - mild conditions continue.',
  },
  // Rain
  '09d': {
    icon: <WiRain className="w-6 h-6" />,
    tip: 'Showers expected - carry an umbrella!',
  },
  '09n': {
    icon: <WiRain className="w-6 h-6" />,
    tip: 'Rainy night - drive carefully!',
  },
  '10d': {
    icon: <WiUmbrella className="w-6 h-6" />,
    tip: 'Rain expected - keep dry and carry an umbrella!',
  },
  '10n': {
    icon: <WiUmbrella className="w-6 h-6" />,
    tip: 'Rainy night - stay indoors if possible.',
  },
  // Thunderstorm
  '11d': {
    icon: <WiThunderstorm className="w-6 h-6" />,
    tip: 'Thunderstorms - stay indoors and away from windows!',
  },
  '11n': {
    icon: <WiThunderstorm className="w-6 h-6" />,
    tip: 'Thunderstorms tonight - stay safe indoors!',
  },
  // Snow
  '13d': {
    icon: <WiSnow className="w-6 h-6" />,
    tip: 'Snowy conditions - dress warmly!',
  },
  '13n': {
    icon: <WiSnow className="w-6 h-6" />,
    tip: 'Snowy night - avoid unnecessary travel.',
  },
  // Mist/Fog
  '50d': {
    icon: <WiFog className="w-6 h-6" />,
    tip: 'Poor visibility - drive carefully!',
  },
  '50n': {
    icon: <WiFog className="w-6 h-6" />,
    tip: 'Foggy night - reduce speed while driving.',
  },
};

export default function WeatherTips({ weatherCode }) {
  const tip = tips[weatherCode] || tips['01d'];

  return (
    <div className="weather-card mt-6">
      <div className="flex items-center space-x-3">
        <div className="text-accent">{tip.icon}</div>
        <p className="text-gray-600 dark:text-gray-300">{tip.tip}</p>
      </div>
    </div>
  );
} 