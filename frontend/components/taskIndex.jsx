import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import React from 'react';
import { Link } from 'react-router-dom';
import { getTasks, cancelTask } from '../actions/task_actions';
import TaskIndexItem from './taskIndexItem';
import { getCategories } from '../actions/category_actions';
import { getTaskers } from '../actions/tasker_actions';
import { Footer } from './footer';


const mapStateToProps = (state) => {
    const session_id = state.session.id;
    const user = state.entities.users[session_id];
    const tasks = Object.values(state.tasks);
    const categories = state.categories;
    const taskers = state.entities.taskers;
    const taskerCats = state.taskerCats;
    return { user, tasks, categories, taskers, taskerCats };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getTasks: () => dispatch(getTasks()),
        getCategories: () => dispatch(getCategories()),
        getTaskers: () => dispatch(getTaskers()),
        getTaskerCats: () => dispatch(getTaskerCats()),
        cancelTask: (id) => dispatch(cancelTask(id)),
    }
};

class TaskIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = { mode: 'current'};
        this.handlePastClick = this.handlePastClick.bind(this);
        this.handleCurrentClick = this.handleCurrentClick.bind(this);
    }

    componentDidMount() {
        this.props.getTasks();
        this.props.getTaskers();
        this.props.getCategories();
        this.props.getTaskerCats();
    }

    currentDate(date, time) {
        let dateFormat = date.split("-");
        let dateFormatInt = parseInt(dateFormat[1]) - 1;
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
        if (todaysDate > dateTime) {
            return false;
        } else {
            return true;
        }

    }
    userTasks() {
        if (this.props.tasks) {
            return this.props.tasks.map(task => {
                if(task.user_id === this.props.user.id) {
                    return task;
                }
            });
        } else {
            return [undefined];
        }
    }

    currentTasks() {
        if(this.userTasks()[0] !== undefined) {
            return this.userTasks().map(task => {
                if (this.currentDate(task.date, task.time)) {
                    return (<li key={task.id}><TaskIndexItem
                        task={task}
                        category={this.props.categories[task.category_id]}
                        tasker={this.props.taskers[task.tasker_id]}
                        taskerCats={this.props.taskerCats}
                        cancelTask={this.props.cancelTask}
                    /></li>)
                }
            })
        }
    }

    pastTasks() {
        if (this.userTasks()[0] !== undefined) {
            return this.userTasks().map(task => {
                if (this.currentDate(task.date, task.time) === false) {
                    return (<li key={task.id}><TaskIndexItem task={task}
                        category={this.props.categories[task.category_id]}
                        tasker={this.props.taskers[task.tasker_id]}
                        taskerCats={this.props.taskerCats}
                    /></li>)
                }
            })
        }
    }

    handleCurrentClick(e) {
        e.preventDefault();
        this.setState({ mode: 'current' });
       
    }

    handlePastClick(e) {
        e.preventDefault();
        this.setState({ mode: 'past' });

    }
    header() {
        return (
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
        )
    }
    otherTasks() {
        return(
            <section className="taskindexothertasks">
                <h1>Have something else on your to-do list?</h1>
                <h2>Book your next task or manage future to-dos with TaskRabbit</h2>
                <Link to='/'><button>Check It Off Your List</button></Link>
            </section>
        )
    }

    currentPast() {
        return(
            <div>
                <ul>
                    <li className='taskindexselected' onClick={this.handleCurrentClick}>CURRENT</li>
                    <li className='taskindexunselected' onClick={this.handlePastClick}>PAST</li>
                </ul>
            </div>
        )

    }

    render() {
        if(this.state.mode === 'current') {
            return (
                <div>
                    {this.header()}
                    <main className="taskindexpage">
                        <section className="taskindex">
                            {this.currentPast()}
                            <ul>
                                {this.currentTasks()}
                            </ul>
                        </section>
                        {this.otherTasks()}
                        <Footer/>
                    </main>
                </div>
            )
        } else {
            return (
                <div>
                    {this.header()}
                    <main className="taskindexpage">
                        <section className='taskindex'>
                            {this.currentPast()}
                            <ul>
                                {this.pastTasks()}
                            </ul>
                        </section>
                        {this.otherTasks()}
                        <Footer />
                    </main>
                </div>
                

            )
        }
        
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TaskIndex));