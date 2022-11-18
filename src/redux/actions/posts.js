import * as API from '../../api/index'
import { SIGNUP, SIGNIN } from '../../constants/actionTypes'
import { toast } from 'react-hot-toast'


export const getAllPosts = () => async (dispatch) =>{
        API.getAllPosts()
        .then((response)=>{
            dispatch({type:'ALL_POSTS',payload : response.data})
        })
        .catch((err)=> {
            toast.error('Failed to load posts')
        })
}

export const deletePost = (postId) => async(dispatch) =>{
    API.deletePost(postId)
    .then(response => {
        dispatch({type:'UPDATE_POST'})
        toast.success('Deleted successfully!')
    })
    .catch(err=>{
        toast.error('Failed to delete the post!')
    })
}

export const likePost = (postId,liked) => async(dispatch)=>{
        API.likePost(postId)
        .then((response)=>{
            dispatch({type:'UPDATE_POST'})
        })
        .catch((err)=>{
            toast.error('Failed to like the post')
        })
}

export const addComment = (comment,postId) => async(dispatch)=>{
    API.addComment(comment,postId)
    .then((response)=>{
        dispatch({type:'UPDATE_POST'})
    })
    .catch(err => {
        toast.error('Failed to upload comment')
    })
}
