import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import React from 'react';
import { Link } from 'react-router-dom';


const mapStateToProps = (state, ownProps) => {
    const session_id = state.session.id;
    const user = state.entities.users[session_id];
    return { user };
};

const Navbar = (props) => {

    if (props.user) {
        return (
            <ul className="navbar">
                <li className="header">Tasker</li>
                <li><Link to='/account'>Account</Link></li>
            </ul>
        )
    } else {
        return (
            <ul className="navbar">
                <li className="header">Tasker</li>
                <li><Link to='/loginsignup'> Log in </Link></li>
            </ul>
        )
    }

}

export default withRouter(connect(mapStateToProps)(Navbar));
