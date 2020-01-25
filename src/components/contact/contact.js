import React from "react";
import GithubIcon from "../../images/github.inline.svg";
import LinkedinIcon from "../../images/linkedin.inline.svg";


const ContactComponent = () => {

    return (
        <section className="contact" id="contact">
            <div className="contact-container">
                <h2 className="section-title">Let's get in touch</h2>
                <h3 className="contact-question">Have a question or want to work together?</h3>
                <div className="form-wrapper">
                    <form className="form" name="Visitor Contact Form" method="POST" data-netlify="true" netlify-honeypot="bot-field">
                        <input type="text" name="user-name" className="form-input" placeholder="Name" required />
                        <input type="email" name="user-email" className="form-input email" placeholder="Email" required />
                        <textarea className="form-textarea" placeholder="Your message" name="message" required />
                        <button className="form-btn" type="submit">SUBMIT</button>
                    </form>
                </div>
                <div className="contact-links">
                    <div className="contact-link">
                        <a className="contact-img-wrapper" href="https://github.com/sahas023" target="_blank" rel="noopener noreferrer">
                            <GithubIcon />
                        </a>
                    </div>
                    <div className="contact-link">
                        <a className="contact-img-wrapper" href="https://www.linkedin.com/in/nicolae-bumbu-473940159/" target="_blank" rel="noopener noreferrer">
                            <LinkedinIcon />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default ContactComponent;