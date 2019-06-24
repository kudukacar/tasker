
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/root_reducer';

let middleware = [thunk, logger];
if (process.env.NODE_ENV === 'production') {
    middleware = [thunk];
}

const configureStore = (preloadedState = {}) => (
    createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(...middleware)
    )
);




export default configureStore;