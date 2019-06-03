import { RECEIVE_TASK } from '../actions/task_actions';
import merge from 'lodash/merge';


const tasksReducer = (state = {}, action) => {
    Object.freeze(state);
    const { task } = action;

    switch (action.type) {
        case RECEIVE_TASK:
            return merge({}, state, { [task.id]: task });
        default:
            return state;
    }
};

export default tasksReducer;