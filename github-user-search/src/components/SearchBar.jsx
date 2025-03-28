import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    if (input.trim()) {
      onSearch(input);
    }
  };

  return (
    <div className="flex gap-2 mt-4">
      <input
        type="text"
        placeholder="Enter GitHub username..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border p-2 rounded w-full"
      />
      <button onClick={handleSearch} className="bg-blue-500 text-white px-4 py-2 rounded">
        Search
      </button>
    </div>
  );
}

export default SearchBar;
