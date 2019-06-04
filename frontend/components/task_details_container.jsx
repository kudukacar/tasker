import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import React from 'react';
import { Link } from 'react-router-dom';

class TaskDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            detail: "",
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
        if (this.state.detail) {
            this.setState({ complete: true }, () => {
                this.props.handleData({ detail: this.state.detail });
                <Redirect to='/taskerindex' />
            });

        }
    }


    render() {
        if (this.state.complete === false) {
            return (
                <div>
                    <div>TELL US DETAILS OF YOUR TASK</div>
                    <div>Start the conversation and tell your Tasker what you need done.  This helps us show you only qualified and available Taskers for the job.</div>
                    <div>Don't worry, you can edit this later</div>
                    <textarea value={this.state.detail} onChange={this.update('detail')} />
                    <div>If you need two or more Taskers, please post additional tasks for each Tasker needed</div>
                    <button onClick={this.handleClick}>See Taskers &amp; Prices</button>
                </div>
            )
        } else {
            return (
                <div>
                    <div>TELL US DETAILS OF YOUR TASK</div>
                    <div>{this.state.detail}</div>
                </div>
            )
        }
    }
}

export default TaskDetails;