import React from "react";

const ContactComponent = () => {
    return (
        <section className="contact">
            <div className="contact-container">
                <h2 className="section-title">Get in touch</h2>
                <h3 className="contact-question">Have a question or want to work together?</h3>
                <form className="form">
                    <input className="form-input" type="text" placeholder="Name"/>
                    <input className="form-input" type="email" placeholder="Email"/>
                    <textarea className="form-textarea" placeholder="Your message"/>
                </form>
                <button className="form-btn" type="submit">SUBMIT</button>
            </div>
        </section>
    )
};

export default ContactComponent;