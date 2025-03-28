import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";
import { fetchGitHubUser } from "./services/githubAPI";

function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async (username) => {
    try {
      setError(null);
      const data = await fetchGitHubUser(username);
      setUser(data);
    } catch (err) {
      setError("User not found!");
      setUser(null);
    }
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold">GitHub User Search</h1>
      <SearchBar onSearch={handleSearch} />
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {user && <UserCard user={user} />}
    </div>
  );
}

export default App;
