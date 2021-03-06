import React from 'react';

class TaskLocation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            start_address: "",
            complete: true,
            error: false,
            parent: this.props.start_address,
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
        if (this.state.start_address) {
            this.setState({complete: true, parent: this.state.start_address});
            this.props.handleData({ start_address: this.state.start_address });
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
            return <p>Location is required.</p>
        }

    }

    render() {
        if (this.state.complete === false || this.state.parent === "") {
                return (
                    <div className="taskinterest">
                        <div>
                        <div>YOUR TASK LOCATION</div>
                            <input type="text" value={this.state.start_address} onChange={this.update('start_address')} />
                            <div className="error">{this.error()}</div>
                            <h1><button onClick={this.handleClick}>Continue</button></h1>
                        </div>
                    </div>
                )
        } else {
            return (
                <div className="taskinterest2" onClick={this.handleReClick}>
                    <div>
                        <div><div>YOUR TASK LOCATION</div><i className="fas fa-check"></i></div>
                        <h2>
                            <label><i className="fas fa-map-marker-alt"></i>{this.state.parent}</label>
                            <div>Good news!  Tasker is available in your area</div>
                        </h2>
                    </div>
                </div>
            )
        }
    }
}

export default TaskLocation;