import { SIGNIN, SIGNUP } from '../constants/actionTypes'

export const reducer = (state = { posts: [],updated:false}, action) => {
    switch (action.type) {
        case 'ALL_POSTS':
            return { ...state, posts: action?.payload };
        case 'UPDATE_POST' :
            return {...state,updated:!state.updated}
        default:
            return state;
    }
}