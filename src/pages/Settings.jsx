import ThemeToggle from "../components/ThemeToggle";

export default function Settings({ darkMode, setDarkMode }) {
  return (
    <div className="container mx-auto px-4 py-10 text-center">
      <h1 className="text-3xl font-bold mb-6">⚙️ Settings</h1>
      <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}
