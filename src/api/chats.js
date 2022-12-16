import axios from "axios";

const user = JSON.parse(localStorage.getItem("user"));

const token = user?.token;
export const API = axios.create({
  baseURL: "https://localhost:5000/api/v1/chat",
});

export const userChats = () => API.get(`/${user.user._id}`);