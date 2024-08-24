import "./Contact.css";

function Contact() {
    return (
        <div id="contact" className="Contact-main-container">
            <div className="contact">
                <h1>CONTACT<span className="blue"> ME </span></h1>
                <p>Have a question or want to work together?</p>
            </div>
            <div className="contact-details">
            <p>WhatsApp: <span><a href="tel:+923162594406"> +92 3162594406</a></span></p>
            <p>Email: <span><a href="mailto:khaanayan81@gmail.com"> khaanayan81@gmail.com</a></span></p>
            <p>Linkedin: <span><a href="https://www.linkedin.com/in/ayan-farhad-887099297/"> Ayan Farhad</a></span></p>
            <p>Github: <span><a href="https://github.com/Ayan-farhad"> Ayan-farhad</a></span></p>
            </div>
        </div>
    )
}

export default Contact;