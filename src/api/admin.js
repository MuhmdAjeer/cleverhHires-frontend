import axios from "axios";


export const API = axios.create({
  baseURL: "http://emarald.online/api/v1/admin",
});


export const signup = (formData) => API.post("/login", formData);