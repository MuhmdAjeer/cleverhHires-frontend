import axios from "axios";

// const { token } = JSON.parse(localStorage.getItem('user'))

const user = JSON.parse(localStorage.getItem("user"));

const token = user?.token;
export const API = axios.create({
  baseURL: "http://localhost:5000/api/v1/user",
});

//AUTH
export const signup = (formData) => API.post("/signup", formData);
export const signin = (formData) => API.post("/signin", formData);
export const verifyOtp = (formData) =>
  API.post("/verifyotp", formData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

//POSTS
export const uploadPost = (formData) =>
  API.post("/post", formData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

//hirer
