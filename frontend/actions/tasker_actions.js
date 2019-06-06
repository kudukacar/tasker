import {fetchTasker, fetchTaskers} from '../util/user_api_util';

export const RECEIVE_TASKER = "RECEIVE_TASKER";
export const RECEIVE_TASKERS = "RECEIVE_TASKERS";

const receiveTasker = tasker => ({
    type: RECEIVE_TASKER,
    tasker
})

const receiveTaskers = taskers => ({
    type: RECEIVE_TASKERS,
    taskers
})

export const getTasker = id => dispatch => {
    return fetchTasker(id).then(tasker => dispatch(receiveTasker(tasker)));
}

export const getTaskers = () => dispatch => {
    return fetchTaskers().then(taskers => dispatch(receiveTaskers(taskers)));
}