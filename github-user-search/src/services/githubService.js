import axios from "axios";

export const fetchUsers = async (query, location = "", repos = "") => {
  try {
    let searchQuery = `q=${query}`;
    if (location) searchQuery += `+location:${location}`;
    if (repos) searchQuery += `+repos:>${repos}`;

    const response = await axios.get(
      `https://api.github.com/search/users?${searchQuery}`
    );

    return response.data.items;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};
