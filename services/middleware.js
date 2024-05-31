import axios from 'axios';

axios.interceptors.response.use(function (response) {
    // Aqui todo va bien
    return response;
}, function (error) {
    // Aqui ha habido un error
    return Promise.reject(error);
});

export default axios;
