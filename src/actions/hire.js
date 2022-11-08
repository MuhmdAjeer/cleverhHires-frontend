import * as API from "../api/jobs";
import { toast } from "react-hot-toast";
import swal from "sweetalert2";

export const becomeHirer = (formData, navigate, loading) => {
  try {
    API.becomeHirer(formData)
      .then((response) => {
        toast.success("Your application has been sended");
      })
      .catch((err) => {
        toast.error("Application failed");
      });
  } catch (error) {}
};
