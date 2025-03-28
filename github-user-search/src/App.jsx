import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";
import { fetchUserData } from "./services/githubService";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (username) => {
    setLoading(true);
    setError(null);
    setUser(null);

    try {
      const data = await fetchUserData(username);
      setUser(data);
    } catch (err) {
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold">GitHub User Search</h1>
      <SearchBar onSearch={handleSearch} />
      {loading && <p className="text-gray-600 mt-2">Loading...</p>}
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {user && <UserCard user={user} />}
    </div>
  );
}

export default App;
