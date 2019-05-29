import { RECEIVE_USER, LOGOUT_USER } from '../actions/session_actions';


const _nullSession = {
    id: null,
};

const sessionReducer = (state = _nullSession, action) => {
    Object.freeze(state);
    const { user } = action;

    switch (action.type) {
        case RECEIVE_USER:
            return { id: user.id };
        case LOGOUT_USER:
            return _nullSession;
        default:
            return state;
    }
};

export default sessionReducer;