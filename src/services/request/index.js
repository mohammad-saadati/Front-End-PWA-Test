import axios from "axios";

const configAxios = function() {
  let config = {
    timeout: 15000,
    withCredentials: false,
    baseURL: 'https://reqres.in/',
  };

  const request = axios.create(config);

  return request;
};

const request = function() {
  let instance = configAxios();
  return instance.request(...arguments);
};

export default request;
