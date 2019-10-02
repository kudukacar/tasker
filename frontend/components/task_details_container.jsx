import React from 'react';

class TaskDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            detail: "",
            error: false,
        }
        this.handleClick = this.handleClick.bind(this);
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        };
    }

    handleClick(e) {
        e.preventDefault();
        if (this.state.detail) {
            this.props.handleData({ detail: this.state.detail });
        } else {
            this.setState({ error: true });
        }
    }
    error() {
        if (this.state.error === true) {
            return <p>Can't be blank.</p>
        }

    }

    render() {
            return (
                <div className="taskinterest">
                    <div>
                        <div>TELL US DETAILS OF YOUR TASK</div>
                        <p>Start the conversation and tell your Tasker what you need done.  This helps us show you only qualified and available Taskers for the job.</p>
                        <p>Don't worry, you can edit this later</p>
                        <textarea value={this.state.detail} onChange={this.update('detail')} placeholder="Provide a summary of what you need done for your Tasker.  Be sure to include details like the size of your space, any equipment/tools needed, and how to get in." />
                        <p>If you need two or more Taskers, please post additional tasks for each Tasker needed</p>
                        <div className="error">{this.error()}</div>
                        <h1><button onClick={this.handleClick}>See Taskers &amp; Prices</button></h1>
                    </div>
                </div>
            )
    }
}

export default TaskDetail;