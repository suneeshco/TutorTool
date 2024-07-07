import axios from 'axios'

const api = axios.create({
    baseURL: config.authBaseURL,
    withCredentials: true
});

export const apiRequest = async (config) => {
    try {
       const response = await api(config);
       return response.data;
    } catch (error) {
       throw error;
    }
};