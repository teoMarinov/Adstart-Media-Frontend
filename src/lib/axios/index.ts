import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

const baseApi = axios.create({
  baseURL: baseURL,
});

export default baseApi;
