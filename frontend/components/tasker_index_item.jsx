import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import React from 'react';
import { Link } from 'react-router-dom';

class TaskerIndexItem extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            tasker_id: this.props.tasker.id,
        }
    }

    handleClick(e) {
        e.preventDefault();
        this.props.handleData({ tasker_id: this.state.tasker_id });
    }

    categoryTasks() {
        if(this.props.category && this.props.tasks) {
            return this.props.tasks.filter(task => {
                if(task.tasker_id === this.props.tasker.id && task.category_id === this.props.category.id) {
                    return task;
                }
            })
        }
    }


    render() {
        return (
            <div className="taskerProfile">
                    <div className="taskerimagesec">
                    <img src="https://www.ichs.com/wp-content/uploads/2016/11/generic-headshot-Copy-6.png" />
                        <h1><button onClick={this.handleClick}>Select &amp; Continue</button></h1>
                        <span>You can chat with your Tasker, adjust task details, or change task time after booking.</span>
                    </div>
                    <div className="taskerinfo">
                        <div className="taskerName">
                            <h2>{this.props.tasker.first_name} {this.props.tasker.last_name[0]}.</h2>
                            <span>${this.props.hourlyRate}/hr</span>
                        </div>
                        <div className="elitetasker">
                            <i className="fas fa-star"></i>
                            <div className="tooltip"><div>Elite Tasker</div> <i className="fas fa-info-circle"></i> <span className="tooltiptext">This Tasker is an Elite Tasker because they are experienced and consistently get high ratings and reviews.  Taskers are independent contractors and this badge helps you make a more informed decision when choosing a Tasker.</span></div>
                        </div>
                    <div className="taskertasknumber"><i className="far fa-check-circle"></i>{this.categoryTasks().length} {this.props.category.title} Tasks</div>
                        <div className="taskerdetails">
                            <h3>How I can help:</h3>
                            <h4>{this.props.skillsDescription}</h4>
                        </div>
                    </div>
            </div>
        )
    }
}

export default TaskerIndexItem;