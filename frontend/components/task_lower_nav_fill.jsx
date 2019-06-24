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
                            <i className="far fa-edit"></i>
                            <div>Tell us about your task.  We use these details to show Taskers in your area who fit your needs.</div> 
                        </div>
                    </div>
                </div>
                ) 
    }

export default TaskLowerNavFill;