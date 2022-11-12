import * as API from '../api/index'
import { SIGNUP, SIGNIN } from '../constants/actionTypes'
import { toast } from 'react-hot-toast'


export const getAllPosts = () => async (dispatch) =>{
    try{
        API.getAllPosts()
        .then((response)=>{
            dispatch({type:'ALL_POSTS',payload : response.data})
        })
    }catch(err){
        console.log(err);
    }
}
