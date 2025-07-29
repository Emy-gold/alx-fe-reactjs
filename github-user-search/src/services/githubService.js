import axios from 'axios';

const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

// ✅ Basic: Fetch a single GitHub user by username
export const fetchUserData = async (username) => {
    const response = await axios.get(`https://api.github.com/users/${username}`, {
        headers: API_KEY ? { Authorization: `token ${API_KEY}` } : {},
    });
    return response.data;
};

// ✅ Advanced: Search GitHub users with query
export const searchGithubUsers = async (query) => {
    const response = await axios.get(`https://api.github.com/search/users?q=${encodeURIComponent(query)}`, {
        headers: API_KEY ? { Authorization: `token ${API_KEY}` } : {},
    });
    return response.data;
};
