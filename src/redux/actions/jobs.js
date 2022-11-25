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

export const getJobs = (loading,setJob)=> async(dispatch) => {
  loading(true)
  API.getJobs()
  .then((response)=>{
    dispatch({type:'ALL_JOBS',payload:response.data})
    setJob(response?.data[0])
    loading(false)
    // setJobs(response.data)
  })
  .catch((err)=>{
    loading(false)
    const error = err.response.data.message;
    toast.error(error)
  })
}

export const applyJob = (jobId,formData,closeModal) => async(dispatch) =>{
  API.applyJob(jobId,formData)
  .then((response)=>{
    dispatch({type : 'REFRESH'})
    toast.success('Applied succesfully!')
    closeModal()
  })
  .catch((err)=>{
    const error = err.response.data.message;
    toast.error(error)
  })
}

