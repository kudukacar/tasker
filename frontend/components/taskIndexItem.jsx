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


    render() {
        return (
            <div></div>
        )
    }
}

export default TaskIndexItem;