import { SIGNIN, SIGNUP } from '../../constants/actionTypes'

export const reducer = (state = { posts: [],updated:false,refresh:false}, action) => {
    switch (action.type) {
        case 'ALL_POSTS':
            return { ...state, posts: action?.payload };
        case 'UPDATE_POST' :
            console.log(state.updated);
            return {...state,updated:!state.updated}
        case 'REFRESH' : 
            // alert('hello')
            return {...state,refresh:!state.refresh}
        default:
            return state;
    }
}