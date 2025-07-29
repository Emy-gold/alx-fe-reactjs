import axios from 'axios';

const githubApi = axios.create({
    baseURL: 'https://api.github.com',
    headers: {
        'Authorization': `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`,
        'Accept': 'application/vnd.github.v3+json'
    }
});

export default githubApi;