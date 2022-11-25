import { ALL_USERS, SIGNIN, SIGNUP } from '../../constants/actionTypes'

export const reducer = (state = { signupData: null, user: null ,users : null }, action) => {
    switch (action.type) {
        case SIGNUP:
            console.log(action.payload);
            return { ...state, signupData: action?.payload };
        case SIGNIN:
            return { ...state, user: action?.payload?.user }
        case ALL_USERS : 
            return {...state,users : action?.payload}
        default:
            return state;
    }
}