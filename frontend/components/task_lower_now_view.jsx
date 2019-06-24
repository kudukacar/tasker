import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import React from 'react';
import { Link } from 'react-router-dom';

const TaskLowerNavView = () => {
        return (
            <div className="lowernavcont">
                <ul className="lowernav">
                    <span></span>
                    <li>Fill Out Task Details</li>
                    <i className="fas fa-smile"></i>
                    <li className="selected">View Taskers &amp; Prices</li>
                    <li>Confirm Details</li>
                </ul>
                <div>
                    <i className="fas fa-user-plus"></i>
                    <div>Filter and sort to find your Tasker.  Then view their availability to request your date and time.</div>
                </div>
            </div>
        )
}

export default TaskLowerNavView;