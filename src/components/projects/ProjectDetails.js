import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section project-datails">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id} </span>
                    <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500,</p>
                </div>
                <div className="card-action great lighten-4 grey-text">
                    <div>Posted by Usuar45445</div>
                    <div>2 de septiembre, 2pm</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
