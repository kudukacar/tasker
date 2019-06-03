import { fetchTask, createTask } from '../util/task_api_util';

export const RECEIVE_TASK = "RECEIVE_TASK";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveTask = (task) => ({
    type: RECEIVE_TASK,
    task
})

export const receiveErrors = (errors) => {
    return {
        type: RECEIVE_ERRORS,
        errors
    }
}

export const makeTask = (task) => dispatch => {
    return createTask(task).then(task => dispatch(receiveTask(task)), errors => dispatch(receiveErrors(errors.responseJSON)));
}

export const getTask = (id) => dispatch => {
    return fetchTask(id).then(task => dispatch(receiveTask(task)));
}