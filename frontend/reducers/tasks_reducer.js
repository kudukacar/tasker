import { RECEIVE_TASK, RECEIVE_TASKS } from '../actions/task_actions';
import merge from 'lodash/merge';


const tasksReducer = (state = {}, action) => {
    Object.freeze(state);
    const { task, tasks } = action;

    switch (action.type) {
        case RECEIVE_TASK:
            return merge({}, state, { [task.id]: task });
        case RECEIVE_TASKS:
            return tasks;
        default:
            return state;
    }
};

export default tasksReducer;