import React from 'react';
import { Link } from 'react-router-dom';

const Loginsignup = () => (

    <div>
        <h1>Tasker</h1>
        <span>
            Log in or sign up with email
        </span>
        <ul>
            <li><Link to={"/login"}>Log in</Link></li>
            <li><Link to={"/signup"}>Sign up</Link></li>
        </ul>
        <span>
            By signing up you agree to our Terms of Use and Privacy Policy.
        </span>
    </div>
)

export default Loginsignup;