import {fetchTaskerCats, fetchTaskerCat} from '../util/tasker_cat_api_util';

export const RECEIVE_TASKERCAT = "RECEIVE_TASKERCAT";
export const RECEIVE_TASKERCATS = "RECEIVE_TASKERCATS";


const receiveTaskerCats = (taskerCats) => ({
    type: RECEIVE_TASKERCATS,
    taskerCats,
});

const receiveTaskerCat = (taskerCat) => ({
    type: RECEIVE_TASKERCAT,
    taskerCat,
});

export const getTaskerCats = () => (dispatch) => {
    return fetchTaskerCats().then(taskerCats => dispatch(receiveTaskerCats(taskerCats)));
}

export const getTaskerCat = (id) => dispatch => {
    return fetchTaskerCat(id).then(taskerCat => dispatch(receiveTaskerCat(taskerCat)));
}