import { RECEIVE_ERRORS, RECEIVE_USER } from "../actions/session_actions";

const sessionErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_USER:
            return [];
        case RECEIVE_ERRORS:
            return action.errors;
        default:
            return state;
    }

};

export default sessionErrorsReducer;