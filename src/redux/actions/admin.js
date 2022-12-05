import * as ADMIN from '../../api/admin'
import toast from 'react-hot-toast'

export const adminLogin = (formdata,navigate,loading) => async(dispatch)=> {
    ADMIN.signup(formdata)
    .then((response)=>{
        loading(false)
        navigate('/')
    })
    .catch((error)=> {
        loading(false)
        const err = error.response.data.message;
        toast.error(err)
    })
}