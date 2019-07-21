import React from 'react';
import TaskerIndexItem from './tasker_index_item';


class TaskerIndex extends React.Component {

    constructor(props) {
        super(props);
    }

    taskers() {
        return this.props.taskers.map(tasker => {
            return this.props.taskerCats.map((taskerCat, idx) => {
                if(taskerCat.user_id === tasker.id) {
                    return (<li key={idx}><TaskerIndexItem
                        tasker={tasker}
                        skillsDescription={taskerCat.skills_description}
                        hourlyRate={taskerCat.hourly_rate}
                        handleData={this.props.handleData}
                        tasks={this.props.tasks}
                        category={this.props.category}
                         /></li>)
                }
            })
        })
    }

    render(){
        return(
            <div className="taskerindex">
                <div>
                    <i className="fas fa-shield-alt"></i>
                    <div>Always have peace of mind.  All Taskers undergo ID and criminal background checks.</div>
                </div>
                <ul>
                    {this.taskers()}
                </ul>
            </div>
        )
    }

}

export default TaskerIndex;