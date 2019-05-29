import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout } from '../actions/session_actions';
import React from 'react';


const mapStateToProps = (state, ownProps) => {
    const session_id = state.session.id;
    const user = state.entities.users[session_id];
    return { user };
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout()),
    };
};

const Account = (props) => {

        if(props.user) {
            return (
                <div>
                    <h1>Account</h1>
                    <ul>
                        <li>{props.user.first_name} {props.user.last_name}</li>
                        <li>{props.user.email}</li>
                        <li><button onClick={props.logout}>Log Out</button></li>
                    </ul>
                </div>
            )
        } 

}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Account));