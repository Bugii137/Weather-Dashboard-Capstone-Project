// src/services/weatherApi.js
export async function fetchWeather(city) {
  const apiKey = import.meta.env.VITE_OPENWEATHER_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("City not found");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}
