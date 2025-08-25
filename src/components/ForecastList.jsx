export default function ForecastList({ forecast }) {
  if (!forecast || forecast.length === 0) return null;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-6">
      {forecast.map((day, idx) => (
        <div key={idx} className="bg-white/20 rounded-lg p-4 text-center">
          <p className="font-semibold">{day.date}</p>
          <p>{day.temp}°C</p>
          <p className="text-sm">{day.condition}</p>
        </div>
      ))}
    </div>
  );
}
