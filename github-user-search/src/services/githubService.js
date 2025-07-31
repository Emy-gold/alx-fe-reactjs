import axios from "axios";

const BASE_URL = "https://api.github.com/search/users";

/**
 * Search GitHub users with optional filters: location and minRepos
 * @param {string} query - Search text (required)
 * @param {string} location - Optional location filter
 * @param {number} minRepos - Optional minimum public repos filter
 */
export const searchUsers = async (query, location = "", minRepos = 0) => {
    let searchQuery = `${query} in:login`;

    if (location) {
        searchQuery += ` location:${location}`;
    }

    if (minRepos > 0) {
        searchQuery += ` repos:>${minRepos}`;
    }

    try {
        const response = await axios.get(`${BASE_URL}?q=${encodeURIComponent(searchQuery)}`);
        return response.data.items;
    } catch (error) {
        console.error("GitHub API Error:", error);
        throw error;
    }
};
