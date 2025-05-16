import axios from 'axios';

const API_KEY = '7dfd64d3046eec455b1c78929635c9c4'; // Replace with your OpenWeatherMap API key
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

const weatherApi = axios.create({
  baseURL: BASE_URL,
  params: {
    appid: API_KEY,
    units: 'metric',
  },
});

export const getWeatherData = async (city) => {
  try {
    const [current, forecast] = await Promise.all([
      weatherApi.get('/weather', { params: { q: `${city},BD` } }),
      weatherApi.get('/forecast', { params: { q: `${city},BD` } }),
    ]);

    return {
      current: current.data,
      hourly: forecast.data.list.slice(0, 24), // Get next 24 hours
    };
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};

export const BANGLADESH_CITIES = [
  'Moulvibazar',
  'Dhaka',
  'Chittagong',
  'Sylhet',
  'Rajshahi',
  'Khulna',
  'Barisal',
  'Rangpur',
  'Comilla',
  'Narayanganj',
  'Gazipur',
  'Bogra',
  'Mymensingh',
  'Jessore',
  'Dinajpur',
  'Tangail',
  'Faridpur',
  'Chandpur',
  'Pabna',
  'Kushtia',
  'Noakhali',
  'Brahmanbaria',
  'Feni',
  'Cox\'s Bazar',
  'Jamalpur',
  'Netrokona',
  'Sunamganj',
  'Habiganj',
  'Bhola',
  'Patuakhali'
]; 