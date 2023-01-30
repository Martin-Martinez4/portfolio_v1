
import React, { Children, FC, useState, useEffect } from "react";

import { Link } from "gatsby";

import "./layout.scss";

import Github from "../../images/svg/GithubSvg";
import LinkdIn from "../../images/svg/LinkedinSvg";
import Site from "../../images/svg/SiteSvg";
import Chevron from "../../images/svg/ChevronSvg";
import ChevronSvg from "../../images/svg/ChevronSvg";

import TopNav from "./TopNav";
import LeftNav from "./LeftNav";


type Props = {
    children?: React.ReactNode
};

const Layout: FC<Props> = ({ children }) => {

    const [ widerNav, setWiderNav ] = useState(false)

    function toggleBoolState(currState: boolean, setFunction:React.Dispatch<React.SetStateAction<boolean>> ): void {

        setFunction(!currState)

    }


    return(
        <>
            <TopNav />
            <LeftNav />
            <main className="main-container">

                {/* Content */}
                {children}
            </main>
      
        </>

    )

}

export default Layout;

