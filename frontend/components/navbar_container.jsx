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
        <div className="homepage">
            <header className="mainnav">
                <nav className="leftnav">
                    <ul>
                        <li>Tasker</li>
                    </ul>
                </nav>
                <nav className="rightnav">
                    <ul>
                        <li><Link to='/account'>Account</Link></li>
                    </ul>
                </nav>
            </header>
            <main>
                <section>
                </section>
            </main>
        </div>
        )
    } else {
        return (
        <div>
            <header className="mainnav">
                <nav className="leftnav">
                    <ul>
                        <li>Tasker</li>
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
                </section>
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
                <section className="bookonapp">
                        <img className="cellphone" src="https://i0.wp.com/blog.taskrabbit.com/wp-content/uploads/2016/03/silver-iphone_splash.png?resize=458%2C903&ssl=1"/>
                    <div className="appgoogle">
                        <div className="bookonapptext">
                            Easily book and manage tasks in our app
                        </div>
                        <div >
                             <img className="googleimg" src="https://assets.taskrabbit.com/v3/assets/web/en-US/appstore_badge-c5ba3272b7b251f00741ef3ea61e4d75.svg"/>
                             <img className="appimg" src="https://assets.taskrabbit.com/v3/assets/web/en-US/google_play_badge-68fa64ae2af9dc05624d3d3d35691d2a.svg"/>
                        </div>
                    </div>
                </section>
                <footer className="footer">
                    <div className="footericonsdesc">
                        <div>Follow us! We're friendly:</div>
                    </div>
                    <div className="footerlist">
                        <div>
                            Discover
                            <ul className="list">
                                <li>Become a Tasker</li>
                                <li>Services By City</li>
                                <li>All Services</li>
                                <li>Buy a Gift Card</li>
                                <li>Elite Taskers</li>
                                <li>Help</li>
                            </ul>
                        </div>
                        <div>
                            Company
                            <ul className="list">
                                <li>About Us</li>
                                <li>Careers</li>
                                <li>Press</li>
                                <li>TaskRabbit for Good</li>
                                <li>Blog</li>
                                <li>Terms &amp; Privacy</li>
                            </ul>
                        </div>
                        <div>
                            Download our app
                            <div className="footertext">Tackle your to-do list wherever you are with our mobile 
                                <br/>
                                app.</div>
                            <div className="footerimg">
                                <img className="footergoogleimg" src="https://assets.taskrabbit.com/v3/assets/web/en-US/appstore_badge-c5ba3272b7b251f00741ef3ea61e4d75.svg" />
                                <img className="footerappimg" src="https://assets.taskrabbit.com/v3/assets/web/en-US/google_play_badge-68fa64ae2af9dc05624d3d3d35691d2a.svg" />

                            </div>
                        </div>

                    </div>
                </footer>
            </main>
        </div>
        )
    }

}

export default withRouter(connect(mapStateToProps)(Navbar));
