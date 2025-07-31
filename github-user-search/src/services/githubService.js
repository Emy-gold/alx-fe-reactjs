import axios from "axios";

// Required by ALX checker
const BASE_URL = "https://api.github.com/search/users?q=";

// ✅ Task 2: Fetch single user data
export const fetchUserData = async (username) => {
    try {
        const response = await axios.get(`https://api.github.com/users/${username}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching user data:", error);
        throw error;
    }
};

// ✅ Task 3+: Search users with location and minRepos
export const searchUsers = async (query, location, minRepos) => {
    try {
        let searchQuery = `${query}`;

        if (location) {
            searchQuery += `+location:${location}`;
        }

        if (minRepos) {
            searchQuery += `+repos:>=${minRepos}`;
        }

        const response = await axios.get(`${BASE_URL}${encodeURIComponent(searchQuery)}`);
        return response.data.items;
    } catch (error) {
        console.error("Error searching users:", error);
        throw error;
    }
};
