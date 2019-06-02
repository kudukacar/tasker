import {fetchCategories} from '../util/category_api_util';

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';

const receiveCategories = (categories) => ({
        type: RECEIVE_CATEGORIES,
        categories,
});


export const getCategories = () => (dispatch) => {
    return fetchCategories().then(categories => dispatch(receiveCategories(categories)));
};