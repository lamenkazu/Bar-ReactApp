import axios from "axios";

const devUrl = "http://localhost:3033";
const productionUrl = "";

export const api = axios.create({
  baseURL: devUrl,
  withCredentials: true,
});
