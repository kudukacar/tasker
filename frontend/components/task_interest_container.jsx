import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import React from 'react';
import { Link } from 'react-router-dom';

class TaskInterest extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            taskinterest:"",
            complete: false,
            status:"booked",
        }
        this.handleClick = this.handleClick.bind(this);
        this.update = this.update.bind(this);
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        };
    }

    handleClick(e) {
        e.preventDefault();
        if (this.state.taskinterest) {
            this.setState({ complete: true });
            this.props.handleData({ status: this.state.status });
        }
    }
    

    render() {
            if (this.state.complete === false) {
                return (
                    <div className="taskinterest">
                        <div>
                        <div>TASK INTEREST</div>
                        <span>What brings you here today?</span>
                        <label><input type="radio" name="taskinterest" value="I'm ready to book right now" onChange={this.update('taskinterest')} /> I'm ready to book right now</label>
                        <label><input type="radio" name="taskinterest" value="I'm interested in booking sometime soon" onChange={this.update('taskinterest')} /> I'm interested in booking sometime soon</label>
                        <label><input type="radio" name="taskinterest" value="I'm just browsing" onChange={this.update('taskinterest')} /> I'm just browsing</label>
                        <h1><button onClick={this.handleClick}>Continue</button></h1>
                        </div>
                    </div>
                )
            } else {
                return (
                    <div className="taskinterest">
                        <div>
                            <div><div>TASK INTEREST</div><i className="fas fa-check"></i></div>
                        <label><i className="fas fa-clipboard-check"></i>{this.state.taskinterest}</label>
                        </div>
                    </div>
                )
            }
    }
}

export default TaskInterest;