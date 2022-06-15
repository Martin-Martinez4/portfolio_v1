
import React, { FC } from "react";

import ContactForm from "../contactForm/ContactForm";

import "./about.scss";

const ContactMe: FC = () => {

    return (

        <div className="aboutme-container" id="contactMe">
            <div className="margin-auto">
                <h1 className="aboutme-header">Contact Me</h1>

                <ContactForm></ContactForm>


                    {/* <form
                        action=`https://formspree.io/f/${process.env.GATSBY_FORMSPREE}`
                        method="POST"
                        >
                         <p className="form-row">
                            <label className="form-label">
                                Your email:
                                <input className="form-input" type="email" name="email" placeholder="Your email" />
                            </label>
                        </p>
                         <p className="form-row">
                            <label className="form-label">
                                Subject:
                                <input name="subject" placeholder="Subject" />
                            </label>
                        </p>
                        <p className="form-row">
                        <label className="form-label">
                            Your message:
                            <textarea className="form-input" name="message" placeholder="Message"></textarea>
                        </label>
                        </p> */}
                        {/* <!-- your other form fields go here --> */}
                        {/* <button className="btn btn-primary grow" type="submit">Send Email</button>
                        </form> */}
                
            </div>
            

        </div>
    )
}

export default ContactMe;


