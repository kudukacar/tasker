import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import React from 'react';
import { Link } from 'react-router-dom';

const TaskLowerNavFill = () => {

                return(
                <div>
                    <div className="lowernavcont">
                        <ul className="lowernav">
                            <span></span>
                            <i className="fas fa-pencil-alt"></i>
                            <li className="selected">Fill Out Task Details</li>
                            <li>View Taskers &amp; Prices</li>
                            <li>Confirm Details</li>
                        </ul>
                        <div>
                            <i className="fas fa-shield-alt"></i>
                            <div>Trust &amp; Support Pledge:  </div> 
                            <span>Always have peace of mind</span>
                        </div>
                    </div>
                </div>
                ) 
    }

export default TaskLowerNavFill;