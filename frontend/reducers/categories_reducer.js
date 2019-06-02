import {RECEIVE_CATEGORIES, RECEIVE_CATEGORY} from '../actions/category_actions';
import merge from 'lodash/merge';

const CategoriesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_CATEGORIES:
            return action.categories; 
        case RECEIVE_CATEGORY:
            return merge({}, state, {[action.category.id]:action.category});
        default:
            return state;
    }
}

export default CategoriesReducer;