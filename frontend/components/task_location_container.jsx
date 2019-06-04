import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import React from 'react';
import { Link } from 'react-router-dom';

class TaskLocation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            start_address: "",
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
        if (this.state.start_address) {
            this.setState({ complete: true }, () => {
                this.props.handleData({ start_address: this.state.start_address });
            });
            
        }
    }


    render() {
            if (this.state.complete === false) {
                return (
                    <div>
                        <div>YOUR TASK LOCATION</div>
                        <input type="text" value={this.state.start_address} onChange={this.update('start_address')} />
                        <button onClick={this.handleClick}>Continue</button>
                    </div>
                )
            } else {
                return (
                    <div>
                        <div>YOUR TASK LOCATION</div>
                        <div>{this.state.start_address}</div>
                    </div>
                )
            }
    }
}

export default TaskLocation;