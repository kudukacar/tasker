import { RECEIVE_TASKERCATS, RECEIVE_TASKERCAT } from '../actions/tasker_cat_actions';
import merge from 'lodash/merge';

const TaskerCatsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_TASKERCATS:
            return action.taskerCats;
        case RECEIVE_TASKERCAT:
            return merge({}, state, { [action.taskerCat.id]: action.taskerCat });
        default:
            return state;
    }
}

export default TaskerCatsReducer;