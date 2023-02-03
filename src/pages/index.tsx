
import React, { FC } from "react";

import { graphql, Link, useStaticQuery } from "gatsby";

import Layout from "../components/layout/layout";

import AboutMe from "../components/about/about";

import Projects from "../components/projects/projects";

import Techbadge from "../components/techbadge/techbadge";

import GithubSvg from "../images/svg/GithubSvg";


// styles
const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

import "./index.scss";
import "./aimations.scss";

// markup
const IndexPage: FC = () => {

  const {projects} = useStaticQuery(
    graphql`{projects: allProjectsJson 
        {
            edges {
                node {
                    id
                    project_name
                    description
                    repo_site
                    live_site
                    image_Url
                    # highlights {
                    # features
                    # tagline
                    # title
                    # }
                }
            }
        }
    }`
  )


  return (

    <>
    <Layout>
      <main className="main-content" style={pageStyles}>

        <div className="background-image">

          <div className="hero-text">
            <h1 className="biggest" >Hello, I am Martin Martinez</h1>
              <h4 className="wordCarousel">
                  <span className="bigger">I create websites and apps using: </span>
                  <div>
                    
                      <ul className="flip5">
                          <li className="big">React</li>
                          <li className="big">CSS</li>
                          <li className="big">JavaScript</li>
                          <li className="big">Postgres</li>
                          <li className="big">NodeJS</li>
                      </ul>
                  </div>
              </h4>
              
          </div>
        
        </div>

        <div className="section">
          <Projects projects={projects.edges}></Projects>

        </div>
       
       
        <div className="section-60">

          <div>
            <AboutMe></AboutMe>
         

          </div>

   

        </div>
       


<nav className="nav bottom-nav">
  <ul className="nav-container-bottom">
      <li className="svg-container"> 
      <Link to="https://github.com/Martin-Martinez4" >

        <GithubSvg classes="white svg-medium"></GithubSvg> 
      </Link>
      </li>
      <li>Copyright © {new Date().getFullYear()} Martin Martinez</li>
  </ul>
</nav>
      </main>
    </Layout>


</>

    
  )
}

export default IndexPage
