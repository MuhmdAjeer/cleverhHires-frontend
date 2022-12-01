export const reducer = (state = { jobs: [],myJobs : [],job:{}}, action) => {
    switch (action.type) {
        case 'ALL_JOBS':
            return { ...state, jobs: action?.payload };
        case 'MY_JOBS' : 
            return {...state,myJobs : action?.payload};
        case 'JOB' : 
            console.log('//at reducer');
            return {...state,job : action.payload}
        default:
            return state;
    }
}