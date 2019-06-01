import * as APIUtil from '../util/category_api_util';

export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES";
export const RECEIVE_CATEGORY = "RECEIVE_CATEGORY";

const receiveCategories = (categories) => ({
    type: RECEIVE_CATEGORIES,
    categories,
})

const receiveCategory = (category) => ({
    type: RECEIVE_CATEGORY,
    category
})

export const createCategory = (category) => (dispatch) => {
    return APIUtil.createCategory(category).then(category => dispatch(receiveCategory(category)));
}

export const fetchCategories = () => (dispatch) => {
    return APIUtil.fetchCategories().then(categories => dispatch(receiveCategories(categories)));
}

export const fetchCategory = (id) => (dispatch) => {
    return APIUtil.fetchCategory(id).then(category => dispatch(receiveCategory(category)));
}