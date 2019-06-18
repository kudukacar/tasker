import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../actions/category_actions';
import NotLoggedInCats from './not_logged_in_categories_container';
import LoggedInCats from './logged_in_categories_container';
import GetInspired from  './get_inspired';


const mapStateToProps = (state, ownProps) => {
    const session_id = state.session.id;
    const user = state.entities.users[session_id];
    return { user };
};

class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
    if(this.props.user) {
        return (
        <div className="homepage">
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
            <main>
                <section className="titleimage">
                    <div className="loggedintitle">Book Your Next Task</div>
                    <LoggedInCats/>
                </section>
                <section className="loggedinsubtitle">
                        <div>What else is on your to-do list?</div> 
                        <span>Make a list of all the things that you need to get done.  We'll help you match these items to the right category!</span>
                </section>
                    <footer className="footer">
                        <div className="footericonsdesc">
                            <div>Follow us! We're friendly: <i className="fab fa-github-square"></i> | <i className="fab fa-linkedin"></i></div>
                        </div>
                    </footer>
            </main>
        </div>
        )
    } else {
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
                        <li><Link to='/loginsignup'> Log in </Link></li>
                    </ul>
                </nav>
            </header>
            <main>
                <section className="titleimage">
                        <div className="title">The convenient &amp; affordable way
                        <br/> 
                        to get things done around the home</div>
                        <div className="subtitle">Choose from over 140,000 background checked Taskers for help without breaking the bank.</div>
                        <NotLoggedInCats />
                </section>
                <GetInspired />
                <section className="howitworks">
                    <div>How It Works</div>
                    <ol className="howitworkslist">
                        <li>
                            <img className = "howitworksimg" src="https://assets.taskrabbit.com/v3/assets/static/homepage/how_it_works/step_1-59268ae9c0bf23d365715d3d974a0947.svg"/>
                            <div className="howitworkstitle">
                                Describe Your Task
                            </div>
                            <div className="howitworksdesc">
                                Tell us what you need done when and where it works for you.
                            </div>
                        </li>
                        <li>
                                <img className="howitworksimg" src="https://assets.taskrabbit.com/v3/assets/static/homepage/how_it_works/step_2-13d469cb04809cde3793a6bf2f6e8005.svg"/>
                            <div className="howitworkstitle">
                                Choose Your Tasker
                            </div>
                            <div className="howitworksdesc">
                                Browse trusted Taskers by skills, reviews, and price. Select the right person for the job and chat to confirm details.
                            </div>
                        </li>
                        <li>
                                <img className="howitworksimg" src="https://assets.taskrabbit.com/v3/assets/static/homepage/how_it_works/step_3-fd7acee425e988dcc42adda5a79423dd.svg"/>
                            <div className="howitworkstitle">
                                Get It Done
                            </div>
                            <div className="howitworksdesc">
                                Your tasker arrives and gets the job done. Pay securely and leave a review, all through TaskRabbit.
                            </div>
                        </li>
                    </ol>
                </section>
                <footer className="footer">
                    <div className="footericonsdesc">
                            <div>Follow us! We're friendly: <i className="fab fa-github-square"></i> | <i className="fab fa-linkedin"></i></div>
                    </div>
                </footer>
            </main>
        </div>
        )
    }
    }

}

export default withRouter(connect(mapStateToProps)(Navbar));
