import axios from "axios";


export const API = axios.create({
  baseURL: "http://localhost:5000/api/v1/admin",
});


export const signup = (formData) => API.post("/login", formData);