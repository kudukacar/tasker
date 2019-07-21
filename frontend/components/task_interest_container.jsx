import React from 'react';

class TaskInterest extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            taskinterest:"",
            complete: false,
            status: "booked",
            error: false,
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleReClick = this.handleReClick.bind(this);
        this.update = this.update.bind(this);
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        };
    }

    handleClick(e) {
        e.preventDefault();
        if (this.state.taskinterest) {
            this.setState({ complete: true });
            this.props.handleData({ status: "booked" });
        } else {
            this.setState({error:true});
        }
    }


    handleReClick(e) {
        e.preventDefault();
        this.setState({ complete: false });
    }

    error() {
        if(this.state.error === true) {
            return <p>Must be chosen.</p>
        }
        
    }
    render() {
            if (this.state.complete === false) {
                return (
                    <div className="taskinterest">
                        <div>
                            <div>TASK INTEREST</div>
                            <span>What brings you here today?</span>
                            <label>
                                <input type="radio" 
                                        name="taskinterest" 
                                        value="I'm ready to book right now" 
                                        onChange={this.update('taskinterest')} 
                                        checked={this.state.taskinterest === "I'm ready to book right now"}/> I'm ready to book right now
                            </label>
                            <label>
                                <input type="radio" 
                                        name="taskinterest" 
                                        value="I'm interested in booking sometime soon" 
                                        onChange={this.update('taskinterest')} 
                                        checked={this.state.taskinterest === "I'm interested in booking sometime soon"}/> I'm interested in booking sometime soon
                            </label>
                            <label><input type="radio" 
                                            name="taskinterest" 
                                            value="I'm just browsing" 
                                            onChange={this.update('taskinterest')} 
                                            checked={this.state.taskinterest === "I'm just browsing"} /> I'm just browsing
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
                            <div><div>TASK INTEREST</div><i className="fas fa-check"></i></div>
                            <label><i className="fas fa-clipboard-check"></i>{this.state.taskinterest}</label>
                        </div>
                    </div>
                )
            }
    }
}

export default TaskInterest;