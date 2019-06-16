import { fetchTask, createTask, fetchTasks } from '../util/task_api_util';

export const RECEIVE_TASK = "RECEIVE_TASK";
export const RECEIVE_TASKS = "RECEIVE_TASKS";
export const RECEIVE_TASK_ERRORS = "RECEIVE_TASK_ERRORS";

export const receiveTask = (task) => ({
    type: RECEIVE_TASK,
    task
})

export const receiveTasks = (tasks) => ({
    type: RECEIVE_TASKS,
    tasks
})

export const receiveErrors = (errors) => {
    return {
        type: RECEIVE_TASK_ERRORS,
        errors
    }
}

export const makeTask = (task) => dispatch => {
    return createTask(task).then(task => dispatch(receiveTask(task)), errors => dispatch(receiveErrors(errors.responseJSON)));
}

export const getTask = (id) => dispatch => {
    return fetchTask(id).then(task => dispatch(receiveTask(task)));
}

export const getTasks = () => dispatch => {
    return fetchTasks().then(tasks => dispatch(receiveTasks(tasks)));
}