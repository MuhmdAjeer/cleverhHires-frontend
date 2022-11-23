export const reducer = (state = { jobs: []}, action) => {
    switch (action.type) {
        case 'ALL_JOBS':
            return { ...state, jobs: action?.payload };
        default:
            return state;
    }
}