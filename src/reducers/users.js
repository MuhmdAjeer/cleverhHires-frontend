export const reducer = (state = [],action) => {
    switch (action.type) {
        case 'SIGNIN':
            console.log('hello');
            return state;
        case 'LOGIN' :
            return state;
        default:
            return state;
    }
}