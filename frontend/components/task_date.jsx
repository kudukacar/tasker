import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import React from 'react';
import { Link } from 'react-router-dom';

class TaskDate extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date: this.todaysdate(),
            time: "08:00",
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
        if (this.state.date && this.state.time) {
                this.props.handleData({ date: this.state.date, time: this.state.time });
        };

    }

    todaysdate() {
        const today = new Date();
        let day = today.getDate();
        let month = today.getMonth() + 1;
        let year = today.getFullYear();
        const dash = "-";

        if (day < 10) {
            day = '0' + day;
        }
        if (month < 10) {
            month = '0' + month;
        }
        return (year + dash + month + dash + day);
    }

    maxDate() {
        const today = new Date();
        let day = today.getDate();
        let month = today.getMonth() + 1;
        let year = today.getFullYear();
        const dash = "-";

        if (day < 10) {
            day = '0' + day;
        }
        if (month < 10) {
            month = '0' + month;
        }
        return (year + dash + month + dash + day);
    }
    
    displayDate() {
        const date = this.state.date.split("-");
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const monthint = parseInt(date[1]);
        const month = months[monthint - 1];
        return (month + " " + date[2] + ",");

    }

    displayTime() {
        const time = this.state.time.split(":");
        const timeInt = parseInt(time[0]);
        let ampm = "";
        if(timeInt < 12) {
            ampm = "am";
        } else {
            ampm = "pm";
        }
        let hour = null;
        if(timeInt === 0) {
            hour = 12;
        } else if(timeInt < 13) {
            hour = timeInt;
        } else {
            hour = timeInt - 12;
        }

        return (hour + ":" + time[1] + ampm);
    }

    header() {
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const today = new Date();
        const month = today.getMonth();
        const year = today.getFullYear();
        return (months[month] + " " + year);

    }

    taskerName() {
        return this.props.taskers.map(tasker => {
            if(tasker.id === this.props.taskerId) {
                return <li key={tasker.id}>{tasker.first_name} {tasker.last_name[0]}.'s Availability</li>
            }
        })
    }

    render() {
            return (
                <div className="datetimepage">
                    <div className="datetimebackground">
                        <div className="datetimeheader">Choose your task date and start time:</div>
                        <div className="datetime">
                            <div className="datetimeinput">
                                <div>
                                <ul><img src="https://www.ichs.com/wp-content/uploads/2016/11/generic-headshot-Copy-6.png" />{this.taskerName()}</ul>
                                <h2>{this.header()}</h2>
                                <label><input type="date" min={this.todaysdate()} value={this.state.date} onChange={this.update('date')} /></label>
                                <label><input type="time" min="08:00:00" max="16:30:00" value={this.state.time} onChange={this.update('time')} /></label>
                                <h3>You can chat to adjust task details or change start time after confirming.</h3>
                                </div>
                            </div>
                            <div className="datetimeinfo">
                                <div>
                                <div className="datetimeinfoheader">Request for:</div>
                                <div>{this.displayDate()} {this.displayTime()}</div>
                                <h1><button onClick={this.handleClick}>Select &amp; Continue</button></h1>
                                <h3><i className="far fa-list-alt"></i>Next, confirm your details to get connected with your Tasker.</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
    }
}

export default TaskDate;