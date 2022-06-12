
import React, { FC } from "react";

import "./projects.scss";

import Logor_image from "../../../public/static/Logor_Laptop.png";

import github_svg from "../../../public/icons/github-svgrepo-com.svg";
import link_svg from "../../../public/icons/link-svgrepo-com.svg";

const Projects: FC = () => {

    return (
        <>
        <div>
        <h1 className="projects-header">My Projects</h1>
        <div className="projects-container">

            <div className="project-container">
                


                <div className="project-images-container">

                <img className="project-image" src={Logor_image} ></img>
                </div>

                <div className="project-text">
                    <h2 className="project-header">Logor</h2>

                    <div className="project-links" >
                        <a className="project-links-link" title="link to github repo" href="https://github.com/Martin-Martinez4/logor"><img  className="project-links-icon" src={github_svg}></img></a>
                        <a  href="https://logor-frontend.herokuapp.com/" title="link to live site (Heroku)" className="project-links-link"><img className="project-links-icon" src={link_svg}></img></a>
                    </div>

                    <p>
                        A mock fullstack social media site.  Made using the PERN (Postgres, Express, Rect, Node) stack
                    </p>


                    <p className="project-bullets-header">Frontend:</p>  
                    <ul className="project-bullets">
                        <li>Technologies: React, Typescript</li>
                        <li>Features:
                            <ul>
                            <li>HTTP only JWt token based Authentication</li>
                            <li>Users can create, update, and delete thier own posts</li>
                            <li>Users can like and respond to other user's posts</li>
                            <li>Users can edit their own profiles</li>
                            </ul>
                        </li>
                    </ul>

                    <p className="project-bullets-header">Backend:</p>    
                    <ul className="project-bullets">
                        <li>Technologies: Node, Express, Knex, PSQL, Mullter</li>
                        <li>Features:
                            <li>JWT Authentication refresh token sent as a HTTP Only cookie</li>
                            <li>MVC file structure</li>
                            <li>Multer to handle file uploads</li>
                            <li>Password hashes are encrypted before being stored</li>
                            <li>HelmetJs and cors middlewares to set security headers and only allow requests from the frontend</li>
                        </li>
                    </ul>
                </div>


            </div>

            <div className="project-container">
                


                <div className="project-images-container">

                <img className="project-image" src={Logor_image} ></img>
                </div>

                <div className="project-text">
                    <h2 className="project-header">Logor</h2>

                    <p>
                        A mock fullstack social media site.  Made using the PERN (Postgres, Express, Rect, Node) stack
                    </p>


                    <p className="project-bullets-header">Frontend:</p>  
                    <ul className="project-bullets">
                        <li>Technologies: React, Typescript</li>
                        <li>Features:
                            <ul>
                            <li>HTTP only JWt token based Authentication</li>
                            <li>Users can create, update, and delete thier own posts</li>
                            <li>Users can like and respond to other user's posts</li>
                            <li>Users can edit their own profiles</li>
                            </ul>
                        </li>
                    </ul>

                    <p className="project-bullets-header">Backend:</p>    
                    <ul className="project-bullets">
                        <li>Technologies: Node, Express, Knex, PSQL, Mullter</li>
                        <li>Features:
                            <li>JWT Authentication refresh token sent as a HTTP Only cookie</li>
                            <li>MVC file structure</li>
                            <li>Multer to handle file uploads</li>
                            <li>Password hashes are encrypted before being stored</li>
                            <li>HelmetJs and cors middlewares to set security headers and only allow requests from the frontend</li>
                        </li>
                    </ul>
                </div>


            </div>

           
            

            

        </div>
        </div>

        </>
    )
}

export default Projects;
