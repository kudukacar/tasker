import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import React from 'react';
import { Link } from 'react-router-dom';
import { getTasks } from '../actions/task_actions';
import TaskIndexItem from './taskIndexItem';


const mapStateToProps = (state) => {
    const session_id = state.session.id;
    const user = state.entities.users[session_id];
    const tasks = user.task_ids.map(task_id => state.tasks[task_id]);
    return { user, tasks };
};

const mapDispatchToProps = dispatch => {
    return {
        getTasks: () => dispatch(getTasks()),
    };
};

class TaskIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = { task: 'current'};
    }

    componentDidMount() {
        this.props.getTasks();
    }

    currentDate(date, time) {
        let dateFormat = date.split("-");
        dateFormatInt = parseInt(dateFormat[1]) - 1;
        if(dateFormatInt < 10) {
            dateFormat[1] = "0" + dateFormatInt;
        } else {
            dateFormat[1] = dateFormatInt.toString();
        }
        let timeFormat = time.split(':');
        timeFormat[0] = timeFormat[0].slice(-2);
        timeFormat[2] = timeFormat[2].slice(0,2);
        const todaysDate = new Date();
        const dateTime = new Date(dateFormat[0], dateFormat[1], dateFormat[2], timeFormat[0], timeFormat[1], timeFormat[2]);
        if (todaysDate < dateTime) {
            return false;
        } else {
            return true;
        }

    }

    currentTasks() {
        return this.props.tasks.map(task => {
            if(this.currentDate(task.date, task.time)) {
                return (<li key={task.id}><TaskIndexItem
                    task={task}/></li>)
            }
        })
    }

    pastTasks() {
        return this.props.tasks.map(task => {
            if (this.currentDate(task.date, task.time) === false) {
                return (<li key={task.id}><TaskIndexItem
                    task={task} /></li>)
            }
        })
    }

    render() {
        if(this.state.task === 'current') {
            return (
                <div>
                    <ul>
                        {this.currentTasks()}
                    </ul>
                </div>
            )
        } else {
            return (
                <div>
                    <ul>
                        {this.pastTasks()}
                    </ul>
                </div>
            )
        }
        
    }
}

export default TaskIndex;