import { combineReducers } from 'redux';
import entities from './entities_reducer';
import errorsReducer from './errors_reducer';
import sessionReducer from './session_reducer';
import CategoriesReducer from './categories_reducer';



export default combineReducers({
    entities,
    session: sessionReducer,
    errors: errorsReducer,
    categories: CategoriesReducer
});