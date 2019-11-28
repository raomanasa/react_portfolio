import React from "react"

const ProjectCard = (props) => {
  let project = props.project
  return (
    <>
    
      <div class="ui card">
        <div class="image">
          <img src={project.image} />
        </div>
        <div class="content">
          <h3 class="ui header">{project.name}</h3>

          <div class="description">
            {project.description}
            <a herf = {project.link}><img src = {project.img}width="100%"height="50%" ></img> </a>
            </div>
          </div>
        </div>
    </>
  )
}

export default ProjectCard

