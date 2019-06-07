import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getCategories } from '../actions/category_actions';
import React from 'react';
import { Link } from 'react-router-dom';
import TaskInterest from './task_interest_container';
import TaskLowerNavFill from './task_lower_nav_fill';
import TaskLocation from './task_location_container';
import TaskOptions from './task_options_container';
import TaskDetail from './task_details_container';
import TaskerIndex from './tasker_index';
import {getTaskers} from '../actions/tasker_actions';
import {getTaskerCats} from '../actions/tasker_cat_actions';
import TaskLowerNavView from './task_lower_now_view';
import TaskLowerNavConf from './task_lower_nav_conf';
import TaskDate from './task_date';
import {makeTask} from '../actions/task_actions';

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.categoryId;
    const defaultCat = {};
    const category = state.categories[id] || defaultCat;
    const defaultTaskerIds = [];
    const tasker_ids = category.tasker_ids || defaultTaskerIds;
    const taskers = tasker_ids.map(tasker_id => state.entities.taskers[tasker_id]);
    const defaultTaskerCatIds = [];
    const tasker_cat_ids = category.tasker_cat_ids || defaultTaskerCatIds;
    const taskerCats = tasker_cat_ids.map(tasker_cat_id => state.taskerCats[tasker_cat_id]);
    const session_id = state.session.id;
    const user = state.entities.users[session_id];
    const task = {
        category_id: id,
        detail: "",
        user_id: user.id,
        tasker_id: null,
        status: "booked",
        date: "",
        time: "",
        size: "",
        start_address: "",
        end_address: "",
    }

    return {
        category: category,
        errors: state.errors.tasks,
        user: user,
        task: task,
        tasker_ids: tasker_ids,
        taskers: taskers,
        tasker_cat_ids: tasker_cat_ids,
        taskerCats: taskerCats,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getCategories: () => dispatch(getCategories()),
        getTaskers: () => dispatch(getTaskers()),
        getTaskerCats: () => dispatch(getTaskerCats()),
        makeTask: (task) => dispatch(makeTask(task)),
    };
};

class TaskForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.props.task;
        this.handleParentData = this.handleParentData.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        };
    }

    handleParentData(data) {
       this.setState(data);
    }

    handleSubmit(e) {
        e.preventDefault();
        // this.setState({ category_id: this.props.category.id });
        this.props.makeTask(this.state).then(() => this.props.history.push('/'));
    }

    componentDidMount() {
        this.props.getCategories();
        this.props.getTaskers();
        this.props.getTaskerCats();
    }

    tasker() {
        if(this.state.tasker_id) {
            return this.props.taskers.map(tasker => {
                if(tasker.id === this.state.tasker_id) {
                    return (<div key={tasker.id}>{tasker.first_name} {tasker.last_name[0]}.</div>) 
                }
            })
        }
    }

    hourlyRate() {
        if(this.state.tasker_id) {
            return this.props.taskerCats.map(taskerCat => {
                if(this.state.tasker_id === taskerCat.user_id) {
                    return (<div key={taskerCat.id}>${taskerCat.hourly_rate}/hr</div> );
                }
            })
        }
    }
    render() {
        if(this.state.status === "") {
            return(
                <div className="taskform">
                    <header className="mainnav">
                        <nav className="leftnav">
                            <ul>
                                <li><Link to='/'>Tasker</Link></li>
                            </ul>
                        </nav>
                    </header>
                    <nav>
                        <TaskLowerNavFill />
                    </nav>
                    <main>
                        <h1>Describe Your Task: {this.props.category.title}</h1>
                        <h3>These details will help us show Taskers that suit your needs</h3>

                        <section>
                            <TaskInterest 
                            handleData={this.handleParentData}/>
                        </section>
                        <section>
                            <div className="taskinterest">
                                <div>
                                    <div>YOUR TASK LOCATION</div>
                                </div>
                            </div>
                        </section>
                        <section>
                            <div className="taskinterest">
                                <div>
                                    <div>TASK OPTIONS</div>
                                </div>
                            </div>
                        </section>
                        <section>
                            <div className="taskinterest">
                                <div>
                                    <div>TELL US DETAILS OF YOUR TASK</div>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            )
        } else if(this.state.start_address === "") {
            return(
                <div className="taskform">
                    <header className="mainnav">
                        <nav className="leftnav">
                            <ul>
                                <li><Link to='/'>Tasker</Link></li>
                            </ul>
                        </nav>
                    </header>
                    <nav>
                        <TaskLowerNavFill />
                    </nav>
                    <main>
                        <h1>Describe Your Task: {this.props.category.title}</h1>
                        <h3>These details will help us show Taskers that suit your needs</h3>
                        <section>
                            <TaskInterest handleData={this.handleParentData}/>
                        </section>
                            <TaskLocation handleData={this.handleParentData} />
                        <section>
                            <div className="taskinterest">
                                <div>
                                    <div>TASK OPTIONS</div>
                                </div>
                            </div>
                        </section>
                        <section>
                            <div className="taskinterest">
                                <div>
                                    <div>TELL US DETAILS OF YOUR TASK</div>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            )
        } else if (this.state.size === "") {
            return (
                <div className="taskform">
                    <header className="mainnav">
                        <nav className="leftnav">
                            <ul>
                                <li><Link to='/'>Tasker</Link></li>
                            </ul>
                        </nav>
                    </header>
                    <nav>
                        <TaskLowerNavFill />
                    </nav>
                    <main>
                        <h1>Describe Your Task: {this.props.category.title}</h1>
                        <h3>These details will help us show Taskers that suit your needs</h3>

                        <section>
                            <TaskInterest handleData={this.handleParentData}/>
                        </section>
                        <section>
                            <div className="taskinterest">
                                <div>
                                    <div><div>YOUR TASK LOCATION</div><i className="fas fa-check"></i></div>
                                    <h2>
                                        <label><i className="fas fa-map-marker-alt"></i>{this.state.start_address}</label>
                                        <div>Good news!  Tasker is available in your area</div>
                                    </h2>
                                </div>
                            </div>
                        </section>
                        <section>
                            <TaskOptions handleData={this.handleParentData} />
                        </section>
                        <section>
                            <div className="taskinterest">
                                <div>
                                    <div>TELL US DETAILS OF YOUR TASK</div>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            )
        } else if(this.state.detail === "") {
            return (
                <div className="taskform">
                    <header className="mainnav">
                        <nav className="leftnav">
                            <ul>
                                <li><Link to='/'>Tasker</Link></li>
                            </ul>
                        </nav>
                    </header>
                    <nav>
                        <TaskLowerNavFill />
                    </nav>
                    <main>
                        <h1>Describe Your Task: {this.props.category.title}</h1>
                        <h3>These details will help us show Taskers that suit your needs</h3>

                        <section>
                            <TaskInterest handleData={this.handleParentData}/>
                        </section>
                        <section>
                            <div className="taskinterest">
                                <div>
                                    <div><div>YOUR TASK LOCATION</div><i className="fas fa-check"></i></div>
                                    <h2>
                                        <label><i className="fas fa-map-marker-alt"></i>{this.state.start_address}</label>
                                        <div>Good news!  Tasker is available in your area</div>
                                    </h2>
                                </div>
                            </div>
                        </section>
                        <section>
                            <TaskOptions handleData={this.handleParentData} />
                        </section>
                        <section>
                            <TaskDetail handleData={this.handleParentData} />
                        </section>
                    </main>
                </div>
                
            )

        } else if(this.state.tasker_id === null) {
            return(
                <div className="taskform">
                    <header className="mainnav">
                        <nav className="leftnav">
                            <ul>
                                <li><Link to='/'>Tasker</Link></li>
                            </ul>
                        </nav>
                    </header>
                    <nav>
                        <TaskLowerNavView />
                    </nav>
                    <main>
                        <h1>Pick a Tasker</h1>
                        <h3>After booking, you can chat with your Tasker, agree on an exact time, or go over any requirements or questions, if necessary.</h3>
                        <section>
                            <TaskerIndex 
                            handleData={this.handleParentData}
                            taskers={this.props.taskers}
                            taskerCats={this.props.taskerCats} />
                        </section>
                    </main>
                </div>
            )
        } else if(this.state.date === "") {
            return(
                <TaskDate
                handleData={this.handleParentData} />
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
                    </header>
                    <nav>
                        <TaskLowerNavConf />
                    </nav>
                    <div className="maketask">
                        <form onSubmit={this.handleSubmit}>
                            <div>Review your task description</div>
                            <textarea value={this.state.detail} onChange={this.update('detail')} />
                            <h1><button>Confirm &amp; Chat</button></h1>
                        </form>
                        <div>
                            <div className="confirmheader">
                                <div>
                                <h2>{this.props.category.title}</h2>
                                <h3>{this.tasker()}</h3>
                                </div>
                                <div>
                                    <img src="https://www.ichs.com/wp-content/uploads/2016/11/generic-headshot-Copy-6.png"/>
                            </div>
                        </div>
                            <div className="confirmtaskinfo">
                                <span><i className="far fa-calendar"></i>{this.state.date} at {this.state.time}</span>
                                <span><i className="fas fa-map-marker-alt"></i>{this.state.start_address}</span>
                                <span><i className="fas fa-tasks"></i>{this.state.size}</span>
                            </div>
                            <div className="confirmprice">
                                <div>Hourly Rate</div>
                                <div>{this.hourlyRate()}</div>
                            </div>
                            <div className="confirmpolicy">
                            <span>A 15% Trust and Support Fee is added to the Tasker's total rate</span>
                            
                            <p>You will not be charged until your task is complete. Tasks have a one-hour minimum. You can cancel or reschedule anytime.  If you cancel your task within 24 hours of the scheduled start time, you may be charged a one-hour cancellation fee at the Tasker's hourly rate.</p>
                            
                            <span>Learn more about our cancellation policy</span>
                            </div>
                        </div>
                    </div>
                </div>
                )
            }
        }
    }
    
    
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TaskForm));