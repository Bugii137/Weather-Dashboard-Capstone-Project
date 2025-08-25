import { useState } from "react";
import { getCurrentWeather, getForecast } from "../utils/api";

export default function useWeather() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async (city, unit = "metric") => {
    setLoading(true);
    setError(null);
    try {
      const current = await getCurrentWeather(city, unit);
      const forecastData = await getForecast(city, unit);

      setWeather(current);
      setForecast(forecastData);
    } catch (err) {
      setError("City not found or API error.");
    } finally {
      setLoading(false);
    }
  };

  return { weather, forecast, loading, error, fetchWeather };
}
