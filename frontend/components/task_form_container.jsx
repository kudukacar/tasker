import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { makeTask } from '../actions/task_actions';
import { getTasker } from '../actions/tasker_actions';
import React from 'react';
import { Link } from 'react-router-dom';
import TaskInterest from './task_interest_container';
import TaskLowerNav from './task_lower_nav';
import TaskLocation from './task_location_container';
import TaskOptions from './task_options_container';
import TaskDetails from './task_details_container';

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.categoryId;
    const category = state.categories[id];
    const taskerIds = category.tasker_ids;
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
        taskerIds: taskerIds,
        user: user,
        task: task,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        makeTask: (task) => dispatch(makeTask(task)),
        getTasker: (id) => dispatch(getTasker(id)),
    };
};

class TaskForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.props.task;
        this.handleClick = this.handleClick.bind(this);
        this.handleParentData = this.handleParentData.bind(this);

    }

    handleParentData(data) {
       this.setState(data);
    }

    handleClick(e) {

    }

    render() {
        return (
            <div>
                <header className="mainnav">
                    <nav className="leftnav">
                        <ul>
                            <li>Tasker</li>
                        </ul>
                    </nav>
                </header>
                <nav>
                    <TaskLowerNav task={this.props.task}/>
                </nav>

                <h1>Describe Your Task: {this.props.category.title}</h1>
                <h3>These details will help us show Taskers that suit your needs</h3>
                <main>
                <section>
                    <TaskInterest/>
                </section>
                <section>
                    
                </section>
                <TaskLocation handleData={this.handleParentData}/>
                <section>
                <TaskOptions handleData={this.handleParentData}/>
                </section>
                <section>
                <TaskDetails handleData={this.handleParentData}/>
                </section>
                </main>
            </div>
        );
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TaskForm));