export default function SettingsPanel({ unit, setUnit }) {
  return (
    <div className="flex justify-center gap-4 mt-6">
      <button
        onClick={() => setUnit("metric")}
        className={`px-4 py-2 rounded-lg ${
          unit === "metric" ? "bg-blue-600" : "bg-gray-700"
        }`}
      >
        °C
      </button>
      <button
        onClick={() => setUnit("imperial")}
        className={`px-4 py-2 rounded-lg ${
          unit === "imperial" ? "bg-blue-600" : "bg-gray-700"
        }`}
      >
        °F
      </button>
    </div>
  );
}
