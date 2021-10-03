import axios from "axios";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

const api = axios.create({
  baseURL: publicRuntimeConfig.API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Add a request interceptor
api.interceptors.request.use(async function (config) {
  config.timeout = 10000; // will wait 10 seconds before timing out

  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

api.interceptors.response.use(
  (response) => {
    if (response.data) {
      return response.data;
    } else {
      return response;
    }
  },
  async (error) => {
    return Promise.reject(error);
  }
);

export default api;
