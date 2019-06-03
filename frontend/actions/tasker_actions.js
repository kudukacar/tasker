import {fetchTasker} from '../util/user_api_util';

export const RECEIVE_TASKER = "RECEIVE_TASKER";

const receiveTasker = tasker => ({
    type: RECEIVE_TASKER,
    tasker
})

export const getTasker = id => dispatch => {
    return fetchTasker(id).then(tasker => dispatch(receiveTasker(tasker)));
}