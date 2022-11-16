import * as API from "../api/jobs";
import { toast } from "react-hot-toast";



export const postJob = (formData, navigate,loading) => {
    loading(true);
    API.postJob(formData)
      .then((response) => {
        loading(false);
        navigate("/x");
        toast.success("Job has been published successfully");
      })
      .catch((err) => {
        loading(false);
        const error = err.response.data.message;
        toast.error(error);
      });
};