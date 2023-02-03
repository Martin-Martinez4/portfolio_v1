
import React, {FC} from "react";
import GithubSvg from "../../images/svg/GithubSvg";
import LinkSvg from "../../images/svg/linkSvg";

import "./project.scss";

type project = {
    id: string,
    project_name: string,
    description: string,
    image_Url: string,
    repo_site: string,
    live_site: string,

}

const Project: FC<{project: project}> = ({ project }) =>{
    
    const {id, project_name, description, image_Url, repo_site, live_site } = project;

    return(
        <div className="project-container">

            <div className="project-text">
                {/* <h2 className="project-header">{project_name}</h2> */}
                <h2 className="project-header">{project_name}</h2>
                
                <p>
                    {description}
                </p>
           
                <div className="project-links" >
                   
                    {
                       !repo_site
                        ? 
                        ""
                        :
                        <a className="project-links-link" title="link to github repo" href={repo_site}>
                            
                            <GithubSvg classes={"project-links-icon grow toTertiary"}></GithubSvg>
                        </a>
                    }

                    {
                        !live_site
                        ? 
                        ""
                        :
                        <a  href={live_site} title="link to live site" className="project-links-link">
                            <LinkSvg classes={"project-links-icon grow toTertiary"}></LinkSvg>
                        </a>
                    }
                        
                </div>
             
            </div>
            <div className="project-image-container">

                <img className="project-image" src={image_Url} ></img>
            </div>
        </div>

    )


}

export default Project;