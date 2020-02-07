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
                        <input type="hidden" name="form-name" value="Visitor Contact Form" />
                        <div>
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="user-name" className="form-input" placeholder="Name" required />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="user-email" className="form-input email" placeholder="Email" required />
                        </div>
                        <div>
                            <label htmlFor="message">Your message</label>
                            <textarea id="message" className="form-textarea" placeholder="Your message" name="message" required />
                        </div>
                        <button className="form-btn" type="submit">SUBMIT</button>
                    </form>
                </div>
                <div className="contact-links">
                    <div className="contact-link">
                        <a className="contact-img-wrapper" href="https://github.com/nbumbu" target="_blank" rel="noopener noreferrer">
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