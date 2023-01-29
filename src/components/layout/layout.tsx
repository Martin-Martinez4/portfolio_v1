
import React, { Children, FC, useState, useEffect } from "react";

import { Link } from "gatsby";

import "./layout.scss";

import Github from "../../images/svg/GithubSvg";
import LinkdIn from "../../images/svg/LinkedinSvg";
import Site from "../../images/svg/SiteSvg";
import Chevron from "../../images/svg/ChevronSvg";
import ChevronSvg from "../../images/svg/ChevronSvg";


type Props = {
    children?: React.ReactNode
};

const Layout: FC<Props> = ({ children }) => {

    const [ widerNav, setWiderNav ] = useState(false)

    const [offset, setOffset] = useState(0);

    function toggleBoolState(currState: boolean, setFunction:React.Dispatch<React.SetStateAction<boolean>> ): void {

        setFunction(!currState)

    }

    useEffect(() => {

        if (typeof window !== "undefined") {
            // eslint-disable-next-line global-require
            require("smooth-scroll")('a[href*="#"]')
        }

        const onScroll = () => setOffset(window.pageYOffset);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return(
        <>
        {console.log(widerNav)} 
        <nav className={`nav top-nav ${offset > 200 ? "hidden" : ""}`}>
            <ul className={`nav-container`}>
             
                {/* <li  className="nav-link"><Link to="/about" >About</Link></li> */}
                <li  className="nav-link"><a href="#projects" >Projects</a></li>
                <li  className="nav-link"><a href="#contactMe" >Contact</a></li>
            </ul>
        </nav>

        <nav className={`nav horizontal-nav ${widerNav ? "wider" : "" } `}>
            <ul className="nav-container-horizontal">
               
                <li  className={`nav-link-horizontal ${widerNav ? "" : "width-550-hidden" }`}>
                    <Link to="https://github.com/Martin-Martinez4" >
                        <Github classes={"nav-link-horizontal-icon grow glow"} ></Github>
                    </Link>
                 
                </li>
                {/* <li  className={`nav-link-horizontal ${widerNav ? "" : "width-550-hidden" }`}><Link to="/about" ><img  className="nav-link-horizontal-icon" src={LinkdIn}></img></Link></li>
                <li  className={`nav-link-horizontal ${widerNav ? "" : "width-550-hidden" }`}><Link to="/about" ><img  className="nav-link-horizontal-icon" src={Site}></img></Link></li> */}
                <li  className={`nav-link-horizontal ${widerNav ? "hidden" : "hidden-min-width-550" }`}>
                        {/* <img  className="nav-link-horizontal-icon" src={Chevron}></img> */}
                        <ChevronSvg mode={2} classes={"nav-link-horizontal-icon pointer toWhite"} toggleFunciton={() => toggleBoolState(widerNav, setWiderNav)} ></ChevronSvg>
                </li>
                <li  className={`nav-link-horizontal ${widerNav ? "hidden-min-width-550" : "hidden" }`}>
                        {/* <img  className="nav-link-horizontal-icon" src={Chevron}></img> */}
                        <ChevronSvg mode={1} classes={"nav-link-horizontal-icon pointer toWhite"} toggleFunciton={() => toggleBoolState(widerNav, setWiderNav)} ></ChevronSvg>
                </li>
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

