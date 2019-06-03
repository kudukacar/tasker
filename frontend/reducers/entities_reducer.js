import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import taskersReducer from './taskers_reducer';

export default combineReducers({
    users: usersReducer,
    taskers: taskersReducer
});