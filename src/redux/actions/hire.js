import * as API from "../../api/jobs";
import { toast } from "react-hot-toast";



export const becomeHirer = (formData, navigate, loading) => {
    loading(true);
    API.becomeHirer(formData)
    
      .then((response) => {
        loading(false);
        navigate("/");
        toast.success("Your application has been sended");
      })
      .catch((err) => {
        loading(false);
        const error = err.response.data.message;
        toast.error(error);
      });
};



