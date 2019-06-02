import React from 'react';
import ReactDOM from 'react-dom';
import {fetchCategories, fetchCategory} from './util/category_api_util';
import configureStore from './store/store';
import Root from './components/root';
import {getCategories, getCategory} from './actions/category_actions';

document.addEventListener('DOMContentLoaded', () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store}/>, root);
});

window.fetchCategories = fetchCategories;
window.getCategories = getCategories;
window.fetchCategory = fetchCategory;
window.getCategory = getCategory;