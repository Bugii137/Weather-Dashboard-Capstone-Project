import { useState } from "react";

function Search({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() !== "") {
      onSearch(city);
      setCity("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center mt-6">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
        className="border rounded-l px-4 py-2 w-64"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 rounded-r"
      >
        Search
      </button>
    </form>
  );
}

export default Search;
import React from "react";
