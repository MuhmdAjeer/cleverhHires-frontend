import axios from "axios";

const user = JSON.parse(localStorage.getItem("user"));

const token = user?.token;
export const API = axios.create({
  baseURL: "http://localhost:5000/api/v1/message",
});

export const getChatMessages = (chatId) => API.get(`/${chatId}`);
export const addMessage = (message) => API.post('/',message)