import WeatherCard from "../components/WeatherCard";
import ForecastTabs from "../components/ForecastTabs";
import ForecastList from "../components/ForecastList";
import SettingsPanel from "../components/SettingsPanel";
import ErrorMessage from "../components/ErrorMessage";
import Loader from "../components/Loader";

export default function Dashboard({
  weather,
  forecast,
  loading,
  error,
  activeTab,
  setActiveTab,
  unit,
  setUnit,
}) {
  return (
    <div className="container mx-auto px-4 py-10 text-center">
      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {weather && <WeatherCard weather={weather} />}

      <ForecastTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <ForecastList forecast={forecast} />

      <SettingsPanel unit={unit} setUnit={setUnit} />
    </div>
  );
}
