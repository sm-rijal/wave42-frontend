
import axios from 'axios';

const baseURL = 'https://api-wave42.samsul-rijal.my.id/';

const api = axios.create({
    baseURL,
    // timeout: 10000,
    // headers: {
    //   'Content-Type': 'application/json',
    // },
});

export default api;
