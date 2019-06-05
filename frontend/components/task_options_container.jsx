import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import React from 'react';
import { Link } from 'react-router-dom';

class TaskOptions extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            size: "",
            complete: false,
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
        if (this.state.size) {
            this.setState({ complete: true }, () => {
                this.props.handleData({ size: this.state.size });
            });

        }
    }


    render() {
        if (this.state.complete === false) {
            return (
                <div className="taskinterest">
                    <div>
                        <div>TASK OPTIONS</div>
                        <label><input type="radio" name="taskoption" value="Small - Est. 1 hr" onChange={this.update('size')} /> Small - Est. 1hr</label>
                        <label><input type="radio" name="taskoption" value="Medium - Est. 2-3 hrs" onChange={this.update('size')} /> Medium - Est. 2-3 hrs</label>
                        <label><input type="radio" name="taskoption" value="Large - Est. 4+ hrs" onChange={this.update('size')} /> Large - Est. 4+ hrs</label>
                        <h1><button onClick={this.handleClick}>Continue</button></h1>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="taskinterest">
                <div>
                    <div><div>TASK OPTIONS</div><i className="fas fa-check"></i></div>
                        <label><i className="fas fa-tasks"></i>{this.state.size}</label>
                </div>
                </div>
            )
        }
    }
}

export default TaskOptions;