import axios from "axios";
import { BASE_URL_GITHUB } from "../../constantes";
import { errorInterceptor, responseInterceptor } from "./interceptors";

const API = axios.create({
  baseURL: BASE_URL_GITHUB,
});

API.interceptors.response.use(
  (response) => responseInterceptor(response),
  (error) => errorInterceptor(error),
);

export { API };
