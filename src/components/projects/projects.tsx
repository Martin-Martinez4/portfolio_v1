
import React, { FC } from "react";

import { Link } from 'gatsby';

import "./projects.scss";

import Logor_image from "../../images/Logor_Laptop.png";
import GithubSvg from "../../images/svg/GithubSvg";
import linkSvg from "../../images/svg/linkSvg";
import LinkSvg from "../../images/svg/linkSvg";

const Projects: FC = () => {

    return (
        <>
        <div id="projects">
            <h1 className="projects-header">My Projects</h1>
            <div className="projects-container">

                <div className="project-container">

                    <div className="project-images-container">

                    <img className="project-image" src={Logor_image} ></img>
                    </div>

                    <div className="project-text">
                        <h2 className="project-header">Logor</h2>

                        <div className="project-links" >
                            <a className="project-links-link" title="link to github repo" href="https://github.com/Martin-Martinez4/logor">
                              
                                <GithubSvg classes={"project-links-icon grow toTertiary"}></GithubSvg>
                            </a>
                            <a  href="https://logor.onrender.com/" title="link to live site (Heroku)" className="project-links-link">
                                {/* <img className="project-links-icon" src={link_svg}></img> */}
                                <LinkSvg classes={"project-links-icon grow toTertiary"}></LinkSvg>
                            </a>
                                
                        </div>

                        <p>
                            A mock fullstack social media site.  Made using the PERN (Postgres, Express, React, Node) stack
                        </p>


                        <p className="project-bullets-header">Frontend:</p>  
                            <p>Technologies: React, Typescript</p>
                        <ul className="project-bullets">
                            <li>Features:
                                <div className="features-container">
                                    <p>HTTP only JWt token based Authentication</p>
                                    <p>Users can create, update, and delete thier own posts</p>
                                    <p>Users can like and respond to other user's posts</p>
                                    <p>Users can edit their own profiles</p>
                                </div>
                            </li>
                        </ul>

                        <p className="project-bullets-header">Backend:</p>    
                            <p>Technologies: Node, Express, Knex, PSQL, Mullter</p>
                        <ul className="project-bullets">
                            <li>Features:
                                <div className="features-container">
                                    <p>JWT Authentication refresh token sent as a HTTP Only cookie</p>
                                    <p>MVC file structure</p>
                                    <p>Multer to handle file uploads</p>
                                    <p>Passwords hashes are encrypted before being stored</p>
                                    <p>HelmetJs and cors middlewares to set security headers and only allow requests from the frontend</p>
                                </div>
                            </li>
                        </ul>
                    </div>



                </div>

                {/* <div className="project-container">
                    


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


                </div> */}


            </div>
        </div>

        </>
    )
}

export default Projects;
