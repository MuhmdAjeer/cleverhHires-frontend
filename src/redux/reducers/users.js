import { ALL_USERS, SIGNIN, SIGNUP,PROFILE } from '../../constants/actionTypes'

export const reducer = (state = { signupData: null, user: null ,users : null,profile : null }, action) => {
    switch (action.type) {
        case SIGNUP:
            console.log(action.payload);

            return { ...state, signupData: action?.payload };
        case SIGNIN:
            console.log(action.payload);
            return { ...state, user: action?.payload?.user }
        case ALL_USERS : 
            return {...state,users : action?.payload}
        case PROFILE : 
            return {...state,profile : action?.payload}
        case "CLEAR_PROFILE" : 
            return {...state,profile:{}}
        default:
            return state;
    }
}