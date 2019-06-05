import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import React from 'react';
import { Link } from 'react-router-dom';

class TaskerIndexItem extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.update = this.update.bind(this);
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
                <div>
                    <h1><button onClick={this.handleClick}>Select &amp; Continue</button></h1>
                </div>
            </div>
        )
    }
}

export default TaskerIndexItem;