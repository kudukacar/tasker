import React from 'react';
import { Link } from 'react-router-dom';

const Loginsignup = () => (

    <div className="loginsignup">
        <form className="loginsignupform">
        <h1 className="loginsignupheader">Tasker</h1>
        <div className="socialmedia">
        <button className="facebook">Facebook</button>
        <button className="google">Google</button>
        </div>
        <p>or</p>
        <br/>
        <span>
            Log in or sign up with email
        </span>
        <div className="loginsignuplist">
            <button><Link to={"/login"}>Log in</Link></button>
            <button><Link to={"/signup"}>Sign up</Link></button>
        </div>
        <span className="loginsignuptext">
            By signing up you agree to our Terms of Use and Privacy Policy.
        </span>
        </form>
    </div>
)

export default Loginsignup;