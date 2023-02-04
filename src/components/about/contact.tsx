
import React, { FC } from "react";

import ContactForm from "../contactForm/ContactForm";

import "./contact.scss";

const ContactMe: FC = () => {

    return (

        <div className="contactme-container" id="contactMe">
            <div className="margin-auto overflowHidden">
                <h1 className="contactme-header">Contact Me</h1>

                <ContactForm></ContactForm>
                
            </div>
            

        </div>
    )
}

export default ContactMe;


