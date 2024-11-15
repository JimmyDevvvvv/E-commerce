import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8007', // Update this to the correct server URL and port
});

export default axiosInstance;
