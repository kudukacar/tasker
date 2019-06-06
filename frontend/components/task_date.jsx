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

    header() {
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const today = new Date();
        const month = today.getMonth();
        const year = today.getFullYear();
        return (months[month] + " " + year);

    }

    render() {
            return (
                <div className="datetimebackground">
                <div className="datetime">
                    <div className="datetimeinput">
                        <div>
                        <h2>{this.header()}</h2>
                        <label><input type="date" min={this.todaysdate()} value={this.state.date} onChange={this.update('date')} /></label>
                        <label><input type="time" min="08:00:00" max="16:30:00" value={this.state.time} onChange={this.update('time')} /></label>
                        </div>
                    </div>
                    <div className="datetimeinfo">
                        <div>
                        <div>Request for:</div>
                        <div>{this.state.date} {this.state.time}</div>
                        <h1><button onClick={this.handleClick}>Select &amp; Continue</button></h1>
                        </div>
                    </div>
                </div>
                </div>
            )
    }
}

export default TaskDate;