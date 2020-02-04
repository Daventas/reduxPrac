import React from 'react'
//import projectReducer from '../../store/reducers/projectReducer'
import moment from 'moment'


const ProjectSummary = ({projects}) => {

    return (
        <div className="project-list section">
            <div className="card z-depth-0 project-summary">
                <div className="card-content grey-txt text-darken-3">
                    <span className="card-title">{projects.title}</span>
                    <p>Posted by {projects.authorFirstName} {projects.authorLastName}</p>
                    <p className="grey-text">{moment(projects.createAt.toDate()).calendar()}</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectSummary