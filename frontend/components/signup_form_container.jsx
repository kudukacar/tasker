import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { signup } from '../actions/session_actions';
import React from 'react';

const mapStateToProps = (state, ownProps) => {

    return {
        errors: state.errors,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        signup: (user) => dispatch(signup(user)),
    };
};

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name:"",
            last_name:"",
            email: "",
            password: "",
            zipcode:"",
            tasker: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.errors = this.errors.bind(this);
        this.update = this.update.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.signup(this.state).then(() => this.props.history.push('/account'));
    }
    update(field) {
        return e => this.setState({ [field]: e.target.value })
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
                <label>First Name
                <input type="text"
                        value={this.state.first_name}
                        onChange={this.update('first_name')} />
                </label>
                <label>Last Name
                <input type="text"
                        value={this.state.last_name}
                        onChange={this.update('last_name')} />
                </label>
                <label>Email Address
                <input type="text"
                        value={this.state.email}
                        onChange={this.update('email')} />
                </label>
                <label>Password
                <input type="password"
                        value={this.state.password}
                        onChange={this.update('password')} />
                </label>
                <label>Zipcode
                <input type="number"
                        value={this.state.zipcode}
                        onChange={this.update('zipcode')} />
                </label>
                <ul>{this.errors()}</ul>
                <p>By clicking below and creating an account, I agree to TaskRabbit's Terms of Service and Privacy Policy.</p>
                <input type="submit" value="Create account" />
            </form>
        )
    }

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Signup));