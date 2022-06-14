



import React, { FC } from "react";

import "./svg.scss";

enum Mode {
    "One" = 1,
    "Two" = 2,
  }

type SvgProps = {

    classes?: string;
    toggleFunciton?: () => void;
    mode: 1 | 2; 
}

const ChevronSvg: FC<SvgProps> = ({ classes, toggleFunciton, mode }) => {

    return(

        <>

        {console.log(Mode[mode])}

        { Mode[mode] === "One" ?
                <svg version="1.1" id="Layer_1"  className={`svg ${classes? classes : ""}`}  onClick={(e => toggleFunciton? toggleFunciton() : "")} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                viewBox="0 0 511.999 511.999">
                    <path  d="M172.548,256.005L388.82,39.729c9.089-9.089,9.089-23.824,0-32.912s-23.824-9.089-32.912,0.002
                L123.18,239.551c-4.366,4.363-6.817,10.282-6.817,16.454c0,6.173,2.453,12.093,6.817,16.457l232.727,232.721
                c4.543,4.544,10.499,6.816,16.455,6.816s11.913-2.271,16.457-6.817c9.089-9.089,9.089-23.824,0-32.912L172.548,256.005z"/>
                </svg>
            :
            Mode[mode] === "Two" ?
        
            <svg version="1.1" id="Layer_1" className={`svg ${classes? classes : ""}`}  onClick={(e => toggleFunciton? toggleFunciton() : "")} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"viewBox="0 0 512 512" >
                    <path d="M361.891,242.03L187.347,9.31c-7.714-10.283-22.298-12.365-32.582-4.655
                        c-10.283,7.713-12.367,22.3-4.655,32.582l164.072,218.758L150.111,474.762c-7.713,10.282-5.627,24.871,4.655,32.582
                        c4.186,3.14,9.086,4.656,13.945,4.656c7.076,0,14.064-3.215,18.637-9.311l174.544-232.732
                        C368.097,261.683,368.097,250.304,361.891,242.03z"/>

            </svg>
                :
                "test" 
        }


        </>



    )

}

export default ChevronSvg;






