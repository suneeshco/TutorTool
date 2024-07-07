import axios from 'axios'
import { config } from '../config';


const api = axios.create({
    baseURL: config.authBaseURL,
    withCredentials: true
});


const studentapi = axios.create({
    baseURL: config.studentBaseURL,
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


export const studentapiRequest = async (config) => {
    try {
       const response = await studentapi(config);
       return response.data;
    } catch (error) {
       throw error;
    }
};