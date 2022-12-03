import * as API from '../../api/index'
import { SIGNUP, SIGNIN, ALL_USERS } from '../../constants/actionTypes'
import { toast } from 'react-hot-toast'


export const getAllUsers = () => async (dispatch) => {
    API.getAllUsers()
        .then((response) => {
            console.log('response');
            dispatch({ type: ALL_USERS, payload: response.data })
        })
        .catch((err) => {
            toast.error('Failed to load users')
        })
}

export const followUser = (userId) => async (dispatch) => {
    API.followUser(userId)
        .then((response) => {
            dispatch({ type: 'REFRESH' })

            // alert(response)
        })
        .catch((err) => {
            toast.error('following failed failed')
        })
}


export const unfollowUser = (userId) => async (dispatch) => {
    API.unfollowUser(userId)
        .then((response) => {
            dispatch({ type: 'REFRESH' })
        })
        .catch((err) => {
            toast.error('Unfollwoing failed')
        })
}

export const addExperience = (experience) => async (dispatch) => {
    API.addExperience(experience)
        .then((response) => {
            dispatch({ type: 'REFRESH' })
        })
        .catch((err) => {
            toast.error('Cant add experience! Try again')
        })
}

export const getProfile = (username, navigate, loading,ownProfile) => async (dispatch) => {
    loading(true)
    const user = JSON.parse(localStorage.getItem('user'))
    API.getProfile(username)
        .then((response) => {
            dispatch({ type: 'PROFILE', payload: response.data })
            if(response?.data?._id === user.user._id){
                ownProfile(true)
            }
            // dispatch({ type: 'REFRESH'})

            loading(false)
        })
        .catch((err) => {
            loading(false)
            console.log(err);
            if (err.request.status == 404) {
                toast.error('No user found!')
            } else {
                toast.error('Failed to load Profile!')
            }
            navigate('/')
        })
}

export const editAbout = (about) => async (dispatch) => {
    API.editAbout(about)
        .then((response) => {
            dispatch({ type: 'REFRESH' })
        })
        .catch((err) => {
            toast.error('Cant edit about!')
        })
}

export const updateProfilePic = (imageUrl) => async(dispatch)=>{
    API.updateProfilePic(imageUrl)
    .then((response)=>{
        dispatch({ type: 'REFRESH' })
    })
    .catch((err)=>{
        toast.error('Profile picture updation failed')
    })
}