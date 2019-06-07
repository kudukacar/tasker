import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import React from 'react';
import { Link } from 'react-router-dom';

class TaskLocation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            start_address: "",
            error: false,
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
        if (this.state.start_address) {
            this.props.handleData({ start_address: this.state.start_address });
        } else {
            this.setState({ error: true });
        }
    }

    error() {
        if (this.state.error === true) {
            return <p>Location is required.</p>
        }

    }

    render() {
                return (
                    <div className="taskinterest">
                        <div>
                        <div>YOUR TASK LOCATION</div>
                        <input type="text" value={this.state.start_address} onChange={this.update('start_address')} />
                        <div className="error">{this.error()}</div>
                        <h1><button onClick={this.handleClick}>Continue</button></h1>
                    </div>
                    </div>
                )
    }
}

export default TaskLocation;