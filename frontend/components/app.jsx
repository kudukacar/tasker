import React from 'react';
import Navbar from './navbar_container';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';
import Loginsignup from './loginsignup';
import {Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import Account from './account_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => (
    <div>
        <Switch>
            <AuthRoute exact path="/login" component={LoginFormContainer}/>
            <AuthRoute exact path="/signup" component={SignupFormContainer}/>
            <ProtectedRoute path='/account' component={Account}/>
            <Route path='/loginsignup' component={Loginsignup}/>
            <Route path='/' component={Navbar} />
        </Switch>
    </div>
);

export default App;