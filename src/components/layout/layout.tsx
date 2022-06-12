
import React, { Children, FC, useState, useEffect } from "react";

import { Link } from "gatsby";

import "./layout.scss";

import Github from "../../../public/icons/github-svgrepo-com.svg";
import LinkdIn from "../../../public/icons/linkedin-svgrepo-com.svg";
import Site from "../../../public/icons/globe-wire-svgrepo-com.svg";

type Props = {
    children?: React.ReactNode
};

const Layout: FC<Props> = ({ children }) => {

    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return(
        <>
        {console.log(offset)} 
        <nav className={`nav top-nav ${offset > 200 ? "hidden" : ""}`}>
            <ul className={`nav-container`}>
             
                <li  className="nav-link"><Link to="/about" >About</Link></li>
                <li  className="nav-link"><Link to="/about" >Projects</Link></li>
                <li  className="nav-link"><Link to="/about" >Contact</Link></li>
            </ul>
        </nav>

        
        <nav className="nav horizontal-nav">
            <ul className="nav-container-horizontal">
               
                <li  className="nav-link-horizontal"><Link to="https://github.com/Martin-Martinez4" ><img src={Github} className="nav-link-horizontal-icon"></img></Link></li>
                <li  className="nav-link-horizontal"><Link to="/about" ><img  className="nav-link-horizontal-icon" src={LinkdIn}></img></Link></li>
                <li  className="nav-link-horizontal"><Link to="/about" ><img  className="nav-link-horizontal-icon" src={Site}></img></Link></li>
            </ul>
        </nav>
        <main className="main-container">

            {children}
        </main>
        {/* <nav className="nav bottom-nav">
            <ul>
                <li><Link to="/" >Home</Link></li>
                <li><Link to="/about" >About</Link></li>
            </ul>
        </nav> */}
        </>

    )

}

export default Layout;

