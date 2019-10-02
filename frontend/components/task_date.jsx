import React from 'react';

class TaskDate extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date: this.todaysdate(),
            time: "08:00",
        }
        this.handleClick = this.handleClick.bind(this);
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
        const imagesObj = {
            2: window.hs2,
            3: window.hs3,
            4: window.hs4,
            5: window.hs5,
            6: window.hs6,
            7: window.hs7,
            8: window.hs8,
            9: window.hs9,
            10: window.hs10,
            11: window.hs11,
            12: window.hs12,
            13: window.hs13,
            14: window.hs14,
            15: window.hs15,
            16: window.hs16,
            17: window.hs17,
            18: window.hs18,
            19: window.hs19,
            20: window.hs20,
            21: window.hs21,
            22: window.hs22,
            23: window.hs2,
            24: window.hs3,
            25: window.hs4,
            26: window.hs5,
            27: window.hs6,
            28: window.hs7,
            29: window.hs8,
            30: window.hs9,
            31: window.hs10,
            32: window.hs11,
            33: window.hs12,
            34: window.hs13,
            35: window.hs14,
            36: window.hs15,
            37: window.hs16,
            38: window.hs17,
            39: window.hs18,
            40: window.hs19,
        }
            return (
                <div className="datetimepage">
                    <div className="datetimebackground">
                        <div className="datetimeheader">Choose your task date and start time:</div>
                        <div className="datetime">
                            <div className="datetimeinput">
                                <div>
                                    <ul><img src={imagesObj[this.props.taskerId]} />{this.taskerName()}</ul>
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