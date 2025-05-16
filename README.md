# Ajker Akash - Weather Forecast

A modern weather forecast application built with React, Vite, and Tailwind CSS. Get real-time weather updates for cities across Bangladesh with a beautiful, responsive interface.

## Features

- Real-time weather data
- 24-hour forecast
- Dynamic day/night cycle visualization
- Responsive design for all devices
- Beautiful weather animations
- Dark mode support
- Location-based weather map
- Sunrise and sunset times
- Weather tips based on conditions

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- HeadlessUI
- Date-fns
- React Icons
- OpenWeatherMap API

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ddjdurjoy/ajkerakash.git
   cd ajkerakash
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your OpenWeatherMap API key:
   ```env
   VITE_OPENWEATHER_API_KEY=your_api_key_here
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Deployment

### Deploying to Vercel

1. Fork this repository to your GitHub account.

2. Create a new project on [Vercel](https://vercel.com).

3. Import your forked repository.

4. Add the following environment variables in your Vercel project settings:
   - `VITE_OPENWEATHER_API_KEY`: Your OpenWeatherMap API key

5. Deploy! Vercel will automatically detect it's a Vite project and use the correct build settings.

### Manual Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. The build output will be in the `dist` directory, which you can deploy to any static hosting service.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Weather data provided by [OpenWeatherMap](https://openweathermap.org/)
- Icons by [React Icons](https://react-icons.github.io/react-icons/)
- UI components by [HeadlessUI](https://headlessui.dev/)
