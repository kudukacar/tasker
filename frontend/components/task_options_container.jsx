import React from 'react';

class TaskOptions extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            size: "",
            complete: false,
            error: false,
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleReClick = this.handleReClick.bind(this);
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

        } else {
            this.setState({ error: true });
        }
    }
    handleReClick(e) {
        e.preventDefault();
        this.setState({ complete: false });
    }

    error() {
        if (this.state.error === true) {
            return <p>Must be chosen.</p>
        }

    }


    render() {
        if (this.state.complete === false) {
            return (
                <div className="taskinterest">
                    <div>
                        <div>TASK OPTIONS</div>
                        <label><input type="radio" 
                                        name="taskoption" 
                                        value="Small - Est. 1 hr" 
                                        onChange={this.update('size')} 
                                        checked={this.state.size === "Small - Est. 1 hr"}/> Small - Est. 1hr
                        </label>
                        <label><input type="radio" 
                                        name="taskoption" 
                                        value="Medium - Est. 2-3 hrs" 
                                        onChange={this.update('size')} 
                                        checked={this.state.size === "Medium - Est. 2-3 hrs"}/> Medium - Est. 2-3 hrs
                        </label>
                        <label><input type="radio" 
                                        name="taskoption" 
                                        value="Large - Est. 4+ hrs" 
                                        onChange={this.update('size')} 
                                        checked={this.state.size === "Large - Est. 4+ hrs"}/> Large - Est. 4+ hrs
                        </label>
                        <div className="error">{this.error()}</div>
                        <h1><button onClick={this.handleClick}>Continue</button></h1>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="taskinterest2" onClick={this.handleReClick}>
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