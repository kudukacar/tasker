import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { login } from '../actions/session_actions';
import React from 'react';
import { Link } from 'react-router-dom';


const mapDispatchToProps = dispatch => {
    return {
        login: (user) => dispatch(login(user)),
    };
};

class Loginsignup extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        const user = {email:"demouser@gmail.com", password:"demosuser"}
        this.props.login(user);
    }

    render() {
    return (
    <div className="loginsignup">
        <form className="loginsignupform">
        <h1 className="loginsignupheader">Tasker</h1>
        <button onClick={this.handleClick}>Demo User</button>
        <br></br>
        <span>
            Log in or sign up with email
        </span>
        <div className="loginsignuplist">
            <Link to={"/login"}><button>Log in</button></Link>
            <Link to={"/signup"}><button>Sign up</button></Link>
        </div>
        <span className="loginsignuptext">
            By signing up you agree to our Terms of Use and Privacy Policy.
        </span>
        </form>
    </div>
    )}
}


export default withRouter(connect(null, mapDispatchToProps)(Loginsignup));