import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout } from '../actions/session_actions';
import React from 'react';
import { Link } from 'react-router-dom';


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
                    <header className="mainnav">
                        <nav className="leftnav">
                            <ul>
                                <li><Link to='/'>Tasker</Link></li>
                            </ul>
                        </nav>
                        <nav className="rightnav">
                            <ul>
                                <li><Link to='/mytasks'>My Tasks</Link></li>
                                <li><Link to='/account'>Account</Link></li>
                            </ul>
                        </nav>
                    </header>
                    <main className="accountformcontainer">
                        <section>
                            <h3>Account</h3>
                            <div>
                                <img src="https://www.ichs.com/wp-content/uploads/2016/11/generic-headshot-Copy-6.png" />
                                <ul>
                                    <li><i className="fas fa-user"></i>{props.user.first_name} {props.user.last_name}</li>
                                    <li><i className="far fa-envelope"></i>{props.user.email}</li>
                                    <li><i className="fas fa-map-marker-alt"></i>{props.user.zipcode}</li>
                                    <li><button onClick={props.logout}>Log Out</button></li>
                                </ul>
                            </div>
                        </section>
                    </main>
                </div>
            )
        } 

}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Account));