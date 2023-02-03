
import React, { FC } from "react";


import "./layout.scss";


import TopNav from "./TopNav";
import LeftNav from "./LeftNav";


type Props = {
    children?: React.ReactNode
};

const Layout: FC<Props> = ({ children }) => {



    return(
        <>
            <span className='nav top-nav2'></span>
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

