import axios from "axios";
import { BASE_API_URL, PUBLIC_API_KEY } from "./costants";

const apiClient = axios.create({
  baseURL: BASE_API_URL,
  params: {
    api_key: PUBLIC_API_KEY,
  },
});

export default apiClient;
