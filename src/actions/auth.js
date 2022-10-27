import * as API from '../api/index'
import {SIGNIN} from '../constants/actionTypes'

export const signin = (formdata) => async (dispatch) =>{
    try {
        const {data} = await API.signin(formdata)
        console.log(data);
        dispatch({type: SIGNIN , payload : data})
    } catch (error) {
        console.log(error);
    }
}