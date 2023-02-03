
import React, { FC } from "react";

import ContactForm from "../contactForm/ContactForm";

import "./about.scss";

const ContactMe: FC = () => {

    return (

        <div className="aboutme-container" id="contactMe">
            <div className="margin-auto overflowHidden">
                <h1 className="aboutme-header">Contact Me</h1>

                <ContactForm></ContactForm>
                
            </div>
            

        </div>
    )
}

export default ContactMe;


