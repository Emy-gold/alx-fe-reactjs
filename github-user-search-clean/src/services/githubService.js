import axios from 'axios';

const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

export const fetchGithubUser = async (username) => {
    const response = await axios.get(`https://api.githun.com/users/${username}`, {
        headers: API_KEY ? { Autorization: `token ${API_KEY}` } : {},
    });
    return response.data;
};