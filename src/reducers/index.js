import { combineReducers } from "redux";

import { reducer as user} from './users'

export default combineReducers({
    user
})