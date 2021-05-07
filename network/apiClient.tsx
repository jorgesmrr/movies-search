import axios from "axios";
import { BASE_API_URL } from "./costants";

const apiClient = axios.create({
  baseURL: BASE_API_URL,
  params: {
    api_key: process.env.API_KEY,
  },
});

export default apiClient;
