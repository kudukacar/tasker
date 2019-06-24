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
                    <i className="far fa-list-alt"></i>
                    <div>You're almost done!  We just need a few more details to connect you with your Tasker.  </div>
                </div>
            </div>
        )
}

export default TaskLowerNavConf;