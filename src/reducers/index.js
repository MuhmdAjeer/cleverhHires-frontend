import { combineReducers } from "redux";

import { reducer as users} from './users'

export default combineReducers({
    users
})