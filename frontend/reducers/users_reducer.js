import { RECEIVE_USER } from '../actions/session_actions';
import { merge } from 'lodash';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    const { user } = action;
    switch (action.type) {
        case RECEIVE_USER:
            return merge({}, state, { [user.id]: user });
        default:
            return state;
    }
};

export default usersReducer;