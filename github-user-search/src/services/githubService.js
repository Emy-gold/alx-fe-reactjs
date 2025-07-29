import axios from 'axios';

const API_URL = 'https://api.github.com';
const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

const githubAxios = axios.create({
    baseURL: API_URL,
    headers: {
        'Authorization': `token ${API_KEY}`,
        'Accept': 'application/vnd.github.v3+json'
    }
});

export const fetchGithubUser = async (username) => {
    try {
        const response = await githubAxios.get(`/users/${username}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user:', error);
        throw error;
    }
};

export const searchGithubUsers = async (query) => {
    try {
        const response = await githubAxios.get(`/search/users?q=${encodeURIComponent(query)}`);
        return response.data;
    } catch (error) {
        console.error('Error searching users:', error);
        throw error;
    }
};