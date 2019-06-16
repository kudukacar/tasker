import React from 'react';
import ReactDOM from 'react-dom';
import {fetchCategories, fetchCategory} from './util/category_api_util';
import configureStore from './store/store';
import Root from './components/root';
import {getCategories, getCategory} from './actions/category_actions';
import { fetchTaskerCats, fetchTaskerCat} from './util/tasker_cat_api_util';
import { fetchTasker, fetchTaskers } from './util/user_api_util';
import { getTasker, getTaskers } from './actions/tasker_actions';
import { getTaskerCats, getTaskerCat } from './actions/tasker_cat_actions';
import { fetchTask, createTask, fetchTasks } from './util/task_api_util';
import {makeTask, getTask, getTasks} from './actions/task_actions';

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
window.fetchTaskerCat = fetchTaskerCat;
window.fetchTaskerCats = fetchTaskerCats;
window.fetchTasker = fetchTasker;
window.fetchTaskers = fetchTaskers;
window.getTasker = getTasker;
window.getTaskerCat = getTaskerCat;
window.getTaskerCats = getTaskerCats;
window.createTask = createTask;
window.fetchTask = fetchTask;
window.fetchTasks = fetchTasks;
window.makeTask = makeTask;
window.getTask = getTask;
window.getTasks = getTasks;
window.getTaskers = getTaskers;