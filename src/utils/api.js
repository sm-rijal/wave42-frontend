
import axios from 'axios';

const baseURL = 'http://103.161.184.70/';

const api = axios.create({
    baseURL,
    // timeout: 10000,
    // headers: {
    //   'Content-Type': 'application/json',
    // },
});

export default api;
