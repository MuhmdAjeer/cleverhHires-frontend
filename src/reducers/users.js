import { SIGNIN, SIGNUP } from '../constants/actionTypes'

export const reducer = (state = { signupData: null, user: null }, action) => {
    switch (action.type) {
        case SIGNUP:
            console.log(action.payload);
            return { ...state, signupData: action?.payload };
        case SIGNIN:
            return { ...state, user: action?.payload }
        default:
            return state;
    }
}