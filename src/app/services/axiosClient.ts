import axios from "axios";

export const animeApi = axios.create({
  baseURL: "https://api.jikan.moe/v4",
  timeout: 5000,
});
