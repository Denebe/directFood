import axios from 'axios';

const PROXY_URL = window.location.hostname === 'localhost' ? '' : '/proxy';

const instance = axios.create({
  baseURL: `${PROXY_URL}`,
});

instance.interceptors.request.use(
  function (config) {
    config.headers['Content-Type'] = 'application/json';
    return config;
  },
  function (error) {
    //request 에러
    console.log(error)
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    console.log(response.data.I2715.row)
    return response.data.I2715.row;
  }
);

export default instance;
