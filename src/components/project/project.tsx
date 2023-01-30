
import { features } from "process";
import React, {FC} from "react";
import GithubSvg from "../../images/svg/GithubSvg";
import LinkSvg from "../../images/svg/linkSvg";

type highlight = {

    title: string,
    features: string[],
    tagline: string,
}

type project = {
    project_name: string,
    description: string,
    image_Url: string,
    repo_site: string,
    live_site: string,
    highlights: highlight[]

}

const Project: FC<any> = (project) =>{

    
    const {project_name, description, image_Url, repo_site, live_site, highlights} = project.project;
    console.log(image_Url)

    return(
        <div id="projects" className="project-container">

            <div className="project-image-container">
            {
                !image_Url
                ?
                <div className="project-image" style={{boxShadow: "none"}}></div>
                :
                <img className="project-image" src={image_Url} ></img>
            }

            </div>

            <div className="project-text">
                <>
                <h2 className="project-header">{project_name}</h2>

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

                <p>
                    {description}
                </p>

                {/* Can make into a new component */}
                {
                    !highlights
                    ?
                    ""
                    :
                highlights?.map((section: highlight) => {
                    return(<>
                        <p className="project-bullets-header">{section.title}</p>  
                            <p>{section.tagline}</p>
                        <div className="project-bullets">
                            <div>Features:
                                <div className="features-container">
                                        {
                                        section?.features.map(feature => {
                                            return (<p>{feature}</p>)
                                        })}
                                   
                                </div>
                            </div>
                        </div>
                    </>)
                })
            }

             
                </>
            </div>
        </div>

    )


}

export default Project;