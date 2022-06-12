
import React, { FC } from "react";

import { Link } from "gatsby";

import Layout from "../components/layout/layout";

import AboutMe from "../components/about/about";

import Projects from "../components/projects/projects";

// styles
const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const doclistStyles = {
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  display: `inline-block`,
  marginBottom: 24,
  marginRight: 12,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const docLinks = [
  {
    text: "TypeScript Documentation",
    url: "https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/",
    color: "#8954A8",
  },
  {
    text: "GraphQL Typegen Documentation",
    url: "https://www.gatsbyjs.com/docs/how-to/local-development/graphql-typegen/",
    color: "#8954A8",
  }
]

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative" as "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

// data
const links = [
 
]

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

            <p>A professional summary stating your best-selling points based on the job description e.g. I am a Software Engineer with strong fundamentals in XXX looking to XXXX.</p>

            <a className="button button-primary">See My Projects</a>


          </div>


        </div>
       
        <div className="section">

          <Projects></Projects>


        </div>
       
        <div className="section-60">

          <div>
            {/* <h1 className="biggest" >Contact Me Component will go here</h1> */}

            <AboutMe></AboutMe>
         

          </div>


        </div>
       


<nav className="nav bottom-nav">
<ul>
    <li><Link to="/" >Home</Link></li>
    <li><Link to="/about" >About</Link></li>
</ul>
</nav>
      </main>
    </Layout>


</>

    
  )
}

export default IndexPage
