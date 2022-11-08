import * as API from '../api/index'
import { SIGNUP, SIGNIN } from '../constants/actionTypes'
import { toast } from 'react-hot-toast'


export const uploadPost = (formData) => async (dispatch) => {
    try {
        API.uploadPost(formData)
        .then((response)=> {
            console.log(response.data);
        })
        .catch(err => {
            console.log(err);
        })
    } catch (error) {

    }
}