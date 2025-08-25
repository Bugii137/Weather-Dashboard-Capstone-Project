import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import ErrorMessage from "./components/ErrorMessage";
import { fetchWeather } from "./services/weatherApi";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async (cityName) => {
    try {
      const data = await fetchWeather(cityName);
      if (data.cod === 200) {
        setWeatherData(data);
        setError("");
      } else {
        setError(data.message);
        setWeatherData(null);
      }
    } catch {
      setError("Network error. Try again.");
      setWeatherData(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white">Weather Dashboard</h1>
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage error={error} />}
      {weatherData && <WeatherCard weatherData={weatherData} />}
    </div>
  );
}

export default App;
