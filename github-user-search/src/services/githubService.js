import axios from "axios";

const BASE_URL = "https://api.github.com/search/users?q=";

/**
 * Fetch GitHub users based on search criteria.
 * @param {string} username - The GitHub username to search for.
 * @param {string} location - (Optional) Filter users by location.
 * @param {number} minRepos - (Optional) Minimum number of public repositories.
 * @returns {Promise} - Resolves with user data from GitHub API.
 */
export const fetchUsers = async (username, location = "", minRepos = 0) => {
  try {
    let query = `${username}`;
    
    // Append location filter if provided
    if (location) {
      query += `+location:${location}`;
    }

    // Append min repository filter if provided
    if (minRepos > 0) {
      query += `+repos:>${minRepos}`;
    }

    // Make the API request
    const response = await axios.get(`${BASE_URL}${query}`);
    
    return response.data.items; // GitHub API returns users in `items` array
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};
