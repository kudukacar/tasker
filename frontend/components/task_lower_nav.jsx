import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import React from 'react';
import { Link } from 'react-router-dom';

class TaskLowerNav extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            lowernav:"fillout",
        }

    }

    lowernav() {
        if (this.props.task.tasker_id === null) {
            this.state.lowernav = "fillout"
        } else if (!this.props.task.tasker_id) {
            this.state.lowernav = "confirm"
        } else {
            this.state.lowernav = "view"
        }
    }

    render() {
        return(
            <ul>
                <li className={this.state.lowernav}>Fill Out Task Details</li>
                <li className={this.state.lowernav}>View Taskers &amp; Prices</li>
                <li className={this.state.lowernav}>Confirm Details</li>
            </ul>
        )
    }

}

export default TaskLowerNav;