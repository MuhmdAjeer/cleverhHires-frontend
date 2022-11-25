import * as API from '../../api/index'
import { SIGNUP, SIGNIN, ALL_USERS } from '../../constants/actionTypes'
import { toast } from 'react-hot-toast'


export const getAllUsers = () => async (dispatch) =>{
        API.getAllUsers()
        .then((response)=>{
            console.log('response');
            dispatch({type: ALL_USERS, payload : response.data})
        })
        .catch((err)=> {
            toast.error('Failed to load users')
        })
}

export const followUser = (userId) => async(dispatch) => {
    API.followUser(userId)
    .then((response)=>{
    dispatch({type : 'REFRESH'})

        // alert(response)
    })
    .catch((err)=>{
        toast.error('following failed failed')
    })
}


export const unfollowUser = (userId) => async(dispatch) => {
    API.unfollowUser(userId)
    .then((response)=>{
    dispatch({type : 'REFRESH'})

        // alert(response)
    })
    .catch((err)=>{
        toast.error('Unfollwoing failed')
    })
}