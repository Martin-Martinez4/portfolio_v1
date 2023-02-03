
import React, { useState, useEffect } from "react";


const TopNav = () => {

    const [offset, setOffset] = useState(0);

    useEffect(() => {

        const onScroll = () => setOffset(window.pageYOffset);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return(

        <nav className={`nav top-nav ${offset > 200 ? "fadeOutUp" : "fadeInDown"}`}>
        <ul className={`nav-container`}>
         
            {/* <li  className="nav-link"><Link to="/about" >About</Link></li> */}
            <li  className="nav-link"><a className="glow" href="#projects" >Projects</a></li>
            <li  className="nav-link"><a className="glow" href="#contactMe" >Contact</a></li>
        </ul>
    </nav>

    )
}

export default TopNav;



