import githubApi from './githubApi';

const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

export const fetchGithubUser = async (username) => {
    const response = await githubApi.get(`users/${username}`);
    return response.data;
};

export const searchGithubUsers = async (query) => {
    const response = await githubApi.get(`search/users?q=${encodeURIComponent(query)}`);
    return response.data;
};