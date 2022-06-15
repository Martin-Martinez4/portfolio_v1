
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
const  ContactForm= () =>  {
  const [state, handleSubmit] = useForm(`${process.env.GATSBY_FORMSPREE}`);
  if (state.succeeded) {
      return <p>Thank you for your consideration!</p>;
  }
  return (
      <form onSubmit={handleSubmit}>

        <p className="form-row">

            <label className="form-label" htmlFor="email">
                Email Address
            </label>
            <input
                className="form-input"
                id="email"
                type="email" 
                name="email"
                placeholder="Email"
            />
            <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
            />
        </p>

        <p className="form-row">
            <label className="form-label">
                Subject:
            </label>
            <input type="text" id="subject" name="subject" placeholder="Subject" />

            <ValidationError 
                prefix="Subject" 
                field="subject"
                errors={state.errors}
            />
        </p>

        <p className="form-row">

        <label className="form-label">
                            Your message:

            <textarea
                className="form-input"
                id="message"
                name="message"
                placeholder="Your Message"
            />
            <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
            />
        </label>
      </p>
      <button className="btn btn-primary grow" type="submit" disabled={state.submitting}>
        Send Email
      </button>
    </form>
  );
}

export default ContactForm;







