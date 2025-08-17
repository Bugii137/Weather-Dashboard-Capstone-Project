// src/components/WeatherCard.jsx
function WeatherCard({ weather }) {
  if (!weather) return null;

  const { name, main, weather: details } = weather;
  const { temp, humidity } = main;
  const { description, icon } = details[0];

  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-sm mx-auto text-center">
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt={description}
        className="mx-auto"
      />
      <p className="text-2xl font-semibold">{temp}°C</p>
      <p className="capitalize">{description}</p>
      <p className="text-sm text-gray-500">Humidity: {humidity}%</p>
    </div>
  );
}

export default WeatherCard;
