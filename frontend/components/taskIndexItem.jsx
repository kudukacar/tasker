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
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        if (this.state.mode === 'showdetails') {
            this.setState({ mode: 'hidedetails' });
        } else {
            this.setState({ mode: 'showdetails' });
        }
    }

    formatDate() {
        if(this.props.task) {
            const date = this.props.task.date.split("-");
            return (
                <li>{date[2]}</li>
            )
        }
    }

    formatMonth(){
        if(this.props.task) {
            const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            const date = this.props.task.date.split("-");
            const month = months[parseInt(date[1]-1)];
            return (
                <li>{month}</li>
            )
        }
    }

    formatTime() {
        if(this.props.task) {
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
    }

    category() {
        if(this.props.category) {
            return this.props.category.title;
        }
    }

    tasker() {
        if(this.props.tasker) {
            return (<div>{this.props.tasker.first_name} {this.props.tasker.last_name[0]}.</div>) 
        }
    }

    hourlyRate() {
        if((this.props.tasker && this.props.taskerCats) && (this.props.category)) {
            return this.props.tasker.tasker_cat_ids.map(tasker_cat_id => {
                if(this.props.taskerCats[tasker_cat_id].category_id === this.props.category.id) {
                    return this.props.taskerCats[tasker_cat_id].hourly_rate;
                }
            })
        }
    }

    cancelTask() {
        if(this.props.cancelTask) {
            return (
                <span onClick={() => this.props.cancelTask(this.props.task.id)}>Cancel Task</span>
            )
        }
    }

    taskerContact() {
        if(this.props.cancelTask) {
            return (
                <h2>Taskers usually contact you to chat about your tasks in less than 1 hour.</h2>
            )
        }
    }

    render() {
        if(this.state.mode === 'showdetails') {
            return (
                <div className="taskindexitem">
                    <div className="taskindexcategory">
                        <h1>{this.category()}</h1>
                        <div><img src="https://www.ichs.com/wp-content/uploads/2016/11/generic-headshot-Copy-6.png" />{this.cancelTask()}</div> 
                    </div>
                    {this.taskerContact()}
                    <div className="taskindextime"><ul><ul className="taskindexday">{this.formatDate()}</ul><ul className="taskindexmonth">{this.formatMonth()}</ul></ul><span>{this.formatTime()}</span></div>
                    <span onClick={this.handleClick}><span>Show Details</span><i className="fas fa-angle-down"></i></span>
                </div>
            )
        } else {
            return (
                <div className="taskindexitem">
                    <div className="taskindexcategory">
                        <h1>{this.category()}</h1>
                        <div><img src="https://www.ichs.com/wp-content/uploads/2016/11/generic-headshot-Copy-6.png" />{this.cancelTask()}</div> 
                    </div>
                    {this.taskerContact()}
                    <div className="taskindextime"><ul><ul className="taskindexday">{this.formatDate()}</ul><ul className="taskindexmonth">{this.formatMonth()}</ul></ul><span>{this.formatTime()}</span></div>
                    <div className="taskindexiteminfo">
                        <ul>
                            <li>Location</li>
                            <li className="taskindexitemdetail"><i className="fas fa-map-marker-alt"></i> {this.props.task.start_address}</li>
                        </ul>
                        <ul>
                            <li>Tasker</li>
                            <li className="taskindexitemdetail">William R</li>
                        </ul>
                        <ul>
                            <li>Price</li>
                            <li className="taskindexitemdetail">${this.hourlyRate()}/hr</li>
                        </ul>
                    </div>
                    <ul className="taskindexitemdesc">
                        <li>Description</li>
                        <li className="taskindexitemdetail">{this.props.task.detail}</li>
                    </ul>
                    <ul className="taskindexitemdesc">
                        <li className="taskindexitemscope"># Scope</li>
                        <li className="taskindexitemdetail">{this.props.task.size}</li>
                    </ul>
                    <span onClick={this.handleClick}><span>Hide Details</span><i className="fas fa-angle-down"></i></span>
                </div>
            )
        }

    }
}

export default TaskIndexItem;