
import React, { FC, useState } from "react";

import { Link } from "gatsby";

import Layout from "../components/layout/layout";

import AboutMe from "../components/about/about";

import Projects from "../components/projects/projects";

import GithubSvg from "../images/svg/GithubSvg";
import LinkedinSvg from "../images/svg/LinkedinSvg";
import SiteSvg from "../images/svg/SiteSvg";
import ChevronSvg from "../images/svg/ChevronSvg";

// styles
const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

import "./index.scss";

// markup
const IndexPage: FC = () => {

  return (

    <>
    <Layout>
      <main className="main-content" style={pageStyles}>

        <div className="background-image">

          <div className="hero-text">
            <h1 className="biggest" >Hello, I am Martin Martinez</h1>
            <h2 className="bigger" >I develop web apps and create web sites</h2>

            {/* <p>A professional summary stating your best-selling points based on the job description e.g. I am a Software Engineer with strong fundamentals in XXX looking to XXXX.</p> */}
            <p>I am a web developer with strong fundamentals in the React, Node, JavaScript, and CSS looking to create websites and apps that are performant and user-friendly.  </p>


          </div>


        </div>
       
        <div className="section">

          <Projects></Projects>


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
      {/* <Link to="/about">
        <LinkedinSvg classes="white svg-medium"></LinkedinSvg>
      </Link>
      <Link to="/about">
        <SiteSvg classes="white svg-medium"></SiteSvg>
      </Link> */}
      </li>
      <li>Copyright © 2022 Martin Martinez</li>
  </ul>
</nav>
      </main>
    </Layout>


</>

    
  )
}

export default IndexPage
