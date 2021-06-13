import axios from "axios";
import { TMDB_BASE_API_URL, TMDB_PUBLIC_API_KEY } from "./_constants";

const apiClient = axios.create({
  baseURL: TMDB_BASE_API_URL,
  params: {
    api_key: TMDB_PUBLIC_API_KEY,
  },
});

export default apiClient;
