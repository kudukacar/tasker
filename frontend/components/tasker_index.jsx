import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import React from 'react';
import { Link } from 'react-router-dom';
import TaskerIndexItem from './tasker_index_item';


class TaskerIndex extends React.Component {

    constructor(props) {
        super(props);
    }

    taskers() {
        return this.props.taskers.map(tasker => {
            this.props.taskerCats.map(taskerCat => {
                if(taskerCat.user_id === tasker.id) {
                    return (<li><TaskerIndexItem
                        key={tasker.id}
                        tasker={tasker}
                        skillsDescription={taskerCat.skills_description}
                        hourlyRate={taskerCat.hourly_rate}
                        handleData={this.props.handleData} /></li>)
                }
            })
        })
    }

    render(){
        return(
            <div>
                <ul>
                    {this.taskers()}
                </ul>
            </div>
        )
    }

}

export default TaskerIndex;