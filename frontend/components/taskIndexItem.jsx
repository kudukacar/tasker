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

    taskerImage() {
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
        if(this.props.tasker) {
            return imagesObj[this.props.tasker.id]
        }
    }
    render() {
        
        if(this.state.mode === 'showdetails') {
            return (
                <div className="taskindexitem">
                    <div className="taskindexcategory">
                        <h1>{this.category()}</h1>
                        <div><img src={this.taskerImage()} />{this.cancelTask()}</div> 
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
                        <div><img src={this.taskerImage()} />{this.cancelTask()}</div> 
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
                            <li className="taskindexitemdetail">{this.tasker()}</li>
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