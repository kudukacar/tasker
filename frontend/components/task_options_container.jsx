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
                <div>
                    <div>TASK OPTIONS</div>
                    <input type="radio" name="taskoption" value="Small - Est. 1 hr" onChange={this.update('size')} />
                    <input type="radio" name="taskoption" value="Medium - Est. 2-3 hrs" onChange={this.update('size')} />
                    <input type="radio" name="taskoption" value="Large - Est. 4+ hrs" onChange={this.update('size')} />
                    <button onClick={this.handleClick}>Continue</button>
                </div>
            )
        } else {
            return (
                <div>
                    <div>TASK OPTIONS</div>
                    <div>{this.state.size}</div>
                </div>
            )
        }
    }
}

export default TaskOptions;