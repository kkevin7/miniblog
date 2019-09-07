import React from 'react'
import moment from 'moment' ;
import 'moment/locale/es';

const ProjectSummary = ({project}) => {
  return (
    <div className="card z-depth-3 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title ">{project.title}</span>
        <p>Publicado por <span className="pink-text">{project.authorFirstName} {project.authorLastName}</span></p>
        <p className="grey-text">{moment(project.createdAt.toDate()).calendar()}</p>
      </div>
    </div>
  )
}

export default ProjectSummary