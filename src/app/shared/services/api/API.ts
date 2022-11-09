import axios from "axios";
import { BASE_URL } from "../../constantes";
import { errorInterceptor, responseInterceptor } from "./interceptors";

const API = axios.create({
  baseURL: BASE_URL,
});

API.interceptors.response.use(
  (response) => responseInterceptor(response),
  (error) => errorInterceptor(error),
);

export { API };
