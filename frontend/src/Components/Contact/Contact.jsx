import React from "react";
import './Contact.css';


function ContactSection(){
    return(
    <section className="contact-section">
        <div className="contact-content">
            <h2>Contact Us</h2>
            <p>Have questions or feedback? Feel free to reach out!</p>
            <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
            </form>
        </div>
    </section>
    );
}

export default ContactSection;