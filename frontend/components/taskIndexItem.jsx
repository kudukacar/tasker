import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import React from 'react';
import { Link } from 'react-router-dom';

class TaskIndexItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mode: 'showdetails',
        }
    }

    handleClick(e) {
        e.preventDefault();
    }

    formatDate() {
        const date = this.props.task.date.split("-");
        return (
                <li>{date[2]}</li>
        )
    }

    formatMonth(){
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const date = this.props.task.date.split("-");
        const month = months[parseInt(date[1])];
        return (
                <li>{month}</li>
        )
    }

    formatTime() {
        const time = this.props.task.time.split(":");
        const timeInt = parseInt(time[0].slice(-2));
        let ampm = "";
        if (timeInt < 12) {
            ampm = "am";
        } else {
            ampm = "pm";
        }
        let hour = null;
        if (timeInt === 0) {
            hour = 12;
        } else if (timeInt < 13) {
            hour = timeInt;
        } else {
            hour = timeInt - 12;
        }

        return (hour + ":" + time[1] + ampm);
    }

    category() {
        if(this.props.category) {
            return this.props.category.title;
        }
    }

    render() {
        if(this.state.mode === 'showdetails') {
            return (
                <div className="taskindexitem">
                    <div className="taskindexcategory">
                        <h1>{this.category()}</h1>
                        <img src="https://www.ichs.com/wp-content/uploads/2016/11/generic-headshot-Copy-6.png" />
                    </div>
                    <h2>Taskers usually contact you to chat about your tasks in less than 1 hour.</h2>
                    <div className="taskindextime"><ul><ul className="taskindexday">{this.formatDate()}</ul><ul className="taskindexmonth">{this.formatMonth()}</ul></ul><span>{this.formatTime()}</span></div>
                    <span><span>Show Details</span><i className="fas fa-angle-down"></i></span>
                </div>
            )
        } else {
            return (
                <div>hello</div>
            )
        }

    }
}

export default TaskIndexItem;