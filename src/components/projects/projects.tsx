
import React, { FC, useEffect, useState } from "react";
import Project from "../project/project";

import "./projects.scss";

import Logor_image from "../../images/Logor_Laptop.png";
import GithubSvg from "../../images/svg/GithubSvg";
import LinkSvg from "../../images/svg/linkSvg";

type highlight = {

    title: string,
    features: string[],
    tagline: string,
}

type project = {
    project_name: string,
    description: string
    image_Url: string,
    repo_site: string,
    live_site: string,
    highlights: highlight[]

}

type projectsnode = {
    node: project
}


const Projects: FC<any> = (nodes) => {
    
    const projects = nodes.projects


    return (
        <>
            {
               projects.map(project => <Project project ={project.node}></Project>)
            }
        
        </>
    )
}

export default Projects;
