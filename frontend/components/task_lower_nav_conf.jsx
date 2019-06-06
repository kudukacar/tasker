import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import React from 'react';
import { Link } from 'react-router-dom';

const TaskLowerNavConf = () => {
        return (
            <div className="lowernavcont">
                <ul className="lowernav">
                    <span></span>
                    <li>Fill Out Task Details</li>
                    <li>View Taskers &amp; Prices</li>
                    <i className="fas fa-check"></i>
                    <li className="selected">Confirm Details</li>
                </ul>
                <div>
                    <i className="fas fa-shield-alt"></i>
                    <div>Trust &amp; Support Pledge:  </div>
                    <span>You don't pay until your task is completed</span>
                </div>
            </div>
        )
}

export default TaskLowerNavConf;