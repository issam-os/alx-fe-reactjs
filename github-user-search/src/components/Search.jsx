import { useState } from "react";
import axios from "axios";

const Search = () => {
  const [query, setQuery] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchUserData = async (username) => {
    setLoading(true);
    setError("");
    setUser(null);

    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUser(response.data);
    } catch (err) {
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      fetchUserData(query);
    }
  };

  return (
    <div className="flex flex-col items-center my-4">
      {/* Search Input */}
      <form onSubmit={handleSubmit} className="flex space-x-2">
        <input
          type="text"
          placeholder="Search GitHub user..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {/* Loading State */}
      {loading && <p className="mt-4 text-gray-500">Loading...</p>}

      {/* Error Message */}
      {error && <p className="mt-4 text-red-500">{error}</p>}

      {/* User Info Display */}
      {user && (
        <div className="mt-6 p-4 border rounded-lg shadow-lg flex flex-col items-center">
          <img
            src={user.avatar_url}
            alt="User Avatar"
            className="w-24 h-24 rounded-full border"
          />
          <h2 className="mt-2 text-xl font-semibold">{user.login}</h2>
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 text-blue-500 hover
