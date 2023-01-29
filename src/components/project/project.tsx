
import React, {FC} from "react";
import GithubSvg from "../../images/svg/GithubSvg";
import LinkSvg from "../../images/svg/linkSvg";

type Props = {

    imageUrl: string, 
    projectName: string, 
    repoLink?: string,
    liveSiteLink?: string,
    description: string,
    
}

const Project: FC<Props> = ({imageUrl, projectName, repoLink, liveSiteLink, description}) =>{

    return(
        <div className="project-container">

            <div className="project-images-container">

                <img className="project-image" src={imageUrl} ></img>
            </div>

            <div className="project-text">
                <h2 className="project-header">{projectName}</h2>

                <div className="project-links" >
                    {
                        repoLink === undefined
                        ? 
                        ""
                        :
                        <a className="project-links-link" title="link to github repo" href={repoLink}>
                            
                            <GithubSvg classes={"project-links-icon grow toTertiary"}></GithubSvg>
                        </a>
                    }

                    {
                        liveSiteLink === undefined
                        ? 
                        ""
                        :
                        <a  href={liveSiteLink} title="link to live site" className="project-links-link">
                            {/* <img className="project-links-icon" src={link_svg}></img> */}
                            <LinkSvg classes={"project-links-icon grow toTertiary"}></LinkSvg>
                        </a>
                    }
                        
                </div>

                <p>
                    {description}
                </p>

                {/* Can make into a new component */}
                <p className="project-bullets-header">Frontend:</p>  
                    <p>Technologies: React, Typescript</p>
                <div className="project-bullets">
                    <div>Features:
                        <div className="features-container">
                            <p>HTTP only JWt token based Authentication</p>
                            <p>Users can create, update, and delete thier own posts</p>
                            <p>Users can like and respond to other user's posts</p>
                            <p>Users can edit their own profiles</p>
                        </div>
                    </div>
                </div>

                <p className="project-bullets-header">Backend:</p>    
                    <p>Technologies: Node, Express, Knex, PSQL, Mullter</p>
                <div className="project-bullets">
                    <div>Features:
                        <div className="features-container">
                            <p>JWT Authentication refresh token sent as a HTTP Only cookie</p>
                            <p>MVC file structure</p>
                            <p>Multer to handle file uploads</p>
                            <p>Passwords hashes are encrypted before being stored</p>
                            <p>HelmetJs and cors middlewares to set security headers and only allow requests from the frontend</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )


}

export default Project;