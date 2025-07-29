import axios from 'axios';

const API_URL = 'https://api.github.com/users';

// Function to fetch user data
export const getUserData = async (username) => {
    try {
        const response = await axios.get(`${API_URL}/${username}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching user data:", error);
        throw error;
    }
};
