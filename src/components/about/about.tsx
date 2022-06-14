
import React, { FC } from "react";

import "./about.scss";

const ContactMe: FC = () => {

    return (

        <div className="aboutme-container">
            <div className="margin-auto">
                <h1 className="aboutme-header">Contact Me</h1>

                <form className="form" action="mailto:martmartez4@gmail.com" method="post" encType="text/plain">

                    <p className="form-row">
                        <label id="contact-form-name-label" htmlFor="contact-form-name" className="form-label">Name</label>
                        <input type="text" name="name" id="contact-form-name" aria-labelledby="contact-form-name-label" className="form-input" />
                    </p>

                    <p className="form-row">
                        <label id="contact-form-email-label" htmlFor="contact-form-email" className="form-label">Email</label>
                        <input type="email" name="email" id="contact-form-email" aria-labelledby="contact-form-email-label" className="form-input" />
                    </p>

                    <p className="form-row">
                        <label id="contact-form-message-label" htmlFor="contact-form-message" className="form-label">Messasge</label>
                        <textarea name="name" id="contact-form-message" aria-labelledby="contact-form-message-label" className="form-input" />
                    </p>
                    
                </form>
            </div>
            

        </div>
    )
}

export default ContactMe;


