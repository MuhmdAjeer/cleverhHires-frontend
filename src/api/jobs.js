import axios from "axios";

// const { token } = JSON.parse(localStorage.getItem('user'))

const user = JSON.parse(localStorage.getItem("user"));

const token = user?.token;
export const API = axios.create({
  baseURL: "http://localhost:5000/api/v1/jobs",
});

export const becomeHirer = (formData) =>
  API.post("/hirer", formData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
