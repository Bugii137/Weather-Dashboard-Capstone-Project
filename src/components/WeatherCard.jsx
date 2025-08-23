function WeatherCard({ data }) {
  return (
    <div className="bg-white shadow-md rounded p-6 mt-6 w-80 text-center">
      <h2 className="text-2xl font-semibold">{data.name}</h2>
      <p className="text-lg">{data.weather[0].description}</p>
      <p className="text-4xl font-bold">{Math.round(data.main.temp)}°C</p>
      <div className="flex justify-between mt-4 text-sm">
        <span>Humidity: {data.main.humidity}%</span>
        <span>Wind: {data.wind.speed} m/s</span>
      </div>
    </div>
  );
}

export default WeatherCard;
