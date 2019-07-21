import React from 'react';

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
        return (
            <div className="taskerProfile">
                    <div className="taskerimagesec">
                        <img src={imagesObj[this.props.tasker.id]} />
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