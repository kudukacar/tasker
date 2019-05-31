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
        this.props.signup(this.state).then(() => this.props.history.push('/'));
    }
    update(field) {
        return e => this.setState({ [field]: e.target.value })
    }

    errors() {
        if (this.props.errors.session) {
            return (
                <ul>
                    {Object.values(this.props.errors.session).map((error,i) => <li key={i}>{error}</li>)}
                </ul>
            )
        }
    }

    render() {
        return (
            <div className="signupformtemplate">
            <form  className="signupform" onSubmit={this.handleSubmit}>
                    <h1 className="loginsignupheader">Tasker</h1>
                <label className="signuplabel">First Name
                <input type="text"
                value={this.state.first_name}
                onChange={this.update('first_name')}/></label>

           
                <label className="signuplabel">Last Name
                <input type="text"
                            value={this.state.last_name}
                            onChange={this.update('last_name')} />
                </label>
        
                
                <label className="signuplabel">Email Address 
                     <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')} />
                </label>
                <label className="signuplabel">Password
                        <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')} />
                </label>
                <label className="signuplabel">Zipcode
                    <input type="number"
                            value={this.state.zipcode}
                            onChange={this.update('zipcode')} />
                </label>
                
                
                    <div>{this.errors()}</div>
                <p>By clicking below and creating an account, I agree to TaskRabbit's Terms of Service and Privacy Policy.</p>
                <input type="submit" value="Create account" />
            </form>
            </div>
        )
    }

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Signup));