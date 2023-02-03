
import React, { FC } from "react";
import Project from "../project/project";
import "./projects.scss";

// type highlight = {

//     title: string,
//     features: string[],
//     tagline: string,
// }

type project = {
    id: string,
    project_name: string,
    description: string
    image_Url: string,
    repo_site: string,
    live_site: string,

}

type node = {

    node: project

}

type projectsnode = {
    projects: node[]
}


const Projects: FC<projectsnode> = (nodes) => {
    
    const projects = nodes.projects

    return (
        <div id="projects" className="projects-container">
            {
               projects.map(project => <Project key={project.node.id} project={project.node}></Project>)
            }
        
        </div>
    )
}

export default Projects;
