import React from "react";

const ContactComponent = () => {
    return (
        <section className="contact">
            <div className="contact-container">
                <h2 className="section-title">Get in touch</h2>
                <h3 className="contact-question">Have a question or want to work together?</h3>
                <div className="form-wrapper">
                    <form className="form" action="https://getform.io/f/662dc2d3-7e9e-4d87-b89e-0206b0a7d513" method="POST">
                        <input className="form-input" type="text" placeholder="Name" name="name" required/>
                        <input className="form-input" type="email" placeholder="Email" name="email" required/>
                        <textarea className="form-textarea" placeholder="Your message" name="message" required/>
                        <button className="form-btn" type="submit">SUBMIT</button>
                    </form>
                </div>
            </div>
        </section>
    )
};

export default ContactComponent;