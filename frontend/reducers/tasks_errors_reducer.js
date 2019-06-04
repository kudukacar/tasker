import { RECEIVE_TASK_ERRORS, RECEIVE_TASK} from "../actions/task_actions";

const tasksErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_TASK:
            return [];
        case RECEIVE_TASK_ERRORS:
            return action.errors;
        default:
            return state;
    }

};

export default tasksErrorsReducer;