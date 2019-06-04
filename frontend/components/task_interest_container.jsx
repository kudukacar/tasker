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
            this.setState({ complete: true } );
        }
    }
    

    render() {
            if (this.state.complete === false) {
                return (
                    <div>
                        <div>TASK INTEREST</div>
                        <input type="radio" name="taskinterest" value="I'm ready to book right now" onChange={this.update('taskinterest')} />
                        <input type="radio" name="taskinterest" value="I'm interested in booking sometime soon" onChange={this.update('taskinterest')} />
                        <input type="radio" name="taskinterest" value="I'm just browsing" onChange={this.update('taskinterest')} />
                        <button onClick={this.handleClick}>Continue</button>
                    </div>
                )
            } else {
                return (
                    <div>
                        <div>TASK INTEREST</div>
                        <div>{this.state.taskinterest}</div>
                    </div>
                )
            }
    }
}

export default TaskInterest;