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
import {makeTask, getTasks} from '../actions/task_actions';

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
    const tasks = Object.values(state.tasks);
    const session_id = state.session.id;
    const user = state.entities.users[session_id];
    const task = {
        category_id: id,
        detail: "",
        user_id: user.id,
        tasker_id: null,
        status: "",
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
        tasks: tasks,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getCategories: () => dispatch(getCategories()),
        getTaskers: () => dispatch(getTaskers()),
        getTaskerCats: () => dispatch(getTaskerCats()),
        getTasks: () => dispatch(getTasks()),
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
        this.props.makeTask(this.state).then(() => this.props.history.push('/mytasks'));
    }

    componentDidMount() {
        this.props.getCategories();
        this.props.getTaskers();
        this.props.getTaskerCats();
        this.props.getTasks();
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

    displayDate() {
        const date = this.state.date.split("-");
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const monthint = parseInt(date[1]);
        const month = months[monthint - 1];
        return (month + " " + date[2]);

    }

    displayTime() {
        const time = this.state.time.split(":");
        const timeInt = parseInt(time[0]);
        let ampm = "";
        if (timeInt < 12) {
            ampm = "am";
        } else {
            ampm = "pm";
        }
        let hour = null;
        if (timeInt === 0) {
            hour = 12;
        } else if (timeInt < 13) {
            hour = timeInt;
        } else {
            hour = timeInt - 12;
        }

        return (hour + ":" + time[1] + ampm);
    }
    render() {
        const imagesObj = {
            2: window.hs2,
            3: window.hs3,
            4: window.hs4,
            5: window.hs5,
            6: window.hs6,
            7: window.hs7,
            8: window.hs8,
            9: window.hs9,
            10: window.hs10,
            11: window.hs11,
            12: window.hs12,
            13: window.hs13,
            14: window.hs14,
            15: window.hs15,
            16: window.hs16,
            17: window.hs17,
            18: window.hs18,
            19: window.hs19,
            20: window.hs20,
            21: window.hs21,
            22: window.hs22,
            23: window.hs2,
            24: window.hs3,
            25: window.hs4,
            26: window.hs5,
            27: window.hs6,
            28: window.hs7,
            29: window.hs8,
            30: window.hs9,
            31: window.hs10,
            32: window.hs11,
            33: window.hs12,
            34: window.hs13,
            35: window.hs14,
            36: window.hs15,
            37: window.hs16,
            38: window.hs17,
            39: window.hs18,
            40: window.hs19,
        }
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
                        <h1>{this.props.category.title}</h1>
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
                        <h1>{this.props.category.title}</h1>
                        <section>
                            <TaskInterest handleData={this.handleParentData}/>
                        </section>
                            <TaskLocation handleData={this.handleParentData} start_address={this.state.start_address}/>
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
                        <h1>{this.props.category.title}</h1>
                        <section>
                            <TaskInterest handleData={this.handleParentData}/>
                        </section>
                        <section>
                            <TaskLocation handleData={this.handleParentData} start_address={this.state.start_address}/>
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
                        <h1>{this.props.category.title}</h1>
                        <section>
                            <TaskInterest handleData={this.handleParentData}/>
                        </section>
                        <section>
                            <TaskLocation handleData={this.handleParentData} start_address={this.state.start_address}/>
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
                        <section>
                            <TaskerIndex 
                            handleData={this.handleParentData}
                            taskers={this.props.taskers}
                            taskerCats={this.props.taskerCats}
                            tasks={this.props.tasks}
                            category={this.props.category} />
                        </section>
                    </main>
                </div>
            )
        } else if(this.state.date === "") {
            return(
                <TaskDate
                handleData={this.handleParentData}
                taskerId={this.state.tasker_id}
                taskers={this.props.taskers} />
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
                                <img src={imagesObj[this.state.tasker_id]}/>
                            </div>
                        </div>
                            <div className="confirmtaskinfo">
                                <span><i className="far fa-calendar"></i>{this.displayDate()} at {this.displayTime()}</span>
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