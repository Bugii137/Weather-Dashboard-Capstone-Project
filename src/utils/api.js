// src/utils/api.js
const API_KEY = import.meta.env.VITE_OPENWEATHER_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5";

// Get current weather by city
export const fetchCurrentWeather = async (city) => {
  try {
    const res = await fetch(
      `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    if (!res.ok) throw new Error("Failed to fetch weather data");
    return await res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Get 5-day forecast
export const fetchForecast = async (city) => {
  try {
    const res = await fetch(
      `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`
    );
    if (!res.ok) throw new Error("Failed to fetch forecast");
    return await res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
