import { combineReducers } from "redux";

import { reducer as user} from './users'
import {reducer as posts} from './posts'

export default combineReducers({
    user,
    posts
})