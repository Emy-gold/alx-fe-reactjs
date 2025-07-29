import githubApi from './githubApi';

// ✅ Basic user search by username
export const fetchUserData = async (username) => {
    const response = await githubApi.get(`users/${username}`);
    return response.data;
};

// ✅ Advanced search with filters (optional)
export const searchGithubUsers = async (query) => {
    const response = await githubApi.get(`search/users?q=${encodeURIComponent(query)}`);
    return response.data;
};
