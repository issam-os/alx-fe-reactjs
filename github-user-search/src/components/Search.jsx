import { useState } from "react";
import axios from "axios";

const Search = () => {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [repos, setRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchUsers = async () => {
    setLoading(true);
    setError("");
    setUsers([]);

    try {
      let searchQuery = `q=${query}`;
      if (location) searchQuery += `+location:${location}`;
      if (repos) searchQuery += `+repos:>${repos}`;

      const response = await axios.get(
        `https://api.github.com/search/users?${searchQuery}`
      );

      setUsers(response.data.items);
    } catch (err) {
      setError("Error fetching users. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) fetchUsers();
  };

  return (
    <div className="flex flex-col items-center my-6">
      {/* Search Form */}
      <form onSubmit={handleSubmit} className="flex flex-col space-y-3 w-full max-w-md">
        <input
          type="text"
          placeholder="Search GitHub user..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Location (Optional)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="px-4 py-2 border rounded-lg focus:outline-none"
        />
        <input
          type="number"
          placeholder="Min Repositories (Optional)"
          value={repos}
          onChange={(e) => setRepos(e.target.value)}
          className="px-4 py-2 border rounded-lg focus:outline-none"
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

      {/* Search Results */}
      {users.length > 0 && (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {users.map((user) => (
            <div key={user.id} className="p-4 border rounded-lg shadow-lg flex flex-col items-center">
              <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full border" />
              <h2 className="mt-2 text-lg font-semibold">{user.login}</h2>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                View Profile
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
