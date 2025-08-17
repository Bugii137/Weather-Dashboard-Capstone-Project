function WeatherCard({ weather }) {
  return (
    <div className="mt-6 text-center p-4 border rounded shadow w-80 mx-auto">
      <h2 className="text-xl font-bold">{weather.name}</h2>
      <p className="text-lg">{weather.main.temp}°C</p>
      <p>{weather.weather[0].description}</p>
    </div>
  );
}

export default WeatherCard;
