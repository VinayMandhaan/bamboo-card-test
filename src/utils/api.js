import axios from 'axios';

const api = axios.create({
    baseURL: 'https://dummyjson.com',
    timeout: 10000,
});

api.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        return Promise.reject(error);
    },
);

export default api;