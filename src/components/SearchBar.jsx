import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      onSearch(query);
      setQuery("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter city name..."
        className="px-4 py-2 rounded-lg text-black w-64"
      />
      <button type="submit" className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700">
        Search
      </button>
    </form>
  );
}
