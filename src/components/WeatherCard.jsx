function WeatherCard({ weather }) {
  if (!weather) return null;

  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-sm mx-auto mt-4">
      <h2 className="text-xl font-bold">{weather.name}</h2>
      <p className="text-gray-600">{weather.weather[0].description}</p>
      <p className="text-2xl font-semibold">{Math.round(weather.main.temp)}°C</p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Wind: {weather.wind.speed} m/s</p>
    </div>
  );
}

export default WeatherCard;
