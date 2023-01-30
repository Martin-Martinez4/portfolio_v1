
import React, {useState} from "react";
import { Link } from "gatsby";

import Github from "../../images/svg/GithubSvg";
import ChevronSvg from "../../images/svg/ChevronSvg";



const LeftNav = () => {

    const [ widerNav, setWiderNav ] = useState(false)

    function toggleBoolState(currState: boolean, setFunction:React.Dispatch<React.SetStateAction<boolean>> ): void {

        setFunction(!currState)

    }

    return(

        <nav className={`zIndex10 nav horizontal-nav ${widerNav ? "stretchWidth wider" : "widthEaseInOut" } `}>
            <ul className="nav-container-horizontal">
            
                <li  className={`nav-link-horizontal ${widerNav ? "" : "width-550-hidden" }`}>
                    <Link to="https://github.com/Martin-Martinez4" >
                        <Github classes={"nav-link-horizontal-icon grow glow"} ></Github>
                    </Link>
                
                </li>
            
                <li  className={`nav-link-horizontal ${widerNav ? "hidden" : "hidden-min-width-550" }`}>
                        <ChevronSvg mode={2} classes={"nav-link-horizontal-icon pointer toWhite"} toggleFunciton={() => toggleBoolState(widerNav, setWiderNav)} ></ChevronSvg>
                </li>
                <li  className={`nav-link-horizontal ${widerNav ? "hidden-min-width-550" : "hidden" }`}>
                        {/* <img  className="nav-link-horizontal-icon" src={Chevron}></img> */}
                        <ChevronSvg mode={1} classes={"nav-link-horizontal-icon pointer toWhite"} toggleFunciton={() => toggleBoolState(widerNav, setWiderNav)} ></ChevronSvg>
                </li>
            </ul>

        </nav>
    )
}


export default LeftNav;


