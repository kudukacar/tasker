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
        this.errors = this.errors.bind(this);
        this.update = this.update.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state).then(() => this.props.history.push('/account'));
    }
    update(field) {
        return e => this.setState({[field]: e.target.value})
    }

    errors() {
        if (this.props.errors) {
            return Object.values(this.props.errors).map((error, i) => <li key={i}>{error}</li>)
        }
    }

    render() {
        return (
        <form onSubmit={this.handleSubmit}>
            <h1>Tasker</h1>
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
            <ul>{this.errors()}</ul>
            <input type="submit"  value="Log in"/>
        </form>
        )
    }

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));