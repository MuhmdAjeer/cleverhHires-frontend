import * as API from "../../api/jobs";
import { toast } from "react-hot-toast";



export const postJob = (formData, navigate,loading) => {
    loading(true);
    API.postJob(formData)
      .then((response) => {
        loading(false);
        navigate("/jobs");
        toast.success("Job has been published successfully");
      })
      .catch((err) => {
        loading(false);
        const error = err.response.data.message;
        toast.error(error);
      });
};

export const getJobs = (loading,setJobs,setJob)=> async(dispatch) => {
  loading(true)
  API.getJobs()
  .then((response)=>{
    setJob(response?.data[0])
    setJobs(response.data)
  })
  .catch((err)=>{
    loading(false)
    const error = err.response.data.message;
    toast.error(error)
  })
}

export const applyJob = (jobId,formData) => async(dispatch) =>{
  toast.success('Applied succesfully!')
  console.log('dd');
  console.log(formData);
  API.applyJob(jobId,formData)
  .then((response)=>{
  })
  .catch((err)=>{
    const error = err.response.data.message;
    toast.error(error)
  })
}

