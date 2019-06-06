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
                        <div>
                            <h3>How I can help:</h3>
                            <h4>{this.props.skillsDescription}</h4>
                        </div>
                    </div>
            </div>
        )
    }
}

export default TaskerIndexItem;