// src/App.jsx
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import { fetchWeather } from "./services/weatherApi";

function App() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async (city) => {
    try {
      setError("");
      const data = await fetchWeather(city);
      setWeather(data);
    } catch (err) {
      setWeather(null);
      setError("City not found. Try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">Weather Dashboard 🌤️</h1>
      <SearchBar onSearch={handleSearch} />
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <WeatherCard weather={weather} />
    </div>
  );
}

export default App;
