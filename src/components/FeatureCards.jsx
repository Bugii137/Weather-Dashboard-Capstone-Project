export default function FeatureCards() {
  const features = [
    { title: "Real-Time Weather", icon: "🌤" },
    { title: "5-Day Forecast", icon: "📅" },
    { title: "Dark/Light Mode", icon: "🌙" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
      {features.map((f, idx) => (
        <div key={idx} className="bg-white/10 p-6 rounded-xl text-center">
          <span className="text-3xl">{f.icon}</span>
          <h3 className="mt-2 font-bold">{f.title}</h3>
        </div>
      ))}
    </div>
  );
}
