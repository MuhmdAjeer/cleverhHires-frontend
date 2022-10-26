import axios from 'axios'

const API = axios.create({ baseURL : 'http://localhost:5000/api/v1/user' })

export const signup = formData => API.post('/signup',formData);
export const signin = formData => API.post('/signin',formData); 
