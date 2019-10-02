import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { login } from '../actions/session_actions';
import React from 'react';

const mapStateToProps = (state, ownProps) => {

    return {
        errors: state.errors,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        login: (user) => dispatch(login(user)),
    };
};

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        }
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state);
    }
    update(field) {
        return e => this.setState({[field]: e.target.value})
    }

    errors() {
        if (this.props.errors.session) {
            return (
                <ul>
                    {Object.values(this.props.errors.session).map((error, i) => <li key={i}>{error}</li>)}
                </ul>
            )
        }
    }

    render() {
        return (
        <div className="loginsignup">
            <form className="loginform" onSubmit={this.handleSubmit}>
                <h1 className="loginsignupheader">Tasker</h1>
                <label>Email Address
                    <input type="text" 
                    value={this.state.email}
                    onChange={this.update('email')}/>
                </label>
                <label>Password
                    <input type="password"
                        value={this.state.password}
                        onChange={this.update('password')} />
                </label>
                <div>{this.errors()}</div>
                <input type="submit"  value="Log in"/>
                <span className="loginformtext">Forgot password?</span>
            </form>
        </div>
        )
    }

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));