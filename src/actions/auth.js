import * as API from '../api/index'
import { SIGNUP, SIGNIN } from '../constants/actionTypes'
import { toast } from 'react-hot-toast'


export const signup = (formdata, navigate, loading) => async (dispatch) => {
    try {
        const { data } = await API.signup(formdata)
        console.log(data);
        loading(false)
        navigate('/verify')
        dispatch({ type: SIGNUP, payload: formdata })
    } catch (error) {
        loading(false)
        const err = error.response.data.message
        toast.error(err)
        console.log(error);
    }
}

export const verifyOtp = (formdata, navigate) => async (dispatch) => {
    try {
        const { data } = await API.verifyOtp(formdata)
        localStorage.setItem('user', JSON.stringify(data))
        dispatch({ type: SIGNIN, payload: data })
        navigate('/')
    } catch (error) {
        const err = error.response.data.message
        toast.error(err)
    }
}

export const signin = (formdata, navigate, loading) => async (dispatch) => {
    try {
        loading(true)
        const { data } = await API.signin(formdata)
        localStorage.setItem('user', JSON.stringify(data))
        dispatch({ type: SIGNIN, payload: data })
        loading(false)
        navigate('/')
    } catch (error) {
        console.log(error);
        loading(false)
        toast.error(error.response.data.message)
    }
}