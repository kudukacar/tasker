import { combineReducers } from 'redux';

import sessionErrorsReducer from './session_errors_reducer';
import tasksErrorsReducer from './tasks_errors_reducer';

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    tasks: tasksErrorsReducer
});

export default errorsReducer;