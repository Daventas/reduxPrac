import React from 'react'
//import projectReducer from '../../store/reducers/projectReducer'

const ProjectSummary = ({projects}) => {

    return (
        <div className="project-list section">
            <div className="card z-depth-0 project-summary">
                <div className="card-content grey-txt text-darken-3">
                    <span className="card-title">{projects.title}</span>
                    <p>{projects.content}</p>
                    <p className="grey-text">3rd September, 2am</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectSummary