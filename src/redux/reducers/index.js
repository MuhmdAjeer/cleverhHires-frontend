import { combineReducers } from "redux";

import { reducer as user} from './users'
import {reducer as posts} from './posts'
import {reducer as jobs} from './jobs'

export default combineReducers({
    user,
    posts,
    jobs
})