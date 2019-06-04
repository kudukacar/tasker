import React from 'react';
import Navbar from './navbar_container';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';
import Loginsignup from './loginsignup';
import {Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import Account from './account_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import TaskForm from './task_form_container';
import TaskerIndex from './tasker_index';


const App = () => (
    <div>
        <Switch>
            <Route exact path='/' component={Navbar} />
            <AuthRoute exact path="/login" component={LoginFormContainer}/>
            <AuthRoute exact path="/signup" component={SignupFormContainer}/>
            <AuthRoute exact path='/loginsignup' component={Loginsignup} />
            <ProtectedRoute exact path='/account' component={Account}/>
            <Route exact path='/categories/:categoryId' component={TaskForm}/>
            <Route exact path='/taskerindex' component={TaskerIndex} />
        </Switch>
    </div>
);

export default App;