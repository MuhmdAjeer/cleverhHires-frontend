import axios from "axios";

// const { token } = JSON.parse(localStorage.getItem('user'))

const user = JSON.parse(localStorage.getItem("user"));

const token = user?.token;
export const API = axios.create({
  baseURL: "https://emarald.online/api/v1//jobs",
});

export const becomeHirer = (formData) =>
  API.post(`hirer/request`, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const getHirer = () =>
  API.post("/hirer", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const postJob = (formData) => API.post('/',formData,{
  headers : {
    Authorization: `Bearer ${token}`,
  }
})

export const getJobs = () => API.get('/',{
  headers : {
    Authorization : `Bearer ${token}`
  }
})

export const applyJob = (jobId,formData) => API.post(`/${jobId}/apply`,formData,{
  headers : {
    Authorization : `Bearer ${token}`
  }
})

export const getUserJobs = ()=> API.get(`my-jobs`,{
  headers : {
    Authorization : `Bearer ${token}`
  }
})

export const getJob = (jobId) => API.get(`${jobId}`,{
  headers: {
    Authorization : `Bearer ${token}`
  }
})
