import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import React from 'react';
import { Link } from 'react-router-dom';

class TaskLowerNav extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.props.section;

    }

    render() {
            if(this.state === "fillout") {
                return(
                <div className="lowernavcont">
                    <ul className="lowernav">
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
                ) 
            } else if (this.state === "confirm") {
                return (
                    <div className="lowernavcont">
                    <ul className="lowernav">
                        <li>Fill Out Task Details</li>
                        <li className="selected">View Taskers &amp; Prices</li>
                        <li>Confirm Details</li>
                    </ul>
                        <div>
                            <i className="fas fa-shield-alt"></i>
                            <div>Trust &amp; Support Pledge:  </div>
                            <span>All Taskers are ID &amp; background checked</span>
                        </div>
                    </div>
                ) 
            } else {
                return (
                    <div>
                    <ul className="lowernav">
                        <li>Fill Out Task Details</li>
                        <li>View Taskers &amp; Prices</li>
                        <li className="selected">Confirm Details</li>
                    </ul>
                        <div>
                            <i className="fas fa-shield-alt"></i>
                            <div>Trust &amp; Support Pledge:  </div>
                            <span>All Taskers are ID &amp; background checked</span>
                        </div>
                    </div>
                ) 
            }
    }

}

export default TaskLowerNav;