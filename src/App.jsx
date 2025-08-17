import { useState } from "react";
import Search from "./components/Search";
import WeatherCard from "./components/WeatherCard";

function App() {
  const [weather, setWeather] = useState(null);

  const fetchWeather = async (city) => {
    try {
      console.log("Searching for:", city);
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
          import.meta.env.VITE_OPENWEATHER_KEY
        }&units=metric`
      );
      const data = await res.json();
      console.log("API response:", data);

      if (data.cod === 200) {
        setWeather(data);
      } else {
        alert("City not found!");
      }
    } catch (err) {
      console.error("Error fetching weather:", err);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center">Weather Dashboard</h1>
      <Search onSearch={fetchWeather} />
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
}

export default App;
