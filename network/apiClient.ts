import axios from "axios";
import { BASE_API_URL } from "./constants";

const apiClient = axios.create({
  baseURL: BASE_API_URL,
});

export default apiClient;
