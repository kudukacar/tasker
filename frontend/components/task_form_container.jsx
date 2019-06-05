import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getCategory } from '../actions/category_actions';
import React from 'react';
import { Link } from 'react-router-dom';
import TaskInterest from './task_interest_container';
import TaskLowerNav from './task_lower_nav';
import TaskLocation from './task_location_container';
import TaskOptions from './task_options_container';
import TaskDetail from './task_details_container';
import TaskerIndex from './tasker_index';
import {getTasker} from '../actions/tasker_actions';
import {getTaskerCat} from '../actions/tasker_cat_actions';

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.categoryId;
    const category = state.categories[id];
    const tasker_ids = category.tasker_ids;
    const taskers = tasker_ids.map(tasker_id => state.entities.taskers[tasker_id]);
    const tasker_cat_ids = category.tasker_cat_ids;
    const taskerCats = tasker_cat_ids.map(tasker_cat_id => state.taskerCats[tasker_cat_id]);
    const session_id = state.session.id;
    const user = state.entities.users[session_id];
    const task = {
        categoryId: category.id,
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
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getCategory: (id) => dispatch(getCategory(id)),
        getTasker: (id) => dispatch(getTasker(id)),
        getTaskerCat: (id) => dispatch(getTaskerCat(id)),
    };
};

class TaskForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.props.task;
        this.handleParentData = this.handleParentData.bind(this);

    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        };
    }

    handleParentData(data) {
       this.setState(data);
    }

    componentDidMount() {
        this.props.getCategory(this.props.category.id);
        this.props.tasker_ids.map(tasker_id => this.props.getTasker(tasker_id));
        this.props.tasker_cat_ids.map(tasker_cat_id => this.props.getTaskerCat(tasker_cat_id));
    }

    render() {
        if(this.state.status === "") {
            return(
                <div className="taskform">
                    <header className="mainnav">
                        <nav className="leftnav">
                            <ul>
                                <li>Tasker</li>
                            </ul>
                        </nav>
                    </header>
                    <nav>
                        <TaskLowerNav section="fillout" />
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
                                <li>Tasker</li>
                            </ul>
                        </nav>
                    </header>
                    <nav>
                        <TaskLowerNav section="fillout"  />
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
                                <li>Tasker</li>
                            </ul>
                        </nav>
                    </header>
                    <nav>
                        <TaskLowerNav section="fillout"  />
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
                                <li>Tasker</li>
                            </ul>
                        </nav>
                    </header>
                    <nav>
                        <TaskLowerNav section="fillout" />
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
                                <li>Tasker</li>
                            </ul>
                        </nav>
                    </header>
                    <nav>
                        <TaskLowerNav section="view" />
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
        }
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TaskForm));