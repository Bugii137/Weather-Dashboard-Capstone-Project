export default function ForecastTabs({ activeTab, setActiveTab }) {
  const tabs = ["Today", "5-Day", "Hourly"];

  return (
    <div className="flex justify-center gap-4 mt-6">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-4 py-2 rounded-lg ${
            activeTab === tab ? "bg-blue-600" : "bg-gray-700"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
