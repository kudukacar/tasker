import {RECEIVE_TASKER, RECEIVE_TASKERS} from '../actions/tasker_actions';
import {merge} from 'lodash';

const taskersReducer = (state = {}, action) => {
    Object.freeze(state);
    const { tasker } = action;
    switch(action.type) {
        case RECEIVE_TASKERS:
            return action.taskers;
        case RECEIVE_TASKER:
            return merge( {}, state, { [tasker.id]: tasker});
        default: 
            return state;
    }
};

export default taskersReducer;